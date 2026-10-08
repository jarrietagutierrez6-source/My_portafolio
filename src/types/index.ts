export interface Skill {
  name: string
  detail: string
}

export interface Project {
  id: number
  title: string
  description: string
  tags: string[]
  demo?: string
  repo?: string
}

export interface NavItem {
  label: string
  href: string
}

export interface SocialLink {
  id: string
  label: string
  url: string
}

export type Theme = 'light' | 'dark'
