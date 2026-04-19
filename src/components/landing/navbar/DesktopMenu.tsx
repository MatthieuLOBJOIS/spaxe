import Link from 'next/link'

import { INTERNAL_LINKS, NAV_LINKS } from '@/config/global'
import { CtaButton } from '@/components/ui/CtaButton'
import NavLink from './NavLink'

export default function DesktopMenu() {
  return (
    <>
      <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
        {NAV_LINKS.map(({ href, label }) => (
          <NavLink key={label} href={href} label={label} />
        ))}
      </div>

      <div className="ml-auto hidden md:block">
        <Link href={INTERNAL_LINKS.viewer.href}>
          <CtaButton className="px-5 py-2 text-sm">
            {INTERNAL_LINKS.viewer.label}
          </CtaButton>
        </Link>
      </div>
    </>
  )
}
