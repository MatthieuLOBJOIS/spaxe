import { useEffect } from 'react'
import { useExplodedStore } from '@/store/explodedStore'
import type { Vec3 } from '@/types/viewer'

// Calcule le centre géométrique global de l'assemblage
// à partir des centres individuels de chaque pièce.

export function useAssemblyCentroid() {
  const partCentroids = useExplodedStore((s) => s.partCentroids)
  const setAssemblyCentroid = useExplodedStore((s) => s.setAssemblyCentroid)

  useEffect(() => {
    const values = Object.values(partCentroids)
    if (values.length === 0) return

    const sum = values.reduce<Vec3>(
      (acc, c) => [acc[0] + c[0], acc[1] + c[1], acc[2] + c[2]],
      [0, 0, 0]
    )

    setAssemblyCentroid([
      sum[0] / values.length,
      sum[1] / values.length,
      sum[2] / values.length,
    ])
  }, [partCentroids, setAssemblyCentroid])
}
