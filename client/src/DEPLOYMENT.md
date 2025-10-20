# Power Plant Energy - Deployment Guide

This guide will help you deploy your **multi-page SEO-optimized website** to **powerplantenergy.com.au**

## 🎯 Site Architecture

The site is now a multi-page React application with:
- 8 dedicated pages (Home, Sustainable Fuels, Critical Minerals, Defence Energy, Technology, Projects, Insights, Contact)
- React Router for client-side navigation
- Comprehensive SEO optimization on every page
- Sitemap.xml and robots.txt for search engine crawling

## Recommended Deployment: Vercel

Vercel is the recommended platform for deploying this React application. It offers:
- Fast global CDN
- Automatic deployments from Git
- Easy custom domain setup
- Free SSL certificates
- Excellent performance optimization

### Step 1: Prepare Your Code for Deployment

First, you need to download your code from Figma Make and set up a Git repository.

1. **Download your project files** from Figma Make
2. **Create a Git repository:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Power Plant Energy website"
   ```

3. **Push to GitHub** (or GitLab/Bitbucket):
   ```bash
   # Create a new repository on GitHub first, then:
   git remote add origin https://github.com/yourusername/powerplant-energy.git
   git branch -M main
   git push -u origin main
   ```

### Step 2: Create Required Configuration Files

You'll need to create these files in your project root:

#### `package.json`
```json
{
  "name": "powerplant-energy",
  "version": "1.0.0",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router-dom": "^6.27.0",
    "lucide-react": "latest",
    "recharts": "^2.12.7",
    "sonner": "^2.0.3",
    "react-hook-form": "^7.55.0",
    "motion": "latest",
    "@radix-ui/react-accordion": "^1.2.2",
    "@radix-ui/react-alert-dialog": "^1.1.4",
    "@radix-ui/react-aspect-ratio": "^1.1.1",
    "@radix-ui/react-avatar": "^1.1.2",
    "@radix-ui/react-checkbox": "^1.1.3",
    "@radix-ui/react-collapsible": "^1.1.2",
    "@radix-ui/react-context-menu": "^2.2.4",
    "@radix-ui/react-dialog": "^1.1.4",
    "@radix-ui/react-dropdown-menu": "^2.1.4",
    "@radix-ui/react-hover-card": "^1.1.4",
    "@radix-ui/react-label": "^2.1.1",
    "@radix-ui/react-menubar": "^1.1.4",
    "@radix-ui/react-navigation-menu": "^1.2.3",
    "@radix-ui/react-popover": "^1.1.4",
    "@radix-ui/react-progress": "^1.1.1",
    "@radix-ui/react-radio-group": "^1.2.2",
    "@radix-ui/react-scroll-area": "^1.2.2",
    "@radix-ui/react-select": "^2.1.4",
    "@radix-ui/react-separator": "^1.1.1",
    "@radix-ui/react-slider": "^1.2.1",
    "@radix-ui/react-slot": "^1.1.1",
    "@radix-ui/react-switch": "^1.1.2",
    "@radix-ui/react-tabs": "^1.1.2",
    "@radix-ui/react-toast": "^1.2.4",
    "@radix-ui/react-toggle": "^1.1.1",
    "@radix-ui/react-toggle-group": "^1.1.1",
    "@radix-ui/react-tooltip": "^1.1.6",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "tailwind-merge": "^2.5.5",
    "tailwindcss-animate": "^1.0.7",
    "vaul": "^1.1.1",
    "embla-carousel-react": "^8.5.1",
    "react-day-picker": "^8.10.1",
    "date-fns": "^4.1.0",
    "cmdk": "^1.0.4",
    "input-otp": "^1.4.1",
    "react-resizable-panels": "^2.1.7"
  },
  "devDependencies": {
    "@types/react": "^18.3.12",
    "@types/react-dom": "^18.3.1",
    "@vitejs/plugin-react": "^4.3.4",
    "vite": "^6.0.3",
    "tailwindcss": "^4.0.0"
  }
}
```

#### `vite.config.ts`
```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      './components': '/components',
      './styles': '/styles',
      './imports': '/imports'
    }
  }
});
```

#### `index.html`
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Power Plant Energy - Transforming bamboo into critical materials like battery graphite and sustainable aviation fuel" />
    <title>Power Plant Energy | Intelligent Transformation</title>
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/main.tsx"></script>
  </body>
</html>
```

#### `main.tsx`
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/globals.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

#### `.gitignore`
```
# Dependencies
node_modules/

# Build output
dist/
build/

# Environment variables
.env
.env.local
.env.production

# IDE
.vscode/
.idea/

# OS
.DS_Store
Thumbs.db

# Logs
*.log
```

### Step 3: Deploy to Vercel

1. **Sign up for Vercel** at [vercel.com](https://vercel.com)

2. **Import your Git repository:**
   - Click "Add New Project"
   - Select your GitHub repository
   - Vercel will auto-detect the Vite configuration

3. **Configure build settings:**
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

4. **Deploy:**
   - Click "Deploy"
   - Wait for the build to complete

### Step 4: Add Your Custom Domain

1. **In Vercel Dashboard:**
   - Go to your project settings
   - Click "Domains"
   - Add `powerplantenergy.com.au`

2. **Configure DNS Records:**
   
   You'll need to update your domain's DNS settings with your domain registrar:

   **Option A: Use Vercel Nameservers (Recommended)**
   - Point your domain's nameservers to Vercel's nameservers
   - Vercel will provide these when you add the domain

   **Option B: Use A/CNAME Records**
   - Add an A record: `@` → `76.76.21.21`
   - Add a CNAME record: `www` → `cname.vercel-dns.com`

3. **Verify Domain:**
   - Vercel will automatically provision an SSL certificate
   - This usually takes a few minutes

4. **Set up redirects (optional):**
   - Configure www → non-www or vice versa in Vercel settings

### Step 5: Ongoing Updates

Once deployed, any push to your main branch will automatically trigger a new deployment.

```bash
# Make changes to your code
git add .
git commit -m "Update content"
git push origin main
# Vercel will automatically deploy the changes
```

---

## Alternative Deployment Options

### Option 2: Netlify

1. Sign up at [netlify.com](https://netlify.com)
2. Connect your Git repository
3. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Add custom domain in Netlify settings
5. Update DNS records as instructed by Netlify

### Option 3: AWS Amplify

1. Sign up for AWS account
2. Go to AWS Amplify Console
3. Connect your Git repository
4. Configure build settings (similar to Vercel)
5. Add custom domain in Amplify settings

### Option 4: Traditional Hosting (cPanel, etc.)

If you have traditional web hosting:

1. **Build your project locally:**
   ```bash
   npm install
   npm run build
   ```

2. **Upload the `dist` folder** to your web server via FTP/SFTP

3. **Configure your web server:**
   - Point the document root to the uploaded `dist` folder
   - Set up URL rewriting for single-page application routing

4. **Update on changes:**
   - Rebuild locally
   - Re-upload the `dist` folder

---

## Important Notes

### Handling Figma Assets

The `figma:asset/` imports in your code are specific to Figma Make. Before deployment, you need to:

1. **Export all Figma assets** from Figma Make
2. **Replace import paths** from `figma:asset/xyz.png` to `/assets/xyz.png`
3. **Add assets folder** to your project with all images

Example:
```typescript
// Before
import bannerImage from 'figma:asset/b65a6e80d5f7ad1ce46502d64cac4a85fafd9d29.png';

// After
import bannerImage from '/assets/banner-algae.png';
```

### React Router Configuration

The site uses React Router for multi-page navigation. Ensure your hosting platform is configured for client-side routing:

**Vercel:** Add a `vercel.json` file:
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}
```

**Netlify:** Add a `_redirects` file to `/public`:
```
/*    /index.html   200
```

This ensures all routes (e.g., `/sustainable-fuels`, `/defence-energy`) are handled by React Router.

### Environment Variables

If you need environment variables (API keys, etc.):

1. Create a `.env.local` file (don't commit this)
2. Add variables prefixed with `VITE_`:
   ```
   VITE_API_KEY=your_key_here
   ```
3. Access in code:
   ```typescript
   const apiKey = import.meta.env.VITE_API_KEY;
   ```
4. Add these in Vercel/Netlify dashboard under Environment Variables

### Performance Optimization

Your site is already optimized, but consider:
- Using WebP/AVIF image formats
- Implementing lazy loading for images
- Adding service worker for offline functionality
- Monitoring Core Web Vitals

---

## Support & Troubleshooting

### Common Issues

**Build fails:**
- Check all dependencies are in package.json
- Verify Node.js version compatibility (use Node 18+)

**Assets not loading:**
- Check asset paths are correct
- Ensure all Figma assets are converted to standard image files

**Custom domain not working:**
- Wait 24-48 hours for DNS propagation
- Verify DNS records are correct
- Check SSL certificate status

### Getting Help

- Vercel Documentation: https://vercel.com/docs
- Netlify Documentation: https://docs.netlify.com
- Vite Documentation: https://vitejs.dev

---

## Checklist Before Going Live

- [ ] All content reviewed and finalized
- [ ] All images optimized and loading correctly
- [ ] Contact forms/links working
- [ ] Mobile responsiveness tested
- [ ] Cross-browser compatibility checked
- [ ] SEO metadata added (title, description, OG tags)
- [ ] Analytics set up (Google Analytics, etc.)
- [ ] Custom domain configured and SSL active
- [ ] 404 page configured
- [ ] Favicon added
- [ ] Legal pages added (Privacy Policy, Terms of Service if needed)

---

Good luck with your deployment! 🚀
