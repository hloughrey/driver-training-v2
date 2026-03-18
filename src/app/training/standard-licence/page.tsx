import { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { CTASection } from '@/components/sections/cta-section'
import { TestimonialsSection } from '@/components/sections/testimonials-section'
import { PageHero } from '@/components/sections/page-hero'
import { createServiceSchema } from '@/lib/metadata'
import { getPageContent, getSiteSettings } from '@/lib/content'
import { Car, CheckCircle, Shield, Clock } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Standard Driving Lessons - Learn to Drive in Warrington',
  description: 'Professional driving lessons in Warrington, Cheshire. Learn from ex-paramedic instructors with defensive driving expertise. Serving Runcorn, Widnes, St Helens, Wigan.',
  keywords: ['driving lessons Warrington', 'learn to drive Warrington', 'driving instructor Runcorn', 'driving lessons Widnes', 'driving instructor Cheshire']
}

const WHY_US_ICONS = [Shield, CheckCircle, Clock, Car]

interface WhyUsItem {
  title: string
  description: string
}

interface LearnItem {
  heading: string
  description: string
}

interface PricingPackage {
  name: string
  tagline: string
  price: string
  savings: string
  featured: boolean
  features: string[]
}

interface StandardContent {
  hero: { title: string; description: string }
  why_us: { title: string; items: WhyUsItem[] }
  what_you_learn: { title: string; items: LearnItem[] }
  pricing: {
    title: string
    packages: PricingPackage[]
    note: string
  }
  service_areas: {
    title: string
    description: string
    areas: string[]
  }
}

export default function StandardLicensePage() {
  const content = getPageContent('standard-licence') as unknown as StandardContent
  const site = getSiteSettings()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(createServiceSchema({
            name: 'Standard Driving Lessons',
            description: 'Professional driving lessons for learner drivers',
            areaServed: ['Warrington', 'Runcorn', 'Widnes', 'St Helens', 'Wigan', 'Sale', 'Altrincham', 'Northwich', 'Knutsford', 'Chester']
          })),
        }}
      />

      <PageHero
        title={content.hero.title}
        description={content.hero.description}
        icon={<Car className="h-12 w-12 text-primary" />}
        actions={
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/contact">Book Your Lessons</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={site.phone_href}>Call: {site.phone}</a>
            </Button>
          </div>
        }
      />

      {/* Why Choose Us */}
      <section className="py-16 bg-background">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">{content.why_us.title}</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {content.why_us.items.map((item, i) => {
                const Icon = WHY_US_ICONS[i % WHY_US_ICONS.length]
                return (
                  <Card key={i}>
                    <CardHeader>
                      <div className="mb-2">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-16 bg-muted/50">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">{content.what_you_learn.title}</h2>
            <Card>
              <CardContent className="pt-6 space-y-4">
                {content.what_you_learn.items.map((item, i) => (
                  <div key={i}>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      {item.heading}
                    </h4>
                    <p className="text-muted-foreground ml-7">{item.description}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-background">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">{content.pricing.title}</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {content.pricing.packages.map((pkg, i) => (
                <Card key={i} className={pkg.featured ? 'border-2 border-primary' : ''}>
                  <CardHeader>
                    <CardTitle>{pkg.name}</CardTitle>
                    <CardDescription className={pkg.featured ? 'text-primary font-semibold' : ''}>
                      {pkg.tagline}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="text-3xl font-bold">{pkg.price}</div>
                      {pkg.savings && (
                        <div className="text-sm text-muted-foreground">{pkg.savings}</div>
                      )}
                    </div>
                    <ul className="space-y-2 text-base text-muted-foreground">
                      {pkg.features.map((feature, j) => (
                        <li key={j} className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button asChild variant={pkg.featured ? 'default' : 'outline'} className="w-full">
                      <Link href="/contact">Book Now</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            <p className="text-center text-muted-foreground mt-6">{content.pricing.note}</p>
          </div>
        </div>
      </section>

      <TestimonialsSection type="Standard" background="bg-background" />

      {/* Service Area */}
      <section className="py-16 bg-muted/50">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">{content.service_areas.title}</h2>
            <p className="text-muted-foreground text-lg mb-6">{content.service_areas.description}</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-muted-foreground max-w-2xl mx-auto">
              {content.service_areas.areas.map((area, i) => (
                <div key={i}>{area}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
