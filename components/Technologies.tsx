'use client'

import { useSpaceSound } from '@/hooks/useSpaceSound'
import { NeonBox } from './NeonBox'

export const Technologies = () => {
  const { playSound } = useSpaceSound()

  const techCategories = [
    {
      name: 'FRONTEND',
      color: 'cyan',
      items: ['React', 'Next.js', 'Three.js', 'Tailwind CSS'],
    },
    {
      name: 'BACKEND',
      color: 'orange',
      items: ['Node.js', 'Golang'],
    },
    {
      name: 'DATABASES',
      color: 'cyan',
      items: ['MongoDB', 'PostgreSQL'],
    },
    {
      name: 'TOOLS & INFRASTRUCTURE',
      color: 'orange',
      items: ['Git', 'Docker', 'Linux'],
    },
  ]

  const exploring = ['AI Integration', 'WebGL', '3D Interfaces', 'Distributed Systems']

  return (
    <section className="min-h-screen py-20 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-5xl md:text-6xl font-bold glow-cyan mb-16 text-center">TECHNOLOGIES</h2>

        {/* Tech Stack Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {techCategories.map((category, idx) => (
            <NeonBox
              key={idx}
              color={category.color === 'cyan' ? 'cyan' : 'orange'}
              interactive={true}
              onClick={() => playSound()}
              className="p-8"
            >
              <h3
                className={`text-2xl font-bold mb-6 ${
                  category.color === 'cyan' ? 'text-neon-cyan' : 'text-neon-orange'
                }`}
              >
                {category.name}
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {category.items.map((item) => (
                  <div
                    key={item}
                    className={`px-4 py-2 border text-center text-sm font-mono transition-all ${
                      category.color === 'cyan'
                        ? 'border-neon-cyan/50 text-neon-cyan hover:border-neon-cyan hover:shadow-lg'
                        : 'border-neon-orange/50 text-neon-orange hover:border-neon-orange hover:shadow-lg'
                    }`}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </NeonBox>
          ))}
        </div>

        {/* Currently Exploring */}
        <div className="space-y-8">
          <h3 className="text-3xl font-bold glow-orange text-center">CURRENTLY EXPLORING</h3>
          <NeonBox
            color="orange"
            interactive={true}
            onClick={() => playSound()}
            className="p-8"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {exploring.map((tech) => (
                <div
                  key={tech}
                  className="p-4 border-2 border-neon-orange/30 text-center hover:border-neon-orange/80 hover:bg-neon-orange/5 transition-all cursor-pointer group"
                  onClick={() => playSound()}
                >
                  <span className="text-neon-orange font-bold text-sm group-hover:text-lg transition-all">
                    {tech}
                  </span>
                  <div className="text-neon-orange/50 text-xs mt-2">LEARNING</div>
                </div>
              ))}
            </div>
          </NeonBox>
        </div>

        {/* Philosophy */}
        <div className="mt-16">
          <NeonBox color="cyan" interactive={true} onClick={() => playSound()} className="p-8 text-center">
            <p className="text-lg text-space-text leading-relaxed">
              I believe in staying current with emerging technologies while maintaining deep expertise in
              proven frameworks and tools. My focus is on building scalable, maintainable solutions that
              solve real problems.
            </p>
          </NeonBox>
        </div>
      </div>
    </section>
  )
}
