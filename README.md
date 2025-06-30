<!-- README_START -->
# Grand Rapids Specialty Therapy

![Grand Rapids Specialty Therapy](https://imgix.cosmicjs.com/8b39a380-55d9-11f0-a051-23c10f41277a-photo-1559757148-5c350d0d3c56-1751305327730.jpg?w=1200&h=400&fit=crop&auto=format,compress)

A professional therapy practice website specializing in sexual wellness, LGBTQIA+ care, relationship therapy, and body diversity. Built with Next.js 15 and powered by [Cosmic](https://www.cosmicjs.com) for content management.

## Features

- **Professional Team Showcase** - Detailed therapist profiles with specialties and availability
- **Specialty Areas** - Comprehensive information about specialized therapy services
- **FAQ System** - Categorized frequently asked questions with rich content
- **Page Management** - Flexible page system for values, contact, and more
- **Responsive Design** - Mobile-first design with Tailwind CSS
- **SEO Optimized** - Meta descriptions and proper heading structure
- **Image Optimization** - Automated image optimization with imgix
- **TypeScript Support** - Full type safety for better development experience

## Clone this Bucket

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket to get started instantly:

[![Clone this Bucket](https://img.shields.io/badge/Clone%20this%20Bucket-4F46E5?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmic-staging.com/projects/new?clone_bucket=grst-production)

## Original Prompt

This application was built based on the following request:

> Build a clone of https://www.grspecialtytherapy.com/

The app has been tailored to work with your existing Cosmic content structure and includes all the features from the original website including team member profiles, specialty areas, FAQ sections, and page management.

## Technologies Used

- **Framework**: Next.js 15 (App Router)
- **Content Management**: [Cosmic](https://www.cosmicjs.com)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Runtime**: Bun
- **Image Optimization**: imgix
- **Deployment**: Vercel-ready

## Getting Started

### Prerequisites

- Bun installed on your machine
- A Cosmic account and bucket

### Installation

1. **Clone this repository**
   ```bash
   git clone <repository-url>
   cd grand-rapids-specialty-therapy
   ```

2. **Install dependencies**
   ```bash
   bun install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Add your Cosmic credentials:
   ```env
   COSMIC_BUCKET_SLUG=your-bucket-slug
   COSMIC_READ_KEY=your-read-key
   COSMIC_WRITE_KEY=your-write-key
   ```

4. **Run the development server**
   ```bash
   bun dev
   ```

5. **Open [http://localhost:3000](http://localhost:3000)** to view the site

## Cosmic SDK Examples

### Fetching Team Members
```typescript
import { cosmic } from '@/lib/cosmic'

const teamMembers = await cosmic.objects
  .find({ type: 'team-members' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

### Fetching FAQs by Category
```typescript
const faqs = await cosmic.objects
  .find({ 
    type: 'faqs',
    'metadata.category.key': 'insurance'
  })
  .props(['id', 'title', 'metadata'])
```

### Fetching Specialty Areas
```typescript
const specialties = await cosmic.objects
  .find({ type: 'specialty-areas' })
  .props(['id', 'title', 'slug', 'metadata'])
  .sort('-metadata.display_order')
```

## Cosmic CMS Integration

This application integrates with [Cosmic](https://www.cosmicjs.com/docs) to manage:

- **Team Members** - Therapist profiles with specialties and contact information
- **Specialty Areas** - Service areas with descriptions and related therapists
- **FAQs** - Categorized questions and answers
- **Pages** - Flexible page content for values, contact, etc.
- **Site Settings** - Global site configuration and contact information

## Deployment Options

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Netlify
1. Connect your repository to Netlify
2. Set build command: `bun run build`
3. Set publish directory: `.next`
4. Add environment variables
5. Deploy

### Environment Variables for Production
Set these in your hosting platform:
- `COSMIC_BUCKET_SLUG`
- `COSMIC_READ_KEY`
- `COSMIC_WRITE_KEY`

The application includes automatic type checking before builds to prevent deployment failures.
<!-- README_END -->