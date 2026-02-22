import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Ambulance, Car } from 'lucide-react'

export function ServicesOverview() {
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold">Our Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose the training that fits your needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* C1 Training Card */}
          <Card className="border-2 border-primary">
            <CardHeader>
              <div className="mb-4">
                <Ambulance className="h-12 w-12 text-primary" />
              </div>
              <CardTitle className="text-2xl">C1 License Training</CardTitle>
              <CardDescription className="text-base">
                Specialist training for ambulance and emergency vehicles
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-2 text-base">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Vehicles 3.5-7.5 tonnes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Paramedic-to-paramedic training</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Emergency response driving techniques</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Extended coverage: Liverpool, Manchester, Stockport, Bolton</span>
                </li>
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
              <CardTitle className="text-2xl">Standard License Training</CardTitle>
              <CardDescription className="text-base">
                Professional driving lessons for learner drivers
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-2 text-base">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Defensive driving approach</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Emergency services expertise</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Flexible lesson scheduling</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>20 mile radius from Warrington</span>
                </li>
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
