"use client"

import { Button } from "@/components/ui/button"
import { User, Settings, LogOut, ChevronDown } from "lucide-react"
import { createClient } from "@/lib/supabase/client"
import { useRouter } from "next/navigation"
import { useLanguage } from "@/lib/language-context"
import { useEffect, useState, useRef } from "react"

interface UserDropdownProps {
  email: string
}

export function UserDropdown({ email }: UserDropdownProps) {
  const router = useRouter()
  const { t } = useLanguage()
  const [displayName, setDisplayName] = useState(email.split("@")[0])
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const fetchCustomerData = async () => {
      const supabase = createClient()
      const {
        data: { user },
      } = await supabase.auth.getUser()

      if (user) {
        const { data: customer } = await supabase.from("customers").select("full_name").eq("id", user.id).maybeSingle()

        if (customer?.full_name) {
          setDisplayName(customer.full_name)
        }
      }
    }

    fetchCustomerData()
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpen])

  const handleSignOut = async () => {
    const supabase = createClient()
    await supabase.auth.signOut()
    router.push("/")
    router.refresh()
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <Button
        variant="outline"
        className="border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent gap-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <User className="h-4 w-4" />
        <span className="hidden sm:inline">{displayName}</span>
        <ChevronDown className="h-4 w-4" />
      </Button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg z-[9999]">
          <div className="p-3 border-b border-gray-200 dark:border-gray-700">
            <p className="text-sm font-medium leading-none">{displayName}</p>
            <p className="text-xs leading-none text-muted-foreground mt-1">{email}</p>
          </div>

          <div className="py-1">
            <button
              onClick={() => {
                setIsOpen(false)
                router.push("/customer/dashboard")
              }}
              className="w-full text-left px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-2"
            >
              <Settings className="h-4 w-4" />
              <span>{t("manageAccount")}</span>
            </button>
          </div>

          <div className="border-t border-gray-200 dark:border-gray-700 py-1">
            <button
              onClick={() => {
                setIsOpen(false)
                handleSignOut()
              }}
              className="w-full text-left px-3 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-2"
            >
              <LogOut className="h-4 w-4" />
              <span>{t("signOut")}</span>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
