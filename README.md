# 🚀 Balaji Chintam - Portfolio Website

A modern, fully-responsive portfolio website showcasing expertise in blockchain development, Web3, smart contracts, DeFi, and big data. Built for freelance opportunities and recruiter engagement.

## ✨ Features

### 🎯 Core Sections
- **Hero Section**: Engaging introduction with CTA buttons and social links
- **Skills Matrix**: Technical skills with proficiency levels and years of experience
- **Projects Showcase**: Detailed project portfolio with filtering by category
- **Experience Timeline**: Complete work history with highlights and technologies
- **Certifications**: Industry-recognized credentials with issuer details
- **Contact Form**: Direct messaging system for inquiries and opportunities
- **Responsive Design**: Mobile-first approach, works perfectly on all devices

### 🔧 Technical Features
- **Dynamic Content**: Easy-to-manage data files for projects, skills, and experience
- **Search Optimized**: SEO-friendly metadata for better discoverability
- **Fast Performance**: Built with Next.js 16 and optimized for speed
- **Modern Styling**: Tailwind CSS with dark theme for professional appearance
- **Type Safe**: Full TypeScript support for better development experience

## 🛠️ Tech Stack

**Frontend:**
- Next.js 16.1.6 (App Router)
- React 19
- TypeScript 5
- Tailwind CSS 4
- PostCSS

**Build & Development:**
- Turbopack for fast compilation
- ESLint for code quality
- npm for package management

## 📁 Project Structure

```
laab-portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root layout with Navbar & Footer
│   │   ├── page.tsx                # Home page
│   │   ├── globals.css             # Global styles
│   │   └── projects/
│   │       ├── page.tsx            # Projects listing
│   │       └── [id]/               # Dynamic project details
│   │           └── page.tsx
│   ├── components/
│   │   ├── HeroSection.tsx         # Hero section
│   │   ├── SkillsSection.tsx       # Skills showcase
│   │   ├── ProjectsSection.tsx     # Projects grid
│   │   ├── ExperienceSection.tsx   # Work timeline
│   │   ├── CertificationsSection.tsx
│   │   ├── ContactSection.tsx      # Contact form
│   │   ├── Navbar.tsx              # Navigation bar
│   │   └── Footer.tsx              # Footer component
│   └── data/
│       ├── projects.ts             # Projects data
│       ├── skills.ts               # Skills data
│       ├── experience.ts           # Work experience data
│       ├── certifications.ts       # Certifications data
│       └── social.ts               # Contact & social links
├── public/                         # Static assets
├── package.json                    # Dependencies
├── next.config.ts                 # Next.js configuration
├── tailwind.config.ts             # Tailwind configuration
├── tsconfig.json                  # TypeScript configuration
└── README.md                       # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js 20.18+ (v20.18.3 recommended)
- npm 10.8.2+

### Installation

1. **Navigate to project directory:**
   ```bash
   cd C:\Users\balaj\Goal\Laab\laab-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   - Navigate to [http://localhost:3000](http://localhost:3000)
   - The page will auto-refresh as you make changes

## 📝 Customization Guide

### Updating Your Information

**1. Social Links & Contact Info** (`src/data/social.ts`)
```typescript
export const contactInfo = {
  name: 'Your Name',
  email: 'your.email@example.com',
  phone: '+91 XXXXXXXXXX',
  location: 'City, Country'
};
```

**2. Projects** (`src/data/projects.ts`)
Add your projects following the `Project` interface.

**3. Skills** (`src/data/skills.ts`)
Update skill categories and proficiency levels (expert/advanced/intermediate).

**4. Experience** (`src/data/experience.ts`)
Add your work history with highlights and technologies used.

**5. Certifications** (`src/data/certifications.ts`)
List your professional certifications and credentials.

## 🎨 Styling & Theme

The portfolio uses a dark theme with blue/purple accent colors.

## 📱 Responsive Breakpoints

- **Mobile**: < 640px (sm)
- **Tablet**: 640px - 1024px (md)
- **Desktop**: > 1024px (lg)

## 🔄 Available Scripts

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# ESLint check
npm run lint
```

## 📊 Performance

- ✅ TypeScript compilation: ~9.4s
- ✅ Page generation: ~1500ms
- ✅ Static routes prerendered
- ✅ Dynamic routes with SSG

## 🌐 Deployment

### Ready for Deployment to:
- **Vercel** (Recommended)
- **Netlify**
- **AWS Amplify**
- **GitHub Pages**

## 🔒 SEO Optimization

- ✅ Metadata configured for all pages
- ✅ Open Graph tags for social sharing
- ✅ Semantic HTML structure
- ✅ Mobile-friendly design
- ✅ Fast load times

## 📧 Contact Form

The contact form currently logs to console. Enable email integration with:
- Nodemailer
- Formspree
- Emailjs
- SendGrid

## 🐛 Troubleshooting

**Port 3000 already in use:**
```bash
npm run dev -- -p 3001
```

**Build errors:**
```bash
npm run build
```

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [TypeScript](https://www.typescriptlang.org)

## 🎯 Next Steps

1. ✅ Update all data files with your information
2. ✅ Add project images/screenshots
3. ✅ Setup email service for contact form
4. ✅ Deploy to Vercel or hosting platform
5. ✅ Share with recruiters and clients!

---

**Created for your freelance success!**
