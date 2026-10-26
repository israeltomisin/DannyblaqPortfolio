import { useState } from 'react'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Analytics', href: '#work' },
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <header className="site-header">
      <nav aria-label="Main navigation" className="nav-shell">
        <a aria-label="Daniel Oluwasegun, home" className="brand" href="#home" onClick={closeMenu}>
          <span aria-hidden="true" className="brand-mark">DO</span>
          <span>Daniel Oluwasegun</span>
        </a>

        <button
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          type="button"
        >
          {menuOpen ? '×' : '☰'}
        </button>

        <ul className={`nav-links${menuOpen ? ' is-open' : ''}`}>
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={closeMenu}>{link.label}</a>
            </li>
          ))}
          <li>
            <a className="nav-contact" href="#contact" onClick={closeMenu}>Let&apos;s talk</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
