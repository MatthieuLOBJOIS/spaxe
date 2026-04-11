'use client'

import Link from 'next/link'
import ExternalLink from '@/components/ui/ExternalLink'

type NavLinkProps = {
  href: string
  label: string
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

  const baseClass = 'text-sm text-muted-foreground hover:text-foreground transition-colors'
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
