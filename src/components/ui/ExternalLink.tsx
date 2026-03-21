import { ReactNode } from 'react'

interface ExternalLinkProps {
  href: string
  children: ReactNode
  style?: React.CSSProperties
  className?: string
}

export default function ExternalLink({
  href,
  children,
  style,
  className,
}: ExternalLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      style={{ textDecoration: 'none', ...style }}
    >
      {children}
    </a>
  )
}
