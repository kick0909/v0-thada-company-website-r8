import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

const achievements = [
  "Over 500 successful projects delivered",
  "15+ years of industry experience",
  "Award-winning customer service",
  "Global presence across 25+ countries",
]

export function AboutSection() {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-balance">
              Combining innovation, reliability, and excellence
            </h2>

            <p className="text-xl text-muted-foreground mb-8 leading-relaxed text-pretty">
              Thada stands at the forefront of business transformation, delivering innovative solutions that drive
              sustainable growth and operational excellence for organizations worldwide.
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
              Learn More About Us
            </Button>
          </div>

          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center">
              <div className="w-3/4 h-3/4 bg-background rounded-xl shadow-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-bold text-primary mb-4">15+</div>
                  <div className="text-xl text-muted-foreground">Years of Excellence</div>
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
