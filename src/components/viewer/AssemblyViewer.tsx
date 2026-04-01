'use client'

import { useLoader, ThreeEvent } from '@react-three/fiber'
import { STLLoader } from 'three-stdlib'
import { Outlines } from '@react-three/drei'

import { Part } from '@/types/assembly'
import { getPartColor, getSTLUrl, hasTransforms } from '@/lib/assemblyLoader'
import { useAssemblyStore } from '@/store/assemblyStore'

interface PartMeshProps {
  part: Part
  basePath: string
}

function PartMesh({ part, basePath }: PartMeshProps) {
  const url = getSTLUrl(basePath, part.file)
  const geometry = useLoader(STLLoader, url)

  const baseColor = getPartColor(part)

  const selectedParts = useAssemblyStore((s) => s.selectedParts)
  const setSelectedPart = useAssemblyStore((s) => s.setSelectedPart)

  const isVisible = useAssemblyStore((s) => s.visibleParts[part.file] ?? true)

  const finalColor = useAssemblyStore(
    (s) => s.partColors[part.file] ?? baseColor
  )

  const finalOpacity = useAssemblyStore((s) => s.partOpacity[part.file] ?? 1)

  if (!isVisible) return null

  const isSelected = selectedParts.includes(part.file)

  const position = hasTransforms(part) ? part.position : [0, 0, 0]
  const rotation = hasTransforms(part) ? part.rotation : [0, 0, 0]

  const handleClick = (e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation()

    // ignore drag
    if (e.delta > 2) return

    setSelectedPart(part.file, e.ctrlKey || e.metaKey)
  }

  return (
    <mesh
      geometry={geometry}
      position={position as [number, number, number]}
      rotation={rotation as [number, number, number]}
      onClick={handleClick}
      renderOrder={finalOpacity < 1 ? 1 : 0}
    >
      <meshStandardMaterial
        key={finalOpacity < 1 ? 'transparent' : 'opaque'}
        color={finalColor}
        roughness={0.6}
        metalness={0.2}
        transparent={finalOpacity < 1}
        opacity={finalOpacity}
        depthWrite={finalOpacity >= 1}
      />

      {isSelected && <Outlines thickness={3} color="#22d3ee" />}
    </mesh>
  )
}

interface AssemblyViewerProps {
  parts: Part[]
  basePath: string
}

export default function AssemblyViewer({
  parts,
  basePath,
}: AssemblyViewerProps) {
  return (
    <group>
      {parts.map((part) => (
        <PartMesh key={part.file} part={part} basePath={basePath} />
      ))}
    </group>
  )
}
