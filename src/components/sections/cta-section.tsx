import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function CTASection() {
  return (
    <section className="py-16 sm:py-24 bg-primary text-primary-foreground">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Ready to Start Your Training?
          </h2>
          <p className="text-lg opacity-90">
            Get in touch today to book your first lesson or consultation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button asChild size="lg" variant="secondary" className="w-full sm:w-auto">
              <Link href="/contact">Get Started</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full sm:w-auto bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10">
              <a href="tel:07843847524">Call: 07843 847524</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
