'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function CTABanner() {
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
      <Link href="/viewer">
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
          Commencer <ArrowRight size={18} />
        </div>
      </Link>
    </section>
  )
}
