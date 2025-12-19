# AgileHunt - Setup & Deployment Guide

## Recent Updates

### 1. SEO Optimization ✅
- Added comprehensive SEO meta tags to index.html
- Created SEO component for per-page optimization
- Added Schema.org structured data (Organization & SoftwareApplication)
- Implemented Helmet Provider for dynamic meta tags
- Added JSON-LD structured data to Home page

### 2. Sitemap & Robots ✅
- Created `public/sitemap.xml` with all 20+ routes
- Created `public/robots.txt` with crawl rules
- All URLs prioritized for SEO crawling

### 3. Favicons & Web Manifest ✅
- Created `public/site.webmanifest` for PWA support
- Added favicon references in HTML head
- Updated meta theme colors

### 4. Fixed Links ✅
- All footer links now point to valid routes
- Product, Company, and Resources sections updated
- Every link has corresponding route in App.tsx

### 5. Announcement Bar ✅
- Moved from `top-0 z-40` to `top-24 z-30`
- Now appears below navbar, not behind it
- Smooth positioning with proper z-index layering

### 6. PDF Downloads ✅
- Attack Handbook page now serves PDF locally
- PDF download auto-triggers after form submission
- File served from `/public/Attack-Handbook.pdf`

## Installation Steps

```bash
# 1. Install new dependencies
yarn install
# or
npm install

# 2. Place your PDF in the public folder
cp "How-Real-Attackers-Break-SaaS-Applications.pdf" public/Attack-Handbook.pdf

# 3. Create favicon images (recommend using favicon generator)
# Place these in public/:
# - favicon.ico (32x32)
# - favicon-32x32.png
# - favicon-16x16.png
# - apple-touch-icon.png (180x180)
# - favicon-192x192.png (for Android)
# - favicon-512x512.png (for Android)

# 4. Run development server
yarn dev

# 5. Build for production
yarn build
```

## Production Deployment Checklist

### SEO
- [ ] Verify sitemap.xml is accessible at `/sitemap.xml`
- [ ] Verify robots.txt is accessible at `/robots.txt`
- [ ] Submit sitemap to Google Search Console
- [ ] Verify schema data with Google's Rich Results Test
- [ ] Add canonical URLs if using multiple domains
- [ ] Set up Google Analytics tracking
- [ ] Configure GTM (Google Tag Manager) if needed

### Files Required
- [ ] PDF: `public/Attack-Handbook.pdf`
- [ ] Favicon files in `public/`
- [ ] OG image: Create `public/og-image.png` (1200x630px)
- [ ] PNG logo: `public/logo.svg`

### Performance
- [ ] Enable Gzip compression
- [ ] Set up CDN for static assets
- [ ] Enable browser caching headers
- [ ] Optimize images to WebP format
- [ ] Minify CSS/JS (Vite does this automatically)

### Security
- [ ] Set Content-Security-Policy headers
- [ ] Enable HSTS headers
- [ ] Configure CORS properly
- [ ] Review robots.txt for sensitive routes

## SEO Structure Added

### On Every Page
- Meta description
- Open Graph tags (OG title, description, image, URL)
- Twitter Card tags
- Canonical URL
- Robots meta tag

### Schema.org Data
- Organization (name, logo, contact, social links)
- SoftwareApplication (name, description, category, rating)
- Product/Service schemas where applicable

### Routes & Priority
```
Home              - 1.0 (priority)
Platform          - 0.9
Pricing           - 0.9
Attack Handbook   - 0.8
About             - 0.8
Customers         - 0.8
Blog              - 0.7
Docs/API          - 0.7
Case Studies      - 0.7
Security/Legal    - 0.4-0.5
```

## Next Steps

1. **Install dependencies**: `yarn install`
2. **Add PDF**: Place the Attack Handbook PDF in `public/` folder
3. **Add favicons**: Generate or provide favicon images
4. **Create OG image**: Design a 1200x630px image for social sharing
5. **Test SEO**: Use Google Rich Results Test, Lighthouse, and PageSpeed Insights
6. **Submit sitemap**: Add to Google Search Console & Bing Webmaster Tools
7. **Monitor**: Set up analytics and search console tracking

## Links Updated & Working

### Header Navigation
- Platform → `/platform`
- About Us → `/about`
- Pricing → `/pricing`
- Customers → `/customers`
- Blog → `/blog`

### Footer Links

**Product**
- Platform → `/platform`
- Pricing → `/pricing`
- Security → `/security`
- Integrations → `/integrations`
- Changelog → `/changelog`

**Company**
- About Us → `/about`
- Careers → `/careers`
- Blog → `/blog`
- Press Kit → `/press`
- Contact → `/contact`

**Resources**
- Documentation → `/docs`
- API Reference → `/api`
- Case Studies → `/case-studies`
- Webinars → `/webinars`
- Security Policy → `/security-policy`

**Legal**
- Privacy Policy → `/privacy`
- Terms of Service → `/terms`
- SLA → `/sla`

## Environment Variables (Optional)

```env
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/xjvqyakd
```

## Troubleshooting

### PDF Not Downloading
- Ensure `public/Attack-Handbook.pdf` exists
- Check browser console for errors
- Verify file path is correct

### Favicons Not Showing
- Clear browser cache
- Ensure favicon files exist in `public/` folder
- Use favicon generator if needed: https://www.favicon-generator.org/

### SEO Tags Not Appearing
- Check `<Helmet>` is wrapped properly in Router
- Verify meta tags in DevTools Elements tab
- Use Google Rich Results Test to verify schema

## Performance Metrics Target

After deployment, aim for:
- **Lighthouse Performance**: 90+
- **Core Web Vitals**: All green
- **SEO Score**: 90+
- **Best Practices**: 90+

Use PageSpeed Insights to monitor: https://pagespeed.web.dev/
