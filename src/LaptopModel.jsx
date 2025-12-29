import { useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function LaptopModel({ hovered }) {
  const { scene } = useGLTF("/models/laptop.glb");
  const initialized = useRef(false);

  // -----------------------------
  // 1️⃣ CENTER + SCALE (RUN ONCE)
  // -----------------------------
  useEffect(() => {
    if (initialized.current) return;

    const box = new THREE.Box3().setFromObject(scene);
    const size = new THREE.Vector3();
    const center = new THREE.Vector3();

    box.getSize(size);
    box.getCenter(center);

    // Center model ONCE
    scene.position.sub(center);

    // Normalize scale ONCE
    const maxAxis = Math.max(size.x, size.y, size.z);
    const scale = 2 / maxAxis;
    scene.scale.setScalar(scale);

    initialized.current = true;
  }, [scene]);

  // -----------------------------
  // 2️⃣ HOVER GLOW (SAFE)
  // -----------------------------
  useEffect(() => {
    scene.traverse((obj) => {
      if (obj.isMesh && obj.material) {
        if (!obj.material.emissive) {
          obj.material.emissive = new THREE.Color(0x000000);
        }

        obj.material.emissiveIntensity = hovered ? 0.35 : 0.0;
      }
    });
  }, [hovered, scene]);

  return <primitive object={scene} />;
}

useGLTF.preload("/models/laptop.glb");
