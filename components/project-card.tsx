'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import type { Project } from '@/lib/projects'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link 
      href={`/project/${project.slug}`}
      className="group block"
    >
      <article className="relative overflow-hidden">
        <div className="relative aspect-[4/3] overflow-hidden border border-border bg-card transition-colors duration-500 group-hover:border-foreground/50">
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover brightness-90 transition duration-700 group-hover:scale-105 group-hover:brightness-105"
          />
          <div className="absolute inset-0 bg-background/20 opacity-40 transition-opacity duration-300 group-hover:opacity-0" />
        </div>
        
        <div className="mt-4 flex items-start justify-between gap-4 border-t border-border pt-4 transition-colors duration-300 group-hover:border-foreground/50">
          <div className="space-y-1">
            <h3 className="text-base font-medium leading-snug text-foreground transition-colors duration-300 group-hover:text-white md:text-lg">
              {project.title}{' '}
              <span className="text-muted-foreground transition-colors duration-300 group-hover:text-foreground/70">
                / {project.client}
              </span>
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground transition-colors duration-300 group-hover:text-foreground/65">
              {project.categories.join(', ')}
            </p>
          </div>
          <span className="flex shrink-0 items-center gap-2 pt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground transition-all duration-300 group-hover:translate-x-1 group-hover:text-foreground">
            View
            <ArrowUpRight className="size-3.5" aria-hidden="true" />
          </span>
        </div>
      </article>
    </Link>
  )
}
