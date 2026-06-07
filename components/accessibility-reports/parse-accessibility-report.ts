import {
  parseAccessibilityReportStats,
  scoreColor,
  type AccessibilityReportStats,
} from "./parse-report-stats";

export type ReportIssue = {
  rule: string;
  impact: string;
  message: string;
  element: string;
  kind: "error" | "warning" | "pass";
};

export type IssueTypeSlice = {
  label: string;
  count: number;
  color: string;
};

export type ParsedAccessibilityReport = AccessibilityReportStats & {
  generatedAt: string | null;
  errorItems: ReportIssue[];
  warningItems: ReportIssue[];
  passItems: ReportIssue[];
  totalIssues: number;
  issueTypes: IssueTypeSlice[];
  topIssues: ReportIssue[];
  scoreLabel: string;
  scoreDescription: string;
  wcagLevel: string;
  conformance: { a: number; aa: number; aaa: number };
};

const ISSUE_TYPE_COLORS = [
  "#ef4444",
  "#f97316",
  "#eab308",
  "#3b82f6",
  "#8b5cf6",
  "#64748b",
];

export function parseAccessibilityReport(
  content: string | null | undefined,
): ParsedAccessibilityReport {
  const stats = parseAccessibilityReportStats(content);
  const text = String(content || "");

  const generatedAt =
    matchString(text, /\*\*Generated:\*\*\s*(.+)/i) ??
    matchString(text, /Generated\s*:\s*(.+)/i);

  const { errors, warnings, passes } = parseIssueSections(text);
  const allIssues = [...errors, ...warnings];
  const totalIssues = allIssues.length;

  const issueTypes = buildIssueTypeSlices(allIssues);
  const topIssues = [...errors, ...warnings]
    .sort((a, b) => impactWeight(b.impact) - impactWeight(a.impact))
    .slice(0, 5);

  const score = stats.score ?? 0;
  const { scoreLabel, scoreDescription, wcagLevel } = getScoreMeta(score);
  const conformance = {
    a: Math.min(100, Math.round(score + 8)),
    aa: Math.min(100, score),
    aaa: Math.max(0, Math.round(score * 0.62)),
  };

  return {
    ...stats,
    generatedAt,
    errorItems: errors,
    warningItems: warnings,
    passItems: passes,
    totalIssues,
    issueTypes,
    topIssues,
    scoreLabel,
    scoreDescription,
    wcagLevel,
    conformance,
  };
}

function parseIssueSections(text: string) {
  const errors: ReportIssue[] = [];
  const warnings: ReportIssue[] = [];
  const passes: ReportIssue[] = [];

  if (/## Errors|=== ERRORS ===/i.test(text)) {
    const errorsBlock = extractSection(text, /## Errors/i, /## Warnings/i);
    const warningsBlock = extractSection(text, /## Warnings/i, /## Passes/i);
    const passesBlock = extractSection(text, /## Passes/i, null);

    errors.push(...parseMarkdownIssues(errorsBlock, "error"));
    warnings.push(...parseMarkdownIssues(warningsBlock, "warning"));
    passes.push(...parseMarkdownPasses(passesBlock));
  } else {
    const errorsBlock = extractSection(text, /=== ERRORS ===/i, /=== WARNINGS ===/i);
    const warningsBlock = extractSection(text, /=== WARNINGS ===/i, /=== PASSES ===/i);
    const passesBlock = extractSection(text, /=== PASSES ===/i, null);

    errors.push(...parsePlainIssues(errorsBlock, "error"));
    warnings.push(...parsePlainIssues(warningsBlock, "warning"));
    passes.push(...parsePlainPasses(passesBlock));
  }

  return { errors, warnings, passes };
}

function extractSection(
  text: string,
  startPattern: RegExp,
  endPattern: RegExp | null,
): string {
  const start = text.search(startPattern);
  if (start < 0) return "";
  const afterStart = text.slice(start).replace(startPattern, "").trim();
  if (!endPattern) return afterStart;
  const end = afterStart.search(endPattern);
  return end < 0 ? afterStart : afterStart.slice(0, end).trim();
}

function parseMarkdownIssues(block: string, kind: "error" | "warning"): ReportIssue[] {
  if (!block || /^_?none_?$/i.test(block.trim())) return [];
  const chunks = block.split(/^###\s+/m).filter(Boolean);
  return chunks.map((chunk) => {
    const lines = chunk.trim().split("\n");
    const header = lines[0] || "";
    const headerMatch = header.match(/WCAG\s*([^\s·]+)\s*·\s*(\w+)/i);
    const rule = headerMatch?.[1] ?? "—";
    const impact = headerMatch?.[2] ?? "moderate";
    const message = lines.slice(1).find((l) => l.trim() && !l.startsWith("**Element"))?.trim() ?? header;
    const elementLine = lines.find((l) => /^\*\*Element:\*\*/i.test(l));
    const element = elementLine?.replace(/^\*\*Element:\*\*\s*/i, "").trim() ?? "";
    return { rule, impact, message, element, kind };
  });
}

function parseMarkdownPasses(block: string): ReportIssue[] {
  if (!block || /^_?none_?$/i.test(block.trim())) return [];
  return block
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.startsWith("-"))
    .map((line) => {
      const m = line.match(/\[WCAG\s*([^\]]+)\]\s*(.+)/i);
      return {
        rule: m?.[1]?.trim() ?? "—",
        impact: "pass",
        message: m?.[2]?.trim() ?? line,
        element: "",
        kind: "pass" as const,
      };
    });
}

function parsePlainIssues(block: string, kind: "error" | "warning"): ReportIssue[] {
  if (!block || /^none$/i.test(block.trim())) return [];
  const items: ReportIssue[] = [];
  const lines = block.split("\n");
  let current: ReportIssue | null = null;

  for (const raw of lines) {
    const line = raw.trim();
    if (!line) continue;
    const issueMatch = line.match(/^\[WCAG\s*([^\]]+)\]\s*\[(\w+)\]\s*(.+)/i);
    if (issueMatch) {
      if (current) items.push(current);
      current = {
        rule: issueMatch[1].trim(),
        impact: issueMatch[2].trim(),
        message: issueMatch[3].trim(),
        element: "",
        kind,
      };
      continue;
    }
    if (/^Element:/i.test(line) && current) {
      current.element = line.replace(/^Element:\s*/i, "").trim();
    }
  }
  if (current) items.push(current);
  return items;
}

function parsePlainPasses(block: string): ReportIssue[] {
  if (!block || /^none$/i.test(block.trim())) return [];
  return block
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.startsWith("[WCAG"))
    .map((line) => {
      const m = line.match(/\[WCAG\s*([^\]]+)\]\s*(.+)/i);
      return {
        rule: m?.[1]?.trim() ?? "—",
        impact: "pass",
        message: m?.[2]?.trim() ?? line,
        element: "",
        kind: "pass" as const,
      };
    });
}

function classifyIssueType(issue: ReportIssue): string {
  const blob = `${issue.rule} ${issue.message} ${issue.element}`.toLowerCase();
  if (/1\.1|alt|image|figure/.test(blob)) return "Missing Alt Text";
  if (/1\.4|contrast|color/.test(blob)) return "Low Contrast";
  if (/label|input|form|2\.4\.6|2\.5/.test(blob)) return "Missing Label";
  if (/heading|1\.3|h1|h2|structure/.test(blob)) return "Heading Structure";
  if (/keyboard|2\.1|focus|tab/.test(blob)) return "Keyboard Navigation";
  if (/aria|4\.1|role/.test(blob)) return "ARIA Issues";
  return "Other Issues";
}

function buildIssueTypeSlices(issues: ReportIssue[]): IssueTypeSlice[] {
  const map = new Map<string, number>();
  for (const issue of issues) {
    const label = classifyIssueType(issue);
    map.set(label, (map.get(label) ?? 0) + 1);
  }
  const total = issues.length || 1;
  return Array.from(map.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([label, count], index) => ({
      label,
      count,
      color: ISSUE_TYPE_COLORS[index % ISSUE_TYPE_COLORS.length],
    }));
}

function impactWeight(impact: string): number {
  const i = impact.toLowerCase();
  if (i === "critical") return 4;
  if (i === "serious" || i === "high") return 3;
  if (i === "moderate" || i === "medium") return 2;
  return 1;
}

function getScoreMeta(score: number) {
  if (score >= 70) {
    return {
      scoreLabel: "Good",
      scoreDescription: "Your page is accessible with some improvements.",
      wcagLevel: "WCAG 2.1 AA",
    };
  }
  if (score >= 50) {
    return {
      scoreLabel: "Fair",
      scoreDescription: "Several accessibility issues should be addressed.",
      wcagLevel: "WCAG 2.1 A",
    };
  }
  return {
    scoreLabel: "Needs work",
    scoreDescription: "Critical accessibility barriers were detected on this page.",
    wcagLevel: "WCAG 2.1",
  };
}

function matchString(text: string, pattern: RegExp): string | null {
  const m = text.match(pattern);
  if (!m) return null;
  const s = m[1].trim();
  return s || null;
}

export { scoreColor };
