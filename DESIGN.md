# Design Brief

## Direction

Clean Modern Light — Stripe-inspired layout, Notion-style content blocks, Zomato casual tone. Light backgrounds, teal accents, amber highlights for ratings. Personal, conversational student guide aesthetic.

## Tone

Clean, trustworthy, human — like a senior honestly advising a junior. Stripe's clarity and spacing, Notion's readability and structure, Zomato's casual reviews and ratings.

## Differentiation

Zomato-style rating badges (6/10) and pro/con callout cards for each major section; clean card grid layout; teal CTA accent; amber accent for ratings/highlights; smooth, accessible hover states.

## Color Palette

| Token       | OKLCH           | Role                                   |
| ----------- | --------------- | -------------------------------------- |
| background  | 0.99 0.002 280  | Soft off-white primary                 |
| foreground  | 0.25 0.02 280   | Dark charcoal text                     |
| card        | 1.0 0.0 0       | Pure white card containers             |
| primary     | 0.55 0.12 200   | Teal CTA accent (trust-building)       |
| secondary   | 0.72 0.12 70    | Amber/orange for ratings               |
| muted       | 0.93 0.01 280   | Light gray subtle UI                   |
| destructive | 0.55 0.22 25    | Warning state (red)                    |

## Typography

- Display: DM Sans — clean sans-serif for section headers and emphasis
- Body: Figtree — readable body copy and UI labels at 16px base
- Mono: Geist Mono — code and technical content
- Scale: Hero `text-5xl md:text-7xl`, H2 `text-2xl md:text-3xl`, H3 `text-lg md:text-xl`, body `text-base`

## Elevation & Depth

Subtle soft shadows on cards (2–8px, 0.08–0.15 opacity), soft hover lift, light gray background creates depth through minimal layering.

## Structural Zones

| Zone    | Background | Border  | Notes                                 |
| ------- | ---------- | ------- | ------------------------------------- |
| Header  | background | border  | Sticky, clean logo + nav, no fill     |
| Hero    | background | none    | Full-width intro with teal CTA        |
| Cards   | card       | border  | White cards on gray background, hover |
| Sections| background | divider | Clean grid of content blocks          |
| Footer  | muted      | border-t| Light gray with top border            |

## Spacing & Rhythm

8pt grid: 16px section gaps, 24px card padding, 12px internal spacing. Clean white cards with soft shadows on light gray background. Spacious layout with clear breathing room.

## Component Patterns

- Buttons: teal background, white text, soft shadow on hover, 8px radius
- Cards: white background, light border, soft shadow, 12px radius, hover lift
- Rating badges: 48px circular, amber background, dark text (Zomato-style)
- Pro/Con callouts: inline colored borders (green for pros, red for cons), 12px radius

## Motion

- Entrance: fade-in-up 0.6s on scroll, staggered sections
- Hover: shadow lift, 0.3s smooth transition
- Scroll: subtle fade, no parallax

## Constraints

- Light mode primary (no dark toggle required)
- 8pt baseline grid throughout
- AA+ contrast on all text (≥7:1 foreground on background)
- Mobile first: 640px (sm), 768px (md), 1024px (lg)
- Soft shadows only — no harsh/aggressive depth

## Signature Detail

Zomato-style rating badges paired with pro/con callout cards create an honest, review-focused aesthetic that positions the site as peer-to-peer advice, not institutional marketing.
