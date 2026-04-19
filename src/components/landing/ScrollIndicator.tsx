'use client'

import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

export default function ScrollIndicator() {
  const [visible, setVisible] = useState(true)

  // browser-only scroll listener — useEffect exception
  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY < 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className={cn(
        'absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 pointer-events-none transition-opacity duration-slow',
        visible ? 'opacity-100' : 'opacity-0'
      )}
    >
      <span className="text-fg/50 font-mono text-2xs animate-pulse tracking-wide">
        SCROLL
      </span>
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        className="animate-bounce"
      >
        <path
          d="M10 4 L10 16 M4 10 L10 16 L16 10"
          stroke="var(--color-primary)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  )
}
