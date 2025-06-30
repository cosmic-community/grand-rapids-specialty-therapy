import { SpecialtyArea } from '@/types'
import SpecialtyCard from '@/components/SpecialtyCard'

interface SpecialtyGridProps {
  specialties: SpecialtyArea[];
}

export default function SpecialtyGrid({ specialties }: SpecialtyGridProps) {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {specialties.map((specialty) => (
        <SpecialtyCard key={specialty.id} specialty={specialty} />
      ))}
    </div>
  )
}