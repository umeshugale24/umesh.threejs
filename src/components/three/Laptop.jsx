import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useSectionStore } from "../../store/useSectionStore";

export default function Laptop() {
  const ref = useRef();
  const openSection = useSectionStore((s) => s.openSection);

  useFrame(() => {
    ref.current.rotation.y += 0.003;
  });

  return (
    <group ref={ref}>
      {/* Screen → Projects */}
      <mesh
        position={[0, 1.2, 0]}
        onClick={() => openSection("projects")}
      >
        <boxGeometry args={[2.5, 1.5, 0.1]} />
        <meshStandardMaterial color="#111827" />
      </mesh>

      {/* Keyboard → About */}
      <mesh
        position={[0, 0.4, 0.8]}
        onClick={() => openSection("about")}
      >
        <boxGeometry args={[2.8, 0.2, 1.5]} />
        <meshStandardMaterial color="#4b5563" />
      </mesh>

      {/* Mouse → Contact */}
      <mesh
        position={[2, 0.2, 1]}
        onClick={() => openSection("contact")}
      >
        <boxGeometry args={[0.4, 0.2, 0.7]} />
        <meshStandardMaterial color="#9ca3af" />
      </mesh>
    </group>
  );
}
