import React from 'react';
import { motion, HTMLMotionProps, Variants } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

interface ScrollRevealProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  threshold?: number;
  delay?: number;
  duration?: number;
  variant?: 'fade' | 'slide' | 'scale' | 'parallax';
  className?: string;
}

const variants: Record<string, Variants> = {
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  },
  slide: {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  },
  scale: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  },
  parallax: {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 }
  }
};

export default function ScrollReveal({
  children,
  threshold = 0.2,
  delay = 0,
  duration = 0.5,
  variant = 'fade',
  className = '',
  ...props
}: ScrollRevealProps) {
  const [ref, controls] = useScrollAnimation({ threshold });

  const selectedVariant = variants[variant];
  const transition = {
    duration,
    delay,
    ease: 'easeOut'
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={selectedVariant}
      transition={transition}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}