'use client'

import { useAssemblyStore } from '@/store/assemblyStore'

interface ApplyButtonProps {
  onApply: () => void
  label?: string
}

/**
 * Apply button — disabled when no parts are selected.
 * Reads selectedParts from assemblyStore internally.
 *
 * @param onApply - Callback fired on click (only when selection exists)
 * @param label   - Button label (default: "Apply")
 */

export function ApplyButton({ onApply, label = 'Apply' }: ApplyButtonProps) {
  const selectedParts = useAssemblyStore((s) => s.selectedParts)

  const hasSelection = selectedParts.length > 0

  return (
    <button
      disabled={!hasSelection}
      onClick={onApply}
      className={`w-full px-3 py-2.5 rounded-lg text-[12px] font-semibold border transition-colors duration-150
        ${
          hasSelection
            ? 'bg-orange/8 border-orange/30 text-orange hover:bg-orange/15 cursor-pointer'
            : 'bg-white/3 border-white/6 text-white/20 cursor-not-allowed'
        }`}
    >
      {label}
    </button>
  )
}
