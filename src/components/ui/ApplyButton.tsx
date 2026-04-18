'use client'

import { useAssemblyStore } from '@/store/assemblyStore'
import { cn } from '@/lib/utils'

interface ApplyButtonProps {
  onApply: () => void
  label?: string
}

// Apply button (enabled only when selection exists)
export function ApplyButton({ onApply, label = 'Apply' }: ApplyButtonProps) {
  const selectedParts = useAssemblyStore((s) => s.selectedParts)

  const hasSelection = selectedParts.length > 0

  return (
    <button
      disabled={!hasSelection}
      onClick={onApply}
      className={cn(
        'w-full px-3 py-2.5 rounded-lg text-xs font-semibold border transition-colors duration-fast',
        {
          'bg-primary/8 border-primary/30 text-primary hover:bg-primary/15 cursor-pointer':
            hasSelection,
          'bg-white/3 border-white/6 text-white/20 cursor-not-allowed':
            !hasSelection,
        }
      )}
    >
      {label}
    </button>
  )
}
