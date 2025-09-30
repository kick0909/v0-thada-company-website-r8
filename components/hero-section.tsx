"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"
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
          <meshStandardMaterial color="#dc2626" metalness={0.5} roughness={0.3} />
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
          <meshStandardMaterial color="#dc2626" metalness={0.4} roughness={0.4} />
        </mesh>

        {/* Brand logo area */}
        <mesh position={[-0.8, 0.3, 0.91]}>
          <boxGeometry args={[0.6, 0.2, 0.01]} />
          <meshStandardMaterial color="#ef4444" />
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
          <meshStandardMaterial color="#dc2626" metalness={0.6} roughness={0.3} />
        </mesh>
      </Float>
      <Float speed={2} rotationIntensity={1.5} floatIntensity={1.5}>
        <mesh position={[3, -1, -1]}>
          <octahedronGeometry args={[0.6]} />
          <meshStandardMaterial color="#ef4444" metalness={0.7} roughness={0.2} />
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

function Scene3D() {
  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#ef4444" />
        <AnimatedCopierMachine />
        <FloatingShapes />
        <Environment preset="city" />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Suspense>
    </Canvas>
  )
}

export function HeroSection() {
  const { t } = useLanguage()

  return (
    <section className="relative bg-white overflow-hidden min-h-[90vh] flex items-center">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23dc2626' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="relative z-10 space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-4 py-2 rounded-full text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
              {t("th", "บริการมืออาชีพ", "Professional Service")}
            </div>

            {/* Main headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-900 leading-[0.95] tracking-tight">
              {t("th", "โซลูชันเครื่องถ่ายเอกสาร", "Office Equipment")}
              <br />
              <span className="text-red-600">{t("th", "สำหรับธุรกิจ", "Solutions")}</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed max-w-xl">
              {t(
                "th",
                "บริการเช่าเครื่องถ่ายเอกสารและเครื่องพิมพ์คุณภาพสูง พร้อมบริการบำรุงรักษาครบวงจร",
                "Premium copier and printer rental services with comprehensive maintenance support for your business",
              )}
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                {t("th", "เริ่มต้นใช้งาน", "Get Started")}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-8 py-6 text-lg font-semibold rounded-2xl transition-all duration-300 bg-transparent"
              >
                {t("th", "ดูแพ็คเกจ", "View Packages")}
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-8 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">20+</div>
                <div className="text-sm text-gray-600">{t("th", "ปีประสบการณ์", "Years Experience")}</div>
              </div>
              <div className="h-12 w-px bg-gray-300" />
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-600">{t("th", "ลูกค้าทั่วประเทศ", "Happy Clients")}</div>
              </div>
              <div className="h-12 w-px bg-gray-300" />
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">24/7</div>
                <div className="text-sm text-gray-600">{t("th", "บริการซ่อม", "Support")}</div>
              </div>
            </div>
          </div>

          {/* Right 3D content */}
          <div className="relative h-[500px] lg:h-[600px]">
            <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl" />
            <div className="absolute inset-0">
              <Scene3D />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-red-100 rounded-full blur-3xl opacity-20 animate-pulse" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-orange-100 rounded-full blur-3xl opacity-20 animate-pulse delay-1000" />
    </section>
  )
}
