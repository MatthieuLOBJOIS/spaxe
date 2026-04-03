import { create } from 'zustand'

interface AssemblyStore {
  selectedParts: string[]
  setSelectedPart: (file: string, multi?: boolean) => void
  clearSelection: () => void

  visibleParts: Record<string, boolean>
  setPartVisible: (file: string, visible: boolean) => void
  initVisibleParts: (files: string[]) => void

  // ── Transform manuel
  manualDeltas: Record<
    string,
    {
      translation: [number, number, number]
      rotation: [number, number, number]
    }
  >
  setManualDelta: (
    partId: string,
    delta: Partial<{
      translation: [number, number, number]
      rotation: [number, number, number]
    }>
  ) => void
  resetManualDelta: (partId: string) => void
  resetAllManualDeltas: () => void
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

  manualDeltas: {},
  setManualDelta: (partId, delta) =>
    set((s) => ({
      manualDeltas: {
        ...s.manualDeltas,
        [partId]: {
          translation: delta.translation ??
            s.manualDeltas[partId]?.translation ?? [0, 0, 0],
          rotation: delta.rotation ??
            s.manualDeltas[partId]?.rotation ?? [0, 0, 0],
        },
      },
    })),
  resetManualDelta: (partId) =>
    set((s) => ({
      manualDeltas: {
        ...s.manualDeltas,
        [partId]: { translation: [0, 0, 0], rotation: [0, 0, 0] },
      },
    })),
  resetAllManualDeltas: () => set({ manualDeltas: {} }),
}))
