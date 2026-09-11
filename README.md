# ReNova

An intelligent rehabilitation & reintegration platform.

ReNova connects rehabilitation planning, learning, progress tracking, counseling, analytics, and reintegration preparation into one human-centered platform. It is a hackathon prototype built with realistic, fictional demo data — not a production system, and not a decision-making system. Every AI-assisted feature is explicitly decision support: final decisions always remain with qualified staff.

## Core modules

| Module | Route | What it does |
|---|---|---|
| Mission Control | `/overview` | Facility-wide operational overview — activity, program health, attention items. |
| People | `/profiles` | Resident profiles and rehabilitation journeys. |
| Human Growth Profile | `/profiles/[id]` | An individual's strengths, goals, and rehabilitation context. |
| AI Rehabilitation Planner | `/planner` | AI-assisted planning built from an individual's assessment and goals. |
| AI Learning Companion | `/learning` | Courses, lessons, and skill development. |
| Rehabilitation Progress Intelligence | `/progress` | Transparent, explainable progress tracking. |
| AI Counselor | `/counselor` | A structured workspace for session preparation, notes, and follow-up — not a chatbot. |
| Release & Reintegration | `/release` | Release preparation progress — never a release or parole prediction. |
| Analytics | `/analytics` | Rehabilitation activity, program, and trend insights across the ecosystem. |
| Settings | `/settings` | Account, preferences, application defaults, and platform information. |

## AI safety / human-in-the-loop principle

AI assists with rehabilitation planning, learning guidance, progress insights, counselor preparation, and analytics observations. AI never decides parole, determines release eligibility, diagnoses medical conditions, predicts criminal behavior, recommends punishment, or judges whether a person is "good" or "bad." Every AI-generated suggestion in the product is labeled as decision support and requires human review before it becomes part of any record — see `components/*/ReintegrationInsights.tsx`, `SessionPrepTool.tsx`, and `AnalyticsInsights.tsx` for the Accept / Edit / Dismiss pattern used throughout.

## Technology stack

- [Next.js](https://nextjs.org) (App Router, Turbopack) + React + TypeScript
- Tailwind CSS, with a custom design token system (`styles/tokens.css`)
- [Framer Motion](https://www.framer.com/motion/) for purposeful, `prefers-reduced-motion`-aware animation
- [Recharts](https://recharts.org) for charts
- [Zod](https://zod.dev) for validating structured AI output
- All AI features use deterministic mock engines (`lib/ai/`) behind a service boundary (`lib/services/`), designed to be swapped for a real model call without touching any UI component

## Running locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # ESLint
```

## Environment variables

None required. The prototype runs entirely on local, deterministic demo data — there is no backend, database, or external API key to configure.

## Demo flow

Landing Page → Enter ReNova → Mission Control → People → Arjun Mehta (the demo individual used consistently across every module) → Profile → Plan → Learning (complete a learning activity) → Progress (see it reflected) → Counselor (prepare a session) → Release (review preparation) → Analytics (see the aggregate picture).
