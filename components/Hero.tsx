'use client'

import { useSpaceSound } from '@/hooks/useSpaceSound'

export const Hero = () => {
  const { playSound } = useSpaceSound()

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-96 h-96 rounded-full border-2 border-neon-cyan/20 top-20 -left-48"
          style={{ animation: 'float 6s ease-in-out infinite' }}
        />
        <div
          className="absolute w-72 h-72 rounded-full border-2 border-neon-orange/20 bottom-20 -right-36"
          style={{ animation: 'float 8s ease-in-out infinite 1s' }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-8 max-w-4xl relative z-10">
        <div className="text-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          {/* Title with glow effect */}
          <div className="space-y-4">
            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold glow-cyan leading-tight"
              onClick={() => playSound()}
              style={{ cursor: 'pointer' }}
            >
              RAHEL SHIMELS
            </h1>
            <p className="text-lg md:text-xl text-neon-teal font-mono">
              Full Stack Developer
            </p>
          </div>

          {/* Mission statement */}
          <div className="space-y-6 max-w-3xl mx-auto">
            <div className="neon-border-orange p-8 bg-space-darker/50 backdrop-blur-sm">
              <h2 className="text-2xl md:text-3xl font-bold glow-orange mb-4">MISSION</h2>
              <p className="text-lg text-space-text leading-relaxed">
                Building intelligent software that transforms data into decisions.
              </p>
            </div>

            <p className="text-base md:text-lg text-space-text/80">
              Developer focused on web applications, automation, mapping systems, and emerging technologies.
            </p>

            {/* CTA */}
            <button
              onClick={() => playSound()}
              className="
                neon-border px-8 py-3 font-mono font-bold
                text-neon-cyan hover:text-neon-orange
                transition-all duration-300
                hover:shadow-lg active:scale-95
              "
            >
              EXPLORE PORTFOLIO
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="text-neon-cyan text-sm font-mono">SCROLL TO BEGIN</div>
      </div>
    </section>
  )
}
