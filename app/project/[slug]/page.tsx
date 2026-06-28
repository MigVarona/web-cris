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
      
      <article className="pt-28 md:pt-32">
        <section className="mb-14 grid gap-10 px-6 md:mb-16 md:px-12 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-start lg:gap-16">
          <div>
            <Link
              href="/"
              className="mb-6 inline-block text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground transition-colors hover:text-foreground"
            >
              Work / Back
            </Link>
            <h1 className="max-w-5xl text-balance text-4xl font-medium leading-tight sm:text-5xl md:text-6xl md:leading-none">
              {project.title}{' '}
              <span className="text-muted-foreground">/ {project.client}</span>
            </h1>

            <div className="mt-10 md:mt-12">
              {project.videoUrl ? (
                <div className="relative aspect-video overflow-hidden border border-border bg-card">
                  <iframe
                    src={project.videoUrl}
                    title={project.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 h-full w-full"
                  />
                </div>
              ) : (
                <div className="relative aspect-video overflow-hidden border border-border bg-card">
                  <Image
                    src={project.thumbnail}
                    alt={project.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              )}
            </div>
          </div>

          <aside className="border-y border-border py-5">
            <dl className="divide-y divide-border">
              <div className="grid gap-2 py-3 first:pt-0 sm:grid-cols-[110px_1fr] lg:grid-cols-1">
                <dt className="text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground">
                  Project
                </dt>
                <dd className="text-sm text-foreground">{project.client}</dd>
              </div>
              <div className="grid gap-2 py-3 sm:grid-cols-[110px_1fr] lg:grid-cols-1">
                <dt className="text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground">
                  Type
                </dt>
                <dd className="text-sm text-foreground">{project.categories.join(', ')}</dd>
              </div>
              {project.credits?.map((credit) => (
                <div key={`${credit.role}-${credit.value}`} className="grid gap-2 py-3 sm:grid-cols-[110px_1fr] lg:grid-cols-1">
                  <dt className="text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground">
                    {credit.role}
                  </dt>
                  <dd className="text-sm leading-relaxed text-foreground">{credit.value}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </section>

        {project.description && (
          <section className="mb-14 px-6 md:mb-16 md:px-12">
            <div className="max-w-3xl border-y border-border py-8">
              <h2 className="mb-4 text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground">
                About the Project
              </h2>
              <p className="text-lg leading-relaxed text-foreground">
                {project.description}
              </p>
            </div>
          </section>
        )}

        <section className="mb-16 px-6 md:px-12">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="relative aspect-video overflow-hidden border border-border bg-card">
              <Image
                src={project.thumbnail2}
                alt={`${project.title} - Image 1`}
                fill
                className="object-cover"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </div>
            <div className="relative aspect-video overflow-hidden border border-border bg-card">
              <Image
                src={project.thumbnail3}
                alt={`${project.title} - Image 2`}
                fill
                className="object-cover"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </div>
          </div>
        </section>

        <section className="border-t border-border px-6 py-14 md:px-12 md:py-16">
          <Link href={`/project/${nextProject.slug}`} className="group block max-w-5xl">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground">
              Next Project
            </p>
            <h3 className="text-2xl font-medium leading-tight text-foreground transition-colors group-hover:text-muted-foreground md:text-4xl">
              {nextProject.title} <span className="text-muted-foreground group-hover:text-foreground transition-colors">/ {nextProject.client}</span>
            </h3>
          </Link>
        </section>
      </article>
      
      <Footer />
    </main>
  )
}
