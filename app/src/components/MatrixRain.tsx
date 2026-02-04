import { useEffect, useRef } from 'react';

const CHARACTERS = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';

interface Drop {
  x: number;
  y: number;
  speed: number;
  char: string;
  opacity: number;
}

export const MatrixRain = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dropsRef = useRef<Drop[]>([]);
  const frameIdRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Check if mobile
    const isMobile = window.matchMedia('(hover: none) and (pointer: coarse)').matches;
    const columnCount = isMobile ? 30 : 60;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize drops
    const columnWidth = canvas.width / columnCount;
    dropsRef.current = Array.from({ length: columnCount }, (_, i) => ({
      x: i * columnWidth + columnWidth / 2,
      y: Math.random() * canvas.height,
      speed: Math.random() * 2 + 1,
      char: CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)],
      opacity: Math.random() * 0.5 + 0.1,
    }));

    let lastTime = 0;
    const frameInterval = 1000 / 30; // 30fps for performance

    const animate = (currentTime: number) => {
      const deltaTime = currentTime - lastTime;

      if (deltaTime >= frameInterval) {
        // Fade effect
        ctx.fillStyle = 'rgba(10, 10, 10, 0.1)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.font = '14px JetBrains Mono';

        dropsRef.current.forEach((drop) => {
          // Update character occasionally
          if (Math.random() < 0.02) {
            drop.char = CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
          }

          // Draw character
          ctx.fillStyle = `rgba(0, 255, 65, ${drop.opacity})`;
          ctx.fillText(drop.char, drop.x, drop.y);

          // Move drop
          drop.y += drop.speed;

          // Reset if off screen
          if (drop.y > canvas.height) {
            drop.y = -20;
            drop.speed = Math.random() * 2 + 1;
            drop.opacity = Math.random() * 0.5 + 0.1;
          }
        });

        lastTime = currentTime;
      }

      frameIdRef.current = requestAnimationFrame(animate);
    };

    frameIdRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (frameIdRef.current) {
        cancelAnimationFrame(frameIdRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.4 }}
    />
  );
};
