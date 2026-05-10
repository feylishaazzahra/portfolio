# AGENTS.md

## Project Context

This is a design portfolio website for Feylisha Azzahra.

The website is based on an existing Canva/PDF portfolio design. The goal is not to copy the PDF slide layout exactly, but to convert the visual identity into a polished, responsive, production-ready web portfolio.

Visual direction:
- Purple / lavender creative identity
- Modern editorial portfolio
- Soft 3D / glassmorphism feel
- Smooth animation
- Large visual project previews
- Premium design portfolio look
- Clean typography
- Responsive for mobile, tablet, and desktop

## Tech Stack

Use:
- Next.js App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- Vercel deployment

Avoid:
- Plain CSS unless necessary
- Overly generic SaaS landing page style
- Dark UI that hides the project images
- Copying Canva layout 1:1 without adapting it for web

## 21st.dev / Magic MCP Usage

The MCP server named `21st-magic` is connected to 21st.dev Magic.

When I ask for UI sections, components, hero sections, cards, galleries, animations, or layouts inspired by 21st.dev, use the `21st-magic` MCP server first.

When I provide a 21st.dev component URL, treat it as the visual/reference component to recreate or adapt.

Do not simply mention the component. Generate usable React/Next.js component code and integrate it into the project.

If the 21st.dev component style does not directly match this portfolio, adapt it to:
- Feylisha Azzahra portfolio branding
- Purple/lavender palette
- Portfolio project imagery
- Responsive design
- Accessibility
- Clean reusable components

## Component Rules

Create reusable components in `/components`.

Use data files in `/data` when possible:
- `/data/projects.ts`
- `/data/experience.ts`
- `/data/skills.ts`

Use local assets from:
- `/public/images/projects`
- `/public/images/profile`
- `/public/images/decorations`

If assets are missing, create clean placeholder paths and clearly mark where I should place the images.

## Quality Checks

After implementation, run:
- `npm run lint`
- `npm run build`

Fix any errors before finishing.

## Current Priority

Build a polished portfolio homepage with these sections:
1. Navbar
2. Hero
3. About
4. Skills
5. Experience timeline
6. Featured project / UI UX case study
7. Project gallery
8. Contact CTA
9. Footer

linkedin link: https://www.linkedin.com/in/feylisha-azzahra/