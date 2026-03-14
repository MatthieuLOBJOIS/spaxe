"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import GhostCube from "./GhostCube";

export default function SceneCanvas() {
  return (
    <Canvas
      camera={{ position: [4, 3, 4], fov: 50 }}
      style={{ background: "#0a0a0a" }}
    >
      {/* Éclairage */}
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} />

      {/* Cube ghost */}
      <GhostCube />

      {/* Contrôles caméra */}
      <OrbitControls
        enablePan={true}
        enableZoom={true}
        enableRotate={true}
        dampingFactor={0.05}
        enableDamping={true}
      />
    </Canvas>
  );
}
