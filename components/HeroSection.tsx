import { Page } from '@/types'

interface HeroSectionProps {
  page: Page;
}

export default function HeroSection({ page }: HeroSectionProps) {
  const heroImage = page.metadata?.hero_image;
  const heroTitle = page.metadata?.hero_title || page.title;
  const heroSubtitle = page.metadata?.hero_subtitle;

  return (
    <section className="hero-section">
      {/* Background Image */}
      {heroImage && (
        <div className="absolute inset-0">
          <img
            src={`${heroImage.imgix_url}?w=1920&h=800&fit=crop&auto=format,compress`}
            alt={heroTitle}
            className="w-full h-full object-cover"
          />
          <div className="hero-overlay" />
        </div>
      )}

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance">
            {heroTitle}
          </h1>
          {heroSubtitle && (
            <p className="text-xl md:text-2xl text-neutral-200 max-w-3xl mx-auto text-balance">
              {heroSubtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}