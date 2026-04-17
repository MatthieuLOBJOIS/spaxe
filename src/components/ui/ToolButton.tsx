'use client'

import type { LucideIcon } from 'lucide-react'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'

// Button open tool modal
interface ToolButtonProps {
  icon: LucideIcon
  label: string
  onClick?: () => void
  active?: boolean
  disabled?: boolean
}

export function ToolButton({
  icon: Icon,
  label,
  onClick,
  active = false,
  disabled = false,
}: ToolButtonProps) {
  return (
    <Tooltip>
      <TooltipTrigger
        onClick={disabled ? undefined : onClick}
        disabled={disabled}
      >
        <div
          className={`p-2.5 rounded-md flex items-center justify-center transition-all duration-150 border
          ${
            disabled
              ? 'text-white/15 bg-transparent border-transparent cursor-not-allowed'
              : active
                ? 'text-orange bg-orange/12 border-orange/30 cursor-pointer'
                : 'text-white/50 bg-transparent border-transparent hover:text-white hover:bg-white/6 cursor-pointer'
          }`}
        >
          <Icon size={20} />
        </div>
      </TooltipTrigger>
      <TooltipContent side="bottom">
        {disabled ? `${label} — coming soon` : label}
      </TooltipContent>
    </Tooltip>
  )
}
