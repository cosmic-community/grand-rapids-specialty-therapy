import Link from 'next/link'

export default function ContactCTA() {
  return (
    <section className="py-16 bg-gradient-brand">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Begin Your Journey?
        </h2>
        <p className="text-xl text-neutral-100 mb-8 max-w-2xl mx-auto">
          Take the first step toward healing and growth. Contact us to schedule a consultation 
          or learn more about our specialized services.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/contact" 
            className="bg-white text-primary-600 hover:bg-neutral-100 px-8 py-3 rounded-lg font-medium transition-colors duration-200"
          >
            Get in Touch
          </Link>
          <a 
            href="tel:(616) 303-0755"
            className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-3 rounded-lg font-medium transition-colors duration-200"
          >
            Call (616) 303-0755
          </a>
        </div>
      </div>
    </section>
  )
}