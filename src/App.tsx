import { useState, useEffect } from 'react'
import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Experience } from './components/Experience'
import { Education } from './components/Education'
import { Skills } from './components/Skills'
import { Footer } from './components/Footer'
import './index.css'

function App() {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme')
    if (saved) return saved === 'dark'
    return false // default: light mode
  })

  useEffect(() => {
    const root = document.documentElement
    if (isDark) {
      root.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      root.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [isDark])

  return (
    <>
      <Nav isDark={isDark} onToggleTheme={() => setIsDark(prev => !prev)} />
      <main className="pt-20">
        <Hero />
        <About />
        <Experience />
        <Education />
        <Skills />
      </main>
      <Footer />
    </>
  )
}

export default App
