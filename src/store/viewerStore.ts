import { create } from 'zustand'
import * as THREE from 'three'

interface ViewerStore {
  // Pièce sélectionnée
  selectedPart: string | null
  setSelectedPart: (file: string | null) => void

  // Rotation de la caméra principale — partagée avec le NavCube
  cameraQuaternion: THREE.Quaternion
  setCameraQuaternion: (q: THREE.Quaternion) => void

  // Position cible demandée par le NavCube
  cameraTarget: THREE.Vector3 | null
  setCameraTarget: (v: THREE.Vector3 | null) => void

  // Rotation de la caméra du NavCube — envoyée à la caméra principale
  navCameraQuaternion: THREE.Quaternion | null
  setNavCameraQuaternion: (q: THREE.Quaternion | null) => void

  // Flag — l'utilisateur est en train de drag le NavCube
  isDraggingNav: boolean
  setIsDraggingNav: (v: boolean) => void

  // Pièces visibles
  visibleParts: Record<string, boolean>
  setPartVisible: (file: string, visible: boolean) => void
  initVisibleParts: (files: string[]) => void
}

export const useViewerStore = create<ViewerStore>((set) => ({
  selectedPart: null,
  setSelectedPart: (file) => set({ selectedPart: file }),

  cameraQuaternion: new THREE.Quaternion(),
  setCameraQuaternion: (q) => set({ cameraQuaternion: q.clone() }),

  cameraTarget: null,
  setCameraTarget: (v) => set({ cameraTarget: v }),

  // Quaternion NavCube → caméra principale
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
    set({ visibleParts: Object.fromEntries(files.map((f) => [f, true])) }),
}))
