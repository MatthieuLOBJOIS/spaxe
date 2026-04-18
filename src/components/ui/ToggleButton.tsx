'use client'

import { cn } from '@/lib/utils'

interface ToggleOption {
  label: string
  tooltip: string
}

interface ToggleButtonProps {
  options: readonly [ToggleOption, ToggleOption]
  activeIndex: 0 | 1
  onChange: (index: 0 | 1) => void
  disabled?: boolean
}

/** Two-option toggle button with active state highlight. */
export function ToggleButton({
  options,
  activeIndex,
  onChange,
  disabled = false,
}: ToggleButtonProps) {
  return (
    <div
      className={cn(
        'flex items-center rounded-md border overflow-hidden shrink-0',
        disabled ? 'border-border/40' : 'border-border'
      )}
    >
      {options.map((option, i) => (
        <button
          key={option.label}
          disabled={disabled}
          onClick={() => {
            if (!disabled && activeIndex !== i) onChange(i as 0 | 1)
          }}
          className={cn(
            'px-2.5 py-1.5 text-xs font-semibold transition-colors',
            i === 0 && 'border-r border-border',
            disabled
              ? 'text-muted cursor-not-allowed'
              : activeIndex === i
                ? 'bg-primary/15 text-primary'
                : 'bg-transparent text-muted cursor-pointer'
          )}
        >
          {option.label}
        </button>
      ))}
    </div>
  )
}
