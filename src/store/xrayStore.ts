import { create } from 'zustand'

type XRayMode = 'wireframe' | 'ghost'

interface XRayStore {
  xrayMode: XRayMode
  xrayOpacity: number
  xrayKeepSelectedSolid: boolean
  setXrayMode: (mode: XRayMode) => void
  setXrayOpacity: (value: number) => void
  setXrayKeepSelectedSolid: (v: boolean) => void
}

export const useXRayStore = create<XRayStore>((set) => ({
  xrayMode: 'ghost',
  xrayOpacity: 40,
  xrayKeepSelectedSolid: true,
  setXrayMode: (mode) => set({ xrayMode: mode }),
  setXrayOpacity: (value) => set({ xrayOpacity: value }),
  setXrayKeepSelectedSolid: (v) => set({ xrayKeepSelectedSolid: v }),
}))
