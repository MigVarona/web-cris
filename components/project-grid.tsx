import { projects } from '@/lib/projects'
import { ProjectCard } from './project-card'

export function ProjectGrid() {
  return (
    <section className="px-6 md:px-12 py-12">
      <h2 className="text-sm uppercase tracking-widest text-muted-foreground mb-12">
        Work
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}
