'use client'

import { useViewerStore } from '@/store/viewerStore'

type XRayMode = 'wireframe' | 'ghost'

const MODES: { id: XRayMode; label: string }[] = [
  { id: 'wireframe', label: 'Wireframe' },
  { id: 'ghost', label: 'Ghost' },
]

export default function XRayModal() {
  const {
    xrayMode,
    xrayOpacity,
    xrayKeepSelectedSolid,
    setXrayMode,
    setXrayOpacity,
    setXrayKeepSelectedSolid,
  } = useViewerStore()

  return (
    <div className="flex flex-col gap-4">
      {/* ── MODE ───────────────────────── */}
      <div className="flex flex-col gap-2">
        <span className="text-white/30 text-[10px] font-mono tracking-[1px]">
          MODE
        </span>

        <div className="flex items-center rounded-lg border border-white/8 overflow-hidden">
          {MODES.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => setXrayMode(id)}
              className={`flex-1 py-2 text-[11px] font-semibold font-mono tracking-[1px] uppercase transition-colors duration-150
                ${
                  xrayMode === id
                    ? 'bg-[rgba(242,101,34,0.15)] text-[#F26522]'
                    : 'bg-transparent text-white/30 hover:text-white/60 cursor-pointer'
                }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* ── OPACITY ───────────────────── */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <span className="text-white/30 text-[10px] font-mono tracking-[1px]">
            OPACITY
          </span>

          <span className="text-[#F26522] text-[12px] font-mono font-bold">
            {xrayOpacity}%
          </span>
        </div>

        <input
          type="range"
          min={5}
          max={100}
          step={1}
          value={xrayOpacity}
          onChange={(e) => setXrayOpacity(parseInt(e.target.value))}
          className="w-full accent-[#F26522] cursor-pointer"
        />
      </div>

      {/* ── OPTION ───────────────────── */}
      <div className="flex items-center justify-between pt-2 border-t border-white/6">
        <span className="text-white/40 text-[11px] font-mono">
          Keep selected solid
        </span>

        <button
          onClick={() => setXrayKeepSelectedSolid(!xrayKeepSelectedSolid)}
          className={`w-10 h-5 rounded-full transition-colors duration-150 relative
            ${xrayKeepSelectedSolid ? 'bg-[#F26522]' : 'bg-white/10'}`}
        >
          <div
            className={`absolute top-0.5 w-4 h-4 rounded-full bg-white transition-all
              ${xrayKeepSelectedSolid ? 'left-5' : 'left-0.5'}`}
          />
        </button>
      </div>
    </div>
  )
}
