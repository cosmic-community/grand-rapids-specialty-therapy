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
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            {siteSettings?.metadata?.logo ? (
              <img
                src={`${siteSettings.metadata.logo.imgix_url}?w=200&h=60&fit=crop&auto=format,compress`}
                alt={siteSettings.metadata.site_title || 'Grand Rapids Specialty Therapy'}
                width={150}
                height={45}
                className="h-8 w-auto"
              />
            ) : (
              <span className="text-xl font-bold text-neutral-900">
                {siteSettings?.metadata?.site_title || 'GRST'}
              </span>
            )}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                href="/team"
                className="text-neutral-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Team
              </Link>
              <Link
                href="/specialties"
                className="text-neutral-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Specialties
              </Link>
              {navigationPages
                .filter(page => page.slug !== 'home')
                .map((page) => (
                  <Link
                    key={page.id}
                    href={`/${page.slug}`}
                    className="text-neutral-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors"
                  >
                    {page.title}
                  </Link>
                ))}
              <Link
                href="/faq"
                className="text-neutral-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                FAQ
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
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