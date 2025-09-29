import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, Clock, MessageSquare, FileText, Headphones } from "lucide-react"

const contactMethods = [
  {
    icon: Phone,
    title: "โทรศัพท์",
    description: "สำหรับการติดต่อด่วนและขอคำปรึกษา",
    contact: "064-797-9944",
    available: "24 ชั่วโมง ทุกวัน",
  },
  {
    icon: Mail,
    title: "อีเมล",
    description: "สำหรับการสอบถามทั่วไปและขอใบเสนอราคา",
    contact: "thadacopy@gmail.com",
    available: "ตอบกลับภายใน 2 ชั่วโมง",
  },
  {
    icon: MessageSquare,
    title: "Line Official",
    description: "สำหรับการสอบถามและติดตามสถานะ",
    contact: "@thada-official",
    available: "จันทร์-ศุกร์ 8:00-17:00 น.",
  },
]

const serviceTypes = [
  "ขอใบเสนอราคาเช่าเครื่อง",
  "สอบถามบริการซ่อมบำรุง",
  "ปัญหาการใช้งานเครื่อง",
  "ขอเปลี่ยนแปลงแพ็คเกจ",
  "ร้องเรียนหรือข้อเสนอแนะ",
  "อื่นๆ",
]

const officeHours = [
  {
    day: "จันทร์ - ศุกร์",
    time: "8:00 - 17:00 น.",
    type: "บริการทั่วไป",
  },
  {
    day: "เสาร์ - อาทิตย์",
    time: "9:00 - 16:00 น.",
    type: "บริการฉุกเฉิน",
  },
  {
    day: "ทุกวัน",
    time: "24 ชั่วโมง",
    type: "สายด่วนฉุกเฉิน",
  },
]

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-red-50 to-red-100 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/contact-support.jpg"
            alt="Contact support team"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">ติดต่อเรา</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 text-pretty">
            พร้อมให้คำปรึกษาและตอบทุกคำถามเกี่ยวกับบริการเช่าและซ่อมบำรุงเครื่องถ่ายเอกสาร
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">ช่องทางการติดต่อ</h2>
            <p className="text-lg text-muted-foreground">เลือกช่องทางที่สะดวกสำหรับคุณ</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {contactMethods.map((method, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-8">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <method.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{method.title}</h3>
                  <p className="text-muted-foreground mb-4">{method.description}</p>
                  <div className="text-lg font-semibold text-primary mb-2">{method.contact}</div>
                  <p className="text-sm text-muted-foreground">{method.available}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">ส่งข้อความถึงเรา</h2>
              <p className="text-lg text-muted-foreground">กรอกแบบฟอร์มด้านล่าง เราจะติดต่อกลับภายใน 2 ชั่วโมง</p>
            </div>

            <Card>
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">ชื่อ *</label>
                      <Input placeholder="กรอกชื่อของคุณ" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">นามสกุล *</label>
                      <Input placeholder="กรอกนามสกุลของคุณ" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">อีเมล *</label>
                      <Input type="email" placeholder="example@company.com" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">เบอร์โทรศัพท์ *</label>
                      <Input placeholder="08X-XXX-XXXX" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">บริษัท/องค์กร</label>
                      <Input placeholder="ชื่อบริษัทหรือองค์กร" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">ประเภทการติดต่อ *</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="เลือกประเภทการติดต่อ" />
                        </SelectTrigger>
                        <SelectContent>
                          {serviceTypes.map((type, index) => (
                            <SelectItem key={index} value={type}>
                              {type}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">รายละเอียด *</label>
                    <Textarea placeholder="กรุณาระบุรายละเอียดของความต้องการหรือปัญหาที่พบ..." rows={6} />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" className="flex-1 text-lg py-6">
                      <FileText className="mr-2 h-5 w-5" />
                      ส่งข้อความ
                    </Button>
                    <Button size="lg" variant="outline" className="flex-1 text-lg py-6 bg-transparent">
                      <Phone className="mr-2 h-5 w-5" />
                      โทรเลย 02-123-4567
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Office Hours */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">เวลาทำการ</h2>
            <p className="text-lg text-muted-foreground">เราพร้อมให้บริการตามเวลาดังนี้</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {officeHours.map((schedule, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-8">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Clock className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{schedule.day}</h3>
                  <div className="text-2xl font-bold text-primary mb-2">{schedule.time}</div>
                  <p className="text-muted-foreground">{schedule.type}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-20 bg-red-50">
        <div className="container mx-auto px-6">
          <Card className="max-w-2xl mx-auto border-red-200">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Headphones className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-2xl text-primary">สายด่วนฉุกเฉิน</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-6">หากเครื่องถ่ายเอกสารของคุณเสียและต้องการความช่วยเหลือด่วน</p>
              <div className="text-3xl font-bold text-primary mb-4">02-123-4567</div>
              <p className="text-sm text-muted-foreground mb-6">
                บริการ 24 ชั่วโมง ทุกวัน
                <br />
                ทีมช่างพร้อมออกให้บริการภายใน 2 ชั่วโมง
              </p>
              <Button className="bg-primary hover:bg-primary/90">
                <Phone className="mr-2 h-5 w-5" />
                โทรเลย
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}
