'use client'

import NavLink from './NavLink'

interface MobileMenuProps {
  open: boolean
  onClose: () => void
}

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  if (!open) return null

  return (
    <div className="fixed inset-x-0 top-16 z-40 border-b border-border bg-bg/95 backdrop-blur-md md:hidden">
      <div className="flex flex-col" onClick={onClose}>
        <NavLink className="px-6 py-4 text-base text-muted hover:bg-surface-hover hover:text-fg transition-colors border-b border-border" />
      </div>
    </div>
  )
}
