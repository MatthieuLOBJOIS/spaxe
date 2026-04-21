// components/ui/InternalLink.tsx
import Link from 'next/link'
import { type ReactNode } from 'react'

import { cn } from '@/lib/utils'
import { LINK_VARIANTS } from '@/config/global'
import type { LinkVariants } from '@/types/global'

interface InternalLinkProps {
  href: string
  children: ReactNode
  variant?: LinkVariants
  className?: string
}

/** Internal navigation link styled as a button. */
export function InternalLink({
  href,
  children,
  variant = 'primary',
  className,
}: InternalLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        'w-fit flex rounded-lg font-medium transition-colors duration-normal',
        LINK_VARIANTS[variant],
        className
      )}
    >
      {children}
    </Link>
  )
}
