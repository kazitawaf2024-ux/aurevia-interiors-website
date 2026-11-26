export const site = {
  name: 'AUREVIA INTERIORS',
  role: 'Interior design studio',
  description:
    'AUREVIA INTERIORS — Design Beyond Imagination. Thoughtful residential and commercial interior design in Dhaka, Bangladesh. Simple is the Luxury.',
  summary: 'Thoughtful interiors. Timeless details. Spaces that feel like you.',
}

export function pageMeta(title: string, description: string) {
  const fullTitle = `${title} | ${site.name}`
  return {
    meta: [
      { title: fullTitle },
      { name: 'description', content: description },
      { property: 'og:title', content: fullTitle },
      { property: 'og:description', content: description },
    ],
  }
}
