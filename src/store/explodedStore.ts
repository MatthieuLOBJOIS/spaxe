import { create } from 'zustand'
import type { Axis } from '@/config/workspace/modals/defaultExploded'
import type { Vec3 } from '@/types/viewer'

interface ExplodedStore {
  explosionFactor: number
  explosionAxis: Axis
  assemblyCentroid: Vec3 | null
  partCentroids: Record<string, Vec3>
  setPartCentroid: (file: string, centroid: Vec3) => void

  setExplosionFactor: (v: number) => void
  setExplosionAxis: (a: Axis) => void
  setAssemblyCentroid: (c: Vec3) => void
  reset: () => void
}

export const useExplodedStore = create<ExplodedStore>((set) => ({
  explosionFactor: 0,
  explosionAxis: 'all',
  assemblyCentroid: null,

  setExplosionFactor: (v) => set({ explosionFactor: v }),
  setExplosionAxis: (a) => set({ explosionAxis: a }),
  setAssemblyCentroid: (c) => set({ assemblyCentroid: c }),
  reset: () =>
    set({ explosionFactor: 0, explosionAxis: 'all', assemblyCentroid: null }),
  partCentroids: {},
  setPartCentroid: (file, centroid) =>
    set((state) => ({
      partCentroids: { ...state.partCentroids, [file]: centroid },
    })),
}))
