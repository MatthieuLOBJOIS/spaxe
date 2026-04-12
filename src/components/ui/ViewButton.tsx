'use client'

/**
 * ViewButton component
 *
 * This component renders a button with a label.
 * It uses the `label`, `onClick`, and `disabled` props to control its behavior and appearance.
 *
 * @param {ViewButtonProps} props - The properties for the ViewButton component.
 */
interface ViewButtonProps {
  label: string
  onClick: () => void
  disabled?: boolean
}

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
