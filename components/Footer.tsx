import { SiteSettings } from '@/types'

interface FooterProps {
  siteSettings: SiteSettings | null;
}

export default function Footer({ siteSettings }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            {siteSettings?.metadata?.contact_phone && (
              <p className="mb-2">
                <span className="text-neutral-300">Phone:</span>{' '}
                <a 
                  href={`tel:${siteSettings.metadata.contact_phone}`}
                  className="hover:text-primary-400 transition-colors"
                >
                  {siteSettings.metadata.contact_phone}
                </a>
              </p>
            )}
            {siteSettings?.metadata?.contact_email && (
              <p className="mb-2">
                <span className="text-neutral-300">Email:</span>{' '}
                <a 
                  href={`mailto:${siteSettings.metadata.contact_email}`}
                  className="hover:text-primary-400 transition-colors"
                >
                  {siteSettings.metadata.contact_email}
                </a>
              </p>
            )}
            {siteSettings?.metadata?.address && (
              <div 
                className="text-neutral-300 mt-4"
                dangerouslySetInnerHTML={{ __html: siteSettings.metadata.address }}
              />
            )}
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Hours</h3>
            {siteSettings?.metadata?.business_hours ? (
              <div 
                className="text-neutral-300"
                dangerouslySetInnerHTML={{ __html: siteSettings.metadata.business_hours }}
              />
            ) : (
              <div className="text-neutral-300">
                <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
                <p>Saturday: 9:00 AM - 3:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            )}
          </div>

          {/* About */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About</h3>
            {siteSettings?.metadata?.footer_content ? (
              <div 
                className="text-neutral-300"
                dangerouslySetInnerHTML={{ __html: siteSettings.metadata.footer_content }}
              />
            ) : (
              <p className="text-neutral-300">
                Providing specialized therapy services with compassion and expertise. 
                We celebrate diversity and create safe spaces for healing and growth.
              </p>
            )}
            
            {/* Safe Space Logo */}
            {siteSettings?.metadata?.safe_space_logo && (
              <div className="mt-6">
                <img
                  src={`${siteSettings.metadata.safe_space_logo.imgix_url}?w=120&h=120&fit=crop&auto=format,compress`}
                  alt="Safe Space"
                  width={60}
                  height={60}
                  className="h-12 w-auto"
                />
              </div>
            )}
          </div>
        </div>

        <div className="border-t border-neutral-700 mt-8 pt-8 text-center">
          <p className="text-neutral-400">
            © {currentYear} {siteSettings?.metadata?.site_title || 'Grand Rapids Specialty Therapy'}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}