import Image from 'next/image'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About — Cristina Gomez / Post Production Coordinator',
  description: 'Sobre Cristina Gomez, editora de video y coordinadora de postproduccion en Madrid.',
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />

      <article className="px-6 pt-28 md:px-12 md:pt-32">
        <section className="mb-20 grid max-w-6xl gap-10 md:grid-cols-[minmax(0,1fr)_minmax(300px,420px)] md:gap-16">
          <div>
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground">Profile</p>
            <h1 className="mb-8 text-4xl font-medium leading-none md:text-6xl">
              About
            </h1>

            <div className="space-y-10 text-muted-foreground">
              <div className="max-w-3xl">
                <h2 className="mb-4 text-xs font-medium uppercase tracking-[0.22em] text-foreground">
                  What I Do
                </h2>

                <p className="text-lg leading-relaxed">
                  I have had the privilege of working on diverse projects,
                  including events, advertising campaigns, start-ups, and
                  freelance assignments for clients such as RTVE, Save The
                  Children, Heineken, and Disney, among others. These
                  experiences have further strengthened my ability to deliver
                  high-quality results within demanding deadlines and varying
                  project scopes. I am confident in my abilities to contribute
                  effectively to your team and help you achieve your goals
                  together.
                </p>
              </div>

              <div>
                <h2 className="mb-4 text-xs font-medium uppercase tracking-[0.22em] text-foreground">
                  Software
                </h2>

                <ul className="grid max-w-2xl grid-cols-1 border-t border-border text-sm text-foreground sm:grid-cols-2">
                  {['Adobe Premiere', 'DaVinci Resolve', 'Avid Media Composer', 'After Effects'].map((item) => (
                    <li key={item} className="border-b border-border py-3 text-muted-foreground">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="relative aspect-[4/5] w-full overflow-hidden border border-border bg-card">
            <Image
              src="/Cristina gomez.jpeg"
              alt="Cristina Gomez"
              fill
              className="object-cover"
              priority
            />
          </div>
        </section>

      </article>

      <Footer />
    </main>
  )
}
