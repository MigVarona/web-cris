import { Header } from '@/components/header'
import { ProjectGrid } from '@/components/project-grid'
import { Footer } from '@/components/footer'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      
      <div className="pt-28 md:pt-32">
        <ProjectGrid />
      </div>
      
      <Footer />
    </main>
  )
}
