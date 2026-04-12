# AIDER.md

Guidance Aider when working on the Spaxe codebase.

---

## Commands

```bash
npm run dev      # Start Next.js dev server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

---

## Architecture

**Stack:** Next.js 16 App Router, React 19, TypeScript strict, Three.js via React Three Fiber + Drei, Zustand, Tailwind CSS v4, shadcn/ui, lucide-react.

**Project structure:**

```
src/
├── app/                    # Next.js App Router (/ landing, /viewer workspace)
├── components/
│   ├── landing/            # Marketing page components (Hero, Features, Footer…)
│   ├── viewer/             # 3D rendering layer (SceneCanvas, AssemblyViewer, PartMesh, Gizmos)
│   ├── workspace/          # Workspace UI (Toolbar, PanelLeft, modals)
│   └── ui/                 # Shared primitives (buttons, sliders, tooltip wrappers)
├── store/                  # Zustand stores — one file per feature domain
├── config/                 # Static config for workspace modals and landing content
├── lib/                    # Utilities (assemblyLoader, colorUtils, storeUtils, resetAllStores)
├── types/                  # TypeScript interfaces (Assembly, Part, Modal, Transform, Exploded)
└── hooks/                  # Custom hooks (useExplodedAnimation, usePartGeometry…)
public/demo/                # Demo assembly (assembly.json + STL files)
```

**Path alias:** `@/*` → `./src/*`

---

## Mental Model

| Layer         | Role                                                                |
| ------------- | ------------------------------------------------------------------- |
| **Assembly**  | Root data model — source of truth, never mutated at runtime         |
| **Stores**    | Isolated feature state; UI reads and writes only through stores     |
| **Viewer**    | Pure 3D rendering layer — reacts to store changes, never owns state |
| **Workspace** | UI layer — controls viewer via stores                               |
| **Landing**   | Marketing only — zero 3D logic                                      |

---

## Design Tokens (`globals.css`)

All tokens are declared in `:root` and mapped in `@theme inline`. **Never use hardcoded hex or rgba when a token exists.**

### Color tokens → Tailwind utilities

| Token                  | Utility                                          | Usage                                                |
| ---------------------- | ------------------------------------------------ | ---------------------------------------------------- |
| `--primary`            | `text-primary`, `bg-primary`, `border-primary`   | Orange brand (#F26522)                               |
| `--color-orange`       | `text-orange`, `bg-orange/8`, `border-orange/30` | Alias for `--primary` — prefer this for brand accent |
| `--color-orange-hover` | `text-orange-hover`                              | Hover state for orange elements                      |
| `--background`         | `bg-background`                                  | Page background `oklch(0.1 0 0)`                     |
| `--foreground`         | `text-foreground`                                | Primary text                                         |
| `--surface`            | `bg-surface`                                     | Elevated surface `oklch(0.18 0 0)`                   |
| `--card`               | `bg-card`                                        | Card background                                      |
| `--border`             | `border-border`                                  | Default border `oklch(1 0 0 / 10%)`                  |
| `--muted-foreground`   | `text-muted-foreground`                          | Subdued text                                         |
| `--destructive`        | `text-destructive`                               | Error/danger                                         |

### Opacity variants (when no dedicated token exists)

```
bg-white/3   bg-white/6   bg-white/8
border-white/6   border-white/8   border-white/10
text-white/20   text-white/30   text-white/40   text-white/50
bg-orange/8   bg-orange/12   bg-orange/15
border-orange/30
```

### Axis colors (fixed — never change)

| Axis | CSS variable     | Tailwind                     |
| ---- | ---------------- | ---------------------------- |
| X    | `--color-axis-x` | `text-[var(--color-axis-x)]` |
| Y    | `--color-axis-y` | `text-[var(--color-axis-y)]` |
| Z    | `--color-axis-z` | `text-[var(--color-axis-z)]` |

### Typography

| Font          | Token         | Usage                                                    |
| ------------- | ------------- | -------------------------------------------------------- |
| Space Grotesk | `--font-sans` | All UI labels, headings — `font-sans`                    |
| Geist Mono    | `--font-mono` | Coordinates, data values, numeric readouts — `font-mono` |

### Radius tokens

```
rounded-sm   rounded-md   rounded-lg (default)   rounded-xl
```

---

## Code Rules

### Exports

- `components/ui/` → **named export** (`export function Foo`)
- Pages, layouts, feature components → **default export**

### `'use client'`

Add only when a component uses hooks, event handlers, browser APIs, or Zustand. Default to Server Component.

### TypeScript

- `interface` for object shapes
- `type` for unions, primitives, mapped types
- No `@ts-ignore` — use proper casting
- No implicit `any`

### Styling

- Tailwind utilities only — no inline styles, no `style={{}}`
- No hardcoded `rgba(...)` or `#hex` when a token exists
- `cn()` from `@/lib/utils` for conditional classNames
- shadcn/ui: modify component files directly — never override via `className` hacks

### JSDoc

**`components/ui/`** — required on every component:

1. A single specific and meaningful description line
2. Each prop documented with `@param propName - description`
3. Never `@param {XxxProps} props - The properties for the Xxx component.`

**`hooks/`** — required on every exported hook:

- One-line description + `@returns` describing what the hook exposes

**`lib/`** — required on every exported function:

- Description + params + edge-case behavior when relevant

**`components/workspace/`** and **`components/viewer/`** — non-obvious props only:

- Comment non-trivial Three.js effects in `viewer/`

**`store/`** — actions with side effects or non-trivial logic only

**`config/`** and **`components/landing/`** — not required (static data)

**`types/`** — non-obvious fields only (not on `id: string`)

```ts
/**
 * Controlled range input with a label and optional unit suffix.
 *
 * @param label - Label displayed above the slider.
 * @param value - Current numeric value.
 * @param min - Minimum bound (default 0).
 * @param max - Maximum bound (default 100).
 * @param step - Step increment (default 1).
 * @param unit - Optional unit suffix displayed next to the value.
 * @param onChange - Callback fired with the parsed float value on input change.
 */
```

### Tooltips

- **Only on icon-only buttons** (no visible text label)
- **Never** on buttons with self-descriptive labels ("Apply", "Back", "Reset all")
- `<Tooltip>` wraps `<TooltipTrigger>` which wraps the button element directly
- `TooltipContent` pattern for disabled state: `` `${label} — coming soon` ``

### Language

- All code comments → **English**
- All commit messages → **English**, Conventional Commits format

---

## Zustand Stores

Stores are split by feature domain. Never cross-mix store logic.

| Store           | Domain                                       |
| --------------- | -------------------------------------------- |
| `assemblyStore` | Assembly data, part selection, colors        |
| `cameraStore`   | Camera position, target, presets             |
| `sceneStore`    | Scene-level display settings                 |
| `modalStore`    | Modal open/close, position, size, z-index    |
| `explodedStore` | Explosion factor, part centroid registration |

**Always use selector syntax** — never destructure the entire store:

```ts
// ✅ correct
const selectedParts = useAssemblyStore((s) => s.selectedParts)

// ❌ wrong — causes unnecessary re-renders
const { selectedParts } = useAssemblyStore()
```

`storeUtils.ts` exports `updateRecord<T>` for clean record updates.

---

## Assembly System

- Assembly is hierarchical (parent → child transforms)
- `assembly.json` defines parts with `position`, `rotation`, `color_hint`, and hierarchy
- **All STL files are in world-space** — `part.position` is always `[0,0,0]`
- **Explosion logic uses geometry centroids** (`geometryOffset`), never `assembly.json` position fields
- Never mutate original assembly data at runtime
- Color resolution order: explicit store override → `part.color_hint` → default `#cccccc`

---

## Three.js / React Three Fiber

- Dispose geometry and material in `useEffect` cleanup
- `useMemo` for heavy computations (geometry parsing, centroid calculation)
- Selector syntax required in R3F render loops (60fps — no full store subscribes)
- Do not add state inside render loops
- Memoize heavy components (`PartMesh`, `SceneCanvas`)
- Do not refactor 3D logic without explicit request

---

## UI ↔ 3D Interaction

- UI **never** directly manipulates meshes
- UI modifies Zustand stores only
- 3D layer reacts to store changes

---

## Blender Exporter

Custom Python addon `spaxe_blender_exporter.py`:

- Exports mesh objects as named STLs + `assembly.json`
- Y-up conversion, world-space positions, parent/child hierarchy
- Custom properties forwarded to `assembly.json`

---

## Git Workflow

```
feat/xxx → dev → main
```

- Merges to `main` trigger SemVer releases (starting `v0.1.0`)
- Multiple features grouped per release
- SSH auth via ed25519 key (no token management in WSL2)
- Conventional Commits, English only

---

## Performance

- Avoid unnecessary re-renders in React Three Fiber
- Keep geometry loading async and cached
- Do not add state inside render loops
- Memoize heavy components

---

## Product Principles

- Spaxe is a 3D industrial viewer — not a generic React app
- Every UI change must respect the spatial/3D workflow context
- Prioritize clarity over aesthetics
- Avoid over-engineering UI animations
- `globals.css` token usage takes priority over one-off utilities
