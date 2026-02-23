'use client'

import Link from 'next/link'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
} from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { Home, Truck, Car, Info, HelpCircle, Mail, Phone } from 'lucide-react'

interface MobileNavProps {
  isOpen: boolean
  onClose: () => void
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="right" className="w-[300px] sm:w-[400px] flex flex-col">
        <SheetHeader>
          <SheetTitle>Navigation</SheetTitle>
          <SheetDescription>Driver Training North West</SheetDescription>
        </SheetHeader>

        <nav className="flex flex-col gap-6 flex-1 overflow-y-auto py-4">
          {/* Home - prominent standalone */}
          <Link
            href="/"
            onClick={onClose}
            className="flex items-center gap-3 py-3 px-4 rounded-lg transition-colors hover:bg-accent hover:text-accent-foreground active:scale-[0.98]"
          >
            <Home className="size-4 text-primary" />
            <span className="text-base font-medium">Home</span>
          </Link>

          {/* Training Services Section */}
          <div className="flex flex-col gap-1">
            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-4 pb-2">
              Training Services
            </span>
            <Link
              href="/training/c1-licence"
              onClick={onClose}
              className="flex items-center gap-3 py-3 px-4 rounded-lg transition-colors bg-muted/30 border border-border hover:bg-muted/60 hover:border-primary/20 active:scale-[0.98]"
            >
              <Truck className="size-4 text-primary" />
              <span className="text-base font-medium">C1 Training</span>
            </Link>
            <Link
              href="/training/standard-licence"
              onClick={onClose}
              className="flex items-center gap-3 py-3 px-4 rounded-lg transition-colors bg-muted/30 border border-border hover:bg-muted/60 hover:border-primary/20 active:scale-[0.98]"
            >
              <Car className="size-4 text-primary" />
              <span className="text-base font-medium">Standard Training</span>
            </Link>
          </div>

          {/* Information Section */}
          <div className="flex flex-col gap-1">
            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-4 pb-2">
              Information
            </span>
            <Link
              href="/about"
              onClick={onClose}
              className="flex items-center gap-3 py-3 px-4 rounded-lg transition-colors hover:bg-accent hover:text-accent-foreground active:scale-[0.98]"
            >
              <Info className="size-4 text-muted-foreground" />
              <span className="text-base font-medium">About</span>
            </Link>
            <Link
              href="/faq"
              onClick={onClose}
              className="flex items-center gap-3 py-3 px-4 rounded-lg transition-colors hover:bg-accent hover:text-accent-foreground active:scale-[0.98]"
            >
              <HelpCircle className="size-4 text-muted-foreground" />
              <span className="text-base font-medium">FAQ</span>
            </Link>
            <Link
              href="/contact"
              onClick={onClose}
              className="flex items-center gap-3 py-3 px-4 rounded-lg transition-colors hover:bg-accent hover:text-accent-foreground active:scale-[0.98]"
            >
              <Mail className="size-4 text-muted-foreground" />
              <span className="text-base font-medium">Contact</span>
            </Link>
          </div>
        </nav>

        <SheetFooter>
          <Button size="lg" className="w-full gap-2 h-12" asChild>
            <a href="tel:07843847524">
              <Phone className="size-5" />
              <span className="flex flex-col items-start">
                <span className="text-xs opacity-80">Call Now</span>
                <span className="font-semibold">07843 847524</span>
              </span>
            </a>
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
