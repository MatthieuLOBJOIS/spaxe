'use client'

import dynamic from 'next/dynamic'
import Link from 'next/link'
import { Box, Layers, Network, FileCode } from 'lucide-react'

const SceneCanvas = dynamic(() => import('@/components/viewer/SceneCanvas'), {
  ssr: false,
})

const features = [
  { icon: Box, label: 'STL Import', desc: 'Drag & drop your assemblies' },
  { icon: Layers, label: 'Exploded View', desc: 'Manual XYZ positioning per part' },
  { icon: Network, label: 'Neighborhood', desc: 'Visualize connected parts' },
  { icon: FileCode, label: 'Embed', desc: 'Export as iframe anywhere' },
]

export default function Home() {
  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      background: '#141416',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
    }}>

      {/* Navbar */}
      <nav style={{
        height: '60px',
        flexShrink: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 48px',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        zIndex: 20,
        position: 'relative',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1px' }}>
          <span style={{ color: '#ffffff', fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '20px', letterSpacing: '4px' }}>SP</span>
          <span style={{ color: '#F26522', fontSize: '18px', lineHeight: 1 }}>▲</span>
          <span style={{ color: '#ffffff', fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '20px', letterSpacing: '4px' }}>XE</span>
        </div>
        <div style={{
          padding: '5px 12px',
          border: '1px solid rgba(255,255,255,0.12)',
          borderRadius: '20px',
          color: 'rgba(255,255,255,0.35)',
          fontSize: '11px',
          fontFamily: 'Geist Mono, monospace',
          letterSpacing: '1px',
        }}>
          ASSEMBLY VIEWER · V0.1
        </div>
      </nav>

      {/* Hero */}
      <div style={{
        flex: 1,
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
      }}>

        {/* Viewer 3D en arrière-plan */}
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          zIndex: 0,
        }}>
          <SceneCanvas interactive={false} />
        </div>

        {/* Texte — centré verticalement, calé à gauche */}
        <div style={{
          position: 'relative',
          zIndex: 10,
          marginLeft: '10%',
          width: '440px',
          display: 'flex',
          flexDirection: 'column',
          gap: '28px',
        }}>

          <h1 style={{
            color: '#ffffff',
            fontFamily: 'Space Grotesk',
            fontWeight: 700,
            fontSize: '62px',
            lineHeight: 1.05,
            letterSpacing: '-1px',
            margin: 0,
          }}>
            Navigate<br />complexity.<br />
            <span style={{ color: '#F26522' }}>In 3D.</span>
          </h1>

          <p style={{
            color: 'rgba(255,255,255,0.45)',
            fontFamily: 'Space Grotesk',
            fontSize: '17px',
            lineHeight: 1.65,
            margin: 0,
          }}>
            Interactive 3D navigation for complex assemblies.
            Built for makers and industrial teams.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
            {features.map(({ icon: Icon, label, desc }) => (
              <div key={label} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <Icon size={16} style={{ color: '#F26522', marginTop: '2px', flexShrink: 0 }} />
                <div>
                  <div style={{ color: '#ffffff', fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '13px' }}>{label}</div>
                  <div style={{ color: 'rgba(255,255,255,0.35)', fontFamily: 'Space Grotesk', fontSize: '12px' }}>{desc}</div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '12px' }}>
            <Link href="/viewer?demo=robot-atos">
              <div
                style={{
                  padding: '13px 28px',
                  background: '#F26522',
                  borderRadius: '8px',
                  color: '#ffffff',
                  fontFamily: 'Space Grotesk',
                  fontWeight: 700,
                  fontSize: '15px',
                  cursor: 'pointer',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = '#FF8C42')}
                onMouseLeave={e => (e.currentTarget.style.background = '#F26522')}
              >
                Try Demo
              </div>
            </Link>
            <div style={{
              padding: '13px 28px',
              background: 'transparent',
              borderRadius: '8px',
              border: '1px solid rgba(255,255,255,0.15)',
              color: 'rgba(255,255,255,0.25)',
              fontFamily: 'Space Grotesk',
              fontWeight: 700,
              fontSize: '15px',
              cursor: 'not-allowed',
            }}>
              Import STL
            </div>
          </div>

        </div>

        {/* Triangle décoratif bas droite */}
        <svg style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          zIndex: 1,
          opacity: 0.12,
        }} width="400" height="400" viewBox="0 0 400 400">
          <polygon points="400,400 0,400 400,0" fill="none" stroke="#F26522" strokeWidth="1.5" />
          <polygon points="400,400 100,400 400,100" fill="none" stroke="#F26522" strokeWidth="1" />
          <polygon points="400,400 200,400 400,200" fill="none" stroke="#F26522" strokeWidth="0.8" />
        </svg>

      </div>

      {/* Footer */}
      <div style={{
        height: '48px',
        flexShrink: 0,
        display: 'flex',
        alignItems: 'center',
        padding: '0 48px',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        position: 'relative',
        zIndex: 10,
      }}>
        <span style={{ color: 'rgba(255,255,255,0.18)', fontFamily: 'Geist Mono, monospace', fontSize: '11px', letterSpacing: '1px' }}>
          © 2025 SPAXE — ALL RIGHTS RESERVED
        </span>
      </div>

    </div>
  )
}