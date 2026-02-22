import { Hero } from '@/components/sections/hero'
import { ServicesOverview } from '@/components/sections/services-overview'
import { InstructorCard } from '@/components/sections/instructor-card'
import { CTASection } from '@/components/sections/cta-section'

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesOverview />

      {/* Instructors Section */}
      <section className="py-16 sm:py-24 bg-muted/50">
        <div className="container px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold">Meet Your Instructors</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Ex-paramedic professionals with 40+ years combined experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <InstructorCard
              name="Jayne Cumisky"
              image="/jayne.jpg"
              experience={18}
              bio="Jayne brings her extensive 18 years of experience from the ambulance service to help paramedic trainees master the specific skills needed for emergency medical transport. Her calm, methodical approach helps even nervous students gain confidence with larger C1 vehicles and emergency response driving techniques. Specializing in blue light training and ambulance operation, Jayne ensures all students meet the highest safety standards."
              qualifications={[
                'ADI (Approved Driving Instructor) - DVSA Certified',
                'Defensive driving coach with 15+ years of Emergency Response Driving experience',
                'CET',
                'CAVA'
              ]}
            />
            <InstructorCard
              name="Neil Harrison"
              image="/neil.png"
              experience={22}
              bio="Neil's technical expertise and patient teaching style have helped hundreds of paramedic trainees successfully obtain their C1 license with a first-time pass rate of over 90%. With 22 years in emergency services, he specializes in helping students master the challenging technical aspects of handling larger emergency vehicles, including reversing maneuvers, hazard perception, and safe driving in all weather conditions."
              qualifications={[
                'ADI (Approved Driving Instructor) - DVSA Certified',
                'Defensive Driving coach with 20+ years of Emergency Response Driving experience',
                'Former Emergency Services Driver Trainer and Safety Consultant',
                'CET',
                'CAVA'
              ]}
            />
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-16 bg-background">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto grid sm:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">40+</div>
              <div className="text-sm text-muted-foreground">Years Combined Experience</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">90%</div>
              <div className="text-sm text-muted-foreground">First-Time Pass Rate</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground">Ex-Paramedic Instructors</div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
