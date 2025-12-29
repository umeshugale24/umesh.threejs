import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Laptop from "./Laptop";

export default function HeroScene() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas camera={{ position: [4, 3, 6], fov: 45 }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} />
        <Laptop />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}
