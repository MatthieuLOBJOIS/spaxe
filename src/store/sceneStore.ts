import { create } from 'zustand'

interface SceneStore {
  grid: boolean
  orthoMode: boolean
  onGridToggle: () => void
  onOrthoModeToggle: () => void
  reset: () => void
}

export const useSceneStore = create<SceneStore>((set) => ({
  grid: false,
  orthoMode: false,
  onGridToggle: () => set((state) => ({ grid: !state.grid })),
  onOrthoModeToggle: () => set((state) => ({ orthoMode: !state.orthoMode })),
  reset: () => set({ grid: false, orthoMode: false }),
}))
