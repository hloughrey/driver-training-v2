import { getTestimonials, Testimonial } from '@/lib/content'
import { Card, CardContent } from '@/components/ui/card'
import { Quote } from 'lucide-react'

interface TestimonialsSectionProps {
  type?: 'C1' | 'Standard' | 'all'
  background?: string
}

export async function TestimonialsSection({
  type = 'all',
  background = 'bg-background'
}: TestimonialsSectionProps) {
  const allTestimonials = await getTestimonials()

  const testimonials = type === 'all'
    ? allTestimonials
    : allTestimonials.filter(t => t.type === type)

  if (testimonials.length === 0) return null

  return (
    <section className={`py-16 sm:py-24 ${background}`}>
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            What Our Students Say
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="pt-6 space-y-4">
                  <Quote className="h-8 w-8 text-primary" />
                  <div
                    className="text-muted-foreground"
                    dangerouslySetInnerHTML={{ __html: testimonial.quote }}
                  />
                  <div className="flex items-center gap-2 pt-2">
                    <span className="font-semibold">{testimonial.name}</span>
                    <span className="text-xs px-2 py-1 rounded-md bg-secondary text-secondary-foreground">
                      {testimonial.type}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
