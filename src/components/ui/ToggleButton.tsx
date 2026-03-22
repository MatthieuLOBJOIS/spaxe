'use client'

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'

interface ToggleOption {
  label: string
  tooltip: string
}

interface ToggleButtonProps {
  options: readonly [ToggleOption, ToggleOption]
  activeIndex: 0 | 1
  onChange: (index: 0 | 1) => void
}

export default function ToggleButton({
  options,
  activeIndex,
  onChange,
}: ToggleButtonProps) {
  return (
    <div className="flex items-center rounded-md border border-white/8 overflow-hidden shrink-0">
      {options.map((option, i) => (
        <Tooltip key={option.label}>
          <TooltipTrigger
            onClick={() => {
              if (activeIndex !== i) onChange(i as 0 | 1)
            }}
          >
            <div
              className={`px-2.5 py-1.25 text-[11px] font-semibold transition-colors duration-150
              ${i === 0 ? 'border-r border-white/8' : ''}
              ${
                activeIndex === i
                  ? 'bg-[rgba(242,101,34,0.15)] text-[#F26522]'
                  : 'bg-transparent text-white/35 cursor-pointer'
              }`}
            >
              {option.label}
            </div>
          </TooltipTrigger>
          <TooltipContent side="bottom">{option.tooltip}</TooltipContent>
        </Tooltip>
      ))}
    </div>
  )
}
