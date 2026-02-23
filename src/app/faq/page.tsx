import { Metadata } from 'next'
import { getFAQs } from '@/lib/content'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { CTASection } from '@/components/sections/cta-section'
import { PageHero } from '@/components/sections/page-hero'

export const metadata: Metadata = {
  title: 'FAQ - Frequently Asked Questions',
  description: 'Common questions about C1 and standard driving lessons in Warrington. Learn about our training, pricing, service areas, and what makes our ex-paramedic instructors unique.',
}

export default async function FAQPage() {
  const faqs = await getFAQs()

  const categories = ['C1 License', 'Standard License', 'General', 'Pricing']
  const categorizedFAQs = categories.map(category => ({
    category,
    faqs: faqs.filter(faq => faq.category === category)
  })).filter(cat => cat.faqs.length > 0)

  // Create FAQPage structured data
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <PageHero
        title="Frequently Asked Questions"
        description="Everything you need to know about our driver training services"
      />

      <div className="py-16">
        <div className="container px-4">

          <div className="max-w-4xl mx-auto space-y-12">
            {categorizedFAQs.map(({ category, faqs: categoryFAQs }) => (
              <div key={category}>
                <h2 className="text-2xl font-bold mb-6">{category}</h2>
                <Accordion type="single" collapsible className="w-full">
                  {categoryFAQs.map((faq, index) => (
                    <AccordionItem key={index} value={`${category}-${index}`}>
                      <AccordionTrigger className="text-left">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground prose prose-sm max-w-none">
                        <div dangerouslySetInnerHTML={{ __html: faq.answer }} />
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto mt-12 text-center">
            <p className="text-muted-foreground">
              Still have questions?{' '}
              <a href="/contact" className="text-primary hover:underline font-semibold">
                Contact us
              </a>{' '}
              or call{' '}
              <a href="tel:07843847524" className="text-primary hover:underline font-semibold">
                07843 847524
              </a>
            </p>
          </div>
        </div>
      </div>

      <CTASection />
    </>
  )
}
