"use client"

import { useLanguage } from "@/lib/language-context"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="text-3xl font-bold mb-4 text-primary-foreground">
              {t("th", "หจก. ธาดาก็อปปี้ แอนด์ ซัพพลาย", "Thada Copy and Supply Ltd, Part.")}
            </div>
            <p className="text-background/80 mb-6 max-w-md leading-relaxed">
              {t(
                "th",
                "ผู้ให้บริการเช่าเครื่องถ่ายเอกสารและอุปกรณ์สำนักงานชั้นนำ พร้อมบริการบำรุงรักษาครบวงจร",
                "Leading provider of copier and office equipment rentals with comprehensive maintenance services",
              )}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-background/60 hover:text-background transition-colors">
                Line
              </a>
              <a href="#" className="text-background/60 hover:text-background transition-colors">
                Instagram
              </a>
              <a href="#" className="text-background/60 hover:text-background transition-colors">
                Facebook
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-background">{t("th", "บริการ", "Services")}</h3>
            <ul className="space-y-2">
              <li>
                <a href="/rental" className="text-background/80 hover:text-background transition-colors">
                  {t("th", "เช่าเครื่องถ่ายเอกสาร", "Copier Rental")}
                </a>
              </li>
              <li>
                <a href="/rental" className="text-background/80 hover:text-background transition-colors">
                  {t("th", "เช่าเครื่องพิมพ์", "Printer Rental")}
                </a>
              </li>
              <li>
                <a href="/maintenance" className="text-background/80 hover:text-background transition-colors">
                  {t("th", "บริการซ่อมบำรุง", "Maintenance Service")}
                </a>
              </li>
              <li>
                <a href="/" className="text-background/80 hover:text-background transition-colors">
                  {t("th", "อุปกรณ์สำนักงาน", "Office Supplies")}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-background">{t("th", "บริษัท", "Company")}</h3>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="text-background/80 hover:text-background transition-colors">
                  {t("th", "เกี่ยวกับเรา", "About Us")}
                </a>
              </li>
              <li>
                <a href="/contact" className="text-background/80 hover:text-background transition-colors">
                  {t("th", "ติดต่อเรา", "Contact")}
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-background transition-colors">
                  {t("th", "นโยบายความเป็นส่วนตัว", "Privacy Policy")}
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-background transition-colors">
                  {t("th", "ข้อกำหนดการใช้งาน", "Terms of Service")}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8 text-center">
          <p className="text-background/60">
            {t("th", "© 2025 ธาดาก็อปปี้ แอนด์ ซัพพลาย สงวนลิขสิทธิ์", "© 2025 ธาดาก็อปปี้ แอนด์ ซัพพลาย All rights reserved.")}
          </p>
        </div>
      </div>
    </footer>
  )
}
