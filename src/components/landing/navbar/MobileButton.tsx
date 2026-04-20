'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'

import MobileMenu from './MobileMenu'

export default function MobileButton() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        aria-label="Toggle menu"
        onClick={() => setOpen(!open)}
        className="ml-auto md:hidden p-2 rounded-md text-muted hover:bg-surface-hover hover:text-fg transition-colors"
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  )
}
