'use client'

import { cn } from '@/lib/utils'

interface ResetButtonProps {
  onReset: () => void
  disabled?: boolean
}

/** Button to reset the selected part. */
export function ResetButton({ onReset, disabled = false }: ResetButtonProps) {
  return (
    <button
      onClick={onReset}
      disabled={disabled}
      className={cn(
        'flex-1 px-3 py-2 rounded-lg text-xs font-semibold border transition-colors',
        disabled
          ? 'bg-surface border-border text-muted cursor-not-allowed'
          : 'bg-primary/8 border-primary/30 text-primary hover:bg-primary/15 cursor-pointer'
      )}
    >
      Reset selected
    </button>
  )
}
