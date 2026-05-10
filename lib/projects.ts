export interface Project {
  id: string
  slug: string
  title: string
  client: string
  categories: string[]
  thumbnail: string
  thumbnail2: string
  thumbnail3: string
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
    title: '“All in one place”, BITVAVO',
    client: 'BITVAVO',
    categories: ['Commercial'],
    thumbnail: '/Bitvavo frame.png',
    thumbnail2: '/bitvavo2.jpeg',
    thumbnail3: '/Bitvavo frame 2.png',
    videoUrl: 'https://www.youtube.com/embed/crLQsjW0sUo',
    year: '',
    description: 'La campaña anual de Spotify celebrando los momentos musicales más importantes del año.',
    credits: [
      { role: 'Cliente', value: 'Bitvavo' },
      { role: 'Agencia', value: 'Melic' },
      { role: 'Productora', value: 'Sistema del Solar' },
      { role: 'Director', value: 'Jara Moravec' },
      { role: 'Rol', value: 'Postproduction Coordinator' }
    ]
  },
  {
    id: '2',
    slug: 'Magalie',
    title: 'Magalie',
    client: 'Magalie',
    categories: ['Commercial'],
    thumbnail: '/Magalie.png',
    thumbnail2: '/Magalie2.png',
    thumbnail3: '/Magalie 3.png',
    videoUrl: 'https://www.youtube.com/embed/PEnYvNwR8s0',
    year: '',
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
    title: 'Annie-atkins',
    client: 'annie-atkins',
    categories: ['Tutorial', 'E-learning'],
    thumbnail: '/loveletters.jpg',
    thumbnail2: '/annie-atkins2.jpg',
    thumbnail3: '/annie3.jpg',
    videoUrl: 'https://www.youtube.com/embed/f36MEz8wbsw',
    year: '',
    description: 'Serie documental capturada enteramente con iPhone.',
    credits: [
      { role: 'Cliente', value: 'Apple' },
      { role: 'Productora', value: 'TBWA\\Media Arts Lab' },
      { role: 'Rol', value: 'Editora Principal' }
    ]
  },
  {
    id: '4',
    slug: 'mother-of-dragons',
    title: 'Mother of Dragons',
    client: 'Domestika',
    categories: ['Trailer', 'E-learning'],
    thumbnail: '/3002-original.avif',
    thumbnail2: '/1080x1080_portrait-D-original.avif',
    thumbnail3: '/SM_18_final-original.avif',
    videoUrl: 'https://www.youtube.com/embed/JtgkqWJqk3E',
    year: '',
    description: 'Campaña navideña de Coca-Cola.',
    credits: [
      { role: 'Cliente', value: 'Coca-Cola' },
      { role: 'Agencia', value: 'Wunderman Thompson' },
      { role: 'Rol', value: 'Editora' }
    ]
  },
  {
    id: '5',
    slug: 'anatomia-de-un-crimen',
    title: 'Anatomia de un Crimen',
    client: 'Mandarina',
    categories: ['Documentary', 'Film'],
    thumbnail: '/anatomia.png',
    thumbnail2: '/anatomia2.png',
    thumbnail3: '/anatomia3.png',
    videoUrl: 'https://www.youtube.com/embed/9RJYbC2Gw74',
    year: '',
    description: 'Film para el lanzamiento del nuevo modelo eléctrico de Mercedes.',
    credits: [
      { role: 'Cliente', value: 'Mandarina' },
      { role: 'Productora', value: 'Mandarina' },
      { role: 'Director', value: 'Tom Hooper' },
      { role: 'Rol', value: 'Editora Principal' }
    ]
  },
  {
    id: '6',
    slug: 'cha-cha-cha',
    title: 'Cha Cha Cha',
    client: 'Made in Barcelona',
    categories: ['Videoclip', 'Music',],
    thumbnail: '/cha cha cha.png',
    thumbnail2: '/cha 2.png',
    thumbnail3: '/cha 3.png',
    videoUrl: 'https://www.youtube.com/embed/pGtq7VyoSko',
    year: '',
    description: 'Campaña global de Adidas celebrando los atletas.',
    credits: [
      { role: 'Cliente', value: 'Adidas' },
      { role: 'Agencia', value: '72andSunny' },
      { role: 'Rol', value: 'Editora' },
      { role: 'Director', value: 'Pierre Minetti' }
    ]
  },


]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(project => project.slug === slug)
}
