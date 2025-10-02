import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Printer, Settings, Headphones } from "lucide-react"

const rentalPackages = [
  {
    name: "แพ็คเกจเริ่มต้น",
    price: "2,500",
    period: "เดือน",
    description: "เหมาะสำหรับสำนักงานเล็ก 1-10 คน",
    features: [
      "เครื่องถ่ายเอกสาร Canon/Xerox",
      "ความเร็ว 20-25 แผ่น/นาที",
      "ถ่ายเอกสาร A4, A3",
      "บริการซ่อมบำรุงฟรี",
      "หมึกและกระดาษรวมในราคา",
      "ติดตั้งและฝึกอบรมฟรี",
    ],
    popular: false,
  },
  {
    name: "แพ็คเกจมาตรฐาน",
    price: "3,500",
    period: "เดือน",
    description: "เหมาะสำหรับสำนักงานขนาดกลาง 10-30 คน",
    features: [
      "เครื่องถ่ายเอกสารระดับ Premium",
      "ความเร็ว 35-45 แผ่น/นาที",
      "ถ่ายเอกสาร A4, A3, สี/ขาว-ดำ",
      "Scan to Email/Network",
      "บริการซ่อมบำรุงและเปลี่ยนชิ้นส่วน",
      "หมึกและกระดาษไม่จำกัด",
      "บริการ 24/7 Support",
    ],
    popular: true,
  },
  {
    name: "แพ็คเกจองค์กร",
    price: "4,000",
    period: "เดือน",
    description: "เหมาะสำหรับองค์กรใหญ่ 30+ คน",
    features: [
      "เครื่องถ่ายเอกสารระดับอุตสาหกรรม",
      "ความเร็ว 60+ แผ่น/นาที",
      "ถ่ายเอกสารทุกขนาด รวมถึง A0",
      "ระบบจัดการเอกสารขั้นสูง",
      "การรักษาความปลอดภัยข้อมูล",
      "บริการ On-site ตลอด 24 ชั่วโมง",
      "ทีมช่างเฉพาะประจำสำนักงาน",
    ],
    popular: false,
  },
]

const additionalServices = [
  {
    icon: Printer,
    title: "เครื่องพิมพ์เสริม",
    description: "บริการเช่าเครื่องพิมพ์เลเซอร์และ Inkjet เพิ่มเติม",
  },
  {
    icon: Settings,
    title: "ติดตั้งระบบเครือข่าย",
    description: "ติดตั้งและตั้งค่าเครื่องให้เชื่อมต่อกับระบบเครือข่ายของคุณ",
  },
  {
    icon: Headphones,
    title: "ฝึกอบรมการใช้งาน",
    description: "ฝึกอบรมพนักงานให้ใช้งานเครื่องได้อย่างมีประสิทธิภาพ",
  },
]

export default function RentalPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#C94444]"></div>
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance text-white drop-shadow-lg">
            แพ็คเกจเช่าเครื่องถ่ายเอกสาร
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8 text-pretty drop-shadow">
            เลือกแพ็คเกจที่เหมาะสมกับความต้องการของธุรกิจคุณ พร้อมบริการซ่อมบำรุงและสนับสนุนตลอด 24 ชั่วโมง
          </p>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">เลือกแพ็คเกจที่เหมาะกับคุณ</h2>
            <p className="text-lg text-muted-foreground">ราคาโปร่งใส ไม่มีค่าใช้จ่ายแอบแฝง</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {rentalPackages.map((pkg, index) => (
              <Card key={index} className={`relative ${pkg.popular ? "border-primary shadow-lg scale-105" : ""}`}>
                {pkg.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary">แนะนำ</Badge>
                )}
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-bold">{pkg.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-primary">฿{pkg.price}</span>
                    <span className="text-muted-foreground">/{pkg.period}</span>
                  </div>
                  <p className="text-muted-foreground mt-2">{pkg.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" variant={pkg.popular ? "default" : "outline"}>
                    ขอใบเสนอราคา
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">บริการเสริม</h2>
            <p className="text-lg text-muted-foreground">บริการเพิ่มเติมเพื่อตอบสนองความต้องการที่หลากหลาย</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {additionalServices.map((service, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-8">
                  <div className="w-16 h-16 bg-[#C94444]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
