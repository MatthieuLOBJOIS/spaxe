'use client'

import { cn } from '@/lib/utils'

interface BackButtonProps {
  handleBack: () => void
}

// Back button (to the home)
export function BackButton({ handleBack }: BackButtonProps) {
  return (
    <button
      onClick={handleBack}
      className={cn(
        'px-3.5 py-1.5 rounded-md cursor-pointer',
        'border border-border text-muted text-sm',
        'transition-colors hover:text-white hover:border-white/20'
      )}
    >
      Back
    </button>
  )
}
