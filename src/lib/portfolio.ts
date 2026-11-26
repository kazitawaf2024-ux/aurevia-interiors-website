export const categories = [
  'All Spaces',
  'Residential',
  'Living Room',
  'Bedroom',
  'Kitchen',
  'Dining',
  'Commercial',
  'Other Interiors',
] as const

export type Category = (typeof categories)[number]

export type PortfolioImage = {
  id: string
  title: string
  image: string
  alt: string
  categories: Exclude<Category, 'All Spaces'>[]
  kind: 'inspiration' | 'project'
  description: string
  source: string
}

// Replace individual records with approved original projects. The gallery layout
// and filters do not depend on the image source or the inspiration/project label.
export const portfolio: PortfolioImage[] = [
  {
    id: 'considered-living',
    title: 'The art of considered living',
    image: '/img/quiet-living.jpg',
    alt: 'Light-filled living room with a pale sectional, timber wall and garden views',
    categories: ['Residential', 'Living Room'],
    kind: 'inspiration',
    description:
      'Natural light, warm timber and a beautifully balanced open-plan space.',
    source: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c',
  },
  {
    id: 'restful-retreat',
    title: 'A quieter kind of retreat',
    image: '/img/bedroom.jpg',
    alt: 'Elegant neutral bedroom with an upholstered bed, charcoal wall and brass lighting',
    categories: ['Residential', 'Bedroom'],
    kind: 'inspiration',
    description:
      'Soft textures and muted tones bring a sense of calm to the bedroom.',
    source: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0',
  },
  {
    id: 'everyday-rituals',
    title: 'Made for everyday rituals',
    image: '/img/kitchen.jpg',
    alt: 'White kitchen with a stone island, warm wood stools and stainless steel range hood',
    categories: ['Residential', 'Kitchen'],
    kind: 'inspiration',
    description:
      'Clean cabinetry, natural surfaces and thoughtful everyday function.',
    source: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1',
  },
  {
    id: 'gather-beautifully',
    title: 'A place to come together',
    image: '/img/dining.jpg',
    alt: 'Bright dining space with emerald upholstered chairs, sculptural lighting and natural greenery',
    categories: ['Residential', 'Dining'],
    kind: 'inspiration',
    description:
      'A welcoming dining space shaped by light, texture and simple details.',
    source: 'https://images.unsplash.com/photo-1617806118233-18e1de247200',
  },
  {
    id: 'memorable-spaces',
    title: 'An atmosphere to remember',
    image: '/img/commercial.jpg',
    alt: 'Refined restaurant interior with dark seating, warm wood and tall windows',
    categories: ['Commercial'],
    kind: 'inspiration',
    description:
      'Rich materials and considered lighting create a distinctive dining atmosphere.',
    source: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4',
  },
  {
    id: 'quiet-details',
    title: 'Beauty in the quiet details',
    image: '/img/other-interiors.jpg',
    alt: 'Minimal grey bathroom with a freestanding bath and soft natural light',
    categories: ['Residential', 'Other Interiors'],
    kind: 'inspiration',
    description:
      'A restrained palette and architectural lines make room for quiet moments.',
    source: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea',
  },
  {
    id: 'warm-minimalism',
    title: 'Warmth in simplicity',
    image: '/img/lounge.jpg',
    alt: 'Soft white living room with a low sofa, timber furniture and understated wall details',
    categories: ['Residential', 'Living Room'],
    kind: 'inspiration',
    description:
      'A soft, layered take on minimal living, with natural finishes throughout.',
    source: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace',
  },
  {
    id: 'architectural-balance',
    title: 'Space, light and balance',
    image: '/img/interior-detail.jpg',
    alt: 'Architectural open-plan dining space with a dark table, timber screen and sculptural staircase',
    categories: ['Residential', 'Dining', 'Other Interiors'],
    kind: 'inspiration',
    description:
      'Strong architectural lines softened by daylight and natural materials.',
    source: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d',
  },
]

export function imageUrl(path: string, width: number) {
  return `/.netlify/images?url=${encodeURIComponent(path)}&w=${width}&fm=webp&q=82`
}

export function imageSet(path: string) {
  return [480, 800, 1200, 1800, 2200]
    .map((width) => `${imageUrl(path, width)} ${width}w`)
    .join(', ')
}

export function imageLabel(image: PortfolioImage) {
  return image.kind === 'inspiration' ? 'Design Inspiration' : 'AUREVIA Project'
}
