import { Page } from '@/types';

interface HeroSectionProps {
  page?: Page;
  className?: string;
}

export default function HeroSection({ page, className = "" }: HeroSectionProps) {
  return (
    <section className={`relative h-screen w-full overflow-hidden ${className}`}>
      {/* Background Image - Fixed to cover entire viewport */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1920&h=1080&fit=crop&auto=format,compress"
          alt="Therapy session - counselor and client in conversation"
          className="w-full h-full object-cover"
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-900/70 via-neutral-900/50 to-neutral-900/60" />
      </div>

      {/* Content Container - Positioned to center content */}
      <div className="relative z-10 flex items-center justify-center h-full px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
            Welcome to Grand Rapids Specialty Therapy
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-neutral-200 font-light leading-relaxed">
            (Hey there, brave person, we are so glad you're here)
          </p>
        </div>
      </div>

      {/* Optional scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <svg
            className="w-6 h-6 text-white/70"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  )
}