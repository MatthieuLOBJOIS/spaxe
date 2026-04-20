import Link from 'next/link'

import { Logo } from '@/components/ui/Logo'
import { ExternalLink } from '@/components/ui/ExternalLink'
import { InternalLink } from '@/components/ui/InternalLink'
import FooterColumn from './FooterColumn'
import {
  INTERNAL_LINKS,
  EXTERNAL_LINKS,
  FOOTER_PRODUCT_LINKS,
  FOOTER_STACK_LINKS,
  COPYRIGHT,
  RELEASE,
} from '@/config/global'

export default function Footer() {
  const spanClass = 'text-muted/60 font-mono text-xs tracking-label'
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

          <ExternalLink href={EXTERNAL_LINKS.github.href} variant="link">
            {EXTERNAL_LINKS.github.label}
          </ExternalLink>
        </div>

        {/* ───── Links ───── */}
        <div className="grid grid-cols-3 md:flex gap-4 md:gap-20 justify-items-center md:justify-items-start">
          <FooterColumn title="Product">
            {FOOTER_PRODUCT_LINKS.map((item) => (
              <InternalLink key={item.label} href={item.href} variant="link">
                {item.label}
              </InternalLink>
            ))}
          </FooterColumn>

          <FooterColumn title="Stack">
            {FOOTER_STACK_LINKS.map((item) => (
              <ExternalLink key={item.label} href={item.href} variant="link">
                {item.label}
              </ExternalLink>
            ))}
          </FooterColumn>

          <FooterColumn title="Legal">
            <InternalLink href={INTERNAL_LINKS.home.href} variant="link">
              All rights reserved
            </InternalLink>
          </FooterColumn>
        </div>
      </div>

      {/* ───── Bottom bar ───── */}
      <div className="flex flex-col md:flex-row items-center md:justify-between gap-2 pt-6 border-t border-border ">
        <span className={spanClass}>{COPYRIGHT}</span>

        <span className={spanClass}>
          {RELEASE} · BUILT WITH NEXT.JS + THREE.JS
        </span>
      </div>
    </footer>
  )
}
