'use client';
import { useEffect, useRef, useState } from 'react';

export default function ScrollReveal({ children, className = '', style = {}, threshold = 0.15, delay = 0 }) {
  const ref = useRef(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsRevealed(true), delay);
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin: '0px 0px -50px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, delay]);

  return (
    <div ref={ref} className={`${className} ${isRevealed ? 'revealed' : ''}`} style={style}>
      {children}
    </div>
  );
}
