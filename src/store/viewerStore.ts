import { create } from 'zustand'
import * as THREE from 'three'

type XRayMode = 'wireframe' | 'ghost'

interface ViewerStore {
  // Pièce sélectionnée
  selectedPart: string | null
  setSelectedPart: (file: string | null) => void

  // Rotation caméra
  cameraQuaternion: THREE.Quaternion
  setCameraQuaternion: (q: THREE.Quaternion) => void

  cameraTarget: THREE.Vector3 | null
  setCameraTarget: (v: THREE.Vector3 | null) => void

  navCameraQuaternion: THREE.Quaternion | null
  setNavCameraQuaternion: (q: THREE.Quaternion | null) => void

  isDraggingNav: boolean
  setIsDraggingNav: (v: boolean) => void

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
}

export const useViewerStore = create<ViewerStore>((set) => ({
  selectedPart: null,
  setSelectedPart: (file) => set({ selectedPart: file }),

  cameraQuaternion: new THREE.Quaternion(),
  setCameraQuaternion: (q) => set({ cameraQuaternion: q.clone() }),

  cameraTarget: null,
  setCameraTarget: (v) => set({ cameraTarget: v }),

  navCameraQuaternion: null,
  setNavCameraQuaternion: (q) =>
    set({ navCameraQuaternion: q ? q.clone() : null }),

  isDraggingNav: false,
  setIsDraggingNav: (v) => set({ isDraggingNav: v }),

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
}))
