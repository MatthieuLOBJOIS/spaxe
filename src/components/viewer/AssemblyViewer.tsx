"use client";

import { useLoader, ThreeEvent } from "@react-three/fiber";
import { STLLoader } from "three-stdlib";
import { Part } from "@/types/assembly";
import { getPartColor, getSTLUrl, hasTransforms } from "@/lib/assemblyLoader";
import { useViewerStore } from "@/store/viewerStore";
import { Outlines } from "@react-three/drei";

interface PartMeshProps {
  part: Part;
  basePath: string;
}

function PartMesh({ part, basePath }: PartMeshProps) {
  const url = getSTLUrl(basePath, part.file);
  const geometry = useLoader(STLLoader, url);
  const color = getPartColor(part);

  const { selectedPart, setSelectedPart } = useViewerStore();
  const isSelected = selectedPart === part.file;

  const position = hasTransforms(part) ? part.position : [0, 0, 0];
  const rotation = hasTransforms(part) ? part.rotation : [0, 0, 0];

  const handleClick = (e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation();
    setSelectedPart(isSelected ? null : part.file);
  };

  return (
    <mesh
      geometry={geometry}
      position={position as [number, number, number]}
      rotation={rotation as [number, number, number]}
      onClick={handleClick}
    >
      <meshStandardMaterial color={color} roughness={0.6} metalness={0.2} />
      {/* Contour cyan uniquement si sélectionné */}
      {isSelected && <Outlines thickness={3} color="#22d3ee" />}
    </mesh>
  );
}

interface AssemblyViewerProps {
  parts: Part[];
  basePath: string;
}

export default function AssemblyViewer({
  parts,
  basePath,
}: AssemblyViewerProps) {
  return (
    <group
      onClick={(e) => {
        // Clic dans le vide — désélectionne
        if (e.delta < 2) useViewerStore.getState().setSelectedPart(null);
      }}
    >
      {parts.map((part) => (
        <PartMesh key={part.file} part={part} basePath={basePath} />
      ))}
    </group>
  );
}
