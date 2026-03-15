"use client";

import { useLoader } from "@react-three/fiber";
import { STLLoader } from "three-stdlib";
import { Part } from "@/types/assembly";
import { getPartColor, getSTLUrl, hasTransforms } from "@/lib/assemblyLoader";

interface PartMeshProps {
  part: Part;
  basePath: string;
}

// Composant pour afficher une seule pièce STL
function PartMesh({ part, basePath }: PartMeshProps) {
  const url = getSTLUrl(basePath, part.file);
  const geometry = useLoader(STLLoader, url);
  const color = getPartColor(part);

  const position = hasTransforms(part) ? part.position : [0, 0, 0];
  const rotation = hasTransforms(part) ? part.rotation : [0, 0, 0];

  return (
    <mesh
      geometry={geometry}
      position={position as [number, number, number]}
      rotation={rotation as [number, number, number]}
    >
      <meshStandardMaterial color={color} roughness={0.6} metalness={0.2} />
    </mesh>
  );
}

interface AssemblyViewerProps {
  parts: Part[];
  basePath: string;
}

// Composant principal — toutes les pièces dans un seul group
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
  );
}
