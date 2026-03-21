'use client'

import dynamic from 'next/dynamic'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import ScrollIndicator from './ScrollIndicator'
import WorkspaceMockup from './WorkspaceMockup'

const SceneCanvas = dynamic(() => import('@/components/viewer/SceneCanvas'), {
  ssr: false,
})

const badgeStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '8px',
  padding: '6px 14px',
  background: 'rgba(242,101,34,0.12)',
  border: '1px solid rgba(242,101,34,0.3)',
  borderRadius: '20px',
  width: 'fit-content',
}

export default function Hero() {
  return (
    <section
      style={{
        minHeight: '100vh',
        paddingTop: '64px',
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
          gap: '28px',
        }}
      >
        <div style={badgeStyle}>
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
            fontFamily: 'Space Grotesk, sans-serif',
            fontWeight: 700,
            fontSize: 'clamp(40px, 8vw, 68px)',
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
            fontFamily: 'Space Grotesk, sans-serif',
            fontSize: 'clamp(15px, 3vw, 18px)',
            lineHeight: 1.7,
            margin: 0,
          }}
        >
          Interactive 3D navigation for complex assemblies. Built for makers and
          industrial teams.
        </p>

        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          {/* Lien interne → Link */}
          <Link href="/viewer" style={{ textDecoration: 'none' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '14px 28px',
                background: '#F26522',
                borderRadius: '8px',
                color: '#ffffff',
                fontFamily: 'Space Grotesk, sans-serif',
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

          {/* Lien externe */}
          <a
            href="https://github.com/MatthieuLOBJOIS/spaxe"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '14px 28px',
              background: 'transparent',
              borderRadius: '8px',
              border: '1px solid rgba(255,255,255,0.2)',
              color: 'rgba(255,255,255,0.7)',
              fontFamily: 'Space Grotesk, sans-serif',
              fontWeight: 700,
              fontSize: '15px',
              cursor: 'pointer',
              textDecoration: 'none',
            }}
          >
            GitHub
          </a>
        </div>
      </div>

      {/* Mockup workspace */}
      <WorkspaceMockup />

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

      <ScrollIndicator />
    </section>
  )
}
