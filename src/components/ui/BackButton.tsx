'use client'

import { cn } from '@/lib/utils'

interface BackButtonProps {
  onBack: () => void
}

/** Back button — navigates to the home page. */
export function BackButton({ onBack }: BackButtonProps) {
  return (
    <button
      onClick={onBack}
      className={cn(
        'px-3.5 py-1.5 rounded-md cursor-pointer',
        'border border-border text-muted text-sm',
        'transition-colors hover:text-fg hover:border-fg/20'
      )}
    >
      Back
    </button>
  )
}
