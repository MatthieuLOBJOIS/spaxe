import { useEffect } from 'react'
import * as THREE from 'three'
import { useExplodedStore } from '@/store/explodedStore'

// Enregistre le centre géométrique d'une pièce dans le explodedStore
// dès que sa géométrie est chargée.

export function useRegisterPartCentroid(
  file: string,
  geometryOffset: THREE.Vector3
) {
  const setPartCentroid = useExplodedStore((s) => s.setPartCentroid)

  useEffect(() => {
    setPartCentroid(file, [
      geometryOffset.x,
      geometryOffset.y,
      geometryOffset.z,
    ])
  }, [file, geometryOffset, setPartCentroid])
}
