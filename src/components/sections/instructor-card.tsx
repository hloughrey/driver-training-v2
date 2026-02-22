import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

interface InstructorCardProps {
  name: string
  image: string
  experience: number
  bio: string
  qualifications: string[]
}

export function InstructorCard({ name, image, experience, bio, qualifications }: InstructorCardProps) {
  return (
    <Card>
      <CardHeader>
        <div className="relative aspect-square w-full overflow-hidden rounded-lg mb-4">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <CardTitle className="text-2xl">{name}</CardTitle>
        <CardDescription className="text-base font-semibold">
          {experience} years of professional experience
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground leading-relaxed">{bio}</p>
        <div>
          <h4 className="font-semibold mb-2">Qualifications</h4>
          <ul className="space-y-1 text-sm text-muted-foreground">
            {qualifications.map((qual, index) => (
              <li key={index} className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>{qual}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}
