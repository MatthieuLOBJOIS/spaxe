'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { CtaButton } from '@/components/ui/CtaButton'
import MobileMenu from './MobileMenu'

export default function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        aria-label="Toggle menu"
        onClick={() => setOpen(!open)}
        className="ml-auto md:hidden"
      >
        <CtaButton variant="ghost">
          {open ? <X size={22} /> : <Menu size={22} />}
        </CtaButton>
      </button>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  )
}
