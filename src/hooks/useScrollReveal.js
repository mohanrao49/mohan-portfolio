import { useEffect, useRef } from 'react';

export const useScrollReveal = (options = {}) => {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            if (options.once !== false) {
              observer.unobserve(entry.target);
            }
          } else if (options.once === false) {
            entry.target.classList.remove('active');
          }
        });
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || '0px 0px -50px 0px',
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [options.once, options.threshold, options.rootMargin]);

  return ref;
};

export default useScrollReveal;
