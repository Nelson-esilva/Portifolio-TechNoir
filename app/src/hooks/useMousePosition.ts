import { useState, useEffect, useCallback, useRef } from 'react';

interface MousePosition {
  x: number;
  y: number;
}

export const useMousePosition = () => {
  const [position, setPosition] = useState<MousePosition>({ x: 0, y: 0 });
  const rafId = useRef<number | null>(null);
  const pendingUpdate = useRef<MousePosition | null>(null);

  const updatePosition = useCallback(() => {
    if (pendingUpdate.current) {
      setPosition(pendingUpdate.current);
      pendingUpdate.current = null;
    }
    rafId.current = null;
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      pendingUpdate.current = { x: e.clientX, y: e.clientY };
      
      if (!rafId.current) {
        rafId.current = requestAnimationFrame(updatePosition);
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, [updatePosition]);

  return position;
};
