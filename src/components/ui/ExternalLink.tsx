import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface ExternalLinkProps {
  href: string
  children: ReactNode
  className?: string
  onClick?: () => void
}

// Link that opens in a new tab.
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
