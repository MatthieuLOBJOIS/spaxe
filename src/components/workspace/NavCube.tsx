"use client";

import { useEffect, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Edges } from "@react-three/drei";
import * as THREE from "three";

// Faces du cube de navigation
const faces = [
  { label: "TOP", rotation: [-Math.PI / 2, 0, 0], position: [0, 1, 0] },
  { label: "FRONT", rotation: [0, 0, 0], position: [0, 0, 1] },
  { label: "BACK", rotation: [0, Math.PI, 0], position: [0, 0, -1] },
  { label: "RIGHT", rotation: [0, Math.PI / 2, 0], position: [1, 0, 0] },
  { label: "LEFT", rotation: [0, -Math.PI / 2, 0], position: [-1, 0, 0] },
  { label: "BOTTOM", rotation: [Math.PI / 2, 0, 0], position: [0, -1, 0] },
];

// Couleurs par face
const faceColors: Record<string, string> = {
  TOP: "#22d3ee",
  FRONT: "#3b82f6",
  BACK: "#6366f1",
  RIGHT: "#10b981",
  LEFT: "#f59e0b",
  BOTTOM: "#ef4444",
};

interface FaceLabelProps {
  label: string;
  position: [number, number, number];
  rotation: [number, number, number];
}

function FaceLabel({ label, position, rotation }: FaceLabelProps) {
  return (
    <mesh position={position} rotation={rotation}>
      <planeGeometry args={[0.9, 0.9]} />
      <meshStandardMaterial
        color={faceColors[label]}
        transparent
        opacity={0.85}
      />
    </mesh>
  );
}

function NavCubeScene({
  onFaceClick,
}: {
  onFaceClick: (face: string) => void;
}) {
  return (
    <>
      <ambientLight intensity={2} />
      <directionalLight position={[2, 2, 2]} intensity={1} />

      {/* Cube transparent avec arrêtes */}
      <mesh>
        <boxGeometry args={[1.5, 1.5, 1.5]} />
        <meshStandardMaterial
          color="#ffffff"
          transparent
          opacity={0.05}
          side={2}
        />
        <Edges color="#ffffff" threshold={15} />
      </mesh>

      {/* Axe X — rouge */}
      <mesh position={[0.5, 0, 0]} rotation={[0, 0, -Math.PI / 2]}>
        <cylinderGeometry args={[0.04, 0.04, 1, 16]} />
        <meshStandardMaterial color="#ef4444" />
      </mesh>
      <mesh position={[1.05, 0, 0]} rotation={[0, 0, -Math.PI / 2]}>
        <coneGeometry args={[0.1, 0.2, 16]} />
        <meshStandardMaterial color="#ef4444" />
      </mesh>

      {/* Axe Y — vert */}
      <mesh position={[0, 0.5, 0]}>
        <cylinderGeometry args={[0.04, 0.04, 1, 16]} />
        <meshStandardMaterial color="#22c55e" />
      </mesh>
      <mesh position={[0, 1.05, 0]}>
        <coneGeometry args={[0.1, 0.2, 16]} />
        <meshStandardMaterial color="#22c55e" />
      </mesh>

      {/* Axe Z — bleu */}
      <mesh position={[0, 0, 0.5]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.04, 0.04, 1, 16]} />
        <meshStandardMaterial color="#3b82f6" />
      </mesh>
      <mesh position={[0, 0, 1.05]} rotation={[Math.PI / 2, 0, 0]}>
        <coneGeometry args={[0.1, 0.2, 16]} />
        <meshStandardMaterial color="#3b82f6" />
      </mesh>

      <OrbitControls enableZoom={false} enablePan={false} />
    </>
  );
}

interface NavCubeProps {
  onFaceClick: (face: string) => void;
}

export default function NavCube({ onFaceClick }: NavCubeProps) {
  return (
    <div
      style={{
        position: "absolute",
        bottom: "24px",
        right: "24px",
        width: "240px",
        height: "240px",
        borderRadius: "12px",
        overflow: "hidden",
        border: "1px solid rgba(255,255,255,0.1)",
        background: "#0f0f0f",
      }}
    >
      <Canvas camera={{ position: [2, 2, 2], fov: 40 }}>
        <NavCubeScene onFaceClick={onFaceClick} />
      </Canvas>
    </div>
  );
}
