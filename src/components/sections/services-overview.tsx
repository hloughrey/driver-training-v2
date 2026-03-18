import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Ambulance, Car } from 'lucide-react'

export interface ServiceCard {
  title: string
  description: string
  features: string[]
}

export interface ServicesContent {
  title: string
  subtitle: string
  c1: ServiceCard
  standard: ServiceCard
}

interface ServicesOverviewProps {
  content: ServicesContent
}

export function ServicesOverview({ content }: ServicesOverviewProps) {
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold">{content.title}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {content.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* C1 Training Card */}
          <Card className="border-2 border-primary">
            <CardHeader>
              <div className="mb-4">
                <Ambulance className="h-12 w-12 text-primary" />
              </div>
              <CardTitle className="text-2xl">{content.c1.title}</CardTitle>
              <CardDescription className="text-base">
                {content.c1.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-2 text-base">
                {content.c1.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button asChild className="w-full mt-4">
                <Link href="/training/c1-licence">Learn More</Link>
              </Button>
            </CardContent>
          </Card>

          {/* Standard Training Card */}
          <Card>
            <CardHeader>
              <div className="mb-4">
                <Car className="h-12 w-12 text-primary" />
              </div>
              <CardTitle className="text-2xl">{content.standard.title}</CardTitle>
              <CardDescription className="text-base">
                {content.standard.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-2 text-base">
                {content.standard.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button asChild variant="outline" className="w-full mt-4">
                <Link href="/training/standard-licence">Learn More</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
