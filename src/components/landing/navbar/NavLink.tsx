'use client'

import Link from 'next/link'
import { ExternalLink } from '@/components/ui/ExternalLink'
import type { NavLink } from '@/types/global'

interface NavLinkProps extends NavLink {
  onClick?: () => void
  className?: string
}

export default function NavLink({
  href,
  label,
  onClick,
  className,
}: NavLinkProps) {
  const isExternal = href.startsWith('http')

  const baseClass = 'text-sm text-muted hover:text-fg transition-colors'
  const finalClass = className ?? baseClass

  if (isExternal) {
    return (
      <ExternalLink href={href} onClick={onClick} className={finalClass}>
        {label}
      </ExternalLink>
    )
  }

  return (
    <Link href={href} onClick={onClick} className={finalClass}>
      {label}
    </Link>
  )
}
