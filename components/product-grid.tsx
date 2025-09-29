import { Button } from "@/components/ui/button"
import { Eye, Heart } from "lucide-react"

const products = [
  {
    id: 1,
    name: "Canon imageRUNNER 2630i",
    image: "/canon-office-printer-copier-machine-white-backgrou.jpg",
    features: ["เช่ารายเดือนเริ่มต้น ฿3,500", "ความเร็ว 30 หน้าต่อนาที", "พิมพ์ 2 หน้าอัตโนมัติ", "รวมบริการบำรุงรักษา"],
    isNew: false,
    isHot: true,
    rentalPrice: "฿3,500/เดือน",
  },
  {
    id: 2,
    name: "Canon imageRUNNER 2645i",
    image: "/canon-large-office-multifunction-printer-white.jpg",
    features: ["เช่ารายเดือนเริ่มต้น ฿4,800", "ความเร็ว 45 หน้าต่อนาที", "Multifunction ครบครัน", "รวมบริการบำรุงรักษา"],
    isNew: true,
    isHot: false,
    rentalPrice: "฿4,800/เดือน",
  },
  {
    id: 3,
    name: "Canon PIXMA G6470",
    image: "/canon-inkjet-printer-compact-white-background.jpg",
    features: ["เช่ารายเดือนเริ่มต้น ฿1,200", "เครื่องพิมพ์สี Inkjet", "ประหยัดค่าหมึก", "เหมาะสำหรับงานกราฟิก"],
    isNew: false,
    isHot: false,
    rentalPrice: "฿1,200/เดือน",
  },
  {
    id: 4,
    name: "Canon imageRUNNER 2545i",
    image: "/canon-office-copier-machine-medium-size-white.jpg",
    features: ["เช่ารายเดือนเริ่มต้น ฿4,200", "ความเร็ว 45 หน้าต่อนาที", "เชื่อมต่อ Wi-Fi", "รวมบริการบำรุงรักษา"],
    isNew: false,
    isHot: true,
    rentalPrice: "฿4,200/เดือน",
  },
  {
    id: 5,
    name: "Xerox DocuCentre S2320",
    image: "/xerox-office-multifunction-printer-white-backgroun.jpg",
    features: ["เช่ารายเดือนเริ่มต้น ฿2,800", "ความเร็ว 20 หน้าต่อนาที", "ประหยัดพลังงาน", "รวมบริการบำรุงรักษา"],
    isNew: true,
    isHot: false,
    rentalPrice: "฿2,800/เดือน",
  },
  {
    id: 6,
    name: "Sharp BP 20M31",
    image: "/sharp-office-printer-copier-black-and-white.jpg",
    features: ["เช่ารายเดือนเริ่มต้น ฿2,500", "ความเร็ว 31 หน้าต่อนาที", "เหมาะสำหรับ SME", "รวมบริการบำรุงรักษา"],
    isNew: false,
    isHot: false,
    rentalPrice: "฿2,500/เดือน",
  },
]

export function ProductGrid() {
  return (
    <div>
      <div className="flex items-center justify-between mb-10">
        <div>
          <h2 className="font-serif text-4xl font-light text-foreground mb-2">แพ็คเกจเช่าเครื่องถ่ายเอกสาร</h2>
          <p className="text-muted-foreground font-medium">บริการเช่าเครื่องถ่ายเอกสารและเครื่องพิมพ์คุณภาพสูง</p>
        </div>
        <div className="text-sm text-muted-foreground bg-muted px-4 py-2 rounded-xl">แสดง 1-6 จาก 24 รายการ</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-card rounded-2xl shadow-lg border border-border hover:shadow-2xl transition-all duration-300 group overflow-hidden"
          >
            <div className="relative p-6">
              {product.isNew && (
                <span className="absolute top-4 left-4 bg-accent text-accent-foreground text-xs px-3 py-1 rounded-full font-semibold shadow-lg">
                  ใหม่
                </span>
              )}
              {product.isHot && (
                <span className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full font-semibold shadow-lg">
                  ยอดนิยม
                </span>
              )}

              <div className="flex justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                <img
                  src={product.image || "/placeholder.svg?height=200&width=200&query=office printer"}
                  alt={product.name}
                  className="h-48 w-auto object-contain drop-shadow-lg"
                />
              </div>

              <h3 className="font-serif text-xl font-light text-foreground mb-4 text-center leading-tight">
                {product.name}
              </h3>

              <ul className="text-sm text-muted-foreground space-y-2 mb-6">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary mr-3 mt-1">•</span>
                    <span className="leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="flex space-x-3">
                <Button className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl py-3 font-medium shadow-lg hover:shadow-xl transition-all duration-300">
                  <Eye className="h-4 w-4 mr-2" />
                  ดูรายละเอียด
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-xl p-3 shadow-lg hover:shadow-xl transition-all duration-300 bg-transparent"
                >
                  <Heart className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <div className="flex space-x-2 bg-muted p-2 rounded-2xl">
          <Button variant="ghost" className="rounded-xl px-4 py-2 hover:bg-card">
            1
          </Button>
          <Button variant="ghost" className="rounded-xl px-4 py-2 hover:bg-card">
            2
          </Button>
          <Button variant="ghost" className="rounded-xl px-4 py-2 hover:bg-card">
            3
          </Button>
          <Button variant="ghost" className="rounded-xl px-4 py-2 hover:bg-card">
            4
          </Button>
          <Button variant="ghost" className="rounded-xl px-4 py-2 hover:bg-card">
            ถัดไป
          </Button>
        </div>
      </div>
    </div>
  )
}
