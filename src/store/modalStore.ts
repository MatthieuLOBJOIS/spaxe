import { create } from 'zustand'
import { DEFAULT_MODALS } from '@/config/workspace/modals/defaultModals'
import { updateRecord } from '@/lib/storeUtils'
import { ModalStore } from '@/types/modal'

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
  reset: () => set({ modals: DEFAULT_MODALS, topZIndex: 10 }),
}))
