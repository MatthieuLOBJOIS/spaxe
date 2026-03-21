'use client'

import dynamic from 'next/dynamic'
import Link from 'next/link'
import {
  Box,
  Layers,
  Network,
  FileCode,
  Github,
  ArrowRight,
  Move3d,
  Scan,
} from 'lucide-react'
import { useEffect, useState } from 'react'

const SceneCanvas = dynamic(() => import('@/components/viewer/SceneCanvas'), {
  ssr: false,
})

// ============================================================
// NAVBAR
// ============================================================

function Navbar() {
  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        height: '64px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 48px',
        background: 'rgba(20,20,22,0.85)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      {/* Logo */}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span
          style={{
            color: '#ffffff',
            fontFamily: 'Space Grotesk',
            fontWeight: 700,
            fontSize: '20px',
            letterSpacing: '4px',
          }}
        >
          SP
        </span>
        <span
          style={{ color: '#F26522', fontSize: '18px', letterSpacing: '4px' }}
        >
          ▲
        </span>
        <span
          style={{
            color: '#ffffff',
            fontFamily: 'Space Grotesk',
            fontWeight: 700,
            fontSize: '20px',
            letterSpacing: '4px',
          }}
        >
          XE
        </span>
      </div>

      {/* Liens centre */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
        {['Features', 'How it works', 'GitHub'].map((item) => (
          <a
            key={item}
            href={
              item === 'GitHub'
                ? 'https://github.com/MatthieuLOBJOIS/spaxe'
                : `#${item.toLowerCase().replaceAll(' ', '-')}`
            }
            target={item === 'GitHub' ? '_blank' : undefined}
            style={{
              color: 'rgba(255,255,255,0.55)',
              fontFamily: 'Space Grotesk',
              fontWeight: 400,
              fontSize: '14px',
              textDecoration: 'none',
              cursor: 'pointer',
            }}
          >
            {item}
          </a>
        ))}
      </div>

      {/* CTA */}
      <Link href="/viewer">
        <div
          style={{
            padding: '9px 22px',
            background: '#F26522',
            borderRadius: '8px',
            color: '#ffffff',
            fontFamily: 'Space Grotesk',
            fontWeight: 700,
            fontSize: '14px',
            cursor: 'pointer',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = '#FF8C42')}
          onMouseLeave={(e) => (e.currentTarget.style.background = '#F26522')}
        >
          Commencer
        </div>
      </Link>
    </nav>
  )
}

// ============================================================
// HERO
// ============================================================

/* mockup du workspace en card flottante */
function WorkspaceMockup() {
  const parts = [
    { label: 'Frame_001', color: '#888888' },
    { label: 'Cover_Top', color: '#cccccc' },
    { label: 'Shaft_A', color: '#d46800' },
    { label: 'Bearing_01', color: '#444444' },
    { label: 'Gear_Main', color: '#555555' },
    { label: 'Mount_Plate', color: '#999999' },
  ]

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
          EXPLODED VIEW
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

        {/* Canvas simulé — vue éclatée générique */}
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
            {/* Lignes d'axe éclaté */}
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

            {/* Frame_001 — pièce centrale */}
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

            {/* Cover_Top */}
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

            {/* Shaft_A — sélectionné */}
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

            {/* Bearing_01 */}
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

            {/* Gear_Main */}
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

            {/* Mount_Plate */}
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

          {/* NavCube */}
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

/* Indicateur de scroll */
function ScrollIndicator() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY < 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      style={{
        position: 'absolute',
        bottom: '40px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 10,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px',
        opacity: visible ? 1 : 0,
        transition: 'opacity 0.4s ease',
        pointerEvents: 'none',
      }}
    >
      <span
        style={{
          color: 'rgba(255,255,255,0.3)',
          fontFamily: 'Geist Mono, monospace',
          fontSize: '10px',
          letterSpacing: '2px',
        }}
      >
        SCROLL
      </span>
      {/* Flèche animée */}
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        style={{
          animation: 'bounce 1.5s infinite',
        }}
      >
        <path
          d="M10 4 L10 16 M4 10 L10 16 L16 10"
          stroke="#F26522"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  )
}

function Hero() {
  return (
    <section
      style={{
        height: '100vh',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Viewer 3D */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <SceneCanvas interactive={false} />
      </div>

      {/* Texte */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          marginLeft: '12%',
          maxWidth: '520px',
          display: 'flex',
          flexDirection: 'column',
          gap: '32px',
        }}
      >
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 14px',
            background: 'rgba(242,101,34,0.12)',
            border: '1px solid rgba(242,101,34,0.3)',
            borderRadius: '20px',
            width: 'fit-content',
          }}
        >
          <span
            style={{
              color: '#F26522',
              fontSize: '11px',
              fontFamily: 'Geist Mono, monospace',
              letterSpacing: '1px',
            }}
          >
            ASSEMBLY VIEWER · V0.1
          </span>
        </div>

        <h1
          style={{
            color: '#ffffff',
            fontFamily: 'Space Grotesk',
            fontWeight: 700,
            fontSize: '68px',
            lineHeight: 1.0,
            letterSpacing: '-2px',
            margin: 0,
          }}
        >
          Navigate
          <br />
          complexity.
          <br />
          <span style={{ color: '#F26522' }}>In 3D.</span>
        </h1>

        <p
          style={{
            color: 'rgba(255,255,255,0.5)',
            fontFamily: 'Space Grotesk',
            fontSize: '18px',
            lineHeight: 1.7,
            margin: 0,
          }}
        >
          Interactive 3D navigation for complex assemblies. Built for makers and
          industrial teams.
        </p>

        <div style={{ display: 'flex', gap: '12px' }}>
          <Link href="/viewer">
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '14px 28px',
                background: '#F26522',
                borderRadius: '8px',
                color: '#ffffff',
                fontFamily: 'Space Grotesk',
                fontWeight: 700,
                fontSize: '15px',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = '#FF8C42')
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = '#F26522')
              }
            >
              Commencer <ArrowRight size={16} />
            </div>
          </Link>
          <a
            href="https://github.com/MatthieuLOBJOIS/spaxe"
            target="_blank"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '14px 28px',
              background: 'transparent',
              borderRadius: '8px',
              border: '1px solid rgba(255,255,255,0.2)',
              color: 'rgba(255,255,255,0.7)',
              fontFamily: 'Space Grotesk',
              fontWeight: 700,
              fontSize: '15px',
              cursor: 'pointer',
              textDecoration: 'none',
            }}
          >
            <Github size={16} /> GitHub
          </a>
        </div>
      </div>

      {/* Triangle décoratif */}
      <svg
        style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          zIndex: 1,
          opacity: 0.1,
        }}
        width="500"
        height="500"
        viewBox="0 0 500 500"
      >
        <polygon
          points="500,500 0,500 500,0"
          fill="none"
          stroke="#F26522"
          strokeWidth="1.5"
        />
        <polygon
          points="500,500 150,500 500,150"
          fill="none"
          stroke="#F26522"
          strokeWidth="1"
        />
        <polygon
          points="500,500 300,500 500,300"
          fill="none"
          stroke="#F26522"
          strokeWidth="0.8"
        />
      </svg>

      {/* mockup du workspace en card flottante */}
      <WorkspaceMockup />

      {/* Indicateur de scroll */}
      <ScrollIndicator />
    </section>
  )
}

// ============================================================
// FEATURES
// ============================================================

const features = [
  {
    icon: Box,
    label: 'STL Import',
    desc: 'Drag & drop single parts or full assemblies. Supports world-space and local-space STL coordinates.',
  },
  {
    icon: Move3d,
    label: 'Exploded View',
    desc: 'Manual XYZ positioning per part with transform handles. Build your own exploded view, not an algorithm.',
  },
  {
    icon: Network,
    label: 'Neighborhood',
    desc: 'Click any part to instantly visualize all connected components and their hierarchy.',
  },
  {
    icon: Scan,
    label: 'X-Ray / Layer Peeling',
    desc: 'Peel through layers to inspect inner components without dismantling the assembly.',
  },
  {
    icon: FileCode,
    label: 'URL & PDF Links',
    desc: 'Attach documentation, datasheets, or web links directly to any part.',
  },
  {
    icon: Layers,
    label: 'Iframe Export',
    desc: 'Embed your interactive 3D assembly anywhere with a single line of HTML.',
  },
]

function Features() {
  return (
    <section
      id="features"
      style={{
        background: '#1a1a1c',
        padding: '120px 12%',
      }}
    >
      <div style={{ marginBottom: '64px' }}>
        <div
          style={{
            display: 'inline-flex',
            padding: '5px 12px',
            background: 'rgba(242,101,34,0.1)',
            border: '1px solid rgba(242,101,34,0.25)',
            borderRadius: '20px',
            marginBottom: '20px',
          }}
        >
          <span
            style={{
              color: '#F26522',
              fontSize: '11px',
              fontFamily: 'Geist Mono, monospace',
              letterSpacing: '1px',
            }}
          >
            FEATURES
          </span>
        </div>
        <h2
          style={{
            color: '#ffffff',
            fontFamily: 'Space Grotesk',
            fontWeight: 700,
            fontSize: '48px',
            letterSpacing: '-1px',
            margin: 0,
          }}
        >
          Everything you need
          <br />
          to navigate complexity.
        </h2>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gap: '24px',
        }}
      >
        {features.map(({ icon: Icon, label, desc }) => (
          <div
            key={label}
            style={{
              padding: '32px',
              background: '#141416',
              borderRadius: '12px',
              border: '1px solid rgba(255,255,255,0.07)',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
            }}
          >
            <div
              style={{
                width: '40px',
                height: '40px',
                background: 'rgba(242,101,34,0.1)',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Icon size={20} style={{ color: '#F26522' }} />
            </div>
            <div
              style={{
                color: '#ffffff',
                fontFamily: 'Space Grotesk',
                fontWeight: 700,
                fontSize: '16px',
              }}
            >
              {label}
            </div>
            <div
              style={{
                color: 'rgba(255,255,255,0.4)',
                fontFamily: 'Space Grotesk',
                fontSize: '14px',
                lineHeight: 1.6,
              }}
            >
              {desc}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

// ============================================================
// HOW IT WORKS
// ============================================================

const steps = [
  {
    num: '01',
    title: 'Import your STL',
    desc: 'Drop a single STL or a full assembly folder with an assembly.json config. Spaxe detects the format automatically.',
  },
  {
    num: '02',
    title: 'Explore in 3D',
    desc: 'Rotate, zoom, and pan your assembly. Click any part to select it and see its position in the hierarchy.',
  },
  {
    num: '03',
    title: 'Build your view',
    desc: 'Use transform handles to manually position parts and build your own exploded view. Attach docs and links to parts.',
  },
  {
    num: '04',
    title: 'Share or embed',
    desc: 'Export your assembly as an embeddable iframe or share a direct URL with your team.',
  },
]

function HowItWorks() {
  return (
    <section
      id="how-it-works"
      style={{
        background: '#141416',
        padding: '120px 12%',
      }}
    >
      <div style={{ marginBottom: '64px' }}>
        <div
          style={{
            display: 'inline-flex',
            padding: '5px 12px',
            background: 'rgba(242,101,34,0.1)',
            border: '1px solid rgba(242,101,34,0.25)',
            borderRadius: '20px',
            marginBottom: '20px',
          }}
        >
          <span
            style={{
              color: '#F26522',
              fontSize: '11px',
              fontFamily: 'Geist Mono, monospace',
              letterSpacing: '1px',
            }}
          >
            HOW IT WORKS
          </span>
        </div>
        <h2
          style={{
            color: '#ffffff',
            fontFamily: 'Space Grotesk',
            fontWeight: 700,
            fontSize: '48px',
            letterSpacing: '-1px',
            margin: 0,
          }}
        >
          From file to interactive
          <br />
          assembly in seconds.
        </h2>
      </div>

      <div
        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}
      >
        {steps.map(({ num, title, desc }) => (
          <div
            key={num}
            style={{
              display: 'flex',
              gap: '24px',
              padding: '32px',
              background: '#1a1a1c',
              borderRadius: '12px',
              border: '1px solid rgba(255,255,255,0.07)',
            }}
          >
            <div
              style={{
                color: '#F26522',
                fontFamily: 'Geist Mono, monospace',
                fontSize: '32px',
                fontWeight: 700,
                opacity: 0.4,
                flexShrink: 0,
                lineHeight: 1,
              }}
            >
              {num}
            </div>
            <div
              style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}
            >
              <div
                style={{
                  color: '#ffffff',
                  fontFamily: 'Space Grotesk',
                  fontWeight: 700,
                  fontSize: '18px',
                }}
              >
                {title}
              </div>
              <div
                style={{
                  color: 'rgba(255,255,255,0.4)',
                  fontFamily: 'Space Grotesk',
                  fontSize: '14px',
                  lineHeight: 1.6,
                }}
              >
                {desc}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

// ============================================================
// CTA BANNER
// ============================================================

function CTABanner() {
  return (
    <section
      style={{
        background: '#1a1a1c',
        padding: '100px 12%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      <div>
        <h2
          style={{
            color: '#ffffff',
            fontFamily: 'Space Grotesk',
            fontWeight: 700,
            fontSize: '42px',
            letterSpacing: '-1px',
            margin: '0 0 12px 0',
          }}
        >
          Ready to navigate
          <br />
          your assembly?
        </h2>
        <p
          style={{
            color: 'rgba(255,255,255,0.4)',
            fontFamily: 'Space Grotesk',
            fontSize: '16px',
            margin: 0,
          }}
        >
          No account required. Load the demo and explore in seconds.
        </p>
      </div>
      <Link href="/viewer?demo=robot-atos">
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            padding: '16px 36px',
            background: '#F26522',
            borderRadius: '8px',
            color: '#ffffff',
            fontFamily: 'Space Grotesk',
            fontWeight: 700,
            fontSize: '16px',
            cursor: 'pointer',
            whiteSpace: 'nowrap',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = '#FF8C42')}
          onMouseLeave={(e) => (e.currentTarget.style.background = '#F26522')}
        >
          Try Demo <ArrowRight size={18} />
        </div>
      </Link>
    </section>
  )
}

// ============================================================
// FOOTER
// ============================================================

function Footer() {
  return (
    <footer
      style={{
        background: '#141416',
        padding: '64px 12% 40px',
        borderTop: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '48px',
        }}
      >
        {/* Brand */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            maxWidth: '280px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span
              style={{
                color: '#ffffff',
                fontFamily: 'Space Grotesk',
                fontWeight: 700,
                fontSize: '20px',
                letterSpacing: '4px',
              }}
            >
              SP
            </span>
            <span
              style={{
                color: '#F26522',
                fontSize: '18px',
                letterSpacing: '4px',
              }}
            >
              ▲
            </span>
            <span
              style={{
                color: '#ffffff',
                fontFamily: 'Space Grotesk',
                fontWeight: 700,
                fontSize: '20px',
                letterSpacing: '4px',
              }}
            >
              XE
            </span>
          </div>
          <p
            style={{
              color: 'rgba(255,255,255,0.35)',
              fontFamily: 'Space Grotesk',
              fontSize: '13px',
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            Interactive 3D navigation for complex assemblies. Built for makers
            and industrial teams.
          </p>
          <a
            href="https://github.com/MatthieuLOBJOIS/spaxe"
            target="_blank"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              color: 'rgba(255,255,255,0.4)',
              fontFamily: 'Space Grotesk',
              fontSize: '13px',
              textDecoration: 'none',
            }}
          >
            <Github size={16} /> GitHub
          </a>
        </div>

        {/* Liens */}
        <div style={{ display: 'flex', gap: '80px' }}>
          <div
            style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
          >
            <div
              style={{
                color: '#ffffff',
                fontFamily: 'Space Grotesk',
                fontWeight: 700,
                fontSize: '13px',
                marginBottom: '4px',
              }}
            >
              Product
            </div>
            {['Commencer', 'Import STL', 'Features', 'How it works'].map(
              (item) => (
                <a
                  key={item}
                  href="/viewer"
                  style={{
                    color: 'rgba(255,255,255,0.4)',
                    fontFamily: 'Space Grotesk',
                    fontSize: '13px',
                    textDecoration: 'none',
                  }}
                >
                  {item}
                </a>
              )
            )}
          </div>
          <div
            style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
          >
            <div
              style={{
                color: '#ffffff',
                fontFamily: 'Space Grotesk',
                fontWeight: 700,
                fontSize: '13px',
                marginBottom: '4px',
              }}
            >
              Stack
            </div>
            {['Next.js 15', 'Three.js', 'React Three Fiber', 'Vercel'].map(
              (item) => (
                <a
                  key={item}
                  href="#"
                  style={{
                    color: 'rgba(255,255,255,0.4)',
                    fontFamily: 'Space Grotesk',
                    fontSize: '13px',
                    textDecoration: 'none',
                  }}
                >
                  {item}
                </a>
              )
            )}
          </div>
          <div
            style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
          >
            <div
              style={{
                color: '#ffffff',
                fontFamily: 'Space Grotesk',
                fontWeight: 700,
                fontSize: '13px',
                marginBottom: '4px',
              }}
            >
              Legal
            </div>
            {['All rights reserved'].map((item) => (
              <a
                key={item}
                href="#"
                style={{
                  color: 'rgba(255,255,255,0.4)',
                  fontFamily: 'Space Grotesk',
                  fontSize: '13px',
                  textDecoration: 'none',
                }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingTop: '24px',
          borderTop: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        <span
          style={{
            color: 'rgba(255,255,255,0.2)',
            fontFamily: 'Geist Mono, monospace',
            fontSize: '11px',
            letterSpacing: '1px',
          }}
        >
          © 2025 SPAXE — ALL RIGHTS RESERVED
        </span>
        <span
          style={{
            color: 'rgba(255,255,255,0.2)',
            fontFamily: 'Geist Mono, monospace',
            fontSize: '11px',
            letterSpacing: '1px',
          }}
        >
          V0.1 · BUILT WITH NEXT.JS + THREE.JS
        </span>
      </div>
    </footer>
  )
}

// ============================================================
// PAGE
// ============================================================

export default function Home() {
  return (
    <div style={{ background: '#141416' }}>
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <CTABanner />
      <Footer />
    </div>
  )
}
