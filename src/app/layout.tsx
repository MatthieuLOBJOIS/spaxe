import type { Metadata } from 'next'
import './globals.css'
import { PropsWithChildren } from 'react'
import { TooltipProvider } from '@/components/ui/tooltip'

export const metadata: Metadata = {
  title: 'Spaxe — Interactive 3D Assembly Viewer',
  description:
    'Navigate complexity in 3D. Interactive assembly viewer for makers and industrial teams.',
  icons: {
    icon: '/favicon.svg',
  },
}

// Root layout — defines shared HTML structure, metadata, and global styles
export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body>
        <TooltipProvider>{children}</TooltipProvider>
      </body>
    </html>
  )
}
