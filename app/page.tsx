'use client'

import React from 'react'
import Header from '@/Components/Header'
import Services from '@/Components/Services'
import ProjectHighlight from '@/Components/ProjectHighlight'
import Skills from '@/Components/Skills'
import Contact from '@/Components/Contact'
import { ArrowUp, Linkedin } from 'lucide-react'

export default function HomePage() {
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
              <a
                href="https://www.linkedin.com/in/israelrosas1"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 transition"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={20} />
              </a>

              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="p-2 rounded-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 transition"
                aria-label="Back to top"
              >
                <ArrowUp size={20} />
              </button>
            </div>
          </div>

          <div className="text-center mt-6 text-sm text-white/40">
            © 2026 Israel Rosas. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
