'use client'

import { HexColorInput } from 'react-colorful'

interface ColorPreviewProps {
  color: string
  setColor: (value: string) => void

  rgb: { r: number; g: number; b: number }
}

export default function ColorPreview({
  color,
  setColor,

  rgb,
}: ColorPreviewProps) {
  return (
    <div className="flex items-center gap-3">
      {/* Preview */}
      <div
        className="w-10 h-10 rounded-lg border border-white/20 shrink-0"
        style={{ background: color }}
      />

      {/* HEX */}
      <div className="flex flex-col gap-1 flex-1">
        <span className="text-white/30 text-[10px] font-mono tracking-[1px]">
          HEX
        </span>
        <div className="flex items-center bg-white/4 border border-white/8 rounded-lg px-2.5 py-1.5">
          <span className="text-white/30 text-[12px] font-mono">#</span>
          <HexColorInput
            color={color}
            onChange={setColor}
            className="bg-transparent text-white/70 text-[12px] font-mono outline-none w-full ml-1"
          />
        </div>
      </div>

      {/* RGB */}
      <div className="flex gap-1">
        {[
          { label: 'R', value: rgb.r, color: 'text-[#ef4444]' },
          { label: 'G', value: rgb.g, color: 'text-[#22c55e]' },
          { label: 'B', value: rgb.b, color: 'text-[#3b82f6]' },
        ].map(({ label, value, color: c }) => (
          <div key={label} className="flex flex-col items-center gap-1">
            <span className={`text-[10px] font-mono ${c}`}>{label}</span>
            <div className="bg-white/4 border border-white/8 rounded-lg px-1.5 py-1">
              <span className="text-white/60 text-[11px] font-mono">
                {value}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
