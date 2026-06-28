import { projects } from '@/lib/projects'
import { ProjectCard } from './project-card'

export function ProjectGrid() {
  return (
    <section className="px-6 py-10 md:px-12 md:py-14">
      <div className="mb-10 flex flex-col gap-5 border-b border-border pb-8 md:mb-12 md:flex-row md:items-end md:justify-between">
        <div className="max-w-3xl">
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground">Selected work</p>
          <h1 className="text-[1.7rem] font-medium leading-snug sm:text-4xl sm:leading-tight md:text-6xl md:leading-none">
            <span className="block md:inline">Editing, coordination</span>{' '}
            <span className="block md:inline">and postproduction</span>{' '}
            <span className="block md:inline">for film, brands</span>{' '}
            <span className="block md:inline">and culture.</span>
          </h1>
        </div>

        <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
          Madrid based video editor working across commercials, e-learning, music and documentary projects.
        </p>
      </div>
      
      <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}
