'use client'

interface Part {
  label: string
  color: string
}

const parts: Part[] = [
  { label: 'Frame_001', color: '#888888' },
  { label: 'Cover_Top', color: '#cccccc' },
  { label: 'Shaft_A', color: '#d46800' },
  { label: 'Bearing_01', color: '#444444' },
  { label: 'Gear_Main', color: '#555555' },
  { label: 'Mount_Plate', color: '#999999' },
]

const TOOLBAR_BTNS = ['⤢', '↺', 'Top', 'Front']

export default function WorkspaceMockup() {
  return (
    <div className="absolute right-[6%] top-1/2 -translate-y-1/2 z-[5] w-[520px] rounded-xl overflow-hidden border border-white/10 bg-[#141416] shadow-[0_40px_80px_rgba(0,0,0,0.6)]">
      {/* Toolbar */}
      <div className="h-11 bg-[#1a1a1a] border-b border-white/[0.08] flex items-center gap-2 px-[14px]">
        <div className="flex items-center mr-3">
          <span className="text-white font-bold text-xs tracking-[3px]">
            SP
          </span>
          <span className="text-[#F26522] text-[11px] tracking-[3px]">▲</span>
          <span className="text-white font-bold text-xs tracking-[3px]">
            XE
          </span>
        </div>
        {TOOLBAR_BTNS.map((btn) => (
          <div
            key={btn}
            className="px-2 py-[3px] rounded bg-white/[0.06] text-white/50 text-[11px]"
          >
            {btn}
          </div>
        ))}
        <div className="flex-1" />
        <div className="px-[10px] py-[3px] rounded bg-[rgba(242,101,34,0.15)] border border-[rgba(242,101,34,0.3)] text-[#F26522] text-[10px] font-mono">
          EXPLODE
        </div>
      </div>

      {/* Body */}
      <div className="flex h-[320px]">
        {/* Panel gauche */}
        <div className="w-[160px] bg-[#141416] border-r border-white/[0.06] shrink-0">
          <div className="px-3 py-2 border-b border-white/[0.06] flex justify-between items-center">
            <span className="text-white/30 text-[9px] font-mono tracking-[1px]">
              PARTS TREE
            </span>
            <span className="text-[#F26522] text-[11px] font-mono">6</span>
          </div>
          {parts.map((part, i) => (
            <div
              key={i}
              className={`flex items-center gap-2 px-3 py-[7px] ${i === 2 ? 'bg-[rgba(242,101,34,0.1)] border-l-2 border-[#F26522]' : 'border-l-2 border-transparent'}`}
            >
              <input
                type="checkbox"
                defaultChecked
                className="w-[10px] h-[10px] shrink-0 accent-[#F26522]"
              />
              <div
                className="w-2 h-2 rounded-full shrink-0 border border-white/20"
                style={{ background: part.color }}
              />
              <span
                className={`text-[10px] truncate ${i === 2 ? 'text-[#F26522]' : 'text-white/50'}`}
              >
                {part.label}
              </span>
            </div>
          ))}
        </div>

        {/* Canvas simulé */}
        <div className="flex-1 bg-[#0a0a0a] flex items-center justify-center relative">
          <svg
            width="240"
            height="240"
            viewBox="0 0 240 240"
            className="opacity-80"
          >
            {[
              [120, 120, 120, 30],
              [120, 120, 60, 160],
              [120, 120, 180, 160],
              [120, 120, 40, 100],
              [120, 120, 200, 90],
            ].map(([x1, y1, x2, y2], i) => (
              <line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="rgba(242,101,34,0.2)"
                strokeWidth="1"
                strokeDasharray="3,3"
              />
            ))}
            <rect
              x="95"
              y="100"
              width="50"
              height="30"
              rx="3"
              fill="none"
              stroke="#888888"
              strokeWidth="2"
            />
            <rect
              x="98"
              y="22"
              width="44"
              height="16"
              rx="2"
              fill="none"
              stroke="#cccccc"
              strokeWidth="1.5"
            />
            <rect
              x="112"
              y="68"
              width="16"
              height="28"
              rx="2"
              fill="none"
              stroke="#F26522"
              strokeWidth="2"
            />
            <rect
              x="111"
              y="67"
              width="18"
              height="30"
              rx="3"
              fill="none"
              stroke="#F26522"
              strokeWidth="1"
              opacity="0.4"
            />
            <circle
              cx="55"
              cy="162"
              r="12"
              fill="none"
              stroke="#444444"
              strokeWidth="1.5"
            />
            <circle
              cx="55"
              cy="162"
              r="6"
              fill="none"
              stroke="#444444"
              strokeWidth="1"
            />
            <circle
              cx="185"
              cy="162"
              r="14"
              fill="none"
              stroke="#555555"
              strokeWidth="1.5"
            />
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
              <line
                key={i}
                x1={185 + Math.cos((angle * Math.PI) / 180) * 10}
                y1={162 + Math.sin((angle * Math.PI) / 180) * 10}
                x2={185 + Math.cos((angle * Math.PI) / 180) * 16}
                y2={162 + Math.sin((angle * Math.PI) / 180) * 16}
                stroke="#555555"
                strokeWidth="3"
                strokeLinecap="round"
              />
            ))}
            <rect
              x="28"
              y="90"
              width="24"
              height="20"
              rx="2"
              fill="none"
              stroke="#999999"
              strokeWidth="1.5"
            />
            <rect
              x="188"
              y="78"
              width="20"
              height="20"
              rx="2"
              fill="none"
              stroke="#999999"
              strokeWidth="1.5"
            />
          </svg>

          {/* Label sélection */}
          <div className="absolute bottom-4 left-3 px-[10px] py-1 bg-[rgba(242,101,34,0.15)] border border-[rgba(242,101,34,0.3)] rounded text-[#F26522] text-[9px] font-mono tracking-[1px]">
            SHAFT_A · SELECTED
          </div>

          {/* NavCube */}
          <div className="absolute bottom-3 right-3 w-9 h-9 border border-white/10 rounded flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24">
              <rect
                x="3"
                y="3"
                width="12"
                height="12"
                fill="none"
                stroke="rgba(255,255,255,0.3)"
                strokeWidth="1"
              />
              <rect
                x="7"
                y="7"
                width="12"
                height="12"
                fill="none"
                stroke="rgba(255,255,255,0.15)"
                strokeWidth="1"
              />
              <line
                x1="3"
                y1="3"
                x2="7"
                y2="7"
                stroke="rgba(255,255,255,0.2)"
                strokeWidth="1"
              />
              <line
                x1="15"
                y1="3"
                x2="19"
                y2="7"
                stroke="rgba(255,255,255,0.2)"
                strokeWidth="1"
              />
              <line
                x1="3"
                y1="15"
                x2="7"
                y2="19"
                stroke="rgba(255,255,255,0.2)"
                strokeWidth="1"
              />
              <line
                x1="15"
                y1="15"
                x2="19"
                y2="19"
                stroke="rgba(255,255,255,0.2)"
                strokeWidth="1"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Status bar */}
      <div className="h-7 bg-[#1a1a1a] border-t border-white/[0.06] flex items-center px-[14px] gap-4">
        <span className="text-white/20 text-[9px] font-mono">
          assembly.spaxe
        </span>
        <span className="text-white/20 text-[9px] font-mono">STL</span>
        <span className="text-white/20 text-[9px] font-mono">
          6 parts loaded
        </span>
        <div className="flex-1" />
        <div className="w-[6px] h-[6px] rounded-full bg-green-500" />
      </div>
    </div>
  )
}
