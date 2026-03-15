"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { Box, Layers, Network, FileCode } from "lucide-react";

const SceneCanvas = dynamic(() => import("@/components/viewer/SceneCanvas"), {
  ssr: false,
});

const features = [
  { icon: Box, label: "STL Import", desc: "Drag & drop your assemblies" },
  {
    icon: Layers,
    label: "Exploded View",
    desc: "Manual XYZ positioning per part",
  },
  { icon: Network, label: "Neighborhood", desc: "Visualize connected parts" },
  { icon: FileCode, label: "Embed", desc: "Export as iframe anywhere" },
];

export default function Home() {
  return (
    <main className="relative w-full min-h-screen bg-[#0a0a0a] md:h-screen md:overflow-hidden">
      {/* Logo fixe en haut à gauche */}
      <div className="absolute top-6 left-8 z-20">
        <span className="text-white text-4xl font-bold tracking-widest">
          SPAXE
        </span>
      </div>

      {/* Cube 3D full page en arrière-plan */}
      <div className="w-full h-[55vh] md:absolute md:inset-0 md:h-full">
        <SceneCanvas interactive={false} />
      </div>

      {/* Panel texte */}
      <div className="relative z-10 flex flex-col gap-10 px-8 py-10 md:absolute md:left-1/8 md:top-1/2 md:-translate-y-1/2 md:w-[520px] md:p-0">
        <h1 className="text-white text-6xl md:text-7xl font-bold leading-tight">
          Navigate complexity.
          <br />
          In 3D.
        </h1>

        <p className="text-white/50 text-xl leading-relaxed">
          Interactive 3D navigation for complex assemblies. Built for makers and
          industrial teams.
        </p>

        <div className="grid grid-cols-2 gap-5">
          {features.map(({ icon: Icon, label, desc }) => (
            <div key={label} className="flex items-start gap-3">
              <Icon size={22} className="text-cyan-400 mt-0.5 shrink-0" />
              <div>
                <div className="text-white text-base font-semibold">
                  {label}
                </div>
                <div className="text-white/40 text-base">{desc}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-5">
          <Link href="/viewer?demo=robot-atos">
            <button className="px-10 py-5 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-lg border-2 border-cyan-300 shadow-lg shadow-cyan-500/40 transition-all duration-200 hover:scale-105 text-xl">
              Try Demo
            </button>
          </Link>
          <button
            disabled
            className="px-10 py-5 bg-transparent text-white/30 font-semibold rounded-lg border border-white/10 text-xl cursor-not-allowed"
          >
            Import STL
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="hidden md:block absolute bottom-6 left-8 z-10">
        <span className="text-white/20 text-base">
          © 2025 Spaxe — All rights reserved
        </span>
      </div>
    </main>
  );
}
