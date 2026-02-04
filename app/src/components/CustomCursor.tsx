import { useEffect, useRef, useState } from 'react';
import { useMousePosition } from '@/hooks/useMousePosition';

export const CustomCursor = () => {
  const { x, y } = useMousePosition();
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if touch device
    const isTouchDevice = window.matchMedia('(hover: none) and (pointer: coarse)').matches;
    if (isTouchDevice) return;

    setIsVisible(true);

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    // Add hover listeners to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [data-cursor-hover]');
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  // Update cursor position
  useEffect(() => {
    if (dotRef.current) {
      dotRef.current.style.left = `${x}px`;
      dotRef.current.style.top = `${y}px`;
    }
    if (ringRef.current) {
      ringRef.current.style.left = `${x}px`;
      ringRef.current.style.top = `${y}px`;
    }
  }, [x, y]);

  if (!isVisible) return null;

  return (
    <>
      <div
        ref={dotRef}
        className="cursor-dot"
        style={{
          transform: `translate(-50%, -50%) scale(${isHovering ? 1.5 : 1})`,
          transition: 'transform 0.15s ease-out',
        }}
      />
      <div
        ref={ringRef}
        className={`cursor-ring ${isHovering ? 'expanded' : ''}`}
        style={{
          transition: 'width 0.2s, height 0.2s, border-color 0.2s, transform 0.1s ease-out',
        }}
      />
    </>
  );
};
