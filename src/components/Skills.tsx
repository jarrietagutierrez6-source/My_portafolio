import { skills } from '../data/portfolio'

export function Skills() {
  return (
    <section id="habilidades" className="section">
      <h2>Habilidades</h2>
      <ul className="skills">
        {skills.map((s) => (
          <li key={s.name}>
            <strong>{s.name}</strong>
            <span>{s.detail}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
