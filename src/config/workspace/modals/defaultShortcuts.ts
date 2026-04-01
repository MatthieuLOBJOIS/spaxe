export interface Shortcut {
  key: string
  action: string
  working: boolean
}

export const DEFAULT_SHORTCUTS: Shortcut[] = [
  { key: 'Click', action: 'Select part', working: true },
  { key: 'Ctrl + Click', action: 'Add part to selection', working: true },
  { key: 'Click + drag', action: 'Rotate camera', working: true },
  { key: 'Scroll', action: 'Zoom in/out', working: true },
  { key: 'Right click + drag', action: 'Pan camera', working: true },
  { key: 'Esc', action: 'Deselect all', working: false },
  { key: 'F', action: 'Focus selected part', working: false },
  { key: 'H', action: 'Hide selected part', working: false },
  { key: 'A', action: 'Display all parts', working: false },
  { key: 'V', action: 'Select all visible', working: false },
  { key: 'I', action: 'Invert selection', working: false },
  { key: 'E', action: 'Isolate selected part', working: false },
  { key: 'L', action: 'Lasso select', working: false },
  { key: 'T', action: 'Transform XYZ', working: false },
  { key: 'Ctrl + Z', action: 'Undo last action', working: false },
]
