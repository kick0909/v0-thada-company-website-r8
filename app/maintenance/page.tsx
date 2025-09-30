import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Wrench, Clock, Shield, Phone, Calendar, AlertTriangle } from "lucide-react"

const maintenanceServices = [
  {
    icon: Wrench,
    title: "บำรุงรักษาเชิงป้องกัน",
    description: "ตรวจสอบและบำรุงรักษาเครื่องอย่างสม่ำเสมอเพื่อป้องกันปัญหา",
    features: ["ทำความสะอาดเครื่องภายในและภายนอก", "ตรวจสอบชิ้นส่วนสำคัญ", "เปลี่ยนน้ำมันและสารหล่อลื่น", "ปรับแต่งคุณภาพการพิมพ์"],
  },
  {
    icon: AlertTriangle,
    title: "ซ่อมแซมเมื่อเกิดปัญหา",
    description: "บริการซ่อมแซมด่วนเมื่อเครื่องเสีย พร้อมชิ้นส่วนแท้",
    features: ["วินิจฉัยปัญหาอย่างรวดเร็ว", "ใช้ชิ้นส่วนแท้จากผู้ผลิต", "รับประกันการซ่อม 90 วัน", "บริการ On-site ถึงที่ทำงาน"],
  },
  {
    icon: Shield,
    title: "ตรวจสอบระบบความปลอดภัย",
    description: "ตรวจสอบและอัพเดทระบบรักษาความปลอดภัยข้อมูล",
    features: ["ตรวจสอบการเข้ารหัสข้อมูล", "อัพเดท Firmware ล่าสุด", "ตั้งค่าการควบคุมการเข้าถึง", "สำรองข้อมูลการตั้งค่า"],
  },
]

const servicePackages = [
  {
    name: "แพ็คเกจพื้นฐาน",
    price: "ฟรี",
    description: "สำหรับลูกค้าเช่าเครื่อง",
    features: ["บำรุงรักษาเชิงป้องกัน 2 ครั้ง/ปี", "ซ่อมแซมเมื่อเกิดปัญหา", "หมึกและกระดาษรวมในราคา", "สนับสนุนทางโทรศัพท์"],
    included: true,
  },
  {
    name: "แพ็คเกจพรีเมียม",
    price: "1,500",
    period: "เดือน",
    description: "สำหรับลูกค้าที่ต้องการบริการเพิ่มเติม",
    features: [
      "บำรุงรักษาเชิงป้องกัน 4 ครั้ง/ปี",
      "บริการ Priority Support",
      "เปลี่ยนชิ้นส่วนก่อนเสีย",
      "รายงานสถานะเครื่องรายเดือน",
      "บริการ 24/7 Emergency",
    ],
    included: false,
  },
]

const responseTime = [
  {
    type: "ปัญหาเร่งด่วน",
    time: "2 ชั่วโมง",
    description: "เครื่องเสียไม่สามารถใช้งานได้",
  },
  {
    type: "ปัญหาทั่วไป",
    time: "4 ชั่วโมง",
    description: "เครื่องใช้งานได้แต่มีปัญหา",
  },
  {
    type: "บำรุงรักษาตามกำหนด",
    time: "1-2 วัน",
    description: "นัดหมายล่วงหน้าตามแผน",
  },
]

export default function MaintenancePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-red-600"></div>
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance text-white drop-shadow-lg">
            บริการซ่อมบำรุงเครื่องถ่ายเอกสาร
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8 text-pretty drop-shadow">
            ทีมช่างผู้เชี่ยวชาญพร้อมดูแลเครื่องของคุณให้ทำงานได้อย่างมีประสิทธิภาพตลอดเวลา
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6 bg-white text-primary hover:bg-white/90">
              <Phone className="mr-2 h-5 w-5" />
              โทรขอบริการ 064-797-9944
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 bg-transparent border-white text-white hover:bg-white/10"
            >
              <Calendar className="mr-2 h-5 w-5" />
              นัดหมายล่วงหน้า
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">บริการซ่อมบำรุงของเรา</h2>
            <p className="text-lg text-muted-foreground">ครอบคลุมทุกความต้องการในการดูแลเครื่องถ่ายเอกสาร</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {maintenanceServices.map((service, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Response Time */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">เวลาตอบสนอง</h2>
            <p className="text-lg text-muted-foreground">เราให้ความสำคัญกับการตอบสนองอย่างรวดเร็ว</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {responseTime.map((item, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-8">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.type}</h3>
                  <div className="text-3xl font-bold text-primary mb-2">{item.time}</div>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">แพ็คเกจบริการ</h2>
            <p className="text-lg text-muted-foreground">เลือกระดับการดูแลที่เหมาะสมกับความต้องการ</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {servicePackages.map((pkg, index) => (
              <Card key={index} className={`${pkg.included ? "border-primary bg-red-50" : ""}`}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                    {pkg.included && <Badge className="bg-primary">รวมในแพ็คเกจเช่า</Badge>}
                  </div>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-primary">{pkg.price}</span>
                    {pkg.period && <span className="text-muted-foreground">/{pkg.period}</span>}
                  </div>
                  <p className="text-muted-foreground">{pkg.description}</p>
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
                  <Button className="w-full" variant={pkg.included ? "secondary" : "default"}>
                    {pkg.included ? "รวมในแพ็คเกจแล้ว" : "เพิ่มบริการนี้"}
                  </Button>
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
