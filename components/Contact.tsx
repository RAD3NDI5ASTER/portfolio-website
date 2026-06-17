'use client'

import { useSpaceSound } from '@/hooks/useSpaceSound'
import { NeonBox } from './NeonBox'

export const Contact = () => {
  const { playSound } = useSpaceSound()

  const contactLinks = [
    {
      label: 'EMAIL',
      value: 'RITASHIMELS@GMAIL.COM',
      href: 'mailto:RITASHIMELS@GMAIL.COM',
      icon: '✉',
    },
    {
      label: 'GITHUB',
      value: 'RAD3NDI5ASTER',
      href: 'https://github.com/RAD3NDI5ASTER',
      icon: '◄►',
    },
    {
      label: 'LINKEDIN',
      value: 'RAHEL SHIMELS',
      href: 'https://www.linkedin.com/in/rahel-shimels-a734a5341/',
      icon: '◇',
    },
    {
      label: 'TELEGRAM',
      value: 'PRINXESSRITA',
      href: 'https://t.me/PRINXESSRITA',
      icon: '»',
    },
  ]

  const handleContactClick = (href: string) => {
    playSound()
    setTimeout(() => {
      window.open(href, '_blank')
    }, 100)
  }

  return (
    <section className="min-h-screen py-20 px-4 relative flex items-center">
      <div className="container mx-auto max-w-4xl w-full">
        <div className="space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-5xl md:text-6xl font-bold glow-orange">GET IN TOUCH</h2>
            <p className="text-lg md:text-xl text-space-text/80 max-w-2xl mx-auto">
              Interested in collaborating, building a product, or discussing new ideas?
            </p>
          </div>

          {/* Main Contact Box */}
          <NeonBox color="orange" interactive={true} onClick={() => playSound()} className="p-8 text-center">
            <h3 className="text-2xl font-bold text-neon-orange mb-4">LET&apos;S CONNECT</h3>
            <p className="text-space-text text-lg mb-6">
              I&apos;m always interested in discussing new projects, ideas, and opportunities.
            </p>
            <p className="text-neon-teal font-mono">Feel free to reach out through any of the channels below.</p>
          </NeonBox>

          {/* Contact Links */}
          <div className="grid md:grid-cols-2 gap-6">
            {contactLinks.map((contact, idx) => (
              <button
                key={idx}
                onClick={() => handleContactClick(contact.href)}
                className="w-full"
              >
                <NeonBox
                  color={idx % 2 === 0 ? 'cyan' : 'orange'}
                  interactive={true}
                  className="p-6 text-left h-full hover:scale-105 transition-transform duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <span className={`text-2xl ${idx % 2 === 0 ? 'text-neon-cyan' : 'text-neon-orange'}`}>
                      {contact.icon}
                    </span>
                    <div className="flex-1">
                      <p className={`text-xs font-mono font-bold ${idx % 2 === 0 ? 'text-neon-cyan' : 'text-neon-orange'}`}>
                        {contact.label}
                      </p>
                      <p className="text-space-text font-bold text-sm md:text-base mt-1 break-all">
                        {contact.value}
                      </p>
                    </div>
                  </div>
                </NeonBox>
              </button>
            ))}
          </div>

          {/* Footer Message */}
          <div className="text-center space-y-4 pt-8 border-t border-neon-cyan/30">
            <p className="text-neon-teal font-mono text-sm">SYSTEM READY FOR COMMUNICATION</p>
            <p className="text-space-text/70 text-sm">
              Response time: 24-48 hours | Status: ONLINE
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
