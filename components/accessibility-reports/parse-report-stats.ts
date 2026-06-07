export type AccessibilityReportStats = {
  score: number | null;
  errors: number | null;
  warnings: number | null;
  passes: number | null;
  pageUrl: string | null;
};

export function parseAccessibilityReportStats(
  content: string | null | undefined,
): AccessibilityReportStats {
  if (!content) {
    return {
      score: null,
      errors: null,
      warnings: null,
      passes: null,
      pageUrl: null,
    };
  }

  const text = String(content);

  const score =
    matchNumber(text, /\*\*Score:\*\*\s*(\d+)\s*\/\s*100/i) ??
    matchNumber(text, /Score\s*:\s*(\d+)\s*\/\s*100/i);

  const errors =
    matchNumber(text, /\*\*Errors:\*\*\s*(\d+)/i) ??
    matchNumber(text, /Errors\s*:\s*(\d+)/i);

  const warnings =
    matchNumber(text, /\*\*Warnings:\*\*\s*(\d+)/i) ??
    matchNumber(text, /Warnings\s*:\s*(\d+)/i);

  const passes =
    matchNumber(text, /\*\*Passes:\*\*\s*(\d+)/i) ??
    matchNumber(text, /Passes\s*:\s*(\d+)/i);

  const pageUrl =
    matchString(text, /\*\*URL:\*\*\s*(.+)/i) ??
    matchString(text, /URL\s*:\s*(.+)/i);

  return { score, errors, warnings, passes, pageUrl };
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
  return s || null;
}

export function scoreColor(score: number | null): string {
  if (score == null) return "#a3a3a3";
  if (score >= 70) return "#16a34a";
  if (score >= 50) return "#d97706";
  return "#dc2626";
}
