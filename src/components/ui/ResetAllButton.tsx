interface ResetAllButtonProps {
  onReset: () => void
}

// Button to reset all parts.
export function ResetAllButton({ onReset }: ResetAllButtonProps) {
  return (
    <button
      onClick={onReset}
      className="flex-1 px-3 py-2 rounded-lg text-[12px] font-semibold transition-colors duration-150 border bg-white/3 border-white/6 text-white/40 hover:text-white hover:bg-white/6 cursor-pointer"
    >
      Reset all
    </button>
  )
}
