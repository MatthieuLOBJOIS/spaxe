'use client'

import { cn } from '@/lib/utils'
import { useAssemblyStore } from '@/store/assemblyStore'

/** Displays the current parts selection state, reading directly from assemblyStore. */
export function SelectedParts() {
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
    <div className="px-3 py-2 bg-surface rounded-lg border border-border flex items-center">
      <div>
        <span className="text-muted text-xs font-mono uppercase tracking-widest">
          SELECTED
        </span>
        <p
          className={cn(
            'text-xs font-semibold mt-0.5 truncate',
            count > 0 ? 'text-selection' : 'text-muted'
          )}
        >
          {label}
        </p>
      </div>
    </div>
  )
}
