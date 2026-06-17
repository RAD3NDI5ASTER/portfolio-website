'use client'

import { ReactNode } from 'react'
import { useSpaceSound } from '@/hooks/useSpaceSound'

interface NeonBoxProps {
  children: ReactNode
  className?: string
  color?: 'cyan' | 'orange'
  interactive?: boolean
  onClick?: () => void
}

export const NeonBox = ({
  children,
  className = '',
  color = 'cyan',
  interactive = false,
  onClick,
}: NeonBoxProps) => {
  const { playSound } = useSpaceSound()

  const colorClass = color === 'orange' ? 'neon-border-orange' : 'neon-border'

  const handleClick = () => {
    playSound()
    onClick?.()
  }

  return (
    <div
      className={`
        ${colorClass}
        ${interactive ? 'cursor-pointer hover:shadow-lg transition-all duration-300' : ''}
        p-6 relative overflow-hidden
        ${className}
      `}
      onClick={interactive ? handleClick : undefined}
    >
      {children}
    </div>
  )
}
