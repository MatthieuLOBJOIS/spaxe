'use client'

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

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      style={{ background: '#141416', padding: '120px 12%' }}
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
