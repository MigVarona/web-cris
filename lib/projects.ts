export interface Project {
  id: string
  slug: string
  title: string
  client: string
  categories: string[]
  thumbnail: string
  videoUrl?: string
  year: string
  description?: string
  credits?: {
    role: string
    value: string
  }[]
}

export const projects: Project[] = [
  {
    id: '1',
    slug: 'Bitvavo',
    title: '“Dear Traders”, BITVAVO  - 2026',
    client: 'BITVAVO',
    categories: ['Campaign', 'Film'],
    thumbnail: '/Bitvavo frame.png',
    videoUrl: 'https://www.youtube.com/embed/crLQsjW0sUo',
    year: '2025',
    description: 'La campaña anual de Spotify celebrando los momentos musicales más importantes del año.',
    credits: [
      { role: 'Cliente', value: 'Bitvavo' },
      { role: 'Agencia', value: 'Who Wot Why' },
      { role: 'Productora', value: 'Iconoclast' },
      { role: 'Director', value: 'Rubén Martín' },
      { role: 'Rol', value: 'Editora Principal' }
    ]
  },
  {
    id: '2',
    slug: 'Magalie',
    title: 'Magalie',
    client: 'Magalie',
    categories: ['Campaign', 'Film', 'Social'],
    thumbnail: '/Magalie.png',
    videoUrl: 'https://www.youtube.com/embed/PEnYvNwR8s0',
    year: '2024',
    description: 'Campaña global para Nike celebrando el espíritu del deporte.',
    credits: [
      { role: 'Cliente', value: 'Nike' },
      { role: 'Agencia', value: 'Wieden+Kennedy' },
      { role: 'Director', value: 'Oscar Hudson' },
      { role: 'Rol', value: 'Editora' }
    ]
  },
  {
    id: '3',
    slug: 'annie-atkins',
    title: 'annie-atkins',
    client: 'annie-atkins',
    categories: ['Film', 'Documentary'],
    thumbnail: '/loveletters.jpg',
    videoUrl: 'https://www.youtube.com/embed/f36MEz8wbsw',
    year: '2023',
    description: 'Serie documental capturada enteramente con iPhone.',
    credits: [
      { role: 'Cliente', value: 'Apple' },
      { role: 'Productora', value: 'TBWA\\Media Arts Lab' },
      { role: 'Rol', value: 'Editora Principal' }
    ]
  },
  {
    id: '4',
    slug: 'coca-cola-real-magic',
    title: 'Real Magic',
    client: 'Coca-Cola',
    categories: ['Campaign', 'Film'],
    thumbnail: 'https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=800&h=600&fit=crop',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    year: '2023',
    description: 'Campaña navideña de Coca-Cola.',
    credits: [
      { role: 'Cliente', value: 'Coca-Cola' },
      { role: 'Agencia', value: 'Wunderman Thompson' },
      { role: 'Rol', value: 'Editora' }
    ]
  },
  {
    id: '5',
    slug: 'mercedes-future',
    title: 'The Future',
    client: 'Mercedes-Benz',
    categories: ['Film', 'Commercial'],
    thumbnail: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&h=600&fit=crop',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    year: '2023',
    description: 'Film para el lanzamiento del nuevo modelo eléctrico de Mercedes.',
    credits: [
      { role: 'Cliente', value: 'Mercedes-Benz' },
      { role: 'Productora', value: 'Smuggler' },
      { role: 'Director', value: 'Tom Hooper' },
      { role: 'Rol', value: 'Editora Principal' }
    ]
  },
  {
    id: '6',
    slug: 'adidas-impossible-nothing',
    title: 'Impossible Is Nothing',
    client: 'Adidas',
    categories: ['Campaign', 'Film', 'Social'],
    thumbnail: 'https://images.unsplash.com/photo-1556906781-9a412961c28c?w=800&h=600&fit=crop',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    year: '2022',
    description: 'Campaña global de Adidas celebrando los atletas.',
    credits: [
      { role: 'Cliente', value: 'Adidas' },
      { role: 'Agencia', value: '72andSunny' },
      { role: 'Rol', value: 'Editora' }
    ]
  },


]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(project => project.slug === slug)
}
