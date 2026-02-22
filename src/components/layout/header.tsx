'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'
import { MobileNav } from './mobile-nav'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-shadow ${
          isScrolled ? 'shadow-md' : ''
        }`}
      >
        <div className="container flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold text-lg sm:text-xl">
              Driver Training <span className="text-primary">North West</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="/"
              className="text-base font-medium transition-colors hover:text-primary"
            >
              Home
            </Link>
            <Link
              href="/training/c1-licence"
              className="text-base font-medium transition-colors hover:text-primary"
            >
              C1 Training
            </Link>
            <Link
              href="/training/standard-licence"
              className="text-base font-medium transition-colors hover:text-primary"
            >
              Standard Training
            </Link>
            <Link
              href="/about"
              className="text-base font-medium transition-colors hover:text-primary"
            >
              About
            </Link>
            <Link
              href="/faq"
              className="text-base font-medium transition-colors hover:text-primary"
            >
              FAQ
            </Link>
            <Link
              href="/contact"
              className="text-base font-medium transition-colors hover:text-primary"
            >
              Contact
            </Link>
            <Button asChild size="sm">
              <a href="tel:07843847524">Call: 07843 847524</a>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      <MobileNav
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  )
}
