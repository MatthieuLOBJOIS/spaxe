'use client'

import { Pipette } from 'lucide-react'

type EyeDropperAPI = { open: () => Promise<{ sRGBHex: string }> }
type WindowWithEyeDropper = { EyeDropper: new () => EyeDropperAPI }

interface EyeDropperButtonProps {
  setColor: (value: string) => void
}

export default function EyeDropperButton({ setColor }: EyeDropperButtonProps) {
  const handleClick = async () => {
    if (!('EyeDropper' in window)) return
    try {
      const { EyeDropper } = window as unknown as WindowWithEyeDropper
      const result = await new EyeDropper().open()
      setColor(result.sRGBHex)
    } catch {
      // utilisateur a annulé
    }
  }

  return (
    <button
      onClick={handleClick}
      className="p-2 rounded-lg bg-white/4 border border-white/8 text-white/40 hover:text-white hover:bg-white/8 transition-colors cursor-pointer"
      title="Pick color from screen"
    >
      <Pipette size={14} />
    </button>
  )
}
