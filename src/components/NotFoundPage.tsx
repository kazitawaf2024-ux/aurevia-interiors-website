import { ArrowUpRight } from 'lucide-react'

export function NotFoundPage() {
  return (
    <div className="container error-page">
      <p className="eyebrow">AUREVIA INTERIORS · 404</p>
      <h1>A little off course.</h1>
      <p>The page you’re looking for could not be found.</p>
      <a href="/" className="button button-gold">
        Return Home <ArrowUpRight size={16} aria-hidden="true" />
      </a>
    </div>
  )
}
