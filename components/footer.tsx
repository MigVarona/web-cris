export function Footer() {
  const clients = [
    'Disney', 'Save The Children', 'Heineken', 'Mediaset', 'Bitvavo',
    'Ayuda en Accion', 'RTVE', 'Domestika',
  ]
  const email = 'cristinaagomezz@gmail.com'

  return (
    <footer className="border-t border-border px-6 py-14 md:px-12 md:py-16">
      <div className="mb-12 border-b border-border pb-12">
        <h3 className="mb-6 text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground">
          Clients & Partners
        </h3>
        <p className="max-w-5xl text-sm leading-loose text-muted-foreground">
          {clients.join(' · ')}
        </p>
      </div>

      <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <div className="space-y-2">
          <p className="text-sm font-medium text-foreground">Cristina Gómez</p>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
            Video Editor · Post Production Coordinator · Madrid, Spain
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
          <a
            href={`mailto:${email}`}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            {email}
          </a>

          <a
            href="https://www.linkedin.com/in/cristinagomezvara/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://vimeo.com/espica"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Vimeo
          </a>
        </div>
      </div>

      <div className="mt-12 border-t border-border pt-6">
        <p className="text-xs leading-relaxed text-muted-foreground">
          © {new Date().getFullYear()} Cristina Gómez. All rights reserved. Developed by{' '}
          <a
            href="https://varona-portfolio-rho.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 transition-opacity hover:opacity-80"
          >
            Miguel Varona
          </a>
        </p>
      </div>
    </footer>
  )
}
