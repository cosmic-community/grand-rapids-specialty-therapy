import { getSpecialtyAreas } from '@/lib/cosmic'
import SpecialtyCard from '@/components/SpecialtyCard'

export const metadata = {
  title: 'Our Specialties - Grand Rapids Specialty Therapy',
  description: 'Learn about our specialized therapy services including sexual wellness, LGBTQIA+ care, relationship therapy, and body diversity.',
}

export default async function SpecialtiesPage() {
  const specialties = await getSpecialtyAreas();

  return (
    <div className="py-16 bg-neutral-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-neutral-900 mb-4">
            Our Specialties
          </h1>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            We specialize in areas that are often overlooked or inadequately addressed in traditional therapy settings.
          </p>
        </div>

        {specialties.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {specialties.map((specialty) => (
              <SpecialtyCard key={specialty.id} specialty={specialty} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-neutral-600">No specialties found.</p>
          </div>
        )}
      </div>
    </div>
  )
}