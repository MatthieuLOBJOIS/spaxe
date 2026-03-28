'use client'

import { useState } from 'react'
import { HexColorPicker, HexColorInput } from 'react-colorful'
import { useViewerStore } from '@/store/viewerStore'

// ── Couleurs par défaut ──────────────────────────────────
const DEFAULT_COLORS = [
  '#ffffff',
  '#d4d4d4',
  '#737373',
  '#404040',
  '#171717',
  '#ef4444',
  '#f97316',
  '#eab308',
  '#22c55e',
  '#14b8a6',
  '#3b82f6',
  '#8b5cf6',
  '#ec4899',
  '#f43f5e',
  '#84cc16',
  '#06b6d4',
  '#6366f1',
  '#a855f7',
  '#d46800',
  '#0ea5e9',
]

// ── Hex → RGB ────────────────────────────────────────────
function hexToRgb(hex: string): { r: number; g: number; b: number } {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : { r: 0, g: 0, b: 0 }
}

export default function ColorModal() {
  const { selectedPart } = useViewerStore()
  const [color, setColor] = useState('#d46800')
  const [opacity, setOpacity] = useState(100)

  const rgb = hexToRgb(color)

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

      {/* Color picker gradient */}
      <div className="w-full [&_.react-colorful]:w-full [&_.react-colorful]:rounded-lg [&_.react-colorful\_\_saturation]:rounded-t-lg [&_.react-colorful\_\_last-control]:rounded-b-lg">
        <HexColorPicker color={color} onChange={setColor} />
      </div>

      {/* Couleur actuelle + HEX + RGB */}
      <div className="flex items-center gap-3">
        {/* Preview */}
        <div
          className="w-10 h-10 rounded-lg border border-white/20 shrink-0"
          style={{ background: color, opacity: opacity / 100 }}
        />

        {/* HEX */}
        <div className="flex flex-col gap-1 flex-1">
          <span className="text-white/30 text-[10px] font-mono tracking-[1px]">
            HEX
          </span>
          <div className="flex items-center bg-white/4 border border-white/8 rounded-lg px-2.5 py-1.5">
            <span className="text-white/30 text-[12px] font-mono">#</span>
            <HexColorInput
              color={color}
              onChange={setColor}
              className="bg-transparent text-white/70 text-[12px] font-mono outline-none w-full ml-1"
            />
          </div>
        </div>

        {/* RGB */}
        <div className="flex gap-1">
          {[
            { label: 'R', value: rgb.r, color: 'text-[#ef4444]' },
            { label: 'G', value: rgb.g, color: 'text-[#22c55e]' },
            { label: 'B', value: rgb.b, color: 'text-[#3b82f6]' },
          ].map(({ label, value, color: c }) => (
            <div key={label} className="flex flex-col items-center gap-1">
              <span className={`text-[10px] font-mono ${c}`}>{label}</span>
              <div className="bg-white/4 border border-white/8 rounded-lg px-1.5 py-1">
                <span className="text-white/60 text-[11px] font-mono">
                  {value}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Opacité */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <span className="text-white/30 text-[10px] font-mono tracking-[1px]">
            OPACITY
          </span>
          <span className="text-white/60 text-[11px] font-mono">
            {opacity}%
          </span>
        </div>
        <input
          type="range"
          min={0}
          max={100}
          value={opacity}
          onChange={(e) => setOpacity(parseInt(e.target.value))}
          className="w-full accent-[#F26522] cursor-pointer"
        />
      </div>

      {/* Couleurs par défaut */}
      <div className="flex flex-col gap-2">
        <span className="text-white/30 text-[10px] font-mono tracking-[1px]">
          PRESETS
        </span>
        <div className="grid grid-cols-10 gap-1.5">
          {DEFAULT_COLORS.map((c) => (
            <button
              key={c}
              onClick={() => setColor(c)}
              className={`w-full aspect-square rounded-md border-2 transition-all duration-150 cursor-pointer
                ${color === c ? 'border-[#F26522] scale-110' : 'border-transparent hover:scale-105'}`}
              style={{ background: c }}
            />
          ))}
        </div>
      </div>

      {/* Apply */}
      <button
        disabled={!selectedPart}
        className={`w-full px-3 py-2.5 rounded-lg text-[12px] font-semibold border transition-colors duration-150
          ${
            selectedPart
              ? 'bg-[rgba(242,101,34,0.08)] border-[rgba(242,101,34,0.3)] text-[#F26522] hover:bg-[rgba(242,101,34,0.15)] cursor-pointer'
              : 'bg-white/3 border-white/6 text-white/20 cursor-not-allowed'
          }`}
      >
        Apply to selected part
      </button>
    </div>
  )
}
