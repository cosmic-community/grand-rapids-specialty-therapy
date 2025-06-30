'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Page, SiteSettings } from '@/types'

interface MobileMenuProps {
  navigationPages: Page[];
  siteSettings: SiteSettings | null;
}

export default function MobileMenu({ navigationPages, siteSettings }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup function to reset overflow when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <div className="relative">
      {/* Menu Button */}
      <button
        onClick={toggleMenu}
        className="p-3 rounded-xl text-neutral-700 hover:text-primary-600 hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all duration-200"
        aria-expanded={isOpen}
        aria-label="Toggle menu"
      >
        <div className="w-6 h-6 relative">
          <span className={`absolute block w-6 h-0.5 bg-current transform transition-all duration-300 ${
            isOpen ? 'rotate-45 top-3' : 'top-1'
          }`} />
          <span className={`absolute block w-6 h-0.5 bg-current transform transition-all duration-300 ${
            isOpen ? 'opacity-0' : 'top-3'
          }`} />
          <span className={`absolute block w-6 h-0.5 bg-current transform transition-all duration-300 ${
            isOpen ? '-rotate-45 top-3' : 'top-5'
          }`} />
        </div>
      </button>

      {/* Menu Overlay */}
      <div className={`fixed inset-0 z-40 bg-neutral-900/50 backdrop-blur-sm transition-opacity duration-300 ${
        isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`} onClick={closeMenu} />

      {/* Menu Panel */}
      <div className={`fixed top-0 right-0 z-50 h-full w-80 bg-white shadow-2xl transform transition-all duration-300 ease-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-neutral-200">
            <div className="flex items-center space-x-2">
              {siteSettings?.metadata?.logo ? (
                <img
                  src={`${siteSettings.metadata.logo.imgix_url}?w=200&h=60&fit=crop&auto=format,compress`}
                  alt={siteSettings.metadata.site_title || 'Menu'}
                  width={120}
                  height={36}
                  className="h-8 w-auto"
                />
              ) : (
                <>
                  <div className="w-8 h-8 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">G</span>
                  </div>
                  <span className="text-lg font-bold text-neutral-900">
                    {siteSettings?.metadata?.site_title || 'Menu'}
                  </span>
                </>
              )}
            </div>
            <button
              onClick={closeMenu}
              className="p-2 rounded-lg text-neutral-700 hover:text-primary-600 hover:bg-neutral-100 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 px-6 py-8 space-y-2 overflow-y-auto">
            <Link
              href="/team"
              onClick={closeMenu}
              className="flex items-center space-x-3 px-4 py-3 text-base font-medium text-neutral-700 hover:text-primary-600 hover:bg-primary-50 rounded-xl transition-all duration-200 group"
            >
              <svg className="w-5 h-5 text-neutral-400 group-hover:text-primary-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span>Team</span>
            </Link>

            <Link
              href="/specialties"
              onClick={closeMenu}
              className="flex items-center space-x-3 px-4 py-3 text-base font-medium text-neutral-700 hover:text-primary-600 hover:bg-primary-50 rounded-xl transition-all duration-200 group"
            >
              <svg className="w-5 h-5 text-neutral-400 group-hover:text-primary-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              <span>Specialties</span>
            </Link>

            {navigationPages
              .filter(page => page.slug !== 'home')
              .map((page) => (
                <Link
                  key={page.id}
                  href={`/${page.slug}`}
                  onClick={closeMenu}
                  className="flex items-center space-x-3 px-4 py-3 text-base font-medium text-neutral-700 hover:text-primary-600 hover:bg-primary-50 rounded-xl transition-all duration-200 group"
                >
                  <div className="w-5 h-5 bg-neutral-200 rounded-md flex items-center justify-center group-hover:bg-primary-200 transition-colors">
                    <span className="text-xs font-bold text-neutral-600 group-hover:text-primary-700">
                      {page.title.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <span>{page.title}</span>
                </Link>
              ))}

            <Link
              href="/faq"
              onClick={closeMenu}
              className="flex items-center space-x-3 px-4 py-3 text-base font-medium text-neutral-700 hover:text-primary-600 hover:bg-primary-50 rounded-xl transition-all duration-200 group"
            >
              <svg className="w-5 h-5 text-neutral-400 group-hover:text-primary-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>FAQ</span>
            </Link>
          </nav>

          {/* Contact CTA */}
          <div className="p-6 border-t border-neutral-200 bg-neutral-50">
            {siteSettings?.metadata?.contact_phone && (
              <a 
                href={`tel:${siteSettings.metadata.contact_phone}`}
                onClick={closeMenu}
                className="btn-primary w-full justify-center mb-4"
              >
                <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {siteSettings.metadata.contact_phone}
              </a>
            )}
            
            {siteSettings?.metadata?.contact_email && (
              <p className="text-center text-sm text-neutral-600">
                <a 
                  href={`mailto:${siteSettings.metadata.contact_email}`}
                  className="hover:text-primary-600 transition-colors"
                >
                  {siteSettings.metadata.contact_email}
                </a>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}