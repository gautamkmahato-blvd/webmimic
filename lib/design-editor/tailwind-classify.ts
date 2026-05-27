/**
 * Categorize a Tailwind utility class into a property group.
 * Best-effort prefix matching — covers ~95% of real-world classes.
 * Unknown classes fall into the "other" bucket.
 */

export type TwGroup =
  | "layout"
  | "spacing"
  | "sizing"
  | "typography"
  | "color"
  | "border"
  | "effects"
  | "transform"
  | "interactivity"
  | "other";

export const GROUP_LABELS: Record<TwGroup, string> = {
  layout: "Layout",
  sizing: "Size",
  spacing: "Spacing",
  typography: "Typography",
  color: "Color",
  border: "Border",
  effects: "Effects",
  transform: "Transform",
  interactivity: "Interaction",
  other: "Other",
};

export const GROUP_ORDER: TwGroup[] = [
  "layout",
  "sizing",
  "spacing",
  "typography",
  "color",
  "border",
  "effects",
  "transform",
  "interactivity",
  "other",
];

interface Rule {
  group: TwGroup;
  prefixes: string[];
  /** Exact matches (no prefix). */
  exact?: string[];
}

const RULES: Rule[] = [
  {
    group: "layout",
    exact: ["block", "inline", "inline-block", "flex", "inline-flex", "grid", "inline-grid", "hidden", "contents", "table", "flow-root"],
    prefixes: [
      "flex-", "items-", "justify-", "content-", "self-", "place-",
      "grid-", "col-", "row-", "gap-", "order-",
      "float-", "clear-", "object-", "overflow-", "overscroll-",
      "static", "fixed", "absolute", "relative", "sticky",
      "top-", "right-", "bottom-", "left-", "inset-", "z-",
      "isolate", "isolation-", "container",
      "aspect-",
    ],
  },
  {
    group: "sizing",
    prefixes: ["w-", "min-w-", "max-w-", "h-", "min-h-", "max-h-", "size-"],
  },
  {
    group: "spacing",
    prefixes: ["p-", "px-", "py-", "pt-", "pr-", "pb-", "pl-", "ps-", "pe-",
               "m-", "mx-", "my-", "mt-", "mr-", "mb-", "ml-", "ms-", "me-",
               "space-"],
  },
  {
    group: "typography",
    exact: ["italic", "not-italic", "uppercase", "lowercase", "capitalize", "normal-case", "underline", "overline", "line-through", "no-underline", "antialiased", "subpixel-antialiased", "truncate"],
    prefixes: [
      "font-", "text-", "leading-", "tracking-", "decoration-",
      "underline-", "list-", "indent-", "align-", "whitespace-",
      "break-", "hyphens-", "content-",
    ],
  },
  {
    group: "color",
    prefixes: ["bg-", "from-", "via-", "to-", "fill-", "stroke-", "caret-", "accent-", "placeholder-"],
  },
  {
    group: "border",
    prefixes: ["border", "rounded", "divide-", "outline-", "ring-"],
  },
  {
    group: "effects",
    prefixes: ["shadow", "opacity-", "mix-blend-", "bg-blend-", "blur", "brightness-", "contrast-", "drop-shadow", "grayscale", "hue-rotate-", "invert", "saturate-", "sepia", "backdrop-", "filter"],
  },
  {
    group: "transform",
    prefixes: ["transform", "scale-", "rotate-", "translate-", "skew-", "origin-", "perspective-", "preserve-3d", "rotate-x-", "rotate-y-", "rotate-z-"],
  },
  {
    group: "interactivity",
    prefixes: ["cursor-", "pointer-events-", "select-", "resize", "scroll-", "snap-", "touch-", "user-select-", "appearance-", "will-change-", "transition", "duration-", "ease-", "delay-", "animate-"],
  },
];

/**
 * Strip Tailwind variants (hover:, md:, dark:, etc.) before matching.
 * Returns { variants, core } so the panel can show them grouped.
 */
export function splitVariants(cls: string): { variants: string[]; core: string } {
  // Handle arbitrary variants like [&>div]:bg-red-500 by splitting on the last `:`
  // outside of brackets. Simpler heuristic: split on `:` not inside [].
  const variants: string[] = [];
  let depth = 0;
  let lastSplit = 0;
  for (let i = 0; i < cls.length; i++) {
    const ch = cls[i];
    if (ch === "[") depth++;
    else if (ch === "]") depth--;
    else if (ch === ":" && depth === 0) {
      variants.push(cls.slice(lastSplit, i));
      lastSplit = i + 1;
    }
  }
  return { variants, core: cls.slice(lastSplit) };
}

export function classifyTailwind(cls: string): TwGroup {
  const { core } = splitVariants(cls);
  // Strip leading "-" for negative utilities (e.g. -mt-4)
  const c = core.startsWith("-") ? core.slice(1) : core;

  for (const rule of RULES) {
    if (rule.exact && rule.exact.includes(c)) return rule.group;
    if (rule.prefixes.some((p) => c.startsWith(p))) return rule.group;
  }
  return "other";
}

export function groupClasses(classes: string[]): Record<TwGroup, string[]> {
  const result = Object.fromEntries(GROUP_ORDER.map((g) => [g, []])) as unknown as Record<TwGroup, string[]>;
  for (const cls of classes) {
    if (!cls) continue;
    result[classifyTailwind(cls)].push(cls);
  }
  return result;
}