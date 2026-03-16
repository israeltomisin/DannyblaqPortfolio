import React from 'react'

const contact = () => {
  return (
    <div>
      {/* CONTACT */}
      <section id="contact" className="contact">
        <h2>Get In Touch</h2>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Email" />
          <textarea rows={5} placeholder="Message" />
          <button type="submit" className="btn primary-btn">Send Message</button>
        </form>
      </section>
    </div>
  )
}

export default contact
