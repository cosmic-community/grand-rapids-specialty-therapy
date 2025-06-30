import { getPage, getSpecialtyAreas, getTeamMembers } from '@/lib/cosmic'
import { notFound } from 'next/navigation'
import HeroSection from '@/components/HeroSection'
import SpecialtyGrid from '@/components/SpecialtyGrid'
import TeamHighlight from '@/components/TeamHighlight'
import ContactCTA from '@/components/ContactCTA'

export default async function HomePage() {
  const [homePage, specialtyAreas, teamMembers] = await Promise.all([
    getPage('home'),
    getSpecialtyAreas(),
    getTeamMembers()
  ]);

  if (!homePage) {
    notFound();
  }

  const additionalSections = homePage.metadata?.additional_sections || {};

  return (
    <div>
      <HeroSection page={homePage} />
      
      {/* Main Content */}
      {homePage.metadata?.page_content && (
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div 
              className="prose-content"
              dangerouslySetInnerHTML={{ __html: homePage.metadata.page_content }}
            />
          </div>
        </section>
      )}

      {/* Featured Specialties */}
      {additionalSections.featured_specialties && specialtyAreas.length > 0 && (
        <section className="py-16 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-neutral-900 mb-4">
                Our Specialties
              </h2>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                We provide specialized care in areas often overlooked by traditional therapy practices
              </p>
            </div>
            <SpecialtyGrid specialties={specialtyAreas} />
          </div>
        </section>
      )}

      {/* Team Highlight */}
      {additionalSections.team_highlight && teamMembers.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-neutral-900 mb-4">
                Meet Our Team
              </h2>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                Our experienced therapists bring both professional expertise and lived experience
              </p>
            </div>
            <TeamHighlight teamMembers={teamMembers.slice(0, 3)} />
          </div>
        </section>
      )}

      {/* Contact CTA */}
      {additionalSections.contact_cta && (
        <ContactCTA />
      )}
    </div>
  )
}