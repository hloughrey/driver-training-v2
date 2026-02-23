import { Metadata } from 'next'
import { InstructorCard } from '@/components/sections/instructor-card'
import { CTASection } from '@/components/sections/cta-section'
import { PageHero } from '@/components/sections/page-hero'
import { createPersonSchema } from '@/lib/metadata'

export const metadata: Metadata = {
  title: 'About Us - Ex-Paramedic Driving Instructors',
  description: 'Meet Jayne and Neil, ex-paramedic driving instructors with 40+ years combined experience serving Warrington, Cheshire, and Greater Manchester.',
}

const instructors = [
  {
    name: 'Jayne Cumisky',
    image: '/jayne.jpg',
    experience: 18,
    bio: 'Jayne brings her extensive 18 years of experience from the ambulance service to help paramedic trainees master the specific skills needed for emergency medical transport. Her calm, methodical approach helps even nervous students gain confidence with larger C1 vehicles and emergency response driving techniques. Specializing in blue light training and ambulance operation, Jayne ensures all students meet the highest safety standards.',
    qualifications: [
      'ADI (Approved Driving Instructor) - DVSA Certified',
      'Defensive driving coach with 15+ years of Emergency Response Driving experience',
      'CET',
      'CAVA'
    ],
    jobTitle: 'ADI & C1 Driving Instructor'
  },
  {
    name: 'Neil Harrison',
    image: '/neil.png',
    experience: 22,
    bio: "Neil's technical expertise and patient teaching style have helped hundreds of paramedic trainees successfully obtain their C1 license with a first-time pass rate of over 90%. With 22 years in emergency services, he specializes in helping students master the challenging technical aspects of handling larger emergency vehicles, including reversing maneuvers, hazard perception, and safe driving in all weather conditions.",
    qualifications: [
      'ADI (Approved Driving Instructor) - DVSA Certified',
      'Defensive Driving coach with 20+ years of Emergency Response Driving experience',
      'Former Emergency Services Driver Trainer and Safety Consultant',
      'CET',
      'CAVA'
    ],
    jobTitle: 'ADI & C1 Driving Instructor'
  }
]

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(instructors.map(i =>
            createPersonSchema({
              name: i.name,
              description: i.bio,
              jobTitle: i.jobTitle
            })
          )),
        }}
      />

      <PageHero
        title="About Us"
        description="Two ex-paramedic driving instructors with a combined 40+ years of emergency services experience, dedicated to providing the highest quality driver training in Warrington and surrounding areas."
      />

      <div className="py-16">
        <div className="container px-4">

          <div className="max-w-4xl mx-auto space-y-12 mb-16">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold mb-4">Our Story</h2>
              <p className="text-muted-foreground leading-relaxed">
                Having both served as paramedics for many years, we understand the unique challenges and requirements of emergency vehicle driving. Our transition from paramedic work to driver training was driven by a passion to share the critical skills we developed in emergency services with the next generation of ambulance drivers and everyday motorists.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Our emergency services background gives us a unique perspective that sets us apart from traditional driving instructors. We don't just teach the mechanics of driving—we instill defensive driving techniques, hazard awareness, and the calm, methodical approach that comes from years of high-pressure emergency response driving.
              </p>
            </div>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold mb-4">Service Areas</h2>
              <p className="text-muted-foreground leading-relaxed">
                Based in Warrington, Cheshire, we provide driver training across a wide area:
              </p>
              <div className="mt-4">
                <h3 className="text-lg font-semibold mb-2">Standard License Training</h3>
                <p className="text-muted-foreground mb-2">
                  20-mile radius from Warrington, covering:
                </p>
                <ul className="grid grid-cols-2 gap-2 text-muted-foreground">
                  <li>Warrington</li>
                  <li>Runcorn</li>
                  <li>Widnes</li>
                  <li>St Helens</li>
                  <li>Wigan</li>
                  <li>Sale</li>
                  <li>Altrincham</li>
                  <li>Northwich</li>
                  <li>Knutsford</li>
                  <li>Chester</li>
                </ul>
              </div>
              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-2">C1 License Training</h3>
                <p className="text-muted-foreground">
                  Extended coverage across Greater Manchester and Merseyside, including Liverpool, Stockport, Bolton, and Manchester city centre. We're willing to travel further for specialized C1 training.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {instructors.map((instructor) => (
              <InstructorCard key={instructor.name} {...instructor} />
            ))}
          </div>
        </div>
      </div>

      <CTASection />
    </>
  )
}
