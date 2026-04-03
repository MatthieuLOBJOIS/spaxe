// Bouton de reset pour la pièce sélectionnée

type ResetButtonProps = {
  onReset: () => void
  disabled?: boolean
}

export default function ResetButton({
  onReset,
  disabled = false,
}: ResetButtonProps) {
  return (
    <button
      onClick={onReset}
      disabled={disabled}
      className={`flex-1 px-3 py-2 rounded-lg text-[12px] font-semibold transition-colors duration-150 border
        ${
          disabled
            ? 'bg-white/3 border-white/6 text-white/20 cursor-not-allowed'
            : 'bg-[rgba(242,101,34,0.08)] border-[rgba(242,101,34,0.3)] text-[#F26522] hover:bg-[rgba(242,101,34,0.15)] cursor-pointer'
        }`}
    >
      Reset selected
    </button>
  )
}
