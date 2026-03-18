import { Metadata } from 'next'
import { InstructorCard } from '@/components/sections/instructor-card'
import { CTASection } from '@/components/sections/cta-section'
import { PageHero } from '@/components/sections/page-hero'
import { createPersonSchema } from '@/lib/metadata'
import { getPageContent, getSiteSettings } from '@/lib/content'

export const metadata: Metadata = {
  title: 'About Us - Ex-Paramedic Driving Instructors',
  description: 'Meet Jayne and Neil, ex-paramedic driving instructors with 40+ years combined experience serving Warrington, Cheshire, and Greater Manchester.',
}

interface Instructor {
  name: string
  image: string
  experience: number
  bio: string
  qualifications: string[]
  job_title: string
}

interface AboutContent {
  hero: { title: string; description: string }
  story: string[]
  instructors: Instructor[]
}

export default function AboutPage() {
  const content = getPageContent('about') as unknown as AboutContent
  const site = getSiteSettings()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(content.instructors.map(i =>
            createPersonSchema({
              name: i.name,
              description: i.bio,
              jobTitle: i.job_title
            })
          )),
        }}
      />

      <PageHero
        title={content.hero.title}
        description={content.hero.description}
      />

      <div className="py-16">
        <div className="container px-4">

          <div className="max-w-4xl mx-auto space-y-12 mb-16">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold mb-4">Our Story</h2>
              {content.story.map((paragraph, i) => (
                <p key={i} className="text-muted-foreground leading-relaxed mt-4">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold mb-4">Service Areas</h2>
              <p className="text-muted-foreground leading-relaxed">
                Based in {site.location.replace('Based in ', '')}, we provide driver training across a wide area:
              </p>
              <div className="mt-4">
                <h3 className="text-lg font-semibold mb-2">Standard License Training</h3>
                <p className="text-muted-foreground mb-2">
                  20-mile radius from Warrington, covering:
                </p>
                <ul className="grid grid-cols-2 gap-2 text-muted-foreground">
                  {site.service_areas_standard.map((area, i) => (
                    <li key={i}>{area}</li>
                  ))}
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
            {content.instructors.map((instructor) => (
              <InstructorCard key={instructor.name} {...instructor} />
            ))}
          </div>
        </div>
      </div>

      <CTASection />
    </>
  )
}
