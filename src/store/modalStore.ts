import { create } from 'zustand'
import { DEFAULT_MODALS } from '@/config/modals'

export type ModalId =
  | 'bom'
  | 'shortcuts'
  | 'color'
  | 'lasso'
  | 'transform'
  | 'exploded'

export interface ModalState {
  isOpen: boolean
  position: { x: number; y: number }
  size: { w: number; h: number }
  zIndex: number
}

interface ModalStore {
  modals: Record<ModalId, ModalState>
  topZIndex: number

  toggleModal: (id: ModalId) => void
  setPosition: (id: ModalId, position: { x: number; y: number }) => void
  setSize: (id: ModalId, size: { w: number; h: number }) => void
  bringToFront: (id: ModalId) => void
}

export const useModalStore = create<ModalStore>((set) => ({
  modals: DEFAULT_MODALS,
  topZIndex: 10,

  toggleModal: (id) =>
    set((state) => ({
      modals: {
        ...state.modals,
        [id]: {
          ...state.modals[id],
          isOpen: !state.modals[id].isOpen,
          // Bring to front on open
          zIndex: !state.modals[id].isOpen
            ? state.topZIndex + 1
            : state.modals[id].zIndex,
        },
      },
      topZIndex: !state.modals[id].isOpen
        ? state.topZIndex + 1
        : state.topZIndex,
    })),

  setPosition: (id, position) =>
    set((state) => ({
      modals: { ...state.modals, [id]: { ...state.modals[id], position } },
    })),

  setSize: (id, size) =>
    set((state) => ({
      modals: { ...state.modals, [id]: { ...state.modals[id], size } },
    })),

  bringToFront: (id) =>
    set((state) => {
      const newZ = state.topZIndex + 1
      return {
        modals: {
          ...state.modals,
          [id]: { ...state.modals[id], zIndex: newZ },
        },
        topZIndex: newZ,
      }
    }),
}))
