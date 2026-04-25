# Design Brief

## Direction

Dark Editorial Cinema — Bold, commanding, luxe interface inspired by donmolinico.es. Deep near-black backgrounds, large serif typography, crimson + gold accents, full-screen chapters, minimal navigation.

## Tone

Cinematic, sophisticated, authoritative — magazine editorial aesthetic; chapter-based storytelling; luxe without pretense; bold typography as primary design element.

## Differentiation

Each section is a visual "chapter" with its own composition; full-screen hero sections; bold serif headings commanding the page; minimal navigation (hamburger + logo); smooth scroll animations; crimson/gold accent hierarchy.

## Color Palette

| Token      | OKLCH           | Role                                   |
| ---------- | --------------- | -------------------------------------- |
| background | 0.05 0.01 230   | Deep near-black primary                |
| foreground | 0.92 0.01 230   | Cream/off-white text                   |
| card       | 0.08 0.01 230   | Slightly lighter card containers       |
| primary    | 0.35 0.18 25    | Crimson/maroon (Navarra red) accent    |
| secondary  | 0.65 0.14 55    | Gold/amber highlights & dividers       |
| muted      | 0.15 0.01 230   | Muted dark text, subtle elements       |
| destructive| 0.55 0.22 25    | Warning state (warm red)               |

## Typography

- Display: Fraunces — bold serif for heroic headings, section titles, emphasis
- Body: Figtree — paragraphs, UI labels, body copy at 16px
- Mono: Geist Mono — code, technical content
- Scale: Hero `text-5xl md:text-7xl`, H2 `text-3xl md:text-5xl`, H3 `text-xl md:text-2xl`, body `text-base`

## Elevation & Depth

Cinematic depth: full-width sections with deep shadows (20px 60px at 0.5 opacity), card elevation subtle (4px 12px at 0.3 opacity), header flat. Gold accent lines create visual rhythm between chapters.

## Structural Zones

| Zone    | Background | Border | Notes |
| ------- | ---------- | ------ | ----- |
| Header  | background | none   | Minimal: logo + hamburger, sticky, no background change |
| Hero    | background | none   | Full-screen, centered bold typography, deep depth |
| Chapters| background | divider| Full-width sections, gold chapter dividers, varied composition |
| Footer  | card | border-t | Slightly elevated background with top border |

## Spacing & Rhythm

Full-screen immersion: 64px+ section gaps, 40px hero padding, 32px chapter padding, 6px accent accents. Gold dividers create chapter breaks; negative space dominates.

## Component Patterns

- Buttons: primary (crimson bg, cream text, no radius), secondary (gold bg, dark text), hover (shadow-lg-cinema)
- Cards: minimal borders, dark card bg, subtle shadow, gold accent top edge optional
- Headings: bold Fraunces serif, gold accent underline optional, tracking-tight
- Lists: minimal bullets, 24px spacing, gold accent bullets optional

## Motion

- Entrance: fade-in-up (0.6s ease-out) on scroll, staggered sections
- Hover: subtle lift (2px shadow increase), 0.2s smooth
- Scroll: chapters fade in as viewport enters, smooth parallax optional

## Constraints

- Full-width backgrounds only (no max-width containers for sections)
- Minimal navigation (hamburger + logo only)
- Text contrast minimum AA+ (all foreground on background ≥7:1)
- Mobile breakpoints: 640px (sm), 768px (md), 1024px (lg)
- No decorative elements except chapter dividers

## Signature Detail

Bold serif typography filling full-screen hero sections, punctuated by crimson accents and gold chapter dividers, creates a commanding editorial presence. Minimal navigation keeps focus on content storytelling.
