import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'

interface ViewButtonProps {
  label: string
  onClick: () => void
  disabled?: boolean
}

export default function ViewButton({
  label,
  onClick,
  disabled = false,
}: ViewButtonProps) {
  return (
    <Tooltip>
      <TooltipTrigger
        onClick={disabled ? undefined : onClick}
        disabled={disabled}
      >
        <div
          className={`px-2.5 py-1.25 rounded-md text-xs font-semibold transition-all duration-150
          ${
            disabled
              ? 'text-white/15 cursor-not-allowed'
              : 'text-white/50 cursor-pointer hover:text-white hover:bg-white/6'
          }`}
        >
          {label}
        </div>
      </TooltipTrigger>
      <TooltipContent side="bottom">
        {disabled ? `${label} view — coming soon` : `${label} view`}
      </TooltipContent>
    </Tooltip>
  )
}
