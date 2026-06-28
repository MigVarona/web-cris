'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { cn } from '@/lib/utils'

const navItems = [
  { href: '/', label: 'Work' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-border/70 bg-background/82 backdrop-blur-xl">
      <div className="flex min-h-24 items-center justify-between gap-6 px-6 py-5 md:px-12">
        <Link href="/" className="group max-w-[230px]">
          <span className="block text-sm font-medium uppercase tracking-[0.22em] text-foreground transition-colors group-hover:text-muted-foreground">
            Cristina Gómez
          </span>
          <span className="mt-1 block text-xs leading-snug tracking-[0.08em] text-muted-foreground">
            Video Editor / Post Production Coordinator
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary navigation">
          {navItems.map((item) => {
            const isActive = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href)

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'relative text-xs font-medium uppercase tracking-[0.2em] transition-colors after:absolute after:-bottom-2 after:left-0 after:h-px after:w-full after:origin-left after:bg-foreground after:transition-transform',
                  isActive
                    ? 'text-foreground after:scale-x-100'
                    : 'text-muted-foreground after:scale-x-0 hover:text-foreground hover:after:scale-x-100'
                )}
                aria-current={isActive ? 'page' : undefined}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        <button 
          className="flex h-11 w-11 items-center justify-center border border-border text-foreground transition-colors hover:border-foreground md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span className={`block h-px bg-foreground transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-px bg-foreground transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-px bg-foreground transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      <nav
        className={cn(
          'overflow-hidden border-t bg-background transition-[max-height,opacity,transform,border-color] duration-300 ease-out md:hidden',
          isMenuOpen
            ? 'max-h-72 translate-y-0 border-border opacity-100'
            : 'pointer-events-none max-h-0 -translate-y-2 border-transparent opacity-0'
        )}
        aria-label="Mobile navigation"
        aria-hidden={!isMenuOpen}
      >
        <div className="flex flex-col px-6 py-5 md:px-12">
          {navItems.map((item) => {
            const isActive = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href)

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'border-b border-border py-4 text-sm font-medium uppercase tracking-[0.2em] transition-colors last:border-b-0',
                  isActive ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
                )}
                onClick={() => setIsMenuOpen(false)}
                aria-current={isActive ? 'page' : undefined}
                tabIndex={isMenuOpen ? undefined : -1}
              >
                {item.label}
              </Link>
            )
          })}
        </div>
      </nav>
    </header>
  )
}
