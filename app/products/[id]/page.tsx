"use client"

import { useParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Heart, Phone, Mail, CheckCircle2, Package, Wrench, Clock, Shield } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

const products = [
  {
    id: 1,
    name: "Canon C5535",
    brand: "Canon",
    type: "Multifunction",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-NvxaHKgSAYv74IDYsjZ89auoVUqpUG.png",
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
    id: 2,
    name: "Canon ADVC3520",
    brand: "Canon",
    type: "Multifunction",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-y97Slbi9CWzCv3MJTRJsO36p0jZWXB.png",
    rentalPrice: "฿4,800/เดือน",
    priceValue: 4800,
    sellingPrice: "฿285,000",
    sellingPriceValue: 285000,
    description: {
      th: "เครื่องถ่ายเอกสารสี Multifunction ความเร็วสูง 45 หน้าต่อนาที พร้อมเทคโนโลยีล้ำสมัยและจอสัมผัสขนาดใหญ่ เหมาะสำหรับสำนักงานที่ต้องการประสิทธิภาพสูง",
      en: "High-speed color multifunction copier at 45 pages per minute with advanced technology and large touchscreen, ideal for offices requiring high performance",
    },
    specifications: {
      speed: { th: "45 หน้าต่อนาที (สี/ขาวดำ)", en: "45 pages per minute (Color/B&W)" },
      resolution: { th: "1200 x 1200 dpi", en: "1200 x 1200 dpi" },
      paperSize: { th: "A3, A4, A5, B4, B5, SRA3", en: "A3, A4, A5, B4, B5, SRA3" },
      paperCapacity: { th: "1,200 แผ่น (ขยายได้สูงสุด 3,700 แผ่น)", en: "1,200 sheets (expandable to 3,700 sheets)" },
      connectivity: { th: "USB, Ethernet, Wi-Fi, NFC", en: "USB, Ethernet, Wi-Fi, NFC" },
      functions: { th: "พิมพ์สี, ถ่ายเอกสารสี, สแกนสี, แฟกซ์", en: "Color Print, Color Copy, Color Scan, Fax" },
      touchscreen: { th: "จอสัมผัส 10.1 นิ้ว", en: "10.1-inch touchscreen" },
      memory: { th: "4 GB RAM", en: "4 GB RAM" },
      storage: { th: "320 GB HDD", en: "320 GB HDD" },
      duplexPrinting: { th: "พิมพ์ 2 หน้าอัตโนมัติ", en: "Automatic duplex printing" },
      scanSpeed: { th: "สแกนความเร็ว 160 ภาพต่อนาที", en: "Scan speed 160 images per minute" },
    },
    features: {
      th: [
        "ความเร็วสูง 45 หน้าต่อนาที ทั้งสีและขาวดำ",
        "จอสัมผัสสี 10.1 นิ้ว ใช้งานง่าย",
        "ความละเอียดสูง 1200 x 1200 dpi",
        "รองรับกระดาษขนาด A3 ถึง SRA3",
        "ความจุกระดาษมาตรฐาน 1,200 แผ่น",
        "พิมพ์ 2 หน้าอัตโนมัติ ประหยัดกระดาษ",
        "สแกนความเร็วสูง 160 ภาพต่อนาที",
        "เชื่อมต่อ Wi-Fi, Ethernet, USB และ NFC",
        "ระบบรักษาความปลอดภัยขั้นสูง",
        "รองรับการพิมพ์จากมือถือ",
        "ประหยัดพลังงาน Energy Star",
      ],
      en: [
        "High speed 45 pages per minute for both color and B&W",
        "10.1-inch color touchscreen, easy to use",
        "High resolution 1200 x 1200 dpi",
        "Supports paper sizes from A3 to SRA3",
        "Standard paper capacity of 1,200 sheets",
        "Automatic duplex printing saves paper",
        "High-speed scanning at 160 images per minute",
        "Wi-Fi, Ethernet, USB, and NFC connectivity",
        "Advanced security system",
        "Supports mobile printing",
        "Energy Star certified",
      ],
    },
    benefits: {
      th: [
        "เพิ่มประสิทธิภาพการทำงานด้วยความเร็วสูง 45 หน้าต่อนาที",
        "ลดต้นทุนการพิมพ์ด้วยระบบประหยัดพลังงาน",
        "ใช้งานง่ายด้วยจอสัมผัสขนาดใหญ่",
        "รักษาความปลอดภัยข้อมูลขององค์กร",
        "รองรับการทำงานแบบ Mobile Office",
      ],
      en: [
        "Increase work efficiency with high speed of 45 pages per minute",
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
    id: 3,
    name: "Canon ADV DX C3720",
    brand: "Canon",
    type: "เครื่องพิมพ์",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-HJ6ab0BgaOBYir6F0yEGSnM8abhaSf.png",
    rentalPrice: "฿1,200/เดือน",
    priceValue: 1200,
    sellingPrice: "฿18,900",
    sellingPriceValue: 18900,
    promotion: {
      discount: 15,
      originalPrice: 1412,
      label: "ลด 15%",
    },
    description: {
      th: "เครื่องพิมพ์สี Inkjet คุณภาพสูง ประหยัดค่าหมึก เหมาะสำหรับงานกราฟิกและงานพิมพ์สีที่ต้องการความละเอียดสูง",
      en: "High-quality color Inkjet printer, cost-effective ink usage, ideal for graphics and high-resolution color printing",
    },
    specifications: {
      speed: {
        th: "20 หน้าต่อนาที (สี), 24 หน้าต่อนาที (ขาวดำ)",
        en: "20 pages per minute (Color), 24 pages per minute (B&W)",
      },
      resolution: { th: "4800 x 1200 dpi", en: "4800 x 1200 dpi" },
      paperSize: { th: "A3, A4, A5, B4, B5", en: "A3, A4, A5, B4, B5" },
      paperCapacity: { th: "250 แผ่น", en: "250 sheets" },
      connectivity: { th: "USB, Ethernet, Wi-Fi", en: "USB, Ethernet, Wi-Fi" },
      functions: { th: "พิมพ์สี, สแกน, ถ่ายเอกสาร", en: "Color Print, Scan, Copy" },
      inkSystem: { th: "ระบบหมึกแยกสี 4 สี", en: "4-color individual ink system" },
    },
    features: {
      th: [
        "ความละเอียดสูงถึง 4800 x 1200 dpi",
        "ระบบหมึกแยกสี ประหยัดค่าใช้จ่าย",
        "พิมพ์สีคุณภาพสูง เหมาะสำหรับงานกราฟิก",
        "รองรับกระดาษขนาด A3",
        "เชื่อมต่อ Wi-Fi ใช้งานง่าย",
        "พิมพ์จากมือถือได้",
        "ประหยัดพลังงาน",
        "เสียงเงียบขณะทำงาน",
      ],
      en: [
        "High resolution up to 4800 x 1200 dpi",
        "Individual ink system saves costs",
        "High-quality color printing ideal for graphics",
        "Supports A3 paper size",
        "Wi-Fi connectivity for easy use",
        "Mobile printing support",
        "Energy efficient",
        "Quiet operation",
      ],
    },
    benefits: {
      th: [
        "ประหยัดค่าหมึกด้วยระบบหมึกแยกสี",
        "คุณภาพสีสันสดใสเหมาะสำหรับงานกราฟิก",
        "ใช้งานง่ายด้วย Wi-Fi",
        "เหมาะสำหรับ SME และ Home Office",
      ],
      en: [
        "Save ink costs with individual ink system",
        "Vibrant color quality ideal for graphics",
        "Easy to use with Wi-Fi",
        "Perfect for SME and Home Office",
      ],
    },
    rentalIncludes: {
      th: ["ค่าเช่าเครื่องรายเดือน", "บริการบำรุงรักษา", "อะไหล่และชิ้นส่วนทดแทน", "หมึกพิมพ์ทุกสี", "บริการติดตั้ง"],
      en: [
        "Monthly rental fee",
        "Maintenance service",
        "Spare parts and replacements",
        "All color inks",
        "Installation service",
      ],
    },
  },
  {
    id: 4,
    name: "Xerox AltaLink B8155",
    brand: "Xerox",
    type: "Multifunction",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-VsXTskxMpXJW3YyNH9244U9cRsD5jA.png",
    rentalPrice: "฿7,500/เดือน",
    priceValue: 7500,
    sellingPrice: "฿520,000",
    sellingPriceValue: 520000,
    description: {
      th: "เครื่องถ่ายเอกสารขาวดำ Multifunction ระดับเอนเทอร์ไพรส์ ความเร็วสูง 55 หน้าต่อนาที พร้อมเทคโนโลยี ConnectKey และระบบรักษาความปลอดภัยขั้นสูง",
      en: "Enterprise-level black and white multifunction copier with high speed of 55 pages per minute, featuring ConnectKey technology and advanced security system",
    },
    specifications: {
      speed: { th: "55 หน้าต่อนาที", en: "55 pages per minute" },
      resolution: { th: "1200 x 1200 dpi", en: "1200 x 1200 dpi" },
      paperSize: { th: 'A3, A4, A5, B4, B5, 11" x 17"', en: 'A3, A4, A5, B4, B5, 11" x 17"' },
      paperCapacity: { th: "2,180 แผ่น (ขยายได้สูงสุด 5,140 แผ่น)", en: "2,180 sheets (expandable to 5,140 sheets)" },
      connectivity: { th: "USB 3.0, Gigabit Ethernet, Wi-Fi 6, NFC", en: "USB 3.0, Gigabit Ethernet, Wi-Fi 6, NFC" },
      functions: { th: "พิมพ์, ถ่ายเอกสาร, สแกน, แฟกซ์, อีเมล", en: "Print, Copy, Scan, Fax, Email" },
      touchscreen: { th: "จอสัมผัส 10.1 นิ้ว ConnectKey", en: "10.1-inch ConnectKey touchscreen" },
      memory: { th: "8 GB RAM", en: "8 GB RAM" },
      storage: { th: "500 GB SSD", en: "500 GB SSD" },
      duplexPrinting: { th: "พิมพ์ 2 หน้าอัตโนมัติความเร็วสูง", en: "High-speed automatic duplex printing" },
      scanSpeed: { th: "สแกนความเร็ว 270 ภาพต่อนาที", en: "Scan speed 270 images per minute" },
    },
    features: {
      th: [
        "ความเร็วสูง 55 หน้าต่อนาที",
        "เทคโนโลยี ConnectKey ใช้งานง่ายเหมือนแท็บเล็ต",
        "จอสัมผัส 10.1 นิ้ว ปรับแต่งได้",
        "ระบบรักษาความปลอดภัยระดับเอนเทอร์ไพรส์",
        "สแกนความเร็วสูง 270 ภาพต่อนาที",
        "ความจุกระดาษมาตรฐาน 2,180 แผ่น",
        "หน่วยความจำ 8 GB RAM และ SSD 500 GB",
        "รองรับ Wi-Fi 6 และ Gigabit Ethernet",
        "พิมพ์ 2 หน้าอัตโนมัติความเร็วสูง",
        "รองรับการพิมพ์จากมือถือและ Cloud",
        "ประหยัดพลังงาน Energy Star",
      ],
      en: [
        "High speed of 55 pages per minute",
        "ConnectKey technology, easy to use like a tablet",
        "10.1-inch customizable touchscreen",
        "Enterprise-level security system",
        "High-speed scanning at 270 images per minute",
        "Standard paper capacity of 2,180 sheets",
        "8 GB RAM memory and 500 GB SSD",
        "Supports Wi-Fi 6 and Gigabit Ethernet",
        "High-speed automatic duplex printing",
        "Supports mobile and cloud printing",
        "Energy Star certified",
      ],
    },
    benefits: {
      th: [
        "เพิ่มผลผลิตสูงสุดด้วยความเร็ว 55 หน้าต่อนาที",
        "ลดต้นทุนด้วยระบบประหยัดพลังงาน",
        "ใช้งานง่ายด้วยเทคโนโลยี ConnectKey",
        "รักษาความปลอดภัยข้อมูลระดับเอนเทอร์ไพรส์",
        "รองรับการทำงานยุคดิจิทัล",
        "ความจุกระดาษสูง ลดการเติมกระดาษบ่อยครั้ง",
      ],
      en: [
        "Maximize productivity with 55 pages per minute speed",
        "Reduce costs with energy-saving system",
        "Easy to use with ConnectKey technology",
        "Enterprise-level data security",
        "Support digital era work style",
        "High paper capacity reduces frequent refilling",
      ],
    },
    rentalIncludes: {
      th: [
        "ค่าเช่าเครื่องรายเดือน",
        "บริการบำรุงรักษาและซ่อมแซมแบบ Premium",
        "อะไหล่และชิ้นส่วนทดแทนทั้งหมด",
        "หมึกพิมพ์ขาวดำคุณภาพสูง",
        "บริการติดตั้งและอบรมเชิงลึก",
        "บริการช่างเทคนิคประจำ พร้อม SLA",
        "การอัพเดทซอฟต์แวร์และเฟิร์มแวร์",
        "บริการ Remote Monitoring",
      ],
      en: [
        "Monthly rental fee",
        "Premium maintenance and repair service",
        "All spare parts and replacements",
        "High-quality black toner",
        "In-depth installation and training service",
        "Dedicated technician service with SLA",
        "Software and firmware updates",
        "Remote Monitoring service",
      ],
    },
  },
  {
    id: 5,
    name: "Xerox AltaLink C8170",
    brand: "Xerox",
    type: "Multifunction",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-7H0WNiTrhc6WGOLLvV8VBgmhTMyO3u.png",
    rentalPrice: "฿9,800/เดือน",
    priceValue: 9800,
    sellingPrice: "฿750,000",
    sellingPriceValue: 750000,
    description: {
      th: "เครื่องถ่ายเอกสารสี Multifunction ระดับเอนเทอร์ไพรส์ ความเร็วสูงสุด 70 หน้าต่อนาที พร้อมเทคโนโลยี ConnectKey และระบบรักษาความปลอดภัยขั้นสูง เหมาะสำหรับองค์กรขนาดใหญ่",
      en: "Enterprise-level color multifunction copier with maximum speed of 70 pages per minute, featuring ConnectKey technology and advanced security system, ideal for large organizations",
    },
    specifications: {
      speed: { th: "70 หน้าต่อนาที (สี/ขาวดำ)", en: "70 pages per minute (Color/B&W)" },
      resolution: { th: "1200 x 1200 dpi", en: "1200 x 1200 dpi" },
      paperSize: { th: 'A3, A4, A5, B4, B5, SRA3, 12" x 18"', en: 'A3, A4, A5, B4, B5, SRA3, 12" x 18"' },
      paperCapacity: { th: "2,180 แผ่น (ขยายได้สูงสุด 5,140 แผ่น)", en: "2,180 sheets (expandable to 5,140 sheets)" },
      connectivity: {
        th: "USB 3.0, Gigabit Ethernet, Wi-Fi 6, NFC, Bluetooth",
        en: "USB 3.0, Gigabit Ethernet, Wi-Fi 6, NFC, Bluetooth",
      },
      functions: { th: "พิมพ์สี, ถ่ายเอกสารสี, สแกนสี, แฟกซ์, อีเมล", en: "Color Print, Color Copy, Color Scan, Fax, Email" },
      touchscreen: { th: "จอสัมผัส 10.1 นิ้ว ConnectKey", en: "10.1-inch ConnectKey touchscreen" },
      memory: { th: "10 GB RAM", en: "10 GB RAM" },
      storage: { th: "500 GB SSD", en: "500 GB SSD" },
      duplexPrinting: { th: "พิมพ์ 2 หน้าอัตโนมัติความเร็วสูง", en: "High-speed automatic duplex printing" },
      scanSpeed: { th: "สแกนความเร็ว 270 ภาพต่อนาที", en: "Scan speed 270 images per minute" },
      warmUpTime: { th: "เวลาเริ่มต้น 30 วินาที", en: "Warm-up time 30 seconds" },
    },
    features: {
      th: [
        "ความเร็วสูงสุด 70 หน้าต่อนาที ทั้งสีและขาวดำ",
        "เทคโนโลยี ConnectKey ใช้งานง่ายเหมือนแท็บเล็ต",
        "จอสัมผัสขนาดใหญ่ 10.1 นิ้ว ปรับแต่งได้",
        "ระบบรักษาความปลอดภัยระดับเอนเทอร์ไพรส์",
        "สแกนความเร็วสูง 270 ภาพต่อนาที",
        "ความจุกระดาษมาตรฐาน 2,180 แผ่น",
        "หน่วยความจำ 10 GB RAM และ SSD 500 GB",
        "รองรับ Wi-Fi 6 และ Gigabit Ethernet",
        "พิมพ์ 2 หน้าอัตโนมัติความเร็วสูง",
        "รองรับการพิมพ์จากมือถือและ Cloud",
        "ประหยัดพลังงาน Energy Star",
        'รองรับกระดาษขนาดใหญ่ถึง 12" x 18"',
        "ระบบ Color Management ขั้นสูง",
      ],
      en: [
        "Maximum speed of 70 pages per minute for both color and B&W",
        "ConnectKey technology, easy to use like a tablet",
        "Large 10.1-inch customizable touchscreen",
        "Enterprise-level security system",
        "High-speed scanning at 270 images per minute",
        "Standard paper capacity of 2,180 sheets",
        "10 GB RAM memory and 500 GB SSD",
        "Supports Wi-Fi 6 and Gigabit Ethernet",
        "High-speed automatic duplex printing",
        "Supports mobile and cloud printing",
        "Energy Star certified",
        'Supports large paper sizes up to 12" x 18"',
        "Advanced Color Management system",
      ],
    },
    benefits: {
      th: [
        "เพิ่มผลผลิตสูงสุดด้วยความเร็ว 70 หน้าต่อนาที",
        "ลดต้นทุนด้วยระบบประหยัดพลังงาน",
        "ใช้งานง่ายด้วยเทคโนโลยี ConnectKey",
        "รักษาความปลอดภัยข้อมูลระดับเอนเทอร์ไพรส์",
        "รองรับการทำงานยุคดิจิทัลอย่างเต็มรูปแบบ",
        "ความจุกระดาษสูง ลดการเติมกระดาษบ่อยครั้ง",
        "คุณภาพสีสันสดใสด้วยระบบ Color Management",
      ],
      en: [
        "Maximize productivity with 70 pages per minute speed",
        "Reduce costs with energy-saving system",
        "Easy to use with ConnectKey technology",
        "Enterprise-level data security",
        "Fully support digital era work style",
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
  {
    id: 6,
    name: "Xerox AltaLink C8155",
    brand: "Xerox",
    type: "Multifunction",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-jOX2oA0Ist08K1K887m81p9kYethSd.png",
    rentalPrice: "฿8,500/เดือน",
    priceValue: 8500,
    sellingPrice: "฿650,000",
    sellingPriceValue: 650000,
    description: {
      th: "เครื่องถ่ายเอกสารสี Multifunction ระดับเอนเทอร์ไพรส์ ความเร็ว 55 หน้าต่อนาที พร้อมเทคโนโลยี ConnectKey ล้ำสมัยและระบบรักษาความปลอดภัยขั้นสูง",
      en: "Enterprise-level color multifunction copier with speed of 55 pages per minute, featuring advanced ConnectKey technology and advanced security system",
    },
    specifications: {
      speed: { th: "55 หน้าต่อนาที (สี/ขาวดำ)", en: "55 pages per minute (Color/B&W)" },
      resolution: { th: "1200 x 1200 dpi", en: "1200 x 1200 dpi" },
      paperSize: { th: 'A3, A4, A5, B4, B5, SRA3, 12" x 18"', en: 'A3, A4, A5, B4, B5, SRA3, 12" x 18"' },
      paperCapacity: { th: "2,180 แผ่น (ขยายได้สูงสุด 5,140 แผ่น)", en: "2,180 sheets (expandable to 5,140 sheets)" },
      connectivity: {
        th: "USB 3.0, Gigabit Ethernet, Wi-Fi 6, NFC, Bluetooth",
        en: "USB 3.0, Gigabit Ethernet, Wi-Fi 6, NFC, Bluetooth",
      },
      functions: { th: "พิมพ์สี, ถ่ายเอกสารสี, สแกนสี, แฟกซ์, อีเมล", en: "Color Print, Color Copy, Color Scan, Fax, Email" },
      touchscreen: { th: "จอสัมผัส 10.1 นิ้ว ConnectKey", en: "10.1-inch ConnectKey touchscreen" },
      memory: { th: "8 GB RAM", en: "8 GB RAM" },
      storage: { th: "500 GB SSD", en: "500 GB SSD" },
      duplexPrinting: { th: "พิมพ์ 2 หน้าอัตโนมัติความเร็วสูง", en: "High-speed automatic duplex printing" },
      scanSpeed: { th: "สแกนความเร็ว 270 ภาพต่อนาที", en: "Scan speed 270 images per minute" },
      warmUpTime: { th: "เวลาเริ่มต้น 30 วินาที", en: "Warm-up time 30 seconds" },
    },
    features: {
      th: [
        "ความเร็ว 55 หน้าต่อนาที ทั้งสีและขาวดำ",
        "เทคโนโลยี ConnectKey ล้ำสมัย",
        "จอสัมผัส 10.1 นิ้ว ปรับแต่งได้",
        "ระบบรักษาความปลอดภัยระดับเอนเทอร์ไพรส์",
        "สแกนความเร็วสูง 270 ภาพต่อนาที",
        "ความจุกระดาษมาตรฐาน 2,180 แผ่น",
        "หน่วยความจำ 8 GB RAM และ SSD 500 GB",
        "รองรับ Wi-Fi 6 และ Gigabit Ethernet",
        "พิมพ์ 2 หน้าอัตโนมัติความเร็วสูง",
        "รองรับการพิมพ์จากมือถือและ Cloud",
        "ประหยัดพลังงาน Energy Star",
        'รองรับกระดาษขนาดใหญ่ถึง 12" x 18"',
        "ระบบ Color Management ขั้นสูง",
      ],
      en: [
        "Speed of 55 pages per minute for both color and B&W",
        "Advanced ConnectKey technology",
        "10.1-inch customizable touchscreen",
        "Enterprise-level security system",
        "High-speed scanning at 270 images per minute",
        "Standard paper capacity of 2,180 sheets",
        "8 GB RAM memory and 500 GB SSD",
        "Supports Wi-Fi 6 and Gigabit Ethernet",
        "High-speed automatic duplex printing",
        "Supports mobile and cloud printing",
        "Energy Star certified",
        'Supports large paper sizes up to 12" x 18"',
        "Advanced Color Management system",
      ],
    },
    benefits: {
      th: [
        "เพิ่มผลผลิตด้วยความเร็ว 55 หน้าต่อนาที",
        "ลดต้นทุนด้วยระบบประหยัดพลังงาน",
        "ใช้งานง่ายด้วยเทคโนโลยี ConnectKey",
        "รักษาความปลอดภัยข้อมูลระดับเอนเทอร์ไพรส์",
        "รองรับการทำงานยุคดิจิทัล",
        "ความจุกระดาษสูง ลดการเติมกระดาษบ่อยครั้ง",
        "คุณภาพสีสันสดใสด้วยระบบ Color Management",
      ],
      en: [
        "Increase productivity with 55 pages per minute speed",
        "Reduce costs with energy-saving system",
        "Easy to use with ConnectKey technology",
        "Enterprise-level data security",
        "Support digital era work style",
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

            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 mb-6 border-2 border-primary/20">
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-2">
                  {t("th", "ราคาพิเศษสำหรับคุณ", "Special Price for You")}
                </p>
                <p className="text-3xl font-bold text-primary mb-3">
                  {t("th", "ติดต่อสอบถามราคา", "Contact for Pricing")}
                </p>
                <p className="text-sm text-muted-foreground">
                  {t(
                    "th",
                    "เรามีแพ็คเกจที่เหมาะสมกับทุกความต้องการ ติดต่อเราเพื่อรับใบเสนอราคาพิเศษ",
                    "We have packages suitable for every need. Contact us for a special quote",
                  )}
                </p>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-6">
              {language === "th" ? product.description.th : product.description.en}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl py-6 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300">
                <Phone className="h-5 w-5 mr-2" />
                {t("th", "ติดต่อสอบถามราคา", "Contact for Pricing")}
              </Button>
              <Button
                variant="outline"
                className="flex-1 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-xl py-6 text-lg font-medium bg-transparent"
              >
                <Mail className="h-5 w-5 mr-2" />
                {t("th", "ส่งข้อความ", "Send Message")}
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
                                                : key === "inkSystem"
                                                  ? "ระบบหมึก"
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
                  {t("th", "ติดต่อสอบถามราคา", "Contact for Pricing")}
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-xl py-6 bg-transparent"
                >
                  <Mail className="h-5 w-5 mr-2" />
                  {t("th", "ส่งข้อความ", "Send Message")}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
