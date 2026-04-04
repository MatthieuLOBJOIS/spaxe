import { create } from 'zustand'

import { ManualDelta } from '@/types/transform'

type TransformMode = 'translate' | 'rotate'

interface TransformStore {
  transformMode: TransformMode
  setTransformMode: (mode: TransformMode) => void

  manualDeltas: Record<string, ManualDelta>
  setManualDelta: (partId: string, delta: Partial<ManualDelta>) => void
  resetManualDelta: (partId: string) => void
  resetAllManualDeltas: () => void
}

export const useTransformStore = create<TransformStore>((set) => ({
  transformMode: 'translate',
  setTransformMode: (mode) => set({ transformMode: mode }),

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
