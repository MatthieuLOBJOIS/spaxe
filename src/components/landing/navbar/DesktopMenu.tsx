import NavLink from './NavLink'
import { InternalLink } from '@/components/ui/InternalLink'
import { INTERNAL_LINKS } from '@/config/global'

export default function DesktopMenu() {
  return (
    <>
      <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
        <NavLink />
      </div>

      <div className="ml-auto hidden md:block">
        <InternalLink
          href={INTERNAL_LINKS.viewer.href}
          variant="primary"
          className="px-5 py-2 text-sm"
        >
          {INTERNAL_LINKS.viewer.label}
        </InternalLink>
      </div>
    </>
  )
}
