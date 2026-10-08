import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'
import { Footer } from './components/Footer'
import { navItems, profile } from './data/portfolio'
import './App.css'

function App() {
  return (
    <>
      <Navbar logo={profile.name} items={navItems} />
      <main>
        <Hero />
        <Skills />
        <Projects />
      </main>
      <Footer />
    </>
  )
}

export default App
