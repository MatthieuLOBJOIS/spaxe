'use client'

import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

interface ExternalLinkProps {
  href: string
  children: ReactNode
  className?: string
  onClick?: () => void
}

/** Anchor tag that always opens in a new tab with safe rel attributes. */
export function ExternalLink({
  href,
  children,
  className,
  onClick,
}: ExternalLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn('no-underline', className)}
      onClick={onClick}
    >
      {children}
    </a>
  )
}
