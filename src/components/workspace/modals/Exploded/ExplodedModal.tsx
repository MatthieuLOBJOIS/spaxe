'use client'

import { useState, useRef } from 'react'

import Slider from '@/components/ui/Slider'
import PlayResetButton from '@/components/workspace/modals/Exploded/PlayResetButton'
import AxisSelector from '@/components/workspace/modals/Exploded/AxisSelector'

import { useExplodedAnimation } from '@/hooks/useExplodedAnimation'
import { type Axis } from '@/config/workspace/modals/defaultExploded'

export default function ExplodedModal() {
  const [value, setValue] = useState(0)
  const [axis, setAxis] = useState<Axis>('all')
  const [playing, setPlaying] = useState(false)
  const directionRef = useRef<'forward' | 'backward'>('forward')

  useExplodedAnimation({
    playing,
    directionRef,
    onTick: setValue,
    onEnd: () => setPlaying(false),
  })

  // ── Handlers ─────────────────────────────────────────

  const handlePlay = () => {
    directionRef.current = 'forward'
    setPlaying(true)
  }

  const handleStop = () => {
    setPlaying(false)
  }

  const handleReset = () => {
    if (value === 0) return
    directionRef.current = 'backward'
    setPlaying(true)
  }

  const handleSlider = (v: number) => {
    setPlaying(false)
    setValue(v)
  }

  return (
    <div className="flex flex-col gap-4">
      {/* ── Axe d'explosion ─────────────────────────── */}
      <AxisSelector value={axis} onChange={setAxis} />

      {/* ── Slider ──────────────────────────────────── */}
      <Slider
        label="EXPLODED"
        value={Math.round(value)}
        min={0}
        max={100}
        step={0.1}
        unit="%"
        onChange={handleSlider}
      />

      {/* ── Play / Reset ─────────────────────────────── */}
      <PlayResetButton
        playing={playing}
        disabledReset={value === 0}
        onPlay={handlePlay}
        onStop={handleStop}
        onReset={handleReset}
      />
    </div>
  )
}
