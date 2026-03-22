'use client'

import Link from 'next/link'

import {
  INTERNAL_LINKS,
  EXTERNAL_LINKS,
  FOOTER_PRODUCT_LINKS,
  FOOTER_STACK_LINKS,
} from '@/config/links'

import ExternalLink from '@/components/ui/ExternalLink'
import Logo from '@/components/ui/Logo'

const linkClass =
  'text-white/40 text-[13px] no-underline hover:text-white transition-colors duration-150'
const titleClass = 'text-white font-bold text-[13px]'
const columnClass = 'flex flex-col gap-4'

export default function Footer() {
  return (
    <footer className="bg-[#141416] px-6 md:px-[12%] pt-16 pb-10 border-t border-white/[0.06]">
      <div className="flex flex-col md:flex-row md:justify-between gap-12 mb-12">
        {/* Brand */}
        <div className="flex flex-col gap-4 md:max-w-[280px]">
          <Logo size="md" />
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

        {/* Liens — en dessous sur mobile, à droite sur desktop */}
        <div className="grid grid-cols-3 md:flex md:gap-20 gap-8">
          {/* Product */}
          <div className={columnClass}>
            <span className={titleClass}>Product</span>
            {FOOTER_PRODUCT_LINKS.map(({ href, label }) => (
              <Link
                key={label}
                href={href}
                className={`${linkClass} ${label === 'Start' ? 'hidden md:block' : ''}`}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Stack */}
          <div className={columnClass}>
            <span className={titleClass}>Stack</span>
            {FOOTER_STACK_LINKS.map(({ href, label }) => (
              <ExternalLink key={label} href={href} className={linkClass}>
                {label}
              </ExternalLink>
            ))}
          </div>

          {/* Legal */}
          <div className={columnClass}>
            <span className={titleClass}>Legal</span>
            <Link href={INTERNAL_LINKS.home.href} className={linkClass}>
              All rights reserved
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="flex flex-col md:flex-row items-center md:justify-between gap-2 pt-6 border-t border-white/[0.06]">
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
