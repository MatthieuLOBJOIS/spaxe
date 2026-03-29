'use client'

interface ColorOpacityProps {
  opacity: number
  setOpacity: (value: number) => void
}

export default function ColorOpacity({
  opacity,
  setOpacity,
}: ColorOpacityProps) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <span className="text-white/30 text-[10px] font-mono tracking-[1px]">
          OPACITY
        </span>
        <span className="text-white/60 text-[11px] font-mono">{opacity}%</span>
      </div>
      <input
        type="range"
        min={0}
        max={100}
        value={opacity}
        onChange={(e) => setOpacity(parseInt(e.target.value))}
        className="w-full accent-[#F26522] cursor-pointer"
      />
    </div>
  )
}
