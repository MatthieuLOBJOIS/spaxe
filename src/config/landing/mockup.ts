// ─── Shared ───────────────────────────────────────────────

interface Point2D {
  x: number
  y: number
}
interface PolarCenter {
  cx: number
  cy: number
}
interface MockupLine {
  x2: number
  y2: number
}

// ─── Canvas ───────────────────────────────────────────────

export type StrokeToken =
  | 'primary'
  | 'selection'
  | 'bright'
  | 'mid'
  | 'dim'
  | 'faint'

interface MockupShape {
  stroke: StrokeToken
  strokeWidth?: number
  opacity?: number
}

export interface MockupRect extends MockupShape {
  type: 'rect'
  x: number
  y: number
  w: number
  h: number
  rx: number
}

export interface MockupCircle extends MockupShape {
  type: 'circle'
  cx: number
  cy: number
  r: number
}

export type MockupPart = MockupRect | MockupCircle

export const MOCKUP_CENTER: Point2D = { x: 120, y: 120 }

export const MOCKUP_LINES: MockupLine[] = [
  { x2: 120, y2: 30 },
  { x2: 60, y2: 160 },
  { x2: 180, y2: 160 },
  { x2: 40, y2: 100 },
  { x2: 200, y2: 90 },
]

export const MOCKUP_PARTS: MockupPart[] = [
  {
    type: 'rect',
    x: 95,
    y: 100,
    w: 50,
    h: 30,
    rx: 3,
    stroke: 'dim',
    strokeWidth: 2,
  },
  {
    type: 'rect',
    x: 98,
    y: 22,
    w: 44,
    h: 16,
    rx: 2,
    stroke: 'bright',
    strokeWidth: 1.5,
  },
  {
    type: 'rect',
    x: 112,
    y: 68,
    w: 16,
    h: 28,
    rx: 2,
    stroke: 'selection',
    strokeWidth: 2,
  },
  {
    type: 'rect',
    x: 111,
    y: 67,
    w: 18,
    h: 30,
    rx: 3,
    stroke: 'primary',
    strokeWidth: 1,
    opacity: 0.4,
  },
  {
    type: 'rect',
    x: 28,
    y: 90,
    w: 24,
    h: 20,
    rx: 2,
    stroke: 'mid',
    strokeWidth: 1.5,
  },
  {
    type: 'rect',
    x: 188,
    y: 78,
    w: 20,
    h: 20,
    rx: 2,
    stroke: 'mid',
    strokeWidth: 1.5,
  },
  { type: 'circle', cx: 55, cy: 162, r: 12, stroke: 'faint', strokeWidth: 1.5 },
  { type: 'circle', cx: 55, cy: 162, r: 6, stroke: 'faint', strokeWidth: 1 },
  { type: 'circle', cx: 185, cy: 162, r: 14, stroke: 'mid', strokeWidth: 1.5 },
]

export const GEAR_CENTER: PolarCenter = { cx: 185, cy: 162 }
export const GEAR_ANGLES: number[] = [0, 45, 90, 135, 180, 225, 270, 315]

export const MOCKUP_SELECTED_LABEL = 'SHAFT_A · SELECTED'

export const STROKE_MAP: Record<StrokeToken, string> = {
  selection: 'var(--color-part-selection)',
  primary: 'var(--color-primary)',
  bright: 'var(--color-part-bright)',
  mid: 'var(--color-part-mid)',
  dim: 'var(--color-part-dim)',
  faint: 'var(--color-part-faint)',
}

// ─── Parts Tree ───────────────────────────────────────────

export interface MockupTreePart {
  label: string
  colorVar: string
}

export const MOCKUP_SELECTED_INDEX = 2

export const MOCKUP_TREE_PARTS: MockupTreePart[] = [
  { label: 'Frame_001', colorVar: 'var(--color-part-dim)' },
  { label: 'Cover_Top', colorVar: 'var(--color-part-bright)' },
  { label: 'Shaft_A', colorVar: 'var(--color-primary)' },
  { label: 'Bearing_01', colorVar: 'var(--color-part-faint)' },
  { label: 'Gear_Main', colorVar: 'var(--color-part-mid)' },
  { label: 'Mount_Plate', colorVar: 'var(--color-part-mid)' },
]

// ─── Status Bar ───────────────────────────────────────────

export const MOCKUP_STATUS_ITEMS = ['assembly.spaxe', 'STL', '6 parts loaded']

// ─── Toolbar ──────────────────────────────────────────────

export const MOCKUP_TOOLBAR_BTNS = ['⤢', '↺', 'Top', 'Front']
export const MOCKUP_TOOLBAR_BADGE = 'EXPLODED VIEW'
