import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

const achievements = [
  "ดูแลและส่งมอบงานให้ลูกค้ากว่า 500 โครงการแล้ว",
  "มีประสบการณ์ทำงานมากกว่า 15 ปี",
  "การันตีด้วยรางวัลด้านการบริการลูกค้า",
  "ลูกค้าทั่วโลกในกว่า 25 ประเทศไว้วางใจเรา",
]

export function AboutSection() {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-balance">
              สร้างสรรค์นวัตกรรม มั่นใจได้ในคุณภาพ และบริการที่จริงใจ
            </h2>

            <p className="text-xl text-muted-foreground mb-8 leading-relaxed text-pretty">
              Thada พร้อมเคียงข้างธุรกิจของคุณ
              ด้วยโซลูชันที่ช่วยให้การทำงานง่ายขึ้น เติบโตได้อย่างยั่งยืน
              และสร้างผลลัพธ์ที่ดีที่สุดให้กับองค์กรของคุณ
            </p>

            <div className="space-y-4 mb-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                  <span className="text-lg">{achievement}</span>
                </div>
              ))}
            </div>

            <Button size="lg" className="text-lg px-8 py-6">
              รู้จักเราให้มากขึ้น
            </Button>
          </div>

          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center">
              <div className="w-3/4 h-3/4 bg-background rounded-xl shadow-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-bold text-primary mb-4">15+</div>
                  <div className="text-xl text-muted-foreground">ปีแห่งความไว้วางใจ</div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
              500+
            </div>
            <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-accent rounded-full flex items-center justify-center text-white font-bold">
              25+
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
