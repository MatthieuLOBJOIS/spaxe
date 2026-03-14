"use client";

import dynamic from "next/dynamic";

const SceneCanvas = dynamic(() => import("@/components/viewer/SceneCanvas"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="relative w-full h-screen overflow-hidden bg-[#0a0a0a]">
      <SceneCanvas />
      <div className="absolute top-6 left-6 z-10">
        <span className="text-white text-2xl font-bold tracking-widest">
          SPAXE
        </span>
      </div>
    </main>
  );
}
