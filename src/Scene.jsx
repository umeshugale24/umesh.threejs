import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  CameraControls,
  ScrollControls,
  useScroll,
} from "@react-three/drei";
import { useRef, useState, useEffect } from "react";
import LaptopModel from "./LaptopModel";
import { useSectionStore } from "./store/useSectionStore";
import * as THREE from "three";
import ExperienceTree from "./ExperienceTree";

function IntroTrigger({ setShowIntro }) {
  const scroll = useScroll();
  const last = useRef(false);

  useFrame(() => {
    const shouldShow = scroll.offset > 0.25;

    // ✅ only update when it changes (prevents re-render spam)
    if (last.current !== shouldShow) {
      last.current = shouldShow;
      setShowIntro(shouldShow);
    }
  });

  return null;
}

/* -----------------------------
   SCROLL EXPERIENCE WRAPPER
----------------------------- */
function ScrollExperience({
  cameraControlsRef,
  hovered,
  setHovered,
  isZoomed,
  setIsZoomed,
  setShowExperience,
}) {
  const scroll = useScroll();
  

  const groupRef = useRef();
  const openSection = useSectionStore((s) => s.openSection);

  // 🎥 Scroll + auto-rotation (SAFE)
  useFrame((state, delta) => {
  if (!groupRef.current) return;

  const t = scroll.offset;

  // 🟢 AUTO ROTATION (unchanged)
  if (!isZoomed) {
    groupRef.current.rotation.y += delta * 0.25;
  }

  // 🟢 SCROLL STORY (unchanged)
  groupRef.current.rotation.y += t * 0.02;
  groupRef.current.position.y = -t * 0.3;

  // 🔑 EXPERIENCE TREE TRIGGER (NEW)
  const camera = state.camera;
  const laptopPos = groupRef.current.getWorldPosition(
    new THREE.Vector3()
  );
  const distance = camera.position.distanceTo(laptopPos);

  // Threshold: laptop clearly smaller than hero view
  const SHOW_EXPERIENCE_DISTANCE = 20.8;


  setShowExperience(distance > SHOW_EXPERIENCE_DISTANCE && !isZoomed);
});


  // ✅ TOGGLE ZOOM + ROTATION
  function toggleScreenZoom() {
    if (!isZoomed) {
      // 🔍 ZOOM IN
      cameraControlsRef.current?.setLookAt(
        0, 1.75, 1.15,
        0, 1.55, 0,
        true
      );
    } else {
      // 🔄 RESET VIEW
      cameraControlsRef.current?.setLookAt(
        0, 1.5, 4,
        0, 1.2, 0,
        true
      );
    }

    setIsZoomed((prev) => !prev);
  }
  
  // 🔥 Raycast priority helper
function prioritizedRaycast(priority) {
  return function (raycaster, intersects) {
    const temp = [];
    THREE.Mesh.prototype.raycast.call(this, raycaster, temp);
    temp.forEach((hit) => {
      hit.distance -= priority; // higher priority = smaller distance
      intersects.push(hit);
    });
  };
}


  return (
    <group ref={groupRef}>

      
      {/* Laptop */}
      <LaptopModel hovered={hovered} />

      {/* SCREEN → TOGGLE ZOOM + ROTATION */}
      <mesh
        position={[0, 1.2, 0.05]}
        onPointerEnter={() => setHovered("screen")}
        onPointerLeave={() => setHovered(null)}
        onClick={(e) => {
  e.stopPropagation();

  if (!isZoomed) {
    // First click → zoom in
    toggleScreenZoom();
  } else {
    // Second click (while zoomed) → open Projects
    openSection("projects");
  }
}}

      >
        <boxGeometry args={[1.8, 1.1, 0.1]} />
        <meshStandardMaterial transparent opacity={0} />
      </mesh>

      {/* KEYBOARD → ABOUT (UNCHANGED) */}
      <mesh
  position={[0, 0.6, 0.8]}
  renderOrder={isZoomed ? 1 : 2}
  raycast={isZoomed ? prioritizedRaycast(0) : undefined}
  onPointerEnter={() => setHovered("keyboard")}
  onPointerLeave={() => setHovered(null)}
  onClick={(e) => {
    e.stopPropagation();
    openSection("about");
  }}
>
  <boxGeometry args={[2.0, 0.25, 1.4]} />
  <meshStandardMaterial transparent opacity={0} />
</mesh>


      {/* TRACKPAD → CONTACT (UNCHANGED) */}
      <mesh
  position={[0, 0.45, 1.05]}
  renderOrder={isZoomed ? 3 : 2}
  raycast={isZoomed ? prioritizedRaycast(5) : undefined}
  onPointerEnter={() => setHovered("contact")}
  onPointerLeave={() => setHovered(null)}
  onClick={(e) => {
    e.stopPropagation();
    openSection("contact");
  }}
>
  <boxGeometry args={[1.2, 0.25, 1.0]} />
  <meshStandardMaterial transparent opacity={0} />
</mesh>


    </group>
  );
}

/* -----------------------------
   MAIN SCENE
----------------------------- */
export default function Scene() {
  const cameraControlsRef = useRef();
  const [hovered, setHovered] = useState(null);

  // ✅ NEW STATE (does NOT affect anything else)
  const [isZoomed, setIsZoomed] = useState(false);
  const [showExperience, setShowExperience] = useState(false);

  


  useEffect(() => {
    document.body.style.cursor = hovered ? "pointer" : "default";
  }, [hovered]);

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas camera={{ position: [0, 1.5, 4], fov: 45 }}>
        <ambientLight intensity={2} />
        <directionalLight position={[5, 5, 5]} intensity={3} />
        <directionalLight position={[-5, 3, -5]} intensity={2} />

        <CameraControls ref={cameraControlsRef} />

        <ScrollControls pages={2} damping={0.25}>
  <ScrollExperience
    cameraControlsRef={cameraControlsRef}
    hovered={hovered}
    setHovered={setHovered}
    isZoomed={isZoomed}
    setIsZoomed={setIsZoomed}
    setShowExperience={setShowExperience}
  />
 
</ScrollControls>


        <OrbitControls enableZoom={false} />
      </Canvas>
      <ExperienceTree show={showExperience} />

       

    </div>
  );
}
