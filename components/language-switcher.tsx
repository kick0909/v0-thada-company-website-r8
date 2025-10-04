"use client"

import { Button } from "@/components/ui/button"
import { Languages } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { useState, useRef, useEffect } from "react"

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
      return () => document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpen])

  const handleLanguageChange = (lang: "en" | "th") => {
    setLanguage(lang)
    setIsOpen(false)
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <Button variant="ghost" size="sm" className="gap-2" onClick={() => setIsOpen(!isOpen)}>
        <Languages className="h-4 w-4" />
        <span className="text-sm font-medium">{language === "th" ? "ไทย" : "GB"}</span>
      </Button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-[150px] rounded-md border bg-popover shadow-lg z-[100] overflow-hidden">
          <button
            onClick={() => handleLanguageChange("th")}
            className="w-full px-4 py-2 text-left text-sm hover:bg-accent hover:text-accent-foreground flex items-center gap-2 transition-colors"
          >
            <span>🇹🇭</span>
            ภาษาไทย
          </button>
          <button
            onClick={() => handleLanguageChange("en")}
            className="w-full px-4 py-2 text-left text-sm hover:bg-accent hover:text-accent-foreground flex items-center gap-2 transition-colors"
          >
            <span>🇬🇧</span>
            English
          </button>
        </div>
      )}
    </div>
  )
}
