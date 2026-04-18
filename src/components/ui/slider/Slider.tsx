'use client'

import { cn } from '@/lib/utils'
import styles from './slider.module.css'

interface SliderProps {
  /** Label displayed above the slider. */
  label: string
  /** Current value. */
  value: number
  min?: number
  max?: number
  step?: number
  onChange: (value: number) => void
  unit?: string
  renderValue?: (value: number) => React.ReactNode
  variant?: 'default' | 'x' | 'y' | 'z'
}

// Slider component with label, value display, and customizable styling variants.
export function Slider({
  label,
  value,
  min = 0,
  max = 100,
  step = 1,
  unit = '',
  variant = 'default',
  onChange,
  renderValue,
}: SliderProps) {
  const percent = ((value - min) / (max - min)) * 100

  return (
    <div className="flex flex-col gap-2 w-full">
      <div className="flex items-center justify-between">
        <span className="text-xs font-mono text-muted uppercase tracking-wider">
          {label}
        </span>
        <span className="text-xs font-mono text-muted">
          {renderValue ? renderValue(value) : `${value}${unit}`}
        </span>
      </div>

      <div
        className={cn('relative w-full h-6 flex items-center', styles.root)}
        data-variant={variant}
      >
        {/* Track */}
        <div className="absolute inset-x-0 h-2 rounded-full bg-surface-elevated border border-border pointer-events-none" />

        {/* Fill */}
        <div
          className={cn(
            'absolute left-0 h-2 rounded-full pointer-events-none',
            styles.fill
          )}
          style={{ width: `${percent}%` }}
        />

        {/* Input */}
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className={cn(
            'absolute inset-0 w-full h-full appearance-none bg-transparent cursor-pointer z-10',
            styles.thumb
          )}
        />
      </div>
    </div>
  )
}
