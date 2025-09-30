"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Language = "th" | "en"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string, thaiText?: string, englishText?: string) => string
}

const translations = {
  th: {
    home: "หน้าแรก",
    rental: "แพ็คเกจเช่า",
    maintenance: "บริการซ่อมบำรุง",
    about: "เกี่ยวกับเรา",
    contact: "ติดต่อ",
    login: "เข้าสู่ระบบ",
    signup: "สมัครสมาชิก",
    hours: "เปิดบริการ: จันทร์-ศุกร์ 8:00-17:00 น.",
    location: "กรุงเทพมหานคร",
    productsTitle: "แพ็คเกจเช่าเครื่องถ่ายเอกสาร",
    productsSubtitle: "เลือกแพ็คเกจเช่าที่เหมาะสมกับความต้องการของธุรกิจคุณ พร้อมบริการซ่อมบำรุงครบครัน",
  },
  en: {
    home: "Home",
    rental: "Rental Packages",
    maintenance: "Maintenance Service",
    about: "About Us",
    contact: "Contact",
    login: "Login",
    signup: "Register",
    hours: "Open: Mon-Fri 8:00-17:00",
    location: "Bangkok",
    productsTitle: "Copier Rental Packages",
    productsSubtitle:
      "Choose the rental package that suits your business needs with comprehensive maintenance services",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en")

  useEffect(() => {
    const saved = localStorage.getItem("language") as Language
    if (saved && (saved === "th" || saved === "en")) {
      setLanguageState(saved)
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem("language", lang)
  }

  const t = (key: string, thaiText?: string, englishText?: string): string => {
    if (thaiText && englishText) {
      return language === "th" ? thaiText : englishText
    }
    return translations[language][key as keyof typeof translations.th] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider")
  }
  return context
}
