import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative bg-card overflow-hidden">
      <div className="container mx-auto pr-6 py-20">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-transparent transform -skew-y-1 origin-top-left h-full w-3/4 shadow-2xl"></div>

          <div className="relative z-10 flex items-center min-h-[500px]">
            <div className="w-1/2 text-primary-foreground pr-12 pl-12">
              <h1 className="font-serif text-5xl md:text-7xl font-light mb-6 leading-tight tracking-tight">
                เช่าเครื่องถ่ายเอกสาร
                <br />
                <span className="text-4xl md:text-5xl font-light">คุณภาพระดับมืออาชีพ</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 leading-relaxed font-light">
                บริการเช่าเครื่องถ่ายเอกสาร เครื่องพิมพ์ และอุปกรณ์สำนักงาน
                <br />
                พร้อมบริการบำรุงรักษาครบวงจร
              </p>
              <div className="flex space-x-4">
                <Button className="bg-card text-primary hover:bg-card/90 px-8 py-4 text-lg font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  ดูแพ็คเกจเช่า
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-4 text-lg font-medium rounded-xl transition-all duration-300 bg-transparent"
                >
                  ปรึกษาฟรี
                </Button>
              </div>
            </div>

            <div className="w-1/2 flex justify-end items-center">
              <div className="flex space-x-6">
                <div className="transform hover:scale-105 transition-transform duration-300">
                  <img
                    src="/modern-office-printer-copier-machine-white.jpg"
                    alt="Premium Office Printer"
                    className="h-72 w-auto object-contain drop-shadow-2xl"
                  />
                </div>
                <div className="transform hover:scale-105 transition-transform duration-300 mt-8">
                  <img
                    src="/large-office-multifunction-printer-scanner-white.jpg"
                    alt="Multifunction Office Solution"
                    className="h-72 w-auto object-contain drop-shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
