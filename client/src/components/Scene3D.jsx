import { Canvas } from '@react-three/fiber'
import { OrbitControls, Sphere, MeshDistortMaterial, } from '@react-three/drei'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'


const AnimatedSphere = () => {
  const meshRef = useRef()

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.3
      meshRef.current.rotation.y += 0.01
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
    }
  })

  return (
    <Sphere ref={meshRef} args={[1, 100, 200]} scale={2.5} 
     >
      <MeshDistortMaterial
        color="#3b82f6"
        attach="material"
        distort={0.3}
        speed={1.0}
        roughness={0.2}
        metalness={0.8}
      />
    </Sphere>
  )
}

export const Scene3D = () => {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        className="w-full h-full "
       
      >
        <ambientLight intensity={0.9} />
        <pointLight position={[10, 10, 10]} intensity={5} />
        {/* <Stars   /> */}
      
        <pointLight position={[-10, -10, -10]} color="white" intensity={5} />
        <AnimatedSphere />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={1}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  )
}