'use client'

import { useSpaceSound } from '@/hooks/useSpaceSound'
import { NeonBox } from './NeonBox'

export const Projects = () => {
  const { playSound } = useSpaceSound()

  const projects = [
    {
      name: 'TopicTracker',
      description: 'A platform that collects and visualizes location-based information on an interactive map.',
      tech: ['React', 'Flask', 'MongoDB', 'Leaflet'],
      features: ['Interactive maps', 'Keyword tracking', 'Real-time updates', 'Location visualization'],
      color: 'cyan',
    },
    {
      name: 'Social Media Automation Platform',
      description: 'A system that schedules and publishes content across multiple social media platforms from a single dashboard.',
      tech: ['React', 'Node.js', 'MongoDB', 'APIs'],
      features: ['Multi-platform support', 'Content scheduling', 'Analytics dashboard', 'Batch publishing'],
      color: 'orange',
    },
    {
      name: 'AI Research Assistant',
      description: 'An intelligent assistant that gathers, organizes, and summarizes information from multiple sources to accelerate research and decision-making.',
      tech: ['Python', 'AI APIs', 'MongoDB', 'React'],
      features: ['AI-powered summaries', 'Search aggregation', 'Knowledge organization', 'Exportable reports'],
      color: 'cyan',
    },
  ]

  const futureProjects = [
    {
      name: 'Autonomous Intelligence Dashboard',
      description: 'A platform that combines AI, visualization, and automation to help users understand complex information through interactive dashboards.',
    },
    {
      name: '3D Cyber Range Simulator',
      description: 'A browser-based training environment where users explore and learn security concepts through immersive simulations.',
    },
    {
      name: 'Smart Education Platform',
      description: 'An interactive learning ecosystem designed to make technical education more engaging through gamification, visualization, and AI assistance.',
    },
  ]

  return (
    <section className="min-h-screen py-20 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-5xl md:text-6xl font-bold glow-orange mb-16 text-center">PROJECTS</h2>

        {/* Active Projects */}
        <div className="space-y-8 mb-20">
          <h3 className="text-2xl font-bold text-neon-cyan">CURRENT PROJECTS</h3>
          {projects.map((project, idx) => (
            <NeonBox
              key={idx}
              color={project.color === 'cyan' ? 'cyan' : 'orange'}
              interactive={true}
              onClick={() => playSound()}
              className="p-8"
            >
              <div className="space-y-4">
                <h4 className={`text-2xl font-bold ${project.color === 'cyan' ? 'text-neon-cyan' : 'text-neon-orange'}`}>
                  {project.name}
                </h4>
                <p className="text-space-text text-base leading-relaxed">{project.description}</p>

                {/* Tech Stack */}
                <div className="pt-4 border-t border-neon-cyan/30">
                  <p className="text-sm text-neon-teal font-mono font-bold mb-2">TECH STACK</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className={`px-3 py-1 text-xs border ${
                          project.color === 'cyan'
                            ? 'border-neon-cyan/50 text-neon-cyan'
                            : 'border-neon-orange/50 text-neon-orange'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="pt-4 border-t border-neon-cyan/30">
                  <p className="text-sm text-neon-teal font-mono font-bold mb-2">KEY FEATURES</p>
                  <ul className="grid grid-cols-2 gap-2 text-sm text-space-text/80">
                    {project.features.map((feature) => (
                      <li key={feature} className="flex items-center before:content-['▸'] before:mr-2">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </NeonBox>
          ))}
        </div>

        {/* Future Projects */}
        <div className="space-y-8">
          <h3 className="text-2xl font-bold text-neon-orange">IN DEVELOPMENT</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {futureProjects.map((project, idx) => (
              <NeonBox
                key={idx}
                color="orange"
                interactive={true}
                onClick={() => playSound()}
                className="p-6 h-full flex flex-col justify-between"
              >
                <div>
                  <h4 className="text-lg font-bold text-neon-orange mb-3">{project.name}</h4>
                  <p className="text-space-text/80 text-sm leading-relaxed">{project.description}</p>
                </div>
                <div className="mt-4 pt-4 border-t border-neon-orange/30">
                  <span className="text-xs text-neon-orange/70 font-mono">COMING SOON</span>
                </div>
              </NeonBox>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
