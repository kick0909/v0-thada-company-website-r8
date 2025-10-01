"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Eye, Heart, ChevronLeft, ChevronRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import type { FilterState } from "./product-filters"
import Link from "next/link"

const products = [
  {
    id: 1,
    name: "Canon C5535",
    brand: "Canon",
    type: "Multifunction",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-NvxaHKgSAYv74IDYsjZ89auoVUqpUG.png",
    features: ["ความเร็ว 30 หน้าต่อนาที", "พิมพ์ 2 หน้าอัตโนมัติ", "รวมบริการบำรุงรักษา"],
    isNew: false,
    isHot: true,
  },
  {
    id: 2,
    name: "Canon ADVC3520",
    brand: "Canon",
    type: "Multifunction",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-y97Slbi9CWzCv3MJTRJsO36p0jZWXB.png",
    features: ["ความเร็ว 45 หน้าต่อนาที", "Multifunction ครบครัน", "รวมบริการบำรุงรักษา"],
    isNew: true,
    isHot: false,
  },
  {
    id: 3,
    name: "Canon ADV DX C3720",
    brand: "Canon",
    type: "เครื่องพิมพ์",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-HJ6ab0BgaOBYir6F0yEGSnM8abhaSf.png",
    features: ["เครื่องพิมพ์สี Inkjet", "ประหยัดค่าหมึก", "เหมาะสำหรับงานกราฟิก"],
    isNew: false,
    isHot: false,
  },
  {
    id: 4,
    name: "Xerox AltaLink B8155",
    brand: "Xerox",
    type: "Multifunction",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-VsXTskxMpXJW3YyNH9244U9cRsD5jA.png",
    features: ["ความเร็ว 55 หน้าต่อนาที", "ขาวดำความละเอียดสูง", "รวมบริการบำรุงรักษา"],
    isNew: true,
    isHot: true,
  },
  {
    id: 5,
    name: "Xerox AltaLink C8170",
    brand: "Xerox",
    type: "Multifunction",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-7H0WNiTrhc6WGOLLvV8VBgmhTMyO3u.png",
    features: ["พิมพ์สี 70 หน้าต่อนาที", "จอสัมผัสขนาดใหญ่", "รวมบริการบำรุงรักษา"],
    isNew: true,
    isHot: true,
  },
  {
    id: 6,
    name: "Xerox AltaLink C8155",
    brand: "Xerox",
    type: "Multifunction",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-jOX2oA0Ist08K1K887m81p9kYethSd.png",
    features: ["พิมพ์สี 55 หน้าต่อนาที", "เทคโนโลยีล้ำสมัย", "รวมบริการบำรุงรักษา"],
    isNew: true,
    isHot: false,
  },
  {
    id: 7,
    name: "Ricoh MP C3004",
    brand: "Ricoh",
    type: "Multifunction",
    image: "/ricoh-mpc3004-color-multifunction.jpg",
    features: ["พิมพ์สี 30 หน้าต่อนาที", "จอสัมผัส 10.1 นิ้ว", "รวมบริการบำรุงรักษา"],
    isNew: true,
    isHot: true,
  },
  {
    id: 8,
    name: "Ricoh IM 2701",
    brand: "Ricoh",
    type: "Multifunction",
    image: "/ricoh-im-2701-multifunction.jpg",
    features: ["ความเร็ว 27 หน้าต่อนาที", "จอสัมผัส 10.1 นิ้ว", "รวมบริการบำรุงรักษา"],
    isNew: true,
    isHot: false,
  },
  {
    id: 9,
    name: "Ricoh IM 2702",
    brand: "Ricoh",
    type: "Multifunction",
    image: "/ricoh-im-2702-multifunction.jpg",
    features: ["ความเร็ว 27 หน้าต่อนาที", "พิมพ์ 2 หน้าอัตโนมัติ", "รวมบริการบำรุงรักษา"],
    isNew: true,
    isHot: true,
  },
  {
    id: 10,
    name: "Ricoh MPC5503",
    brand: "Ricoh",
    type: "Multifunction",
    image: "/ricoh-mpc5503-color-multifunction.jpg",
    features: ["พิมพ์สี 55 หน้าต่อนาที", "จอสัมผัส 10.1 นิ้ว", "รวมบริการบำรุงรักษา"],
    isNew: true,
    isHot: true,
  },
]

interface ProductGridProps {
  filters: FilterState
  sortBy: string
  onSortChange: (value: string) => void
}

export function ProductGrid({ filters, sortBy, onSortChange }: ProductGridProps) {
  const { t } = useLanguage()
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 6
  const productGridRef = useRef<HTMLDivElement>(null)

  const safeFilters = filters || { brands: [], types: [], priceRanges: [] }

  const filteredProducts = products.filter((product) => {
    // Filter by brand
    if (safeFilters.brands.length > 0 && !safeFilters.brands.includes(product.brand)) {
      return false
    }

    // Filter by type
    if (safeFilters.types.length > 0 && !safeFilters.types.includes(product.type)) {
      return false
    }

    return true
  })

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "name-asc":
        return a.name.localeCompare(b.name)
      case "name-desc":
        return b.name.localeCompare(a.name)
      case "popular":
        return (b.isHot ? 1 : 0) - (a.isHot ? 1 : 0)
      default:
        return 0
    }
  })

  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentProducts = sortedProducts.slice(startIndex, endIndex)

  const handleSortChange = (value: string) => {
    setCurrentPage(1)
    onSortChange(value)
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    if (productGridRef.current) {
      const headerOffset = 100
      const elementPosition = productGridRef.current.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <div>
      <div ref={productGridRef}>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-0 mb-8 md:mb-10">
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-light text-foreground mb-2">
              {t("th", "แพ็คเกจเช่าเครื่องถ่ายเอกสาร", "Copier Rental Packages")}
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground font-medium">
              {t("th", "บริการเช่าเครื่องถ่ายเอกสารและเครื่องพิมพ์คุณภาพสูง", "High-quality copier and printer rental services")}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
            <Select value={sortBy} onValueChange={handleSortChange}>
              <SelectTrigger className="w-full sm:w-[200px] rounded-xl">
                <SelectValue placeholder={t("th", "เรียงตาม", "Sort by")} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="default">{t("th", "เริ่มต้น", "Default")}</SelectItem>
                <SelectItem value="name-asc">{t("th", "ชื่อ: A-Z", "Name: A-Z")}</SelectItem>
                <SelectItem value="name-desc">{t("th", "ชื่อ: Z-A", "Name: Z-A")}</SelectItem>
                <SelectItem value="popular">{t("th", "ยอดนิยม", "Popular")}</SelectItem>
              </SelectContent>
            </Select>
            <div className="text-xs sm:text-sm text-muted-foreground bg-muted px-3 sm:px-4 py-2 rounded-xl text-center">
              {t(
                "th",
                `แสดง ${startIndex + 1}-${Math.min(endIndex, sortedProducts.length)} จาก ${sortedProducts.length} รายการ`,
                `Showing ${startIndex + 1}-${Math.min(endIndex, sortedProducts.length)} of ${sortedProducts.length} items`,
              )}
            </div>
          </div>
        </div>

        {sortedProducts.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">
              {t("th", "ไม่พบสินค้าที่ตรงกับเงื่อนไขการค้นหา", "No products match your filters")}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentProducts.map((product) => (
              <div
                key={product.id}
                className="bg-card rounded-2xl shadow-lg border border-border hover:shadow-2xl transition-all duration-300 group overflow-hidden"
              >
                <div className="relative p-6">
                  {product.isNew && (
                    <span className="absolute top-4 left-4 bg-accent text-accent-foreground text-xs px-3 py-1 rounded-full font-semibold shadow-lg z-10">
                      {t("th", "ใหม่", "New")}
                    </span>
                  )}
                  {product.isHot && (
                    <span className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full font-semibold shadow-lg z-10">
                      {t("th", "ยอดนิยม", "Popular")}
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

                  <div className="bg-muted rounded-xl p-4 mb-4 text-center">
                    <p className="text-sm text-muted-foreground mb-1">{t("th", "ราคาพิเศษ", "Special Price")}</p>
                    <p className="text-lg font-semibold text-primary">{t("th", "ติดต่อสอบถาม", "Contact for Pricing")}</p>
                  </div>

                  <div className="flex space-x-3">
                    <Link href={`/products/${product.id}`} className="flex-1">
                      <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl py-3 font-medium shadow-lg hover:shadow-xl transition-all duration-300">
                        <Eye className="h-4 w-4 mr-2" />
                        {t("th", "ดูรายละเอียด", "View Details")}
                      </Button>
                    </Link>
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
        )}

        {sortedProducts.length > 0 && totalPages > 1 && (
          <div className="flex justify-center mt-8 sm:mt-12">
            <div className="flex flex-wrap justify-center items-center gap-2 bg-muted p-2 rounded-2xl">
              <Button
                variant="ghost"
                className="rounded-xl px-3 sm:px-4 py-2 hover:bg-card text-sm sm:text-base disabled:opacity-50"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                <ChevronLeft className="h-4 w-4 mr-1" />
                {t("th", "ก่อนหน้า", "Previous")}
              </Button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <Button
                  key={page}
                  variant={currentPage === page ? "default" : "ghost"}
                  className={`rounded-xl px-3 sm:px-4 py-2 text-sm sm:text-base ${
                    currentPage === page ? "bg-primary text-primary-foreground hover:bg-primary/90" : "hover:bg-card"
                  }`}
                  onClick={() => handlePageChange(page)}
                >
                  {page}
                </Button>
              ))}

              <Button
                variant="ghost"
                className="rounded-xl px-3 sm:px-4 py-2 hover:bg-card text-sm sm:text-base disabled:opacity-50"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                {t("th", "ถัดไป", "Next")}
                <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
