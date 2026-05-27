import { parseUiInspectorMd, type ParsedUiInspectorDesign, type TokenMap } from './parseUiInspectorMd';

export type GoogleDesignMdResult = {
  designMd: string;
  meta: {
    name: string;
    source?: string;
    colorCount: number;
    typographyCount: number;
    spacingCount: number;
    roundedCount: number;
  };
};

type TypographyToken = {
  fontFamily?: string;
  fontSize?: string;
  fontWeight?: string;
  lineHeight?: string;
  letterSpacing?: string;
};

function parsePx(value: string): number {
  const n = parseFloat(value.replace(/px$/, ''));
  return Number.isFinite(n) ? n : 0;
}

function quoteColor(value: string): string {
  if (value.startsWith('"') || value.startsWith("'")) return value;
  return `"${value}"`;
}

function yamlScalar(value: string | number): string {
  if (typeof value === 'number') return String(value);
  if (/^[#][0-9A-Fa-f]{3,8}$/.test(value)) return quoteColor(value);
  if (/^[\d.]+px$/.test(value) || /^[\d.]+rem$/.test(value) || /^[\d.]+em$/.test(value)) return value;
  if (/^rgba?\(/.test(value)) return quoteColor(value);
  if (/^\{[^}]+\}$/.test(value)) return quoteColor(value);
  if (/^[\w.-]+$/.test(value)) return value;
  return quoteColor(value);
}

function emitYamlObject(obj: Record<string, unknown>, indent = 0): string {
  const pad = '  '.repeat(indent);
  const lines: string[] = [];

  for (const [key, value] of Object.entries(obj)) {
    if (value === undefined || value === null) continue;
    if (typeof value === 'object' && !Array.isArray(value)) {
      lines.push(`${pad}${key}:`);
      lines.push(emitYamlObject(value as Record<string, unknown>, indent + 1));
      continue;
    }
    lines.push(`${pad}${key}: ${yamlScalar(String(value))}`);
  }

  return lines.join('\n');
}

function usageScore(description?: string): number {
  if (!description) return 0;
  const match = description.match(/×(\d+)/);
  return match ? Number(match[1]) : 0;
}

function pickSemanticColors(parsed: ParsedUiInspectorDesign): TokenMap {
  const colors = { ...parsed.colors };
  const semantic: TokenMap = {};

  const entries = Object.entries(colors).map(([name, value]) => ({
    name,
    value,
    description: parsed.colorDescriptions[name],
    score: usageScore(parsed.colorDescriptions[name]),
    role: parsed.colorDescriptions[name]?.split('·')[0]?.trim().toLowerCase() ?? '',
  }));

  const accent =
    entries.find((e) => /cyan|brand|accent|primary/i.test(e.name) && !/dark|light/i.test(e.name)) ??
    entries.find((e) => e.role === 'background' && !/gray|grey|black|white/i.test(e.name));

  const primaryBg =
    entries
      .filter((e) => e.role.includes('background'))
      .sort((a, b) => b.score - a.score)[0] ??
    entries.find((e) => /dark-gray|black|neutral/i.test(e.name));

  const secondary =
    entries.find((e) => /mid-gray|secondary|muted|caption/i.test(e.name)) ??
    entries.filter((e) => e.role.includes('text')).sort((a, b) => b.score - a.score)[1];

  const neutral =
    entries
      .filter((e) => e.role.includes('text') || /white|neutral|surface/i.test(e.name))
      .sort((a, b) => b.score - a.score)[0] ?? entries.find((e) => /white/i.test(e.name));

  if (primaryBg) semantic.primary = normalizeHex(primaryBg.value);
  if (secondary) semantic.secondary = normalizeHex(secondary.value);
  if (accent) semantic.tertiary = normalizeHex(accent.value);
  if (neutral) semantic.neutral = normalizeHex(neutral.value);

  if (semantic.primary && semantic.neutral) {
    semantic['on-primary'] = semantic.neutral;
  }
  if (semantic.tertiary) {
    semantic['on-tertiary'] = '#FFFFFF';
  }

  for (const [name, value] of Object.entries(colors)) {
    if (Object.values(semantic).includes(normalizeHex(value))) continue;
    const safeName = name.replace(/[^a-z0-9-]/gi, '-').toLowerCase();
    if (!semantic[safeName]) semantic[safeName] = normalizeHex(value);
  }

  if (!semantic.primary && Object.keys(colors).length) {
    semantic.primary = normalizeHex(Object.values(colors)[0]);
  }

  return semantic;
}

function normalizeHex(value: string): string {
  if (value.startsWith('#')) return value.toUpperCase();
  return value;
}

function buildTypography(parsed: ParsedUiInspectorDesign): Record<string, TypographyToken> {
  const baseFamily = parsed.fontFamilies.base || Object.values(parsed.fontFamilies)[0] || 'system-ui';
  const monoFamily = parsed.fontFamilies['2'] || parsed.fontFamilies.mono || parsed.fontFamilies.code;

  const sizeEntries = Object.entries(parsed.fontSizes)
    .map(([name, size]) => ({ name, size, px: parsePx(size) }))
    .filter((e) => e.px > 0)
    .sort((a, b) => b.px - a.px);

  const roleNames =
    sizeEntries.length >= 6
      ? ['display', 'h1', 'h2', 'h3', 'body-lg', 'body-md', 'body-sm', 'caption']
      : ['h1', 'h2', 'h3', 'body-md', 'body-sm', 'label'];

  const typography: Record<string, TypographyToken> = {};
  const defaultWeight = parsed.fontWeights.medium || parsed.fontWeights.regular || '400';
  const lineHeightValues = Object.values(parsed.lineHeights).sort((a, b) => parsePx(b) - parsePx(a));

  sizeEntries.slice(0, roleNames.length).forEach((entry, index) => {
    const role = roleNames[index] ?? `text-${index + 1}`;
    typography[role] = {
      fontFamily: baseFamily,
      fontSize: entry.size,
      fontWeight: index <= 2 ? (parsed.fontWeights.medium || defaultWeight) : defaultWeight,
      lineHeight: lineHeightValues[index] || lineHeightValues[0],
      letterSpacing: parsed.letterSpacings.normal || parsed.letterSpacings.tight,
    };
  });

  if (monoFamily) {
    typography['code'] = {
      fontFamily: monoFamily,
      fontSize: parsed.fontSizes.sm || parsed.fontSizes.xs || '14px',
      fontWeight: parsed.fontWeights.regular || '400',
    };
  }

  if (!Object.keys(typography).length) {
    typography['body-md'] = {
      fontFamily: baseFamily,
      fontSize: '16px',
      fontWeight: defaultWeight,
      lineHeight: '24px',
    };
  }

  return typography;
}

function buildSpacingScale(spacing: TokenMap): TokenMap {
  const values = Object.entries(spacing)
    .map(([name, value]) => ({ name, value, px: parsePx(value) }))
    .filter((e) => e.px >= 0)
    .sort((a, b) => a.px - b.px);

  if (!values.length) return { sm: '8px', md: '16px', lg: '24px', xl: '32px' };

  const pick = (target: number, fallback: string): string => {
    const closest = values.reduce((best, cur) =>
      Math.abs(cur.px - target) < Math.abs(best.px - target) ? cur : best,
    );
    return closest?.value || fallback;
  };

  return {
    xs: pick(4, values[0]?.value ?? '4px'),
    sm: pick(8, values[0]?.value ?? '8px'),
    md: pick(16, values[Math.floor(values.length / 3)]?.value ?? '16px'),
    lg: pick(24, values[Math.floor((values.length * 2) / 3)]?.value ?? '24px'),
    xl: pick(32, values[values.length - 1]?.value ?? '32px'),
    '2xl': values[values.length - 1]?.value ?? '48px',
  };
}

function buildRoundedScale(rounded: TokenMap): TokenMap {
  if (!Object.keys(rounded).length) return { sm: '4px', md: '8px', lg: '12px' };
  const out: TokenMap = {};
  if (rounded.sm) out.sm = rounded.sm;
  if (rounded.md) out.md = rounded.md;
  if (rounded.lg) out.lg = rounded.lg;
  if (rounded.xl) out.xl = rounded.xl;
  if (rounded['2xl']) out['2xl'] = rounded['2xl'];
  if (rounded.full) out.full = rounded.full;
  return Object.keys(out).length ? out : rounded;
}

function buildComponents(colors: TokenMap, rounded: TokenMap): Record<string, Record<string, string>> {
  const components: Record<string, Record<string, string>> = {};

  if (colors.tertiary) {
    components['button-primary'] = {
      backgroundColor: '{colors.tertiary}',
      textColor: '{colors.on-tertiary}',
      rounded: rounded.md ? '{rounded.md}' : '8px',
      padding: '12px',
    };
    components['button-primary-hover'] = {
      backgroundColor: colors['dark-cyan'] ? '{colors.dark-cyan}' : '{colors.tertiary}',
    };
  }

  if (colors.primary) {
    components['surface'] = {
      backgroundColor: '{colors.primary}',
      textColor: colors['on-primary'] ? '{colors.on-primary}' : '{colors.neutral}',
    };
  }

  if (colors.secondary) {
    components['text-muted'] = {
      textColor: '{colors.secondary}',
      typography: 'body-sm',
    };
  }

  return components;
}

function buildOverview(parsed: ParsedUiInspectorDesign): string {
  const lines = [
    parsed.extractedSummary
      ? `This design system was auto-extracted from ${parsed.source || 'a live website'} (${parsed.extractedSummary}).`
      : `This design system was auto-converted from a UI Inspector extraction${parsed.source ? ` of ${parsed.source}` : ''}.`,
    '',
    'The UI favors a dark, developer-focused aesthetic with high-contrast typography and a single accent color for interactive elements.',
  ];
  if (parsed.generatedAt) lines.push('', `Original extraction date: ${parsed.generatedAt}.`);
  return lines.join('\n');
}

function buildColorsSection(colors: TokenMap): string {
  const lines = [
    'The palette combines neutral surfaces, readable text colors, and an accent used for primary actions.',
    '',
  ];

  const descriptions: Record<string, string> = {
    primary: 'Core surface and headline color.',
    secondary: 'Muted text, borders, and metadata.',
    tertiary: 'Primary accent for links, buttons, and focus states.',
    neutral: 'Primary readable text on dark surfaces.',
    'on-primary': 'Text and icons placed on primary surfaces.',
    'on-tertiary': 'Text and icons placed on accent surfaces.',
  };

  for (const [name, value] of Object.entries(colors)) {
    const label = descriptions[name] || 'Supporting token from the extracted palette.';
    lines.push(`- **${name} (${value}):** ${label}`);
  }

  return lines.join('\n');
}

function buildTypographySection(typography: Record<string, TypographyToken>, parsed: ParsedUiInspectorDesign): string {
  const families = Object.values(parsed.fontFamilies).join(', ') || 'system-ui';
  const lines = [
    `Primary typeface: **${families}**. Scale tokens map extracted font sizes to semantic roles for headings and body copy.`,
    '',
  ];

  for (const [role, token] of Object.entries(typography)) {
    const parts = [
      token.fontFamily && `font ${token.fontFamily}`,
      token.fontSize && token.fontSize,
      token.fontWeight && `weight ${token.fontWeight}`,
    ].filter(Boolean);
    lines.push(`- **${role}:** ${parts.join(', ')}.`);
  }

  return lines.join('\n');
}

function buildLayoutSection(spacing: TokenMap, breakpoints: TokenMap): string {
  const lines = ['Spacing follows a modular scale derived from extracted layout tokens.', ''];
  for (const [name, value] of Object.entries(spacing)) {
    lines.push(`- **${name} (${value}):** Layout rhythm and component padding.`);
  }
  if (Object.keys(breakpoints).length) {
    lines.push('', '**Breakpoints**');
    for (const [name, value] of Object.entries(breakpoints)) {
      lines.push(`- **${name} (${value}):** Responsive layout threshold.`);
    }
  }
  return lines.join('\n');
}

function buildElevationSection(shadows: TokenMap): string {
  if (!Object.keys(shadows).length) {
    return 'Elevation is minimal in the extracted system — surfaces rely on contrast and borders rather than heavy shadows.';
  }
  const lines = ['Shadow tokens define depth for overlays, cards, and elevated panels.', ''];
  for (const [name, value] of Object.entries(shadows)) {
    lines.push(`- **${name}:** \`${value}\``);
  }
  return lines.join('\n');
}

function buildShapesSection(rounded: TokenMap): string {
  const lines = ['Corner radii create a consistent component silhouette across buttons, inputs, and cards.', ''];
  for (const [name, value] of Object.entries(rounded)) {
    lines.push(`- **${name} (${value}):** Border radius token.`);
  }
  return lines.join('\n');
}

function buildComponentsSection(components: Record<string, Record<string, string>>): string {
  if (!Object.keys(components).length) {
    return 'No component recipes were inferred. Add `components` tokens in the YAML front matter for buttons, inputs, and cards.';
  }
  const lines = ['Component tokens map semantic colors and shapes to reusable UI patterns.', ''];
  for (const [name, props] of Object.entries(components)) {
    lines.push(`- **${name}:** ${Object.entries(props).map(([k, v]) => `${k} ${v}`).join(', ')}.`);
  }
  return lines.join('\n');
}

function buildDosAndDonts(parsed: ParsedUiInspectorDesign): string {
  const lines = [
    "- **Do** use the accent color sparingly for primary actions and active states.",
    "- **Do** maintain high contrast between text and background tokens.",
    "- **Don't** introduce new colors outside the extracted palette without updating the YAML tokens.",
    "- **Don't** mix arbitrary spacing values — use the spacing scale.",
  ];

  const failing = parsed.contrastRows.filter((r) => /fail/i.test(r.rating)).slice(0, 3);
  if (failing.length) {
    lines.push('', '**Accessibility notes from extraction:**');
    for (const row of failing) {
      lines.push(`- Avoid pairing ${row.textToken} on ${row.backgroundToken} (${row.ratio}, ${row.rating}).`);
    }
  }

  return lines.join('\n');
}

export function convertUiInspectorToGoogleDesignMd(markdown: string): GoogleDesignMdResult {
  const parsed = parseUiInspectorMd(markdown);
  const colors = pickSemanticColors(parsed);
  const typography = buildTypography(parsed);
  const spacing = buildSpacingScale(parsed.spacing);
  const rounded = buildRoundedScale(parsed.rounded);
  const components = buildComponents(colors, rounded);

  const frontMatter: Record<string, unknown> = {
    version: 'alpha',
    name: parsed.name,
    description: parsed.source
      ? `Converted from UI Inspector extraction of ${parsed.source}`
      : 'Converted from UI Inspector design token export',
    colors,
    typography,
    rounded,
    spacing,
  };

  if (Object.keys(components).length) frontMatter.components = components;

  const yaml = emitYamlObject(frontMatter);
  const body = [
    '## Overview',
    '',
    buildOverview(parsed),
    '',
    '## Colors',
    '',
    buildColorsSection(colors),
    '',
    '## Typography',
    '',
    buildTypographySection(typography, parsed),
    '',
    '## Layout',
    '',
    buildLayoutSection(spacing, parsed.breakpoints),
    '',
    '## Elevation & Depth',
    '',
    buildElevationSection(parsed.shadows),
    '',
    '## Shapes',
    '',
    buildShapesSection(rounded),
    '',
    '## Components',
    '',
    buildComponentsSection(components),
    '',
    "## Do's and Don'ts",
    '',
    buildDosAndDonts(parsed),
    '',
  ].join('\n');

  return {
    designMd: `---\n${yaml}\n---\n\n${body}`.trim() + '\n',
    meta: {
      name: parsed.name,
      source: parsed.source,
      colorCount: Object.keys(colors).length,
      typographyCount: Object.keys(typography).length,
      spacingCount: Object.keys(spacing).length,
      roundedCount: Object.keys(rounded).length,
    },
  };
}
