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
    slug: 'spotify-wrapped-2024',
    title: 'Wrapped 2024',
    client: 'Spotify',
    categories: ['Campaign', 'Film'],
    thumbnail: 'https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=800&h=600&fit=crop',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    year: '2024',
    description: 'La campaña anual de Spotify celebrando los momentos musicales más importantes del año.',
    credits: [
      { role: 'Cliente', value: 'Spotify' },
      { role: 'Agencia', value: 'Who Wot Why' },
      { role: 'Productora', value: 'Iconoclast' },
      { role: 'Director', value: 'Rubén Martín' },
      { role: 'Rol', value: 'Editora Principal' }
    ]
  },
  {
    id: '2',
    slug: 'nike-just-do-it',
    title: 'Just Do It',
    client: 'Nike',
    categories: ['Campaign', 'Film', 'Social'],
    thumbnail: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=600&fit=crop',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
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
    slug: 'apple-shot-on-iphone',
    title: 'Shot on iPhone',
    client: 'Apple',
    categories: ['Film', 'Documentary'],
    thumbnail: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=800&h=600&fit=crop',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
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
  {
    id: '7',
    slug: 'samsung-unfold',
    title: 'Unfold Your World',
    client: 'Samsung',
    categories: ['Film', 'Commercial'],
    thumbnail: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=800&h=600&fit=crop',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    year: '2022',
    description: 'Lanzamiento del Samsung Galaxy Z Fold.',
    credits: [
      { role: 'Cliente', value: 'Samsung' },
      { role: 'Agencia', value: 'Leo Burnett' },
      { role: 'Rol', value: 'Editora Principal' }
    ]
  },
  {
    id: '8',
    slug: 'zara-origins',
    title: 'Origins',
    client: 'Zara',
    categories: ['Fashion', 'Film'],
    thumbnail: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    year: '2022',
    description: 'Documental sobre los orígenes de la marca Zara.',
    credits: [
      { role: 'Cliente', value: 'Zara' },
      { role: 'Director', value: 'Fabien Baron' },
      { role: 'Rol', value: 'Editora' }
    ]
  }
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(project => project.slug === slug)
}
