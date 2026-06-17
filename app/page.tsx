'use client'

import { Hero } from '@/components/Hero'
import { Profile } from '@/components/Profile'
import { Projects } from '@/components/Projects'
import { Technologies } from '@/components/Technologies'
import { Contact } from '@/components/Contact'

export default function Home() {
  return (
    <main className="bg-space-dark text-space-text min-h-screen overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-space-dark/80 backdrop-blur-md border-b border-neon-cyan/30">
        <div className="container mx-auto px-4 md:px-8 py-4 flex justify-between items-center max-w-7xl">
          <a href="#" className="text-xl font-bold glow-cyan font-mono">
            RAHEL
          </a>
          <ul className="hidden md:flex gap-8 font-mono text-sm">
            <li>
              <a href="#mission" className="text-space-text hover:text-neon-cyan transition-colors">
                MISSION
              </a>
            </li>
            <li>
              <a href="#profile" className="text-space-text hover:text-neon-cyan transition-colors">
                PROFILE
              </a>
            </li>
            <li>
              <a href="#projects" className="text-space-text hover:text-neon-cyan transition-colors">
                PROJECTS
              </a>
            </li>
            <li>
              <a href="#tech" className="text-space-text hover:text-neon-cyan transition-colors">
                TECH
              </a>
            </li>
            <li>
              <a href="#contact" className="text-space-text hover:text-neon-orange transition-colors">
                CONTACT
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <div id="mission">
        <Hero />
      </div>

      <div id="profile">
        <Profile />
      </div>

      <div id="projects">
        <Projects />
      </div>

      <div id="tech">
        <Technologies />
      </div>

      <div id="contact">
        <Contact />
      </div>

      {/* Footer */}
      <footer className="bg-space-darker/50 border-t border-neon-cyan/30 py-8 px-4">
        <div className="container mx-auto text-center text-space-text/60 font-mono text-sm max-w-7xl">
          <p>RAHEL SHIMELS © 2026 | BUILT WITH NEXT.JS & TAILWIND CSS</p>
          <p className="mt-2">
            CURRENTLY EXPLORING: <span className="text-neon-orange">AI & 3D INTERFACES</span>
          </p>
        </div>
      </footer>
    </main>
  )
}
