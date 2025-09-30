import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative bg-card overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-transparent transform -skew-y-1 origin-top-left h-full w-full md:w-3/4 shadow-2xl"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-center min-h-[400px] md:min-h-[500px]">
            <div className="w-full md:w-1/2 text-primary-foreground px-6 sm:px-8 md:pr-12 md:pl-12 py-8 md:py-0">
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-light mb-4 md:mb-6 leading-tight tracking-tight">
                เช่าเครื่องถ่ายเอกสาร
                <br />
                <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light">คุณภาพระดับมืออาชีพ</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 text-primary-foreground/90 leading-relaxed font-light">
                บริการเช่าเครื่องถ่ายเอกสาร เครื่องพิมพ์ และอุปกรณ์สำนักงาน
                <br className="hidden sm:block" />
                พร้อมบริการบำรุงรักษาครบวงจร
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button className="bg-card text-primary hover:bg-card/90 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto">
                  ดูแพ็คเกจเช่า
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium rounded-xl transition-all duration-300 bg-transparent w-full sm:w-auto"
                >
                  ปรึกษาฟรี
                </Button>
              </div>
            </div>

            <div className="hidden sm:flex w-full md:w-1/2 justify-center md:justify-end items-center mt-8 md:mt-0">
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <div className="transform hover:scale-105 transition-transform duration-300">
                  <img
                    src="/modern-office-printer-copier-machine-white.jpg"
                    alt="Premium Office Printer"
                    className="h-48 sm:h-56 md:h-72 w-auto object-contain drop-shadow-2xl mx-auto"
                  />
                </div>
                <div className="transform hover:scale-105 transition-transform duration-300 sm:mt-8">
                  <img
                    src="/large-office-multifunction-printer-scanner-white.jpg"
                    alt="Multifunction Office Solution"
                    className="h-48 sm:h-56 md:h-72 w-auto object-contain drop-shadow-2xl mx-auto"
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
