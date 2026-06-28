import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import type { Metadata } from 'next'

const email = 'cristinaagomezz@gmail.com'

export const metadata: Metadata = {
  title: 'Contact — Cristina Gomez / Video Editor & Post Production Coordinator',
  description: 'Contacta con Cristina Gomez - Editora de video profesional',
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      
      <article className="px-6 pt-28 md:px-12 md:pt-32">
        <section className="mb-20 max-w-5xl">
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground">Get in touch</p>
          <h1 className="mb-10 max-w-4xl text-4xl font-medium leading-none md:text-6xl">
            Contact
          </h1>

          <div className="divide-y divide-border border-y border-border">
            <div className="grid gap-3 py-7 md:grid-cols-[180px_1fr] md:items-baseline">
              <h2 className="text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground">
                Email
              </h2>
              <a 
                href={`mailto:${email}`}
                className="text-2xl text-foreground transition-colors hover:text-muted-foreground md:text-3xl"
              >
                {email}
              </a>
            </div>
            
            <div className="grid gap-3 py-7 md:grid-cols-[180px_1fr] md:items-baseline">
              <h2 className="text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground">
                Location
              </h2>
              <p className="text-2xl text-foreground md:text-3xl">
                Madrid, Spain
              </p>
            </div>
            
            <div className="grid gap-3 py-7 md:grid-cols-[180px_1fr] md:items-baseline">
              <h2 className="text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground">
                Social
              </h2>
              <div className="flex flex-col gap-3">
                <a 
                  href="https://www.linkedin.com/in/cristinagomezvara/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-2xl text-foreground transition-colors hover:text-muted-foreground md:text-3xl"
                >
                  LinkedIn ↗
                </a>
                <a 
                  href="https://vimeo.com/espica" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-2xl text-foreground transition-colors hover:text-muted-foreground md:text-3xl"
                >
                  Vimeo ↗
                </a>
              </div>
            </div>
          </div>
        </section>
      </article>
      
      <Footer />
    </main>
  )
}
