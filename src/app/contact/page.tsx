import { Metadata } from 'next'
import { ContactForm } from '@/components/forms/contact-form'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Phone, Mail, MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact Us - Driver Training North West',
  description: 'Get in touch with Driver Training North West in Warrington. Call 07843 847524 or fill out our contact form for C1 or standard driving lessons.',
}

export default function ContactPage() {
  return (
    <div className="py-16 sm:py-24">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold">Contact Us</h1>
          <p className="text-lg text-muted-foreground">
            Get in touch to book your lessons or ask any questions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact Form */}
          <div>
            <ContactForm />
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Contact Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold mb-1">Phone</div>
                    <a
                      href="tel:07843847524"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      07843 847524
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold mb-1">Email</div>
                    <a
                      href="mailto:info@c1drivertrainingnorthwest.com"
                      className="text-muted-foreground hover:text-primary transition-colors break-all"
                    >
                      info@c1drivertrainingnorthwest.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold mb-1">Location</div>
                    <p className="text-muted-foreground">Based in Warrington, Cheshire</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Service Areas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Standard Training</h4>
                    <p className="text-base text-muted-foreground">
                      20-mile radius: Warrington, Runcorn, Widnes, St Helens, Wigan, Sale, Altrincham, Northwich, Knutsford, Chester
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">C1 Training</h4>
                    <p className="text-base text-muted-foreground">
                      Extended coverage: All standard areas plus Liverpool, Manchester, Stockport, Bolton, and wider Merseyside
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Google Maps */}
            <Card>
              <CardContent className="p-0">
                <div className="aspect-video w-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d76173.88956819867!2d-2.6510!3d53.3900!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487b01424b1196d5%3A0x9e647c5f58b44e53!2sWarrington%2C%20UK!5e0!3m2!1sen!2suk!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Driver Training North West - Warrington Service Area"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
