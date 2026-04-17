interface ResetButtonProps {
  onReset: () => void
  disabled?: boolean
}

// Button to reset the selected part.
export function ResetButton({ onReset, disabled = false }: ResetButtonProps) {
  return (
    <button
      onClick={onReset}
      disabled={disabled}
      className={`flex-1 px-3 py-2 rounded-lg text-[12px] font-semibold transition-colors duration-150 border
        ${
          disabled
            ? 'bg-white/3 border-white/6 text-white/20 cursor-not-allowed'
            : 'bg-orange/8 border-orange/30 text-orange hover:bg-orange/15 cursor-pointer'
        }`}
    >
      Reset selected
    </button>
  )
}
