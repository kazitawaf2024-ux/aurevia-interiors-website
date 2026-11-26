import { ArrowUp, ArrowUpRight } from 'lucide-react'

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <a
          href="/#home"
          aria-label="AUREVIA INTERIORS home"
          className="footer-brand"
        >
          <img
            src="/img/aurevia-logo.png"
            alt="AUREVIA INTERIORS — Design Beyond Imagination"
            width="1100"
            height="1047"
            loading="lazy"
          />
        </a>
        <div className="footer-note">
          <p className="eyebrow">OUR PHILOSOPHY</p>
          <p className="footer-philosophy">Simple is the Luxury.</p>
          <p>Thoughtful spaces. Timeless details.</p>
        </div>
        <div className="footer-connect">
          <p className="eyebrow">STAY CONNECTED</p>
          <a href="mailto:Aureviainterior@gmail.com">
            Aureviainterior@gmail.com{' '}
            <ArrowUpRight size={14} aria-hidden="true" />
          </a>
          <a
            href="https://wa.me/8801789851118"
            target="_blank"
            rel="noopener noreferrer"
          >
            Connect on WhatsApp <ArrowUpRight size={14} aria-hidden="true" />
          </a>
          <p className="social-names">
            Facebook & Instagram
            <br />
            <span>AUREVIA INTERIORS</span>
          </p>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>
          © {new Date().getFullYear()} AUREVIA INTERIORS. All rights reserved.
        </p>
        <span>Dhaka, Bangladesh</span>
        <a href="/#home">
          Back to top <ArrowUp size={14} aria-hidden="true" />
        </a>
      </div>
    </footer>
  )
}
