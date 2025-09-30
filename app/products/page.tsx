"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductGrid } from "@/components/product-grid"
import { ProductFilters, type FilterState } from "@/components/product-filters"
import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"

export default function ProductsPage() {
  const { t } = useLanguage()
  const [filters, setFilters] = useState<FilterState>({
    brands: [],
    types: [],
    priceRanges: [],
  })
  const [sortBy, setSortBy] = useState("default")

  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-6 sm:pt-8 pb-12 sm:pb-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">{t("productsTitle")}</h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">{t("productsSubtitle")}</p>
          </div>

          <div className="mb-8 sm:mb-12">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#C94444] to-[#A03636] p-8 sm:p-12 text-white shadow-xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />

              <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="text-center sm:text-left">
                  <div className="flex items-center justify-center sm:justify-start gap-2 mb-3">
                    <Sparkles className="w-6 h-6" />
                    <span className="text-lg font-semibold">{t("promoTitle")}</span>
                  </div>
                  <h2 className="text-4xl sm:text-5xl font-bold mb-2">{t("promoDiscount")}</h2>
                  <p className="text-xl sm:text-2xl mb-2 text-white/90">{t("promoDescription")}</p>
                  <p className="text-sm sm:text-base text-white/80 font-mono bg-white/20 inline-block px-4 py-2 rounded-lg">
                    {t("promoSubtext")}
                  </p>
                </div>
                <Button
                  size="lg"
                  className="bg-white text-[#C94444] hover:bg-white/90 font-semibold px-8 py-6 text-lg shadow-lg"
                >
                  {t("promoCTA")}
                </Button>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 xl:gap-12">
            <div className="w-full lg:w-72 flex-shrink-0">
              <ProductFilters filters={filters} onFilterChange={setFilters} />
            </div>
            <div className="flex-1 min-w-0">
              <ProductGrid filters={filters} sortBy={sortBy} onSortChange={setSortBy} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
