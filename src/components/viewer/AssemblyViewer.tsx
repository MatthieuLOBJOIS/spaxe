import { Part } from '@/types/assembly'
import PartMesh from '@/components/viewer/PartMesh'
import { useAssemblyCentroid } from '@/hooks/useAssemblyCentroid'

interface AssemblyViewerProps {
  parts: Part[]
  basePath: string
}

export default function AssemblyViewer({
  parts,
  basePath,
}: AssemblyViewerProps) {
  useAssemblyCentroid()

  return (
    <group>
      {parts.map((part) => (
        <PartMesh key={part.file} part={part} basePath={basePath} />
      ))}
    </group>
  )
}
