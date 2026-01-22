import React from 'react'
import { Smartphone, Mail, ArrowRight } from 'lucide-react'

export default function Header() {
  return (
    <header className="relative py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-6">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
            <span className="text-sm text-white/80">Available for new projects</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Professional<br />
            <span className="bg-gradient-to-r from-accent to-orange-400 bg-clip-text text-transparent">Mobile App</span><br />
            Development
          </h1>
          
          <p className="text-xl md:text-2xl text-white/70 mb-8 max-w-2xl">
            I build high-quality mobile applications that help businesses grow and engage their customers.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-8">
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent hover:bg-accent/90 text-black font-semibold transition-all transform hover:scale-105"
            >
              Get in touch
              <ArrowRight className="w-5 h-5" />
            </a>
            <a 
              href="#projects" 
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg glass hover:bg-white/5 text-white font-semibold transition-all"
            >
              View my work
            </a>
          </div>

          <div className="flex flex-wrap gap-6 pt-6 border-t border-white/10">
            <a href="tel:2485648645" className="flex items-center gap-3 group">
              <div className="p-2 rounded-lg bg-white/5 group-hover:bg-accent/20 transition-colors">
                <Smartphone className="w-5 h-5 text-accent" />
              </div>
              <div>
                <div className="text-xs text-white/60">Call me</div>
                <div className="text-sm font-semibold">248-564-8645</div>
              </div>
            </a>
            
            <a href="mailto:israelrosassalinas@hotmail.com" className="flex items-center gap-3 group">
              <div className="p-2 rounded-lg bg-white/5 group-hover:bg-accent/20 transition-colors">
                <Mail className="w-5 h-5 text-accent" />
              </div>
              <div>
                <div className="text-xs text-white/60">Email me</div>
                <div className="text-sm font-semibold">israelrosassalinas@hotmail.com</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
