export const DESIGN_EVIDENCE_PROMPT = String.raw`

Analyze the provided website using:
1. Screenshot(s)
2. Design system files (design.md, other docs)
3. Element design detail files

The goal is to create a complete UI/UX reference JSON with:
- Components
- Layouts
- Section inventory

Requirements:

## Section & Layout Extraction
- Scan top to bottom.
- Identify all visually distinct sections, including micro-sections, CTA strips, logo bars, feature rows, testimonial walls, banners, rating sections, integration sections, tab sections, FAQ blocks, and footers.
- Preserve exact visual order.
- Describe each section with:
  - Name, type, position
  - Visual description
  - Layout type
  - Container width, max width, alignment, columns, rows, gaps, padding, margins
  - Component relationships
  - Desktop, tablet, mobile layout differences
  - CTA, image, and text placement

## Component Extraction
- Identify every unique component (buttons, cards, accordions, badges, inputs, forms, modals, etc.)
- Describe each component with:
  - Name, category, purpose
  - Visual description
  - Dimensions, padding, border, border radius, shadow
  - Background, typography, text styles, icon usage
  - States (hover, focus, active, disabled)
  - Interaction behavior
  - Responsive behavior
  - Accessibility observations
  - Reusability notes
  - Sections where used (\`used_in_sections\`)

## Do's and Don'ts

**GROUNDING RULE:** Every color, font, weight, radius, and spacing value you
reference in a Do or Don't MUST exist in the design.md token inventory. Before
writing any rule:
  1. Find the exact token name and value in design.md
  2. If a value doesn't exist in design.md, don't reference it
  3. If the screenshot suggests a color/font that contradicts design.md,
     trust design.md — screenshots compress colors and anti-alias fonts
  4. Use the design.md token name alongside the value
     (e.g. "--color-dark-gray-3 (#111111)" not just "#111111")

The screenshot tells you WHERE and HOW tokens are used.
The design.md tells you WHAT the exact values are.
Combine both — but when they conflict, design.md wins.

---

Derive 6-8 Do's and 6-8 Don'ts from the SPECIFIC patterns you observe in
this site's design system.

Every rule must:
  - Reference a specific design.md token name + value or a documented component
  - Be something a designer could get WRONG without studying this site carefully
  - Explain WHY in one sentence — what breaks visually if the rule is violated

### Areas to cover (pick the ones that apply to this site):

**Color roles:**
- Which token is the primary CTA color? What is it NOT? (e.g. "primary is
  near-black --color-dark-gray-3, not blue — accent colors never appear on CTAs")
- Are accent/brand colors used sparingly? Where exactly do they appear?
- Are there colors reserved for specific semantic roles (error, success, warning)?

**Font boundaries:**
- Which font family handles display/headlines vs body/UI text?
- Is the boundary strict (never cross them) or flexible?
- Which font weights are used and which are deliberately avoided?
- Is there a letter-spacing rule tied to specific font sizes?

**Radius hierarchy:**
- Which radius token goes on buttons vs cards vs avatars vs pills?
- What is the maximum radius used on cards? (exceeding it changes the feel)

**Surface distribution:**
- Does the site use dark surfaces sparingly? If so, where are they allowed?
- What is the dominant page canvas — light or dark?
- Are there surface colors reserved for specific components (e.g. featured tier)?

**Spacing discipline:**
- What is the section-level vertical rhythm? Is it consistent?
- What are the standard card internal padding values?
- What spacing breaks the rhythm if changed?

**Component constraints:**
- Are there signature components with specific rules (e.g. pill-in-pill nav,
  gradient CTA, dark featured card)?
- How does the site signal emphasis — color inversion, scale, weight, or shadow?

### What NOT to write:
- NO generic advice ("maintain consistency", "use whitespace effectively",
  "follow accessibility guidelines")
- NO rules that apply to every website — every rule must be specific to THIS site
- NO values that aren't in design.md — if you can't find the token, skip the rule
- NO rules about hover states, animations, or transitions unless motion tokens
  exist in design.md

## Key Characteristics

List 6-10 bullet points that describe what makes this site's design VISUALLY DISTINCTIVE. A designer reading only this list should be able to identify the site from a lineup.

For each characteristic:
- State the specific pattern with exact token values
- Name the component or surface where it appears
- Note what makes it unusual compared to typical SaaS sites

Focus on: primary CTA color + shape, display typeface + tracking, card surface treatment, signature interactive components (e.g. pill-in-pill nav), elevation philosophy, dark/light surface distribution, the brand's overall "feel" in one sentence.

## Design Values
- Use only values from provided design files.
- If missing, estimate from screenshot and mark \`"estimated"\`.
- Do not invent new colors, font sizes, border radii, spacing, or shadows if they exist in design files.

## Output Rules
- Output ONLY valid JSON.
- Avoid duplicates.
- Include enough detail for a designer to recreate the UI visually.
- Structure:

{
  "overview": "Give a basic overview of the website, Example: Cal.com's marketing surface is a clean...",
  "semanticColors": "| Role | Token | Value |\n...",
  "typographyHierarchy": "| Token | Size | Use |\n...",
  "components": [],
  "layouts": [],
  "dosAndDonts": "### Do\n...",
  "keyCharacteristics": "- White canvas with..."
}
  

`