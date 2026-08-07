# ReNova OS — Phase 0 Design Foundation

This document is the reference for everything in `/app`, `/components`, and
`/lib`. It is written so any future phase — real dashboards, resident
records, program builders — can be designed and built without inventing new
visual language. If a future screen needs something not covered here, extend
this system deliberately; don't improvise around it.

---

## 1. Design philosophy

ReNova OS is an instrument, not a stage. Correctional software has
historically looked like one of two things: a punitive command-and-control
panel, or a generic SaaS admin template wearing a prison's name. Both are
wrong for this product.

The working metaphor is a **calm operations center** — the kind that
monitors something important without dramatizing it. NASA Mission Control
doesn't flash red because a system is nominal; it stays quiet, and reserves
emphasis for what actually needs a human's attention. ReNova OS follows the
same logic: the interface is confident enough to be quiet. Precision reads
as respect for the people the system serves — both staff and residents.

Every design decision should be checkable against one question: **does this
make the system feel more trustworthy, or just more decorated?** If it's
decoration, cut it.

## 2. Visual identity

- **Tone**: instrument-grade, not corporate-SaaS. Think dial, not dashboard.
- **Palette family**: graphite/obsidian/slate/fog — a single dark neutral
  ramp, never pure black or pure white. Color is meaning, not mood: teal/cyan
  for structure and active state, emerald for growth, gold *only* for
  earned achievement, muted red for anything that needs review.
- **Depth without gradients-as-decoration**: depth comes from layered
  translucency, hairline borders, and soft ambient light — never a loud
  gradient mesh.
- **Signature element**: the **Instrument Assembly** — a circular dial built
  from concentric rings and tick marks that assembles itself from scattered
  fragments into order on load. It's the literal thesis of the product
  (structure emerging from disorder, arrived at slowly) and it's the one
  place the system spends its visual boldness. Everything else stays quiet
  around it.

## 3. UX principles

1. **Calm by default, emphasis by exception.** Only achievement (gold) and
   critical states (red) are allowed to stand out. If everything is
   emphasized, nothing is.
2. **Structure is legible, never bureaucratic.** Hierarchy comes from type
   scale and spacing, not boxes-within-boxes.
3. **No screen is a dead end.** Empty and error states explain what to do
   next (`EmptyState` component) instead of just reporting absence.
4. **Respect attention.** No auto-playing loops that demand attention after
   their first purposeful run — see the hero's scan sweep, which fires once
   then goes quiet for a long interval, not continuously.
5. **Human dignity in language.** Copy names what people control, states
   facts plainly, and never speaks about residents as case numbers first.

## 4. Motion principles

- **Easing**: `cubic-bezier(0.16, 1, 0.3, 1)` for anything entering,
  `cubic-bezier(0.7, 0, 0.84, 0)` for anything leaving, standard
  `cubic-bezier(0.22, 1, 0.36, 1)` for everything else. No default browser
  ease, no springs with visible overshoot.
- **Durations**: 100ms instant feedback, 200ms micro-interactions, 400ms
  standard transitions, 800ms+ only for cinematic/hero moments.
- **Sequencing over simultaneity.** The hero is the clearest example: stage
  → instrument → title → subtitle → CTA, each waiting for the last to
  settle. Apply the same logic to any future multi-element reveal.
- **One bold moment per screen.** The Instrument Assembly is the hero's
  bold moment. A future settings page doesn't need one — a simple fade-up
  is correct there. Reserve elaborate motion for places that earn it.
- **`prefers-reduced-motion` is load-bearing**, not an afterthought. It's
  enforced globally in `globals.css` and the `FocusEngine` disables itself
  entirely under that media query.

## 5. Color token system

Defined in `app/globals.css` under `:root`. Never hardcode hex values in
components — always reference the CSS variable or its semantic alias.

| Layer | Token | Value | Use |
|---|---|---|---|
| Surface | `--color-obsidian` | `#08090b` | Hero stage background only |
| Surface | `--color-graphite-800` | `#15181d` | App canvas |
| Surface | `--color-graphite-700` | `#1b1f25` | Raised panels, nav |
| Surface | `--color-slate-600` | `#262c33` | Card surfaces |
| Text | `--color-off-white` | `#edeff1` | Primary text |
| Text | `--color-fog-200` | `#9aa4ad` | Secondary text |
| Text | `--color-stone-300` | `#6b7580` | Muted / disabled |
| Accent | `--color-teal-500` | `#4fb5a6` | Primary interactive |
| Accent | `--color-cyan-500` | `#5fa0bd` | Structural / informational |
| Accent | `--color-emerald-500` | `#4c9c78` | Growth, progress-complete |
| Accent | `--color-gold-500` | `#c6a05e` | Achievement — earned states only |
| Accent | `--color-red-500` | `#b5564c` | Critical — needs review only |

Semantic aliases (`--bg-canvas`, `--text-primary`, `--accent-critical`, etc.)
sit on top of the raw ramp so the ramp can be retuned later without touching
every component.

## 6. Typography system

Three roles, each with a job:

- **Display** (`--font-display`) — headings, the hero title. Geometric,
  confident, used with restraint.
- **Body** (`--font-body`) — all reading content and UI labels. Optimized
  for legibility at length, not for standing out.
- **Mono** (`--font-mono`) — data, timestamps, IDs, system readouts. Signals
  "this is a precise value," the way a mission-control readout would.

**Font choice**: Manrope (display) / Inter (body) / IBM Plex Mono (data).
This sandbox has no network access to Google Fonts, so `app/layout.tsx`
currently falls back to system font stacks that approximate the same
geometric character — the file has the exact `next/font/google` snippet to
drop in once deployed somewhere with network access. No component changes
are needed when that swap happens; everything reads from the `--font-*`
tokens, never a font name directly.

Type scale is fluid (`clamp()`) for hero-level headings so the cinematic
moment scales instead of breaking on smaller viewports.

## 7. Spacing system

4px base unit, exposed as `--space-1` (4px) through `--space-10` (128px) in
`globals.css`. Favor the larger steps (`--space-6` and up) between sections
— this system reads as premium specifically because it doesn't crowd
content. When in doubt, add space rather than a border to separate things.

## 8. Border radius system

| Token | Value | Use |
|---|---|---|
| `--radius-xs` | 6px | Tags, tooltips, small chips |
| `--radius-sm` | 10px | Buttons, inputs |
| `--radius-md` | 14px | Small cards |
| `--radius-lg` | 20px | Standard cards, panels |
| `--radius-xl` | 28px | Large hero-adjacent panels |
| `--radius-full` | 999px | Avatars, status pills only |

Never the same radius on every element on a screen — radius should scale
with the size and prominence of what it's wrapping.

## 9. Shadow system

Elevation is soft and low-contrast — physical, not "floating card on white
paper." `--shadow-1` (resting) → `--shadow-2` (raised/hover) →
`--shadow-3` (modal/popover level). Glow shadows (`--shadow-glow-teal`,
`--shadow-glow-gold`) exist for the rare moment something needs to feel lit
from within (e.g., an achievement badge) — not for general use.

## 10. Glass system

`.glass-panel` utility class in `globals.css`: translucent background +
`backdrop-filter: blur(20px)` + hairline border + inset highlight. Used
sparingly — for panels that sit above the ambient background lighting (see
`Card` with `glass` prop). Overusing it flattens the hierarchy it's meant to
create, so most cards should stay opaque.

## 11. Animation architecture

`lib/motion.ts` centralizes every easing curve, duration, and reusable
Framer Motion variant (`fadeUp`, `resolveIn`, `staggerContainer`,
`hoverElevate`). Components import from here rather than writing inline
transition objects, so a future global motion change (e.g., "make
everything 15% faster") is a one-file edit.

## 12. Background engine

`components/hero/BackgroundEngine.tsx`: obsidian base → precision grid
(masked to a soft radial vignette) → two slow independent radial glows on
9–11s breathing cycles → SVG-noise grain layer → vignette. Nothing in this
stack repaints on scroll or interaction — it's ambient, deliberately
separate from the interactive `FocusEngine`.

## 13. Focus engine

`components/hero/FocusEngine.tsx`: a soft radial light that eases toward
the cursor using a `requestAnimationFrame` loop and direct DOM transform
writes (no React state, no re-renders — stays smooth under load). Fully
disabled under `prefers-reduced-motion`. This is what makes the interface
feel like it's paying attention without ever being distracting.

## 14. Hero experience

`components/hero/Hero.tsx` orchestrates the "waking up" sequence:
1. Stage and instrument begin assembling immediately.
2. At ~2.3s, the "System initialized" status pill fades in.
3. At ~2.6s, the title resolves from a blur, followed by a single light
   sweep across it — one pass, never looping.
4. At ~3.9s, the subtitle arrives.
5. At ~4.4s, the CTAs arrive.
6. A quiet scroll affordance fades in last.

This sequencing is deliberate and should not be compressed — the pacing
*is* the emotional effect the brief asked for ("waking up, not loading").

## 15. Reusable components

All in `components/ui/`, exported from `components/ui/index.ts`:

`Button` (primary/secondary/ghost/critical × sm/md/lg) · `Card`
(flat/glass/interactive) · `Badge` (neutral/structure/growth/achievement/
critical) · `Tag` · `Input` · `Progress` · `Avatar` · `Tooltip` · `Skeleton`
· `EmptyState`.

Reference-only chrome patterns in `components/system/`: `TopNav`, `Sidebar`
— shown with placeholder labels on `/system` to demonstrate the pattern;
not wired to real navigation, intentionally, per the brief.

Live style guide: run the app and visit `/system`.

## 16. Folder structure

```
app/
  layout.tsx          — root layout, font wiring
  globals.css          — full token system (source of truth)
  page.tsx              — cinematic landing page
  system/page.tsx       — living style guide / component reference
components/
  ui/                   — design-system primitives (Button, Card, etc.)
  hero/                 — landing-page-only pieces (BackgroundEngine,
                           FocusEngine, InstrumentAssembly, Hero, Principles)
  system/                — reference chrome patterns (TopNav, Sidebar)
lib/
  utils.ts               — cn() class merge helper
  motion.ts               — shared easing/duration/variant tokens
```

`components/hero/` is intentionally separate from `components/ui/` —
hero pieces are cinematic and landing-page-specific; `ui/` pieces are the
neutral primitives every future screen (dashboards included, once that
phase starts) will actually build with.

## 17. Tailwind architecture

Tailwind v4, CSS-first config — there is no `tailwind.config.js`. All theme
extension happens in `app/globals.css` via `@theme inline`, mapping
Tailwind's color/font/radius scale directly onto the CSS variables defined
in `:root`. This keeps one source of truth: change a value in `:root` and
both raw CSS and Tailwind utility classes pick it up.

Arbitrary-value utilities (`bg-[var(--bg-surface)]`) are used deliberately
throughout instead of Tailwind's default palette — this is what enforces
"no hardcoded colors" at the utility-class level, not just in components.

## 18. Theme variables

Everything lives in `:root` in `globals.css`, organized top-to-bottom as:
surfaces → secondary accents → semantic aliases → spacing → radius →
shadow/elevation → glass → motion. A future light-mode or high-contrast
theme would override this block (or add a `[data-theme]` variant) without
touching any component.

## 19. Framer Motion utilities

`lib/motion.ts` exports `easeStandard`, `easeEnter`, `easeExit`,
`durations`, `transitionBase`, `fadeUp`, `resolveIn`, `staggerContainer()`,
and `hoverElevate`. Any new component that animates should compose from
these rather than inventing a new curve — consistency here is what makes
the whole system feel like one hand designed it.

## 20. Best practices for future phases

- **Never hardcode a color, radius, shadow, or duration.** If a value isn't
  in `globals.css` or `lib/motion.ts` yet, add it there first, then use it.
- **Gold means earned.** Don't reach for it to make a button "pop" — it's
  reserved for milestones and achievements or it stops meaning anything.
- **Red means review, not danger.** Keep it muted; this product should never
  feel alarming.
- **One bold moment per screen**, everything else quiet. A future case-file
  view doesn't need its own Instrument Assembly — it needs a fadeUp and a
  Card.
- **Every empty state gets a next action.** No screen should just say
  "nothing here."
- **Check `prefers-reduced-motion` on any new animated component** the way
  `FocusEngine` and `globals.css` already do.
- **Data and structure pages (Phase 1+)** should feel like a natural next
  room in the same building as this landing page — same tokens, calmer
  motion, more density — not a different product.
