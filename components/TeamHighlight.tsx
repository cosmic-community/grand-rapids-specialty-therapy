import { TeamMember } from '@/types'
import TeamMemberCard from '@/components/TeamMemberCard'
import Link from 'next/link'

interface TeamHighlightProps {
  teamMembers: TeamMember[];
}

export default function TeamHighlight({ teamMembers }: TeamHighlightProps) {
  return (
    <div>
      <div className="grid gap-8 md:gap-12">
        {teamMembers.map((member) => (
          <TeamMemberCard key={member.id} member={member} />
        ))}
      </div>
      
      {teamMembers.length >= 3 && (
        <div className="text-center mt-12">
          <Link href="/team" className="btn-primary">
            View All Team Members
          </Link>
        </div>
      )}
    </div>
  )
}