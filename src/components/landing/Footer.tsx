'use client'

import { ReactNode } from 'react'
import Link from 'next/link'
import {
  INTERNAL_LINKS,
  EXTERNAL_LINKS,
  FOOTER_PRODUCT_LINKS,
  FOOTER_STACK_LINKS,
} from '@/config/landing/links'
import ExternalLink from '@/components/ui/ExternalLink'
import Logo from '@/components/ui/Logo'

// ── Styles partagés ──────────────────────────────────────
const linkClass =
  'text-white/40 text-[13px] no-underline hover:text-white transition-colors duration-150'

// ── Sous-composant colonne ───────────────────────────────
function FooterColumn({
  title,
  children,
}: {
  title: string
  children: ReactNode
}) {
  return (
    <div className="flex flex-col gap-4">
      <span className="text-white font-bold text-[13px]">{title}</span>
      {children}
    </div>
  )
}

// ── Footer ───────────────────────────────────────────────
export default function Footer() {
  return (
    <footer className="bg-[#141416] px-6 md:px-[12%] pt-16 pb-10 border-t border-white/6">
      <div className="flex flex-col md:flex-row md:justify-between gap-12 mb-12">
        {/* Brand */}
        <div className="flex flex-col gap-4 md:max-w-70">
          <Link href={INTERNAL_LINKS.home.href} className="no-underline w-fit">
            <Logo size="md" />
          </Link>
          <p className="text-white/35 text-[13px] leading-relaxed m-0">
            Interactive 3D navigation for complex assemblies. Built for makers
            and industrial teams.
          </p>
          <ExternalLink
            href={EXTERNAL_LINKS.github.href}
            className={`${linkClass} flex items-center gap-2`}
          >
            {EXTERNAL_LINKS.github.label}
          </ExternalLink>
        </div>

        {/* Colonnes liens */}
        <div className="grid grid-cols-3 md:flex md:gap-20 gap-8">
          <FooterColumn title="Product">
            {FOOTER_PRODUCT_LINKS.map(({ href, label }) => (
              <Link
                key={label}
                href={href}
                className={`${linkClass} ${label === 'Start' ? 'hidden md:block' : ''}`}
              >
                {label}
              </Link>
            ))}
          </FooterColumn>

          <FooterColumn title="Stack">
            {FOOTER_STACK_LINKS.map(({ href, label }) => (
              <ExternalLink key={label} href={href} className={linkClass}>
                {label}
              </ExternalLink>
            ))}
          </FooterColumn>

          <FooterColumn title="Legal">
            <Link href={INTERNAL_LINKS.home.href} className={linkClass}>
              All rights reserved
            </Link>
          </FooterColumn>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="flex flex-col md:flex-row items-center md:justify-between gap-2 pt-6 border-t border-white/6">
        <span className="text-white/20 font-mono text-[11px] tracking-[1px]">
          © 2026 SPAXE — ALL RIGHTS RESERVED
        </span>
        <span className="text-white/20 font-mono text-[11px] tracking-[1px]">
          V0.1 · BUILT WITH NEXT.JS + THREE.JS
        </span>
      </div>
    </footer>
  )
}
