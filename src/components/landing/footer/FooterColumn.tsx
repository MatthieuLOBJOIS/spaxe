import { ReactNode } from 'react'

interface FooterColumnProps {
  title: string
  children: ReactNode
}

export default function FooterColumn({ title, children }: FooterColumnProps) {
  return (
    <div className="flex flex-col gap-4">
      <span className="text-foreground font-semibold text-sm">{title}</span>
      {children}
    </div>
  )
}
