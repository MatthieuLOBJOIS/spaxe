# CONVENTIONS.md — Global Rules

## Stack

Next.js 16 App Router · TypeScript strict · React Three Fiber · React Three Drei · Zustand · Tailwind CSS v4

## Non-negotiable constraints

- Tailwind tokens only — never hardcode hex/rgba
- `cn()` from `@/lib/utils` for conditional classNames
- `interface` for object shapes, `type` for unions
- Named exports in `components/ui/`, default exports elsewhere
- Selector syntax in Zustand: `useStore(s => s.value)` only
- No `useEffect` to set state — use architectural solutions
- `'use client'` only when hooks/events/browser APIs are used
- English only — comments, commits, JSDoc

## Design tokens (never bypass these)

- Orange accent: `text-orange` / `bg-orange/8` / `border-orange/30`
- Background: `bg-background`
- Surface: `bg-card` or `bg-secondary`
  -Axis X/Y/Z:
- X → text-[var(--color-axis-x)]
- Y → text-[var(--color-axis-y)]
- Z → text-[var(--color-axis-z)]
- Font UI: `font-sans` (Space Grotesk)
- Font data: `font-mono` (Geist Mono)

## Architecture layers (never cross these)

- Viewer → reads stores, never owns state
- Workspace UI → writes stores only, never touches meshes
- Stores → one file per domain, never cross-import
