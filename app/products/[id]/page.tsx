"use client"

import { useParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Heart, Phone, Mail, CheckCircle2, Package, Wrench, Clock, Shield } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

const products = [
  {
    id: 1,
    name: "Canon imageRUNNER 2630i",
    brand: "Canon",
    type: "Multifunction",
    image: "/canon-office-printer-copier-machine-white-backgrou.jpg",
    rentalPrice: "฿3,500/เดือน",
    priceValue: 3500,
    sellingPrice: "฿195,000",
    sellingPriceValue: 195000,
    promotion: {
      discount: 20,
      originalPrice: 4375,
      label: "ลด 20%",
    },
    description: {
      th: "เครื่องถ่ายเอกสารและเครื่องพิมพ์ Multifunction ที่ออกแบบมาสำหรับสำนักงานขนาดกลาง พร้อมฟังก์ชันครบครัน",
      en: "Multifunction copier and printer designed for medium-sized offices with comprehensive features",
    },
    specifications: {
      speed: { th: "30 หน้าต่อนาที", en: "30 pages per minute" },
      resolution: { th: "1200 x 1200 dpi", en: "1200 x 1200 dpi" },
      paperSize: { th: "A3, A4, A5, B4, B5", en: "A3, A4, A5, B4, B5" },
      paperCapacity: { th: "550 แผ่น", en: "550 sheets" },
      connectivity: { th: "USB, Ethernet, Wi-Fi", en: "USB, Ethernet, Wi-Fi" },
      functions: { th: "พิมพ์, ถ่ายเอกสาร, สแกน, แฟกซ์", en: "Print, Copy, Scan, Fax" },
    },
  },
  {
    id: 7,
    name: "Ricoh MP C3004",
    brand: "Ricoh",
    type: "Multifunction",
    image: "/ricoh-mpc3004-color-multifunction.jpg",
    rentalPrice: "฿2,500/เดือน",
    priceValue: 2500,
    sellingPrice: "฿35,000",
    sellingPriceValue: 35000,
    promotion: {
      discount: 25,
      originalPrice: 3125,
      label: "ลด 25%",
    },
    description: {
      th: "เครื่องถ่ายเอกสารสี Multifunction ระดับพรีเมียม พร้อมจอสัมผัสขนาดใหญ่และประสิทธิภาพสูง เหมาะสำหรับองค์กรขนาดใหญ่",
      en: "Premium color multifunction copier with large touchscreen and high performance, ideal for large organizations",
    },
    specifications: {
      speed: { th: "30 หน้าต่อนาที (สี/ขาวดำ)", en: "30 pages per minute (Color/B&W)" },
      resolution: { th: "1200 x 1200 dpi", en: "1200 x 1200 dpi" },
      paperSize: { th: "A3, A4, A5, B4, B5, SRA3", en: "A3, A4, A5, B4, B5, SRA3" },
      paperCapacity: { th: "1,200 แผ่น (ขยายได้สูงสุด 4,700 แผ่น)", en: "1,200 sheets (expandable to 4,700 sheets)" },
      connectivity: { th: "USB, Ethernet, Wi-Fi, NFC", en: "USB, Ethernet, Wi-Fi, NFC" },
      functions: { th: "พิมพ์สี, ถ่ายเอกสารสี, สแกนสี, แฟกซ์", en: "Color Print, Color Copy, Color Scan, Fax" },
      touchscreen: { th: "จอสัมผัส 10.1 นิ้ว", en: "10.1-inch touchscreen" },
      memory: { th: "4 GB RAM", en: "4 GB RAM" },
      storage: { th: "320 GB HDD", en: "320 GB HDD" },
      duplexPrinting: { th: "พิมพ์ 2 หน้าอัตโนมัติ", en: "Automatic duplex printing" },
    },
    features: {
      th: [
        "จอสัมผัสสี 10.1 นิ้ว ใช้งานง่ายเหมือนสมาร์ทโฟน",
        "พิมพ์และถ่ายเอกสารสีความเร็วสูง 30 หน้าต่อนาที",
        "ความละเอียดสูงถึง 1200 x 1200 dpi",
        "รองรับกระดาษขนาด A3 ถึง A5",
        "ความจุกระดาษมาตรฐาน 1,200 แผ่น",
        "พิมพ์ 2 หน้าอัตโนมัติ ประหยัดกระดาษ",
        "เชื่อมต่อ Wi-Fi, Ethernet, USB และ NFC",
        "ระบบรักษาความปลอดภัยขั้นสูง",
        "รองรับการพิมพ์จากมือถือ",
        "ประหยัดพลังงาน Energy Star",
      ],
      en: [
        "10.1-inch color touchscreen, easy to use like a smartphone",
        "High-speed color printing and copying at 30 pages per minute",
        "High resolution up to 1200 x 1200 dpi",
        "Supports paper sizes from A3 to A5",
        "Standard paper capacity of 1,200 sheets",
        "Automatic duplex printing saves paper",
        "Wi-Fi, Ethernet, USB, and NFC connectivity",
        "Advanced security system",
        "Supports mobile printing",
        "Energy Star certified",
      ],
    },
    benefits: {
      th: [
        "เพิ่มประสิทธิภาพการทำงานด้วยความเร็วสูง",
        "ลดต้นทุนการพิมพ์ด้วยระบบประหยัดพลังงาน",
        "ใช้งานง่ายด้วยจอสัมผัสขนาดใหญ่",
        "รักษาความปลอดภัยข้อมูลขององค์กร",
        "รองรับการทำงานแบบ Mobile Office",
      ],
      en: [
        "Increase work efficiency with high speed",
        "Reduce printing costs with energy-saving system",
        "Easy to use with large touchscreen",
        "Protect organizational data security",
        "Support Mobile Office work style",
      ],
    },
    rentalIncludes: {
      th: [
        "ค่าเช่าเครื่องรายเดือน",
        "บริการบำรุงรักษาและซ่อมแซม",
        "อะไหล่และชิ้นส่วนทดแทน",
        "หมึกพิมพ์ทุกสี (CMYK)",
        "บริการติดตั้งและอบรม",
        "บริการช่างเทคนิคประจำ",
      ],
      en: [
        "Monthly rental fee",
        "Maintenance and repair service",
        "Spare parts and replacements",
        "All color toners (CMYK)",
        "Installation and training service",
        "Dedicated technician service",
      ],
    },
  },
  {
    id: 8,
    name: "Ricoh IM 2701",
    brand: "Ricoh",
    type: "Multifunction",
    image: "/ricoh-im-2701-multifunction.jpg",
    rentalPrice: "฿3,200/เดือน",
    priceValue: 3200,
    sellingPrice: "฿135,000",
    sellingPriceValue: 135000,
    description: {
      th: "เครื่องถ่ายเอกสาร Multifunction ขาวดำรุ่นใหม่ล่าสุด พร้อมจอสัมผัส 10.1 นิ้ว และระบบรักษาความปลอดภัยขั้นสูง เหมาะสำหรับสำนักงาน SME ที่ต้องการประสิทธิภาพสูงในราคาที่คุ้มค่า",
      en: "Latest black and white multifunction copier with 10.1-inch touchscreen and advanced security system, ideal for SME offices requiring high performance at great value",
    },
    specifications: {
      speed: { th: "27 หน้าต่อนาที", en: "27 pages per minute" },
      resolution: { th: "1200 x 1200 dpi", en: "1200 x 1200 dpi" },
      paperSize: { th: "A3, A4, A5, B4, B5", en: "A3, A4, A5, B4, B5" },
      paperCapacity: { th: "550 แผ่น (ขยายได้สูงสุด 2,300 แผ่น)", en: "550 sheets (expandable to 2,300 sheets)" },
      connectivity: { th: "USB, Ethernet, Wi-Fi, NFC", en: "USB, Ethernet, Wi-Fi, NFC" },
      functions: { th: "พิมพ์, ถ่ายเอกสาร, สแกน, แฟกซ์", en: "Print, Copy, Scan, Fax" },
      touchscreen: { th: "จอสัมผัส 10.1 นิ้ว Smart Operation Panel", en: "10.1-inch Smart Operation Panel touchscreen" },
      memory: { th: "2 GB RAM", en: "2 GB RAM" },
      storage: { th: "320 GB HDD", en: "320 GB HDD" },
      duplexPrinting: { th: "พิมพ์ 2 หน้าอัตโนมัติ", en: "Automatic duplex printing" },
      warmUpTime: { th: "เวลาเริ่มต้น 18 วินาที", en: "Warm-up time 18 seconds" },
    },
    features: {
      th: [
        "จอสัมผัส Smart Operation Panel 10.1 นิ้ว ใช้งานง่าย",
        "ความเร็ว 27 หน้าต่อนาที",
        "ความละเอียดสูง 1200 x 1200 dpi",
        "รองรับกระดาษขนาด A3 ถึง A5",
        "ความจุกระดาษมาตรฐาน 550 แผ่น",
        "พิมพ์ 2 หน้าอัตโนมัติ ประหยัดกระดาษ",
        "เชื่อมต่อ Wi-Fi, Ethernet, USB และ NFC",
        "ระบบรักษาความปลอดภัยขั้นสูง",
        "รองรับการพิมพ์จากมือถือและ Cloud",
        "ประหยัดพลังงาน Energy Star",
        "เวลาเริ่มต้นเร็วเพียง 18 วินาที",
      ],
      en: [
        "10.1-inch Smart Operation Panel touchscreen, easy to use",
        "Speed of 27 pages per minute",
        "High resolution 1200 x 1200 dpi",
        "Supports paper sizes from A3 to A5",
        "Standard paper capacity of 550 sheets",
        "Automatic duplex printing saves paper",
        "Wi-Fi, Ethernet, USB, and NFC connectivity",
        "Advanced security system",
        "Supports mobile and cloud printing",
        "Energy Star certified",
        "Quick warm-up time of only 18 seconds",
      ],
    },
    benefits: {
      th: [
        "เพิ่มประสิทธิภาพการทำงานด้วยความเร็วที่เหมาะสม",
        "ลดต้นทุนด้วยระบบประหยัดพลังงาน",
        "ใช้งานง่ายด้วยจอสัมผัสขนาดใหญ่",
        "รักษาความปลอดภัยข้อมูลขององค์กร",
        "รองรับการทำงานยุคดิจิทัล",
      ],
      en: [
        "Increase work efficiency with optimal speed",
        "Reduce costs with energy-saving system",
        "Easy to use with large touchscreen",
        "Protect organizational data security",
        "Support digital era work style",
      ],
    },
    rentalIncludes: {
      th: [
        "ค่าเช่าเครื่องรายเดือน",
        "บริการบำรุงรักษาและซ่อมแซม",
        "อะไหล่และชิ้นส่วนทดแทน",
        "หมึกพิมพ์ขาวดำ",
        "บริการติดตั้งและอบรม",
        "บริการช่างเทคนิคประจำ",
      ],
      en: [
        "Monthly rental fee",
        "Maintenance and repair service",
        "Spare parts and replacements",
        "Black toner",
        "Installation and training service",
        "Dedicated technician service",
      ],
    },
  },
  {
    id: 9,
    name: "Ricoh IM 2702",
    brand: "Ricoh",
    type: "Multifunction",
    image: "/ricoh-im-2702-multifunction.jpg",
    rentalPrice: "฿3,500/เดือน",
    priceValue: 3500,
    sellingPrice: "฿165,000",
    sellingPriceValue: 165000,
    promotion: {
      discount: 15,
      originalPrice: 4118,
      label: "ลด 15%",
    },
    description: {
      th: "เครื่องถ่ายเอกสาร Multifunction ขาวดำรุ่นยอดนิยม พร้อมฟีเจอร์ครบครันและจอสัมผัส 10.1 นิ้ว เหมาะสำหรับสำนักงานที่ต้องการความเร็วและประสิทธิภาพสูง พร้อมโปรโมชั่นพิเศษ",
      en: "Popular black and white multifunction copier with comprehensive features and 10.1-inch touchscreen, ideal for offices requiring speed and high performance with special promotion",
    },
    specifications: {
      speed: { th: "27 หน้าต่อนาที", en: "27 pages per minute" },
      resolution: { th: "1200 x 1200 dpi", en: "1200 x 1200 dpi" },
      paperSize: { th: "A3, A4, A5, B4, B5", en: "A3, A4, A5, B4, B5" },
      paperCapacity: { th: "1,200 แผ่น (ขยายได้สูงสุด 2,300 แผ่น)", en: "1,200 sheets (expandable to 2,300 sheets)" },
      connectivity: { th: "USB, Ethernet, Wi-Fi, NFC", en: "USB, Ethernet, Wi-Fi, NFC" },
      functions: { th: "พิมพ์, ถ่ายเอกสาร, สแกน, แฟกซ์", en: "Print, Copy, Scan, Fax" },
      touchscreen: { th: "จอสัมผัส 10.1 นิ้ว Smart Operation Panel", en: "10.1-inch Smart Operation Panel touchscreen" },
      memory: { th: "3 GB RAM", en: "3 GB RAM" },
      storage: { th: "320 GB HDD", en: "320 GB HDD" },
      duplexPrinting: { th: "พิมพ์ 2 หน้าอัตโนมัติความเร็วสูง", en: "High-speed automatic duplex printing" },
      scanSpeed: { th: "สแกนความเร็ว 80 ภาพต่อนาที", en: "Scan speed 80 images per minute" },
      warmUpTime: { th: "เวลาเริ่มต้น 16 วินาที", en: "Warm-up time 16 seconds" },
    },
    features: {
      th: [
        "จอสัมผัส Smart Operation Panel 10.1 นิ้ว พร้อม UI ที่ปรับแต่งได้",
        "ความเร็ว 27 หน้าต่อนาที",
        "ความจุกระดาษมาตรฐาน 1,200 แผ่น",
        "พิมพ์ 2 หน้าอัตโนมัติความเร็วสูง",
        "สแกนความเร็ว 80 ภาพต่อนาที",
        "ความละเอียดสูง 1200 x 1200 dpi",
        "รองรับกระดาษขนาด A3 ถึง A5",
        "เชื่อมต่อ Wi-Fi, Ethernet, USB และ NFC",
        "ระบบรักษาความปลอดภัยขั้นสูง",
        "รองรับการพิมพ์จากมือถือและ Cloud",
        "ประหยัดพลังงาน Energy Star",
        "เวลาเริ่มต้นเร็วเพียง 16 วินาที",
        "หน่วยความจำ 3 GB RAM",
      ],
      en: [
        "10.1-inch Smart Operation Panel touchscreen with customizable UI",
        "Speed of 27 pages per minute",
        "Standard paper capacity of 1,200 sheets",
        "High-speed automatic duplex printing",
        "Scan speed 80 images per minute",
        "High resolution 1200 x 1200 dpi",
        "Supports paper sizes from A3 to A5",
        "Wi-Fi, Ethernet, USB, and NFC connectivity",
        "Advanced security system",
        "Supports mobile and cloud printing",
        "Energy Star certified",
        "Quick warm-up time of only 16 seconds",
        "3 GB RAM memory",
      ],
    },
    benefits: {
      th: [
        "เพิ่มประสิทธิภาพการทำงานด้วยความเร็วและความจุสูง",
        "ลดเวลารอคอยด้วยระบบเริ่มต้นเร็ว",
        "ประหยัดต้นทุนด้วยระบบประหยัดพลังงาน",
        "ใช้งานง่ายด้วยจอสัมผัสที่ปรับแต่งได้",
        "รองรับการทำงานยุคดิจิทัลอย่างเต็มรูปแบบ",
      ],
      en: [
        "Increase work efficiency with high speed and capacity",
        "Reduce waiting time with quick startup system",
        "Save costs with energy-saving system",
        "Easy to use with customizable touchscreen",
        "Fully support digital era work style",
      ],
    },
    rentalIncludes: {
      th: [
        "ค่าเช่าเครื่องรายเดือน",
        "บริการบำรุงรักษาและซ่อมแซม",
        "อะไหล่และชิ้นส่วนทดแทน",
        "หมึกพิมพ์ขาวดำ",
        "บริการติดตั้งและอบรม",
        "บริการช่างเทคนิคประจำ",
        "การอัพเดทซอฟต์แวร์",
      ],
      en: [
        "Monthly rental fee",
        "Maintenance and repair service",
        "Spare parts and replacements",
        "Black toner",
        "Installation and training service",
        "Dedicated technician service",
        "Software updates",
      ],
    },
  },
  {
    id: 10,
    name: "Ricoh MPC5503",
    brand: "Ricoh",
    type: "Multifunction",
    image: "/ricoh-mpc5503-color-multifunction.jpg",
    rentalPrice: "฿6,800/เดือน",
    priceValue: 6800,
    sellingPrice: "฿485,000",
    sellingPriceValue: 485000,
    description: {
      th: "เครื่องถ่ายเอกสารสี Multifunction ระดับเอนเทอร์ไพรส์ ความเร็วสูง 55 หน้าต่อนาที พร้อมเทคโนโลยีล้ำสมัยและระบบรักษาความปลอดภัยขั้นสูง เหมาะสำหรับองค์กรขนาดใหญ่ที่ต้องการประสิทธิภาพสูงสุด",
      en: "Enterprise-level color multifunction copier with high speed of 55 pages per minute, featuring cutting-edge technology and advanced security system, ideal for large organizations requiring maximum performance",
    },
    specifications: {
      speed: { th: "55 หน้าต่อนาที (สี/ขาวดำ)", en: "55 pages per minute (Color/B&W)" },
      resolution: { th: "1200 x 1200 dpi", en: "1200 x 1200 dpi" },
      paperSize: { th: 'A3, A4, A5, B4, B5, SRA3, 12" x 18"', en: 'A3, A4, A5, B4, B5, SRA3, 12" x 18"' },
      paperCapacity: { th: "2,300 แผ่น (ขยายได้สูงสุด 4,700 แผ่น)", en: "2,300 sheets (expandable to 4,700 sheets)" },
      connectivity: {
        th: "USB 3.0, Gigabit Ethernet, Wi-Fi 6, NFC, Bluetooth",
        en: "USB 3.0, Gigabit Ethernet, Wi-Fi 6, NFC, Bluetooth",
      },
      functions: { th: "พิมพ์สี, ถ่ายเอกสารสี, สแกนสี, แฟกซ์, อีเมล", en: "Color Print, Color Copy, Color Scan, Fax, Email" },
      touchscreen: { th: "จอสัมผัส 10.1 นิ้ว Smart Operation Panel", en: "10.1-inch Smart Operation Panel touchscreen" },
      memory: { th: "6 GB RAM (ขยายได้ถึง 12 GB)", en: "6 GB RAM (expandable to 12 GB)" },
      storage: { th: "500 GB SSD", en: "500 GB SSD" },
      duplexPrinting: { th: "พิมพ์ 2 หน้าอัตโนมัติความเร็วสูง", en: "High-speed automatic duplex printing" },
      scanSpeed: { th: "สแกนความเร็ว 220 ภาพต่อนาที", en: "Scan speed 220 images per minute" },
      warmUpTime: { th: "เวลาเริ่มต้น 16 วินาที", en: "Warm-up time 16 seconds" },
    },
    features: {
      th: [
        "ความเร็วสูงสุด 55 หน้าต่อนาที ทั้งสีและขาวดำ",
        "จอสัมผัส Smart Operation Panel 10.1 นิ้ว พร้อม UI ที่ปรับแต่งได้",
        "ระบบรักษาความปลอดภัยระดับเอนเทอร์ไพรส์ พร้อม HDD Encryption",
        "สแกนความเร็วสูง 220 ภาพต่อนาที",
        "ความจุกระดาษมาตรฐาน 2,300 แผ่น ขยายได้ถึง 4,700 แผ่น",
        "หน่วยความจำ 6 GB RAM และ SSD 500 GB",
        "รองรับ Wi-Fi 6 และ Gigabit Ethernet",
        "พิมพ์ 2 หน้าอัตโนมัติความเร็วสูง",
        "รองรับการพิมพ์จากมือถือและ Cloud",
        "ระบบประหยัดพลังงาน Energy Star และ EPEAT Gold",
        "เวลาเริ่มต้นเพียง 16 วินาที",
        'รองรับกระดาษขนาดใหญ่ถึง SRA3 และ 12" x 18"',
        "ระบบ Color Management ขั้นสูง",
        "รองรับ PCL, PostScript, PDF Direct Print",
      ],
      en: [
        "Maximum speed of 55 pages per minute for both color and B&W",
        "10.1-inch Smart Operation Panel touchscreen with customizable UI",
        "Enterprise-level security system with HDD Encryption",
        "High-speed scanning at 220 images per minute",
        "Standard paper capacity of 2,300 sheets, expandable to 4,700 sheets",
        "6 GB RAM memory and 500 GB SSD",
        "Supports Wi-Fi 6 and Gigabit Ethernet",
        "High-speed automatic duplex printing",
        "Supports mobile and cloud printing",
        "Energy Star and EPEAT Gold certified energy-saving system",
        "Quick warm-up time of only 16 seconds",
        'Supports large paper sizes up to SRA3 and 12" x 18"',
        "Advanced Color Management system",
        "Supports PCL, PostScript, PDF Direct Print",
      ],
    },
    benefits: {
      th: [
        "เพิ่มผลผลิตสูงสุดด้วยความเร็ว 55 หน้าต่อนาที",
        "ลดเวลารอคอยด้วยระบบเริ่มต้นเร็วเพียง 16 วินาที",
        "ประหยัดต้นทุนด้วยระบบประหยัดพลังงานระดับสูง",
        "รักษาความปลอดภัยข้อมูลด้วยระบบเข้ารหัสขั้นสูง",
        "รองรับการทำงานยุคดิจิทัลด้วย Cloud และ Mobile Printing",
        "ความจุกระดาษสูง ลดการเติมกระดาษบ่อยครั้ง",
        "คุณภาพสีสันสดใสด้วยระบบ Color Management",
      ],
      en: [
        "Maximize productivity with 55 pages per minute speed",
        "Reduce waiting time with quick 16-second startup",
        "Save costs with high-level energy-saving system",
        "Protect data with advanced encryption system",
        "Support digital era work with Cloud and Mobile Printing",
        "High paper capacity reduces frequent refilling",
        "Vibrant color quality with Color Management system",
      ],
    },
    rentalIncludes: {
      th: [
        "ค่าเช่าเครื่องรายเดือน",
        "บริการบำรุงรักษาและซ่อมแซมแบบ Premium",
        "อะไหล่และชิ้นส่วนทดแทนทั้งหมด",
        "หมึกพิมพ์ทุกสี (CMYK) คุณภาพสูง",
        "บริการติดตั้งและอบรมเชิงลึก",
        "บริการช่างเทคนิคประจำ พร้อม SLA",
        "การอัพเดทซอฟต์แวร์และเฟิร์มแวร์",
        "บริการ Remote Monitoring",
      ],
      en: [
        "Monthly rental fee",
        "Premium maintenance and repair service",
        "All spare parts and replacements",
        "High-quality all color toners (CMYK)",
        "In-depth installation and training service",
        "Dedicated technician service with SLA",
        "Software and firmware updates",
        "Remote Monitoring service",
      ],
    },
  },
  {
    id: 15,
    name: "Ricoh MP C6004",
    brand: "Ricoh",
    type: "Multifunction",
    image: "/ricoh-mpc6004-color-multifunction.jpg",
    rentalPrice: "฿7,500/เดือน",
    priceValue: 7500,
    sellingPrice: "฿595,000",
    sellingPriceValue: 595000,
    description: {
      th: "เครื่องถ่ายเอกสารสี Multifunction ระดับเอนเทอร์ไพรส์ ความเร็วสูงสุด 60 หน้าต่อนาที พร้อมเทคโนโลยีล้ำสมัยและระบบรักษาความปลอดภัยขั้นสูง เหมาะสำหรับองค์กรขนาดใหญ่ที่ต้องการประสิทธิภาพสูงสุด",
      en: "Enterprise-level color multifunction copier with maximum speed of 60 pages per minute, featuring cutting-edge technology and advanced security system, ideal for large organizations requiring maximum performance",
    },
    specifications: {
      speed: { th: "60 หน้าต่อนาที (สี/ขาวดำ)", en: "60 pages per minute (Color/B&W)" },
      resolution: { th: "1200 x 1200 dpi", en: "1200 x 1200 dpi" },
      paperSize: { th: 'A3, A4, A5, B4, B5, SRA3, 12" x 18"', en: 'A3, A4, A5, B4, B5, SRA3, 12" x 18"' },
      paperCapacity: { th: "2,300 แผ่น (ขยายได้สูงสุด 5,300 แผ่น)", en: "2,300 sheets (expandable to 5,300 sheets)" },
      connectivity: {
        th: "USB 3.0, Gigabit Ethernet, Wi-Fi 6, NFC, Bluetooth",
        en: "USB 3.0, Gigabit Ethernet, Wi-Fi 6, NFC, Bluetooth",
      },
      functions: { th: "พิมพ์สี, ถ่ายเอกสารสี, สแกนสี, แฟกซ์, อีเมล", en: "Color Print, Color Copy, Color Scan, Fax, Email" },
      touchscreen: { th: "จอสัมผัส 10.1 นิ้ว Smart Operation Panel", en: "10.1-inch Smart Operation Panel touchscreen" },
      memory: { th: "8 GB RAM (ขยายได้ถึง 16 GB)", en: "8 GB RAM (expandable to 16 GB)" },
      storage: { th: "500 GB SSD", en: "500 GB SSD" },
      duplexPrinting: { th: "พิมพ์ 2 หน้าอัตโนมัติความเร็วสูง", en: "High-speed automatic duplex printing" },
      scanSpeed: { th: "สแกนความเร็ว 240 ภาพต่อนาที", en: "Scan speed 240 images per minute" },
      warmUpTime: { th: "เวลาเริ่มต้น 15 วินาที", en: "Warm-up time 15 seconds" },
    },
    features: {
      th: [
        "ความเร็วสูงสุด 60 หน้าต่อนาที ทั้งสีและขาวดำ",
        "จอสัมผัส Smart Operation Panel 10.1 นิ้ว พร้อม UI ที่ปรับแต่งได้",
        "ระบบรักษาความปลอดภัยระดับเอนเทอร์ไพรส์ พร้อม HDD Encryption",
        "สแกนความเร็วสูง 240 ภาพต่อนาที",
        "ความจุกระดาษมาตรฐาน 2,300 แผ่น ขยายได้ถึง 5,300 แผ่น",
        "หน่วยความจำ 8 GB RAM และ SSD 500 GB",
        "รองรับ Wi-Fi 6 และ Gigabit Ethernet",
        "พิมพ์ 2 หน้าอัตโนมัติความเร็วสูง",
        "รองรับการพิมพ์จากมือถือและ Cloud",
        "ระบบประหยัดพลังงาน Energy Star และ EPEAT Gold",
        "เวลาเริ่มต้นเพียง 15 วินาที",
        'รองรับกระดาษขนาดใหญ่ถึง SRA3 และ 12" x 18"',
        "ระบบ Color Management ขั้นสูง",
        "รองรับ PCL, PostScript, PDF Direct Print",
      ],
      en: [
        "Maximum speed of 60 pages per minute for both color and B&W",
        "10.1-inch Smart Operation Panel touchscreen with customizable UI",
        "Enterprise-level security system with HDD Encryption",
        "High-speed scanning at 240 images per minute",
        "Standard paper capacity of 2,300 sheets, expandable to 5,300 sheets",
        "8 GB RAM memory and 500 GB SSD",
        "Supports Wi-Fi 6 and Gigabit Ethernet",
        "High-speed automatic duplex printing",
        "Supports mobile and cloud printing",
        "Energy Star and EPEAT Gold certified energy-saving system",
        "Quick warm-up time of only 15 seconds",
        'Supports large paper sizes up to SRA3 and 12" x 18"',
        "Advanced Color Management system",
        "Supports PCL, PostScript, PDF Direct Print",
      ],
    },
    benefits: {
      th: [
        "เพิ่มผลผลิตสูงสุดด้วยความเร็ว 60 หน้าต่อนาที",
        "ลดเวลารอคอยด้วยระบบเริ่มต้นเร็วเพียง 15 วินาที",
        "ประหยัดต้นทุนด้วยระบบประหยัดพลังงานระดับสูง",
        "รักษาความปลอดภัยข้อมูลด้วยระบบเข้ารหัสขั้นสูง",
        "รองรับการทำงานยุคดิจิทัลด้วย Cloud และ Mobile Printing",
        "ความจุกระดาษสูง ลดการเติมกระดาษบ่อยครั้ง",
        "คุณภาพสีสันสดใสด้วยระบบ Color Management",
      ],
      en: [
        "Maximize productivity with 60 pages per minute speed",
        "Reduce waiting time with quick 15-second startup",
        "Save costs with high-level energy-saving system",
        "Protect data with advanced encryption system",
        "Support digital era work with Cloud and Mobile Printing",
        "High paper capacity reduces frequent refilling",
        "Vibrant color quality with Color Management system",
      ],
    },
    rentalIncludes: {
      th: [
        "ค่าเช่าเครื่องรายเดือน",
        "บริการบำรุงรักษาและซ่อมแซมแบบ Premium",
        "อะไหล่และชิ้นส่วนทดแทนทั้งหมด",
        "หมึกพิมพ์ทุกสี (CMYK) คุณภาพสูง",
        "บริการติดตั้งและอบรมเชิงลึก",
        "บริการช่างเทคนิคประจำ พร้อม SLA",
        "การอัพเดทซอฟต์แวร์และเฟิร์มแวร์",
        "บริการ Remote Monitoring และ Management",
      ],
      en: [
        "Monthly rental fee",
        "Premium maintenance and repair service",
        "All spare parts and replacements",
        "High-quality all color toners (CMYK)",
        "In-depth installation and training service",
        "Dedicated technician service with SLA",
        "Software and firmware updates",
        "Remote Monitoring and Management service",
      ],
    },
  },
]

export default function ProductDetailPage() {
  const params = useParams()
  const router = useRouter()
  const { t, language } = useLanguage()
  const productId = Number.parseInt(params.id as string)

  const product = products.find((p) => p.id === productId)

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-serif mb-4">{t("th", "ไม่พบสินค้า", "Product not found")}</h1>
          <Button onClick={() => router.push("/products")} className="bg-primary hover:bg-primary/90">
            <ArrowLeft className="h-4 w-4 mr-2" />
            {t("th", "กลับไปหน้าสินค้า", "Back to Products")}
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <Button variant="ghost" onClick={() => router.push("/products")} className="mb-6 hover:bg-muted rounded-xl">
          <ArrowLeft className="h-4 w-4 mr-2" />
          {t("th", "กลับไปหน้าสินค้า", "Back to Products")}
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
          <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
            <div className="flex justify-center items-center h-full">
              <img
                src={product.image || "/placeholder.svg?height=400&width=400&query=office printer"}
                alt={product.name}
                className="max-h-96 w-auto object-contain drop-shadow-2xl"
              />
            </div>
          </div>

          <div>
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="text-sm text-muted-foreground mb-2">{product.brand}</p>
                <h1 className="font-serif text-3xl md:text-4xl font-light text-foreground mb-2">{product.name}</h1>
                <p className="text-muted-foreground">{product.type}</p>
              </div>
              <Button
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-xl p-3 bg-transparent"
              >
                <Heart className="h-5 w-5" />
              </Button>
            </div>

            {product.promotion && (
              <div className="bg-gradient-to-r from-[#C94444] to-[#A03636] text-white rounded-xl p-4 mb-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm opacity-90">{t("th", "ราคาปกติ", "Regular Price")}</p>
                    <p className="text-lg line-through opacity-75">
                      ฿{product.promotion.originalPrice.toLocaleString()}/{t("th", "เดือน", "month")}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold">
                      {t("th", product.promotion.label, `${product.promotion.discount}% OFF`)}
                    </p>
                  </div>
                </div>
              </div>
            )}

            <div className="bg-muted rounded-xl p-6 mb-6">
              <p className="text-sm text-muted-foreground mb-2">{t("th", "ราคาเช่ารายเดือน", "Monthly Rental Price")}</p>
              <p className="text-4xl font-bold text-primary mb-4">{product.rentalPrice}</p>
              {product.promotion && (
                <p className="text-sm text-green-600 font-semibold">
                  {t(
                    "th",
                    `ประหยัด ฿${(product.promotion.originalPrice - product.priceValue).toLocaleString()}/เดือน`,
                    `Save ฿${(product.promotion.originalPrice - product.priceValue).toLocaleString()}/month`,
                  )}
                </p>
              )}
            </div>

            <div className="bg-card border-2 border-primary/30 rounded-xl p-6 mb-6">
              <p className="text-sm text-muted-foreground mb-2">{t("th", "ราคาขายเครื่อง", "Selling Price")}</p>
              <p className="text-3xl font-bold text-foreground">{product.sellingPrice}</p>
              <p className="text-xs text-muted-foreground mt-2">
                {t("th", "ราคาสำหรับซื้อเครื่องทันที", "Price for immediate purchase")}
              </p>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-6">
              {language === "th" ? product.description.th : product.description.en}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl py-6 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300">
                <Phone className="h-5 w-5 mr-2" />
                {t("th", "ติดต่อเช่าเลย", "Contact to Rent")}
              </Button>
              <Button
                variant="outline"
                className="flex-1 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-xl py-6 text-lg font-medium bg-transparent"
              >
                <Mail className="h-5 w-5 mr-2" />
                {t("th", "สอบถามข้อมูล", "Inquire")}
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card border border-border rounded-xl p-4 text-center">
                <Package className="h-8 w-8 text-primary mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">{t("th", "ติดตั้งฟรี", "Free Installation")}</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-4 text-center">
                <Wrench className="h-8 w-8 text-primary mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">{t("th", "บำรุงรักษาฟรี", "Free Maintenance")}</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-4 text-center">
                <Clock className="h-8 w-8 text-primary mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">{t("th", "บริการ 24/7", "24/7 Service")}</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-4 text-center">
                <Shield className="h-8 w-8 text-primary mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">{t("th", "รับประกันคุณภาพ", "Quality Guarantee")}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {product.features && (
              <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
                <h2 className="font-serif text-2xl font-light text-foreground mb-6">
                  {t("th", "คุณสมบัติเด่น", "Key Features")}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {(language === "th" ? product.features.th : product.features.en).map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
              <h2 className="font-serif text-2xl font-light text-foreground mb-6">
                {t("th", "ข้อมูลจำเพาะ", "Specifications")}
              </h2>
              <div className="space-y-4">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div
                    key={key}
                    className="flex justify-between items-center border-b border-border pb-3 last:border-0"
                  >
                    <span className="text-muted-foreground capitalize">
                      {t(
                        "th",
                        key === "speed"
                          ? "ความเร็ว"
                          : key === "resolution"
                            ? "ความละเอียด"
                            : key === "paperSize"
                              ? "ขนาดกระดาษ"
                              : key === "paperCapacity"
                                ? "ความจุกระดาษ"
                                : key === "connectivity"
                                  ? "การเชื่อมต่อ"
                                  : key === "functions"
                                    ? "ฟังก์ชัน"
                                    : key === "touchscreen"
                                      ? "จอสัมผัส"
                                      : key === "memory"
                                        ? "หน่วยความจำ"
                                        : key === "storage"
                                          ? "พื้นที่จัดเก็บ"
                                          : key === "duplexPrinting"
                                            ? "พิมพ์ 2 หน้า"
                                            : key === "scanSpeed"
                                              ? "ความเร็วในการสแกน"
                                              : key === "warmUpTime"
                                                ? "เวลาเริ่มต้น"
                                                : key,
                        key.replace(/([A-Z])/g, " $1").trim(),
                      )}
                    </span>
                    <span className="font-medium text-foreground text-right">
                      {language === "th" ? value.th : value.en}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {product.benefits && (
              <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
                <h2 className="font-serif text-2xl font-light text-foreground mb-6">
                  {t("th", "ประโยชน์ที่คุณจะได้รับ", "Benefits You'll Get")}
                </h2>
                <div className="space-y-3">
                  {(language === "th" ? product.benefits.th : product.benefits.en).map((benefit, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground leading-relaxed">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="space-y-8">
            {product.rentalIncludes && (
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 shadow-lg border-2 border-primary/20">
                <h2 className="font-serif text-2xl font-light text-foreground mb-6">
                  {t("th", "แพ็คเกจเช่ารวม", "Rental Package Includes")}
                </h2>
                <div className="space-y-3">
                  {(language === "th" ? product.rentalIncludes.th : product.rentalIncludes.en).map((item, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-foreground leading-relaxed font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
              <h2 className="font-serif text-xl font-light text-foreground mb-4">
                {t("th", "ต้องการข้อมูลเพิ่มเติม?", "Need More Information?")}
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {t(
                  "th",
                  "ติดต่อทีมงานของเราเพื่อรับคำปรึกษาและข้อเสนอพิเศษ",
                  "Contact our team for consultation and special offers",
                )}
              </p>
              <div className="space-y-3">
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl py-6">
                  <Phone className="h-5 w-5 mr-2" />
                  {t("th", "โทร 02-XXX-XXXX", "Call 02-XXX-XXXX")}
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-xl py-6 bg-transparent"
                >
                  <Mail className="h-5 w-5 mr-2" />
                  {t("th", "ส่งอีเมล", "Send Email")}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
