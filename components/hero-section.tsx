"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"

export function HeroSection() {
  const { t } = useLanguage()

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center bg-[#C94444]">
      <div className="container mx-auto px-4 sm:px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-6 lg:space-y-8">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
              {t("th", "เช่าเครื่องถ่ายเอกสาร", "Copier Rental")}
            </h1>

            <p className="text-2xl sm:text-3xl text-white/90 font-semibold">
              {t("th", "คุณภาพระดับมืออาชีพ", "Professional Quality")}
            </p>

            <p className="text-lg text-white/80 leading-relaxed max-w-xl">
              {t(
                "th",
                "บริการเช่าเครื่องถ่ายเอกสาร เครื่องพิมพ์ และอุปกรณ์สำนักงาน พร้อมบริการบำรุงรักษาครบวงจร",
                "Copier rental, printer, and office equipment services with comprehensive maintenance support",
              )}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="bg-white hover:bg-white/90 text-[#C94444] px-8 py-6 text-base font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                {t("th", "ดูแพ็คเกจเช่า", "View Packages")}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-[#C94444] px-8 py-6 text-base font-semibold transition-all bg-transparent"
              >
                {t("th", "ปรึกษาฟรี", "Free Consultation")}
              </Button>
            </div>
          </div>

          {/* Right dynamic box */}
          <div className="relative">
            {/* Main white box with shadow and transform */}
            <div className="bg-white rounded-2xl p-8 shadow-2xl transform lg:rotate-2 hover:rotate-0 transition-transform duration-500">
              <div className="flex items-center justify-center h-[400px] lg:h-[500px]">
                <img
                  src="/copier-transparent-1.jpg"
                  alt="Office Copier"
                  className="w-full h-full object-contain drop-shadow-xl"
                />
              </div>
            </div>

            {/* Decorative accent box behind */}
            <div className="absolute -bottom-4 -right-4 w-full h-full bg-white/20 rounded-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}
