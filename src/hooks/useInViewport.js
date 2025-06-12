import { useEffect, useRef, useState } from 'react';

const useInViewport = (options = {}) => {
  const ref = useRef();
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTriggered) {
          setIsIntersecting(true);
          setHasTriggered(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
        ...options,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [hasTriggered, options]);

  return [ref, isIntersecting];
};

export default useInViewport; 