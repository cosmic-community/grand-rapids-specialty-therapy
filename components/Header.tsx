'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { getNavigationPages } from '@/lib/cosmic'
import { SiteSettings } from '@/types'
import MobileMenu from '@/components/MobileMenu'

interface HeaderProps {
  siteSettings: SiteSettings | null;
  navigationPages: any[];
}

export default function Header({ siteSettings, navigationPages }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-lg shadow-lg translate-y-0' 
        : 'bg-transparent translate-y-0'
    }`}>
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
                className={`h-10 w-auto transition-all duration-300 group-hover:scale-105 ${
                  isScrolled ? 'brightness-100' : 'brightness-0 invert'
                }`}
              />
            ) : (
              <div className="flex items-center space-x-2">
                <div className={`w-10 h-10 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-xl flex items-center justify-center transition-all duration-300 ${
                  !isScrolled ? 'bg-white/20' : ''
                }`}>
                  <span className="text-white font-bold text-lg">G</span>
                </div>
                <span className={`text-xl font-bold transition-all duration-300 group-hover:text-primary-600 ${
                  isScrolled ? 'text-neutral-900' : 'text-white'
                }`}>
                  {siteSettings?.metadata?.site_title || 'GRST'}
                </span>
              </div>
            )}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="flex items-center space-x-2">
              <Link href="/team" className={`nav-link-header ${isScrolled ? 'text-neutral-700 hover:text-primary-600' : 'text-white hover:text-primary-300'}`}>
                GRSTeam
              </Link>
              
              {/* Values page from dynamic pages */}
              {navigationPages
                .filter(page => page.slug === 'values')
                .map((page) => (
                  <Link key={page.id} href={`/${page.slug}`} className={`nav-link-header ${isScrolled ? 'text-neutral-700 hover:text-primary-600' : 'text-white hover:text-primary-300'}`}>
                    Values
                  </Link>
                ))}
              
              <Link href="/specialties" className={`nav-link-header ${isScrolled ? 'text-neutral-700 hover:text-primary-600' : 'text-white hover:text-primary-300'}`}>
                Areas of Specialty
              </Link>

              {/* Resources page from dynamic pages */}
              {navigationPages
                .filter(page => page.slug === 'resources')
                .map((page) => (
                  <Link key={page.id} href={`/${page.slug}`} className={`nav-link-header ${isScrolled ? 'text-neutral-700 hover:text-primary-600' : 'text-white hover:text-primary-300'}`}>
                    Resources
                  </Link>
                ))}

              <Link href="/faq" className={`nav-link-header ${isScrolled ? 'text-neutral-700 hover:text-primary-600' : 'text-white hover:text-primary-300'}`}>
                FAQs
              </Link>

              {/* Join GRST page from dynamic pages */}
              {navigationPages
                .filter(page => page.slug === 'join-grst')
                .map((page) => (
                  <Link key={page.id} href={`/${page.slug}`} className={`nav-link-header ${isScrolled ? 'text-neutral-700 hover:text-primary-600' : 'text-white hover:text-primary-300'}`}>
                    Join GRST
                  </Link>
                ))}

              {/* Internships & Supervision page from dynamic pages */}
              {navigationPages
                .filter(page => page.slug === 'internships-supervision')
                .map((page) => (
                  <Link key={page.id} href={`/${page.slug}`} className={`nav-link-header ${isScrolled ? 'text-neutral-700 hover:text-primary-600' : 'text-white hover:text-primary-300'}`}>
                    Internships & Supervision
                  </Link>
                ))}

              {/* Contact page from dynamic pages */}
              {navigationPages
                .filter(page => page.slug === 'contact')
                .map((page) => (
                  <Link key={page.id} href={`/${page.slug}`} className={`nav-link-header ${isScrolled ? 'text-neutral-700 hover:text-primary-600' : 'text-white hover:text-primary-300'}`}>
                    Contact
                  </Link>
                ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <MobileMenu
              navigationPages={navigationPages}
              siteSettings={siteSettings}
              isScrolled={isScrolled}
            />
          </div>
        </div>
      </nav>
    </header>
  )
}