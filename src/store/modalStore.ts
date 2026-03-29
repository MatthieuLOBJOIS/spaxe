import { create } from 'zustand'
import { DEFAULT_MODALS } from '@/config/workspace/modals'
import { updateRecord } from '@/lib/storeUtils'

export type ModalId =
  | 'lasso'
  | 'transform'
  | 'exploded'
  | 'neighborhood'
  | 'xray'
  | 'bom'
  | 'color'
  | 'shortcuts'

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
    set((state) => {
      const opening = !state.modals[id].isOpen
      const newZ = opening ? state.topZIndex + 1 : state.modals[id].zIndex
      return {
        modals: updateRecord(state.modals, id, {
          isOpen: opening,
          zIndex: newZ,
        }),
        topZIndex: opening ? state.topZIndex + 1 : state.topZIndex,
      }
    }),

  setPosition: (id, position) =>
    set((state) => ({
      modals: updateRecord(state.modals, id, { position }),
    })),

  setSize: (id, size) =>
    set((state) => ({
      modals: updateRecord(state.modals, id, { size }),
    })),

  bringToFront: (id) =>
    set((state) => {
      const newZ = state.topZIndex + 1
      return {
        modals: updateRecord(state.modals, id, { zIndex: newZ }),
        topZIndex: newZ,
      }
    }),
}))
