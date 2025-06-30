import { getTeamMembers } from '@/lib/cosmic'
import TeamMemberCard from '@/components/TeamMemberCard'

export const metadata = {
  title: 'Our Team - Grand Rapids Specialty Therapy',
  description: 'Meet our experienced team of licensed therapists specializing in sexual wellness, LGBTQIA+ care, and relationship therapy.',
}

export default async function TeamPage() {
  const teamMembers = await getTeamMembers();

  return (
    <div className="py-16 bg-neutral-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-neutral-900 mb-4">
            Our Team
          </h1>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Meet our experienced team of licensed therapists who bring both professional expertise and lived experience to create truly affirming, safe spaces for healing and growth.
          </p>
        </div>

        {teamMembers.length > 0 ? (
          <div className="grid gap-8 md:gap-12">
            {teamMembers.map((member) => (
              <TeamMemberCard key={member.id} member={member} detailed />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-neutral-600">No team members found.</p>
          </div>
        )}
      </div>
    </div>
  )
}