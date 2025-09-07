// CarScene.jsx
import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";

import {
  OrbitControls,
  useGLTF,
  Environment,
  Center,
  ContactShadows,
  Sphere,
  MeshDistortMaterial,
} from "@react-three/drei";







function CarModel() {
  const { scene } = useGLTF("/models/Car.glb");
  const carRef = useRef();

  // enable shadows + reflections
  useEffect(() => {
    scene.traverse((o) => {
      if (o.isMesh) {
        o.castShadow = true;
        o.receiveShadow = true;
        if (o.material && "envMapIntensity" in o.material) {
          o.material.envMapIntensity = 1.0;
        }
      }
    });
  }, [scene]);

  // continuous rotation
  useFrame((_, delta) => {
    if (carRef.current) {
      carRef.current.rotation.y += delta * 0.2; // rotate smoothly
    }
  });

  return (
    <Center bottom>
      <primitive ref={carRef} object={scene} scale={0.1} position={[0, -0.1, 0]} />
    </Center>
  );
}

export default function CarScene() {
  return (
    <div className="h-[500px] w-full">
      <Canvas
        shadows
        camera={{ fov: 45, position: [0, 5, 55] }}
        onCreated={({ gl }) => {
          gl.toneMapping = THREE.ACESFilmicToneMapping;
          gl.outputColorSpace = THREE.SRGBColorSpace;
        }}
      >
        {/* lighting */}
        <ambientLight intensity={0.3} />
        <directionalLight
          position={[5, 8, 5]}
          intensity={1.3}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />
        <Environment preset="city" />
  
        <CarModel />
     
        <ContactShadows
          position={[0, -0.01, 0]}
          opacity={0.5}
          scale={20}
          blur={2}
          far={10}
        />

        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}
