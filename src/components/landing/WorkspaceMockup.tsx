'use client'

const parts = [
  { label: 'Frame_001', color: '#888888' },
  { label: 'Cover_Top', color: '#cccccc' },
  { label: 'Shaft_A', color: '#d46800' },
  { label: 'Bearing_01', color: '#444444' },
  { label: 'Gear_Main', color: '#555555' },
  { label: 'Mount_Plate', color: '#999999' },
]

export default function WorkspaceMockup() {
  return (
    <div
      style={{
        position: 'absolute',
        right: '6%',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 5,
        width: '520px',
        borderRadius: '12px',
        overflow: 'hidden',
        border: '1px solid rgba(255,255,255,0.1)',
        background: '#141416',
        boxShadow: '0 40px 80px rgba(0,0,0,0.6)',
      }}
    >
      {/* Toolbar */}
      <div
        style={{
          height: '44px',
          background: '#1a1a1a',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '0 14px',
        }}
      >
        <div
          style={{ display: 'flex', alignItems: 'center', marginRight: '12px' }}
        >
          <span
            style={{
              color: '#fff',
              fontFamily: 'Space Grotesk',
              fontWeight: 700,
              fontSize: '12px',
              letterSpacing: '3px',
            }}
          >
            SP
          </span>
          <span
            style={{ color: '#F26522', fontSize: '11px', letterSpacing: '3px' }}
          >
            ▲
          </span>
          <span
            style={{
              color: '#fff',
              fontFamily: 'Space Grotesk',
              fontWeight: 700,
              fontSize: '12px',
              letterSpacing: '3px',
            }}
          >
            XE
          </span>
        </div>
        {['⤢', '↺', 'Top', 'Front'].map((btn) => (
          <div
            key={btn}
            style={{
              padding: '3px 8px',
              borderRadius: '4px',
              background: 'rgba(255,255,255,0.06)',
              color: 'rgba(255,255,255,0.5)',
              fontSize: '11px',
              fontFamily: 'Space Grotesk',
            }}
          >
            {btn}
          </div>
        ))}
        <div style={{ flex: 1 }} />
        <div
          style={{
            padding: '3px 10px',
            borderRadius: '4px',
            background: 'rgba(242,101,34,0.15)',
            border: '1px solid rgba(242,101,34,0.3)',
            color: '#F26522',
            fontSize: '10px',
            fontFamily: 'Geist Mono, monospace',
          }}
        >
          EXPLODE
        </div>
      </div>

      {/* Body */}
      <div style={{ display: 'flex', height: '320px' }}>
        {/* Panel gauche */}
        <div
          style={{
            width: '160px',
            background: '#141416',
            borderRight: '1px solid rgba(255,255,255,0.06)',
            flexShrink: 0,
          }}
        >
          <div
            style={{
              padding: '8px 12px',
              borderBottom: '1px solid rgba(255,255,255,0.06)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <span
              style={{
                color: 'rgba(255,255,255,0.3)',
                fontSize: '9px',
                fontFamily: 'Geist Mono, monospace',
                letterSpacing: '1px',
              }}
            >
              PARTS TREE
            </span>
            <span
              style={{
                color: '#F26522',
                fontSize: '11px',
                fontFamily: 'Geist Mono, monospace',
              }}
            >
              6
            </span>
          </div>
          {parts.map((part, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '7px 12px',
                background: i === 2 ? 'rgba(242,101,34,0.1)' : 'transparent',
                borderLeft:
                  i === 2 ? '2px solid #F26522' : '2px solid transparent',
              }}
            >
              <input
                type="checkbox"
                defaultChecked
                style={{
                  width: '10px',
                  height: '10px',
                  accentColor: '#F26522',
                  flexShrink: 0,
                }}
              />
              <div
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: part.color,
                  border: '1px solid rgba(255,255,255,0.2)',
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  color: i === 2 ? '#F26522' : 'rgba(255,255,255,0.5)',
                  fontSize: '10px',
                  fontFamily: 'Space Grotesk',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                }}
              >
                {part.label}
              </span>
            </div>
          ))}
        </div>

        {/* Canvas simulé */}
        <div
          style={{
            flex: 1,
            background: '#0a0a0a',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
          }}
        >
          <svg
            width="240"
            height="240"
            viewBox="0 0 240 240"
            style={{ opacity: 0.8 }}
          >
            <line
              x1="120"
              y1="120"
              x2="120"
              y2="30"
              stroke="rgba(242,101,34,0.2)"
              strokeWidth="1"
              strokeDasharray="3,3"
            />
            <line
              x1="120"
              y1="120"
              x2="60"
              y2="160"
              stroke="rgba(242,101,34,0.2)"
              strokeWidth="1"
              strokeDasharray="3,3"
            />
            <line
              x1="120"
              y1="120"
              x2="180"
              y2="160"
              stroke="rgba(242,101,34,0.2)"
              strokeWidth="1"
              strokeDasharray="3,3"
            />
            <line
              x1="120"
              y1="120"
              x2="40"
              y2="100"
              stroke="rgba(242,101,34,0.2)"
              strokeWidth="1"
              strokeDasharray="3,3"
            />
            <line
              x1="120"
              y1="120"
              x2="200"
              y2="90"
              stroke="rgba(242,101,34,0.2)"
              strokeWidth="1"
              strokeDasharray="3,3"
            />
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

          <div
            style={{
              position: 'absolute',
              bottom: '16px',
              left: '12px',
              padding: '4px 10px',
              background: 'rgba(242,101,34,0.15)',
              border: '1px solid rgba(242,101,34,0.3)',
              borderRadius: '4px',
              color: '#F26522',
              fontSize: '9px',
              fontFamily: 'Geist Mono, monospace',
              letterSpacing: '1px',
            }}
          >
            SHAFT_A · SELECTED
          </div>

          <div
            style={{
              position: 'absolute',
              bottom: '12px',
              right: '12px',
              width: '36px',
              height: '36px',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '4px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
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
      <div
        style={{
          height: '28px',
          background: '#1a1a1a',
          borderTop: '1px solid rgba(255,255,255,0.06)',
          display: 'flex',
          alignItems: 'center',
          padding: '0 14px',
          gap: '16px',
        }}
      >
        <span
          style={{
            color: 'rgba(255,255,255,0.2)',
            fontSize: '9px',
            fontFamily: 'Geist Mono, monospace',
          }}
        >
          assembly.spaxe
        </span>
        <span
          style={{
            color: 'rgba(255,255,255,0.2)',
            fontSize: '9px',
            fontFamily: 'Geist Mono, monospace',
          }}
        >
          STL
        </span>
        <span
          style={{
            color: 'rgba(255,255,255,0.2)',
            fontSize: '9px',
            fontFamily: 'Geist Mono, monospace',
          }}
        >
          6 parts loaded
        </span>
        <div style={{ flex: 1 }} />
        <div
          style={{
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            background: '#22c55e',
          }}
        />
      </div>
    </div>
  )
}
