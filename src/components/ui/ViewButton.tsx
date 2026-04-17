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
      className={`px-2.5 py-1.25 rounded-md text-xs font-semibold transition-all duration-150
      ${
        disabled
          ? 'text-white/15 cursor-not-allowed'
          : 'text-white/50 cursor-pointer hover:text-white hover:bg-white/6'
      }`}
    >
      {label}
    </button>
  )
}
