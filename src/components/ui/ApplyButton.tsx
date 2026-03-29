'use client'

import { useAssemblyStore } from '@/store/assemblyStore'

interface ApplyButtonProps {
  onApply: () => void
  label?: string
}

export default function ApplyButton({
  onApply,
  label = 'Apply to selected part',
}: ApplyButtonProps) {
  const { selectedPart } = useAssemblyStore()

  return (
    <button
      disabled={!selectedPart}
      onClick={() => selectedPart && onApply()}
      className={`w-full px-3 py-2.5 rounded-lg text-[12px] font-semibold border transition-colors duration-150
        ${
          selectedPart
            ? 'bg-[rgba(242,101,34,0.08)] border-[rgba(242,101,34,0.3)] text-[#F26522] hover:bg-[rgba(242,101,34,0.15)] cursor-pointer'
            : 'bg-white/3 border-white/6 text-white/20 cursor-not-allowed'
        }`}
    >
      {label}
    </button>
  )
}
