"use client"

import { useState } from "react"
import { ChevronDown, ChevronRight } from "lucide-react"

export function ProductFilters() {
  const [expandedSections, setExpandedSections] = useState<string[]>(["brand", "type"])

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => (prev.includes(section) ? prev.filter((s) => s !== section) : [...prev, section]))
  }

  return (
    <div className="bg-card rounded-2xl shadow-lg border border-border p-8">
      <h3 className="font-serif text-2xl font-light text-foreground mb-6">กรองสินค้า</h3>

      {/* Brand Filter */}
      <div className="mb-6">
        <button
          onClick={() => toggleSection("brand")}
          className="flex items-center justify-between w-full text-left font-semibold text-foreground mb-3 p-3 rounded-xl hover:bg-muted transition-colors duration-200"
        >
          <span>ยี่ห้อ</span>
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
                <input type="checkbox" className="rounded border-border text-primary focus:ring-primary focus:ring-2" />
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
          <span>ประเภท</span>
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
                <input type="checkbox" className="rounded border-border text-primary focus:ring-primary focus:ring-2" />
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
          <span>ค่าเช่ารายเดือน</span>
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
                <input type="checkbox" className="rounded border-border text-primary focus:ring-primary focus:ring-2" />
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
