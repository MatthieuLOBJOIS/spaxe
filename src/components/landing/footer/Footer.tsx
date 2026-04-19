import Link from 'next/link'
import { Logo } from '@/components/ui/Logo'
import { ExternalLink } from '@/components/ui/ExternalLink'

import FooterColumn from './FooterColumn'

import {
  INTERNAL_LINKS,
  EXTERNAL_LINKS,
  FOOTER_PRODUCT_LINKS,
  FOOTER_STACK_LINKS,
} from '@/config/global'

import { copyright, release } from '@/config/global'

const linkClass =
  'text-muted/80 text-sm no-underline hover:text-foreground transition-colors'

const spanClass = 'text-muted/60 font-mono text-xs tracking-label'

export default function Footer() {
  return (
    <footer className="bg-surface px-6 md:px-[12%] pt-16 pb-10 border-t border-border">
      <div className="flex flex-col md:flex-row md:justify-between gap-12 mb-12">
        {/* ───── Brand ───── */}
        <div className="flex flex-col gap-4 md:max-w-72">
          <Link href={INTERNAL_LINKS.home.href} className="w-fit">
            <Logo size="md" />
          </Link>

          <p className="text-muted/60 text-sm leading-relaxed m-0">
            Interactive 3D navigation for complex assemblies. Built for makers
            and industrial teams.
          </p>

          <ExternalLink href={EXTERNAL_LINKS.github.href} className={linkClass}>
            {EXTERNAL_LINKS.github.label}
          </ExternalLink>
        </div>

        {/* ───── Links ───── */}
        <div className="grid grid-cols-3 md:flex md:gap-20 gap-8">
          <FooterColumn title="Product">
            {FOOTER_PRODUCT_LINKS.map((item) => (
              <Link key={item.label} href={item.href} className={linkClass}>
                {item.label}
              </Link>
            ))}
          </FooterColumn>

          <FooterColumn title="Stack">
            {FOOTER_STACK_LINKS.map((item) => (
              <ExternalLink
                key={item.label}
                href={item.href}
                className={linkClass}
              >
                {item.label}
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

      {/* ───── Bottom bar ───── */}
      <div className="flex flex-col md:flex-row items-center md:justify-between gap-2 pt-6 border-t border-border">
        <span className={spanClass}>{copyright}</span>

        <span className={spanClass}>
          {release} · BUILT WITH NEXT.JS + THREE.JS
        </span>
      </div>
    </footer>
  )
}
