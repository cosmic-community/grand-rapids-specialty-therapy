import { SpecialtyArea } from '@/types'

interface SpecialtyCardProps {
  specialty: SpecialtyArea;
}

export default function SpecialtyCard({ specialty }: SpecialtyCardProps) {
  const featuredImage = specialty.metadata?.featured_image;
  const icon = specialty.metadata?.icon;
  const name = specialty.metadata?.name || specialty.title;
  const description = specialty.metadata?.description;

  return (
    <div className="card group hover:shadow-lg transition-shadow duration-200">
      {/* Image */}
      {featuredImage && (
        <div className="mb-6 overflow-hidden rounded-lg">
          <img
            src={`${featuredImage.imgix_url}?w=600&h=300&fit=crop&auto=format,compress`}
            alt={name}
            width={300}
            height={150}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-200"
          />
        </div>
      )}

      {/* Icon & Title */}
      <div className="flex items-center mb-4">
        {icon && (
          <img
            src={`${icon.imgix_url}?w=80&h=80&fit=crop&auto=format,compress`}
            alt={name}
            width={40}
            height={40}
            className="w-10 h-10 mr-3 rounded-full"
          />
        )}
        <h3 className="text-xl font-semibold text-neutral-900">
          {name}
        </h3>
      </div>

      {/* Description */}
      {description && (
        <div 
          className="text-neutral-600 prose-content"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      )}
    </div>
  )
}