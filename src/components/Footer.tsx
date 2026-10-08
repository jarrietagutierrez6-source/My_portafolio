import { profile, socials } from '../data/portfolio'
import './Footer.css'

export function Footer() {
  return (
    <footer id="contacto" className="footer">
      <h2>Contacto</h2>
      <p>
        Escríbeme a <a href={`mailto:${profile.email}`}>{profile.email}</a>
      </p>
      <p>
  Llámame al{' '}
  <a href={`tel:${profile.phone.replace(/\s/g, '')}`}>{profile.phone}</a>
</p>
<p>
  <a
    href={`https://wa.me/${profile.phone.replace(/\D/g, '')}`}
    target="_blank"
    rel="noreferrer"
  >
    Escríbeme por WhatsApp
  </a>
</p>
      <ul>
        {socials.map((s) => (
          <li key={s.id}>
            <a href={s.url} target="_blank" rel="noreferrer">{s.label}</a>
          </li>
        ))}
      </ul>
      <small>© {new Date().getFullYear()} {profile.name}</small>
    </footer>
  )
}
