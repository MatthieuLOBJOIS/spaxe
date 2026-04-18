import type { Metadata } from 'next'
import './globals.css'
import { PropsWithChildren } from 'react'

import { Space_Grotesk, Geist_Mono } from 'next/font/google'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Spaxe — Interactive 3D Assembly Viewer',
  description:
    'Navigate complexity in 3D. Interactive assembly viewer for makers and industrial teams.',
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${geistMono.variable}`}
    >
      <body>{children}</body>
    </html>
  )
}
