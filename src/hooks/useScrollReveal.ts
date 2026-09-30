import { useEffect, useRef, useState } from 'react';

interface ScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  delayMs?: number;
}

/**
 * Hook performa tinggi untuk animasi scroll reveal halus (60fps/120fps).
 * Ringan, hemat baterai, dan ramah Safari iOS & Android Chrome.
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  options: ScrollRevealOptions = {}
) {
  const { threshold = 0.1, rootMargin = '0px 0px -40px 0px', delayMs = 0 } = options;
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Cek preferensi aksesibilitas pengguna (prefers-reduced-motion)
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    if (!('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    const currentEl = ref.current;
    if (!currentEl) return;

    let timeoutId: number | undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          if (delayMs > 0) {
            timeoutId = window.setTimeout(() => {
              setIsVisible(true);
            }, delayMs);
          } else {
            setIsVisible(true);
          }
          // Hentikan observer setelah elemen muncul agar hemat resource
          observer.unobserve(currentEl);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(currentEl);

    return () => {
      if (timeoutId) window.clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, [threshold, rootMargin, delayMs]);

  return { ref, isVisible };
}
