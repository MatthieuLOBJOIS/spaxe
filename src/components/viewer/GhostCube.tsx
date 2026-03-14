"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Edges } from "@react-three/drei";
import * as THREE from "three";

export default function GhostCube() {
  const meshRef = useRef<THREE.Mesh>(null);

  // Rotation lente automatique
  useFrame((_, delta) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x += delta * 0.2;
    meshRef.current.rotation.y += delta * 0.3;
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[2, 2, 2]} />
      {/* Face transparente ghost */}
      <meshStandardMaterial
        color="#00d4ff"
        transparent
        opacity={0.05}
        side={THREE.DoubleSide}
      />
      {/* Wireframe cyan */}
      <Edges color="#00d4ff" threshold={15} />
    </mesh>
  );
}
