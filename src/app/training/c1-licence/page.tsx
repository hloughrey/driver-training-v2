import { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CTASection } from '@/components/sections/cta-section'
import { TestimonialsSection } from '@/components/sections/testimonials-section'
import { PageHero } from '@/components/sections/page-hero'
import { createServiceSchema } from '@/lib/metadata'
import { getPageContent, getSiteSettings } from '@/lib/content'
import { Ambulance, CheckCircle, Users, Clock } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'C1 License Training - Ambulance & Emergency Vehicle Training',
  description: 'Specialist C1 license training in Warrington for paramedics and ambulance drivers. Paramedic-to-paramedic instruction across Greater Manchester and Merseyside.',
  keywords: ['C1 license Warrington', 'C1 training Cheshire', 'ambulance driver training', 'paramedic C1 training', 'C1 license Manchester']
}

interface AdvantageItem {
  title: string
  description: string
}

interface CourseStep {
  heading: string
  description: string
}

interface C1Content {
  hero: { title: string; description: string }
  what_is_c1: {
    heading: string
    text: string
    who_needs_title: string
    who_needs: string[]
  }
  advantages: {
    title: string
    items: AdvantageItem[]
  }
  course: {
    steps: CourseStep[]
  }
  pricing: {
    title: string
    description: string
    includes: string[]
    cta_text: string
  }
  service_areas: {
    title: string
    description: string
    areas: string[]
    note: string
  }
}

export default function C1LicensePage() {
  const content = getPageContent('c1-licence') as unknown as C1Content
  const site = getSiteSettings()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(createServiceSchema({
            name: 'C1 License Training',
            description: 'Specialist C1 license training for ambulance and emergency vehicles',
            areaServed: ['Warrington', 'Cheshire', 'Greater Manchester', 'Liverpool', 'Manchester', 'Stockport', 'Bolton', 'Merseyside']
          })),
        }}
      />

      <PageHero
        title={content.hero.title}
        description={content.hero.description}
        icon={<Ambulance className="h-12 w-12 text-primary" />}
        actions={
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/contact">Book Consultation</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={site.phone_href}>Call: {site.phone}</a>
            </Button>
          </div>
        }
      />

      {/* What is C1 */}
      <section className="py-16 bg-background">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">{content.what_is_c1.heading}</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {content.what_is_c1.text}
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  {content.what_is_c1.who_needs_title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {content.what_is_c1.who_needs.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Train With Us */}
      <section className="py-16 bg-muted/50">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">{content.advantages.title}</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {content.advantages.items.map((item, i) => (
                <Card key={i}>
                  <CardHeader>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Course Structure */}
      <section className="py-16 bg-background">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Course Structure</h2>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    Training Program
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {content.course.steps.map((step, i) => (
                    <div key={i}>
                      <h4 className="font-semibold mb-2">{step.heading}</h4>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-muted/50">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Pricing</h2>
            <Card className="border-2 border-primary">
              <CardHeader>
                <CardTitle className="text-2xl">{content.pricing.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{content.pricing.description}</p>
                <div className="space-y-2">
                  <p className="font-semibold">Typical course includes:</p>
                  <ul className="space-y-1 text-muted-foreground ml-4">
                    {content.pricing.includes.map((item, i) => (
                      <li key={i}>• {item}</li>
                    ))}
                  </ul>
                </div>
                <div className="pt-4 border-t">
                  <p className="text-lg font-semibold mb-2">{content.pricing.cta_text}</p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button asChild className="w-full sm:w-auto">
                      <Link href="/contact">Get a Quote</Link>
                    </Button>
                    <Button asChild variant="outline" className="w-full sm:w-auto">
                      <a href={site.phone_href}>Call: {site.phone}</a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <TestimonialsSection type="C1" background="bg-background" />

      {/* Service Area */}
      <section className="py-16 bg-background">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">{content.service_areas.title}</h2>
            <p className="text-muted-foreground text-lg mb-6">{content.service_areas.description}</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-muted-foreground">
              {content.service_areas.areas.map((area, i) => (
                <div key={i}>{area}</div>
              ))}
            </div>
            <p className="text-muted-foreground mt-6">{content.service_areas.note}</p>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
