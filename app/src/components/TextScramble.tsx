import { useRef, useEffect, useState } from 'react';

const SCRAMBLE_CHARS = '!<>-_\\/[]{}—=+*^?#________';

interface TextScrambleProps {
  text: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'span' | 'p';
  triggerOnView?: boolean;
}

export const TextScramble = ({
  text,
  className = '',
  as: Component = 'span',
  triggerOnView = true,
}: TextScrambleProps) => {
  const elementRef = useRef<HTMLElement>(null);
  const [displayText, setDisplayText] = useState(text);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!triggerOnView || hasAnimated) return;

    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          scrambleAnimation();
          observer.unobserve(element);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [hasAnimated, triggerOnView]);

  const scrambleAnimation = () => {
    let iterations = 0;
    const maxIterations = text.length * 3;

    const animate = () => {
      setDisplayText(
        text
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' ';
            if (index < iterations / 3) return text[index];
            return SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
          })
          .join('')
      );

      if (iterations < maxIterations) {
        iterations++;
        requestAnimationFrame(() => setTimeout(animate, 30));
      } else {
        setDisplayText(text);
      }
    };

    animate();
  };

  const handleMouseEnter = () => {
    scrambleAnimation();
  };

  return (
    <Component
      ref={elementRef as any}
      className={`${className} cursor-default`}
      onMouseEnter={handleMouseEnter}
      data-cursor-hover
    >
      {displayText}
    </Component>
  );
};
