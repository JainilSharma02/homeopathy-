"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { BackgroundScene } from "./BackgroundScene";
import { Environment } from "@react-three/drei";

export default function Experience() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 15], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <BackgroundScene />
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  );
}
