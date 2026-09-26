"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense, memo } from "react";
import {
  AVATAR_ORBIT_TARGET,
  AvatarModel,
} from "@/components/avatar/avatar-model";

type AvatarStageProps = {
  className?: string;
};

function AvatarStageComponent({ className = "" }: AvatarStageProps) {
  return (
    <div className={`h-full w-full ${className}`}>
      <Canvas
        dpr={[1, 2]}
        gl={{ alpha: true, antialias: true }}
        camera={{
          position: [0, AVATAR_ORBIT_TARGET[1], 3.45],
          fov: 40,
          near: 0.1,
          far: 100,
        }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.72} />
        <directionalLight intensity={0.88} position={[2.5, 4.5, 3]} />
        <directionalLight intensity={0.32} position={[-2.5, 2.5, -2]} />
        <Suspense fallback={null}>
          <AvatarModel />
        </Suspense>
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          enableDamping
          dampingFactor={0.06}
          rotateSpeed={0.55}
          minAzimuthAngle={-Infinity}
          maxAzimuthAngle={Infinity}
          minPolarAngle={Math.PI / 2.65}
          maxPolarAngle={Math.PI / 1.72}
          target={AVATAR_ORBIT_TARGET}
        />
      </Canvas>
    </div>
  );
}

export const AvatarStage = memo(AvatarStageComponent);
