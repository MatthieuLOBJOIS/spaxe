import { useMemo } from 'react'
import { useLoader } from '@react-three/fiber'
import { STLLoader } from 'three-stdlib'
import * as THREE from 'three'

import { getSTLUrl } from '@/lib/assemblyLoader'

// Charge la géométrie STL d'une pièce et la recentre sur son centre géométrique.
// Retourne la géométrie recentrée et le vecteur de décalage appliqué.

export function usePartGeometry(basePath: string, file: string) {
  const url = getSTLUrl(basePath, file)
  const geometry = useLoader(STLLoader, url)

  return useMemo(() => {
    const clone = geometry.clone()
    clone.computeBoundingBox()
    const offset = new THREE.Vector3()
    clone.boundingBox!.getCenter(offset)
    clone.center()
    return { centeredGeometry: clone, geometryOffset: offset }
  }, [geometry])
}
