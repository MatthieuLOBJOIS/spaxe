'use client'

import { Box, Layers, Network, FileCode, Move3d, Scan } from 'lucide-react'

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

export default function Features() {
  return (
    <section
      id="features"
      style={{ background: '#1a1a1c', padding: '120px 12%' }}
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
