import Image from 'next/image'

interface PageHeroProps {
  title: string
  description?: string
  icon?: React.ReactNode
  actions?: React.ReactNode
}

export function PageHero({ title, description, icon, actions }: PageHeroProps) {
  return (
    <section className="relative min-h-[400px] sm:min-h-[500px] overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/driver-training.jpg"
          alt="Driver training on a scenic road"
          fill
          className="object-cover"
          sizes="100vw"
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/30 via-primary/20 to-background/90" />
      </div>

      {/* Content */}
      <div className="container px-4 py-20">
        <div className="mx-auto max-w-3xl text-center space-y-6">
          {icon && (
            <div className="inline-block p-3 bg-white/20 backdrop-blur-sm rounded-full mb-4 [&>svg]:text-white [&>svg]:drop-shadow-lg">
              {icon}
            </div>
          )}
          <h1 className="text-4xl sm:text-5xl font-bold text-white text-shadow-hero-strong">
            {title}
          </h1>
          {description && (
            <p className="text-xl text-white/90 text-shadow-hero">
              {description}
            </p>
          )}
          {actions && (
            <div className="pt-4">
              {actions}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
