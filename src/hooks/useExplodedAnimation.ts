'use client'

import { useEffect, useRef } from 'react'

const SPEED = 0.5

interface UseExplodedAnimationProps {
  playing: boolean
  directionRef: React.RefObject<'forward' | 'backward'>
  onTick: (updater: (prev: number) => number) => void
  onEnd: () => void
}

export function useExplodedAnimation({
  playing,
  directionRef,
  onTick,
  onEnd,
}: UseExplodedAnimationProps) {
  const animRef = useRef<number | null>(null)
  const onTickRef = useRef(onTick)
  const onEndRef = useRef(onEnd)

  // Garde les refs à jour sans re-déclencher l'effet
  useEffect(() => {
    onTickRef.current = onTick
    onEndRef.current = onEnd
  })

  useEffect(() => {
    if (!playing) {
      if (animRef.current) cancelAnimationFrame(animRef.current)
      return
    }

    const animate = () => {
      onTickRef.current((prev) => {
        const next =
          prev + (directionRef.current === 'forward' ? SPEED : -SPEED)

        if (next >= 100) {
          onEndRef.current()
          return 100
        }
        if (next <= 0) {
          onEndRef.current()
          return 0
        }

        return next
      })

      animRef.current = requestAnimationFrame(animate)
    }

    animRef.current = requestAnimationFrame(animate)
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current)
    }
  }, [playing, directionRef])
}
