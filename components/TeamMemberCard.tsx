import { TeamMember } from '@/types'

interface TeamMemberCardProps {
  member: TeamMember;
  detailed?: boolean;
}

export default function TeamMemberCard({ member, detailed = false }: TeamMemberCardProps) {
  const profileImage = member.metadata?.profile_image;
  const fullName = member.metadata?.full_name || member.title;
  const pronouns = member.metadata?.pronouns;
  const titleRole = member.metadata?.title_role;
  const bio = member.metadata?.bio;
  const specialties = member.metadata?.specialties || [];
  const availabilityStatus = member.metadata?.availability_status;
  const contactEmail = member.metadata?.contact_email;
  const phoneNumber = member.metadata?.phone_number;
  const yearsExperience = member.metadata?.years_experience;

  const getAvailabilityColor = (status: string) => {
    switch (status) {
      case 'available':
        return 'bg-green-100 text-green-800';
      case 'waitlist':
        return 'bg-yellow-100 text-yellow-800';
      case 'unavailable':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-neutral-100 text-neutral-800';
    }
  };

  return (
    <div className="card">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Profile Image */}
        {profileImage && (
          <div className="flex-shrink-0">
            <img
              src={`${profileImage.imgix_url}?w=400&h=400&fit=crop&auto=format,compress`}
              alt={fullName}
              width={200}
              height={200}
              className="w-48 h-48 lg:w-56 lg:h-56 rounded-lg object-cover mx-auto lg:mx-0"
            />
          </div>
        )}

        {/* Content */}
        <div className="flex-1">
          {/* Name & Title */}
          <div className="mb-4">
            <h3 className="text-2xl font-bold text-neutral-900 mb-1">
              {fullName}
              {pronouns && (
                <span className="text-lg font-normal text-neutral-600 ml-2">
                  ({pronouns})
                </span>
              )}
            </h3>
            {titleRole && (
              <p className="text-primary-600 font-medium">
                {titleRole}
              </p>
            )}
            {yearsExperience && (
              <p className="text-neutral-600 text-sm mt-1">
                {yearsExperience} years of experience
              </p>
            )}
          </div>

          {/* Availability Status */}
          {availabilityStatus && (
            <div className="mb-4">
              <span 
                className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getAvailabilityColor(availabilityStatus.key)}`}
              >
                {availabilityStatus.value}
              </span>
            </div>
          )}

          {/* Bio */}
          {bio && (
            <div 
              className="text-neutral-700 prose-content mb-6"
              dangerouslySetInnerHTML={{ __html: bio }}
            />
          )}

          {/* Specialties */}
          {specialties.length > 0 && (
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-neutral-900 mb-3">
                Specialties
              </h4>
              <div className="flex flex-wrap gap-2">
                {specialties.map((specialty) => (
                  <span
                    key={specialty.id}
                    className="inline-block bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {specialty.metadata?.name || specialty.title}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Contact Information */}
          {detailed && (contactEmail || phoneNumber) && (
            <div className="border-t border-neutral-200 pt-6">
              <h4 className="text-lg font-semibold text-neutral-900 mb-3">
                Contact Information
              </h4>
              <div className="space-y-2">
                {contactEmail && (
                  <p>
                    <span className="text-neutral-600">Email:</span>{' '}
                    <a 
                      href={`mailto:${contactEmail}`}
                      className="text-primary-600 hover:text-primary-700 transition-colors"
                    >
                      {contactEmail}
                    </a>
                  </p>
                )}
                {phoneNumber && (
                  <p>
                    <span className="text-neutral-600">Phone:</span>{' '}
                    <a 
                      href={`tel:${phoneNumber}`}
                      className="text-primary-600 hover:text-primary-700 transition-colors"
                    >
                      {phoneNumber}
                    </a>
                  </p>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}