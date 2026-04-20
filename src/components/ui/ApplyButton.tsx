'use client'

import { useAssemblyStore } from '@/store/assemblyStore'
import { cn } from '@/lib/utils'

interface ApplyButtonProps {
  onApply: () => void
  label?: string
}

/** Apply button — enabled only when at least one part is selected. */
export function ApplyButton({ onApply, label = 'Apply' }: ApplyButtonProps) {
  const hasSelection = useAssemblyStore((s) => s.selectedParts.length > 0)

  return (
    <button
      disabled={!hasSelection}
      onClick={onApply}
      className={cn(
        'w-full px-3 py-2.5 rounded-lg text-xs font-semibold border transition-colors',
        hasSelection
          ? 'bg-primary/8 border-primary/30 text-primary hover:bg-primary/15 cursor-pointer'
          : 'bg-fg/3 border-fg/6 text-fg/20 cursor-not-allowed'
      )}
    >
      {label}
    </button>
  )
}
