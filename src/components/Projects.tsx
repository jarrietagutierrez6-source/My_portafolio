import { projects } from '../data/portfolio'

export function Projects() {
  return (
    <section id="proyectos" className="section">
      <h2>Proyectos</h2>
      <div className="projects">
        {projects.map((p) => (
          <article key={p.id} className="project">
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <ul className="tags">
              {p.tags.map((t) => <li key={t}>{t}</li>)}
            </ul>
            <div className="project__links">
              {p.demo && <a href={p.demo} target="_blank" rel="noreferrer">Ver demo</a>}
              {p.repo && <a href={p.repo} target="_blank" rel="noreferrer">Ver código</a>}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
