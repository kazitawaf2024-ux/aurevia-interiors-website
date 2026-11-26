import { createFileRoute } from '@tanstack/react-router'
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Globe,
} from 'lucide-react'
import { ContactForm } from '../components/ContactForm'
import { PortfolioGallery } from '../components/PortfolioGallery'
import { imageSet, imageUrl } from '../lib/portfolio'
import { services } from '../lib/services'
import { site, pageMeta } from '../lib/site'

export const Route = createFileRoute('/')({
  component: PortfolioHome,
  head: () => pageMeta('Design Beyond Imagination', site.description),
})

const process = [
  {
    number: '01',
    title: 'Discover',
    description:
      'We listen to your ideas, understand your space and explore what matters to you.',
  },
  {
    number: '02',
    title: 'Design',
    description:
      'Your vision takes shape through considered layouts, materials and details.',
  },
  {
    number: '03',
    title: 'Create',
    description:
      'The design comes to life with careful coordination and attention to detail.',
  },
  {
    number: '04',
    title: 'Reveal',
    description:
      'The finishing touches bring everything together. Your space, beautifully realised.',
  },
]

function PortfolioHome() {
  return (
    <>
      <section id="home" className="hero" aria-labelledby="hero-title">
        <img
          className="hero-image"
          src={imageUrl('/img/living-room.jpg', 2200)}
          srcSet={imageSet('/img/living-room.jpg')}
          sizes="100vw"
          alt="Sunlit interior with warm neutral seating, natural textures and sculptural furniture — Design Inspiration"
          width="2200"
          height="1467"
          fetchPriority="high"
        />
        <div className="hero-shade" />
        <div className="container hero-content">
          <p className="eyebrow hero-eyebrow">
            <span />
            THOUGHTFULLY DESIGNED. BEAUTIFULLY LIVED.
          </p>
          <h1 id="hero-title">
            Design Beyond
            <br />
            <em>Imagination.</em>
          </h1>
          <p className="hero-description">
            Thoughtful interiors. Timeless details.
            <br />
            Spaces that feel like you.
          </p>
          <div className="hero-actions">
            <a href="#portfolio" className="button button-gold">
              Explore Inspiration <ArrowUpRight size={17} aria-hidden="true" />
            </a>
            <a href="#contact" className="button button-glass">
              Let’s Create Your Space{' '}
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="hero-bottom container">
          <a href="#about" className="scroll-cue">
            <span className="scroll-circle">
              <ArrowDown size={17} strokeWidth={1.2} aria-hidden="true" />
            </span>
            SCROLL TO DISCOVER
          </a>
          <p>
            <span className="small-line" /> DESIGN INSPIRATION{' '}
            <span className="hero-photo-category">/ RESIDENTIAL</span>
          </p>
        </div>
      </section>

      <div className="philosophy-strip">
        <span className="philosophy-line" />
        <p>SIMPLE IS THE LUXURY.</p>
        <span className="philosophy-line" />
      </div>

      <section
        id="about"
        className="section section-about"
        aria-labelledby="about-title"
      >
        <div className="container about-grid">
          <div className="about-image-composition">
            <div className="about-image-frame">
              <img
                src={imageUrl('/img/timeless-living.jpg', 1000)}
                srcSet={imageSet('/img/timeless-living.jpg')}
                sizes="(max-width: 760px) calc(100vw - 60px), 42vw"
                alt="Airy living room with arched windows, natural timber beams and soft cream seating — Design Inspiration"
                width="1000"
                height="1333"
                loading="lazy"
                decoding="async"
              />
              <span className="image-label">Design Inspiration</span>
            </div>
            <span className="about-image-note">
              A QUIETER EXPRESSION OF LUXURY
            </span>
            <div className="about-image-corner" />
          </div>
          <div className="about-copy">
            <p className="eyebrow section-eyebrow">
              <span>01</span> ABOUT AUREVIA
            </p>
            <h2 id="about-title">
              Quiet elegance.
              <br />
              <em>Lasting impressions.</em>
            </h2>
            <p>
              At AUREVIA INTERIORS, we believe the most beautiful spaces are the
              ones that feel naturally yours.
            </p>
            <p>
              Based in Dhaka, we bring a thoughtful approach to residential and
              commercial interiors—balancing clean lines, considered materials
              and everyday function.
            </p>
            <div className="about-values">
              <span>Thoughtful design</span>
              <span>Timeless character</span>
              <span>Everyday comfort</span>
            </div>
            <a href="#services" className="text-link">
              Discover Our Services{' '}
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <section
        id="services"
        className="section section-services"
        aria-labelledby="services-title"
      >
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow section-eyebrow">
                <span>02</span> WHAT WE DO
              </p>
              <h2 id="services-title">
                Your space.
                <br />
                <em>Our considered touch.</em>
              </h2>
            </div>
            <p className="section-intro">
              From a single room to a complete interior.
              <br />
              Ten ways to bring your vision to life.
            </p>
          </div>
          <div className="services-grid">
            {services.map((service, index) => (
              <details className="service-item" key={service.name}>
                <summary>
                  <span className="service-number">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3>{service.name}</h3>
                  <span className="service-plus" aria-hidden="true">
                    +
                  </span>
                </summary>
                <div className="service-detail">
                  <p>{service.detail}</p>
                  <a className="text-link" href="#contact">
                    Discuss Your Space{' '}
                    <ArrowUpRight size={14} aria-hidden="true" />
                  </a>
                </div>
              </details>
            ))}
          </div>
          <div className="services-footnote">
            <p>Every space starts with a conversation.</p>
            <a
              href="https://wa.me/8801789851118"
              target="_blank"
              rel="noopener noreferrer"
              className="text-link"
            >
              Talk to Us <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <section
        id="portfolio"
        className="section section-portfolio"
        aria-labelledby="portfolio-title"
      >
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow section-eyebrow">
                <span>03</span> A WORLD OF POSSIBILITIES
              </p>
              <h2 id="portfolio-title">
                Spaces that <em>inspire.</em>
              </h2>
            </div>
            <div className="portfolio-intro">
              <span className="outline-label">DESIGN INSPIRATION</span>
              <p>
                A curated collection of interiors we admire.
                <br />
                Explore the possibilities for your own space.
              </p>
            </div>
          </div>
          <PortfolioGallery />
        </div>
      </section>

      <section
        id="process"
        className="section section-process"
        aria-labelledby="process-title"
      >
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow section-eyebrow">
                <span>04</span> OUR PROCESS
              </p>
              <h2 id="process-title">
                From your first idea
                <br />
                <em>to your favourite place.</em>
              </h2>
            </div>
            <p className="section-intro">
              A clear path. A considered approach.
              <br />
              Beautiful possibilities, one step at a time.
            </p>
          </div>
          <div className="process-grid">
            {process.map((step, index) => (
              <article className="process-step" key={step.number}>
                <div className="process-number">
                  <span>{step.number}</span>
                  {index < process.length - 1 && (
                    <ArrowRight size={20} strokeWidth={1} aria-hidden="true" />
                  )}
                </div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="vision-banner" aria-labelledby="vision-title">
        <img
          src={imageUrl('/img/quiet-living.jpg', 1800)}
          srcSet={imageSet('/img/quiet-living.jpg')}
          sizes="100vw"
          alt="Contemporary living space with soft seating and warm timber details — Design Inspiration"
          width="1800"
          height="1200"
          loading="lazy"
          decoding="async"
        />
        <div className="vision-shade" />
        <div className="container vision-content">
          <div>
            <p className="eyebrow">YOUR VISION. BEAUTIFULLY REALISED.</p>
            <h2 id="vision-title">
              Let’s make room
              <br />
              for <em>something beautiful.</em>
            </h2>
          </div>
          <a href="#contact" className="button button-gold">
            Start a Conversation <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </div>
        <span className="banner-photo-label">Design Inspiration</span>
      </section>

      <section
        id="contact"
        className="section section-contact"
        aria-labelledby="contact-title"
      >
        <div className="container contact-grid">
          <div className="contact-copy">
            <p className="eyebrow section-eyebrow">
              <span>05</span> GET IN TOUCH
            </p>
            <h2 id="contact-title">
              Every great space
              <br />
              starts with <em>you.</em>
            </h2>
            <p className="contact-intro">
              Have a space in mind? We’d love to hear about it.
            </p>
            <div className="contact-details">
              <div className="contact-detail address-detail">
                <MapPin size={19} strokeWidth={1.4} aria-hidden="true" />
                <div>
                  <p className="contact-label">VISIT OUR OFFICE</p>
                  <address>
                    3, D.I.T Avenue, Hoque Chamber,
                    <br />
                    2nd Floor, Motijheel, Dhaka-1000,
                    <br />
                    Bangladesh.
                  </address>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=3%20D.I.T%20Avenue%20Hoque%20Chamber%20Motijheel%20Dhaka%201000%20Bangladesh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-link small-text-link"
                  >
                    Get Directions <ArrowUpRight size={13} aria-hidden="true" />
                  </a>
                </div>
              </div>
              <div className="contact-pair">
                <div className="contact-detail">
                  <Phone size={18} strokeWidth={1.4} aria-hidden="true" />
                  <div>
                    <p className="contact-label">GIVE US A CALL</p>
                    <a href="tel:+8801986894752">01986894752</a>
                  </div>
                </div>
                <div className="contact-detail">
                  <MessageCircle
                    size={18}
                    strokeWidth={1.4}
                    aria-hidden="true"
                  />
                  <div>
                    <p className="contact-label">WHATSAPP</p>
                    <a
                      href="https://wa.me/8801789851118"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      01789851118 <ArrowUpRight size={12} aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="contact-detail">
                <Mail size={18} strokeWidth={1.4} aria-hidden="true" />
                <div>
                  <p className="contact-label">WRITE TO US</p>
                  <a href="mailto:Aureviainterior@gmail.com">
                    Aureviainterior@gmail.com
                  </a>
                </div>
              </div>
              <div className="contact-detail">
                <Globe size={18} strokeWidth={1.4} aria-hidden="true" />
                <div>
                  <p className="contact-label">OUR WEBSITE</p>
                  <a
                    href="https://aureviainteriorsbd.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Aureviainteriorsbd.com{' '}
                    <ArrowUpRight size={12} aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
      <a
        href="https://wa.me/8801789851118"
        className="floating-whatsapp"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with AUREVIA INTERIORS on WhatsApp"
      >
        <MessageCircle size={23} strokeWidth={1.5} />
        <span>Let’s Talk</span>
      </a>
    </>
  )
}
