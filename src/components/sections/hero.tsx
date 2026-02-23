import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

export function Hero() {
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
            Expert Driver Training in{' '}
            <span className="text-white">Warrington & Cheshire</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/90 text-shadow-hero max-w-2xl mx-auto">
            Serving Warrington, Runcorn, Widnes, St Helens, Wigan & surrounding areas
          </p>
          <p className="text-base sm:text-lg text-white/85 text-shadow-hero">
            C1 ambulance license training and standard driving lessons from ex-paramedic instructors with 40+ years combined experience
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link href="/training/c1-licence">Start C1 Training</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
              <Link href="/training/standard-licence">Book Lessons</Link>
            </Button>
          </div>
          <div className="pt-4">
            <a
              href="tel:07843847524"
              className="text-xl sm:text-2xl font-semibold text-white text-shadow-hero-strong hover:underline hover:text-white/90 transition-colors"
            >
              Call: 07843 847524
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
