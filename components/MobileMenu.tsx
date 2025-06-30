'use client'

import { useState } from 'react'
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

  return (
    <div className="relative">
      {/* Menu Button */}
      <button
        onClick={toggleMenu}
        className="p-2 rounded-md text-neutral-700 hover:text-primary-600 hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
        aria-expanded={isOpen}
        aria-label="Toggle menu"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50" onClick={closeMenu} />
      )}

      {/* Menu Panel */}
      <div className={`fixed top-0 right-0 z-50 h-full w-80 bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <span className="text-xl font-bold text-neutral-900">
              {siteSettings?.metadata?.site_title || 'Menu'}
            </span>
            <button
              onClick={closeMenu}
              className="p-2 rounded-md text-neutral-700 hover:text-primary-600 hover:bg-neutral-100"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-4">
            <Link
              href="/team"
              onClick={closeMenu}
              className="block px-4 py-3 text-base font-medium text-neutral-700 hover:text-primary-600 hover:bg-neutral-50 rounded-lg transition-colors"
            >
              Team
            </Link>
            <Link
              href="/specialties"
              onClick={closeMenu}
              className="block px-4 py-3 text-base font-medium text-neutral-700 hover:text-primary-600 hover:bg-neutral-50 rounded-lg transition-colors"
            >
              Specialties
            </Link>
            {navigationPages
              .filter(page => page.slug !== 'home')
              .map((page) => (
                <Link
                  key={page.id}
                  href={`/${page.slug}`}
                  onClick={closeMenu}
                  className="block px-4 py-3 text-base font-medium text-neutral-700 hover:text-primary-600 hover:bg-neutral-50 rounded-lg transition-colors"
                >
                  {page.title}
                </Link>
              ))}
            <Link
              href="/faq"
              onClick={closeMenu}
              className="block px-4 py-3 text-base font-medium text-neutral-700 hover:text-primary-600 hover:bg-neutral-50 rounded-lg transition-colors"
            >
              FAQ
            </Link>
          </nav>

          {/* Contact Info */}
          {siteSettings?.metadata?.contact_phone && (
            <div className="mt-8 pt-8 border-t border-neutral-200">
              <p className="text-sm text-neutral-600 mb-2">Call us:</p>
              <a 
                href={`tel:${siteSettings.metadata.contact_phone}`}
                className="text-primary-600 font-medium hover:text-primary-700 transition-colors"
              >
                {siteSettings.metadata.contact_phone}
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}