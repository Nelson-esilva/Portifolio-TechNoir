import { useEffect, useState } from 'react';
import { useInView } from '@/hooks/useInView';

interface SkillBarProps {
  name: string;
  level: number;
  color?: 'green' | 'purple' | 'cyan';
  delay?: number;
}

export const SkillBar = ({
  name,
  level,
  color = 'green',
  delay = 0,
}: SkillBarProps) => {
  const [ref, isInView] = useInView<HTMLDivElement>({ threshold: 0.3 });
  const [animatedLevel, setAnimatedLevel] = useState(0);

  const colorClasses = {
    green: 'from-neon-green to-neon-cyan',
    purple: 'from-neon-purple to-purple-400',
    cyan: 'from-neon-cyan to-blue-400',
  };

  useEffect(() => {
    if (isInView) {
      const timeout = setTimeout(() => {
        setAnimatedLevel(level);
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [isInView, level, delay]);

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className="font-mono text-sm text-text-primary">{name}</span>
        <span className="font-mono text-sm text-text-muted">{level}%</span>
      </div>
      <div className="skill-bar">
        <div
          className={`skill-fill bg-gradient-to-r ${colorClasses[color]}`}
          style={{
            width: `${animatedLevel}%`,
            transition: 'width 1s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        />
      </div>
    </div>
  );
};
