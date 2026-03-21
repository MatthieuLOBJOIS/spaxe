'use client'

import Link from 'next/link'
import {
  INTERNAL_LINKS,
  EXTERNAL_LINKS,
  FOOTER_PRODUCT_LINKS,
  FOOTER_STACK_LINKS,
} from '@/config/links'
import ExternalLink from '@/components/ui/ExternalLink'

const linkStyle = {
  color: 'rgba(255,255,255,0.4)',
  fontFamily: 'Space Grotesk, sans-serif',
  fontSize: '13px',
  textDecoration: 'none',
}

const sectionTitleStyle = {
  color: '#ffffff',
  fontFamily: 'Space Grotesk, sans-serif',
  fontWeight: 700,
  fontSize: '13px',
}

const columnStyle = {
  display: 'flex',
  flexDirection: 'column' as const,
  gap: '16px',
}

export default function Footer() {
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
        <div style={{ ...columnStyle, maxWidth: '280px' }}>
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
                fontSize: '18px',
                letterSpacing: '4px',
              }}
            >
              SP
            </span>
            <span
              style={{
                color: '#F26522',
                fontSize: '16px',
                letterSpacing: '4px',
              }}
            >
              ▲
            </span>
            <span
              style={{
                color: '#ffffff',
                fontFamily: 'Space Grotesk, sans-serif',
                fontWeight: 700,
                fontSize: '18px',
                letterSpacing: '4px',
              }}
            >
              XE
            </span>
          </Link>
          <p
            style={{
              color: 'rgba(255,255,255,0.35)',
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: '13px',
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            Interactive 3D navigation for complex assemblies. Built for makers
            and industrial teams.
          </p>
          <ExternalLink href={EXTERNAL_LINKS.github.href} style={linkStyle}>
            {EXTERNAL_LINKS.github.label}
          </ExternalLink>
        </div>

        {/* Liens */}
        <div style={{ display: 'flex', gap: '80px' }}>
          {/* Product */}
          <div style={columnStyle}>
            <span style={sectionTitleStyle}>Product</span>
            {FOOTER_PRODUCT_LINKS.map(({ href, label }) => (
              <Link key={label} href={href} style={linkStyle}>
                {label}
              </Link>
            ))}
          </div>

          {/* Stack */}
          <div style={columnStyle}>
            <span style={sectionTitleStyle}>Stack</span>
            {FOOTER_STACK_LINKS.map(({ href, label }) => (
              <ExternalLink key={label} href={href} style={linkStyle}>
                {label}
              </ExternalLink>
            ))}
          </div>

          {/* Legal */}
          <div style={columnStyle}>
            <span style={sectionTitleStyle}>Legal</span>
            <Link href={INTERNAL_LINKS.home.href} style={linkStyle}>
              All rights reserved
            </Link>
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
          © 2026 SPAXE — ALL RIGHTS RESERVED
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
