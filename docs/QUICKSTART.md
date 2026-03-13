# Quick Start Guide - PT Intiboga Pangan Jaya Website

Get the website running locally in 10 minutes.

## Prerequisites

- Node.js 18+ installed
- Git installed
- Code editor (VS Code recommended)

## Step 1: Clone & Install (2 minutes)

```bash
# Navigate to project directory
cd websiteIPJ

# Install dependencies
npm install
```

## Step 2: Environment Setup (3 minutes)

Create `.env.local` file:

```env
# Supabase (get from supabase.com)
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key

# Sanity (get from sanity.io)
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production

# Resend (get from resend.com)
RESEND_API_KEY=your_resend_key
CONTACT_EMAIL=faridalfarizi@intiboga.com
```

## Step 3: Run Development Server (1 minute)

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Step 4: Set Up Sanity (4 minutes)

```bash
# Navigate to sanity directory
cd sanity

# Install Sanity dependencies
npm install

# Run Sanity Studio locally
npm run dev
```

Open [http://localhost:3333](http://localhost:3333)

## That's It!

You now have:
- ✅ Website running at localhost:3000
- ✅ CMS running at localhost:3333

## Next Steps

1. **Add Content**: Use Sanity Studio to add content
2. **Test Contact Form**: Submit a test inquiry
3. **Check Database**: Verify lead saved in Supabase
4. **Deploy**: Follow DEPLOYMENT.md when ready

## Common Issues

**Port already in use?**
```bash
# Change Next.js port
npm run dev -- -p 3001

# Change Sanity port
cd sanity && npm run dev -- --port 3334
```

**Dependencies fail?**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Environment variables not loading?**
- Restart dev server after adding .env.local
- Check file is named exactly `.env.local`
- Verify no extra spaces in values

## Development Tips

### Hot Reload

Changes to code automatically refresh the browser. No need to restart.

### Useful Commands

```bash
# Run dev server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint

# Generate database migrations
npm run db:generate
```

### Project Structure

```
/app             → Pages and routes
/components      → Reusable components
/lib             → Utilities and configurations
/sanity          → CMS schemas
/public          → Static files
```

### Making Changes

1. **Edit Components**: Modify files in `/components`
2. **Edit Pages**: Modify files in `/app`
3. **Edit Styles**: Update `app/globals.css` or Tailwind classes
4. **Edit Content**: Use Sanity Studio

## Need Help?

- See README.md for detailed setup
- See DEPLOYMENT.md for production deployment
- See CONTENT_GUIDE.md for CMS usage
- Contact: faridalfarizi@intiboga.com
