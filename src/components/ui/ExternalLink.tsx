// components/ui/ExternalLink.tsx
import { type ReactNode } from 'react'

import { cn } from '@/lib/utils'
import { LINK_VARIANTS } from '@/config/global'
import type { LinkVariants } from '@/types/global'

interface ExternalLinkProps {
  href: string
  children: ReactNode
  variant?: LinkVariants
  className?: string
}

/** External link that opens in a new tab with safe rel attributes. */
export function ExternalLink({
  href,
  children,
  variant = 'primary',
  className,
}: ExternalLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'w-fit flex gap-2 rounded-lg font-medium transition-colors duration-normal',
        LINK_VARIANTS[variant],
        className
      )}
    >
      {children}
    </a>
  )
}
