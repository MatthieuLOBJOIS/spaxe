import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface ExternalLinkProps {
  href: string
  children: ReactNode
  className?: string
  onClick?: () => void
}

/**
 * ExternalLink component
 *
 * This component renders a link that opens in a new tab.
 * It uses the `href` prop to specify the URL and the `onClick` prop for additional actions.
 *
 * @param {ExternalLinkProps} props - The properties for the ExternalLink component.
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
