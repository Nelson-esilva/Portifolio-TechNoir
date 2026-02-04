const SCRAMBLE_CHARS = '!<>-_\\/[]{}—=+*^?#________';

export const scrambleText = (
  element: HTMLElement,
  duration: number = 30
): (() => void) => {
  const originalText = element.innerText;
  let iterations = 0;
  let frameId: number | null = null;
  let isActive = true;

  const animate = () => {
    if (!isActive) return;

    element.innerText = originalText
      .split('')
      .map((letter, index) => {
        if (letter === ' ') return ' ';
        if (index < iterations) return originalText[index];
        return SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
      })
      .join('');

    if (iterations < originalText.length) {
      iterations += 1 / 3;
      frameId = requestAnimationFrame(() => {
        setTimeout(animate, duration);
      });
    }
  };

  animate();

  return () => {
    isActive = false;
    if (frameId !== null) {
      cancelAnimationFrame(frameId);
    }
    element.innerText = originalText;
  };
};

export const createScrambleOnHover = (
  element: HTMLElement,
  duration: number = 30
): { destroy: () => void } => {
  let cleanup: (() => void) | null = null;

  const handleMouseEnter = () => {
    cleanup = scrambleText(element, duration);
  };

  const handleMouseLeave = () => {
    if (cleanup) {
      cleanup();
      cleanup = null;
    }
  };

  element.addEventListener('mouseenter', handleMouseEnter);
  element.addEventListener('mouseleave', handleMouseLeave);

  return {
    destroy: () => {
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mouseleave', handleMouseLeave);
      if (cleanup) {
        cleanup();
      }
    },
  };
};
