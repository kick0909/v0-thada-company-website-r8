import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export function ContactSidebar() {
  return (
    <div className="bg-card rounded-2xl shadow-lg border border-border p-8">
      <h3 className="font-serif text-2xl font-light text-foreground mb-6">ติดต่อเรา</h3>

      <div className="space-y-6">
        <div className="flex items-start space-x-4">
          <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
            <Phone className="h-5 w-5 text-primary" />
          </div>
          <div>
            <p className="font-semibold text-foreground">Phone</p>
            <p className="text-sm text-muted-foreground">064 797 9944</p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
            <Mail className="h-5 w-5 text-primary" />
          </div>
          <div>
            <p className="text-sm text-foreground font-medium">Email</p>
            <p className="text-sm text-muted-foreground">thadacopy@gmail.com</p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
            <MapPin className="h-5 w-5 text-primary" />
          </div>
          <div>
            <p className="text-sm text-foreground font-medium">Thailand</p>
            <p className="text-sm text-muted-foreground">กรุงเทพฯ 10250</p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
            <Clock className="h-5 w-5 text-primary" />
          </div>
          <div>
            <p className="text-sm text-foreground font-medium">จันทร์-ศุกร์: 8:30-17:30</p>
            <p className="text-sm text-muted-foreground">เสาร์: 9:00-16:00</p>
          </div>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-border">
        <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl py-3 font-medium shadow-lg hover:shadow-xl transition-all duration-300">
          นัดหมายปรึกษา
        </Button>
      </div>
    </div>
  )
}
