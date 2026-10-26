import { useState } from 'react'

const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY

function Contact() {
  const [status, setStatus] = useState({ type: 'idle', message: '' })

  async function handleSubmit(event) {
    event.preventDefault()

    if (!accessKey) {
      setStatus({
        type: 'error',
        message: 'The contact form is not configured yet. Please email me directly instead.',
      })
      return
    }

    const form = event.currentTarget
    const formData = new FormData(form)
    formData.append('access_key', accessKey)
    setStatus({ type: 'sending', message: 'Sending your message…' })

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      })
      const result = await response.json()

      if (!response.ok || !result.success) {
        setStatus({
          type: 'error',
          message: result.message || 'Your message could not be sent. Please try again.',
        })
        return
      }

      form.reset()
      setStatus({ type: 'success', message: 'Thanks for reaching out. Your message has been sent.' })
    } catch {
      setStatus({
        type: 'error',
        message: 'Could not connect to the contact service. Check your connection and try again.',
      })
    }
  }

  return (
    <section aria-labelledby="contact-title" className="page-shell contact-section" id="contact">
      <div className="contact-copy">
        <p className="section-kicker">Get in touch</p>
        <h2 id="contact-title">Let&apos;s make your data more useful.</h2>
        <p>
          Have a question, an idea, or a project in mind? I&apos;d be glad to hear what
          you&apos;re working on and explore how clear analysis can help.
        </p>
      </div>

      <div className="contact-panel">
        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="contact-name">Your name</label>
          <input
            autoComplete="name"
            id="contact-name"
            name="name"
            placeholder="e.g. Alex Morgan"
            required
          />

          <label htmlFor="contact-email">Email address</label>
          <input
            autoComplete="email"
            id="contact-email"
            name="email"
            placeholder="you@example.com"
            required
            type="email"
          />

          <label htmlFor="contact-subject">Subject</label>
          <input
            id="contact-subject"
            name="subject"
            placeholder="What would you like to discuss?"
            required
          />

          <label htmlFor="contact-message">Message</label>
          <textarea
            id="contact-message"
            name="message"
            placeholder="Tell me a little about your project or question..."
            required
            rows={5}
          />

          <button
            className="button button-dark"
            disabled={status.type === 'sending'}
            type="submit"
          >
            {status.type === 'sending' ? 'Sending…' : 'Send message'}
            {status.type !== 'sending' && <span aria-hidden="true" className="button-arrow">↗</span>}
          </button>

          <p aria-live="polite" className={`form-note form-status ${status.type}`} role="status">
            {status.message || 'Your message will be sent securely through Web3Forms.'}
          </p>
        </form>
      </div>
    </section>
  )
}

export default Contact
