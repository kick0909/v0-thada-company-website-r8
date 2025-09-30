import type React from "react"
import "./globals.css"
import { Roboto } from "next/font/google"
import { LanguageProvider } from "@/lib/language-context"
import { ChatWidget } from "@/components/chat-widget"

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
})

export const metadata = {
  title: "Thada Copy and Supply Ltd, Part.",
  description: "ธาดาก็อปปี้ แอนด์ ซัพพลาย - บริการเช่าเครื่องถ่ายเอกสาร เครื่องพิมพ์ และอุปกรณ์สำนักงานคุณภาพสูง พร้อมบริการบำรุงรักษาครบวงจร",
  applicationName: "Thada Copy and Supply Ltd, Part.",
  generator: "ธาดาก็อปปี้ แอนด์ ซัพพลาย",
  keywords: ["เช่าเครื่องถ่ายเอกสาร", "เช่าเครื่องพิมพ์", "copier rental", "printer rental", "office equipment"],
  authors: [{ name: "Thada Copy and Supply Ltd, Part." }],
  creator: "ธาดาก็อปปี้ แอนด์ ซัพพลาย",
  publisher: "Thada Copy and Supply Ltd, Part.",
  openGraph: {
    type: "website",
    locale: "th_TH",
    url: "https://thadacopy.com",
    siteName: "Thada Copy and Supply Ltd, Part.",
    title: "Thada Copy and Supply Ltd, Part.",
    description: "ธาดาก็อปปี้ แอนด์ ซัพพลาย - บริการเช่าเครื่องถ่ายเอกสาร เครื่องพิมพ์ และอุปกรณ์สำนักงานคุณภาพสูง",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thada Copy and Supply Ltd, Part.",
    description: "ธาดาก็อปปี้ แอนด์ ซัพพลาย - บริการเช่าเครื่องถ่ายเอกสารและเครื่องพิมพ์คุณภาพสูง",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} font-sans`}>
        <LanguageProvider>
          {children}
          <ChatWidget />
        </LanguageProvider>
      </body>
    </html>
  )
}
