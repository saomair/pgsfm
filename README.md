# PGS FM Ltd Professional Security & Facilities Management Website

A production-ready marketing website built with Next.js, TypeScript, and Tailwind CSS, replicating the information architecture of PGS FM Ltd's original website.

## 🚀 Features

- **Modern Stack**: Next.js 14 with App Router, TypeScript, Tailwind CSS
- **Responsive Design**: Mobile-first approach with excellent performance
- **Accessibility**: WCAG-compliant with proper semantic HTML and focus states
- **SEO Optimized**: Comprehensive metadata and Open Graph tags
- **Professional UI**: Clean, modern design with shadcn/ui components
- **Image Optimization**: Next.js Image component with placeholder support
- **AI Imagery Workflow**: Integrated OpenAI DALL·E prompts, API route, and CLI tooling

## 📁 Project Structure

```
src/
├── app/
│   ├── (marketing)/
│   │   ├── page.tsx                 # Home page
│   │   ├── about/page.tsx           # About page
│   │   ├── services/
│   │   │   ├── page.tsx             # Services overview
│   │   │   └── [slug]/page.tsx      # Dynamic service details
│   │   ├── cleaning/page.tsx        # Cleaning services
│   │   ├── contact/page.tsx         # Contact page
│   │   ├── sectors/page.tsx         # Specialized sectors
│   │   └── policies/
│   │       ├── page.tsx             # Policies overview
│   │       └── [slug]/page.tsx      # Individual policy pages
│   ├── globals.css                  # Global styles
│   └── layout.tsx                   # Root layout
├── components/
│   ├── ui/                          # Reusable UI components
│   ├── Hero.tsx                     # Hero section component
│   ├── Section.tsx                  # Section wrapper component
│   ├── ServiceCard.tsx              # Service card component
│   ├── ServiceGrid.tsx              # Services grid component
│   ├── ContactForm.tsx              # Contact form component
│   ├── SectorList.tsx               # Sectors list component
│   ├── Header.tsx                   # Navigation header
│   └── Footer.tsx                   # Site footer
└── lib/
    ├── data.ts                      # Static data (services, sectors, policies)
    ├── utils.ts                     # Utility functions
    └── imagePresets.ts              # Image configuration presets
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd pgsfm-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔄 Replacing Placeholders

### 1. Images

All images currently use placehold.co placeholders. Generate replacements with the DALL·E workflow (`public/images/ai-generated/README.md`) or drop in approved assets manually before updating code references:

- Run `npm run generate-dalle -- --category=hero` to batch-generate hero imagery.
- Review `branding/dalle-rules.md` before approving outputs.

#### Update Image URLs
- **Hero Images**: Replace in `src/components/Hero.tsx`
- **Service Images**: Update in `src/lib/imagePresets.ts`
- **Team Images**: Replace in About page
- **Logo**: Update in Header and Footer components

#### Image Sizes
- Hero: 1920x800px
- Service Cards: 1200x900px
- Team Photos: 1200x1500px
- Banners: 2400x900px
- Logos: 800x400px

#### Example Replacement
```typescript
// Before
const heroImageUrl = getImageUrl('hero', 'Professional Security Services');

// After
const heroImageUrl = '/images/hero-security-services.jpg';
```

### 2. Contact Information

Update contact details in `src/lib/data.ts`:

```typescript
export const contactInfo = {
  companyName: "PGS FM Ltd",
  address: {
    street: "Office 14, 132-134 Cranbrook Road",
    city: "Ilford",
    postcode: "IG1 4LZ",
    country: "England"
  },
  phone: "+44 333 240 9575",
  email: "info@pgsfm.uk",
  companyNumber: "13757656",
  registeredAddress: "Office 14, 132-134 Cranbrook Road, Ilford, England, IG1 4LZ"
};
```

### 3. Company Information

Update the following files with your actual company information:

- **Metadata**: `src/app/layout.tsx` - Update title, description, and Open Graph data
- **Navigation**: `src/lib/data.ts` - Update navigation items if needed
- **Services**: `src/lib/data.ts` - Customize service descriptions and features
- **Sectors**: `src/lib/data.ts` - Update sector descriptions

### 4. Content Customization

#### Services
Edit `src/lib/data.ts` to customize:
- Service titles and descriptions
- Feature lists
- Service categories

#### Policies
Update policy content in `src/app/(marketing)/policies/[slug]/page.tsx`:
- Policy text content
- Last updated dates
- Effective dates

#### About Page
Customize in `src/app/(marketing)/about/page.tsx`:
- Company story
- Team information
- Values and mission

### 5. Styling Customization

#### Colors
Update CSS variables in `src/app/globals.css`:
```css
:root {
  --primary: #2563eb;        /* Your primary color */
  --secondary: #f1f5f9;      /* Your secondary color */
  /* ... other color variables */
}
```

#### Fonts
The site uses Inter font by default. To change:
1. Update font import in `src/app/layout.tsx`
2. Update CSS variables in `src/app/globals.css`

## 📱 Responsive Design

The website is built mobile-first with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## ♿ Accessibility Features

- Semantic HTML structure
- Proper heading hierarchy
- Alt text for all images
- Focus states for interactive elements
- ARIA labels where appropriate
- Reduced motion support

## 🚀 Performance Optimizations

- Next.js Image optimization
- Lazy loading for non-critical images
- Optimized bundle size
- Efficient CSS with Tailwind
- Static generation for most pages

## 📄 SEO Features

- Comprehensive metadata
- Open Graph tags
- Twitter Card support
- Structured data ready
- Sitemap generation ready
- Robots.txt ready

## 🔧 Development Scripts

```bash
# Development
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint

# Generate DALL·E assets (see public/images/ai-generated/README.md)
npm run generate-dalle -- --dry-run

# Type checking
npm run type-check
```

## 📦 Dependencies

### Core
- Next.js 14
- React 18
- TypeScript
- Tailwind CSS

### UI Components
- shadcn/ui
- Radix UI primitives
- Lucide React icons

### Utilities
- clsx
- tailwind-merge
- class-variance-authority

## 🎨 Design System

### Colors
- Primary: Blue (#2563eb)
- Secondary: Gray (#f1f5f9)
- Accent: Light Blue (#dbeafe)
- Text: Dark Gray (#171717)

### Typography
- Font: Inter
- Headings: Bold weights
- Body: Regular weight
- Line height: Relaxed

### Spacing
- Consistent spacing scale
- Container max-widths
- Responsive padding/margins

## 📞 Support

For questions about customizing this website template, please refer to:
- Next.js documentation
- Tailwind CSS documentation
- shadcn/ui documentation

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

**Note**: This website template is designed to replicate the information architecture of PGS FM Ltd's original website while providing a modern, accessible, and performant foundation for your security and facilities management business.