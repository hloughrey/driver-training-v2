import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

export function Hero() {
  return (
    <section className="relative min-h-[500px] sm:min-h-[600px] overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero-bg.jpg"
          alt=""
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/75 via-primary/50 to-background/95" />
      </div>

      {/* Existing content */}
      <div className="container px-4 py-20 sm:py-32">
        <div className="mx-auto max-w-3xl text-center space-y-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            Expert Driver Training in{' '}
            <span className="text-primary">Warrington & Cheshire</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Serving Warrington, Runcorn, Widnes, St Helens, Wigan & surrounding areas
          </p>
          <p className="text-base sm:text-lg text-muted-foreground">
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
              className="text-xl sm:text-2xl font-semibold text-primary hover:underline"
            >
              Call: 07843 847524
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
