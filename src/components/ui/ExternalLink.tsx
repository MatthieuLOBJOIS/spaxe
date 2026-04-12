import { ReactNode } from 'react'
import cn from '@/lib/utils'

interface ExternalLinkProps {
  href: string
  children: ReactNode
  className?: string
  onClick?: () => void
}

/**
 * Renders a link that opens in a new tab.
 *
 * @param href - The URL to navigate to when the link is clicked.
 * @param children - The content of the link.
 * @param className - Additional CSS classes for styling.
 * @param onClick - Optional callback function triggered on click.
 */
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
