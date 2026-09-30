import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
  direction?: 'up' | 'down' | 'none';
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = '',
  delayMs = 0,
  direction = 'up',
}) => {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ delayMs });

  const getTransformClass = () => {
    if (isVisible) return 'opacity-100 translate-y-0 scale-100';
    if (direction === 'up') return 'opacity-0 translate-y-6 sm:translate-y-8';
    if (direction === 'down') return 'opacity-0 -translate-y-6';
    return 'opacity-0';
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-[transform,opacity] ${getTransformClass()} ${className}`}
    >
      {children}
    </div>
  );
};
