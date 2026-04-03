import { create } from 'zustand'

interface ColorStore {
  partColors: Record<string, string>
  partOpacity: Record<string, number>
  setPartColor: (file: string, color: string) => void
  setPartOpacity: (file: string, opacity: number) => void
}

export const useColorStore = create<ColorStore>((set) => ({
  partColors: {},
  partOpacity: {},
  setPartColor: (file, color) =>
    set((state) => ({ partColors: { ...state.partColors, [file]: color } })),
  setPartOpacity: (file, opacity) =>
    set((state) => ({
      partOpacity: { ...state.partOpacity, [file]: opacity },
    })),
}))
