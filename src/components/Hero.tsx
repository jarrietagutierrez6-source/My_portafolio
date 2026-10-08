import { useState } from 'react'
import { profile } from '../data/portfolio'

export function Hero() {
  const [photoFailed, setPhotoFailed] = useState(false)
  const initials = profile.name.split(' ').map((w) => w[0]).slice(0, 2).join('')

  return (
    <section id="inicio" className="hero">
      <div className="hero__text">
        <p className="hero__role">{profile.role}</p>
        <h1>{profile.name}</h1>
        <p className="hero__intro">{profile.intro}</p>
        <div className="hero__cta">
          <a className="btn btn--primary" href="#proyectos">Ver proyectos</a>
          <a className="btn" href="#contacto">Contactar</a>
        </div>
      </div>

      <div className="hero__photo">
        {photoFailed ? (
          <span className="hero__initials" aria-hidden="true">{initials}</span>
        ) : (
          <img
            src={profile.photo}
            alt={`Foto de ${profile.name}`}
            onError={() => setPhotoFailed(true)}
          />
        )}
      </div>
    </section>
  )
}
