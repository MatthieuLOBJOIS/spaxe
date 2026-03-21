'use client'

import { useState } from 'react'
import { Play, FolderOpen, Sparkles } from 'lucide-react'

interface StartModalProps {
  onSelectDemo: () => void
}

export default function StartModal({ onSelectDemo }: StartModalProps) {
  const [hovered, setHovered] = useState<string | null>(null)

  const options = [
    {
      id: 'demo',
      icon: Play,
      label: 'Try Demo',
      desc: 'Explore a pre-loaded AUBO cobot + ATOS Q scanner assembly',
      available: true,
    },
    {
      id: 'import',
      icon: FolderOpen,
      label: 'Import STL',
      desc: 'Drop your own STL files or assembly folder',
      available: false,
    },
    {
      id: 'ai',
      icon: Sparkles,
      label: 'Generate with AI',
      desc: 'Describe your assembly and let AI generate the 3D model',
      available: false,
    },
  ]

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'rgba(0,0,0,0.6)',
        backdropFilter: 'blur(4px)',
      }}
    >
      <div
        style={{
          width: '480px',
          background: '#1a1a1c',
          borderRadius: '16px',
          border: '1px solid rgba(255,255,255,0.1)',
          overflow: 'hidden',
          boxShadow: '0 40px 80px rgba(0,0,0,0.8)',
        }}
      >
        {/* Header */}
        <div
          style={{
            padding: '32px 32px 24px',
            borderBottom: '1px solid rgba(255,255,255,0.06)',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1px',
              marginBottom: '12px',
            }}
          >
            <span
              style={{
                color: '#fff',
                fontFamily: 'Space Grotesk',
                fontWeight: 700,
                fontSize: '22px',
                letterSpacing: '4px',
              }}
            >
              SP
            </span>
            <span
              style={{
                color: '#F26522',
                fontSize: '20px',
                letterSpacing: '4px',
              }}
            >
              ▲
            </span>
            <span
              style={{
                color: '#fff',
                fontFamily: 'Space Grotesk',
                fontWeight: 700,
                fontSize: '22px',
                letterSpacing: '4px',
              }}
            >
              XE
            </span>
          </div>
          <p
            style={{
              color: 'rgba(255,255,255,0.4)',
              fontFamily: 'Space Grotesk',
              fontSize: '14px',
              margin: 0,
            }}
          >
            Choose how you want to get started.
          </p>
        </div>

        {/* Options */}
        <div style={{ padding: '16px' }}>
          {options.map(({ id, icon: Icon, label, desc, available }) => (
            <div
              key={id}
              onClick={available ? onSelectDemo : undefined}
              onMouseEnter={() => available && setHovered(id)}
              onMouseLeave={() => setHovered(null)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                padding: '16px',
                borderRadius: '10px',
                marginBottom: '8px',
                cursor: available ? 'pointer' : 'not-allowed',
                background:
                  hovered === id
                    ? 'rgba(242,101,34,0.08)'
                    : 'rgba(255,255,255,0.03)',
                border:
                  hovered === id
                    ? '1px solid rgba(242,101,34,0.3)'
                    : '1px solid rgba(255,255,255,0.06)',
                opacity: available ? 1 : 0.4,
                transition: 'all 0.15s ease',
              }}
            >
              {/* Icône */}
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '8px',
                  background:
                    available && hovered === id
                      ? 'rgba(242,101,34,0.15)'
                      : 'rgba(255,255,255,0.06)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <Icon
                  size={18}
                  style={{
                    color: available ? '#F26522' : 'rgba(255,255,255,0.3)',
                  }}
                />
              </div>

              {/* Texte */}
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    marginBottom: '4px',
                  }}
                >
                  <span
                    style={{
                      color: available ? '#ffffff' : 'rgba(255,255,255,0.4)',
                      fontFamily: 'Space Grotesk',
                      fontWeight: 700,
                      fontSize: '14px',
                    }}
                  >
                    {label}
                  </span>
                  {!available && (
                    <span
                      style={{
                        padding: '2px 8px',
                        background: 'rgba(255,255,255,0.06)',
                        borderRadius: '20px',
                        color: 'rgba(255,255,255,0.3)',
                        fontSize: '10px',
                        fontFamily: 'Geist Mono, monospace',
                        letterSpacing: '1px',
                      }}
                    >
                      SOON
                    </span>
                  )}
                </div>
                <span
                  style={{
                    color: 'rgba(255,255,255,0.35)',
                    fontFamily: 'Space Grotesk',
                    fontSize: '12px',
                  }}
                >
                  {desc}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div
          style={{
            padding: '16px 32px',
            borderTop: '1px solid rgba(255,255,255,0.06)',
          }}
        >
          <span
            style={{
              color: 'rgba(255,255,255,0.2)',
              fontFamily: 'Geist Mono, monospace',
              fontSize: '10px',
              letterSpacing: '1px',
            }}
          >
            V0.1 · ASSEMBLY VIEWER
          </span>
        </div>
      </div>
    </div>
  )
}
