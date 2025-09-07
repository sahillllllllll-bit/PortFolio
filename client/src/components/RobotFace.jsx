import React, { useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, useAnimations } from "@react-three/drei";

function RobotModel() {
  const { scene, animations } = useGLTF("/models/Adventurer.glb");
  const { actions } = useAnimations(animations, scene);

  // Play "Idle" animation if available
  useEffect(() => {
    if (actions && actions["Idle"]) {
      actions["Idle"].reset().play();
    }
  }, [actions]);

  // Optional: slow head rotation
//   useFrame((state, delta) => {
//     scene.rotation.y += delta * 0.1;
//   });

  return (
    <primitive
      object={scene}
      scale={3.5}
      position={[0, -3, 0]} // 👈 pushes model downwards
    />
  );
}

export default function RobotFace() {
  return (
    <div className="relative h-[500px] w-full">
      <Canvas
        className="absolute bottom-0 w-full h-full"
        camera={{ position: [0, 1, 6] }} // slightly above, looking at model
      >
        {/* Lights */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />

        {/* Model */}
        <RobotModel />

        {/* Controls */}
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}
