import './globals.css'
import { Inter } from 'next/font/google'
import { getSiteSettings } from '@/lib/cosmic'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export async function generateMetadata() {
  const siteSettings = await getSiteSettings();
  
  return {
    title: siteSettings?.metadata?.site_title || 'Grand Rapids Specialty Therapy',
    description: 'Specialized therapy services in Grand Rapids focusing on sexual wellness, LGBTQIA+ care, relationship therapy, and body diversity with compassionate, evidence-based treatment.',
  }
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const siteSettings = await getSiteSettings();

  return (
    <html lang="en">
      <body className={inter.className}>
        <Header siteSettings={siteSettings} />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer siteSettings={siteSettings} />
      </body>
    </html>
  )
}