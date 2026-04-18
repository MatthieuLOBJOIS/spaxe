'use client'

import { cn } from '@/lib/utils'

interface ViewButtonProps {
  label: string
  onClick: () => void
  disabled?: boolean
}

// Button preset view scene selection
export function ViewButton({
  label,
  onClick,
  disabled = false,
}: ViewButtonProps) {
  return (
    <button
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      className={cn(
        'px-2.5 py-1.5 rounded-md text-xs font-semibold transition-all',
        disabled
          ? 'text-muted cursor-not-allowed opacity-50'
          : 'text-muted cursor-pointer hover:text-white hover:bg-surface'
      )}
    >
      {label}
    </button>
  )
}
