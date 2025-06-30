import Link from 'next/link'
import { getNavigationPages } from '@/lib/cosmic'
import { SiteSettings } from '@/types'
import MobileMenu from '@/components/MobileMenu'

interface HeaderProps {
  siteSettings: SiteSettings | null;
}

export default async function Header({ siteSettings }: HeaderProps) {
  const navigationPages = await getNavigationPages();

  return (
    <header className="bg-white/95 backdrop-blur-lg shadow-sm sticky top-0 z-50 border-b border-neutral-200/50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            {siteSettings?.metadata?.logo ? (
              <img
                src={`${siteSettings.metadata.logo.imgix_url}?w=400&h=120&fit=crop&auto=format,compress`}
                alt={siteSettings.metadata.site_title || 'Grand Rapids Specialty Therapy'}
                width={200}
                height={60}
                className="h-10 w-auto transition-transform duration-200 group-hover:scale-105"
              />
            ) : (
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">G</span>
                </div>
                <span className="text-xl font-bold text-neutral-900 group-hover:text-primary-600 transition-colors">
                  {siteSettings?.metadata?.site_title || 'GRST'}
                </span>
              </div>
            )}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="flex items-center space-x-2">
              <Link href="/team" className="nav-link">
                <span className="flex items-center space-x-2">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <span>Team</span>
                </span>
              </Link>
              
              <Link href="/specialties" className="nav-link">
                <span className="flex items-center space-x-2">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                  <span>Specialties</span>
                </span>
              </Link>

              {navigationPages
                .filter(page => page.slug !== 'home')
                .map((page) => (
                  <Link key={page.id} href={`/${page.slug}`} className="nav-link">
                    {page.title}
                  </Link>
                ))}

              <Link href="/faq" className="nav-link">
                <span className="flex items-center space-x-2">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>FAQ</span>
                </span>
              </Link>

              {/* CTA Button */}
              <div className="ml-6 pl-6 border-l border-neutral-200">
                {siteSettings?.metadata?.contact_phone && (
                  <a 
                    href={`tel:${siteSettings.metadata.contact_phone}`}
                    className="btn-primary btn-sm"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Call Now
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <MobileMenu
              navigationPages={navigationPages}
              siteSettings={siteSettings}
            />
          </div>
        </div>
      </nav>
    </header>
  )
}