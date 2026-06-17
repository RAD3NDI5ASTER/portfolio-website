'use client'

import Image from 'next/image'
import { useSpaceSound } from '@/hooks/useSpaceSound'
import { NeonBox } from './NeonBox'

export const Profile = () => {
  const { playSound } = useSpaceSound()

  const quickFacts = [
    { label: 'Location', value: 'Addis Ababa, Ethiopia' },
    { label: 'Role', value: 'Full Stack Developer' },
    { label: 'Experience', value: 'Web Development' },
  ]

  const skills = [
    'React',
    'Next.js',
    'Node.js',
    'Python',
    'MongoDB',
    'Golang',
    'PostgreSQL',
  ]

  return (
    <section className="min-h-screen py-20 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-5xl md:text-6xl font-bold glow-cyan mb-16 text-center">PROFILE</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Avatar and Name */}
          <div className="space-y-8 flex flex-col items-center md:items-start">
            <div
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl neon-border overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer"
              onClick={() => playSound()}
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_6cx6ji6cx6ji6cx6-LRGXFFpc7AZ4ZLnmRd6HSZP4eYAmRC.png"
                alt="Rahel Shimels"
                fill
                className="object-cover"
              />
            </div>

            <div className="text-center md:text-left">
              <h3 className="text-3xl md:text-4xl font-bold glow-cyan mb-2">RAHEL SHIMELS</h3>
              <p className="text-neon-teal font-mono">Software Engineer</p>
            </div>
          </div>

          {/* Right: Bio and Quick Facts */}
          <div className="space-y-8">
            {/* Bio */}
            <NeonBox color="cyan" interactive={true} onClick={() => playSound()}>
              <h4 className="text-xl font-bold text-neon-cyan mb-4">ABOUT</h4>
              <p className="text-space-text leading-relaxed text-sm md:text-base">
                I am a software developer passionate about building modern web applications, interactive experiences,
                and data-driven systems. My interests include cybersecurity, geospatial technology, automation,
                artificial intelligence, and creating solutions that solve real-world problems.
              </p>
              <p className="text-space-text/70 leading-relaxed text-sm md:text-base mt-4">
                I enjoy transforming ideas into products that people can use every day.
              </p>
            </NeonBox>

            {/* Quick Facts */}
            <div className="space-y-3">
              {quickFacts.map((fact, idx) => (
                <NeonBox
                  key={idx}
                  color={idx % 2 === 0 ? 'cyan' : 'orange'}
                  interactive={true}
                  onClick={() => playSound()}
                  className="p-4"
                >
                  <div className="flex justify-between items-center">
                    <span className={idx % 2 === 0 ? 'text-neon-cyan' : 'text-neon-orange'} font-bold>
                      {fact.label}
                    </span>
                    <span className="text-space-text/80 text-sm md:text-base">{fact.value}</span>
                  </div>
                </NeonBox>
              ))}
            </div>

            {/* Focus Areas */}
            <NeonBox color="orange" interactive={true} onClick={() => playSound()}>
              <h4 className="text-lg font-bold text-neon-orange mb-4">FOCUS AREAS</h4>
              <div className="flex flex-wrap gap-2">
                {['Cybersecurity', 'Geospatial Tech', 'Automation', 'AI Integration'].map((area) => (
                  <span
                    key={area}
                    className="px-3 py-1 text-xs md:text-sm border border-neon-orange text-neon-orange hover:bg-neon-orange/10 transition-colors cursor-pointer"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </NeonBox>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold glow-orange mb-8 text-center">PRIMARY SKILLS</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skills.map((skill) => (
              <NeonBox
                key={skill}
                color={skills.indexOf(skill) % 2 === 0 ? 'cyan' : 'orange'}
                interactive={true}
                onClick={() => playSound()}
                className="text-center p-4"
              >
                <span className={skills.indexOf(skill) % 2 === 0 ? 'text-neon-cyan' : 'text-neon-orange'} font-bold>
                  {skill}
                </span>
              </NeonBox>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
