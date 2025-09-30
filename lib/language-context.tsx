"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Language = "th" | "en"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string, thaiText?: string, englishText?: string) => string
  mounted: boolean
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
    productsSubtitle: "เลือกแพ็คเกจเช่าที่เหมาะสมกับความต้องการของธุรกิจคุณ พร้อมบริการซ่อมบำรุงครบวงจร",
    // Admin Login
    adminLoginTitle: "เข้าสู่ระบบ THADA",
    adminLoginDescription: "กรอกอีเมลและรหัสผ่านเพื่อเข้าสู่บัญชีของคุณ",
    email: "อีเมล",
    password: "รหัสผ่าน",
    loggingIn: "กำลังเข้าสู่ระบบ...",
    loginButton: "เข้าสู่ระบบ",
    noAccount: "ยังไม่มีบัญชี?",
    signupLink: "สมัครสมาชิก",
    // Admin Signup
    adminSignupTitle: "สร้างบัญชี",
    adminSignupDescription: "สมัครบัญชีผู้ดูแลระบบ THADA",
    repeatPassword: "ยืนยันรหัสผ่าน",
    creatingAccount: "กำลังสร้างบัญชี...",
    signupButton: "สมัครสมาชิก",
    haveAccount: "มีบัญชีอยู่แล้ว?",
    loginLink: "เข้าสู่ระบบ",
    // Customer Login
    customerLoginTitle: "เข้าสู่บัญชีของคุณ",
    customerLoginDescription: "กรอกข้อมูลเพื่อเข้าสู่พอร์ทัลลูกค้า",
    emailAddress: "ที่อยู่อีเมล",
    forgotPassword: "ลืมรหัสผ่าน?",
    signingIn: "กำลังเข้าสู่ระบบ...",
    signInButton: "เข้าสู่ระบบ",
    noAccountQuestion: "ยังไม่มีบัญชี?",
    createAccount: "สร้างบัญชี",
    backToHome: "กลับสู่หน้าแรก",
    welcomeBack: "ยินดีต้อนรับกลับสู่พอร์ทัลเช่าอุปกรณ์ของคุณ",
    welcomeBackDescription: "เข้าสู่บัญชีของคุณเพื่อจัดการการเช่า ติดตามคำสั่งซื้อ และขอบริการซ่อมบำรุงสำหรับอุปกรณ์สำนักงานของคุณ",
    copyrightText: "© 2025 THADA. โซลูชันอุปกรณ์สำนักงานมืออาชีพ",
    // Customer Signup
    customerSignupTitle: "สร้างบัญชีของคุณ",
    customerSignupDescription: "เริ่มต้นเช่าอุปกรณ์กับ THADA",
    companyName: "ชื่อบริษัท",
    workEmail: "อีเมลที่ทำงาน",
    passwordPlaceholder: "อย่างน้อย 8 ตัวอักษร",
    confirmPassword: "ยืนยันรหัสผ่าน",
    confirmPasswordPlaceholder: "กรอกรหัสผ่านอีกครั้ง",
    agreeToTerms: "ฉันยอมรับ",
    termsOfService: "ข้อกำหนดการให้บริการ",
    and: "และ",
    privacyPolicy: "นโยบายความเป็นส่วนตัว",
    createAccountButton: "สร้างบัญชี",
    alreadyHaveAccount: "มีบัญชีอยู่แล้ว?",
    signInLink: "เข้าสู่ระบบ",
    startRenting: "เริ่มเช่าอุปกรณ์สำนักงานมืออาชีพวันนี้",
    easyOrdering: "สั่งซื้อออนไลน์ง่ายๆ",
    easyOrderingDesc: "เรียกดูและเช่าอุปกรณ์ภายในไม่กี่นาที",
    trackRentals: "ติดตามการเช่าของคุณ",
    trackRentalsDesc: "จัดการอุปกรณ์ทั้งหมดของคุณจากแดชบอร์ดเดียว",
    support247: "สนับสนุน 24/7",
    support247Desc: "ขอบริการซ่อมบำรุงได้ทุกเมื่อที่คุณต้องการ",
    // Promotion Section
    promoTitle: "โปรโมชั่นพิเศษ!",
    promoDiscount: "ลด 20%",
    promoDescription: "สำหรับการเช่าครั้งแรก",
    promoSubtext: "ใช้โค้ด: FIRST20",
    promoCTA: "เริ่มเช่าเลย",
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
    // Admin Login
    adminLoginTitle: "Login to THADA",
    adminLoginDescription: "Enter your email and password to access your account",
    email: "Email",
    password: "Password",
    loggingIn: "Logging in...",
    loginButton: "Login",
    noAccount: "Don't have an account?",
    signupLink: "Sign up",
    // Admin Signup
    adminSignupTitle: "Create Account",
    adminSignupDescription: "Sign up for a THADA admin account",
    repeatPassword: "Repeat Password",
    creatingAccount: "Creating account...",
    signupButton: "Sign up",
    haveAccount: "Already have an account?",
    loginLink: "Login",
    // Customer Login
    customerLoginTitle: "Sign in to your account",
    customerLoginDescription: "Enter your credentials to access your customer portal",
    emailAddress: "Email address",
    forgotPassword: "Forgot password?",
    signingIn: "Signing in...",
    signInButton: "Sign in",
    noAccountQuestion: "Don't have an account?",
    createAccount: "Create account",
    backToHome: "Back to home",
    welcomeBack: "Welcome back to your equipment rental portal",
    welcomeBackDescription:
      "Access your account to manage rentals, track orders, and request maintenance for your office equipment.",
    copyrightText: "© 2025 THADA. Professional office equipment solutions.",
    // Customer Signup
    customerSignupTitle: "Create your account",
    customerSignupDescription: "Get started with THADA equipment rentals",
    companyName: "Company name",
    workEmail: "Work email",
    passwordPlaceholder: "At least 8 characters",
    confirmPassword: "Confirm password",
    confirmPasswordPlaceholder: "Re-enter your password",
    agreeToTerms: "I agree to the",
    termsOfService: "Terms of Service",
    and: "and",
    privacyPolicy: "Privacy Policy",
    createAccountButton: "Create account",
    alreadyHaveAccount: "Already have an account?",
    signInLink: "Sign in",
    startRenting: "Start renting professional office equipment today",
    easyOrdering: "Easy online ordering",
    easyOrderingDesc: "Browse and rent equipment in minutes",
    trackRentals: "Track your rentals",
    trackRentalsDesc: "Manage all your equipment from one dashboard",
    support247: "24/7 support",
    support247Desc: "Request maintenance anytime you need it",
    // Promotion Section
    promoTitle: "Special Promotion!",
    promoDiscount: "20% OFF",
    promoDescription: "On your first rental",
    promoSubtext: "Use code: FIRST20",
    promoCTA: "Start Renting",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false)
  const [language, setLanguageState] = useState<Language>("en")

  useEffect(() => {
    setMounted(true)
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

  return <LanguageContext.Provider value={{ language, setLanguage, t, mounted }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider")
  }
  return context
}
