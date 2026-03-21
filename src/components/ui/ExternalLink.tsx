import { ReactNode } from 'react'

interface ExternalLinkProps {
  href: string
  children: ReactNode
  style?: React.CSSProperties
}

export default function ExternalLink({
  href,
  children,
  style,
}: ExternalLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: 'none', ...style }}
    >
      {children}
    </a>
  )
}
