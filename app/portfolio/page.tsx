"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/lib/language-context"
import Image from "next/image"
import { Building2, Users, Wrench, CheckCircle } from "lucide-react"

const portfolioImages = [
  {
    id: 1,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2679.JPG-IuJAYb8eGEIH84DloryfWnukPUhBXL.jpeg",
    alt: "Canon copier installation in office",
    category: "office",
  },
  {
    id: 2,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2674.JPG-894d5FG14FqScGQqBi79pW1vnYdrM0.jpeg",
    alt: "Customer training and demonstration",
    category: "training",
  },
  {
    id: 3,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2675.JPG-EOM1obBdkqksV5Erk7PpnbE2FsFrzs.jpeg",
    alt: "Equipment installation and setup",
    category: "installation",
  },
  {
    id: 4,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2680.JPG-bSlAMIstPeglxZwqGcM42ORcODxSGN.jpeg",
    alt: "Home office copier installation",
    category: "office",
  },
  {
    id: 5,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2678.JPG-mH2XWcX5OgpMPn4YuNh7bVdTBm0nOh.jpeg",
    alt: "Ricoh copier in business environment",
    category: "office",
  },
  {
    id: 6,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2673.JPG-p2vE7ifrWsEgtTYMwsk0JOaXDjwzox.jpeg",
    alt: "New equipment delivery",
    category: "delivery",
  },
  {
    id: 7,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2677.JPG-c5eUFUlPZfacN7xoY3Lts8lt47BZHz.jpeg",
    alt: "Professional installation service",
    category: "installation",
  },
  {
    id: 8,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2676.JPG-sTNsrgPh2zfiRzs5HNJfPzLKMXZ4mh.jpeg",
    alt: "Security monitoring center installation",
    category: "office",
  },
]

const stats = [
  {
    icon: Building2,
    value: "500+",
    labelTh: "ลูกค้าองค์กร",
    labelEn: "Corporate Clients",
  },
  {
    icon: CheckCircle,
    value: "2,000+",
    labelTh: "เครื่องติดตั้ง",
    labelEn: "Installations",
  },
  {
    icon: Users,
    value: "15+",
    labelTh: "ปีประสบการณ์",
    labelEn: "Years Experience",
  },
  {
    icon: Wrench,
    value: "24/7",
    labelTh: "บริการซ่อมบำรุง",
    labelEn: "Maintenance Support",
  },
]

export default function PortfolioPage() {
  const { t, language } = useLanguage()

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                {language === "th" ? "ผลงานของเรา" : "Our Work"}
              </h1>
              <p className="text-lg md:text-xl text-slate-300 text-pretty">
                {language === "th"
                  ? "ภาพรวมการติดตั้งและบริการของเราให้กับองค์กรชั้นนำทั่วประเทศ พร้อมทีมงานมืออาชีพและบริการหลังการขายที่ครบวงจร"
                  : "Overview of our installations and services for leading organizations nationwide, with professional teams and comprehensive after-sales service"}
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-white border-b">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <div key={index} className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#C94444]/10 mb-4">
                      <Icon className="w-6 h-6 text-[#C94444]" />
                    </div>
                    <div className="text-3xl font-bold text-slate-900 mb-2">{stat.value}</div>
                    <div className="text-sm text-slate-600">{language === "th" ? stat.labelTh : stat.labelEn}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Portfolio Gallery */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                {language === "th" ? "โครงการที่ผ่านมา" : "Recent Projects"}
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                {language === "th"
                  ? "ตัวอย่างการติดตั้งและบริการของเราในสภาพแวดล้อมการทำงานที่หลากหลาย"
                  : "Examples of our installations and services in various work environments"}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {portfolioImages.map((image) => (
                <div
                  key={image.id}
                  className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 bg-white"
                >
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <p className="text-sm font-medium capitalize">{image.category}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
                {language === "th" ? "บริการของเรา" : "Our Services"}
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-[#C94444]/10 flex items-center justify-center">
                      <Building2 className="w-6 h-6 text-[#C94444]" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">
                      {language === "th" ? "ติดตั้งและส่งมอบ" : "Installation & Delivery"}
                    </h3>
                    <p className="text-slate-600 text-sm">
                      {language === "th"
                        ? "บริการติดตั้งและส่งมอบอุปกรณ์ถึงที่ พร้อมทีมช่างมืออาชีพ"
                        : "Professional installation and delivery service with expert technicians"}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-[#C94444]/10 flex items-center justify-center">
                      <Users className="w-6 h-6 text-[#C94444]" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">
                      {language === "th" ? "อบรมการใช้งาน" : "Training & Support"}
                    </h3>
                    <p className="text-slate-600 text-sm">
                      {language === "th"
                        ? "อบรมการใช้งานและให้คำปรึกษาเพื่อการใช้งานที่มีประสิทธิภาพสูงสุด"
                        : "Training and consultation for optimal equipment usage"}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-[#C94444]/10 flex items-center justify-center">
                      <Wrench className="w-6 h-6 text-[#C94444]" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{language === "th" ? "ซ่อมบำรุง" : "Maintenance"}</h3>
                    <p className="text-slate-600 text-sm">
                      {language === "th"
                        ? "บริการซ่อมบำรุงและดูแลอุปกรณ์ตลอดระยะเวลาการเช่า"
                        : "Comprehensive maintenance service throughout the rental period"}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-[#C94444]/10 flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-[#C94444]" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">
                      {language === "th" ? "รับประกันคุณภาพ" : "Quality Guarantee"}
                    </h3>
                    <p className="text-slate-600 text-sm">
                      {language === "th"
                        ? "รับประกันคุณภาพอุปกรณ์และบริการด้วยมาตรฐานสากล"
                        : "Quality guarantee for equipment and services with international standards"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-[#C94444] to-[#A03636] text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">
              {language === "th" ? "พร้อมเริ่มต้นโครงการของคุณ?" : "Ready to Start Your Project?"}
            </h2>
            <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
              {language === "th"
                ? "ติดต่อเราวันนี้เพื่อรับคำปรึกษาและใบเสนอราคาฟรี"
                : "Contact us today for free consultation and quotation"}
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-[#C94444] px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition-colors"
            >
              {language === "th" ? "ติดต่อเรา" : "Contact Us"}
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
