import Link from 'next/link'
import { SiteSettings } from '@/lib/content'

interface FooterProps {
  site: SiteSettings
}

export function Footer({ site }: FooterProps) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted/50 border-t mt-auto">
      <div className="container px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Driver Training North West</h3>
            <p className="text-sm text-muted-foreground">
              Expert driver training from ex-paramedic instructors with 40+ years combined experience.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-base">
              <li>
                <Link href="/training/c1-licence" className="text-muted-foreground hover:text-foreground transition-colors">
                  C1 Training
                </Link>
              </li>
              <li>
                <Link href="/training/standard-licence" className="text-muted-foreground hover:text-foreground transition-colors">
                  Standard Training
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-foreground transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div className="space-y-4">
            <h4 className="font-semibold">Service Areas</h4>
            <ul className="space-y-1 text-base text-muted-foreground">
              {site.service_areas_standard.map((area, i) => (
                <li key={i}>{area}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold">Contact Us</h4>
            <div className="space-y-2 text-base text-muted-foreground">
              <p>
                <a href={site.phone_href} className="hover:text-foreground transition-colors">
                  {site.phone}
                </a>
              </p>
              <p>
                <a href={site.email_href} className="hover:text-foreground transition-colors break-all">
                  {site.email}
                </a>
              </p>
              <p className="pt-2">{site.location}</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} Driver Training North West. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
