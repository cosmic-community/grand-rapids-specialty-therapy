// app/[slug]/page.tsx
import { getPage, getPages } from '@/lib/cosmic'
import { notFound } from 'next/navigation'
import HeroSection from '@/components/HeroSection'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const pages = await getPages();
  
  return pages
    .filter(page => page.slug !== 'home')
    .map((page) => ({
      slug: page.slug,
    }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const page = await getPage(slug);
  
  if (!page) {
    return {
      title: 'Page Not Found',
    };
  }
  
  return {
    title: page.metadata?.page_title || page.title,
    description: page.metadata?.meta_description,
  };
}

export default async function DynamicPage({ params }: PageProps) {
  const { slug } = await params;
  const page = await getPage(slug);

  if (!page) {
    notFound();
  }

  return (
    <div>
      <HeroSection page={page} />
      
      {/* Main Content */}
      {page.metadata?.page_content && (
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div 
              className="prose-content"
              dangerouslySetInnerHTML={{ __html: page.metadata.page_content }}
            />
          </div>
        </section>
      )}
    </div>
  )
}