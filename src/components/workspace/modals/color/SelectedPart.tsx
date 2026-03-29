'use client'

import { useAssemblyStore } from '@/store/assemblyStore'

export default function SelectedPart() {
  const selectedPart = useAssemblyStore((s) => s.selectedPart)
  const currentColor = useAssemblyStore((s) =>
    s.selectedPart ? s.partColors[s.selectedPart] : null
  )

  return (
    <div className="px-3 py-2 bg-white/[0.03] rounded-lg border border-white/[0.06] flex items-center justify-between">
      <div>
        <span className="text-white/30 text-[10px] font-mono tracking-[1px]">
          SELECTED
        </span>
        <p
          className={`text-[13px] font-semibold mt-0.5 truncate ${selectedPart ? 'text-[#22d3ee]' : 'text-white/20'}`}
        >
          {selectedPart ?? 'No part selected'}
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
