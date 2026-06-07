export type ReportIssue = {
  rule: string;
  impact: string;
  message: string;
  element: string;
  kind: "error" | "warning" | "pass";
  instances: number;
  pages: number;
};

export type IssueTypeSlice = {
  label: string;
  count: number;
  color: string;
};

export type ParsedAccessibilityReportContent = {
  pageUrl: string | null;
  generatedAt: string | null;
  score: number | null;
  errors: number;
  warnings: number;
  passes: number;
  totalIssues: number;
  checksRun: number;
  pagesScanned: number;
  errorItems: ReportIssue[];
  warningItems: ReportIssue[];
  passItems: ReportIssue[];
  topIssues: ReportIssue[];
  issueTypes: IssueTypeSlice[];
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

const EMPTY_RESULT: ParsedAccessibilityReportContent = {
  pageUrl: null,
  generatedAt: null,
  score: null,
  errors: 0,
  warnings: 0,
  passes: 0,
  totalIssues: 0,
  checksRun: 0,
  pagesScanned: 1,
  errorItems: [],
  warningItems: [],
  passItems: [],
  topIssues: [],
  issueTypes: [],
  scoreLabel: "Unknown",
  scoreDescription: "No accessibility report data was found.",
  wcagLevel: "WCAG 2.1",
  conformance: { a: 0, aa: 0, aaa: 0 },
};

/**
 * Parses the full `content` column from a saved accessibility report asset
 * (plain-text or markdown) into structured data for the detail dashboard UI.
 */
export function parseAccessibilityReportContent(
  content: string | null | undefined,
): ParsedAccessibilityReportContent {
  const text = String(content ?? "").trim();
  if (!text) return { ...EMPTY_RESULT };

  const isMarkdown = /^#\s+Accessibility Audit Report/m.test(text) || /^##\s+Errors/m.test(text);
  const isPlain = /===\s*ERRORS\s*===/i.test(text) || /^ACCESSIBILITY AUDIT REPORT/m.test(text);

  const pageUrl = extractPageUrl(text);
  const generatedAt = extractGeneratedAt(text);
  const headerScore = extractNumber(text, /\*\*Score:\*\*\s*(\d+)\s*\/\s*100/i, /Score\s*:\s*(\d+)\s*\/\s*100/i);
  const headerErrors = extractNumber(text, /\*\*Errors:\*\*\s*(\d+)/i, /Errors\s*:\s*(\d+)/i);
  const headerWarnings = extractNumber(text, /\*\*Warnings:\*\*\s*(\d+)/i, /Warnings\s*:\s*(\d+)/i);
  const headerPasses = extractNumber(text, /\*\*Passes:\*\*\s*(\d+)/i, /Passes\s*:\s*(\d+)/i);

  let errorItems: ReportIssue[] = [];
  let warningItems: ReportIssue[] = [];
  let passItems: ReportIssue[] = [];

  if (isMarkdown) {
    const errorsBlock = extractSection(text, /^##\s+Errors\s*$/im, /^##\s+Warnings\s*$/im);
    const warningsBlock = extractSection(text, /^##\s+Warnings\s*$/im, /^##\s+Passes\s*$/im);
    const passesBlock = extractSection(text, /^##\s+Passes\s*$/im, null);
    errorItems = parseMarkdownIssues(errorsBlock, "error");
    warningItems = parseMarkdownIssues(warningsBlock, "warning");
    passItems = parseMarkdownPasses(passesBlock);
  } else if (isPlain) {
    const errorsBlock = extractSection(text, /^===\s*ERRORS\s*===$/im, /^===\s*WARNINGS\s*===$/im);
    const warningsBlock = extractSection(text, /^===\s*WARNINGS\s*===$/im, /^===\s*PASSES\s*===$/im);
    const passesBlock = extractSection(text, /^===\s*PASSES\s*===$/im, null);
    errorItems = parsePlainIssues(errorsBlock, "error");
    warningItems = parsePlainIssues(warningsBlock, "warning");
    passItems = parsePlainPasses(passesBlock);
  } else {
    errorItems = [
      ...parseMarkdownIssues(extractLooseSection(text, "errors"), "error"),
      ...parsePlainIssues(extractLooseSection(text, "errors"), "error"),
    ];
    warningItems = [
      ...parseMarkdownIssues(extractLooseSection(text, "warnings"), "warning"),
      ...parsePlainIssues(extractLooseSection(text, "warnings"), "warning"),
    ];
    passItems = [
      ...parseMarkdownPasses(extractLooseSection(text, "passes")),
      ...parsePlainPasses(extractLooseSection(text, "passes")),
    ];
  }

  const errors = headerErrors ?? errorItems.length;
  const warnings = headerWarnings ?? warningItems.length;
  const passes = headerPasses ?? passItems.length;
  const totalIssues = errors + warnings;
  const checksRun = totalIssues + passes;
  const score = headerScore;
  const allActionable = [...errorItems, ...warningItems];
  const issueTypes = allActionable.length
    ? buildIssueTypeSlices(allActionable)
    : buildFallbackIssueTypes(errors, warnings);
  const topIssues = buildTopIssues(allActionable);
  const { scoreLabel, scoreDescription, wcagLevel } = getScoreMeta(score ?? 0);
  const conformance = buildConformance(score ?? 0);

  return {
    pageUrl,
    generatedAt,
    score,
    errors,
    warnings,
    passes,
    totalIssues,
    checksRun: checksRun > 0 ? checksRun : 0,
    pagesScanned: 1,
    errorItems,
    warningItems,
    passItems,
    topIssues,
    issueTypes,
    scoreLabel,
    scoreDescription,
    wcagLevel,
    conformance,
  };
}

function extractPageUrl(text: string): string | null {
  return (
    matchString(text, /\*\*URL:\*\*\s*(.+)/i) ??
    matchString(text, /URL\s*:\s*(\S+)/i) ??
    matchString(text, /-\s*\*\*URL:\*\*\s*(.+)/i)
  );
}

function extractGeneratedAt(text: string): string | null {
  return (
    matchString(text, /\*\*Generated:\*\*\s*(.+)/i) ??
    matchString(text, /Generated\s*:\s*(.+)/i) ??
    matchString(text, /-\s*\*\*Generated:\*\*\s*(.+)/i)
  );
}

function extractNumber(
  text: string,
  markdownPattern: RegExp,
  plainPattern: RegExp,
): number | null {
  return matchNumber(text, markdownPattern) ?? matchNumber(text, plainPattern);
}

function extractSection(
  text: string,
  startPattern: RegExp,
  endPattern: RegExp | null,
): string {
  const startMatch = text.match(startPattern);
  if (!startMatch || startMatch.index == null) return "";
  const afterStart = text.slice(startMatch.index + startMatch[0].length).trim();
  if (!endPattern) return afterStart;
  const endMatch = afterStart.match(endPattern);
  return endMatch && endMatch.index != null
    ? afterStart.slice(0, endMatch.index).trim()
    : afterStart;
}

function extractLooseSection(text: string, kind: "errors" | "warnings" | "passes"): string {
  const patterns: Record<typeof kind, RegExp[]> = {
    errors: [/^##\s+Errors/im, /^===\s*ERRORS\s*===$/im],
    warnings: [/^##\s+Warnings/im, /^===\s*WARNINGS\s*===$/im],
    passes: [/^##\s+Passes/im, /^===\s*PASSES\s*===$/im],
  };
  for (const start of patterns[kind]) {
    const block = extractSection(
      text,
      start,
      kind === "errors"
        ? /^##\s+Warnings|^===\s*WARNINGS/im
        : kind === "warnings"
          ? /^##\s+Passes|^===\s*PASSES/im
          : null,
    );
    if (block) return block;
  }
  return "";
}

function isEmptySection(block: string): boolean {
  const trimmed = block.trim();
  return !trimmed || /^_?none_?$/i.test(trimmed) || /^none$/i.test(trimmed);
}

function parseMarkdownIssues(block: string, kind: "error" | "warning"): ReportIssue[] {
  if (isEmptySection(block)) return [];
  const chunks = block.split(/^###\s+/m).filter(Boolean);
  return chunks.map((chunk) => {
    const lines = chunk.trim().split("\n");
    const header = lines[0] || "";
    const headerMatch = header.match(/WCAG\s*([^\s·]+)\s*[·•]\s*(\w+)/i);
    const rule = headerMatch?.[1]?.trim() || "—";
    const impact = normalizeImpact(headerMatch?.[2] ?? "moderate");
    const message =
      lines
        .slice(1)
        .map((l) => l.trim())
        .find((l) => l && !/^\*\*Element:/i.test(l) && !l.startsWith("**Element:")) ??
      (header.replace(/^WCAG\s*/i, "").trim() || "Untitled issue");
    const elementLine = lines.find((l) => /^\*\*Element:\*\*/i.test(l.trim()));
    const element = elementLine?.replace(/^\*\*Element:\*\*\s*/i, "").trim() ?? "";
    return makeIssue({ rule, impact, message, element, kind });
  });
}

function parseMarkdownPasses(block: string): ReportIssue[] {
  if (isEmptySection(block)) return [];
  return block
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.startsWith("-"))
    .map((line) => {
      const cleaned = line.replace(/^-\s*/, "").replace(/\*\*/g, "");
      const m = cleaned.match(/\[WCAG\s*([^\]]+)\]\s*(.+)/i);
      return makeIssue({
        rule: m?.[1]?.trim() || "—",
        impact: "pass",
        message: m?.[2]?.trim() || cleaned || "Pass",
        element: "",
        kind: "pass",
      });
    });
}

function parsePlainIssues(block: string, kind: "error" | "warning"): ReportIssue[] {
  if (isEmptySection(block)) return [];
  const items: ReportIssue[] = [];
  const lines = block.split("\n");
  let current: Omit<ReportIssue, "instances" | "pages"> | null = null;

  for (const raw of lines) {
    const line = raw.trim();
    if (!line) continue;

    const issueMatch = line.match(/^\[WCAG\s*([^\]]+)\]\s*\[(\w+)\]\s*(.+)/i);
    if (issueMatch) {
      if (current) items.push(makeIssue({ ...current, kind }));
      current = {
        rule: issueMatch[1].trim() || "—",
        impact: normalizeImpact(issueMatch[2]),
        message: issueMatch[3].trim() || "Untitled issue",
        element: "",
        kind,
      };
      continue;
    }

    const elementMatch = line.match(/^Element:\s*(.*)$/i);
    if (elementMatch && current) {
      current.element = elementMatch[1].trim();
    }
  }

  if (current) items.push(makeIssue({ ...current, kind }));
  return items;
}

function parsePlainPasses(block: string): ReportIssue[] {
  if (isEmptySection(block)) return [];
  return block
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => /^\[WCAG/i.test(line))
    .map((line) => {
      const m = line.match(/\[WCAG\s*([^\]]+)\]\s*(.+)/i);
      return makeIssue({
        rule: m?.[1]?.trim() || "—",
        impact: "pass",
        message: m?.[2]?.trim() || line,
        element: "",
        kind: "pass",
      });
    });
}

function makeIssue(
  input: Omit<ReportIssue, "instances" | "pages">,
): ReportIssue {
  return {
    ...input,
    rule: input.rule || "—",
    impact: input.impact || "moderate",
    message: input.message || "Untitled issue",
    element: input.element || "",
    instances: 1,
    pages: 1,
  };
}

function normalizeImpact(raw: string): string {
  return raw.trim().toLowerCase();
}

function classifyIssueType(issue: ReportIssue): string {
  const blob = `${issue.rule} ${issue.message} ${issue.element}`.toLowerCase();
  if (/1\.1|alt|image|figure|non-text/.test(blob)) return "Missing Alt Text";
  if (/1\.4\.3|contrast|color/.test(blob)) return "Low Contrast";
  if (/label|input|form|2\.4\.6|2\.5|name-role/.test(blob)) return "Missing Label";
  if (/heading|1\.3|h1|h2|structure|info-and-relationship/.test(blob)) return "Heading Structure";
  if (/keyboard|2\.1|focus|tab|bypass/.test(blob)) return "Keyboard Navigation";
  if (/aria|4\.1|role/.test(blob)) return "ARIA Issues";
  if (/link|2\.4\.4|purpose/.test(blob)) return "Link Issues";
  if (/language|3\.1/.test(blob)) return "Language";
  return "Other Issues";
}

function buildIssueTypeSlices(issues: ReportIssue[]): IssueTypeSlice[] {
  if (!issues.length) return [];
  const map = new Map<string, number>();
  for (const issue of issues) {
    const label = classifyIssueType(issue);
    map.set(label, (map.get(label) ?? 0) + 1);
  }
  return Array.from(map.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, 6)
    .map(([label, count], index) => ({
      label,
      count,
      color: ISSUE_TYPE_COLORS[index % ISSUE_TYPE_COLORS.length],
    }));
}

function buildTopIssues(issues: ReportIssue[], limit = 5): ReportIssue[] {
  if (!issues.length) return [];
  const map = new Map<string, ReportIssue>();

  for (const issue of issues) {
    const key = `${issue.kind}|${issue.rule}|${issue.message}`;
    const existing = map.get(key);
    if (existing) {
      existing.instances += 1;
    } else {
      map.set(key, { ...issue, instances: 1, pages: 1 });
    }
  }

  return Array.from(map.values())
    .sort(
      (a, b) =>
        impactWeight(b.impact) - impactWeight(a.impact) ||
        b.instances - a.instances,
    )
    .slice(0, limit);
}

/** Fallback donut slices from summary counts when individual issues could not be parsed. */
function buildFallbackIssueTypes(errors: number, warnings: number): IssueTypeSlice[] {
  const slices: IssueTypeSlice[] = [];
  if (errors > 0) {
    slices.push({ label: "Errors (A)", count: errors, color: "#ef4444" });
  }
  if (warnings > 0) {
    slices.push({ label: "Warnings (AA)", count: warnings, color: "#eab308" });
  }
  return slices;
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
  if (score > 0) {
    return {
      scoreLabel: "Needs work",
      scoreDescription: "Critical accessibility barriers were detected on this page.",
      wcagLevel: "WCAG 2.1",
    };
  }
  return {
    scoreLabel: "Unknown",
    scoreDescription: "Score could not be determined from this report.",
    wcagLevel: "WCAG 2.1",
  };
}

function buildConformance(score: number) {
  return {
    a: Math.min(100, Math.max(0, Math.round(score + 8))),
    aa: Math.min(100, Math.max(0, score)),
    aaa: Math.min(100, Math.max(0, Math.round(score * 0.62))),
  };
}

function matchNumber(text: string, pattern: RegExp): number | null {
  const m = text.match(pattern);
  if (!m) return null;
  const n = Number(m[1]);
  return Number.isFinite(n) ? n : null;
}

function matchString(text: string, pattern: RegExp): string | null {
  const m = text.match(pattern);
  if (!m) return null;
  const s = m[1].trim();
  return s && s.toLowerCase() !== "unknown" ? s : null;
}
