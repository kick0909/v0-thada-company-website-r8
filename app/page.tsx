"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ContactSidebar } from "@/components/contact-sidebar"
import { ProductGrid } from "@/components/product-grid"
import { ProductFilters, type FilterState } from "@/components/product-filters"

export default function Home() {
  const [filters, setFilters] = useState<FilterState>({
    brands: [],
    types: [],
    priceRanges: [],
  })
  const [sortBy, setSortBy] = useState("default")

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 xl:gap-12">
          <div className="w-full lg:w-72 flex-shrink-0 space-y-6 lg:space-y-8">
            <ContactSidebar />
            <ProductFilters filters={filters} onFilterChange={setFilters} />
          </div>
          <div className="flex-1 min-w-0">
            <ProductGrid filters={filters} sortBy={sortBy} onSortChange={setSortBy} />
          </div>
        </div>
      </div>
    </main>
  )
}
