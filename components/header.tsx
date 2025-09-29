"use client"

import { Button } from "@/components/ui/button"
import { Menu, X, Phone, Mail, MapPin } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-background shadow-sm">
      <div className="bg-slate-900 text-white py-2">
        <div className="container mx-auto px-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-sm">
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>064-797-9944</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>thadacopy@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>กรุงเทพมหานคร</span>
              </div>
            </div>
            <div className="text-xs sm:text-sm font-medium">เปิดบริการ: จันทร์-ศุกร์ 8:00-17:00 น.</div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image src="/images/thada-logo.png" alt="THADA Logo" width={120} height={60} className="h-12 w-auto" />
            <div>
              <p className="text-sm text-gray-600"></p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="/" className="text-gray-700 hover:text-red-600 transition-colors font-medium">
              หน้าแรก
            </a>
            <a href="/rental" className="text-gray-700 hover:text-red-600 transition-colors font-medium">
              แพ็คเกจเช่า
            </a>
            <a href="/maintenance" className="text-gray-700 hover:text-red-600 transition-colors font-medium">
              บริการซ่อมบำรุง
            </a>
            <a href="/about" className="text-gray-700 hover:text-red-600 transition-colors font-medium">
              เกี่ยวกับเรา
            </a>
            <a href="/contact" className="text-gray-700 hover:text-red-600 transition-colors font-medium">
              ติดต่อ
            </a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-medium">
              ขอใบเสนอราคา
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t pt-4">
            <div className="flex flex-col gap-3">
              <a href="/" className="text-gray-700 hover:text-red-600 transition-colors font-medium py-2">
                หน้าแรก
              </a>
              <a href="/rental" className="text-gray-700 hover:text-red-600 transition-colors font-medium py-2">
                แพ็คเกจเช่า
              </a>
              <a href="/maintenance" className="text-gray-700 hover:text-red-600 transition-colors font-medium py-2">
                บริการซ่อมบำรุง
              </a>
              <a href="/about" className="text-gray-700 hover:text-red-600 transition-colors font-medium py-2">
                เกี่ยวกับเรา
              </a>
              <a href="/contact" className="text-gray-700 hover:text-red-600 transition-colors font-medium py-2">
                ติดต่อ
              </a>
              <Button className="bg-red-600 hover:bg-red-700 text-white mt-3 rounded-lg">ขอใบเสนอราคา</Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
