import type { LucideIcon } from 'lucide-react'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'

interface ToolButtonProps {
  icon: LucideIcon
  label: string
  onClick?: () => void
  active?: boolean
  disabled?: boolean
}

export default function ToolButton({
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
                ? 'text-[#F26522] bg-[rgba(242,101,34,0.12)] border-[rgba(242,101,34,0.3)] cursor-pointer'
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
