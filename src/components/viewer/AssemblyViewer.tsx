'use client'

import { useLoader, ThreeEvent } from '@react-three/fiber'
import { STLLoader } from 'three-stdlib'
import { Part } from '@/types/assembly'
import { getPartColor, getSTLUrl, hasTransforms } from '@/lib/assemblyLoader'
import { useAssemblyStore } from '@/store/assemblyStore'
import { Outlines } from '@react-three/drei'

interface PartMeshProps {
  part: Part
  basePath: string
}

function PartMesh({ part, basePath }: PartMeshProps) {
  const url = getSTLUrl(basePath, part.file)
  const geometry = useLoader(STLLoader, url)
  const color = getPartColor(part)

  const selectedPart = useAssemblyStore((s) => s.selectedPart)
  const setSelectedPart = useAssemblyStore((s) => s.setSelectedPart)
  const isVisible = useAssemblyStore((s) => s.visibleParts[part.file] ?? true)
  const finalColor = useAssemblyStore((s) => s.partColors[part.file] ?? color)
  const finalOpacity = useAssemblyStore((s) => s.partOpacity[part.file] ?? 1)
  const isSelected = selectedPart === part.file

  const position = hasTransforms(part) ? part.position : [0, 0, 0]
  const rotation = hasTransforms(part) ? part.rotation : [0, 0, 0]

  const handleClick = (e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation()
    // Ignore si c'est un drag (delta > 2 pixels)
    if (e.delta > 2) return
    setSelectedPart(isSelected ? null : part.file)
  }
  if (!isVisible) return null
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
      {/* Contour cyan uniquement si sélectionné */}
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
    <group
      onClick={(e) => {
        // Clic dans le vide — désélectionne
        if (e.delta < 2) useAssemblyStore.getState().setSelectedPart(null)
      }}
    >
      {parts.map((part) => (
        <PartMesh key={part.file} part={part} basePath={basePath} />
      ))}
    </group>
  )
}
