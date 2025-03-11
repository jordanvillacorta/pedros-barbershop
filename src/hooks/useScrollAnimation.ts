import { useEffect } from 'react';
import { useAnimation, AnimationControls } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface ScrollAnimationOptions {
  threshold?: number;
  triggerOnce?: boolean;
  delay?: number;
}

export function useScrollAnimation(options: ScrollAnimationOptions = {}): [React.RefObject<any>, AnimationControls] {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: options.threshold || 0.2,
    triggerOnce: options.triggerOnce ?? true,
  });

  useEffect(() => {
    if (inView) {
      void controls.start('visible');
    }
  }, [controls, inView]);

  return [ref, controls];
}