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
  "estimated_section_count": <number>,
  "components": [],
  "layouts": []
}

`