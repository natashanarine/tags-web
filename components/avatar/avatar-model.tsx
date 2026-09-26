"use client";

import { useGLTF } from "@react-three/drei";
import { useEffect, useMemo, useState } from "react";
import * as THREE from "three";

const GLB_PATH = "/models/avatar.glb";

/** Shared scene placement — used by fallback, GLB, and rotation indicator. */
export const AVATAR_GROUP_LIFT = 0.47;
export const AVATAR_BODY_SCALE = 0.88;
export const AVATAR_ORBIT_TARGET: [number, number, number] = [0, 1.08, 0];
/** Fixed polar angle — horizontal orbit only (radians). */
export const AVATAR_POLAR_ANGLE = Math.PI / 2.08;

/** Local Y below foot soles — leaves a visible gap above the ring. */
const INDICATOR_Y = -0.1;
const INDICATOR_RADIUS = 0.34;
/** Ellipse stretch on ground plane (X wider, Z shallower). */
const INDICATOR_ELLIPSE_SCALE: [number, number, number] = [1.08, 1, 0.76];

function useNeutralMaterial() {
  return useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#9ca3af",
        roughness: 0.76,
        metalness: 0.02,
      }),
    [],
  );
}

function MannequinFallback() {
  const material = useNeutralMaterial();

  return (
    <group scale={AVATAR_BODY_SCALE}>
      <mesh material={material} position={[0, 0.8, 0]}>
        <capsuleGeometry args={[0.18, 0.14, 14, 24]} />
      </mesh>

      <mesh material={material} position={[0, 1.12, 0]}>
        <cylinderGeometry args={[0.19, 0.17, 0.5, 24]} />
      </mesh>

      <mesh material={material} position={[0, 1.48, 0]}>
        <capsuleGeometry args={[0.055, 0.09, 12, 20]} />
      </mesh>

      <mesh material={material} position={[0, 1.66, 0]}>
        <sphereGeometry args={[0.145, 28, 28]} />
      </mesh>

      <group position={[-0.21, 1.33, 0]} rotation={[0, 0, -0.1]}>
        <mesh material={material} position={[0, -0.19, 0]}>
          <capsuleGeometry args={[0.05, 0.3, 12, 20]} />
        </mesh>
        <mesh material={material} position={[-0.015, -0.48, 0]} rotation={[0, 0, -0.05]}>
          <capsuleGeometry args={[0.045, 0.28, 12, 20]} />
        </mesh>
      </group>
      <group position={[0.21, 1.33, 0]} rotation={[0, 0, 0.1]}>
        <mesh material={material} position={[0, -0.19, 0]}>
          <capsuleGeometry args={[0.05, 0.3, 12, 20]} />
        </mesh>
        <mesh material={material} position={[0.015, -0.48, 0]} rotation={[0, 0, 0.05]}>
          <capsuleGeometry args={[0.045, 0.28, 12, 20]} />
        </mesh>
      </group>

      <mesh material={material} position={[-0.1, 0.48, 0]}>
        <capsuleGeometry args={[0.07, 0.62, 14, 24]} />
      </mesh>
      <mesh material={material} position={[0.1, 0.48, 0]}>
        <capsuleGeometry args={[0.07, 0.62, 14, 24]} />
      </mesh>

      <mesh material={material} position={[-0.1, 0.02, 0.05]}>
        <capsuleGeometry args={[0.045, 0.05, 10, 16]} />
      </mesh>
      <mesh material={material} position={[0.1, 0.02, 0.05]}>
        <capsuleGeometry args={[0.045, 0.05, 10, 16]} />
      </mesh>
    </group>
  );
}

export function RotationIndicator() {
  const ringMaterial = useMemo(
    () =>
      new THREE.MeshBasicMaterial({
        color: "#404040",
        transparent: true,
        opacity: 0.94,
      }),
    [],
  );

  return (
    <group position={[0, AVATAR_GROUP_LIFT, 0]} scale={AVATAR_BODY_SCALE}>
      <group position={[0, INDICATOR_Y, 0]} scale={INDICATOR_ELLIPSE_SCALE}>
        <mesh rotation={[Math.PI / 2, 0, 0]} material={ringMaterial}>
          <torusGeometry args={[INDICATOR_RADIUS, 0.003, 8, 96]} />
        </mesh>
      </group>
    </group>
  );
}

function GltfAvatar() {
  const { scene } = useGLTF(GLB_PATH);

  const positioned = useMemo(() => {
    const clone = scene.clone(true);
    const box = new THREE.Box3().setFromObject(clone);
    const size = new THREE.Vector3();
    const center = new THREE.Vector3();
    box.getSize(size);
    box.getCenter(center);

    clone.position.sub(center);
    const targetHeight = 1.78 * AVATAR_BODY_SCALE;
    const scale = targetHeight / Math.max(size.y, 0.001);
    clone.scale.setScalar(scale);

    return clone;
  }, [scene]);

  return <primitive object={positioned} />;
}

export function AvatarModel() {
  const [hasGlb, setHasGlb] = useState<boolean | null>(null);

  useEffect(() => {
    let cancelled = false;

    fetch(GLB_PATH, { method: "HEAD" })
      .then((response) => {
        if (!cancelled) {
          const ok = response.ok;
          setHasGlb(ok);
          if (ok) {
            useGLTF.preload(GLB_PATH);
          }
        }
      })
      .catch(() => {
        if (!cancelled) {
          setHasGlb(false);
        }
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <group position={[0, AVATAR_GROUP_LIFT, 0]}>
      {hasGlb ? <GltfAvatar /> : <MannequinFallback />}
    </group>
  );
}
