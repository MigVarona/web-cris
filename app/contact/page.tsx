import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact — Cristina Gomez / Video Editor',
  description: 'Contacta con Cristina Gomez - Editora de video profesional',
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      
      <article className="pt-32 px-6 md:px-12">
        <section className="max-w-4xl mb-16">
          <h1 className="text-4xl md:text-6xl font-medium text-foreground mb-8">
            Contact
          </h1>
          
          <p className="text-lg text-muted-foreground leading-relaxed mb-12">
            {"¿Tienes un proyecto en mente? Me encantaría escuchar sobre él. Estoy disponible para trabajos freelance y colaboraciones."}
          </p>
          
          <div className="space-y-8">
            <div>
              <h2 className="text-sm uppercase tracking-widest text-muted-foreground mb-3">
                Email
              </h2>
              <a 
                href="mailto:hello@cristinagomez.com" 
                className="text-2xl md:text-3xl text-foreground hover:text-muted-foreground transition-colors"
              >
                hello@cristinagomez.com
              </a>
            </div>
            
            <div>
              <h2 className="text-sm uppercase tracking-widest text-muted-foreground mb-3">
                Location
              </h2>
              <p className="text-2xl md:text-3xl text-foreground">
                Madrid, Spain
              </p>
            </div>
            
            <div>
              <h2 className="text-sm uppercase tracking-widest text-muted-foreground mb-3">
                Social
              </h2>
              <div className="flex flex-col gap-2">
                <a 
                  href="https://www.instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-2xl md:text-3xl text-foreground hover:text-muted-foreground transition-colors"
                >
                  Instagram ↗
                </a>
                <a 
                  href="https://www.linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-2xl md:text-3xl text-foreground hover:text-muted-foreground transition-colors"
                >
                  LinkedIn ↗
                </a>
                <a 
                  href="https://vimeo.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-2xl md:text-3xl text-foreground hover:text-muted-foreground transition-colors"
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
