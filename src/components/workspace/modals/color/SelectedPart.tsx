'use client'

import { useAssemblyStore } from '@/store/assemblyStore'

export default function SelectedPart() {
  const selectedParts = useAssemblyStore((s) => s.selectedParts)
  const partColors = useAssemblyStore((s) => s.partColors)

  const count = selectedParts.length
  const singlePart = count === 1 ? selectedParts[0] : null
  const currentColor = singlePart ? partColors[singlePart] : null

  const label =
    count === 0
      ? 'No part selected'
      : count === 1
        ? singlePart
        : `${count} parts selected`

  return (
    <div className="px-3 py-2 bg-white/[0.03] rounded-lg border border-white/[0.06] flex items-center justify-between">
      <div>
        <span className="text-white/30 text-[10px] font-mono tracking-[1px]">
          SELECTED
        </span>

        <p
          className={`text-[13px] font-semibold mt-0.5 truncate ${
            count > 0 ? 'text-[#22d3ee]' : 'text-white/20'
          }`}
        >
          {label}
        </p>
      </div>

      {currentColor && (
        <div
          className="w-6 h-6 rounded-md border border-white/20 shrink-0"
          style={{ background: currentColor }}
        />
      )}
    </div>
  )
}
