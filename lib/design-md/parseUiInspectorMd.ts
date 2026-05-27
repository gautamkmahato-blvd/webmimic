export type TokenMap = Record<string, string>;

export type ContrastRow = {
  textToken: string;
  backgroundToken: string;
  ratio: string;
  rating: string;
};

export type ParsedUiInspectorDesign = {
  name: string;
  source?: string;
  generatedAt?: string;
  extractedSummary?: string;
  colors: TokenMap;
  colorDescriptions: Record<string, string>;
  fontFamilies: TokenMap;
  fontSizes: TokenMap;
  fontWeights: TokenMap;
  lineHeights: TokenMap;
  letterSpacings: TokenMap;
  spacing: TokenMap;
  rounded: TokenMap;
  shadows: TokenMap;
  motionDurations: TokenMap;
  motionEasings: TokenMap;
  breakpoints: TokenMap;
  contrastRows: ContrastRow[];
};

function extractJsonBlock(markdown: string): unknown | null {
  const match = markdown.match(/```json\s*([\s\S]*?)```/i);
  if (!match) return null;
  try {
    return JSON.parse(match[1]);
  } catch {
    return null;
  }
}

function tokenGroupValues(group: unknown): TokenMap {
  const out: TokenMap = {};
  if (!group || typeof group !== 'object') return out;
  for (const [key, entry] of Object.entries(group as Record<string, unknown>)) {
    if (!entry || typeof entry !== 'object') continue;
    const value = (entry as { $value?: unknown }).$value;
    if (value === undefined || value === null) continue;
    out[key] = typeof value === 'number' ? String(value) : String(value);
  }
  return out;
}

function mergeTokenMaps(...maps: TokenMap[]): TokenMap {
  return Object.assign({}, ...maps);
}

function normalizeDtcgKeys(map: TokenMap, prefix: string): TokenMap {
  const out: TokenMap = {};
  for (const [key, value] of Object.entries(map)) {
    out[normalizeTokenKey(key, prefix)] = value;
  }
  return out;
}

function normalizeTokenKey(raw: string, prefix: string): string {
  return raw.replace(/^`?--?/, '').replace(/^`/, '').replace(new RegExp(`^${prefix}-?`), '');
}

function parseHeaderMeta(markdown: string): Partial<ParsedUiInspectorDesign> {
  const titleMatch = markdown.match(/^#\s+(.+?)\s*—\s*Design System/im);
  const sourceMatch = markdown.match(/\*\*Source:\*\*\s*(.+)/i);
  const generatedMatch = markdown.match(/\*\*Generated:\*\*\s*(.+)/i);
  const extractedMatch = markdown.match(/\*\*Extracted:\*\*\s*(.+)/i);

  return {
    name: titleMatch?.[1]?.trim() || 'Design System',
    source: sourceMatch?.[1]?.trim(),
    generatedAt: generatedMatch?.[1]?.trim(),
    extractedSummary: extractedMatch?.[1]?.trim(),
  };
}

function parseTableRows(section: string): string[][] {
  const rows: string[][] = [];
  for (const line of section.split('\n')) {
    if (!line.trim().startsWith('|')) continue;
    if (/^\|\s*[-:]+\s*\|/.test(line)) continue;
    const cells = line
      .split('|')
      .slice(1, -1)
      .map((c) => c.trim());
    if (cells.length) rows.push(cells);
  }
  return rows;
}

function parseMarkdownTables(markdown: string): Partial<ParsedUiInspectorDesign> {
  const colors: TokenMap = {};
  const colorDescriptions: Record<string, string> = {};
  const fontFamilies: TokenMap = {};
  const fontSizes: TokenMap = {};
  const fontWeights: TokenMap = {};
  const lineHeights: TokenMap = {};
  const letterSpacings: TokenMap = {};
  const spacing: TokenMap = {};
  const rounded: TokenMap = {};
  const shadows: TokenMap = {};
  const motionDurations: TokenMap = {};
  const motionEasings: TokenMap = {};
  const breakpoints: TokenMap = {};
  const contrastRows: ContrastRow[] = [];

  const colorSection = markdown.match(/## Color Palette[\s\S]*?(?=^## |\Z)/im)?.[0] ?? '';
  for (const row of parseTableRows(colorSection)) {
    const token = row[0]?.replace(/^`--/, '').replace(/`$/, '').replace(/`/g, '');
    const value = row[1]?.replace(/`/g, '');
    if (token?.startsWith('color-') || token?.startsWith('--color-')) {
      const key = token.replace(/^--?color-/, '');
      if (key && value) {
        colors[key] = value;
        if (row[3]) colorDescriptions[key] = row[3];
      }
    }
  }

  const typoSection = markdown.match(/## Typography[\s\S]*?(?=^## |\Z)/im)?.[0] ?? '';
  for (const subsection of typoSection.split(/^### /m).slice(1)) {
    const heading = subsection.split('\n')[0]?.toLowerCase() ?? '';
    const rows = parseTableRows(subsection);
    for (const row of rows) {
      const token = row[0]?.replace(/^`--/, '').replace(/`$/, '').replace(/`/g, '');
      const value = row[1]?.replace(/`/g, '') ?? row[1];
      if (!token || !value) continue;
      if (heading.includes('font famil')) fontFamilies[normalizeTokenKey(token, 'font-family')] = value;
      else if (heading.includes('type scale') || heading.includes('font size'))
        fontSizes[normalizeTokenKey(token, 'font-size')] = value;
      else if (heading.includes('weight')) fontWeights[normalizeTokenKey(token, 'font-weight')] = value;
      else if (heading.includes('line height')) lineHeights[normalizeTokenKey(token, 'line-height')] = value;
      else if (heading.includes('letter spacing'))
        letterSpacings[normalizeTokenKey(token, 'letter-spacing')] = value;
    }
  }

  const spacingSection = markdown.match(/## Spacing[\s\S]*?(?=^## |\Z)/im)?.[0] ?? '';
  for (const row of parseTableRows(spacingSection)) {
    const token = row[0]?.replace(/^`--/, '').replace(/`$/, '').replace(/`/g, '');
    const value = row[1]?.replace(/`/g, '');
    if (token?.includes('space-') && value) spacing[token.replace(/^space-/, '')] = value;
  }

  const bordersSection = markdown.match(/## Borders[\s\S]*?(?=^## |\Z)/im)?.[0] ?? '';
  for (const row of parseTableRows(bordersSection)) {
    const token = row[0]?.replace(/^`--/, '').replace(/`$/, '').replace(/`/g, '');
    const value = row[1]?.replace(/`/g, '');
    if (token?.includes('radius-') && value) rounded[token.replace(/^radius-/, '')] = value;
  }

  const shadowSection = markdown.match(/## Elevation[\s\S]*?(?=^## |\Z)/im)?.[0] ?? '';
  for (const row of parseTableRows(shadowSection)) {
    const token = row[0]?.replace(/^`--/, '').replace(/`$/, '').replace(/`/g, '');
    const value = row[1]?.replace(/`/g, '');
    if (token?.includes('shadow-') && value) shadows[token.replace(/^shadow-/, '')] = value;
  }

  const motionSection = markdown.match(/## Motion[\s\S]*?(?=^## |\Z)/im)?.[0] ?? '';
  for (const subsection of motionSection.split(/^### /m).slice(1)) {
    const heading = subsection.split('\n')[0]?.toLowerCase() ?? '';
    for (const row of parseTableRows(subsection)) {
      const token = row[0]?.replace(/^`--/, '').replace(/`$/, '').replace(/`/g, '');
      const value = row[1]?.replace(/`/g, '');
      if (!token || !value) continue;
      if (heading.includes('duration')) motionDurations[token.replace(/^duration-/, '')] = value;
      else if (heading.includes('easing')) motionEasings[token.replace(/^easing-/, '')] = value;
    }
  }

  const bpSection = markdown.match(/## Breakpoints[\s\S]*?(?=^## |\Z)/im)?.[0] ?? '';
  for (const row of parseTableRows(bpSection)) {
    const token = row[0]?.replace(/^`--/, '').replace(/`$/, '').replace(/`/g, '');
    const value = row[1]?.replace(/`/g, '');
    if (token?.includes('breakpoint-') && value) breakpoints[token.replace(/^breakpoint-/, '')] = value;
  }

  const contrastSection = markdown.match(/## Accessibility[\s\S]*?(?=^## |\Z)/im)?.[0] ?? '';
  for (const row of parseTableRows(contrastSection)) {
    if (row.length < 4) continue;
    contrastRows.push({
      textToken: row[0]?.replace(/`/g, '') ?? '',
      backgroundToken: row[1]?.replace(/`/g, '') ?? '',
      ratio: row[2] ?? '',
      rating: row[3] ?? '',
    });
  }

  return {
    colors,
    colorDescriptions,
    fontFamilies,
    fontSizes,
    fontWeights,
    lineHeights,
    letterSpacings,
    spacing,
    rounded,
    shadows,
    motionDurations,
    motionEasings,
    breakpoints,
    contrastRows,
  };
}

function parseFromDtcgJson(json: unknown): Partial<ParsedUiInspectorDesign> {
  if (!json || typeof json !== 'object') return {};
  const root = json as Record<string, unknown>;
  const metadata = (root.$metadata ?? {}) as Record<string, string>;
  const core = (root.core ?? {}) as Record<string, unknown>;
  const typography = (core.typography ?? {}) as Record<string, unknown>;
  const layout = (root.layout ?? {}) as Record<string, unknown>;
  const surfaces = (root.surfaces ?? {}) as Record<string, unknown>;
  const motion = (root.motion ?? {}) as Record<string, unknown>;

  const colors = tokenGroupValues(core.color);
  const colorDescriptions: Record<string, string> = {};
  if (core.color && typeof core.color === 'object') {
    for (const [key, entry] of Object.entries(core.color as Record<string, { $description?: string }>)) {
      if (entry?.$description) colorDescriptions[key] = entry.$description;
    }
  }

  return {
    name: metadata.title?.split('|')[0]?.trim() || metadata.title || undefined,
    source: metadata.source,
    generatedAt: metadata.generatedAt,
    colors,
    colorDescriptions,
    fontFamilies: mergeTokenMaps(
      normalizeDtcgKeys(tokenGroupValues(core.fontFamily), 'font-family'),
      normalizeDtcgKeys(tokenGroupValues(typography.fontFamily), 'font-family'),
    ),
    fontSizes: mergeTokenMaps(
      normalizeDtcgKeys(tokenGroupValues(core.fontSize), 'font-size'),
      normalizeDtcgKeys(tokenGroupValues(typography.fontSize), 'font-size'),
    ),
    fontWeights: mergeTokenMaps(
      normalizeDtcgKeys(tokenGroupValues(core.fontWeight), 'font-weight'),
      normalizeDtcgKeys(tokenGroupValues(typography.fontWeight), 'font-weight'),
    ),
    lineHeights: mergeTokenMaps(
      normalizeDtcgKeys(tokenGroupValues(core.lineHeight), 'line-height'),
      normalizeDtcgKeys(tokenGroupValues(typography.lineHeight), 'line-height'),
    ),
    letterSpacings: mergeTokenMaps(
      normalizeDtcgKeys(tokenGroupValues(core.letterSpacing), 'letter-spacing'),
      normalizeDtcgKeys(tokenGroupValues(typography.letterSpacing), 'letter-spacing'),
    ),
    spacing: tokenGroupValues((layout.spacing as unknown) ?? {}),
    rounded: tokenGroupValues((surfaces.borderRadius as unknown) ?? {}),
    shadows: tokenGroupValues((surfaces.shadow as unknown) ?? {}),
    motionDurations: tokenGroupValues((motion.duration as unknown) ?? {}),
    motionEasings: tokenGroupValues((motion.easing as unknown) ?? {}),
    breakpoints: tokenGroupValues((layout.breakpoint as unknown) ?? {}),
  };
}

export function parseUiInspectorMd(markdown: string): ParsedUiInspectorDesign {
  const header = parseHeaderMeta(markdown);
  const fromJson = parseFromDtcgJson(extractJsonBlock(markdown));
  const fromTables = parseMarkdownTables(markdown);

  const mergeMaps = (...maps: Array<TokenMap | undefined>): TokenMap =>
    Object.assign({}, ...maps.filter(Boolean));

  return {
    name: fromJson.name || header.name || 'Design System',
    source: fromJson.source || header.source,
    generatedAt: fromJson.generatedAt || header.generatedAt,
    extractedSummary: header.extractedSummary,
    colors: mergeMaps(fromTables.colors, fromJson.colors),
    colorDescriptions: { ...fromTables.colorDescriptions, ...fromJson.colorDescriptions },
    fontFamilies: mergeMaps(fromTables.fontFamilies, fromJson.fontFamilies),
    fontSizes: mergeMaps(fromTables.fontSizes, fromJson.fontSizes),
    fontWeights: mergeMaps(fromTables.fontWeights, fromJson.fontWeights),
    lineHeights: mergeMaps(fromTables.lineHeights, fromJson.lineHeights),
    letterSpacings: mergeMaps(fromTables.letterSpacings, fromJson.letterSpacings),
    spacing: mergeMaps(fromTables.spacing, fromJson.spacing),
    rounded: mergeMaps(fromTables.rounded, fromJson.rounded),
    shadows: mergeMaps(fromTables.shadows, fromJson.shadows),
    motionDurations: mergeMaps(fromTables.motionDurations, fromJson.motionDurations),
    motionEasings: mergeMaps(fromTables.motionEasings, fromJson.motionEasings),
    breakpoints: mergeMaps(fromTables.breakpoints, fromJson.breakpoints),
    contrastRows: fromTables.contrastRows ?? [],
  };
}
