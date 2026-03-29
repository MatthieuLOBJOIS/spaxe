import { create } from 'zustand'
import * as THREE from 'three'

interface CameraStore {
  // Rotation caméra
  cameraQuaternion: THREE.Quaternion
  setCameraQuaternion: (q: THREE.Quaternion) => void

  cameraTarget: THREE.Vector3 | null
  setCameraTarget: (v: THREE.Vector3 | null) => void

  navCameraQuaternion: THREE.Quaternion | null
  setNavCameraQuaternion: (q: THREE.Quaternion | null) => void

  isDraggingNav: boolean
  setIsDraggingNav: (v: boolean) => void
}

export const useCameraStore = create<CameraStore>((set) => ({
  cameraQuaternion: new THREE.Quaternion(),
  setCameraQuaternion: (q) => set({ cameraQuaternion: q.clone() }),

  cameraTarget: null,
  setCameraTarget: (v) => set({ cameraTarget: v }),

  navCameraQuaternion: null,
  setNavCameraQuaternion: (q) =>
    set({ navCameraQuaternion: q ? q.clone() : null }),

  isDraggingNav: false,
  setIsDraggingNav: (v) => set({ isDraggingNav: v }),
}))
