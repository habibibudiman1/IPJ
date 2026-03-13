# Deployment Guide - PT Intiboga Pangan Jaya Website

This guide provides step-by-step instructions for deploying the website to production.

## Prerequisites

Before deploying, ensure you have:

- [x] All code committed to Git repository
- [x] Supabase project created and configured
- [x] Sanity.io project set up and deployed
- [x] Resend account with API key
- [x] Vercel account
- [x] Domain from Hostinger

## Step 1: Prepare Repository

1. Ensure all code is committed:
```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

2. Verify `.gitignore` excludes:
   - `.env.local`
   - `node_modules`
   - `.next`

## Step 2: Set Up Supabase (Production)

1. Go to [supabase.com](https://supabase.com)
2. Create a new project (if not already created)
3. Go to SQL Editor
4. Run the migration script from `supabase/migrations/001_create_leads_table.sql`
5. Verify table creation in Table Editor
6. Get credentials from Settings > API:
   - Project URL
   - Anon public key
   - Service role key (keep secret)

## Step 3: Deploy Sanity Studio

1. Navigate to sanity directory:
```bash
cd sanity
```

2. Build and deploy:
```bash
sanity deploy
```

3. Choose a studio hostname (e.g., `intiboga-cms`)
4. Access at: `https://intiboga-cms.sanity.studio`
5. Note your Project ID and Dataset name

## Step 4: Configure Resend

1. Go to [resend.com](https://resend.com)
2. Verify your domain:
   - Add domain in Resend dashboard
   - Add DNS records in Hostinger
   - Wait for verification
3. Get API key from dashboard
4. Configure "From" email address

## Step 5: Deploy to Vercel

### Option A: Via Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import your Git repository
4. Configure project:
   - Framework Preset: Next.js
   - Root Directory: ./
   - Build Command: `npm run build`
   - Output Directory: `.next`

### Option B: Via Vercel CLI

```bash
npm i -g vercel
vercel login
vercel
```

## Step 6: Configure Environment Variables

In Vercel Dashboard > Settings > Environment Variables, add:

### Supabase Variables
```
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### Sanity Variables
```
NEXT_PUBLIC_SANITY_PROJECT_ID=abc123def
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=sk...
```

### Resend Variables
```
RESEND_API_KEY=re_...
CONTACT_EMAIL=faridalfarizi@intiboga.com
```

**Important**: Set these for all environments (Production, Preview, Development)

## Step 7: Custom Domain Configuration

### A. In Vercel

1. Go to Project Settings > Domains
2. Add your domain: `intiboga.com`
3. Add www subdomain: `www.intiboga.com`
4. Vercel will provide DNS configuration

### B. In Hostinger DNS Management

1. Log in to Hostinger
2. Go to Domains > Manage > DNS
3. Add/Update records:

**For Root Domain (@):**
```
Type: A
Name: @
Value: 76.76.21.21
TTL: 14400
```

**For WWW Subdomain:**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: 14400
```

**Optional - For better reliability:**
```
Type: A
Name: @
Value: 76.76.21.98
TTL: 14400
```

4. Save changes
5. Wait for DNS propagation (5 minutes - 48 hours)

### C. Verify Domain

1. In Vercel, check domain status
2. Wait for SSL certificate provisioning
3. Test both:
   - `https://intiboga.com`
   - `https://www.intiboga.com`

## Step 8: Post-Deployment Verification

### 1. Functionality Checks

- [x] Homepage loads correctly
- [x] All navigation links work
- [x] About page displays properly
- [x] Products page shows all products
- [x] Advantages page loads
- [x] Contact form submits successfully
- [x] Email notifications arrive
- [x] Leads save to Supabase

### 2. Performance Checks

Run Lighthouse audit:
```bash
npm install -g lighthouse
lighthouse https://intiboga.com --view
```

Target scores:
- Performance: > 90
- Accessibility: > 90
- Best Practices: > 90
- SEO: > 90

### 3. SEO Verification

- [x] Check robots.txt: `https://intiboga.com/robots.txt`
- [x] Check sitemap: `https://intiboga.com/sitemap.xml`
- [x] Verify meta tags with [metatags.io](https://metatags.io)
- [x] Test OpenGraph with Facebook Debugger
- [x] Submit sitemap to Google Search Console

### 4. Mobile Responsiveness

Test on:
- [x] Mobile phones (iOS & Android)
- [x] Tablets
- [x] Different screen sizes

### 5. Browser Compatibility

Test on:
- [x] Chrome
- [x] Firefox
- [x] Safari
- [x] Edge

## Step 9: Content Population

1. Access Sanity Studio: `https://intiboga-cms.sanity.studio`
2. Populate all content:
   - Company Profile
   - Vision & Mission
   - Core Values
   - Products (with images)
   - Product Applications
   - Advantages
   - Client Segments
   - Contact Information
   - Gallery images

3. Publish all content
4. Verify content appears on website

## Step 10: Monitoring Setup

### A. Vercel Analytics

1. Enable Analytics in Vercel dashboard
2. Monitor:
   - Page views
   - Performance metrics
   - Geographic distribution

### B. Error Tracking (Optional)

Consider adding:
- Sentry for error tracking
- LogRocket for session replay

### C. Supabase Monitoring

1. Check database usage
2. Monitor API requests
3. Review logs regularly

## Post-Launch Checklist

- [ ] All pages load without errors
- [ ] Contact form working and sending emails
- [ ] Leads saving to database
- [ ] SSL certificate active (HTTPS)
- [ ] Domain redirects configured (www → non-www or vice versa)
- [ ] Sitemap submitted to search engines
- [ ] Google Analytics installed (optional)
- [ ] Social media links updated
- [ ] Email signatures updated with new website
- [ ] Business cards/marketing materials updated

## Rollback Procedure

If issues arise:

1. In Vercel Dashboard:
   - Go to Deployments
   - Find last working deployment
   - Click "..." > "Promote to Production"

2. Fix issues locally:
```bash
git revert HEAD
git push origin main
```

3. Redeploy once fixed

## Maintenance

### Regular Tasks

**Weekly:**
- Check contact form submissions
- Review Supabase leads table
- Monitor website performance

**Monthly:**
- Update content via Sanity CMS
- Review and respond to inquiries
- Check SSL certificate expiry

**Quarterly:**
- Update dependencies:
```bash
npm update
npm audit fix
```
- Review analytics
- Update product information

## Support Contacts

**Vercel Support:**
- Help: support@vercel.com
- Docs: https://vercel.com/docs

**Supabase Support:**
- Help: support@supabase.io
- Docs: https://supabase.com/docs

**Sanity Support:**
- Help: support@sanity.io
- Docs: https://www.sanity.io/docs

**Resend Support:**
- Help: support@resend.com
- Docs: https://resend.com/docs

## Emergency Contacts

For critical issues:
- Technical Lead: [Your Contact]
- Business Contact: faridalfarizi@intiboga.com
- Phone: +62 813 6119 6131

---

**Deployment Date:** [To be filled]
**Deployed By:** [To be filled]
**Production URL:** https://intiboga.com
