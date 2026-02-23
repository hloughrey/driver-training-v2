import { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { CTASection } from '@/components/sections/cta-section'
import { TestimonialsSection } from '@/components/sections/testimonials-section'
import { createServiceSchema } from '@/lib/metadata'
import { Car, CheckCircle, Shield, Clock } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Standard Driving Lessons - Learn to Drive in Warrington',
  description: 'Professional driving lessons in Warrington, Cheshire. Learn from ex-paramedic instructors with defensive driving expertise. Serving Runcorn, Widnes, St Helens, Wigan.',
  keywords: ['driving lessons Warrington', 'learn to drive Warrington', 'driving instructor Runcorn', 'driving lessons Widnes', 'driving instructor Cheshire']
}

export default function StandardLicensePage() {
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

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-muted/50 to-background py-20">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-block p-3 bg-primary/10 rounded-full mb-4">
              <Car className="h-12 w-12 text-primary" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold">Standard Driving Lessons</h1>
            <p className="text-xl text-muted-foreground">
              Learn to drive with confidence from ex-paramedic instructors
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild size="lg">
                <Link href="/contact">Book Your Lessons</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="tel:07843847524">Call: 07843 847524</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-background">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Why Learn With Us?</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <div className="mb-2">
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Defensive Driving Expertise</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our emergency services background means we teach defensive driving techniques from day one, helping you become a safer, more aware driver.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="mb-2">
                    <CheckCircle className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">40+ Years Experience</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Combined emergency services and driving instruction experience means you're learning from true professionals.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="mb-2">
                    <Clock className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Flexible Scheduling</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We offer flexible lesson times to fit around your work, studies, or other commitments. Evening and weekend slots available.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="mb-2">
                    <Car className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Patient, Calm Instruction</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our paramedic background taught us to stay calm under pressure and communicate clearly—perfect skills for helping nervous learners.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-16 bg-muted/50">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">What You'll Learn</h2>
            <Card>
              <CardContent className="pt-6 space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    Vehicle Controls & Road Safety
                  </h4>
                  <p className="text-muted-foreground ml-7">
                    Master the basics of vehicle control, including steering, gear changes, clutch control, and understanding road signs and markings.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    Hazard Awareness & Defensive Driving
                  </h4>
                  <p className="text-muted-foreground ml-7">
                    Learn to identify and respond to potential hazards early, using defensive driving techniques developed from emergency services experience.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    Maneuvers & Parking
                  </h4>
                  <p className="text-muted-foreground ml-7">
                    Perfect your parallel parking, bay parking, and all test maneuvers with patient, step-by-step instruction.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    All Weather & Driving Conditions
                  </h4>
                  <p className="text-muted-foreground ml-7">
                    Gain confidence driving in rain, at night, and in various traffic conditions across urban and rural areas.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    Test Preparation
                  </h4>
                  <p className="text-muted-foreground ml-7">
                    Comprehensive preparation for your practical driving test, including mock tests on actual test routes.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-background">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Lesson Packages</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Single Lesson</CardTitle>
                  <CardDescription>Try before you commit</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-3xl font-bold">£35</div>
                  <ul className="space-y-2 text-base text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>1 hour lesson</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Flexible scheduling</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Perfect for first timers</span>
                    </li>
                  </ul>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/contact">Book Now</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary">
                <CardHeader>
                  <CardTitle>10 Lesson Package</CardTitle>
                  <CardDescription className="text-primary font-semibold">Most Popular</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="text-3xl font-bold">£330</div>
                    <div className="text-sm text-muted-foreground">Save £20</div>
                  </div>
                  <ul className="space-y-2 text-base text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>10 hours of lessons</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Flexible scheduling</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Progress tracking</span>
                    </li>
                  </ul>
                  <Button asChild className="w-full">
                    <Link href="/contact">Book Now</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>20 Lesson Package</CardTitle>
                  <CardDescription>Best Value</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="text-3xl font-bold">£640</div>
                    <div className="text-sm text-muted-foreground">Save £60</div>
                  </div>
                  <ul className="space-y-2 text-base text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>20 hours of lessons</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Flexible scheduling</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Complete test preparation</span>
                    </li>
                  </ul>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/contact">Book Now</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
            <p className="text-center text-muted-foreground mt-6">
              Payment plans available. Contact us to discuss options.
            </p>
          </div>
        </div>
      </section>

      <TestimonialsSection type="Standard" background="bg-background" />

      {/* Service Area */}
      <section className="py-16 bg-muted/50">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Service Area</h2>
            <p className="text-muted-foreground text-lg mb-6">
              We provide standard driving lessons within a 20-mile radius of Warrington, covering:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-muted-foreground max-w-2xl mx-auto">
              <div>Warrington</div>
              <div>Runcorn</div>
              <div>Widnes</div>
              <div>St Helens</div>
              <div>Wigan</div>
              <div>Sale</div>
              <div>Altrincham</div>
              <div>Northwich</div>
              <div>Knutsford</div>
              <div>Chester</div>
              <div>Parts of Manchester</div>
              <div>Surrounding areas</div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
