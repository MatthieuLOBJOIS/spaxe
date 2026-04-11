# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start Next.js dev server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Architecture

**Stack:** Next.js 16, React 19, TypeScript, Three.js (via @react-three/fibern, @react-three/drei, three-stdlib), Zustand for state management, Tailwind CSS v4, shadcn ui, clsx, lucide-react.

**Project structure:**

- `src/app/` — Next.js App Router pages (`/` landing page, `/viewer` workspace entry)
- `src/components/` — React components split by domain:
  - `landing/` — Marketing page components (hero, features, how-it-works, footer)
  - `viewer/` — Three.js 3D rendering (SceneCanvas, AssemblyViewer, PartMesh, Gizmos)
  - `workspace/` — Workspace UI (Toolbar, PanelLeft, modals for color/transform/exploded views)
  - `ui/` — Shared UI primitives (buttons, sliders, tooltips)
- `src/store/` — Zustand stores (one per feature: scene, assembly, color, transform, exploded, camera, neighborhood, xray, modal)
- `src/config/` — Static configuration for workspace modals and landing content
- `src/lib/` — Utilities (assemblyLoader.ts for JSON/STL loading, colorUtils.ts, store reset helpers)
- `src/types/` — TypeScript interfaces (Assembly, Part, Modal, Transform, Exploded)
- `public/demo/` — Demo assemblies (assembly.json + STL files)

**Key patterns:**

- Assembly data is loaded from `assembly.json` which defines parts with position/rotation/color_hint and parent-child hierarchy
- Each store manages isolated state; `resetAllStores.ts` provides a global reset function
- Color resolution: explicit store override > `part.color_hint` > default gray (`#cccccc`)
- 3D rendering uses React Three Fiber with Drei helpers; PartMesh renders individual STL files
- Path alias `@/*` resolves to `./src/*`

## Product Rules

- Spaxe is a 3D industrial viewer, not a generic React app
- Every UI change must respect spatial/3D workflow
- Prioritize clarity over aesthetics
- Avoid over-engineering UI animations
- Keep performance critical for Three.js scenes

## Mental Model

- Assembly = root data model (source of truth)
- PartMesh = visual representation of a part in 3D
- Stores = isolated feature state (never cross-mix logic)
- Viewer = pure 3D layer
- Workspace = UI layer controlling viewer
- Landing = marketing only, no 3D logic

## Code Rules

- Never modify multiple Zustand stores at once unless necessary
- Do not refactor 3D logic without explicit request
- Preserve assembly.json structure at all costs
- Do not rename core types (Assembly, Part) lightly
- Prefer incremental changes over full rewrites
- All commentary in English
- clean code rule
- globals.css style priority
- typography ( @fontsource/geist-mono,
  @fontsource/space-grotesk,)

## Performance Rules

- Avoid unnecessary re-renders in React Three Fiber
- Memoize heavy components (PartMesh, SceneCanvas)
- Do not add state inside render loops
- Keep geometry loading async and cached

## 3D Skills

- Understand React Three Fiber lifecycle
- Understand STL loading pipeline
- Understand coordinate transforms (exploded view system)
- Avoid unnecessary mesh re-creation

## Assembly System Rules

- Assembly is hierarchical (parent-child transforms)
- Position is always relative to parent
- Exploded view overrides position but not hierarchy
- Never mutate original assembly data directly

## UI ↔ 3D Interaction Rules

- UI never directly manipulates meshes
- UI modifies Zustand store only
- 3D reacts to store changes
