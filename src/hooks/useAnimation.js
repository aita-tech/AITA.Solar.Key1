import { useEffect, useRef } from 'react';
import useInViewport from './useInViewport';

const useAnimation = (animationType = 'fadeIn', delay = 0) => {
  const [ref, isInViewport] = useInViewport();
  const animationRef = useRef();

  useEffect(() => {
    if (!isInViewport) return;

    // Use CSS animations for better compatibility
    const runAnimation = () => {
      if (animationRef.current) {
        setTimeout(() => {
          animationRef.current.classList.add('animate-in');
        }, delay);
      }
    };

    runAnimation();
  }, [isInViewport, animationType, delay]);

  return [ref, animationRef];
};

// Simple CSS-based animation hook for viewport-triggered animations
export const useViewportAnimation = (animationClass = 'animate-in', delay = 0) => {
  const [ref, isInViewport] = useInViewport();
  const elementRef = useRef();

  useEffect(() => {
    if (!isInViewport || !elementRef.current) return;

    setTimeout(() => {
      if (elementRef.current) {
        elementRef.current.classList.add(animationClass);
      }
    }, delay);
  }, [isInViewport, animationClass, delay]);

  return [ref, elementRef];
};

export default useAnimation; 