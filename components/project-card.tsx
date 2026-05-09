'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import type { Project } from '@/lib/projects'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Link 
      href={`/project/${project.slug}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <article className="relative overflow-hidden">
        <div className="relative aspect-[4/3] overflow-hidden bg-card">
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            className={`object-cover transition-transform duration-700 ${isHovered ? 'scale-105' : 'scale-100'}`}
          />
          <div className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-30'}`} />
        </div>
        
        <div className="mt-4 space-y-1">
          <h3 className="text-lg font-medium text-foreground">
            {project.title} <span className="text-muted-foreground">/ {project.client}</span>
          </h3>
          <p className="text-sm text-muted-foreground">
            {project.categories.join(', ')}
          </p>
        </div>
      </article>
    </Link>
  )
}
