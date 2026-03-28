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
}

export default function ToolButton({
  icon: Icon,
  label,
  onClick,
  active = false,
}: ToolButtonProps) {
  return (
    <Tooltip>
      <TooltipTrigger onClick={onClick}>
        <div
          className={`p-2.5 rounded-md flex items-center justify-center cursor-pointer transition-all duration-150 border
          ${
            active
              ? 'text-[#F26522] bg-[rgba(242,101,34,0.12)] border-[rgba(242,101,34,0.3)]'
              : 'text-white/50 bg-transparent border-transparent hover:text-white hover:bg-white/6'
          }`}
        >
          <Icon size={20} />
        </div>
      </TooltipTrigger>
      <TooltipContent side="bottom">{label}</TooltipContent>
    </Tooltip>
  )
}
