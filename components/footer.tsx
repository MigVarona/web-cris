export function Footer() {
  const clients = [
    'Disney', 'Save The Children', 'Heineken', 'Mediaset', 'Bitvavo',
    'Ayuda en Accion', 'RTVE', 'Domestika',

  ]

  return (
    <footer className="px-6 md:px-12 py-16 border-t border-border">
      <div className="mb-12">
        <h3 className="text-sm uppercase tracking-widest text-muted-foreground mb-6">
          Clients & Partners
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed max-w-4xl">
          {clients.join(' · ')}
        </p>
      </div>

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div className="space-y-2">
          <p className="text-sm text-foreground">Cristina Gómez</p>
          <p className="text-sm text-muted-foreground">Video Editor · Post Production Coordinator · Madrid, Spain</p>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="mailto:hello@cristinagomez.com"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            cristinaagomezz@gmail.com          </a>

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

      <div className="mt-12 pt-6 border-t border-border">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Cristina Gómez. All rights reserved. developed by{" "}
          <a
            href="https://varona-portfolio-rho.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:opacity-80 transition-opacity"
          >
            Miguel Varona
          </a>
        </p>
      </div>
    </footer>
  )
}
