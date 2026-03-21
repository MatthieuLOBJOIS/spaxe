import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Spaxe — Interactive 3D Assembly Viewer',
  description:
    'Navigate complexity in 3D. Interactive assembly viewer for makers and industrial teams.',
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
