import { useState } from 'react'
import { useTheme } from '../context/ThemeContext'
import type { NavItem } from '../types'
import './Navbar.css'

interface NavbarProps {
  logo: string
  items: NavItem[]
}

export function Navbar({ logo, items }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  return (
    <header className="navbar">
      <div className="navbar__bar">
        <a className="navbar__logo" href="#inicio">{logo}</a>

        <nav className={`navbar__links ${isOpen ? 'is-open' : ''}`} aria-label="Principal">
          <ul>
            {items.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={() => setIsOpen(false)}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="navbar__actions">
          <button type="button" onClick={toggleTheme} aria-label="Cambiar tema">
            {theme === 'light' ? 'Oscuro' : 'Claro'}
          </button>
          <button
            type="button"
            className="navbar__menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? 'Cerrar' : 'Menú'}
          </button>
        </div>
      </div>
    </header>
  )
}
