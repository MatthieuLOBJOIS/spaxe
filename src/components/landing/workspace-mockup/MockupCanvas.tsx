import {
  MOCKUP_CENTER,
  MOCKUP_LINES,
  MOCKUP_PARTS,
  GEAR_CENTER,
  GEAR_ANGLES,
  MOCKUP_SELECTED_LABEL,
  STROKE_MAP,
} from '@/config/landing/mockup'

export default function MockupCanvas() {
  return (
    <div className="flex-1 bg-bg flex items-center justify-center relative">
      <svg
        width="240"
        height="240"
        viewBox="0 0 240 240"
        className="opacity-80"
      >
        {/* Dashed lines from center */}
        {MOCKUP_LINES.map(({ x2, y2 }, i) => (
          <line
            key={i}
            x1={MOCKUP_CENTER.x}
            y1={MOCKUP_CENTER.y}
            x2={x2}
            y2={y2}
            stroke={STROKE_MAP.primary}
            strokeWidth="1"
            strokeDasharray="3,3"
            strokeOpacity="0.35"
          />
        ))}

        {/* Parts */}
        {MOCKUP_PARTS.map((part, i) =>
          part.type === 'rect' ? (
            <rect
              key={i}
              x={part.x}
              y={part.y}
              width={part.w}
              height={part.h}
              rx={part.rx}
              fill="none"
              stroke={STROKE_MAP[part.stroke]}
              strokeWidth={part.strokeWidth ?? 1}
              opacity={part.opacity}
            />
          ) : (
            <circle
              key={i}
              cx={part.cx}
              cy={part.cy}
              r={part.r}
              fill="none"
              stroke={STROKE_MAP[part.stroke]}
              strokeWidth={part.strokeWidth ?? 1}
            />
          )
        )}

        {/* Gear teeth */}
        {GEAR_ANGLES.map((angle, i) => (
          <line
            key={i}
            x1={GEAR_CENTER.cx + Math.cos((angle * Math.PI) / 180) * 10}
            y1={GEAR_CENTER.cy + Math.sin((angle * Math.PI) / 180) * 10}
            x2={GEAR_CENTER.cx + Math.cos((angle * Math.PI) / 180) * 16}
            y2={GEAR_CENTER.cy + Math.sin((angle * Math.PI) / 180) * 16}
            stroke={STROKE_MAP.mid}
            strokeWidth="3"
            strokeLinecap="round"
          />
        ))}
      </svg>

      {/* Selection badge */}
      <div className="absolute bottom-4 left-3 px-2.5 py-1 bg-primary/8 border border-primary/30 rounded text-primary text-2xs font-mono tracking-label">
        {MOCKUP_SELECTED_LABEL}
      </div>

      {/* Perspective cube */}
      <div className="absolute bottom-3 right-3 w-9 h-9 border border-fg/10 rounded flex items-center justify-center">
        <svg width="24" height="24" viewBox="0 0 24 24">
          <rect
            x="3"
            y="3"
            width="12"
            height="12"
            fill="none"
            stroke={STROKE_MAP.primary}
            strokeWidth="1"
            opacity="0.5"
          />
          <rect
            x="7"
            y="7"
            width="12"
            height="12"
            fill="none"
            stroke={STROKE_MAP.faint}
            strokeWidth="1"
            opacity="1"
          />
          {[
            [3, 3, 7, 7],
            [15, 3, 19, 7],
            [3, 15, 7, 19],
            [15, 15, 19, 19],
          ].map(([x1, y1, x2, y2], i) => (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke={STROKE_MAP.mid}
              strokeWidth="1"
              opacity="0.5"
            />
          ))}
        </svg>
      </div>
    </div>
  )
}
