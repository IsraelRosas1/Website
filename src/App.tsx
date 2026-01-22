import React from 'react'
import Header from './Components/Header'
import Services from './Components/Services'
import ProjectHighlight from './Components/ProjectHighlight'
import Skills from './Components/Skills'
import Contact from './Components/Contact'
import { ArrowUp } from 'lucide-react'

export default function App() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-hero bg-cover bg-center text-white">
      <Header />

      <main className="relative">
        <Services />
        <ProjectHighlight />
        <Skills />
        <Contact />
      </main>

      <footer className="relative py-12 border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <div className="text-lg font-bold mb-1">Israel Rosas</div>
              <div className="text-sm text-white/60">Mobile App Developer · React Native · TypeScript</div>
            </div>
            
            <div className="flex items-center gap-6">
              <a href="tel:2485648645" className="text-sm text-white/70 hover:text-accent transition-colors">
                248-564-8645
              </a>
              <a href="mailto:israelrosassalinas@hotmail.com" className="text-sm text-white/70 hover:text-accent transition-colors">
                Email
              </a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-white/5 text-center">
            <p className="text-sm text-white/50">
              © {new Date().getFullYear()} Israel Rosas. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-3 rounded-full bg-accent hover:bg-accent/90 text-black shadow-lg transition-all transform hover:scale-110 z-50"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </div>
  )
}
