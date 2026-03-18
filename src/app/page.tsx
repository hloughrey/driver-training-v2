import { Hero, HeroContent } from '@/components/sections/hero'
import { ServicesOverview, ServicesContent } from '@/components/sections/services-overview'
import { InstructorCard } from '@/components/sections/instructor-card'
import { CTASection } from '@/components/sections/cta-section'
import { TestimonialsSection } from '@/components/sections/testimonials-section'
import { getPageContent, getSiteSettings } from '@/lib/content'

interface Stat {
  value: string
  label: string
}

interface Instructor {
  name: string
  image: string
  experience: number
  bio: string
  qualifications: string[]
}

export default function HomePage() {
  const home = getPageContent('homepage')
  const about = getPageContent('about')
  const site = getSiteSettings()

  const hero = home.hero as HeroContent
  const services = home.services as ServicesContent
  const instructorsSection = home.instructors_section as { title: string; subtitle: string }
  const stats = home.stats as Stat[]
  const instructors = (about.instructors as Instructor[])

  return (
    <>
      <Hero content={hero} phone={site.phone} phone_href={site.phone_href} />
      <ServicesOverview content={services} />

      {/* Instructors Section */}
      <section className="py-16 sm:py-24 bg-muted/50">
        <div className="container px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold">{instructorsSection.title}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {instructorsSection.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {instructors.map((instructor) => (
              <InstructorCard
                key={instructor.name}
                name={instructor.name}
                image={instructor.image}
                experience={instructor.experience}
                bio={instructor.bio}
                qualifications={instructor.qualifications}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-16 bg-background">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto grid sm:grid-cols-3 gap-8 text-center">
            {stats.map((stat, i) => (
              <div key={i} className="space-y-2">
                <div className="text-4xl font-bold text-primary">{stat.value}</div>
                <div className="text-base text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsSection type="all" background="bg-muted/50" />

      <CTASection />
    </>
  )
}
