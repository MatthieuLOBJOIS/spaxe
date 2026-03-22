'use client'

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'

interface ViewButtonProps {
  label: string
  onClick: () => void
}

export default function ViewButton({ label, onClick }: ViewButtonProps) {
  return (
    <Tooltip>
      <TooltipTrigger onClick={onClick}>
        <div className="px-2.5 py-1.25 rounded-md cursor-pointer text-white/50 text-xs font-semibold transition-all duration-150 hover:text-white hover:bg-white/6">
          {label}
        </div>
      </TooltipTrigger>
      <TooltipContent side="bottom">{label} view</TooltipContent>
    </Tooltip>
  )
}
