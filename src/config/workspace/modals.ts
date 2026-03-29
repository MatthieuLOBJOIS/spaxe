import type { ModalId, ModalState } from '@/store/modalStore'

export const DEFAULT_MODALS: Record<ModalId, ModalState> = {
  bom: {
    isOpen: false,
    position: { x: 100, y: 100 },
    size: { w: 400, h: 500 },
    zIndex: 10,
  },
  shortcuts: {
    isOpen: false,
    position: { x: 140, y: 140 },
    size: { w: 400, h: 500 },
    zIndex: 10,
  },
  color: {
    isOpen: false,
    position: { x: 180, y: 180 },
    size: { w: 320, h: 400 },
    zIndex: 10,
  },
  lasso: {
    isOpen: false,
    position: { x: 220, y: 220 },
    size: { w: 320, h: 400 },
    zIndex: 10,
  },
  transform: {
    isOpen: false,
    position: { x: 260, y: 260 },
    size: { w: 320, h: 400 },
    zIndex: 10,
  },
  exploded: {
    isOpen: false,
    position: { x: 300, y: 300 },
    size: { w: 320, h: 400 },
    zIndex: 10,
  },
  neighborhood: {
    isOpen: false,
    position: { x: 300, y: 300 },
    size: { w: 320, h: 400 },
    zIndex: 10,
  },
  xray: {
    isOpen: false,
    position: { x: 300, y: 300 },
    size: { w: 320, h: 400 },
    zIndex: 10,
  },
}

// ── Shortcuts ────────────────────────────────────────────
export interface Shortcut {
  key: string
  action: string
}

export const SHORTCUTS = [
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
