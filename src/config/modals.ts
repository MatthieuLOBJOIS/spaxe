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
}
