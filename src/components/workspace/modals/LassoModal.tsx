'use client'

import { useViewerStore } from '@/store/viewerStore'

export default function LassoModal() {
  const { selectedPart, setSelectedPart } = useViewerStore()

  const selectedCount = selectedPart ? 1 : 0

  return (
    <div className="flex flex-col gap-4">
      {/* Compteur */}
      <div className="flex items-center justify-between px-3 py-2.5 bg-white/3 rounded-lg border border-white/6">
        <span className="text-white/50 text-[12px]">Selected parts</span>
        <span className="text-[#F26522] font-mono text-[13px] font-bold">
          {selectedCount}
        </span>
      </div>

      {/* Reset */}
      <button
        onClick={() => setSelectedPart(null)}
        disabled={selectedCount === 0}
        className={`w-full px-3 py-2.5 rounded-lg text-[13px] font-semibold transition-colors duration-150 border
          ${
            selectedCount > 0
              ? 'bg-[rgba(242,101,34,0.08)] border-[rgba(242,101,34,0.3)] text-[#F26522] hover:bg-[rgba(242,101,34,0.15)] cursor-pointer'
              : 'bg-white/3 border-white/6 text-white/20 cursor-not-allowed'
          }`}
      >
        Deselect all
      </button>
    </div>
  )
}
