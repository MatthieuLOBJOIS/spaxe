# RULES.md — Global Rules

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
  - `components/ui/` — one-liner description only
  - `hooks/`, `lib/` — full description + `@param` per argument
  - `store/` — one-liner on actions/selectors that aren't self-explanatory
  - everything else — no JSDoc required

# DESIGN RULES

## NEVER

- hardcoded hex/rgba/oklch in JSX
- `text-[#F26522]` → use the token class
- `bg-[var(--color-surface)]` → use the token class
- `style={{ color: '...' }}` → use className
- motion tokens mapped in `@theme` → use as utility class like any other token (`duration-slow`, `ease-out`)
- custom animations (keyframes, complex sequences) → CSS only

## ALWAYS

- `cn()` for conditional classNames, never template literals
- opacity via modifier: `bg-primary/8`, not `rgba(...)`

## Architecture layers (never cross these)

- Viewer → reads stores, never owns state
- Workspace UI → writes stores only, never touches meshes
- Stores → one file per domain, never cross-import
