'use client'

import { useAssemblyStore } from '@/store/assemblyStore'

export default function SelectedParts() {
  const selectedParts = useAssemblyStore((s) => s.selectedParts)

  const count = selectedParts.length
  const singlePart = count === 1 ? selectedParts[0] : null

  const label =
    count === 0
      ? 'No part selected'
      : count === 1
        ? singlePart
        : `${count} parts selected`

  return (
    <div className="px-3 py-2 bg-white/3 rounded-lg border border-white/6 flex items-center justify-between">
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
    </div>
  )
}
