import { useEffect, useRef, useState } from 'react'
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight, X } from 'lucide-react'
import {
  categories,
  imageLabel,
  imageSet,
  imageUrl,
  portfolio,
  type Category,
} from '../lib/portfolio'

export function PortfolioGallery() {
  const [category, setCategory] = useState<Category>('All Spaces')
  const [expanded, setExpanded] = useState(false)
  const [selected, setSelected] = useState<string | null>(null)
  const dialog = useRef<HTMLDialogElement>(null)
  const trigger = useRef<HTMLButtonElement | null>(null)
  const filtered = portfolio.filter(
    (image) =>
      category === 'All Spaces' ||
      image.categories.some((tag) => tag === category),
  )
  const visible = expanded ? filtered : filtered.slice(0, 6)
  const currentIndex = filtered.findIndex((image) => image.id === selected)
  const current = filtered[currentIndex]

  useEffect(() => {
    if (selected) {
      dialog.current?.showModal()
      const previous = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = previous
      }
    }
    if (dialog.current?.open) dialog.current.close()
  }, [selected])

  function close() {
    setSelected(null)
    trigger.current?.focus()
  }

  function move(direction: number) {
    setSelected(
      filtered[(currentIndex + direction + filtered.length) % filtered.length]
        .id,
    )
  }

  return (
    <>
      <div
        className="gallery-filters"
        role="group"
        aria-label="Filter design inspiration by space"
      >
        {categories.map((item) => (
          <button
            key={item}
            type="button"
            aria-pressed={category === item}
            className={
              category === item ? 'filter-button selected' : 'filter-button'
            }
            onClick={() => {
              setCategory(item)
              setExpanded(false)
            }}
          >
            {item}
          </button>
        ))}
      </div>
      <p className="sr-only" aria-live="polite">
        {filtered.length}{' '}
        {category === 'All Spaces' ? 'design inspiration' : category} images
        available.
      </p>
      <div className="gallery-grid">
        {visible.map((item, index) => (
          <button
            className="gallery-card"
            key={item.id}
            type="button"
            onClick={(event) => {
              trigger.current = event.currentTarget
              setSelected(item.id)
            }}
            aria-label={`View ${item.title} — ${imageLabel(item)}`}
          >
            <div className="gallery-image-wrap">
              <img
                src={imageUrl(item.image, 800)}
                srcSet={imageSet(item.image)}
                sizes="(max-width: 480px) calc(100vw - 48px), (max-width: 760px) calc((100vw - 66px) / 2), (max-width: 1000px) calc((100vw - 112px) / 2), (max-width: 1199px) calc((100vw - 136px) / 3), (max-width: 1408px) calc((100vw - 176px) / 3), 411px"
                alt={item.alt}
                width="900"
                height="720"
                loading="lazy"
                decoding="async"
              />
              <span className="image-label">{imageLabel(item)}</span>
              <span className="gallery-open" aria-hidden="true">
                <ArrowUpRight size={23} strokeWidth={1.3} />
              </span>
            </div>
            <div className="gallery-caption">
              <div>
                <p>
                  {category === 'All Spaces'
                    ? (item.categories.find((tag) => tag !== 'Residential') ??
                      item.categories[0])
                    : category}
                </p>
                <h3>{item.title}</h3>
              </div>
              <span className="gallery-number">
                {String(index + 1).padStart(2, '0')}
              </span>
            </div>
          </button>
        ))}
      </div>
      <div className="gallery-bottom">
        <p>
          Curated inspiration. A starting point for your own space.
          <br />
          <span>These photographs are not completed AUREVIA projects.</span>
        </p>
        {filtered.length > 6 && (
          <button
            type="button"
            className="text-link"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? 'Show less' : 'View All Inspiration'}
            <ArrowDown
              size={16}
              className={expanded ? 'rotate-arrow' : ''}
              aria-hidden="true"
            />
          </button>
        )}
      </div>
      <dialog
        ref={dialog}
        className="image-dialog"
        onCancel={close}
        onClose={close}
        onClick={(event) => {
          if (event.target === event.currentTarget) close()
        }}
        onKeyDown={(event) => {
          if (event.key === 'ArrowRight') {
            event.preventDefault()
            move(1)
          } else if (event.key === 'ArrowLeft') {
            event.preventDefault()
            move(-1)
          }
        }}
        aria-labelledby="image-dialog-title"
      >
        {current && (
          <div className="dialog-content">
            <button
              type="button"
              className="dialog-close icon-button"
              aria-label="Close image"
              onClick={close}
              autoFocus
            >
              <X size={23} />
            </button>
            <img
              className="dialog-image"
              src={imageUrl(current.image, 1800)}
              alt={current.alt}
              width="1800"
              height="1200"
            />
            <div className="dialog-caption">
              <div>
                <p className="eyebrow">{imageLabel(current)}</p>
                <h3 id="image-dialog-title">{current.title}</h3>
                <p>{current.description}</p>
              </div>
              <div className="dialog-controls">
                <button
                  type="button"
                  className="icon-button"
                  onClick={() => move(-1)}
                  aria-label="Previous image"
                >
                  <ArrowLeft size={20} />
                </button>
                <span>
                  {currentIndex + 1} / {filtered.length}
                </span>
                <button
                  type="button"
                  className="icon-button"
                  onClick={() => move(1)}
                  aria-label="Next image"
                >
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
            {current.kind === 'inspiration' && (
              <p className="dialog-disclaimer">
                Design inspiration only. Not a completed AUREVIA INTERIORS
                project.
              </p>
            )}
          </div>
        )}
      </dialog>
    </>
  )
}
