import {
  Lasso,
  Move3d,
  Expand,
  Grid3x3,
  Layers,
  Scan,
  ClipboardList,
} from 'lucide-react'

export const SELECTION_TOOLS = [
  { icon: Lasso, label: 'Lasso Select', key: 'lasso' },
  { icon: Move3d, label: 'Transform XYZ', key: 'transform' },
  { icon: Expand, label: 'Exploded View', key: 'exploded' },
] as const

export const DISPLAY_TOOLS = [
  { icon: Grid3x3, label: 'Grid', key: 'grid' },
  { icon: Layers, label: 'Neighborhood', key: 'neighborhood' },
  { icon: Scan, label: 'X-Ray', key: 'xray' },
  { icon: ClipboardList, label: 'Bill of Materials', key: 'bom' },
] as const

export const ORTHO_VIEWS = ['Top', 'Front', 'Side'] as const

export const ORTHO_OPTIONS = [
  { label: 'PER', tooltip: 'Perspective' },
  { label: 'ORT', tooltip: 'Orthographic' },
] as const
