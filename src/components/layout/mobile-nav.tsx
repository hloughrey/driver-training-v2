'use client'

import Link from 'next/link'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'

interface MobileNavProps {
  isOpen: boolean
  onClose: () => void
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col space-y-4 mt-8">
          <Link
            href="/"
            onClick={onClose}
            className="text-lg font-medium transition-colors hover:text-primary"
          >
            Home
          </Link>
          <Link
            href="/training/c1-licence"
            onClick={onClose}
            className="text-lg font-medium transition-colors hover:text-primary"
          >
            C1 Training
          </Link>
          <Link
            href="/training/standard-licence"
            onClick={onClose}
            className="text-lg font-medium transition-colors hover:text-primary"
          >
            Standard Training
          </Link>
          <Link
            href="/about"
            onClick={onClose}
            className="text-lg font-medium transition-colors hover:text-primary"
          >
            About
          </Link>
          <Link
            href="/faq"
            onClick={onClose}
            className="text-lg font-medium transition-colors hover:text-primary"
          >
            FAQ
          </Link>
          <Link
            href="/contact"
            onClick={onClose}
            className="text-lg font-medium transition-colors hover:text-primary"
          >
            Contact
          </Link>
          <div className="pt-4 border-t">
            <Button asChild className="w-full" size="lg">
              <a href="tel:07843847524">Call: 07843 847524</a>
            </Button>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
