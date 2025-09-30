"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Float, Environment } from "@react-three/drei"
import { Suspense } from "react"

function AnimatedCopierMachine() {
  return (
    <Float speed={2} rotationIntensity={0.3} floatIntensity={0.4}>
      <group>
        {/* Main copier body */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[2.5, 1.5, 1.8]} />
          <meshStandardMaterial color="#f5f5f5" metalness={0.3} roughness={0.4} />
        </mesh>

        {/* Top scanner lid */}
        <mesh position={[0, 0.85, 0]} rotation={[-0.1, 0, 0]}>
          <boxGeometry args={[2.5, 0.2, 1.8]} />
          <meshStandardMaterial color="#C94444" metalness={0.5} roughness={0.3} />
        </mesh>

        {/* Scanner glass */}
        <mesh position={[0, 0.65, 0]}>
          <boxGeometry args={[2.3, 0.05, 1.6]} />
          <meshStandardMaterial color="#1a1a1a" metalness={0.9} roughness={0.1} />
        </mesh>

        {/* Control panel */}
        <mesh position={[0.8, 0.3, 0.9]} rotation={[-0.3, 0, 0]}>
          <boxGeometry args={[0.8, 0.6, 0.1]} />
          <meshStandardMaterial color="#2a2a2a" metalness={0.6} roughness={0.3} />
        </mesh>

        {/* Display screen */}
        <mesh position={[0.8, 0.3, 0.96]} rotation={[-0.3, 0, 0]}>
          <boxGeometry args={[0.6, 0.4, 0.02]} />
          <meshStandardMaterial color="#4a90e2" emissive="#4a90e2" emissiveIntensity={0.5} />
        </mesh>

        {/* Paper tray */}
        <mesh position={[0, -0.6, 0.8]}>
          <boxGeometry args={[2.2, 0.3, 0.4]} />
          <meshStandardMaterial color="#e5e5e5" metalness={0.2} roughness={0.5} />
        </mesh>

        {/* Output tray */}
        <mesh position={[0, 0.2, -0.9]}>
          <boxGeometry args={[2.2, 0.1, 0.3]} />
          <meshStandardMaterial color="#C94444" metalness={0.4} roughness={0.4} />
        </mesh>

        {/* Brand logo area */}
        <mesh position={[-0.8, 0.3, 0.91]}>
          <boxGeometry args={[0.6, 0.2, 0.01]} />
          <meshStandardMaterial color="#C94444" />
        </mesh>

        {/* Side vents */}
        <mesh position={[-1.26, 0, 0]}>
          <boxGeometry args={[0.02, 1.2, 1.5]} />
          <meshStandardMaterial color="#1f2937" metalness={0.5} roughness={0.5} />
        </mesh>
        <mesh position={[1.26, 0, 0]}>
          <boxGeometry args={[0.02, 1.2, 1.5]} />
          <meshStandardMaterial color="#1f2937" metalness={0.5} roughness={0.5} />
        </mesh>
      </group>
    </Float>
  )
}

function FloatingShapes() {
  return (
    <>
      <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
        <mesh position={[-3, 2, -2]}>
          <torusGeometry args={[0.5, 0.2, 16, 32]} />
          <meshStandardMaterial color="#C94444" metalness={0.6} roughness={0.3} />
        </mesh>
      </Float>
      <Float speed={2} rotationIntensity={1.5} floatIntensity={1.5}>
        <mesh position={[3, -1, -1]}>
          <octahedronGeometry args={[0.6]} />
          <meshStandardMaterial color="#C94444" metalness={0.7} roughness={0.2} />
        </mesh>
      </Float>
      <Float speed={1.8} rotationIntensity={0.8} floatIntensity={2.5}>
        <mesh position={[-2, -2, -3]}>
          <sphereGeometry args={[0.4, 32, 32]} />
          <meshStandardMaterial color="#f97316" metalness={0.5} roughness={0.4} />
        </mesh>
      </Float>
    </>
  )
}

export default function Copier3DScene() {
  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#C94444" />
        <AnimatedCopierMachine />
        <FloatingShapes />
        <Environment preset="city" />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Suspense>
    </Canvas>
  )
}
