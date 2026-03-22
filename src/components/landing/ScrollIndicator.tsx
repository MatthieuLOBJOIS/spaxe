'use client'

import { useEffect, useState } from 'react'

export default function ScrollIndicator() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY < 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className={`absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 pointer-events-none transition-opacity duration-400 ${visible ? 'opacity-100' : 'opacity-0'}`}
    >
      <span className="text-white/30 font-mono text-[10px] tracking-[2px]">
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
          stroke="#F26522"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  )
}
