'use client'

import cn from '@/lib/utils'

interface Part {
  label: string
  color: string
}

const parts: Part[] = [
  { label: 'Frame_001', color: '#888888' },
  { label: 'Cover_Top', color: '#cccccc' },
  { label: 'Shaft_A', color: '#d46800' },
  { label: 'Bearing_01', color: '#444444' },
  { label: 'Gear_Main', color: '#555555' },
  { label: 'Mount_Plate', color: '#999999' },
]

export default function MockupPartsTree() {
  return (
    <div className="w-40 bg-background border-r border-white/6 shrink-0">
      <div className="px-3 py-2 border-b border-white/6 flex justify-between items-center">
        <span className="text-white/30 text-[9px] font-mono tracking-[1px]">
          PARTS TREE
        </span>
        <span className="text-orange text-[11px] font-mono">6</span>
      </div>
      {parts.map((part, i) => (
        <div
          key={i}
          className={`flex items-center gap-2 px-3 py-1.75 ${cn(i === 2 ? 'bg-orange/10 border-l-2 border-orange' : 'border-l-2 border-transparent')}`}
        >
          <input
            type="checkbox"
            defaultChecked
            className="w-2.5 h-2.5 shrink-0 accent-orange"
          />
          <div
            className="w-2 h-2 rounded-full shrink-0 border border-white/20"
            style={{ background: part.color }}
          />
          <span
            className={`text-[10px] truncate ${cn(i === 2 ? 'text-orange' : 'text-white/50')}`}
          >
            {part.label}
          </span>
        </div>
      ))}
    </div>
  )
}
