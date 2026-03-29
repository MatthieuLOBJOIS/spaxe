import { create } from 'zustand'

type XRayMode = 'wireframe' | 'ghost'

interface AssemblyStore {
  // Pièce sélectionnée
  selectedPart: string | null
  setSelectedPart: (file: string | null) => void

  // Pièces visibles
  visibleParts: Record<string, boolean>
  setPartVisible: (file: string, visible: boolean) => void
  initVisibleParts: (files: string[]) => void

  // ── Neighborhood
  neighborhoodEnabled: boolean
  neighborhoodLevel: number
  neighbors: string[]
  toggleNeighborhood: () => void
  setNeighborhoodLevel: (level: number) => void
  setNeighbors: (neighbors: string[]) => void
  clearNeighborhood: () => void

  // ── XRay
  xrayMode: XRayMode
  xrayOpacity: number
  xrayKeepSelectedSolid: boolean
  setXrayMode: (mode: XRayMode) => void
  setXrayOpacity: (value: number) => void
  setXrayKeepSelectedSolid: (v: boolean) => void

  // ── Colors
  partColors: Record<string, string>
  partOpacity: Record<string, number>
  setPartColor: (file: string, color: string) => void
  setPartOpacity: (file: string, opacity: number) => void
}

export const useAssemblyStore = create<AssemblyStore>((set) => ({
  // Pièce sélectionnée
  selectedPart: null,
  setSelectedPart: (file) => set({ selectedPart: file }),

  // Pièces visibles
  visibleParts: {},
  setPartVisible: (file, visible) =>
    set((state) => ({
      visibleParts: { ...state.visibleParts, [file]: visible },
    })),
  initVisibleParts: (files) =>
    set({
      visibleParts: Object.fromEntries(files.map((f) => [f, true])),
    }),

  // ── Neighborhood
  neighborhoodEnabled: false,
  neighborhoodLevel: 1,
  neighbors: [],
  toggleNeighborhood: () =>
    set((state) => ({
      neighborhoodEnabled: !state.neighborhoodEnabled,
    })),
  setNeighborhoodLevel: (level) => set({ neighborhoodLevel: level }),
  setNeighbors: (neighbors) => set({ neighbors }),
  clearNeighborhood: () =>
    set({
      neighborhoodEnabled: false,
      neighbors: [],
    }),

  // ── XRay
  xrayMode: 'ghost',
  xrayOpacity: 40,
  xrayKeepSelectedSolid: true,
  setXrayMode: (mode) =>
    set({
      xrayMode: mode,
    }),
  setXrayOpacity: (value) =>
    set({
      xrayOpacity: value,
    }),
  setXrayKeepSelectedSolid: (v) =>
    set({
      xrayKeepSelectedSolid: v,
    }),

  // ── Colors
  partColors: {},
  partOpacity: {},
  setPartColor: (file, color) =>
    set((state) => ({ partColors: { ...state.partColors, [file]: color } })),
  setPartOpacity: (file, opacity) =>
    set((state) => ({
      partOpacity: { ...state.partOpacity, [file]: opacity },
    })),
}))
