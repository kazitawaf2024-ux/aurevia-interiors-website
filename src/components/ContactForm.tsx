import { useRef, useState, type FormEvent } from 'react'
import { ArrowUpRight, Check, MessageCircle } from 'lucide-react'
import { services } from '../lib/services'

export function ContactForm() {
  const [status, setStatus] = useState<
    'idle' | 'pending' | 'error' | 'success'
  >('idle')
  const submitting = useRef(false)

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (submitting.current || status === 'success') return
    const body = new URLSearchParams()
    new FormData(event.currentTarget).forEach((value, key) =>
      body.append(key, String(value)),
    )
    submitting.current = true
    setStatus('pending')
    try {
      const response = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
        signal: AbortSignal.timeout(15000),
      })
      if (!response.ok || /\bdata-netlify\s*=/i.test(await response.text()))
        throw new Error('Inquiry was not accepted')
      setStatus('success')
    } catch {
      setStatus('error')
    } finally {
      submitting.current = false
    }
  }

  if (status === 'success') {
    return (
      <div className="form-success" role="status">
        <span className="success-mark">
          <Check size={28} strokeWidth={1.5} aria-hidden="true" />
        </span>
        <p className="eyebrow">YOUR NEXT CHAPTER</p>
        <h3>It starts with a conversation.</h3>
        <p>Thank you. Your inquiry has been received by AUREVIA INTERIORS.</p>
        <button
          type="button"
          className="text-link"
          onClick={() => setStatus('idle')}
        >
          Send another inquiry <ArrowUpRight size={16} aria-hidden="true" />
        </button>
      </div>
    )
  }

  return (
    <form
      name="aurevia-inquiry"
      method="POST"
      action="/__forms.html"
      data-netlify="true"
      netlify-honeypot="bot-field"
      aria-busy={status === 'pending'}
      onSubmit={submit}
      className="inquiry-form"
      onChange={() => {
        if (status === 'error') setStatus('idle')
      }}
    >
      <input type="hidden" name="form-name" value="aurevia-inquiry" />
      <input
        type="hidden"
        name="subject"
        value="New AUREVIA INTERIORS inquiry"
      />
      <p hidden>
        <label>
          Leave this empty
          <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>
      <div className="form-heading">
        <h3>Tell us about your space.</h3>
        <p>A beautiful space begins with your vision.</p>
      </div>
      <fieldset disabled={status === 'pending'}>
        <legend className="sr-only">
          Your contact details and project inquiry
        </legend>
        <div className="form-grid">
          <div className="form-field">
            <label htmlFor="name">
              Your name <span>*</span>
            </label>
            <input
              id="name"
              name="name"
              autoComplete="name"
              required
              maxLength={100}
              placeholder="Full name"
            />
          </div>
          <div className="form-field">
            <label htmlFor="email">
              Email address <span>*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              maxLength={254}
              placeholder="you@example.com"
            />
          </div>
          <div className="form-field">
            <label htmlFor="phone">
              Phone number <span className="optional">(optional)</span>
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              maxLength={40}
              placeholder="Your contact number"
            />
          </div>
          <div className="form-field">
            <label htmlFor="service">
              Interested in <span className="optional">(optional)</span>
            </label>
            <select id="service" name="service" defaultValue="">
              <option value="">Select a service</option>
              {services.map((service) => (
                <option key={service.name}>{service.name}</option>
              ))}
            </select>
          </div>
          <div className="form-field full-width">
            <label htmlFor="message">
              Your vision <span>*</span>
            </label>
            <textarea
              id="message"
              name="message"
              required
              maxLength={5000}
              rows={4}
              placeholder="Tell us a little about your space, ideas and requirements…"
            />
          </div>
        </div>
        <button type="submit" className="button button-gold form-submit">
          {status === 'pending' ? 'Sending Your Inquiry…' : 'Send Your Inquiry'}
          <ArrowUpRight size={17} aria-hidden="true" />
        </button>
      </fieldset>
      <p className="form-note">
        Fields marked * are required. Your details are used to respond to your
        inquiry.
      </p>
      <p className="sr-only" role="status">
        {status === 'pending' ? 'Sending your inquiry. Please wait.' : ''}
      </p>
      {status === 'error' && (
        <div className="form-error" role="alert">
          <p>
            Your inquiry could not be confirmed. Your details are still here;
            please try again.
          </p>
          <a
            href="https://wa.me/8801789851118"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={16} aria-hidden="true" />
            You can also contact us on WhatsApp.
          </a>
        </div>
      )}
    </form>
  )
}
