import { useMemo } from 'react'
import { useExplodedStore } from '@/store/explodedStore'
import type { Vec3 } from '@/types/viewer'

// Calcule le vecteur de déplacement d'une pièce pendant l'explosion.
// La direction est déterminée par le vecteur centroïde global → centroïde pièce,
// scalé par le facteur d'explosion et filtré selon l'axe sélectionné.

export function useExplosionOffset(file: string): Vec3 {
  const explosionFactor = useExplodedStore((s) => s.explosionFactor)
  const explosionAxis = useExplodedStore((s) => s.explosionAxis)
  const assemblyCentroid = useExplodedStore((s) => s.assemblyCentroid)
  const partCentroid = useExplodedStore((s) => s.partCentroids[file])

  return useMemo<Vec3>(() => {
    if (!assemblyCentroid || !partCentroid || explosionFactor === 0) {
      return [0, 0, 0]
    }

    const dx = partCentroid[0] - assemblyCentroid[0]
    const dy = partCentroid[1] - assemblyCentroid[1]
    const dz = partCentroid[2] - assemblyCentroid[2]

    const scale = (explosionFactor / 100) * 2

    return [
      explosionAxis === 'y' || explosionAxis === 'z' ? 0 : dx * scale,
      explosionAxis === 'x' || explosionAxis === 'z' ? 0 : dy * scale,
      explosionAxis === 'x' || explosionAxis === 'y' ? 0 : dz * scale,
    ]
  }, [assemblyCentroid, partCentroid, explosionFactor, explosionAxis])
}
