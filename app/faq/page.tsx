import { getFAQs } from '@/lib/cosmic'
import FAQAccordion from '@/components/FAQAccordion'

export const metadata = {
  title: 'Frequently Asked Questions - Grand Rapids Specialty Therapy',
  description: 'Find answers to common questions about our therapy services, insurance, appointments, and more.',
}

export default async function FAQPage() {
  const faqs = await getFAQs();

  // Group FAQs by category
  const faqsByCategory = faqs.reduce((acc, faq) => {
    const categoryKey = faq.metadata?.category?.key || 'general';
    const categoryValue = faq.metadata?.category?.value || 'General';
    
    if (!acc[categoryKey]) {
      acc[categoryKey] = {
        name: categoryValue,
        faqs: []
      };
    }
    acc[categoryKey].faqs.push(faq);
    return acc;
  }, {} as Record<string, { name: string; faqs: any[] }>);

  const categories = Object.keys(faqsByCategory);

  return (
    <div className="py-16 bg-neutral-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-neutral-900 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-neutral-600">
            Find answers to common questions about our services, insurance, and appointments.
          </p>
        </div>

        {categories.length > 0 ? (
          <div className="space-y-12">
            {categories.map((categoryKey) => {
              const category = faqsByCategory[categoryKey];
              if (!category) return null;
              
              return (
                <div key={categoryKey}>
                  <h2 className="text-2xl font-bold text-neutral-900 mb-6">
                    {category.name}
                  </h2>
                  <FAQAccordion faqs={category.faqs} />
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-neutral-600">No FAQs found.</p>
          </div>
        )}
      </div>
    </div>
  )
}