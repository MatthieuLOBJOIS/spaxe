'use client'

/**
 * Controlled range input with a label and optional unit suffix.
 *
 * @param label - Label displayed above the slider.
 * @param value - Current numeric value.
 * @param min - Minimum bound (default 0).
 * @param max - Maximum bound (default 100).
 * @param step - Step increment (default 1).
 * @param unit - Optional unit suffix displayed next to the value.
 * @param onChange - Callback fired with the parsed float value on input change.
 */
interface SliderProps {
  label: string
  value: number
  min?: number
  max?: number
  step?: number
  unit?: string
  onChange: (value: number) => void
}

export function Slider({
  label,
  value,
  min = 0,
  max = 100,
  step = 1,
  unit = '',
  onChange,
}: SliderProps) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <span className="text-white/30 text-[10px] font-mono tracking-[1px]">
          {label}
        </span>
        <span className="text-white/60 text-[11px] font-mono">
          {value}
          {unit}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        className="w-full accent-orange cursor-pointer"
      />
    </div>
  )
}
