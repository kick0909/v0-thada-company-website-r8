import type React from "react"
import "./globals.css"
import { Roboto } from "next/font/google"
import { LanguageProvider } from "@/lib/language-context"

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
})

export const metadata = {
  title: "Thada Copy and Supply Ltd, Part. - บริการเช่าเครื่องถ่ายเอกสารและเครื่องพิมพ์",
  description:
    "บริการเช่าเครื่องถ่ายเอกสาร เครื่องพิมพ์ และอุปกรณ์สำนักงานคุณภาพสูง พร้อมบริการบำรุงรักษาครบวงจร | Professional copier and printer rental services with comprehensive maintenance",
    generator: 'v0.app'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} font-sans`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
