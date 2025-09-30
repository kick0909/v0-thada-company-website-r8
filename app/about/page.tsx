import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Users, Award, Clock, MapPin } from "lucide-react"

const achievements = [
  {
    number: "15+",
    label: "ปีของประสบการณ์",
    description: "ในธุรกิจเช่าและบำรุงรักษาเครื่องถ่ายเอกสาร",
  },
  {
    number: "500+",
    label: "ลูกค้าที่ไว้วางใจ",
    description: "ทั้งองค์กรเอกชนและหน่วยงานราชการ",
  },
  {
    number: "24/7",
    label: "บริการตลอดเวลา",
    description: "ทีมช่างพร้อมให้บริการทุกวันตลอด 24 ชั่วโมง",
  },
  {
    number: "99%",
    label: "ความพึงพอใจ",
    description: "จากการสำรวจความพึงพอใจของลูกค้า",
  },
]

const values = [
  {
    icon: CheckCircle,
    title: "ความน่าเชื่อถือ",
    description: "เราให้คำมั่นสัญญาและปฏิบัติตามอย่างเคร่งครัด ด้วยประสบการณ์กว่า 15 ปี",
  },
  {
    icon: Users,
    title: "บริการที่เป็นเลิศ",
    description: "ทีมงานมืออาชีพพร้อมให้คำปรึกษาและแก้ไขปัญหาอย่างรวดเร็ว",
  },
  {
    icon: Award,
    title: "คุณภาพสูง",
    description: "ใช้เครื่องและชิ้นส่วนแท้จากผู้ผลิตชั้นนำ พร้อมมาตรฐานการบริการระดับสากล",
  },
  {
    icon: Clock,
    title: "ตรงเวลา",
    description: "บริการติดตั้ง ซ่อมบำรุง และสนับสนุนตรงเวลาตามที่นัดหมาย",
  },
]

const timeline = [
  {
    year: "2008",
    title: "ก่อตั้งบริษัท",
    description: "เริ่มต้นธุรกิจด้วยการให้บริการซ่อมเครื่องถ่ายเอกสาร",
  },
  {
    year: "2012",
    title: "ขยายบริการเช่า",
    description: "เพิ่มบริการเช่าเครื่องถ่ายเอกสารระยะยาว",
  },
  {
    year: "2016",
    title: "พันธมิตรอย่างเป็นทางการ",
    description: "เป็นพันธมิตรอย่างเป็นทางการกับ Canon และ Xerox",
  },
  {
    year: "2020",
    title: "บริการดิจิทัล",
    description: "เพิ่มบริการจัดการเอกสารดิจิทัลและระบบคลาวด์",
  },
  {
    year: "2024",
    title: "ขยายทีม",
    description: "ขยายทีมช่างและพื้นที่บริการครอบคลุมทั่วกรุงเทพฯ",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-red-600 via-red-500 to-orange-500"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance text-white drop-shadow-lg">
                เกี่ยวกับ THADA
              </h1>
              <p className="text-xl text-white/90 mb-8 text-pretty drop-shadow">
                ผู้นำด้านบริการเช่าและบำรุงรักษาเครื่องถ่ายเอกสารในประเทศไทย ด้วยประสบการณ์กว่า 15 ปี และความมุ่งมั่นในการให้บริการที่เป็นเลิศ
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8 py-6 bg-white text-primary hover:bg-white/90">
                  ติดต่อเรา
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-6 bg-transparent border-white text-white hover:bg-white/10"
                >
                  ดูแพ็คเกจเช่า
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-red-500/30 to-orange-500/30 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/20 shadow-2xl">
                <div className="text-center">
                  <div className="text-6xl font-bold text-white mb-4 drop-shadow-lg">15+</div>
                  <div className="text-xl text-white/90 drop-shadow">ปีของประสบการณ์</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-8">
                  <div className="text-4xl font-bold text-primary mb-2">{achievement.number}</div>
                  <h3 className="text-xl font-semibold mb-3">{achievement.label}</h3>
                  <p className="text-muted-foreground text-sm">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">ค่านิยมของเรา</h2>
            <p className="text-lg text-muted-foreground">หลักการที่เราใช้ในการให้บริการลูกค้าทุกท่าน</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {values.map((value, index) => (
              <Card key={index} className="bg-background">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <value.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                      <p className="text-muted-foreground">{value.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">เส้นทางการเติบโต</h2>
            <p className="text-lg text-muted-foreground">ประวัติการพัฒนาและเติบโตของเราตลอด 15 ปี</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-red-200 hidden md:block"></div>

              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <div key={index} className="relative flex items-start gap-8">
                    {/* Timeline dot */}
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0 relative z-10">
                      {item.year.slice(-2)}
                    </div>

                    <Card className="flex-1">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <Badge variant="outline">{item.year}</Badge>
                          <h3 className="text-xl font-semibold">{item.title}</h3>
                        </div>
                        <p className="text-muted-foreground">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">ที่ตั้งของเรา</h2>
            <p className="text-lg text-muted-foreground">พร้อมให้บริการทั่วกรุงเทพมหานครและปริมณฑล</p>
          </div>

          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">สำนักงานใหญ่</h3>
              <p className="text-muted-foreground mb-6">
                กรุงเทพมหานคร ประเทศไทย
                <br />
                โทร: 064-797-9944
                <br />
                อีเมล: thadacopy@gmail.com
              </p>
              <p className="text-sm text-muted-foreground">
                เปิดบริการ: จันทร์-ศุกร์ 8:00-17:00 น.
                <br />
                บริการฉุกเฉิน: 24 ชั่วโมง ทุกวัน
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}
