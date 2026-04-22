---
name: fintech-agent-demo
description: Skills for working on the fintech agent demo — multi-agent AI system for financial analysis with mock data
---

# Fintech Agent Demo — Kimi Code Skill

## Project Overview

A Next.js 14 demo showing multi-agent AI orchestration for fintech tasks. All data is mock — no external APIs.

## Architecture

```
src/
  lib/
    agents.ts      # Agent definitions and orchestration flow
    mockData.ts    # Realistic fintech mock data
  app/
    page.tsx       # Main UI with agent step rendering
    layout.tsx     # Root layout
    globals.css    # Tailwind + dark theme
```

## Tech Constraints

- **Next.js 14 App Router** — use `'use client'` only when needed
- **TypeScript strict** — no `any`, define all types
- **Tailwind CSS** — dark theme (slate-950 background)
- **Mock data only** — never add real API calls or keys
- **No external deps** beyond Next.js + React + Tailwind

## Adding a New Agent

1. Define agent in `src/lib/agents.ts`:
   - `agent`: name (e.g., "Compliance Checker")
   - `icon`: emoji
   - `input`: what data it receives
   - `output`: realistic fintech analysis text
   - `delay`: ms for simulated thinking

2. Update `src/app/page.tsx` if agent needs new UI elements

3. Ensure mock data in `src/lib/mockData.ts` supports the agent's inputs

## Code Style

- Use functional components with hooks
- Prefer `async/await` over callbacks
- Mock delays: `await new Promise(r => setTimeout(r, delay))`
- Status badges: amber for "thinking", emerald for "complete"
- Output blocks: `<pre>` with `whitespace-pre-wrap` for formatted text

## Testing Checklist

- [ ] Agent steps render in sequence
- [ ] Thinking state shows before output
- [ ] Output text is realistic and fintech-accurate
- [ ] Mobile responsive (max-w-4xl centered)
- [ ] No console errors
- [ ] Button disabled during analysis
