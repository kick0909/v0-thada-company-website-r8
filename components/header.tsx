"use client"

import { Button } from "@/components/ui/button"
import { Menu, X, Phone, Mail, MapPin, User } from "lucide-react"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useLanguage } from "@/lib/language-context"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t, language } = useLanguage()

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
                <span>{t("location")}</span>
              </div>
            </div>
            <div className="text-xs sm:text-sm font-medium">{t("hours")}</div>
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
            <a href="/" className="text-gray-700 hover:text-[#C94444] transition-colors font-medium">
              {t("home")}
            </a>
            <a href="/rental" className="text-gray-700 hover:text-[#C94444] transition-colors font-medium">
              {t("rental")}
            </a>
            <a href="/maintenance" className="text-gray-700 hover:text-[#C94444] transition-colors font-medium">
              {t("maintenance")}
            </a>
            <a href="/about" className="text-gray-700 hover:text-[#C94444] transition-colors font-medium">
              {t("about")}
            </a>
            <a href="/contact" className="text-gray-700 hover:text-[#C94444] transition-colors font-medium">
              {t("contact")}
            </a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <LanguageSwitcher />
            <Link href="/customer/login">
              <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent">
                <User className="h-4 w-4 mr-2" />
                {t("login")}
              </Button>
            </Link>
            <Link href="/customer/signup">
              <Button className="bg-[#C94444] hover:bg-[#C94444]/90 text-white">{t("signup")}</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t pt-4">
            <div className="flex flex-col gap-3">
              <a href="/" className="text-gray-700 hover:text-[#C94444] transition-colors font-medium py-2">
                {t("home")}
              </a>
              <a href="/rental" className="text-gray-700 hover:text-[#C94444] transition-colors font-medium py-2">
                {t("rental")}
              </a>
              <a href="/maintenance" className="text-gray-700 hover:text-[#C94444] transition-colors font-medium py-2">
                {t("maintenance")}
              </a>
              <a href="/about" className="text-gray-700 hover:text-[#C94444] transition-colors font-medium py-2">
                {t("about")}
              </a>
              <a href="/contact" className="text-gray-700 hover:text-[#C94444] transition-colors font-medium py-2">
                {t("contact")}
              </a>
              <div className="flex flex-col gap-2 mt-3 pt-3 border-t">
                <LanguageSwitcher />
                <Link href="/customer/login">
                  <Button variant="outline" className="w-full border-gray-300 text-gray-700 bg-transparent">
                    <User className="h-4 w-4 mr-2" />
                    {t("login")}
                  </Button>
                </Link>
                <Link href="/customer/signup">
                  <Button className="w-full bg-[#C94444] hover:bg-[#C94444]/90 text-white">{t("signup")}</Button>
                </Link>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
