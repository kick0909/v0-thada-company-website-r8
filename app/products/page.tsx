"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductGrid } from "@/components/product-grid"
import { ProductFilters, type FilterState } from "@/components/product-filters"
import { useLanguage } from "@/lib/language-context"

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
