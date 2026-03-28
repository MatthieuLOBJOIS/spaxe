'use client'

import { useState, useEffect, useRef } from 'react'
import { Play, Square } from 'lucide-react'

type Axis = 'all' | 'x' | 'y' | 'z'

const AXES: { id: Axis; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'x', label: 'X' },
  { id: 'y', label: 'Y' },
  { id: 'z', label: 'Z' },
]

export default function ExplodedModal() {
  const [value, setValue] = useState(0)
  const [axis, setAxis] = useState<Axis>('all')
  const [playing, setPlaying] = useState(false)
  const animRef = useRef<number | null>(null)
  const dirRef = useRef(1)

  // ── Animation lecture ────────────────────────────────
  useEffect(() => {
    if (!playing) {
      if (animRef.current) cancelAnimationFrame(animRef.current)
      return
    }

    const animate = () => {
      setValue((prev) => {
        const next = prev + dirRef.current * 0.5
        if (next >= 100) {
          dirRef.current = -1
          return 100
        }
        if (next <= 0) {
          dirRef.current = 1
          return 0
        }
        return next
      })
      animRef.current = requestAnimationFrame(animate)
    }

    animRef.current = requestAnimationFrame(animate)
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current)
    }
  }, [playing])

  const reset = () => {
    setPlaying(false)
    setValue(0)
    dirRef.current = 1
  }

  return (
    <div className="flex flex-col gap-4">
      {/* Axe d'explosion */}
      <div className="flex flex-col gap-2">
        <span className="text-white/30 text-[10px] font-mono tracking-[1px]">
          AXIS
        </span>
        <div className="flex items-center rounded-lg border border-white/8 overflow-hidden">
          {AXES.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => setAxis(id)}
              className={`flex-1 py-2 text-[11px] font-semibold font-mono tracking-[1px] uppercase transition-colors duration-150
                ${
                  axis === id
                    ? 'bg-[rgba(242,101,34,0.15)] text-[#F26522]'
                    : 'bg-transparent text-white/30 hover:text-white/60 cursor-pointer'
                }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Slider */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <span className="text-white/30 text-[10px] font-mono tracking-[1px]">
            EXPLOSION
          </span>
          <span className="text-[#F26522] text-[12px] font-mono font-bold">
            {Math.round(value)}%
          </span>
        </div>
        <input
          type="range"
          min={0}
          max={100}
          step={0.1}
          value={value}
          onChange={(e) => setValue(parseFloat(e.target.value))}
          className="w-full accent-[#F26522] cursor-pointer"
        />
      </div>

      {/* Lecture + Reset */}
      <div className="flex gap-2 pt-2 border-t border-white/6">
        <button
          onClick={() => setPlaying((p) => !p)}
          className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-[12px] font-semibold transition-colors duration-150 border bg-[rgba(242,101,34,0.08)] border-[rgba(242,101,34,0.3)] text-[#F26522] hover:bg-[rgba(242,101,34,0.15)] cursor-pointer"
        >
          {playing ? <Square size={13} /> : <Play size={13} />}
          {playing ? 'Stop' : 'Play'}
        </button>
        <button
          onClick={reset}
          className="flex-1 px-3 py-2 rounded-lg text-[12px] font-semibold transition-colors duration-150 border bg-white/3 border-white/6 text-white/40 hover:text-white hover:bg-white/6 cursor-pointer"
        >
          Reset
        </button>
      </div>
    </div>
  )
}
