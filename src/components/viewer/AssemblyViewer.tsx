import { Part } from '@/types/assembly'
import PartMesh from './PartMesh'

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
