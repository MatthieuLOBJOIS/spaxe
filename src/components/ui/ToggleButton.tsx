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

export function ToggleButton({
  options,
  activeIndex,
  onChange,
  disabled = false,
}: ToggleButtonProps) {
  return (
    <div
      className={`flex items-center rounded-md border overflow-hidden shrink-0
      ${disabled ? 'border-white/4' : 'border-white/8'}`}
    >
      {options.map((option, i) => (
        <button
          key={option.label}
          disabled={disabled}
          onClick={() => {
            if (!disabled && activeIndex !== i) onChange(i as 0 | 1)
          }}
          className={`px-2.5 py-1.25 text-[11px] font-semibold transition-colors duration-150
          ${i === 0 ? 'border-r border-white/8' : ''}
          ${
            disabled
              ? 'text-white/15 cursor-not-allowed'
              : activeIndex === i
                ? 'bg-orange/15 text-orange'
                : 'bg-transparent text-white/35 cursor-pointer'
          }`}
        >
          {option.label}
        </button>
      ))}
    </div>
  )
}
