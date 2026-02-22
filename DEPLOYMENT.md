# Deployment Checklist

## Pre-Deployment

- [x] Code complete and builds successfully
- [x] All pages created and functional
- [x] SEO metadata configured
- [x] Structured data implemented
- [x] Sitemap generated
- [x] robots.txt created
- [x] Netlify config created
- [x] CMS configuration complete

## Netlify Setup

### 1. Initial Deployment

1. Push code to GitHub repository
2. Login to [Netlify](https://app.netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Choose GitHub and select your repository
5. Build settings should auto-detect from `netlify.toml`:
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Click "Deploy site"

### 2. Domain Configuration

1. Go to Site Settings → Domain management
2. Add custom domain: `drivertrainingnorthwest.co.uk`
3. Follow DNS configuration instructions
4. Wait for DNS propagation (can take up to 24 hours)
5. Enable HTTPS (automatic with Let's Encrypt)

### 3. Enable Netlify Identity

1. Go to Site Settings → Identity
2. Click "Enable Identity"
3. Under Registration preferences, select "Invite only"
4. Under External providers (optional): Can enable GitHub/Google login
5. Under Git Gateway: Click "Enable Git Gateway"

### 4. Invite CMS Users

1. Go to Identity tab in site dashboard
2. Click "Invite users"
3. Enter email addresses for content editors
4. Users will receive invitation email
5. They can access CMS at `yourdomain.com/admin`

### 5. Configure Netlify Forms

1. Forms are automatically enabled with `data-netlify="true"` attribute
2. Go to Forms tab to see submissions
3. Optional: Set up form notifications
   - Go to Site Settings → Forms → Form notifications
   - Add email notification for new submissions

### 6. Environment Variables

1. Go to Site Settings → Environment variables
2. Add Google Analytics ID:
   - Key: `NEXT_PUBLIC_GA_ID`
   - Value: `G-XXXXXXXXXX` (your GA4 measurement ID)
3. Click "Save"
4. Trigger a new deploy to apply changes

## Google Analytics Setup

### 1. Create GA4 Property

1. Go to [Google Analytics](https://analytics.google.com/)
2. Create account (if needed)
3. Create GA4 property:
   - Property name: "Driver Training North West"
   - Time zone: United Kingdom
   - Currency: British Pound (£)
4. Create web data stream:
   - Website URL: `https://drivertrainingnorthwest.co.uk`
   - Stream name: "Driver Training Website"
5. Copy Measurement ID (format: G-XXXXXXXXXX)
6. Add to Netlify environment variables (see above)

### 2. Verify Tracking

1. Deploy site with GA ID configured
2. Visit website
3. Accept cookie consent banner
4. Check GA Real-Time reports to verify tracking

## Google Search Console Setup

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add property: `https://drivertrainingnorthwest.co.uk`
3. Verify ownership (DNS or HTML file method)
4. Submit sitemap: `https://drivertrainingnorthwest.co.uk/sitemap.xml`
5. Monitor for crawl errors and indexing status

## Post-Deployment Verification

### Technical Checks

- [ ] All pages load correctly
- [ ] Mobile responsiveness verified
- [ ] Forms submission works
- [ ] CMS access works at `/admin`
- [ ] Contact form receives submissions
- [ ] Cookie consent banner appears
- [ ] GA tracking works (after consent)
- [ ] Images load properly
- [ ] Navigation works on mobile/desktop

### SEO Checks

- [ ] Sitemap accessible at `/sitemap.xml`
- [ ] robots.txt accessible at `/robots.txt`
- [ ] Meta tags correct (view page source)
- [ ] Open Graph tags present
- [ ] Structured data valid (use [Schema.org validator](https://validator.schema.org/))
- [ ] Page titles unique and descriptive
- [ ] Meta descriptions present

### Performance Checks

Run [Lighthouse](https://pagespeed.web.dev/) audit:
- [ ] Performance score 90+
- [ ] Accessibility score 100
- [ ] Best Practices score 90+
- [ ] SEO score 100

### Content Checks

- [ ] All instructor photos display
- [ ] Contact information correct
- [ ] Phone numbers clickable
- [ ] Email addresses clickable
- [ ] Service areas listed correctly
- [ ] Pricing information accurate
- [ ] All FAQs display correctly

## CMS Testing

1. Login to `/admin`
2. Create test FAQ
3. Verify it appears on FAQ page
4. Edit existing FAQ
5. Delete test FAQ
6. Verify changes reflect on live site

## Ongoing Maintenance

### Regular Tasks

- Monitor form submissions in Netlify dashboard
- Review GA analytics monthly
- Update FAQs via CMS as needed
- Add testimonials via CMS
- Monitor Search Console for SEO issues
- Check for broken links quarterly

### Content Updates

Use CMS at `/admin` for:
- Adding/editing FAQs
- Managing testimonials
- No code changes needed for content updates

### Code Updates

For design/functionality changes:
1. Make changes locally
2. Test with `npm run dev`
3. Build with `npm run build`
4. Push to GitHub
5. Netlify auto-deploys from main branch

## Support Contacts

- **Domain**: drivertrainingnorthwest.co.uk
- **Hosting**: Netlify
- **Email**: info@c1drivertrainingnorthwest.com
- **Phone**: 07843 847524

## Troubleshooting

### CMS Not Accessible

1. Check Netlify Identity is enabled
2. Verify Git Gateway is enabled
3. Ensure users are invited via Identity tab
4. Check user has confirmed invitation email

### Forms Not Receiving Submissions

1. Verify `data-netlify="true"` attribute present
2. Check Forms tab in Netlify dashboard
3. Verify form name matches in code
4. Check spam/email filters for notifications

### Analytics Not Tracking

1. Verify `NEXT_PUBLIC_GA_ID` set in Netlify
2. Check cookie consent was accepted
3. Wait 24-48 hours for data to appear
4. Use Real-Time reports for immediate verification

### Build Failures

1. Check build logs in Netlify
2. Verify `npm run build` works locally
3. Check all dependencies in package.json
4. Ensure Node version matches (20+)
