'use client'

import Link from 'next/link'
import { Github } from 'lucide-react'
import {
  INTERNAL_LINKS,
  EXTERNAL_LINKS,
  FOOTER_PRODUCT_LINKS,
  FOOTER_STACK_LINKS,
} from '@/config/links'
import ExternalLink from '@/components/ui/ExternalLink'

const linkClass =
  'text-white/40 text-[13px] no-underline hover:text-white transition-colors duration-150'
const titleClass = 'text-white font-bold text-[13px]'
const columnClass = 'flex flex-col gap-4'

export default function Footer() {
  return (
    <footer className="bg-[#141416] px-[12%] pt-16 pb-10 border-t border-white/[0.06]">
      <div className="flex justify-between mb-12">
        {/* Brand */}
        <div className="flex flex-col gap-4 max-w-[280px]">
          <Link
            href={INTERNAL_LINKS.home.href}
            className="flex items-center no-underline"
          >
            <span className="text-white font-bold text-lg tracking-[4px]">
              SP
            </span>
            <span className="text-[#F26522] text-base tracking-[4px]">▲</span>
            <span className="text-white font-bold text-lg tracking-[4px]">
              XE
            </span>
          </Link>
          <p className="text-white/35 text-[13px] leading-relaxed m-0">
            Interactive 3D navigation for complex assemblies. Built for makers
            and industrial teams.
          </p>
          <ExternalLink
            href={EXTERNAL_LINKS.github.href}
            className={`${linkClass} flex items-center gap-2`}
          >
            <Github size={16} />
            {EXTERNAL_LINKS.github.label}
          </ExternalLink>
        </div>

        {/* Liens */}
        <div className="flex gap-20">
          {/* Product */}
          <div className={columnClass}>
            <span className={titleClass}>Product</span>
            {FOOTER_PRODUCT_LINKS.map(({ href, label }) => (
              <Link key={label} href={href} className={linkClass}>
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
      <div className="flex items-center justify-between pt-6 border-t border-white/[0.06]">
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
