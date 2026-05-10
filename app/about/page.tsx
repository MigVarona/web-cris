import Image from 'next/image'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About — Cristina Gomez / Post Production Coordinator',
  description:
    '',
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />

      <article className="pt-32 px-6 md:px-12">
        <section className="max-w-5xl mb-16 grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h1 className="text-4xl md:text-6xl font-medium text-foreground mb-8">
              About
            </h1>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <div>
                <h2 className="text-sm uppercase tracking-widest text-foreground mb-4">
                  Software
                </h2>

                <ul className="space-y-2">
                  <li>Adobe Premiere</li>
                  <li>DaVinci Resolve</li>
                  <li>Avid Media Composer</li>
                  <li>After Effects</li>
                </ul>
              </div>

              <div>
                <h2 className="text-sm uppercase tracking-widest text-foreground mb-4">
                  What I Do
                </h2>

                <p>
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
            </div>
          </div>

          {/* FOTO */}
          <div className="relative w-full aspect-[4/5] overflow-hidden rounded-2xl">
            <Image
              src="/Cristina gomez.jpeg"
              alt="Cristina Gomez"
              fill
              className="object-cover"
              priority
            />
          </div>
        </section>

        <section className="mb-16">
          <div className="space-y-8"></div>
        </section>
      </article>

      <Footer />
    </main>
  )
}