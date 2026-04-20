'use client'

interface ResetAllButtonProps {
  onReset: () => void
}

/** Button to reset all parts. */
export function ResetAllButton({ onReset }: ResetAllButtonProps) {
  return (
    <button
      onClick={onReset}
      className="flex-1 px-3 py-2 rounded-lg text-xs font-semibold cursor-pointer border border-border bg-surface text-muted transition-colors hover:text-fg hover:bg-surface-elevated"
    >
      Reset all
    </button>
  )
}
