'use client'

type BackButtonProps = {
  handleBack: () => void
}

export default function BackButton({ handleBack }: BackButtonProps) {
  return (
    <button
      onClick={handleBack}
      className="px-3.5 py-1.5 rounded-md border border-white/8 text-white/40 text-[13px] cursor-pointer transition-colors duration-150 hover:text-white hover:border-white/20"
    >
      Back
    </button>
  )
}
