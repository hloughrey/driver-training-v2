import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export interface FAQ {
  question: string
  answer: string
  category: string
  order: number
}

export interface Testimonial {
  name: string
  type: 'C1' | 'Standard'
  quote: string
  display: boolean
}

export async function getFAQs(): Promise<FAQ[]> {
  try {
    const faqsDirectory = path.join(process.cwd(), 'src/content/faqs')

    if (!fs.existsSync(faqsDirectory)) {
      return []
    }

    const filenames = fs.readdirSync(faqsDirectory)
    const faqs = filenames
      .filter(filename => filename.endsWith('.md'))
      .map(filename => {
        const filePath = path.join(faqsDirectory, filename)
        const fileContents = fs.readFileSync(filePath, 'utf8')
        const { data, content } = matter(fileContents)

        return {
          question: data.question || '',
          answer: content || data.answer || '',
          category: data.category || 'General',
          order: data.order || 0
        } as FAQ
      })
      .sort((a, b) => a.order - b.order)

    return faqs
  } catch (error) {
    console.error('Error loading FAQs:', error)
    return []
  }
}

export async function getTestimonials(): Promise<Testimonial[]> {
  try {
    const testimonialsDirectory = path.join(process.cwd(), 'src/content/testimonials')

    if (!fs.existsSync(testimonialsDirectory)) {
      return []
    }

    const filenames = fs.readdirSync(testimonialsDirectory)
    const testimonials = filenames
      .filter(filename => filename.endsWith('.md'))
      .map(filename => {
        const filePath = path.join(testimonialsDirectory, filename)
        const fileContents = fs.readFileSync(filePath, 'utf8')
        const { data, content } = matter(fileContents)

        return {
          name: data.name || '',
          type: data.type || 'Standard',
          quote: content || data.quote || '',
          display: data.display !== false
        } as Testimonial
      })
      .filter(t => t.display)

    return testimonials
  } catch (error) {
    console.error('Error loading testimonials:', error)
    return []
  }
}
