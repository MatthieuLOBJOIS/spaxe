'use client'

import { HexColorInput } from 'react-colorful'

interface ColorPreviewProps {
  color: string
  setColor: (value: string) => void
}

export default function ColorPreview({ color, setColor }: ColorPreviewProps) {
  return (
    <div className="flex items-center gap-2">
      {/* Swatch couleur actuelle */}
      <div
        className="w-8 h-8 rounded-lg border border-white/20 shrink-0"
        style={{ background: color }}
      />

      {/* HEX input */}
      <div className="flex items-center bg-white/4 border border-white/8 rounded-lg px-2.5 py-1.5 flex-1">
        <span className="text-white/30 text-[12px] font-mono">#</span>
        <HexColorInput
          color={color}
          onChange={setColor}
          className="bg-transparent text-white/70 text-[12px] font-mono outline-none w-full ml-1"
        />
      </div>
    </div>
  )
}
