'use client'

import { type Axis, AXES } from '@/config/workspace/modals/defaultExploded'

interface AxisSelectorProps {
  value: Axis
  onChange: (axis: Axis) => void
}

export default function AxisSelector({ value, onChange }: AxisSelectorProps) {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-white/30 text-[10px] font-mono tracking-[1px]">
        AXIS
      </span>
      <div className="flex items-center rounded-lg border border-white/8 overflow-hidden">
        {AXES.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => onChange(id)}
            className={`flex-1 py-2 text-[11px] font-semibold font-mono tracking-[1px] uppercase transition-colors duration-150 cursor-pointer
              ${
                value === id
                  ? 'bg-[rgba(242,101,34,0.15)] text-[#F26522]'
                  : 'bg-transparent text-white/30 hover:text-white/60'
              }`}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  )
}
