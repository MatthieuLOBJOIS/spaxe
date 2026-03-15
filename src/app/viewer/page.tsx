"use client";

import dynamic from "next/dynamic";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import Link from "next/link";

const SceneCanvas = dynamic(() => import("@/components/viewer/SceneCanvas"), {
  ssr: false,
});

// Composant interne pour accéder aux searchParams
function ViewerContent() {
  const searchParams = useSearchParams();
  const demo = searchParams.get("demo");

  const assemblyUrl = demo ? `/demo/${demo}/assembly.json` : undefined;
  const basePath = demo ? `/demo/${demo}` : undefined;

  return (
    <main className="relative w-full h-screen overflow-hidden bg-[#0a0a0a]">
      <SceneCanvas assemblyUrl={assemblyUrl} basePath={basePath} />

      {/* Logo */}
      <div className="absolute top-6 left-6 z-10">
        <span className="text-white text-2xl font-bold tracking-widest">
          SPAXE
        </span>
      </div>

      {/* Bouton retour accueil */}

      <Link
        href="/"
        className="absolute top-6 right-6 z-10 px-4 py-2 text-sm text-white/60 hover:text-white border border-white/20 hover:border-white/50 rounded-lg transition-all duration-200"
      >
        Back
      </Link>
    </main>
  );
}

export default function ViewerPage() {
  return (
    <Suspense>
      <ViewerContent />
    </Suspense>
  );
}
