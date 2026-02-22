# Driver Training North West

Modern, mobile-first website for driver training business in Warrington, UK.

## Features

- ✅ Next.js 16 with App Router
- ✅ React 19 with React Compiler
- ✅ Tailwind CSS v4
- ✅ shadcn/ui components
- ✅ Decap CMS for content management
- ✅ Netlify Forms integration
- ✅ SEO optimized with structured data
- ✅ Google Analytics with cookie consent
- ✅ Mobile-first responsive design
- ✅ Accessibility focused

## Getting Started

### Prerequisites

- Node.js 20 or higher
- npm

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Environment Variables

Copy `.env.example` to `.env.local` and add your Google Analytics ID:

```bash
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

## Project Structure

```
├── src/
│   ├── app/                    # Next.js app router pages
│   │   ├── about/             # About page
│   │   ├── contact/           # Contact page with form
│   │   ├── faq/               # FAQ page
│   │   ├── training/          # Training pages
│   │   │   ├── c1-licence/
│   │   │   └── standard-licence/
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Homepage
│   │   └── sitemap.ts         # XML sitemap
│   ├── components/
│   │   ├── ui/                # shadcn/ui components
│   │   ├── layout/            # Header, Footer, Nav
│   │   ├── sections/          # Page sections
│   │   └── forms/             # Contact form
│   ├── lib/
│   │   ├── content.ts         # Content loader
│   │   ├── metadata.ts        # SEO helpers
│   │   └── utils.ts           # Utilities
│   └── content/
│       ├── faqs/              # FAQ markdown files
│       └── testimonials/      # Testimonial markdown files
├── public/
│   ├── admin/                 # Decap CMS
│   │   ├── index.html
│   │   └── config.yml
│   ├── images/
│   ├── jayne.jpg              # Instructor photo
│   ├── neil.png               # Instructor photo
│   └── robots.txt
└── netlify.toml               # Netlify config
```

## Content Management

### Accessing CMS

1. After deployment, navigate to `/admin`
2. Login with Netlify Identity credentials
3. Manage FAQs and testimonials

### Adding FAQs

FAQs can be added via:
- **CMS**: Navigate to `/admin` → FAQs → New FAQ
- **Files**: Create markdown file in `src/content/faqs/`

Example FAQ file:

```markdown
---
question: What is a C1 license?
category: C1 License
order: 1
---

A C1 license allows you to drive vehicles between 3.5 and 7.5 tonnes...
```

## Deployment

### Netlify Setup

1. Connect repository to Netlify
2. Build settings are auto-detected from `netlify.toml`
3. Enable Netlify Identity:
   - Go to Site Settings → Identity
   - Click "Enable Identity"
   - Enable Git Gateway
   - Set registration to "Invite only"
4. Enable Netlify Forms (automatic with `data-netlify="true"`)
5. Configure custom domain: `drivertrainingnorthwest.co.uk`
6. Invite CMS users via Identity tab

### Post-Deployment

1. Set up Google Analytics:
   - Create GA4 property
   - Add measurement ID to Netlify environment variables
   - Variable name: `NEXT_PUBLIC_GA_ID`

2. Test CMS access at `/admin`

3. Verify contact form submission in Netlify dashboard

## Key Pages

- **Homepage** (`/`) - Hero, services, instructors, trust signals
- **About** (`/about`) - Instructor profiles, service areas
- **C1 Training** (`/training/c1-licence`) - C1 license info, pricing
- **Standard Training** (`/training/standard-licence`) - Standard lessons, packages
- **FAQ** (`/faq`) - Frequently asked questions
- **Contact** (`/contact`) - Contact form, map, details

## SEO Features

- Comprehensive meta tags
- Open Graph tags
- Structured data (JSON-LD):
  - LocalBusiness schema
  - Person schema (instructors)
  - Service schema (training types)
  - FAQPage schema
- XML sitemap
- robots.txt
- Semantic HTML
- Mobile-first responsive

## Service Areas

**Standard Training** (20-mile radius from Warrington):
- Warrington, Runcorn, Widnes, St Helens, Wigan
- Sale, Altrincham, Northwich, Knutsford, Chester

**C1 Training** (Extended coverage):
- All standard areas plus Liverpool, Manchester, Stockport, Bolton

## Contact Information

- **Phone**: 07843 847524
- **Email**: info@c1drivertrainingnorthwest.com
- **Based**: Warrington, Cheshire
- **Domain**: drivertrainingnorthwest.co.uk

## Development

```bash
# Run dev server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## Tech Stack

- **Framework**: Next.js 16
- **UI Library**: React 19
- **Styling**: Tailwind CSS v4
- **Components**: shadcn/ui
- **CMS**: Decap CMS
- **Forms**: Netlify Forms
- **Analytics**: Google Analytics 4
- **Hosting**: Netlify
- **Icons**: Lucide React

## License

Private - Driver Training North West
