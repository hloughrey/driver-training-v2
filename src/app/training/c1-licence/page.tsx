import { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CTASection } from '@/components/sections/cta-section'
import { TestimonialsSection } from '@/components/sections/testimonials-section'
import { createServiceSchema } from '@/lib/metadata'
import { Ambulance, CheckCircle, Users, Clock } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'C1 License Training - Ambulance & Emergency Vehicle Training',
  description: 'Specialist C1 license training in Warrington for paramedics and ambulance drivers. Paramedic-to-paramedic instruction across Greater Manchester and Merseyside.',
  keywords: ['C1 license Warrington', 'C1 training Cheshire', 'ambulance driver training', 'paramedic C1 training', 'C1 license Manchester']
}

export default function C1LicensePage() {
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

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-muted/50 to-background py-20">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-block p-3 bg-primary/10 rounded-full mb-4">
              <Ambulance className="h-12 w-12 text-primary" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold">C1 License Training</h1>
            <p className="text-xl text-muted-foreground">
              Specialist training for ambulance and emergency vehicles (3.5-7.5 tonnes)
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild size="lg">
                <Link href="/contact">Book Consultation</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="tel:07843847524">Call: 07843 847524</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What is C1 */}
      <section className="py-16 bg-background">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">What is a C1 License?</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                A C1 driving license allows you to drive vehicles between 3.5 and 7.5 tonnes, including ambulances and other emergency vehicles. For paramedics and emergency medical technicians, obtaining a C1 license is essential for operating ambulances and patient transport vehicles.
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  Who Needs C1 Training?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Paramedics and emergency medical technicians</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Ambulance service personnel</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Patient transport drivers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Emergency services drivers</span>
                  </li>
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
            <h2 className="text-3xl font-bold mb-8 text-center">The Paramedic Advantage</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Real-World Experience</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Your instructors have 40+ years combined experience as paramedics. We understand the specific challenges of emergency vehicle driving because we've lived it.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Emergency Response Focus</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Learn emergency response driving techniques, blue light protocols, and the calm decision-making skills essential for ambulance operation.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Paramedic-to-Paramedic Training</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We speak your language and understand the pressures you'll face. Our training is tailored specifically for emergency medical professionals.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">90% First-Time Pass Rate</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our proven teaching methods and comprehensive preparation help the vast majority of our students pass their C1 test first time.
                  </p>
                </CardContent>
              </Card>
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
                  <div>
                    <h4 className="font-semibold mb-2">Initial Assessment</h4>
                    <p className="text-muted-foreground">
                      We assess your current driving skills and create a personalized training plan tailored to your needs and experience level.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Vehicle Familiarization</h4>
                    <p className="text-muted-foreground">
                      Learn the specifics of handling larger vehicles, including weight distribution, turning circles, and braking distances.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Maneuvers & Reversing</h4>
                    <p className="text-muted-foreground">
                      Master the challenging reversing exercises and maneuvers required for the C1 test, with a focus on ambulance-specific scenarios.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Road Driving & Hazard Awareness</h4>
                    <p className="text-muted-foreground">
                      Develop advanced hazard perception skills and safe driving techniques for all weather conditions and traffic situations.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Test Preparation</h4>
                    <p className="text-muted-foreground">
                      Comprehensive mock tests and final preparation to ensure you're fully confident and ready for your practical test.
                    </p>
                  </div>
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
                <CardTitle className="text-2xl">C1 License Training</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Our C1 training is tailored to each individual's needs. Course duration and pricing depend on your current experience level and how quickly you progress.
                </p>
                <div className="space-y-2">
                  <p className="font-semibold">Typical course includes:</p>
                  <ul className="space-y-1 text-muted-foreground ml-4">
                    <li>• Initial assessment and personalized training plan</li>
                    <li>• Practical driving instruction in C1 vehicles</li>
                    <li>• Maneuvers and reversing practice</li>
                    <li>• Mock test preparation</li>
                    <li>• All training materials</li>
                  </ul>
                </div>
                <div className="pt-4 border-t">
                  <p className="text-lg font-semibold mb-2">Contact us for a free consultation and personalized quote</p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button asChild className="w-full sm:w-auto">
                      <Link href="/contact">Get a Quote</Link>
                    </Button>
                    <Button asChild variant="outline" className="w-full sm:w-auto">
                      <a href="tel:07843847524">Call: 07843 847524</a>
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
            <h2 className="text-3xl font-bold mb-4">Extended Coverage for C1 Training</h2>
            <p className="text-muted-foreground text-lg mb-6">
              We provide C1 training across a wider area than our standard lessons, including:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-muted-foreground">
              <div>Warrington</div>
              <div>Liverpool</div>
              <div>Manchester</div>
              <div>Stockport</div>
              <div>Bolton</div>
              <div>Wigan</div>
              <div>Cheshire</div>
              <div>Merseyside</div>
            </div>
            <p className="text-muted-foreground mt-6">
              Willing to travel further for specialized C1 training
            </p>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
