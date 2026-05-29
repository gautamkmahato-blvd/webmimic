type EvidencePackage = {
  meta?: {
    url?: string;
    title?: string;
    capturedAt?: string;
    pageDimensions?: { width?: number; height?: number };
  };
  rawTokens?: { meta?: { title?: string; counts?: Record<string, number> } };
  authorTokens?: Record<string, string>;
  elementSamples?: unknown[];
  interactive?: { buttons?: unknown[]; links?: unknown[]; inputs?: unknown[] };
  typography?: unknown[];
  structure?: unknown[];
  cssVariables?: { fromRoot?: Record<string, string>; referenced?: Record<string, number> };
  thirdPartyFlags?: unknown[];
  contrastMatrix?: Array<{ textToken: string; bgToken: string; ratio: number; wcag: string }>;
  screenshots?: {
    desktop?: Array<{ url?: string }>;
    mobile?: Array<{ url?: string }>;
    note?: string | null;
  };
};

function esc(s: unknown): string {
  return String(s ?? '').replace(/\|/g, '\\|').replace(/\n/g, ' ');
}

/** Build curated markdown from an evidence package (server-side; LLM can replace later). */
export function buildCuratedSpecMarkdown(pkg: EvidencePackage): string {
  const meta = pkg.meta || {};
  const title = meta.title || pkg.rawTokens?.meta?.title || 'Design System';
  const counts = pkg.rawTokens?.meta?.counts || {};
  const lines: string[] = [
    `# ${title} — Curated Design Spec`,
    '',
    `**Source:** ${esc(meta.url || '—')}  `,
    `**Captured:** ${esc(meta.capturedAt || new Date().toISOString())}  `,
    '',
    '> Auto-curated from Webmimic evidence package. Semantic interpretation is intentionally minimal on the server; replace this route with an LLM when ready.',
    '',
    '---',
    '',
    '## Page Overview',
    '',
    '| Property | Value |',
    '| --- | --- |',
    `| Page width | ${meta.pageDimensions?.width ?? '—'}px |`,
    `| Page height | ${meta.pageDimensions?.height ?? '—'}px |`,
    `| Element samples | ${(pkg.elementSamples || []).length} |`,
    `| Buttons | ${(pkg.interactive?.buttons || []).length} |`,
    `| Links | ${(pkg.interactive?.links || []).length} |`,
    `| Inputs | ${(pkg.interactive?.inputs || []).length} |`,
    `| Structure nodes | ${(pkg.structure || []).length} |`,
    `| Third-party regions excluded | ${(pkg.thirdPartyFlags || []).length} |`,
    '',
    '---',
    '',
    '## Token Counts (raw extraction)',
    '',
    '| Category | Count |',
    '| --- | --- |',
    ...Object.entries(counts).map(([k, v]) => `| ${esc(k)} | ${esc(v)} |`),
    '',
    '---',
    '',
    '## Author CSS Variables (:root)',
    '',
  ];

  const authorEntries = Object.entries(pkg.authorTokens || {});
  if (authorEntries.length) {
    lines.push('| Variable | Value |', '| --- | --- |');
    authorEntries.slice(0, 40).forEach(([k, v]) => {
      lines.push(`| \`${esc(k)}\` | \`${esc(v)}\` |`);
    });
    if (authorEntries.length > 40) lines.push('', `_…and ${authorEntries.length - 40} more._`);
  } else {
    lines.push('_No author tokens detected._');
  }

  lines.push('', '---', '', '## Contrast Matrix (top pairs)', '', '| Text | Background | Ratio | WCAG |', '| --- | --- | --- | --- |');
  (pkg.contrastMatrix || []).slice(0, 20).forEach((row) => {
    lines.push(`| \`${esc(row.textToken)}\` | \`${esc(row.bgToken)}\` | ${row.ratio}:1 | ${esc(row.wcag)} |`);
  });
  if (!(pkg.contrastMatrix || []).length) lines.push('| — | — | — | — |');

  lines.push('', '---', '', '## Screenshots', '');
  const desktop = pkg.screenshots?.desktop || [];
  const mobile = pkg.screenshots?.mobile || [];
  if (desktop.length || mobile.length) {
    desktop.forEach((t, i) => {
      if (t.url) lines.push(`- Desktop tile ${i + 1}: ${t.url}`);
    });
    mobile.forEach((t, i) => {
      if (t.url) lines.push(`- Mobile tile ${i + 1}: ${t.url}`);
    });
  } else {
    lines.push(pkg.screenshots?.note ? esc(pkg.screenshots.note) : '_No screenshot URLs._');
  }

  lines.push('', '---', '', '## Typography Samples', '');
  (pkg.typography || []).slice(0, 15).forEach((t: Record<string, unknown>) => {
    lines.push(
      `- **${esc(t.fontFamily)}** ${esc(t.fontSize)} / weight ${esc(t.fontWeight)} — sample: _${esc(t.sample)}_`
    );
  });

  lines.push('', '---', '', '## Structural Skeleton (depth ≤ 2)', '');
  (pkg.structure || []).slice(0, 12).forEach((node: Record<string, unknown>) => {
    lines.push(
      `- \`${esc(node.selector)}\` (${esc(node.tag)}, ${esc(node.rect && (node.rect as { height: number }).height)}px tall) — ${esc(node.textPreview)}`
    );
  });

  lines.push('');
  return lines.join('\n');
}
