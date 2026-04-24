# Design Brief

## Direction

Cool Serene Light — Clean, modern, airy educational interface for student information and campus resources.

## Tone

Calm, approachable, accessible — no corporate stiffness; educational without being sterile; student-friendly warmth with clear hierarchy.

## Differentiation

Content-first layout with alternating section backgrounds for visual rhythm, clear card hierarchy with subtle shadows, and responsive mobile-first design.

## Color Palette

| Token      | OKLCH           | Role                                   |
| ---------- | --------------- | -------------------------------------- |
| background | 0.98 0.008 230  | Primary light background (cool off-white) |
| foreground | 0.18 0.015 230  | Primary text color (cool dark)         |
| card       | 1.0 0.004 230   | Content cards (pure white)             |
| primary    | 0.42 0.14 240   | CTAs, links (deep ocean blue)          |
| accent     | 0.6 0.15 170    | Secondary actions (teal)               |
| muted      | 0.94 0.01 230   | Section backgrounds (light gray)       |
| destructive| 0.55 0.22 25    | Warnings, errors (warm red)            |

## Typography

- Display: Space Grotesk — section headings, hero text, emphasis
- Body: Figtree — paragraphs, UI labels, body copy
- Mono: Geist Mono — code, technical content
- Scale: Hero `text-4xl md:text-5xl font-bold`, H2 `text-2xl md:text-3xl font-bold`, label `text-xs font-semibold uppercase`, body `text-base`

## Elevation & Depth

Subtle shadow hierarchy: cards elevated with `shadow-sm` (light 8% opacity), interactive zones with `shadow-md` (12% opacity), flat header/footer with border only. No decorative shadows or glows.

## Structural Zones

| Zone    | Background | Border | Notes |
| ------- | ---------- | ------ | ----- |
| Header  | card | border-b | Logo + navigation, white card with subtle divider |
| Content | alternating muted/background | — | Sections alternate between background and muted; cards on white background |
| Footer  | muted | border-t | Footer content on light gray background with top border |

## Spacing & Rhythm

Spacious density: 48px section gaps, 24px card padding, 12px content groups, 4px micro-spacing. Alternating muted sections create visual rhythm without overcrowding.

## Component Patterns

- Buttons: primary (ocean blue bg, white text, rounded-md), secondary (muted bg, dark text), disabled (muted 50% opacity)
- Cards: rounded-md, white background, `shadow-sm`, `border-border` for selected/interactive state
- Badges: pill-shaped (rounded-full), muted background with dark text or primary background with white text
- Lists: bullet points or structured cards, 16px spacing between items

## Motion

- Entrance: fade-in on scroll (0.3s ease-out), no bounce
- Hover: subtle scale (1.02) + shadow-md on interactive elements (0.2s smooth)
- Decorative: none — functionality over decoration for educational context

## Constraints

- No full-width backgrounds except structural zones (header/footer)
- Maximum content width 1200px with 2rem side padding
- All interactive elements must have clear hover states
- Text contrast minimum AA+ (7:1 for body, 4.5:1 for large text)
- Mobile breakpoints: 640px (sm), 768px (md), 1024px (lg), 1280px (xl)

## Signature Detail

Clear visual hierarchy through deliberately varied section backgrounds (alternating muted/light) creates rhythm and reduces cognitive load for information-dense educational content.
