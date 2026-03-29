'use client'

import { useAssemblyStore } from '@/store/assemblyStore'

export default function SelectedPart() {
  const { selectedPart } = useAssemblyStore()

  return (
    <div className="px-3 py-2 bg-white/3 rounded-lg border border-white/6">
      <span className="text-white/30 text-[10px] font-mono tracking-[1px]">
        SELECTED
      </span>
      <p
        className={`text-[13px] font-semibold mt-0.5 truncate ${
          selectedPart ? 'text-[#22d3ee]' : 'text-white/20'
        }`}
      >
        {selectedPart ?? 'No part selected'}
      </p>
    </div>
  )
}
