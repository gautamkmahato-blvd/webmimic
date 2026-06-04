export const DESIGN_EVIDENCE_PROMPT = String.raw`

Analyze the provided website using:

1. The website screenshot(s)
2. The design system information provided
3. The design details files provided (including design.md and any other design-related documentation)

Your goal is to create a complete UI/UX reverse-engineering document that would allow a professional UI/UX designer to recreate a visually and structurally similar website.

## Component Analysis

Identify every unique UI component used throughout the website.

* Do NOT repeat components that share the same design pattern.
* Only create a new component entry when the design differs visually or functionally.
* Include all visible components such as:

  * Navbar
  * Buttons
  * Cards
  * Links
  * Input fields
  * Dropdowns
  * Search bars
  * Modals
  * Tabs
  * Accordions
  * Badges
  * Avatars
  * Tooltips
  * Pagination
  * Tables
  * Forms
  * Footer elements
  * CTA sections
  * Any custom components

For each component provide:

* Component name
* Component category
* Purpose
* Visual description
* Dimensions (only when clearly available or reasonably inferable)
* Spacing and padding
* Border details
* Border radius
* Shadow/elevation
* Background treatment
* Typography
* Font size
* Font weight
* Text color
* Icon usage
* States (default, hover, active, focus, disabled)
* Interaction behavior
* Responsive behavior
* Accessibility observations
* Reusability notes

## Layout Analysis

Analyze every major page section separately.

For each section provide:

* Section name
* Section purpose
* Position on page
* Layout type (grid, flex, masonry, split-screen, etc.)
* Container width
* Max width
* Alignment
* Column structure
* Row structure
* Gap values
* Padding
* Margins
* Responsive behavior
* Visual hierarchy
* Content ordering
* CTA placement
* Image placement
* Text placement
* Component relationships
* Desktop layout details
* Tablet layout details
* Mobile layout details

## Design Value Extraction Rules

* Use design values only from the provided design files, design.md, design documentation, and element design details whenever available.
* Do not invent colors, typography scales, spacing systems, border radii, shadows, or other design tokens if they are already defined in the provided files.
* If a design value is not explicitly available in the provided files, infer it cautiously from the screenshot and clearly mark it as "estimated".
* When there is ambiguity between documentation and screenshots, prioritize the documented design values and use screenshots only for visual confirmation.
* Use screenshots to understand component appearance, layout structure, hierarchy, spacing relationships, and interaction patterns when documentation is unclear.

## Output Rules

* Output ONLY valid JSON.
* Do not include explanations outside JSON.
* Use descriptive keys.
* Provide enough detail for a UI/UX designer to recreate a visually similar interface, but avoid excessive low-level details that do not materially affect implementation or design reproduction.
* Focus on meaningful design characteristics and layout decisions rather than overly granular measurements.
* Group the output into:

{
"components": [],
"layouts": []
}

* Avoid duplicate components.
* If a component appears multiple times with the same design, document it only once and reference its reuse.
* Estimate values only when necessary and mark them as "estimated".


`