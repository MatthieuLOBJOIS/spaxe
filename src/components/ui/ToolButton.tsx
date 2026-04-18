'use client'

import { cn } from '@/lib/utils'
import type { LucideIcon } from 'lucide-react'

interface ToolButtonProps {
  icon: LucideIcon
  label: string
  onClick?: () => void
  active?: boolean
  disabled?: boolean
}

/** Icon button for workspace toolbar actions with active and disabled states. */
export function ToolButton({
  icon: Icon,
  label,
  onClick,
  active = false,
  disabled = false,
}: ToolButtonProps) {
  return (
    <button
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      aria-label={label}
      className={cn(
        'p-2.5 rounded-md flex items-center justify-center transition-all border',
        disabled
          ? 'text-muted bg-transparent border-transparent cursor-not-allowed opacity-50'
          : active
            ? 'text-primary bg-primary/12 border-primary/30 cursor-pointer'
            : 'text-muted bg-transparent border-transparent hover:text-white hover:bg-surface-hover cursor-pointer'
      )}
    >
      <Icon size={20} />
    </button>
  )
}
