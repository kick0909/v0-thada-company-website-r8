"use client"

import { useState } from "react"
import { ChevronDown, ChevronRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

interface FilterState {
  brands: string[]
  types: string[]
  priceRanges: string[]
}

interface ProductFiltersProps {
  filters?: FilterState
  onFilterChange?: (filters: FilterState) => void
}

export function ProductFilters({ filters, onFilterChange }: ProductFiltersProps) {
  const { t } = useLanguage()
  const [expandedSections, setExpandedSections] = useState<string[]>(["brand", "type"])

  const safeFilters = filters || { brands: [], types: [], priceRanges: [] }
  const safeOnFilterChange = onFilterChange || (() => {})

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => (prev.includes(section) ? prev.filter((s) => s !== section) : [...prev, section]))
  }

  const handleBrandChange = (brand: string) => {
    const newBrands = safeFilters.brands.includes(brand)
      ? safeFilters.brands.filter((b) => b !== brand)
      : [...safeFilters.brands, brand]
    safeOnFilterChange({ ...safeFilters, brands: newBrands })
  }

  const handleTypeChange = (type: string) => {
    const newTypes = safeFilters.types.includes(type)
      ? safeFilters.types.filter((t) => t !== type)
      : [...safeFilters.types, type]
    safeOnFilterChange({ ...safeFilters, types: newTypes })
  }

  const handlePriceRangeChange = (range: string) => {
    const newRanges = safeFilters.priceRanges.includes(range)
      ? safeFilters.priceRanges.filter((r) => r !== range)
      : [...safeFilters.priceRanges, range]
    safeOnFilterChange({ ...safeFilters, priceRanges: newRanges })
  }

  return (
    <div className="bg-card rounded-2xl shadow-lg border border-border p-8">
      <h3 className="font-serif text-2xl font-light text-foreground mb-6">{t("th", "กรองสินค้า", "Filter Products")}</h3>

      {/* Brand Filter */}
      <div className="mb-6">
        <button
          onClick={() => toggleSection("brand")}
          className="flex items-center justify-between w-full text-left font-semibold text-foreground mb-3 p-3 rounded-xl hover:bg-muted transition-colors duration-200"
        >
          <span>{t("th", "ยี่ห้อ", "Brand")}</span>
          {expandedSections.includes("brand") ? (
            <ChevronDown className="h-5 w-5 text-primary" />
          ) : (
            <ChevronRight className="h-5 w-5 text-muted-foreground" />
          )}
        </button>
        {expandedSections.includes("brand") && (
          <div className="space-y-3 ml-4">
            {["Canon", "Xerox", "Sharp", "Brother", "HP", "Ricoh"].map((brand) => (
              <label key={brand} className="flex items-center space-x-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={safeFilters.brands.includes(brand)}
                  onChange={() => handleBrandChange(brand)}
                  className="rounded border-border text-primary focus:ring-primary focus:ring-2"
                />
                <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                  {brand}
                </span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Type Filter */}
      <div className="mb-6">
        <button
          onClick={() => toggleSection("type")}
          className="flex items-center justify-between w-full text-left font-semibold text-foreground mb-3 p-3 rounded-xl hover:bg-muted transition-colors duration-200"
        >
          <span>{t("th", "ประเภท", "Type")}</span>
          {expandedSections.includes("type") ? (
            <ChevronDown className="h-5 w-5 text-primary" />
          ) : (
            <ChevronRight className="h-5 w-5 text-muted-foreground" />
          )}
        </button>
        {expandedSections.includes("type") && (
          <div className="space-y-3 ml-4">
            {["เครื่องถ่ายเอกสาร", "เครื่องพิมพ์", "เครื่องสแกน", "Multifunction"].map((type) => (
              <label key={type} className="flex items-center space-x-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={safeFilters.types.includes(type)}
                  onChange={() => handleTypeChange(type)}
                  className="rounded border-border text-primary focus:ring-primary focus:ring-2"
                />
                <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                  {type}
                </span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Rental Price Range */}
      <div className="mb-6">
        <button
          onClick={() => toggleSection("price")}
          className="flex items-center justify-between w-full text-left font-semibold text-foreground mb-3 p-3 rounded-xl hover:bg-muted transition-colors duration-200"
        >
          <span>{t("th", "ค่าเช่ารายเดือน", "Monthly Rental")}</span>
          {expandedSections.includes("price") ? (
            <ChevronDown className="h-5 w-5 text-primary" />
          ) : (
            <ChevronRight className="h-5 w-5 text-muted-foreground" />
          )}
        </button>
        {expandedSections.includes("price") && (
          <div className="space-y-3 ml-4">
            {["ต่ำกว่า ฿2,000", "฿2,000 - ฿3,500", "฿3,500 - ฿5,000", "มากกว่า ฿5,000"].map((range) => (
              <label key={range} className="flex items-center space-x-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={safeFilters.priceRanges.includes(range)}
                  onChange={() => handlePriceRangeChange(range)}
                  className="rounded border-border text-primary focus:ring-primary focus:ring-2"
                />
                <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                  {range}
                </span>
              </label>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export type { FilterState }
