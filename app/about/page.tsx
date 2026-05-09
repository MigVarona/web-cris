import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About — Cristina Gomez / Video Editor',
  description: 'Sobre Cristina Gomez - Editora de video profesional con más de 10 años de experiencia',
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      
      <article className="pt-32 px-6 md:px-12">
        <section className="max-w-4xl mb-16">
          <h1 className="text-4xl md:text-6xl font-medium text-foreground mb-8">
            About
          </h1>
          
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Soy Cristina Gomez, editora de video con sede en Madrid, España. 
              Con más de 10 años de experiencia en la industria publicitaria y cinematográfica, 
              he colaborado con algunas de las marcas más reconocidas a nivel mundial.
            </p>
            
            <p>
              Mi trabajo se centra en encontrar el ritmo perfecto, la emoción precisa 
              y la narrativa que conecte con la audiencia. Creo firmemente que la edición 
              es donde la historia cobra vida.
            </p>
            
            <p>
              He tenido el privilegio de trabajar con agencias como Wieden+Kennedy, 
              72andSunny, Leo Burnett y TBWA, en proyectos para marcas como Nike, Apple, 
              Spotify, Mercedes-Benz y muchas más.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-sm uppercase tracking-widest text-muted-foreground mb-8">
            Experience
          </h2>
          
          <div className="space-y-8">
            <div className="border-t border-border pt-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                <div>
                  <h3 className="text-xl font-medium text-foreground">Freelance Video Editor</h3>
                  <p className="text-muted-foreground">Various Clients Worldwide</p>
                </div>
                <span className="text-sm text-muted-foreground">2018 — Present</span>
              </div>
            </div>
            
            <div className="border-t border-border pt-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                <div>
                  <h3 className="text-xl font-medium text-foreground">Senior Editor</h3>
                  <p className="text-muted-foreground">Craft Editorial, Madrid</p>
                </div>
                <span className="text-sm text-muted-foreground">2015 — 2018</span>
              </div>
            </div>
            
            <div className="border-t border-border pt-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                <div>
                  <h3 className="text-xl font-medium text-foreground">Editor</h3>
                  <p className="textuted-foreground">The Lift, Barcelona</p>
                </div>
                <span className="text-sm text-muted-foreground">2012 — 2015</span>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-sm uppercase tracking-widest text-muted-foreground mb-8">
            Awards & Recognition
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border-t border-border pt-4">
              <p className="text-foreground">Cannes Lions Bronze — Film Craft</p>
              <p className="text-sm text-muted-foreground">2023</p>
            </div>
            <div className="border-t border-border pt-4">
              <p className="text-foreground">D&AD Pencil — Editing</p>
              <p className="text-sm text-muted-foreground">2022</p>
            </div>
            <div className="border-t border-border pt-4">
              <p className="text-foreground">El Sol de Oro — Mejor Edición</p>
              <p className="text-sm text-muted-foreground">2021</p>
            </div>
            <div className="border-t border-border pt-4">
              <p className="text-foreground">CdeC Oro — Film</p>
              <p className="text-sm text-muted-foreground">2020</p>
            </div>
          </div>
        </section>
      </article>
      
      <Footer />
    </main>
  )
}
