'use client'

import Link from 'next/link'
import { INTERNAL_LINKS, NAV_LINKS } from '@/config/links'
import ExternalLink from '@/components/ui/ExternalLink'

const navLinkStyle = {
  color: 'rgba(255,255,255,0.55)',
  fontFamily: 'Space Grotesk, sans-serif',
  fontWeight: 400,
  fontSize: '14px',
  textDecoration: 'none',
}

export default function Navbar() {
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
      <Link
        href={INTERNAL_LINKS.home.href}
        style={{
          display: 'flex',
          alignItems: 'center',
          textDecoration: 'none',
        }}
      >
        <span
          style={{
            color: '#ffffff',
            fontFamily: 'Space Grotesk, sans-serif',
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
            fontFamily: 'Space Grotesk, sans-serif',
            fontWeight: 700,
            fontSize: '20px',
            letterSpacing: '4px',
          }}
        >
          XE
        </span>
      </Link>

      {/* Liens */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
        {NAV_LINKS.map(({ href, label }) => {
          const isExternal = href.startsWith('http')
          return isExternal ? (
            <ExternalLink key={label} href={href} style={navLinkStyle}>
              {label}
            </ExternalLink>
          ) : (
            <Link key={label} href={href} style={navLinkStyle}>
              {label}
            </Link>
          )
        })}
      </div>

      {/* CTA */}
      <Link
        href={INTERNAL_LINKS.viewer.href}
        style={{ textDecoration: 'none' }}
      >
        <div
          style={{
            padding: '9px 22px',
            background: '#F26522',
            borderRadius: '8px',
            color: '#ffffff',
            fontFamily: 'Space Grotesk, sans-serif',
            fontWeight: 700,
            fontSize: '14px',
            cursor: 'pointer',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = '#FF8C42')}
          onMouseLeave={(e) => (e.currentTarget.style.background = '#F26522')}
        >
          {INTERNAL_LINKS.viewer.label}
        </div>
      </Link>
    </nav>
  )
}
