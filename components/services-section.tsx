import { Card, CardContent } from "@/components/ui/card"
import { Building2, Cog, Users, Zap } from "lucide-react"

const services = [
  {
    icon: Building2,
    title: "Enterprise Solutions",
    description: "Comprehensive business solutions tailored to your organization's unique needs and growth objectives.",
  },
  {
    icon: Cog,
    title: "Technology Integration",
    description: "Seamless integration of cutting-edge technology to optimize your business processes and efficiency.",
  },
  {
    icon: Users,
    title: "Consulting Services",
    description: "Expert guidance and strategic consulting to help you navigate complex business challenges.",
  },
  {
    icon: Zap,
    title: "Innovation & Growth",
    description:
      "Drive innovation and accelerate growth with our forward-thinking approach to business transformation.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Our Core Services</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            We provide comprehensive solutions designed to elevate your business and drive sustainable growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 bg-background">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <service.icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-3 text-balance">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-pretty">{service.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
