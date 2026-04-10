import Link from 'next/link'

import { INTERNAL_LINKS, NAV_LINKS } from '@/config/landing/links'
import NavLink from './NavLink'

export default function DesktopMenu() {
  return (
    <>
      {/* Center links */}
      <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
        {NAV_LINKS.map(({ href, label }) => (
          <NavLink key={label} href={href} label={label} />
        ))}
      </div>

      {/* CTA */}
      <div className="ml-auto hidden md:block">
        <Link href={INTERNAL_LINKS.viewer.href}>
          <div className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">
            {INTERNAL_LINKS.viewer.label}
          </div>
        </Link>
      </div>
    </>
  )
}
