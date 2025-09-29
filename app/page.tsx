import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ContactSidebar } from "@/components/contact-sidebar"
import { ProductGrid } from "@/components/product-grid"
import { ProductFilters } from "@/components/product-filters"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <div className="container mx-auto px-6 py-12">
        <div className="flex gap-8 lg:gap-12">
          <div className="w-72 flex-shrink-0 space-y-8">
            <ContactSidebar />
            <ProductFilters />
          </div>
          <div className="flex-1">
            <ProductGrid />
          </div>
        </div>
      </div>
    </main>
  )
}
