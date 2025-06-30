import { SiteSettings } from '@/types'

interface FooterProps {
  siteSettings: SiteSettings | null;
}

export default function Footer({ siteSettings }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              {siteSettings?.metadata?.logo ? (
                <img
                  src={`${siteSettings.metadata.logo.imgix_url}?w=400&h=120&fit=crop&auto=format,compress`}
                  alt={siteSettings.metadata.site_title || 'Grand Rapids Specialty Therapy'}
                  width={200}
                  height={60}
                  className="h-10 w-auto"
                />
              ) : (
                <>
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-2xl flex items-center justify-center">
                    <span className="text-white font-bold text-xl">G</span>
                  </div>
                  <span className="text-2xl font-bold">
                    {siteSettings?.metadata?.site_title || 'GRST'}
                  </span>
                </>
              )}
            </div>
            
            {siteSettings?.metadata?.footer_content ? (
              <div 
                className="text-neutral-300 leading-relaxed mb-6 max-w-md"
                dangerouslySetInnerHTML={{ __html: siteSettings.metadata.footer_content }}
              />
            ) : (
              <p className="text-neutral-300 leading-relaxed mb-6 max-w-md">
                Providing specialized therapy services with compassion and expertise. 
                We celebrate diversity and create safe spaces for healing and growth.
              </p>
            )}
            
            {/* Safe Space Logo */}
            {siteSettings?.metadata?.safe_space_logo && (
              <div className="mb-6">
                <img
                  src={`${siteSettings.metadata.safe_space_logo.imgix_url}?w=240&h=240&fit=crop&auto=format,compress`}
                  alt="Safe Space"
                  width={80}
                  height={80}
                  className="h-16 w-auto opacity-80 hover:opacity-100 transition-opacity"
                />
              </div>
            )}
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Contact</h3>
            <div className="space-y-4">
              {siteSettings?.metadata?.contact_phone && (
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary-600/20 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <a 
                    href={`tel:${siteSettings.metadata.contact_phone}`}
                    className="text-neutral-300 hover:text-primary-400 transition-colors"
                  >
                    {siteSettings.metadata.contact_phone}
                  </a>
                </div>
              )}
              
              {siteSettings?.metadata?.contact_email && (
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary-600/20 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <a 
                    href={`mailto:${siteSettings.metadata.contact_email}`}
                    className="text-neutral-300 hover:text-primary-400 transition-colors"
                  >
                    {siteSettings.metadata.contact_email}
                  </a>
                </div>
              )}
              
              {siteSettings?.metadata?.address && (
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-primary-600/20 rounded-lg flex items-center justify-center mt-1">
                    <svg className="w-5 h-5 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div 
                    className="text-neutral-300 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: siteSettings.metadata.address }}
                  />
                </div>
              )}
            </div>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Hours</h3>
            {siteSettings?.metadata?.business_hours ? (
              <div 
                className="text-neutral-300 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: siteSettings.metadata.business_hours }}
              />
            ) : (
              <div className="text-neutral-300 space-y-2">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>9:00 AM - 3:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-neutral-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-neutral-400 text-sm">
              © {currentYear} {siteSettings?.metadata?.site_title || 'Grand Rapids Specialty Therapy'}. All rights reserved.
            </p>
            
            <div className="flex items-center space-x-6 text-sm text-neutral-400">
              <span>Made with 💙 for healing and growth</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}