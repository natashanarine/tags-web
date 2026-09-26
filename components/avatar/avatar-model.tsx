"use client";

import { useGLTF } from "@react-three/drei";
import { useEffect, useMemo, useState } from "react";
import * as THREE from "three";

const GLB_PATH = "/models/avatar.glb";

/** Shared scene placement — used by fallback and GLB paths. */
export const AVATAR_GROUP_LIFT = 0.34;
export const AVATAR_ORBIT_TARGET: [number, number, number] = [0, 1.08, 0];

function useNeutralMaterial() {
  return useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#9ca3af",
        roughness: 0.82,
        metalness: 0.04,
      }),
    [],
  );
}

function MannequinFallback() {
  const material = useNeutralMaterial();

  return (
    <group position={[0, AVATAR_GROUP_LIFT, 0]}>
      <mesh material={material} position={[0, 1.72, 0]}>
        <sphereGeometry args={[0.165, 32, 32]} />
      </mesh>

      <mesh material={material} position={[0, 1.52, 0]}>
        <cylinderGeometry args={[0.05, 0.055, 0.14, 16]} />
      </mesh>

      <mesh material={material} position={[0, 1.24, 0]}>
        <cylinderGeometry args={[0.21, 0.17, 0.36, 20]} />
      </mesh>

      <mesh material={material} position={[0, 0.94, 0]}>
        <cylinderGeometry args={[0.18, 0.16, 0.22, 20]} />
      </mesh>

      <mesh material={material} position={[-0.27, 1.22, 0]} rotation={[0, 0, 0.22]}>
        <cylinderGeometry args={[0.055, 0.05, 0.28, 14]} />
      </mesh>
      <mesh material={material} position={[0.27, 1.22, 0]} rotation={[0, 0, -0.22]}>
        <cylinderGeometry args={[0.055, 0.05, 0.28, 14]} />
      </mesh>

      <mesh material={material} position={[-0.38, 0.98, 0.02]} rotation={[0, 0, 0.08]}>
        <cylinderGeometry args={[0.048, 0.045, 0.26, 14]} />
      </mesh>
      <mesh material={material} position={[0.38, 0.98, 0.02]} rotation={[0, 0, -0.08]}>
        <cylinderGeometry args={[0.048, 0.045, 0.26, 14]} />
      </mesh>

      <mesh material={material} position={[-0.11, 0.58, 0]}>
        <cylinderGeometry args={[0.085, 0.078, 0.44, 16]} />
      </mesh>
      <mesh material={material} position={[0.11, 0.58, 0]}>
        <cylinderGeometry args={[0.085, 0.078, 0.44, 16]} />
      </mesh>

      <mesh material={material} position={[-0.11, 0.16, 0.02]}>
        <cylinderGeometry args={[0.072, 0.065, 0.4, 16]} />
      </mesh>
      <mesh material={material} position={[0.11, 0.16, 0.02]}>
        <cylinderGeometry args={[0.072, 0.065, 0.4, 16]} />
      </mesh>

      <mesh material={material} position={[-0.11, -0.04, 0.06]}>
        <boxGeometry args={[0.1, 0.06, 0.22]} />
      </mesh>
      <mesh material={material} position={[0.11, -0.04, 0.06]}>
        <boxGeometry args={[0.1, 0.06, 0.22]} />
      </mesh>
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
    const targetHeight = 1.78;
    const scale = targetHeight / Math.max(size.y, 0.001);
    clone.scale.setScalar(scale);
    clone.position.y += AVATAR_GROUP_LIFT;

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

  if (hasGlb === null) {
    return <MannequinFallback />;
  }

  if (hasGlb) {
    return <GltfAvatar />;
  }

  return <MannequinFallback />;
}
