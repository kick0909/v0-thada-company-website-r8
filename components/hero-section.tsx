"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"
import dynamic from "next/dynamic"

const Copier3DScene = dynamic(() => import("./copier-3d-scene"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600" />
    </div>
  ),
})

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
              <Copier3DScene />
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
