import { create } from 'zustand'

interface NeighborhoodStore {
  neighborhoodEnabled: boolean
  neighborhoodLevel: number
  neighbors: string[]
  toggleNeighborhood: () => void
  setNeighborhoodLevel: (level: number) => void
  setNeighbors: (neighbors: string[]) => void
  clearNeighborhood: () => void
}

export const useNeighborhoodStore = create<NeighborhoodStore>((set) => ({
  neighborhoodEnabled: false,
  neighborhoodLevel: 1,
  neighbors: [],
  toggleNeighborhood: () =>
    set((state) => ({ neighborhoodEnabled: !state.neighborhoodEnabled })),
  setNeighborhoodLevel: (level) => set({ neighborhoodLevel: level }),
  setNeighbors: (neighbors) => set({ neighbors }),
  clearNeighborhood: () => set({ neighborhoodEnabled: false, neighbors: [] }),
}))
