import { ReactNode } from 'react'

type PropsFooterColumn = {
  title: string
  children: ReactNode
}

export default function FooterColumn({ title, children }: PropsFooterColumn) {
  return (
    <div className="flex flex-col gap-4">
      <span className="text-foreground font-semibold text-[13px]">{title}</span>
      {children}
    </div>
  )
}
