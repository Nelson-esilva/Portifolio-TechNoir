import { useState } from 'react';
import { TechIcon, getTechColor } from '@/lib/techIcons';
import { RotateCcw, Award, ExternalLink } from 'lucide-react';
import type { ComponentType } from 'react';

export interface Certificate {
  label: string;
  href: string;
}

export interface TimelineEntry {
  role: string;
  company: string;
  client?: string;
  location: string;
  period: string;
  description: string[];
  stack: string[];
  certificates?: Certificate[];
}

export interface AccentStyle {
  dot: string;
  glow: string;
  cardGlow: string;
  iconBg: string;
  iconText: string;
  badge: string;
  bullet: string;
  tag: string;
  clientText: string;
  flipBtn: string;
}

interface TimelineProps {
  entries: TimelineEntry[];
  accent: AccentStyle;
  icon: ComponentType<{ className?: string }>;
  isInView: boolean;
}

export const Timeline = ({ entries, accent, icon: Icon, isInView }: TimelineProps) => {
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());

  const toggleFlip = (index: number) => {
    setFlippedCards((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  return (
    <div className="relative">
      <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-px bg-dark-border sm:-translate-x-px" />

      <div className="space-y-12">
        {entries.map((entry, i) => {
          const isLeft = i % 2 === 0;
          const isFlipped = flippedCards.has(i);

          return (
            <div
              key={`${entry.role}-${entry.period}`}
              className={`relative flex flex-col sm:flex-row sm:items-start gap-4 transition-all duration-700 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              } ${isLeft ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div
                className={`absolute left-6 sm:left-1/2 w-3 h-3 rounded-full ${accent.dot} border-2 border-dark-bg -translate-x-1/2 mt-6 z-10`}
                style={{ boxShadow: `0 0 12px ${accent.glow}` }}
              />

              <div className="hidden sm:block sm:w-1/2" />

              <div className={`ml-12 sm:ml-0 sm:w-1/2 ${isLeft ? 'sm:pr-10' : 'sm:pl-10'}`}>
                <div className="[perspective:1000px]">
                  <div
                    className={`grid transition-transform duration-500 [transform-style:preserve-3d] ${
                      isFlipped ? '[transform:rotateY(180deg)]' : ''
                    }`}
                  >
                    {/* FRENTE */}
                    <div
                      className="p-5 bg-dark-card border border-dark-border rounded-xl [backface-visibility:hidden] [grid-area:1/1]"
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.boxShadow = `0 0 30px ${accent.cardGlow}`;
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                      }}
                    >
                      <div className="flex items-start gap-3 mb-3">
                        <div className={`p-2 rounded-lg ${accent.iconBg} shrink-0`}>
                          <Icon className={`w-5 h-5 ${accent.iconText}`} />
                        </div>
                        <div className="min-w-0">
                          <h3 className="font-mono text-base font-bold text-white leading-snug">
                            {entry.role}
                          </h3>
                          <p className="text-sm text-text-secondary mt-1">
                            {entry.company}
                            {entry.client && (
                              <span className={accent.clientText}> / {entry.client}</span>
                            )}
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center gap-3 mb-4 text-xs font-mono text-text-secondary">
                        <span className={`px-2.5 py-1 rounded ${accent.badge}`}>
                          {entry.period}
                        </span>
                        <span>{entry.location}</span>
                      </div>

                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {entry.stack.map((tech) => {
                          const color = getTechColor(tech);
                          return (
                            <span
                              key={tech}
                              className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-mono rounded-full border"
                              style={{
                                borderColor: `${color}40`,
                                color: color,
                                backgroundColor: '#171515',
                              }}
                            >
                              <TechIcon name={tech} className="w-3 h-3" colored />
                              {tech}
                            </span>
                          );
                        })}
                      </div>

                      {entry.certificates && entry.certificates.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-5">
                          {entry.certificates.map((cert) => (
                            <a
                              key={cert.href}
                              href={cert.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`group/cert inline-flex items-center gap-2 px-3.5 py-2 text-[11px] font-mono font-semibold rounded-lg border-2 transition-all duration-300 ${accent.flipBtn} bg-white/[0.03] hover:bg-white/[0.08] hover:scale-[1.02]`}
                              data-cursor-hover
                            >
                              <Award className="w-4 h-4 group-hover/cert:rotate-12 transition-transform" />
                              {cert.label}
                              <ExternalLink className="w-3 h-3 opacity-50 group-hover/cert:opacity-100 transition-opacity" />
                            </a>
                          ))}
                        </div>
                      )}

                      <button
                        onClick={() => toggleFlip(i)}
                        className={`inline-flex items-center gap-2 px-4 py-2 text-xs font-mono font-semibold border rounded-lg transition-colors ${accent.flipBtn}`}
                        data-cursor-hover
                      >
                        Atividades Desempenhadas →
                      </button>
                    </div>

                    {/* VERSO */}
                    <div
                      className="p-5 bg-dark-card border border-dark-border rounded-xl [backface-visibility:hidden] [transform:rotateY(180deg)] [grid-area:1/1]"
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.boxShadow = `0 0 30px ${accent.cardGlow}`;
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                      }}
                    >
                      <div className="flex items-center justify-between mb-5">
                        <h4 className={`font-mono text-sm font-bold uppercase tracking-wider ${accent.iconText}`}>
                          Atividades Desempenhadas
                        </h4>
                        <button
                          onClick={() => toggleFlip(i)}
                          className={`p-1.5 rounded-lg border transition-colors ${accent.flipBtn}`}
                          data-cursor-hover
                        >
                          <RotateCcw className="w-4 h-4" />
                        </button>
                      </div>

                      <ul className="space-y-3">
                        {entry.description.map((desc, j) => (
                          <li key={j} className="flex gap-2.5 text-sm text-text-primary/90 leading-relaxed">
                            <span className={`${accent.bullet} mt-1 shrink-0`}>▹</span>
                            {desc}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
