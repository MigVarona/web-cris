import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { getProjectBySlug, projects } from '@/lib/projects'
import type { Metadata } from 'next'

interface ProjectPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  
  if (!project) {
    return {
      title: 'Proyecto no encontrado',
    }
  }

  return {
    title: `${project.title} / ${project.client} — Cristina Gomez`,
    description: project.description,
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  // Get next project for navigation
  const currentIndex = projects.findIndex(p => p.slug === slug)
  const nextProject = projects[(currentIndex + 1) % projects.length]

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      
      <article className="pt-32">
        {/* Hero Section */}
        <section className="px-6 md:px-12 mb-12">
          <h1 className="text-4xl md:text-6xl font-medium text-foreground mb-4">
            {project.title} <span className="text-muted-foreground">/ {project.client}</span>
          </h1>
          <p className="text-sm text-muted-foreground uppercase tracking-wider">
            {project.categories.join(', ')} · 
          
          </p>
        </section>

        {/* Video/Image Section */}
        <section className="px-6 md:px-12 mb-16">
          {project.videoUrl ? (
            <div className="relative aspect-video bg-card overflow-hidden">
              <iframe
                src={project.videoUrl}
                title={project.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          ) : (
            <div className="relative aspect-video bg-card overflow-hidden">
              <Image
                src={project.thumbnail}
                alt={project.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}
        </section>

        {/* Description & Credits */}
        <section className="px-6 md:px-12 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl">
            {project.description && (
              <div>
                <h2 className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
                  About the Project
                </h2>
                <p className="text-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>
            )}
            
            {project.credits && (
              <div>
                <h2 className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
                  Credits
                </h2>
                <dl className="space-y-2">
                  {project.credits.map((credit, index) => (
                    <div key={index} className="flex gap-4">
                      <dt className="text-muted-foreground min-w-[120px]">{credit.role}:</dt>
                      <dd className="text-foreground">{credit.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            )}
          </div>
        </section>

        {/* Project Image Gallery */}
        <section className="px-6 md:px-12 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative aspect-video bg-card overflow-hidden">
              <Image
                src={project.thumbnail2}
                alt={`${project.title} - Image 1`}
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-video bg-card overflow-hidden">
              <Image
                src={project.thumbnail3}
                alt={`${project.title} - Image 2`}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Next Project */}
        <section className="px-6 md:px-12 py-16 border-t border-border">
          <Link href={`/project/${nextProject.slug}`} className="group block">
            <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
              Next Project
            </p>
            <h3 className="text-2xl md:text-4xl font-medium text-foreground group-hover:text-muted-foreground transition-colors">
              {nextProject.title} <span className="text-muted-foreground group-hover:text-foreground transition-colors">/ {nextProject.client}</span>
            </h3>
          </Link>
        </section>
      </article>
      
      <Footer />
    </main>
  )
}
