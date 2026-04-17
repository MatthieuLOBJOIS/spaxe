'use client'

import { Play, Square } from 'lucide-react'

interface PlayResetButtonProps {
  playing: boolean
  disabledReset: boolean
  onPlay: () => void
  onStop: () => void
  onReset: () => void
}

export default function PlayResetButton({
  playing,
  disabledReset,
  onPlay,
  onStop,
  onReset,
}: PlayResetButtonProps) {
  return (
    <div className="flex gap-2 pt-2 border-t border-white/6">
      <button
        onClick={playing ? onStop : onPlay}
        className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-[12px] font-semibold transition-colors duration-150 border bg-[rgba(242,101,34,0.08)] border-[rgba(242,101,34,0.3)] text-[#F26522] hover:bg-[rgba(242,101,34,0.15)] cursor-pointer"
      >
        {playing ? <Square size={13} /> : <Play size={13} />}
        {playing ? 'Stop' : 'Play'}
      </button>

      <button
        onClick={onReset}
        disabled={disabledReset}
        className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-[12px] font-semibold transition-colors duration-150 border bg-white/3 border-white/6 text-white/40 hover:text-white hover:bg-white/6 cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
      >
        <Play size={13} className="scale-x-[-1]" />
        Reset
      </button>
    </div>
  )
}
