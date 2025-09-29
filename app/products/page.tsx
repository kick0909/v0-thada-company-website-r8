import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductGrid } from "@/components/product-grid"
import { ProductFilters } from "@/components/product-filters"

export default function ProductsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-8 pb-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">แพ็คเกจเช่าเครื่องถ่ายเอกสาร</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              เลือกแพ็คเกจเช่าที่เหมาะสมกับความต้องการของธุรกิจคุณ พร้อมบริการซ่อมบำรุงครบครัน
            </p>
          </div>
          <div className="flex gap-8 lg:gap-12">
            <div className="w-72 flex-shrink-0">
              <ProductFilters />
            </div>
            <div className="flex-1">
              <ProductGrid />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
