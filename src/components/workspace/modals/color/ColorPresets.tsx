'use client'

import { DEFAULT_COLORS } from '@/config/workspace/modals/defaultColors'

interface ColorPresetsProps {
  color: string
  setColor: (value: string) => void
}

export default function ColorPresets({ color, setColor }: ColorPresetsProps) {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-white/30 text-[10px] font-mono tracking-[1px]">
        PRESETS
      </span>
      <div className="grid grid-cols-10 gap-1.5">
        {DEFAULT_COLORS.map((c) => (
          <button
            key={c}
            onClick={() => setColor(c)}
            className={`w-full aspect-square rounded-md border-2 transition-all duration-150 cursor-pointer
              ${color === c ? 'border-[#F26522] scale-110' : 'border-transparent hover:scale-105'}`}
            style={{ background: c }}
          />
        ))}
      </div>
    </div>
  )
}
