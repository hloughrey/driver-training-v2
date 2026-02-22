import { Metadata } from 'next'

export const defaultMetadata: Metadata = {
  metadataBase: new URL('https://drivertrainingnorthwest.co.uk'),
  title: {
    default: 'Driver Training Warrington | C1 & Standard Licenses | Cheshire & Greater Manchester',
    template: '%s | Driver Training North West'
  },
  description: 'Expert driver training in Warrington, Cheshire. C1 ambulance license & standard driving lessons. Serving Runcorn, Widnes, St Helens, Wigan. Ex-paramedic instructors with 40+ years combined experience.',
  keywords: [
    'driver training Warrington',
    'driving lessons Warrington',
    'C1 license training Warrington',
    'driving instructor Runcorn',
    'driving lessons Widnes',
    'driving instructor St Helens',
    'driving lessons Wigan',
    'C1 training Cheshire',
    'ambulance driver training',
    'paramedic C1 training',
    'driving instructor Cheshire'
  ],
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    siteName: 'Driver Training North West'
  },
  robots: {
    index: true,
    follow: true
  }
}

export function createLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Driver Training North West',
    description: 'Expert C1 and standard driver training in Warrington and surrounding areas',
    telephone: '07843847524',
    email: 'info@c1drivertrainingnorthwest.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Warrington',
      addressRegion: 'Cheshire',
      addressCountry: 'GB'
    },
    areaServed: [
      'Warrington',
      'Runcorn',
      'Widnes',
      'St Helens',
      'Wigan',
      'Sale',
      'Altrincham',
      'Northwich',
      'Knutsford',
      'Chester',
      'Cheshire',
      'Greater Manchester'
    ],
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 53.3900,
      longitude: -2.5970
    }
  }
}

export function createPersonSchema(person: {
  name: string
  description: string
  jobTitle: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: person.name,
    description: person.description,
    jobTitle: person.jobTitle,
    worksFor: {
      '@type': 'Organization',
      name: 'Driver Training North West'
    }
  }
}

export function createServiceSchema(service: {
  name: string
  description: string
  areaServed: string[]
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    provider: {
      '@type': 'LocalBusiness',
      name: 'Driver Training North West'
    },
    areaServed: service.areaServed.map(area => ({
      '@type': 'Place',
      name: area
    }))
  }
}
