// ── Shortcuts ────────────────────────────────────────────
export interface Shortcut {
  key: string
  action: string
}

export const DEFAULT_SHORTCUTS = [
  { key: 'Click', action: 'Select part' },
  { key: 'Ctrl + Click', action: 'Add part to selection' },
  { key: 'Click + drag', action: 'Rotate camera' },
  { key: 'Scroll', action: 'Zoom in/out' },
  { key: 'Right click + drag', action: 'Pan camera' },
  { key: 'Esc', action: 'Deselect all' },
  { key: 'F', action: 'Focus selected part' },
  { key: 'H', action: 'Hide selected part' },
  { key: 'A', action: 'Display all parts' },
  { key: 'V', action: 'Select all visible parts' },
  { key: 'I', action: 'Invert selection' },
  { key: 'E', action: 'Isolate selected part' },
  { key: 'L', action: 'Lasso select' },
  { key: 'T', action: 'Transform XYZ' },
  { key: 'Ctrl + Z', action: 'Undo last action' },
]
