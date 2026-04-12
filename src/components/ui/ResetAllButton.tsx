'use client'

/**
 * ResetAllButton component
 *
 * This component renders a button to reset all parts.
 * It uses the `onReset` prop to control its behavior.
 *
 * @param {ResetAllButtonProps} props - The properties for the ResetAllButton component.
 */
interface ResetAllButtonProps {
  onReset: () => void
}

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
