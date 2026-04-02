'use client'

import { useState } from 'react'
import { useAssemblyStore } from '@/store/assemblyStore'

// ── Input XYZ ────────────────────────────────────────────
function XYZInput({
  label,
  values,
  onChange,
}: {
  label: string
  values: [number, number, number]
  onChange: (axis: 0 | 1 | 2, value: number) => void
}) {
  const AXES = [
    { label: 'X', color: 'text-[#ef4444]' },
    { label: 'Y', color: 'text-[#22c55e]' },
    { label: 'Z', color: 'text-[#3b82f6]' },
  ]

  return (
    <div className="flex flex-col gap-2">
      <span className="text-white/30 text-[10px] font-mono tracking-[1px]">
        {label}
      </span>
      <div className="flex gap-2">
        {AXES.map(({ label: axis, color }, i) => (
          <div
            key={axis}
            className="flex-1 flex items-center gap-1.5 bg-white/4 border border-white/8 rounded-lg px-2.5 py-1.5"
          >
            <span
              className={`text-[11px] font-bold font-mono shrink-0 ${color}`}
            >
              {axis}
            </span>
            <input
              type="number"
              value={values[i].toFixed(2)}
              onChange={(e) =>
                onChange(i as 0 | 1 | 2, parseFloat(e.target.value) || 0)
              }
              className="w-full bg-transparent text-white/70 text-[12px] font-mono outline-none text-right"
              step={0.1}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

// ── Modal ────────────────────────────────────────────────
type Mode = 'translation' | 'rotation'

export default function TransformModal() {
  const selectedPart = useAssemblyStore((s) => s.selectedParts[0] ?? null)

  const [mode, setMode] = useState<Mode>('translation')
  const [position, setPosition] = useState<[number, number, number]>([0, 0, 0])
  const [rotation, setRotation] = useState<[number, number, number]>([0, 0, 0])

  const updateAxis = (
    setter: React.Dispatch<React.SetStateAction<[number, number, number]>>,
    axis: 0 | 1 | 2,
    value: number
  ) => {
    setter((prev) => {
      const next: [number, number, number] = [...prev]
      next[axis] = value
      return next
    })
  }

  const resetSelected = () => {
    setPosition([0, 0, 0])
    setRotation([0, 0, 0])
  }

  const resetAll = () => {
    setPosition([0, 0, 0])
    setRotation([0, 0, 0])
  }

  return (
    <div className="flex flex-col gap-4">
      {/* Pièce sélectionnée */}
      <div className="px-3 py-2 bg-white/3 rounded-lg border border-white/6">
        <span className="text-white/30 text-[10px] font-mono tracking-[1px]">
          SELECTED
        </span>
        <p
          className={`text-[13px] font-semibold mt-0.5 truncate ${selectedPart ? 'text-[#22d3ee]' : 'text-white/20'}`}
        >
          {selectedPart ?? 'No part selected'}
        </p>
      </div>

      {/* Toggle Translation / Rotation */}
      <div className="flex items-center rounded-lg border border-white/8 overflow-hidden">
        {(['translation', 'rotation'] as Mode[]).map((m) => (
          <button
            key={m}
            onClick={() => setMode(m)}
            className={`flex-1 py-2 text-[11px] font-semibold font-mono tracking-[1px] uppercase transition-colors duration-150
              ${
                mode === m
                  ? 'bg-[rgba(242,101,34,0.15)] text-[#F26522]'
                  : 'bg-transparent text-white/30 hover:text-white/60 cursor-pointer'
              }`}
          >
            {m}
          </button>
        ))}
      </div>

      {/* XYZ selon le mode */}
      {mode === 'translation' ? (
        <XYZInput
          label="POSITION"
          values={position}
          onChange={(axis, val) => updateAxis(setPosition, axis, val)}
        />
      ) : (
        <XYZInput
          label="ROTATION (°)"
          values={rotation}
          onChange={(axis, val) => updateAxis(setRotation, axis, val)}
        />
      )}

      {/* Boutons reset */}
      <div className="flex gap-2 pt-2 border-t border-white/6">
        <button
          onClick={resetSelected}
          disabled={!selectedPart}
          className={`flex-1 px-3 py-2 rounded-lg text-[12px] font-semibold transition-colors duration-150 border
            ${
              selectedPart
                ? 'bg-[rgba(242,101,34,0.08)] border-[rgba(242,101,34,0.3)] text-[#F26522] hover:bg-[rgba(242,101,34,0.15)] cursor-pointer'
                : 'bg-white/3 border-white/6 text-white/20 cursor-not-allowed'
            }`}
        >
          Reset selected
        </button>
        <button
          onClick={resetAll}
          className="flex-1 px-3 py-2 rounded-lg text-[12px] font-semibold transition-colors duration-150 border bg-white/3 border-white/6 text-white/40 hover:text-white hover:bg-white/6 cursor-pointer"
        >
          Reset all
        </button>
      </div>
    </div>
  )
}
