export const DESIGN_EVIDENCE_PROMPT = String.raw`

Analyze the provided website using:

1. The website screenshot(s)
2. The design system information provided
3. The design details files provided (including design.md and any other design-related documentation)

Your goal is to create a complete UI/UX reverse-engineering document that would allow a professional UI/UX designer to recreate a visually and structurally similar website.

---

# UI AUDIT STATEMENT

Treat this as a UI audit rather than a summary.

The objective is NOT to identify only the main sections.

The objective is to document EVERY visually distinct section and EVERY unique reusable component visible on the page.

Missing sections or components are considered an error.

---

# SECTION COUNT VERIFICATION (MANDATORY FIRST STEP)

Before generating any analysis:

1. Perform a first pass whose sole purpose is section detection and counting.
2. Identify ALL visually distinct sections in the screenshot(s).
3. Count them accurately.
4. Store the count in:

   "estimated_section_count"

5. This count MUST include every:
   - Section block
   - CTA strip
   - Logo bar
   - Feature row
   - Feature grid
   - Testimonial block
   - FAQ block
   - Banner
   - Divider section
   - Integration section
   - Any visually separated UI region

6. This step must happen BEFORE any layout or component generation.

---

# SECTION DETECTION REQUIREMENTS

1. Scan the entire page from top to bottom.
2. Identify EVERY visually distinct section.
3. Do NOT merge sections unless they are visually AND functionally identical.
4. Treat each visually separated content block as an independent section.
5. Include ALL section types including:
   - Navbar sections
   - Hero sections
   - Logo bars
   - Trust indicators
   - Feature rows
   - Feature grids
   - Bento grids
   - CTA strips
   - Integration sections
   - Testimonial sections
   - Review walls
   - Rating sections
   - FAQ sections
   - Pricing sections
   - Comparison sections
   - Footer sections
   - Announcement banners
   - Tab sections
   - Category sections
   - Feature highlight sections
   - Statistics sections
   - Supporting micro sections

6. If a region has any of the following, treat it as a separate section:
   - Unique background
   - Card grouping
   - Spacing separation
   - Heading + content block
   - Divider separation
   - Visual container

7. Preserve exact top-to-bottom order.

8. If unsure whether something is a section → INCLUDE IT.

---

# SECTION INVENTORY OUTPUT (FIRST OUTPUT BLOCK)

Generate first:

{
  "estimated_section_count": 0,
  "section_inventory": [
    {
      "section_number": 1,
      "section_name": "",
      "section_type": "",
      "position": "",
      "visual_identifier": ""
    }
  ]
}

---

# COMPONENT DETECTION REQUIREMENTS

Perform a complete component inventory across ALL sections.

Rules:
- Traverse each section independently.
- Extract all unique UI components.
- Do NOT duplicate identical components.
- A new component is created ONLY if:
  - Visual style differs
  - Layout structure differs
  - Interaction behavior differs

Include ALL components such as:
- Navbar
- Buttons
- Cards
- Feature cards
- Testimonial cards
- CTA banners
- Inputs
- Dropdowns
- Tabs
- Accordions
- Badges
- Chips
- Avatars
- Tooltips
- Modals
- Tables
- Pagination
- Forms
- Logo groups
- Rating components
- Integration components
- Footer elements
- Any custom UI pattern

Each component MUST include:

- component_name
- component_category
- purpose
- visual_description
- used_in_sections
- dimensions (only if visible or inferable)
- spacing_padding
- border_details
- border_radius
- shadow_elevation
- background_treatment
- typography
- text_styles
- icon_usage
- states
- interaction_behavior
- responsive_behavior
- accessibility_observations
- reusability_notes

---

# LAYOUT ANALYSIS REQUIREMENTS

1. Use ONLY sections defined in section_inventory.
2. Every section MUST have a matching layout object.
3. DO NOT skip small or simple sections.

For each section:

- section_name
- section_type
- section_number
- section_purpose
- position_on_page
- layout_type
- container_width
- max_width
- alignment
- column_structure
- row_structure
- gap_values
- padding
- margins
- responsive_behavior
- visual_hierarchy
- content_ordering
- CTA_placement
- image_placement
- text_placement
- component_relationships
- desktop_layout_details
- tablet_layout_details
- mobile_layout_details

---

# COMPLETENESS VALIDATION (MANDATORY FINAL CHECK)

Before outputting JSON:

1. Verify every visible section is included in section_inventory.
2. Verify number of layouts == estimated_section_count.
3. Verify every section has exactly one layout entry.
4. Verify every component includes used_in_sections mapping.
5. If any mismatch exists:
   - Re-scan screenshot
   - Add missing sections/components
   - Rebuild output

No exceptions.

---

# DESIGN VALUE RULES

1. Use values ONLY from:
   - design.md
   - design system files
   - provided design documentation

2. Never invent design tokens if already provided.

3. If missing:
   - Infer cautiously from screenshot
   - Mark as "estimated"

4. Screenshot usage:
   - Layout structure
   - Spacing relationships
   - Visual hierarchy
   - Component appearance
   - Alignment patterns

---

# OUTPUT RULES

- Output ONLY valid JSON
- No explanations outside JSON
- No extra commentary
- Must be complete and exhaustive
- Avoid duplicate components
- Estimated values must be labeled "estimated"

---

# FINAL OUTPUT FORMAT

{
  "estimated_section_count": 0,
  "section_inventory": [],
  "components": [],
  "layouts": []
}

`