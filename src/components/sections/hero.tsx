import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

export interface HeroContent {
  headline: string
  subheadline: string
  description: string
  primary_cta_text: string
  primary_cta_href: string
  secondary_cta_text: string
  secondary_cta_href: string
}

interface HeroProps {
  content: HeroContent
  phone: string
  phone_href: string
}

export function Hero({ content, phone, phone_href }: HeroProps) {
  return (
    <section className="relative min-h-[500px] sm:min-h-[600px] overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/driver-training.jpg"
          alt="Driver training on a scenic road"
          fill
          className="object-cover"
          priority
          sizes="100vw"
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/30 via-primary/20 to-background/90" />
      </div>

      {/* Existing content */}
      <div className="container px-4 py-20 sm:py-32">
        <div className="mx-auto max-w-3xl text-center space-y-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white text-shadow-hero-strong">
            {content.headline}
          </h1>
          <p className="text-lg sm:text-xl text-white/90 text-shadow-hero max-w-2xl mx-auto">
            {content.subheadline}
          </p>
          <p className="text-base sm:text-lg text-white/85 text-shadow-hero">
            {content.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link href={content.primary_cta_href}>{content.primary_cta_text}</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
              <Link href={content.secondary_cta_href}>{content.secondary_cta_text}</Link>
            </Button>
          </div>
          <div className="pt-4">
            <a
              href={phone_href}
              className="text-xl sm:text-2xl font-semibold text-white text-shadow-hero-strong hover:underline hover:text-white/90 transition-colors"
            >
              Call: {phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
