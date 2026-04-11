export default function MockupCanvas() {
  return (
    <div className="flex-1 bg-background flex items-center justify-center relative">
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
      <div className="absolute bottom-4 left-3 px-2.5 py-1 bg-orange/15 border border-orange/30 rounded text-orange text-[9px] font-mono tracking-[1px]">
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
  )
}
