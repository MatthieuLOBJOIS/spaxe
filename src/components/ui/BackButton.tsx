'use client'

/**
 * BackButton component
 *
 * This component renders a button that navigates back to the previous page.
 * It uses the `handleBack` prop to perform the navigation action.
 *
 * @param {BackButtonProps} props - The properties for the BackButton component.
 */
interface BackButtonProps {
  handleBack: () => void
}

export function BackButton({ handleBack }: BackButtonProps) {
  return (
    <button
      onClick={handleBack}
      className="px-3.5 py-1.5 rounded-md border border-white/10 text-white/40 text-[13px] cursor-pointer transition-colors duration-150 hover:text-white hover:border-white/20"
    >
      Back
    </button>
  )
}
