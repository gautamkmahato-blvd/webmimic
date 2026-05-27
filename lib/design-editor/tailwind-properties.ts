/**
 * Visual property registry for Tailwind classes.
 *
 * Each "property" (e.g. "Font weight", "Text color") declares:
 *   - which Tailwind classes match it (via a prefix/suffix matcher)
 *   - what control type to render (select, color, slider, text)
 *   - the canonical option list, where applicable
 *
 * The InspectorPanel walks this registry against the selected element's
 * class list to figure out the *current* value and render a control that
 * can change it via editor:replace-class messages.
 */

import { splitVariants } from "./tailwind-classify";

export type ControlType = "select" | "color" | "text" | "toggle";

export interface PropertyOption {
  /** The Tailwind class fragment AFTER the prefix (e.g. for "font-bold" with prefix "font-", value is "bold"). */
  value: string;
  /** Human label shown in the picker. */
  label: string;
  /** Optional swatch color for color-picker style options. */
  swatch?: string;
}

export interface PropertyDef {
  /** Stable id used for React keys. */
  id: string;
  /** Group these in panel sections. */
  section: "typography" | "color" | "spacing" | "sizing" | "layout" | "border" | "effects";
  /** Visible label. */
  label: string;
  /** Control type. */
  control: ControlType;
  /** Prefix patterns that this property "owns". An element class matches if it starts with one of these. */
  prefixes: string[];
  /**
   * Exact-match classes (no prefix). e.g. "italic", "underline".
   * For toggle-style controls, this is the on-class.
   */
  exact?: string[];
  /** Options for select / color controls. */
  options?: PropertyOption[];
  /** When the control is "text", how to construct the class (value goes in [brackets]). */
  arbitraryFormat?: (value: string) => string;
}

const FONT_WEIGHTS: PropertyOption[] = [
  { value: "thin", label: "100 · Thin" },
  { value: "extralight", label: "200 · Extralight" },
  { value: "light", label: "300 · Light" },
  { value: "normal", label: "400 · Regular" },
  { value: "medium", label: "500 · Medium" },
  { value: "semibold", label: "600 · Semibold" },
  { value: "bold", label: "700 · Bold" },
  { value: "extrabold", label: "800 · Extrabold" },
  { value: "black", label: "900 · Black" },
];

const FONT_SIZES: PropertyOption[] = [
  { value: "xs", label: "xs · 12" },
  { value: "sm", label: "sm · 14" },
  { value: "base", label: "base · 16" },
  { value: "lg", label: "lg · 18" },
  { value: "xl", label: "xl · 20" },
  { value: "2xl", label: "2xl · 24" },
  { value: "3xl", label: "3xl · 30" },
  { value: "4xl", label: "4xl · 36" },
  { value: "5xl", label: "5xl · 48" },
  { value: "6xl", label: "6xl · 60" },
  { value: "7xl", label: "7xl · 72" },
  { value: "8xl", label: "8xl · 96" },
  { value: "9xl", label: "9xl · 128" },
];

const TEXT_ALIGN: PropertyOption[] = [
  { value: "left", label: "Left" },
  { value: "center", label: "Center" },
  { value: "right", label: "Right" },
  { value: "justify", label: "Justify" },
];

const LEADING: PropertyOption[] = [
  { value: "none", label: "1" },
  { value: "tight", label: "1.25" },
  { value: "snug", label: "1.375" },
  { value: "normal", label: "1.5" },
  { value: "relaxed", label: "1.625" },
  { value: "loose", label: "2" },
];

const TRACKING: PropertyOption[] = [
  { value: "tighter", label: "Tighter" },
  { value: "tight", label: "Tight" },
  { value: "normal", label: "Normal" },
  { value: "wide", label: "Wide" },
  { value: "wider", label: "Wider" },
  { value: "widest", label: "Widest" },
];

// Common color palette — covers the default Tailwind palette without enumerating every shade.
const PALETTE_SHADES = ["50", "100", "200", "300", "400", "500", "600", "700", "800", "900", "950"];
const PALETTE_NAMES = ["slate", "gray", "zinc", "neutral", "stone", "red", "orange", "amber", "yellow", "lime", "green", "emerald", "teal", "cyan", "sky", "blue", "indigo", "violet", "purple", "fuchsia", "pink", "rose"];

const COMMON_COLORS: PropertyOption[] = [
  { value: "white", label: "White", swatch: "#ffffff" },
  { value: "black", label: "Black", swatch: "#000000" },
  { value: "transparent", label: "Transparent", swatch: "transparent" },
  // Most-used shades
  ...PALETTE_NAMES.flatMap((name) =>
    ["100", "300", "500", "700", "900"].map((shade) => ({
      value: `${name}-${shade}`,
      label: `${name}-${shade}`,
      swatch: tailwindColorSwatch(name, shade),
    }))
  ),
];

/** Approximate hex for a Tailwind palette color, for use as a swatch preview. */
function tailwindColorSwatch(name: string, shade: string): string {
  // Hardcoded subset — for full coverage you'd inline the Tailwind default palette
  // (or load it from `tailwindcss/colors`). This subset covers the most common picks.
  const palette: Record<string, Record<string, string>> = {
    slate:   { "100": "#f1f5f9", "300": "#cbd5e1", "500": "#64748b", "700": "#334155", "900": "#0f172a" },
    gray:    { "100": "#f3f4f6", "300": "#d1d5db", "500": "#6b7280", "700": "#374151", "900": "#111827" },
    zinc:    { "100": "#f4f4f5", "300": "#d4d4d8", "500": "#71717a", "700": "#3f3f46", "900": "#18181b" },
    neutral: { "100": "#f5f5f5", "300": "#d4d4d4", "500": "#737373", "700": "#404040", "900": "#171717" },
    stone:   { "100": "#f5f5f4", "300": "#d6d3d1", "500": "#78716c", "700": "#44403c", "900": "#1c1917" },
    red:     { "100": "#fee2e2", "300": "#fca5a5", "500": "#ef4444", "700": "#b91c1c", "900": "#7f1d1d" },
    orange:  { "100": "#ffedd5", "300": "#fdba74", "500": "#f97316", "700": "#c2410c", "900": "#7c2d12" },
    amber:   { "100": "#fef3c7", "300": "#fcd34d", "500": "#f59e0b", "700": "#b45309", "900": "#78350f" },
    yellow:  { "100": "#fef9c3", "300": "#fde047", "500": "#eab308", "700": "#a16207", "900": "#713f12" },
    lime:    { "100": "#ecfccb", "300": "#bef264", "500": "#84cc16", "700": "#4d7c0f", "900": "#365314" },
    green:   { "100": "#dcfce7", "300": "#86efac", "500": "#22c55e", "700": "#15803d", "900": "#14532d" },
    emerald: { "100": "#d1fae5", "300": "#6ee7b7", "500": "#10b981", "700": "#047857", "900": "#064e3b" },
    teal:    { "100": "#ccfbf1", "300": "#5eead4", "500": "#14b8a6", "700": "#0f766e", "900": "#134e4a" },
    cyan:    { "100": "#cffafe", "300": "#67e8f9", "500": "#06b6d4", "700": "#0e7490", "900": "#164e63" },
    sky:     { "100": "#e0f2fe", "300": "#7dd3fc", "500": "#0ea5e9", "700": "#0369a1", "900": "#0c4a6e" },
    blue:    { "100": "#dbeafe", "300": "#93c5fd", "500": "#3b82f6", "700": "#1d4ed8", "900": "#1e3a8a" },
    indigo:  { "100": "#e0e7ff", "300": "#a5b4fc", "500": "#6366f1", "700": "#4338ca", "900": "#312e81" },
    violet:  { "100": "#ede9fe", "300": "#c4b5fd", "500": "#8b5cf6", "700": "#6d28d9", "900": "#4c1d95" },
    purple:  { "100": "#f3e8ff", "300": "#d8b4fe", "500": "#a855f7", "700": "#7e22ce", "900": "#581c87" },
    fuchsia: { "100": "#fae8ff", "300": "#f0abfc", "500": "#d946ef", "700": "#a21caf", "900": "#701a75" },
    pink:    { "100": "#fce7f3", "300": "#f9a8d4", "500": "#ec4899", "700": "#be185d", "900": "#831843" },
    rose:    { "100": "#ffe4e6", "300": "#fda4af", "500": "#f43f5e", "700": "#be123c", "900": "#881337" },
  };
  return palette[name]?.[shade] ?? "#888";
}

const DISPLAY_OPTIONS: PropertyOption[] = [
  { value: "block", label: "block" },
  { value: "inline-block", label: "inline-block" },
  { value: "inline", label: "inline" },
  { value: "flex", label: "flex" },
  { value: "inline-flex", label: "inline-flex" },
  { value: "grid", label: "grid" },
  { value: "hidden", label: "hidden" },
];

const SPACING_SCALE = [
  "0", "px", "0.5", "1", "1.5", "2", "2.5", "3", "3.5", "4", "5", "6", "7", "8",
  "9", "10", "11", "12", "14", "16", "20", "24", "28", "32", "36", "40", "44",
  "48", "52", "56", "60", "64", "72", "80", "96",
];

function spacingOptions(extra: string[] = []): PropertyOption[] {
  const values = [...SPACING_SCALE, ...extra];
  return values.map((v) => ({ value: v, label: v }));
}

const SPACING_OPTIONS = spacingOptions();
const MARGIN_OPTIONS = spacingOptions(["auto"]);

const WIDTH_HEIGHT_EXTRA = [
  "auto", "full", "screen", "min", "max", "fit",
  "1/2", "1/3", "2/3", "1/4", "2/4", "3/4", "1/5", "2/5", "3/5", "4/5",
];

const WIDTH_OPTIONS = spacingOptions(WIDTH_HEIGHT_EXTRA);
const HEIGHT_OPTIONS = spacingOptions(WIDTH_HEIGHT_EXTRA);

const MAX_WIDTH_VALUES = [
  "none", "xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl", "5xl", "6xl", "7xl",
  "full", "min", "max", "fit", "prose",
  "screen-sm", "screen-md", "screen-lg", "screen-xl", "screen-2xl",
  ...SPACING_SCALE,
];

const MAX_WIDTH_OPTIONS: PropertyOption[] = MAX_WIDTH_VALUES.map((v) => ({ value: v, label: v }));
const MIN_MAX_SIZE_OPTIONS = spacingOptions(["full", "min", "max", "fit", "none"]);

// ── Phase B: Layout (flex / grid / position) ─────────────────────────────

const FLEX_DIRECTION_OPTIONS: PropertyOption[] = [
  { value: "row", label: "Row" },
  { value: "row-reverse", label: "Row reverse" },
  { value: "col", label: "Column" },
  { value: "col-reverse", label: "Column reverse" },
];
const FLEX_DIRECTION_VALUES = FLEX_DIRECTION_OPTIONS.map((o) => o.value);

const FLEX_WRAP_OPTIONS: PropertyOption[] = [
  { value: "wrap", label: "Wrap" },
  { value: "nowrap", label: "No wrap" },
  { value: "wrap-reverse", label: "Wrap reverse" },
];
const FLEX_WRAP_VALUES = FLEX_WRAP_OPTIONS.map((o) => o.value);

const ALIGN_ITEMS_OPTIONS: PropertyOption[] = [
  { value: "start", label: "Start" },
  { value: "end", label: "End" },
  { value: "center", label: "Center" },
  { value: "baseline", label: "Baseline" },
  { value: "stretch", label: "Stretch" },
];

const JUSTIFY_CONTENT_OPTIONS: PropertyOption[] = [
  { value: "start", label: "Start" },
  { value: "end", label: "End" },
  { value: "center", label: "Center" },
  { value: "between", label: "Between" },
  { value: "around", label: "Around" },
  { value: "evenly", label: "Evenly" },
];

const GAP_OPTIONS = SPACING_OPTIONS;

const GRID_COLS_OPTIONS: PropertyOption[] = [
  { value: "1", label: "1 col" },
  { value: "2", label: "2 cols" },
  { value: "3", label: "3 cols" },
  { value: "4", label: "4 cols" },
  { value: "5", label: "5 cols" },
  { value: "6", label: "6 cols" },
  { value: "12", label: "12 cols" },
  { value: "none", label: "None" },
];

const OVERFLOW_OPTIONS: PropertyOption[] = [
  { value: "auto", label: "Auto" },
  { value: "hidden", label: "Hidden" },
  { value: "clip", label: "Clip" },
  { value: "visible", label: "Visible" },
  { value: "scroll", label: "Scroll" },
];

const POSITION_OPTIONS: PropertyOption[] = [
  { value: "static", label: "Static" },
  { value: "relative", label: "Relative" },
  { value: "absolute", label: "Absolute" },
  { value: "fixed", label: "Fixed" },
  { value: "sticky", label: "Sticky" },
];

const Z_INDEX_OPTIONS: PropertyOption[] = [
  { value: "0", label: "0" },
  { value: "10", label: "10" },
  { value: "20", label: "20" },
  { value: "30", label: "30" },
  { value: "40", label: "40" },
  { value: "50", label: "50" },
  { value: "auto", label: "Auto" },
];

// ── Phase B: Border ────────────────────────────────────────────────────────

const BORDER_WIDTH_OPTIONS: PropertyOption[] = [
  { value: "__default__", label: "1px · default" },
  { value: "0", label: "0" },
  { value: "2", label: "2" },
  { value: "4", label: "4" },
  { value: "8", label: "8" },
];
const BORDER_WIDTH_VALUES = ["0", "2", "4", "8"];

const BORDER_RADIUS_OPTIONS: PropertyOption[] = [
  { value: "__default__", label: "Default" },
  { value: "none", label: "None" },
  { value: "sm", label: "sm" },
  { value: "md", label: "md" },
  { value: "lg", label: "lg" },
  { value: "xl", label: "xl" },
  { value: "2xl", label: "2xl" },
  { value: "3xl", label: "3xl" },
  { value: "full", label: "Full" },
];
const BORDER_RADIUS_VALUES = ["none", "sm", "md", "lg", "xl", "2xl", "3xl", "full"];

// ── Phase B: Effects ───────────────────────────────────────────────────────

const SHADOW_OPTIONS: PropertyOption[] = [
  { value: "__default__", label: "Default" },
  { value: "sm", label: "sm" },
  { value: "md", label: "md" },
  { value: "lg", label: "lg" },
  { value: "xl", label: "xl" },
  { value: "2xl", label: "2xl" },
  { value: "inner", label: "Inner" },
  { value: "none", label: "None" },
];
const SHADOW_VALUES = ["sm", "md", "lg", "xl", "2xl", "inner", "none"];

const OPACITY_OPTIONS: PropertyOption[] = [
  "0", "5", "10", "20", "25", "30", "40", "50", "60", "70", "75", "80", "90", "95", "100",
].map((v) => ({ value: v, label: `${v}%` }));

const BLUR_OPTIONS: PropertyOption[] = [
  { value: "__default__", label: "Default" },
  { value: "none", label: "None" },
  { value: "sm", label: "sm" },
  { value: "md", label: "md" },
  { value: "lg", label: "lg" },
  { value: "xl", label: "xl" },
  { value: "2xl", label: "2xl" },
  { value: "3xl", label: "3xl" },
];
const BLUR_VALUES = ["none", "sm", "md", "lg", "xl", "2xl", "3xl"];

export const PROPERTY_DEFS: PropertyDef[] = [
  // ── Typography ─────────────────────────────────────────
  {
    id: "fontWeight",
    section: "typography",
    label: "Font weight",
    control: "select",
    prefixes: ["font-"],
    options: FONT_WEIGHTS,
  },
  {
    id: "fontSize",
    section: "typography",
    label: "Font size",
    control: "select",
    prefixes: ["text-"],
    options: FONT_SIZES,
    arbitraryFormat: (v) => `text-[${v}]`,
  },
  {
    id: "textAlign",
    section: "typography",
    label: "Align",
    control: "select",
    prefixes: ["text-"],
    options: TEXT_ALIGN,
  },
  {
    id: "italic",
    section: "typography",
    label: "Italic",
    control: "toggle",
    prefixes: [],
    exact: ["italic"],
  },
  {
    id: "underline",
    section: "typography",
    label: "Underline",
    control: "toggle",
    prefixes: [],
    exact: ["underline"],
  },
  {
    id: "uppercase",
    section: "typography",
    label: "Uppercase",
    control: "toggle",
    prefixes: [],
    exact: ["uppercase"],
  },
  {
    id: "leading",
    section: "typography",
    label: "Line height",
    control: "select",
    prefixes: ["leading-"],
    options: LEADING,
    arbitraryFormat: (v) => `leading-[${v}]`,
  },
  {
    id: "tracking",
    section: "typography",
    label: "Letter spacing",
    control: "select",
    prefixes: ["tracking-"],
    options: TRACKING,
    arbitraryFormat: (v) => `tracking-[${v}]`,
  },

  // ── Color ──────────────────────────────────────────────
  {
    id: "textColor",
    section: "color",
    label: "Text color",
    control: "color",
    prefixes: ["text-"],
    options: COMMON_COLORS,
    arbitraryFormat: (v) => `text-[${v}]`,
  },
  {
    id: "bgColor",
    section: "color",
    label: "Background",
    control: "color",
    prefixes: ["bg-"],
    options: COMMON_COLORS,
    arbitraryFormat: (v) => `bg-[${v}]`,
  },

  // ── Spacing — margin ─────────────────────────────────────
  {
    id: "marginTop",
    section: "spacing",
    label: "Margin top",
    control: "select",
    prefixes: ["mt-"],
    options: MARGIN_OPTIONS,
    arbitraryFormat: (v) => `mt-[${v}]`,
  },
  {
    id: "marginRight",
    section: "spacing",
    label: "Margin right",
    control: "select",
    prefixes: ["mr-"],
    options: MARGIN_OPTIONS,
    arbitraryFormat: (v) => `mr-[${v}]`,
  },
  {
    id: "marginBottom",
    section: "spacing",
    label: "Margin bottom",
    control: "select",
    prefixes: ["mb-"],
    options: MARGIN_OPTIONS,
    arbitraryFormat: (v) => `mb-[${v}]`,
  },
  {
    id: "marginLeft",
    section: "spacing",
    label: "Margin left",
    control: "select",
    prefixes: ["ml-"],
    options: MARGIN_OPTIONS,
    arbitraryFormat: (v) => `ml-[${v}]`,
  },
  {
    id: "marginX",
    section: "spacing",
    label: "Margin X",
    control: "select",
    prefixes: ["mx-"],
    options: MARGIN_OPTIONS,
    arbitraryFormat: (v) => `mx-[${v}]`,
  },
  {
    id: "marginY",
    section: "spacing",
    label: "Margin Y",
    control: "select",
    prefixes: ["my-"],
    options: MARGIN_OPTIONS,
    arbitraryFormat: (v) => `my-[${v}]`,
  },
  {
    id: "margin",
    section: "spacing",
    label: "Margin all",
    control: "select",
    prefixes: ["m-"],
    options: MARGIN_OPTIONS,
    arbitraryFormat: (v) => `m-[${v}]`,
  },

  // ── Spacing — padding ────────────────────────────────────
  {
    id: "paddingTop",
    section: "spacing",
    label: "Padding top",
    control: "select",
    prefixes: ["pt-"],
    options: SPACING_OPTIONS,
    arbitraryFormat: (v) => `pt-[${v}]`,
  },
  {
    id: "paddingRight",
    section: "spacing",
    label: "Padding right",
    control: "select",
    prefixes: ["pr-"],
    options: SPACING_OPTIONS,
    arbitraryFormat: (v) => `pr-[${v}]`,
  },
  {
    id: "paddingBottom",
    section: "spacing",
    label: "Padding bottom",
    control: "select",
    prefixes: ["pb-"],
    options: SPACING_OPTIONS,
    arbitraryFormat: (v) => `pb-[${v}]`,
  },
  {
    id: "paddingLeft",
    section: "spacing",
    label: "Padding left",
    control: "select",
    prefixes: ["pl-"],
    options: SPACING_OPTIONS,
    arbitraryFormat: (v) => `pl-[${v}]`,
  },
  {
    id: "paddingX",
    section: "spacing",
    label: "Padding X",
    control: "select",
    prefixes: ["px-"],
    options: SPACING_OPTIONS,
    arbitraryFormat: (v) => `px-[${v}]`,
  },
  {
    id: "paddingY",
    section: "spacing",
    label: "Padding Y",
    control: "select",
    prefixes: ["py-"],
    options: SPACING_OPTIONS,
    arbitraryFormat: (v) => `py-[${v}]`,
  },
  {
    id: "padding",
    section: "spacing",
    label: "Padding all",
    control: "select",
    prefixes: ["p-"],
    options: SPACING_OPTIONS,
    arbitraryFormat: (v) => `p-[${v}]`,
  },

  // ── Sizing ───────────────────────────────────────────────
  {
    id: "width",
    section: "sizing",
    label: "Width",
    control: "select",
    prefixes: ["w-"],
    options: WIDTH_OPTIONS,
    arbitraryFormat: (v) => `w-[${v}]`,
  },
  {
    id: "height",
    section: "sizing",
    label: "Height",
    control: "select",
    prefixes: ["h-"],
    options: HEIGHT_OPTIONS,
    arbitraryFormat: (v) => `h-[${v}]`,
  },
  {
    id: "maxWidth",
    section: "sizing",
    label: "Max width",
    control: "select",
    prefixes: ["max-w-"],
    options: MAX_WIDTH_OPTIONS,
    arbitraryFormat: (v) => `max-w-[${v}]`,
  },
  {
    id: "minWidth",
    section: "sizing",
    label: "Min width",
    control: "select",
    prefixes: ["min-w-"],
    options: MIN_MAX_SIZE_OPTIONS,
    arbitraryFormat: (v) => `min-w-[${v}]`,
  },
  {
    id: "maxHeight",
    section: "sizing",
    label: "Max height",
    control: "select",
    prefixes: ["max-h-"],
    options: MIN_MAX_SIZE_OPTIONS,
    arbitraryFormat: (v) => `max-h-[${v}]`,
  },
  {
    id: "minHeight",
    section: "sizing",
    label: "Min height",
    control: "select",
    prefixes: ["min-h-"],
    options: MIN_MAX_SIZE_OPTIONS,
    arbitraryFormat: (v) => `min-h-[${v}]`,
  },

  // ── Layout ─────────────────────────────────────────────
  {
    id: "display",
    section: "layout",
    label: "Display",
    control: "select",
    prefixes: [],
    exact: ["block", "inline-block", "inline", "flex", "inline-flex", "grid", "hidden"],
    options: DISPLAY_OPTIONS,
  },
  {
    id: "flexDirection",
    section: "layout",
    label: "Direction",
    control: "select",
    prefixes: ["flex-"],
    options: FLEX_DIRECTION_OPTIONS,
  },
  {
    id: "flexWrap",
    section: "layout",
    label: "Wrap",
    control: "select",
    prefixes: ["flex-"],
    options: FLEX_WRAP_OPTIONS,
  },
  {
    id: "alignItems",
    section: "layout",
    label: "Align items",
    control: "select",
    prefixes: ["items-"],
    options: ALIGN_ITEMS_OPTIONS,
  },
  {
    id: "justifyContent",
    section: "layout",
    label: "Justify",
    control: "select",
    prefixes: ["justify-"],
    options: JUSTIFY_CONTENT_OPTIONS,
  },
  {
    id: "gap",
    section: "layout",
    label: "Gap",
    control: "select",
    prefixes: ["gap-"],
    options: GAP_OPTIONS,
    arbitraryFormat: (v) => `gap-[${v}]`,
  },
  {
    id: "gapX",
    section: "layout",
    label: "Gap X",
    control: "select",
    prefixes: ["gap-x-"],
    options: GAP_OPTIONS,
    arbitraryFormat: (v) => `gap-x-[${v}]`,
  },
  {
    id: "gapY",
    section: "layout",
    label: "Gap Y",
    control: "select",
    prefixes: ["gap-y-"],
    options: GAP_OPTIONS,
    arbitraryFormat: (v) => `gap-y-[${v}]`,
  },
  {
    id: "gridCols",
    section: "layout",
    label: "Grid cols",
    control: "select",
    prefixes: ["grid-cols-"],
    options: GRID_COLS_OPTIONS,
    arbitraryFormat: (v) => `grid-cols-[${v}]`,
  },
  {
    id: "overflow",
    section: "layout",
    label: "Overflow",
    control: "select",
    prefixes: ["overflow-"],
    options: OVERFLOW_OPTIONS,
  },
  {
    id: "position",
    section: "layout",
    label: "Position",
    control: "select",
    prefixes: [],
    exact: ["static", "relative", "absolute", "fixed", "sticky"],
    options: POSITION_OPTIONS,
  },
  {
    id: "zIndex",
    section: "layout",
    label: "Z-index",
    control: "select",
    prefixes: ["z-"],
    options: Z_INDEX_OPTIONS,
    arbitraryFormat: (v) => `z-[${v}]`,
  },

  // ── Border ───────────────────────────────────────────────
  {
    id: "borderWidth",
    section: "border",
    label: "Border width",
    control: "select",
    prefixes: ["border-"],
    exact: ["border"],
    options: BORDER_WIDTH_OPTIONS,
  },
  {
    id: "borderColor",
    section: "border",
    label: "Border color",
    control: "color",
    prefixes: ["border-"],
    options: COMMON_COLORS,
    arbitraryFormat: (v) => `border-[${v}]`,
  },
  {
    id: "borderRadius",
    section: "border",
    label: "Radius",
    control: "select",
    prefixes: ["rounded-"],
    exact: ["rounded"],
    options: BORDER_RADIUS_OPTIONS,
    arbitraryFormat: (v) => `rounded-[${v}]`,
  },

  // ── Effects ──────────────────────────────────────────────
  {
    id: "boxShadow",
    section: "effects",
    label: "Shadow",
    control: "select",
    prefixes: ["shadow-"],
    exact: ["shadow"],
    options: SHADOW_OPTIONS,
  },
  {
    id: "opacity",
    section: "effects",
    label: "Opacity",
    control: "select",
    prefixes: ["opacity-"],
    options: OPACITY_OPTIONS,
    arbitraryFormat: (v) => `opacity-[${v}]`,
  },
  {
    id: "blur",
    section: "effects",
    label: "Blur",
    control: "select",
    prefixes: ["blur-"],
    exact: ["blur"],
    options: BLUR_OPTIONS,
    arbitraryFormat: (v) => `blur-[${v}]`,
  },
];

// ── Reading current values from class list ──────────────────────────────

/**
 * Determine if a class is a font-size class.
 * `text-` is ambiguous (text-white, text-xl, text-center). We disambiguate
 * by checking against known suffix sets.
 */
function isFontSize(suffix: string): boolean {
  return FONT_SIZES.some((o) => o.value === suffix) ||
         suffix.startsWith("[") && suffix.endsWith("]");
}
function isTextAlign(suffix: string): boolean {
  return TEXT_ALIGN.some((o) => o.value === suffix);
}

/** Split Tailwind color opacity modifier, e.g. "white/60" → { base: "white", opacity: "60" }. */
function splitColorOpacity(suffix: string): { base: string; opacity?: string } {
  const slash = suffix.indexOf("/");
  if (slash === -1) return { base: suffix };
  return { base: suffix.slice(0, slash), opacity: suffix.slice(slash + 1) };
}

function isColorBase(base: string): boolean {
  if (base === "white" || base === "black" || base === "transparent" || base === "current" || base === "inherit") return true;
  if (base.startsWith("[") && base.endsWith("]")) return true;
  const m = /^([a-z]+)-([0-9]+)$/.exec(base);
  if (m && PALETTE_NAMES.includes(m[1]) && PALETTE_SHADES.includes(m[2])) return true;
  return false;
}

function isTextColor(suffix: string): boolean {
  const { base, opacity } = splitColorOpacity(suffix);
  if (opacity !== undefined && !/^[0-9]+$/.test(opacity)) return false;
  return isColorBase(base);
}
function isFontWeight(suffix: string): boolean {
  return FONT_WEIGHTS.some((o) => o.value === suffix);
}
function isLeading(suffix: string): boolean {
  return LEADING.some((o) => o.value === suffix) ||
         (suffix.startsWith("[") && suffix.endsWith("]"));
}
function isTracking(suffix: string): boolean {
  return TRACKING.some((o) => o.value === suffix) ||
         (suffix.startsWith("[") && suffix.endsWith("]"));
}

function isSpacingValue(suffix: string, allowAuto: boolean): boolean {
  if (suffix.startsWith("[") && suffix.endsWith("]")) return true;
  if (allowAuto && suffix === "auto") return true;
  return SPACING_SCALE.includes(suffix);
}

function isWidthHeightValue(suffix: string): boolean {
  if (suffix.startsWith("[") && suffix.endsWith("]")) return true;
  return WIDTH_OPTIONS.some((o) => o.value === suffix);
}

function isMaxWidthValue(suffix: string): boolean {
  if (suffix.startsWith("[") && suffix.endsWith("]")) return true;
  return MAX_WIDTH_VALUES.includes(suffix);
}

function isMinMaxSizeValue(suffix: string): boolean {
  if (suffix.startsWith("[") && suffix.endsWith("]")) return true;
  return MIN_MAX_SIZE_OPTIONS.some((o) => o.value === suffix);
}

function isSizingValue(suffix: string, propertyId: string): boolean {
  if (propertyId === "maxWidth") return isMaxWidthValue(suffix);
  if (propertyId === "minWidth" || propertyId === "maxHeight" || propertyId === "minHeight") {
    return isMinMaxSizeValue(suffix);
  }
  return isWidthHeightValue(suffix);
}

function matchesOptions(suffix: string, options?: PropertyOption[]): boolean {
  if (suffix.startsWith("[") && suffix.endsWith("]")) return true;
  return options?.some((o) => o.value === suffix) ?? false;
}

function readExactValue(property: PropertyDef, core: string, fullClass: string): { fullClass: string; value: string } | null {
  if (!property.exact?.includes(core)) return null;
  if (property.id === "borderWidth" && core === "border") return { fullClass, value: "__default__" };
  if (property.id === "borderRadius" && core === "rounded") return { fullClass, value: "__default__" };
  if (property.id === "boxShadow" && core === "shadow") return { fullClass, value: "__default__" };
  if (property.id === "blur" && core === "blur") return { fullClass, value: "__default__" };
  return { fullClass, value: core };
}

/**
 * Find the class on `classes` (ignoring variants) that "owns" the given property,
 * and return both the full class string and its parsed value.
 * Returns null if no class matches.
 */
export function readProperty(
  property: PropertyDef,
  classes: string[],
  activeVariants: string[] = []
): { fullClass: string; value: string } | null {
  for (const cls of classes) {
    const { variants, core } = splitVariants(cls);
    if (!variantsMatch(variants, activeVariants)) continue;

    if (property.exact) {
      const exactMatch = readExactValue(property, core, cls);
      if (exactMatch) return exactMatch;
    }

    for (const prefix of property.prefixes) {
      let coreMatch = core;
      let negative = false;
      if (coreMatch.startsWith("-")) {
        negative = true;
        coreMatch = coreMatch.slice(1);
      }
      if (!coreMatch.startsWith(prefix)) continue;
      const suffix = coreMatch.slice(prefix.length);
      if (!suffix && prefix !== "border-") continue;

      // The "text-" prefix is shared by font-size, text-align, and text-color.
      if (prefix === "text-") {
        if (property.id === "fontSize" && isFontSize(suffix)) return { fullClass: cls, value: suffix };
        if (property.id === "textAlign" && isTextAlign(suffix)) return { fullClass: cls, value: suffix };
        if (property.id === "textColor" && isTextColor(suffix)) return { fullClass: cls, value: suffix };
        continue;
      }
      if (prefix === "font-") {
        if (property.id === "fontWeight" && isFontWeight(suffix)) return { fullClass: cls, value: suffix };
        continue;
      }
      if (prefix === "leading-") {
        if (isLeading(suffix)) return { fullClass: cls, value: suffix };
        continue;
      }
      if (prefix === "tracking-") {
        if (isTracking(suffix)) return { fullClass: cls, value: suffix };
        continue;
      }
      if (prefix === "bg-") {
        if (property.id === "bgColor" && isTextColor(suffix)) return { fullClass: cls, value: suffix };
        continue;
      }
      if (prefix === "border-") {
        if (property.id === "borderColor" && isTextColor(suffix)) return { fullClass: cls, value: suffix };
        if (property.id === "borderWidth" && BORDER_WIDTH_VALUES.includes(suffix)) return { fullClass: cls, value: suffix };
        continue;
      }
      if (prefix === "flex-") {
        if (property.id === "flexDirection" && FLEX_DIRECTION_VALUES.includes(suffix)) return { fullClass: cls, value: suffix };
        if (property.id === "flexWrap" && FLEX_WRAP_VALUES.includes(suffix)) return { fullClass: cls, value: suffix };
        continue;
      }
      if (prefix === "rounded-") {
        if (property.id === "borderRadius" && (BORDER_RADIUS_VALUES.includes(suffix) || (suffix.startsWith("[") && suffix.endsWith("]")))) {
          return { fullClass: cls, value: suffix };
        }
        continue;
      }
      if (prefix === "shadow-") {
        if (property.id === "boxShadow" && SHADOW_VALUES.includes(suffix)) return { fullClass: cls, value: suffix };
        continue;
      }
      if (prefix === "blur-") {
        if (property.id === "blur" && BLUR_VALUES.includes(suffix)) return { fullClass: cls, value: suffix };
        continue;
      }
      if (property.section === "spacing") {
        const allowAuto = property.id.startsWith("margin");
        if (!isSpacingValue(suffix, allowAuto)) continue;
        const value = negative && property.id.startsWith("margin") ? `-${suffix}` : suffix;
        return { fullClass: cls, value };
      }
      if (property.section === "sizing") {
        if (!isSizingValue(suffix, property.id)) continue;
        return { fullClass: cls, value: suffix };
      }
      if (property.section === "layout" || property.section === "effects") {
        if (!matchesOptions(suffix, property.options)) continue;
        return { fullClass: cls, value: suffix };
      }
    }
  }
  return null;
}

/** Build the new class for a property + value. */
export function buildClass(
  property: PropertyDef,
  value: string,
  activeVariants: string[] = []
): string {
  // Toggles use the exact class
  if (property.control === "toggle") {
    return applyVariants(property.exact?.[0] || "", activeVariants);
  }

  if (value === "__default__") {
    if (property.id === "borderWidth") return applyVariants("border", activeVariants);
    if (property.id === "borderRadius") return applyVariants("rounded", activeVariants);
    if (property.id === "boxShadow") return applyVariants("shadow", activeVariants);
    if (property.id === "blur") return applyVariants("blur", activeVariants);
  }

  let negative = false;
  let val = value;
  if (property.section === "spacing" && property.id.startsWith("margin") && val.startsWith("-")) {
    negative = true;
    val = val.slice(1);
  }

  let coreClass: string;
  // Arbitrary values
  if (val.startsWith("[") && val.endsWith("]") && property.arbitraryFormat) {
    coreClass = property.arbitraryFormat(val.slice(1, -1));
    if (negative) coreClass = `-${coreClass}`;
  } else if (property.exact && property.exact.includes(val)) {
    coreClass = val;
  } else {
    const prefix = property.prefixes[0] || "";
    coreClass = prefix + val;
    if (negative) coreClass = `-${coreClass}`;
  }
  return applyVariants(coreClass, activeVariants);
}

// ── Phase C: Variants, arbitrary helpers, unmapped classes ─────────────

export const VARIANT_OPTIONS = [
  "hover", "focus", "focus-visible", "active", "disabled", "visited",
  "sm", "md", "lg", "xl", "2xl",
  "dark", "light",
  "first", "last", "odd", "even",
  "group-hover", "peer-hover", "peer-focus",
] as const;

export function variantsMatch(classVariants: string[], activeVariants: string[]): boolean {
  if (activeVariants.length === 0) return classVariants.length === 0;
  if (classVariants.length !== activeVariants.length) return false;
  return activeVariants.every((v, i) => classVariants[i] === v);
}

export function applyVariants(coreClass: string, activeVariants: string[]): string {
  if (activeVariants.length === 0) return coreClass;
  return `${activeVariants.join(":")}:${coreClass}`;
}

/** Unique variant stacks present on an element's class list. */
export function collectVariantStacks(classes: string[]): string[][] {
  const seen = new Set<string>();
  const stacks: string[][] = [];
  for (const cls of classes) {
    const { variants } = splitVariants(cls);
    if (!variants.length) continue;
    const key = variants.join(":");
    if (seen.has(key)) continue;
    seen.add(key);
    stacks.push(variants);
  }
  return stacks.sort((a, b) => a.length - b.length || a.join(":").localeCompare(b.join(":")));
}

/** Classes on the element that no property control currently claims. */
export function getUnmappedClasses(classes: string[]): string[] {
  const mapped = new Set<string>();
  for (const cls of classes) {
    const { variants } = splitVariants(cls);
    for (const prop of PROPERTY_DEFS) {
      const result = readProperty(prop, [cls], variants);
      if (result?.fullClass === cls) {
        mapped.add(cls);
        break;
      }
    }
  }
  return classes.filter((c) => c && !mapped.has(c));
}

/** Format a variant stack for display, e.g. ["hover","md"] → "hover › md". */
export function formatVariantStack(variants: string[]): string {
  return variants.length ? variants.join(" › ") : "Default";
}