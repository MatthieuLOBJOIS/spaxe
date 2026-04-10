'use client'

import { NAV_LINKS } from '@/config/landing/links'
import NavLink from './NavLink'

type MobileMenuProps = {
  open: boolean
  onClose: () => void
}

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  if (!open) return null

  return (
    <div className="fixed inset-x-0 top-16 z-40 border-b border-border bg-background/95 backdrop-blur-md md:hidden">
      <div className="flex flex-col">
        {NAV_LINKS.map(({ href, label }) => (
          <NavLink
            key={label}
            href={href}
            label={label}
            onClick={onClose}
            className="px-6 py-4 text-base text-muted-foreground hover:bg-accent hover:text-foreground transition-colors border-b border-border"
          />
        ))}
      </div>
    </div>
  )
}
