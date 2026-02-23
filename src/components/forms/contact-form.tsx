'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle } from 'lucide-react'

export function ContactForm() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [trainingType, setTrainingType] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormState('submitting')

    try {
      const form = e.currentTarget
      const formData = new FormData(form)

      const response = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as any).toString(),
      })

      if (response.ok) {
        setFormState('success')
        form.reset()
        setTrainingType('')
      } else {
        setFormState('error')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setFormState('error')
    }
  }

  if (formState === 'success') {
    return (
      <Card className="border-2 border-primary">
        <CardContent className="pt-6">
          <div className="text-center space-y-4">
            <div className="inline-block p-3 bg-primary/10 rounded-full">
              <CheckCircle className="h-12 w-12 text-primary" />
            </div>
            <h3 className="text-2xl font-bold">Thank You!</h3>
            <p className="text-muted-foreground">
              We've received your message and will get back to you within 24 hours.
            </p>
            <Button onClick={() => setFormState('idle')}>Send Another Message</Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Get in Touch</CardTitle>
        <CardDescription>
          Fill out the form below and we'll get back to you as soon as possible
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <input type="hidden" name="form-name" value="contact" />
          <p className="hidden">
            <label>
              Don't fill this out if you're human: <input name="bot-field" />
            </label>
          </p>

          <div className="space-y-2">
            <Label htmlFor="name">Name *</Label>
            <Input
              id="name"
              name="name"
              required
              placeholder="Your name"
              disabled={formState === 'submitting'}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              placeholder="your.email@example.com"
              disabled={formState === 'submitting'}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone *</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              required
              placeholder="07843 847524"
              disabled={formState === 'submitting'}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="training-type">Training Type *</Label>
            <input type="hidden" name="training-type" value={trainingType} />
            <Select
              required
              value={trainingType}
              onValueChange={setTrainingType}
              disabled={formState === 'submitting'}
            >
              <SelectTrigger id="training-type">
                <SelectValue placeholder="Select training type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="c1">C1 License Training</SelectItem>
                <SelectItem value="standard">Standard License Training</SelectItem>
                <SelectItem value="not-sure">Not Sure</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message *</Label>
            <Textarea
              id="message"
              name="message"
              required
              placeholder="Tell us about your training needs..."
              rows={5}
              disabled={formState === 'submitting'}
            />
          </div>

          {formState === 'error' && (
            <div className="p-3 bg-destructive/10 border border-destructive/30 rounded-md text-sm text-destructive">
              There was an error submitting your form. Please try again or call us at 07843 847524.
            </div>
          )}

          <Button type="submit" className="w-full" disabled={formState === 'submitting'}>
            {formState === 'submitting' ? 'Sending...' : 'Send Message'}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
