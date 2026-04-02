'use client'

import { Shuffle } from 'lucide-react'

interface RandomColorButtonProps {
  onRandom: () => void
}

export default function RandomColorButton({
  onRandom,
}: RandomColorButtonProps) {
  return (
    <button
      onClick={onRandom}
      className="p-2 rounded-lg bg-white/4 border border-white/8 text-white/40 hover:text-white hover:bg-white/8 transition-colors cursor-pointer"
      title="Random color per part"
    >
      <Shuffle size={14} />
    </button>
  )
}
