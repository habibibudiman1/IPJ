# Setup Checklist - PT Intiboga Pangan Jaya Website

Use this checklist to ensure proper setup and deployment.

## Pre-Deployment Checklist

### 1. Local Development Setup

- [ ] Node.js 18+ installed
- [ ] npm install completed successfully
- [ ] .env.local file created with all required variables
- [ ] Development server runs without errors (`npm run dev`)
- [ ] All pages load correctly in browser
- [ ] No console errors in browser

### 2. Supabase Configuration

- [ ] Supabase project created
- [ ] Database migration executed (`001_create_leads_table.sql`)
- [ ] Leads table created successfully
- [ ] Row Level Security policies applied
- [ ] Project URL obtained
- [ ] Anon key obtained
- [ ] Service role key obtained (keep secret!)
- [ ] All keys added to .env.local
- [ ] Test connection working

### 3. Sanity CMS Configuration

- [ ] Sanity account created
- [ ] Sanity CLI installed (`npm install -g sanity`)
- [ ] Logged in to Sanity (`sanity login`)
- [ ] Sanity project initialized
- [ ] Sanity Studio deployed (`cd sanity && sanity deploy`)
- [ ] Studio accessible at custom URL
- [ ] Project ID obtained
- [ ] API token generated (with proper permissions)
- [ ] All Sanity credentials added to .env.local
- [ ] Schemas visible in Sanity Studio
- [ ] Can create and edit content

### 4. Resend Configuration

- [ ] Resend account created
- [ ] Domain verified (or using test domain for dev)
- [ ] API key generated
- [ ] API key added to .env.local
- [ ] Test email sent successfully
- [ ] From email configured
- [ ] To email configured (faridalfarizi@intiboga.com)

### 5. Code Quality

- [ ] No TypeScript errors (`npm run build`)
- [ ] No ESLint errors (`npm run lint`)
- [ ] All imports resolved
- [ ] No console.log statements in production code
- [ ] Error boundaries in place
- [ ] Loading states implemented

### 6. Content Populated

- [ ] Company Profile added in Sanity
- [ ] Vision & Mission added
- [ ] Core Values added (all 6)
- [ ] Products added (Potato Flakes, Glucose Syrup)
- [ ] Product Applications added
- [ ] Advantages added (all 5)
- [ ] Client Segments added (all 5)
- [ ] Contact Information verified
- [ ] Test images uploaded

### 7. Functionality Testing

- [ ] Homepage loads completely
- [ ] All navigation links work
- [ ] About page displays correctly
- [ ] Products page shows all products
- [ ] Advantages page loads
- [ ] Contact form accepts input
- [ ] Form validation works
- [ ] Contact form submits successfully
- [ ] Lead saves to Supabase
- [ ] Email notification received
- [ ] Success message displays
- [ ] Error handling works

### 8. Responsive Design Testing

- [ ] Mobile view (< 640px)
- [ ] Tablet view (640px - 1024px)
- [ ] Desktop view (> 1024px)
- [ ] Navigation menu works on mobile
- [ ] Forms usable on mobile
- [ ] Images responsive
- [ ] Text readable on all screens

### 9. Browser Testing

- [ ] Google Chrome (latest)
- [ ] Mozilla Firefox (latest)
- [ ] Safari (latest)
- [ ] Microsoft Edge (latest)
- [ ] Mobile Safari (iOS)
- [ ] Mobile Chrome (Android)

### 10. SEO Verification

- [ ] Meta tags on all pages
- [ ] OpenGraph tags configured
- [ ] Title tags unique per page
- [ ] Meta descriptions present
- [ ] Images have alt text
- [ ] Heading structure correct (H1, H2, H3)
- [ ] robots.txt accessible
- [ ] sitemap.xml generated
- [ ] No broken links

## Deployment Checklist

### 1. Repository Preparation

- [ ] All code committed to Git
- [ ] .gitignore properly configured
- [ ] .env.local NOT committed
- [ ] README.md complete
- [ ] Package.json dependencies locked
- [ ] Branch ready for deployment (main/master)

### 2. Vercel Setup

- [ ] Vercel account created
- [ ] Repository connected to Vercel
- [ ] Project imported successfully
- [ ] Build settings configured
- [ ] Framework preset: Next.js
- [ ] Node version: 18.x or higher

### 3. Environment Variables (Vercel)

- [ ] NEXT_PUBLIC_SUPABASE_URL set
- [ ] NEXT_PUBLIC_SUPABASE_ANON_KEY set
- [ ] SUPABASE_SERVICE_ROLE_KEY set
- [ ] NEXT_PUBLIC_SANITY_PROJECT_ID set
- [ ] NEXT_PUBLIC_SANITY_DATASET set
- [ ] SANITY_API_TOKEN set
- [ ] RESEND_API_KEY set
- [ ] CONTACT_EMAIL set
- [ ] All variables set for Production environment
- [ ] All variables set for Preview environment
- [ ] All variables set for Development environment

### 4. Domain Configuration

- [ ] Custom domain added in Vercel
- [ ] www subdomain added
- [ ] DNS A record added in Hostinger
- [ ] DNS CNAME record added for www
- [ ] DNS propagation complete
- [ ] SSL certificate issued
- [ ] HTTPS working
- [ ] HTTP redirects to HTTPS
- [ ] www redirects correctly

### 5. Post-Deployment Testing

- [ ] Production site loads
- [ ] All pages accessible
- [ ] Contact form works in production
- [ ] Emails received in production
- [ ] Database writes working
- [ ] CMS changes reflect on site
- [ ] Images load correctly
- [ ] No console errors
- [ ] No 404 errors
- [ ] Performance acceptable (< 3s load time)

### 6. Performance Optimization

- [ ] Lighthouse audit run
- [ ] Performance score > 90
- [ ] Accessibility score > 90
- [ ] Best Practices score > 90
- [ ] SEO score > 90
- [ ] Images optimized
- [ ] Fonts optimized
- [ ] Code splitting working

### 7. SEO & Analytics

- [ ] Sitemap submitted to Google Search Console
- [ ] Google Search Console verified
- [ ] Robots.txt accessible
- [ ] Google Analytics installed (optional)
- [ ] Meta pixel installed (optional)
- [ ] Structured data added (optional)

### 8. Content Verification

- [ ] All company information accurate
- [ ] Contact details correct
- [ ] Product information complete
- [ ] Images professional quality
- [ ] No typos or grammar errors
- [ ] Links open correctly
- [ ] Email addresses work
- [ ] Phone number correct

### 9. Security Review

- [ ] HTTPS enforced
- [ ] Security headers configured
- [ ] API keys not exposed
- [ ] Database properly secured
- [ ] RLS policies active
- [ ] No sensitive data in client
- [ ] CORS configured correctly
- [ ] Rate limiting in place

### 10. Documentation & Handoff

- [ ] README.md reviewed
- [ ] DEPLOYMENT.md provided
- [ ] QUICKSTART.md available
- [ ] CONTENT_GUIDE.md for editors
- [ ] Environment variables documented
- [ ] Credentials shared securely
- [ ] Access granted to client
- [ ] Training provided (if needed)
- [ ] Support contact established

## Post-Launch Checklist

### Week 1

- [ ] Monitor for errors daily
- [ ] Check contact form submissions
- [ ] Review database entries
- [ ] Check email deliverability
- [ ] Monitor site performance
- [ ] Review analytics (if installed)
- [ ] Respond to inquiries promptly

### Month 1

- [ ] Review all content for accuracy
- [ ] Update product information if needed
- [ ] Check for broken links
- [ ] Review analytics
- [ ] Update sitemap if content changed
- [ ] Backup database
- [ ] Review security

### Quarter 1

- [ ] Update dependencies
- [ ] Security audit
- [ ] Performance review
- [ ] Content audit
- [ ] SEO review
- [ ] Gather user feedback
- [ ] Plan improvements

## Emergency Contacts

**Technical Issues:**
- Developer: [Your contact]
- Vercel Support: support@vercel.com
- Supabase Support: support@supabase.io
- Sanity Support: support@sanity.io

**Business Contact:**
- Email: faridalfarizi@intiboga.com
- Phone: +62 813 6119 6131

## Sign-Off

**Developer:**
- Name: ___________________
- Date: ___________________
- Signature: ___________________

**Client:**
- Name: ___________________
- Date: ___________________
- Signature: ___________________

---

**Last Updated:** January 29, 2024  
**Version:** 1.0.0
