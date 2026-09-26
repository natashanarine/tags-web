"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense, memo } from "react";
import {
  AVATAR_ORBIT_TARGET,
  AVATAR_POLAR_ANGLE,
  AvatarModel,
  RotationIndicator,
} from "@/components/avatar/avatar-model";

type AvatarStageProps = {
  className?: string;
};

function AvatarStageComponent({ className = "" }: AvatarStageProps) {
  const cameraDistance = 3.5;
  const cameraY =
    AVATAR_ORBIT_TARGET[1] +
    cameraDistance * Math.cos(AVATAR_POLAR_ANGLE);
  const cameraZ =
    cameraDistance * Math.sin(AVATAR_POLAR_ANGLE);

  return (
    <div
      className={`h-full w-full cursor-grab touch-none active:cursor-grabbing ${className}`}
      aria-label="Drag horizontally to rotate the avatar"
    >
      <Canvas
        dpr={[1, 2]}
        gl={{ alpha: true, antialias: true }}
        camera={{
          position: [0, cameraY, cameraZ],
          fov: 39,
          near: 0.1,
          far: 100,
        }}
        style={{ background: "transparent", touchAction: "none" }}
      >
        <ambientLight intensity={0.74} />
        <directionalLight intensity={0.9} position={[2.5, 4.5, 3]} />
        <directionalLight intensity={0.34} position={[-2.5, 2.5, -2]} />
        <RotationIndicator />
        <Suspense fallback={null}>
          <AvatarModel />
        </Suspense>
        <OrbitControls
          makeDefault
          enablePan={false}
          enableZoom={false}
          enableDamping
          dampingFactor={0.05}
          rotateSpeed={0.75}
          minAzimuthAngle={Number.NEGATIVE_INFINITY}
          maxAzimuthAngle={Number.POSITIVE_INFINITY}
          minPolarAngle={AVATAR_POLAR_ANGLE}
          maxPolarAngle={AVATAR_POLAR_ANGLE}
          target={AVATAR_ORBIT_TARGET}
        />
      </Canvas>
    </div>
  );
}

export const AvatarStage = memo(AvatarStageComponent);
