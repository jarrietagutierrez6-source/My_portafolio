// ✏️ EDITA SOLO ESTE ARCHIVO para cambiar el contenido de tu portafolio.
import type { NavItem, Project, Skill, SocialLink } from '../types'

export const profile = {
  name: 'Jesus Arrieta Gutierrez',
  role: 'Estudiante de ING de Sistemas Informaticos',
  intro:
  'Soy un estudiante de ING sistemas informaticos que busco cada dia aprender y desempeñarme en la informatica aprndiendo. Html,css,visual_S code, python y git hub',
  // 📷 Tu foto: guárdala en la carpeta /public con este nombre (o cambia la ruta).
  photo: 'Foto.jpg',
  email: 'jarrietagutierrez6@gmail.com',
  phone: '+57 3017764755',
}

export const navItems: NavItem[] = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Habilidades', href: '#habilidades' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Contacto', href: '#contacto' },
]

export const skills: Skill[] = [
{ name: 'Python', detail: 'Scripts, lógica de programación y manejo de datos' },
  { name: 'HTML', detail: 'Estructura semántica y accesible de páginas web' },
  { name: 'CSS', detail: 'Diseño adaptable con Flexbox y Grid' },
  { name: 'GitHub', detail: 'Control de versiones y publicación de proyectos' },
]

export const projects: Project[] = [
  {
    id: 1,
    title: 'Proyecto uno',
    description: 'Describe en una frase qué problema resuelve y para quién.',
    tags: ['React', 'TypeScript'],
    demo: 'https://ejemplo.com',
    repo: 'https://github.com/jarrietagutierrez6-source/Juego_Ajedrez',
  },
  {
    id: 2,
    title: 'Proyecto dos',
    description: 'Otra descripción corta. Menciona un resultado concreto.',
    tags: ['Vite', 'CSS'],
    repo: 'https://github.com/tuusuario/proyecto-dos',
  },
]

export const socials: SocialLink[] = [
  { id: 'github', label: 'GitHub', url: 'https://github.com/jarrietagutierrez6-source' },
{ id: 'linkedin', label: 'LinkedIn', url: 'https://linkedin.com/in/tuusuario' },

]

