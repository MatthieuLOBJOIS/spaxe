// Bouton de reset global pour toutes les pièces

type ResetAllButtonProps = {
  onReset: () => void
}

export default function ResetAllButton({ onReset }: ResetAllButtonProps) {
  return (
    <button
      onClick={onReset}
      className="flex-1 px-3 py-2 rounded-lg text-[12px] font-semibold transition-colors duration-150 border bg-white/3 border-white/6 text-white/40 hover:text-white hover:bg-white/6 cursor-pointer"
    >
      Reset all
    </button>
  )
}
