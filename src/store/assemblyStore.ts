import { create } from 'zustand'

interface AssemblyStore {
  selectedParts: string[]
  setSelectedPart: (file: string, multi?: boolean) => void
  clearSelection: () => void

  visibleParts: Record<string, boolean>
  setPartVisible: (file: string, visible: boolean) => void
  initVisibleParts: (files: string[]) => void
}

export const useAssemblyStore = create<AssemblyStore>((set) => ({
  selectedParts: [],
  setSelectedPart: (file, multi = false) =>
    set((state) => {
      if (multi) {
        const already = state.selectedParts.includes(file)
        return {
          selectedParts: already
            ? state.selectedParts.filter((f) => f !== file)
            : [...state.selectedParts, file],
        }
      }
      return {
        selectedParts:
          state.selectedParts.includes(file) && state.selectedParts.length === 1
            ? []
            : [file],
      }
    }),
  clearSelection: () => set({ selectedParts: [] }),

  visibleParts: {},
  setPartVisible: (file, visible) =>
    set((state) => ({
      visibleParts: { ...state.visibleParts, [file]: visible },
    })),
  initVisibleParts: (files) =>
    set({ visibleParts: Object.fromEntries(files.map((f) => [f, true])) }),
}))
