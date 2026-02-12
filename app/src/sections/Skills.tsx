import { useState } from 'react';
import { TextScramble } from '@/components/TextScramble';
import { useInView } from '@/hooks/useInView';
import { TechIcon, getTechColor } from '@/lib/techIcons';
import { Code2, Brain, Server, Cpu, Layers } from 'lucide-react';

/* ───────────── category data ───────────── */

interface TechItem {
  name: string;
  description: string;
}

interface Category {
  id: string;
  title: string;
  icon: typeof Code2;
  accent: string;        // tailwind border/text color classes
  accentBg: string;      // tailwind bg for icon container
  glowColor: string;     // raw rgba for box-shadow
  techs: TechItem[];
}

const CATEGORIES: Category[] = [
  {
    id: 'backend',
    title: 'Backend & Web',
    icon: Code2,
    accent: 'border-neon-green/40 text-neon-green',
    accentBg: 'bg-neon-green/10',
    glowColor: 'rgba(0,255,65,0.15)',
    techs: [
      { name: 'Python', description: 'Linguagem principal' },
      { name: 'Django', description: 'APIs & aplicações web' },
      { name: 'Nest.js', description: 'Microserviços Node' },
      { name: 'FastAPI', description: 'APIs de alta performance' },
      { name: 'PostgreSQL', description: 'Banco relacional' },
      { name: 'SQL Server', description: 'Banco corporativo' },
      { name: 'PHP', description: 'Sistemas legados' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    icon: Layers,
    accent: 'border-neon-cyan/40 text-neon-cyan',
    accentBg: 'bg-neon-cyan/10',
    glowColor: 'rgba(0,217,255,0.15)',
    techs: [
      { name: 'React', description: 'SPA & interfaces' },
      { name: 'TypeScript', description: 'Tipagem estática' },
      { name: 'Tailwind CSS', description: 'Estilização utilitária' },
      { name: 'Next.js', description: 'SSR & SSG' },
    ],
  },
  {
    id: 'ml',
    title: 'Machine Learning & IA',
    icon: Brain,
    accent: 'border-neon-purple/40 text-neon-purple',
    accentBg: 'bg-neon-purple/10',
    glowColor: 'rgba(139,92,246,0.15)',
    techs: [
      { name: 'YOLOv8', description: 'Detecção de objetos' },
      { name: 'PyTorch', description: 'Deep Learning' },
      { name: 'TensorFlow', description: 'Redes neurais' },
      { name: 'OpenCV', description: 'Visão computacional' },
      { name: 'LSTMs', description: 'Séries temporais' },
      { name: 'Scikit-learn', description: 'ML clássico' },
    ],
  },
  {
    id: 'devops',
    title: 'DevOps & Ferramentas',
    icon: Server,
    accent: 'border-neon-cyan/40 text-neon-cyan',
    accentBg: 'bg-neon-cyan/10',
    glowColor: 'rgba(0,217,255,0.15)',
    techs: [
      { name: 'Docker', description: 'Containerização' },
      { name: 'Git', description: 'Controle de versão' },
      { name: 'Linux', description: 'Servidores & CLI' },
      { name: 'REST APIs', description: 'Integração de sistemas' },
      { name: 'CI/CD', description: 'Deploy automatizado' },
    ],
  },
  {
    id: 'hardware',
    title: 'Hardware & Eletrônica',
    icon: Cpu,
    accent: 'border-neon-green/40 text-neon-green',
    accentBg: 'bg-neon-green/10',
    glowColor: 'rgba(0,255,65,0.15)',
    techs: [
      { name: 'Eletrônica Analógica', description: 'Circuitos & sensores' },
      { name: 'Eletrônica Digital', description: 'FPGA & lógica' },
      { name: 'Sistemas Embarcados', description: 'Firmware & IoT' },
      { name: 'Redes TCP/IP', description: 'Protocolos & infraestrutura' },
    ],
  },
];

/* ═══════════════════════════════════════════════ */

export const Skills = () => {
  const [sectionRef, isInView] = useInView<HTMLElement>({ threshold: 0.05 });
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  /* Which techs to show */
  const visibleCategories = activeCategory
    ? CATEGORIES.filter((c) => c.id === activeCategory)
    : CATEGORIES;

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative py-24 px-4 bg-dark-surface"
    >
      <div className="section-container">
        {/* ── Header ── */}
        <div className="text-center mb-12">
          <TextScramble
            text="STACK TÉCNICA"
            as="h2"
            className="font-mono text-3xl sm:text-4xl font-bold text-text-primary mb-4"
          />
          <p
            className={`text-text-secondary max-w-2xl mx-auto transition-all duration-700 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Tecnologias e ferramentas que utilizo para criar soluções robustas —
            do firmware ao deploy.
          </p>
        </div>

        {/* ── Category filter tabs ── */}
        <div
          className={`flex flex-wrap justify-center gap-2 mb-12 transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-4 py-2 rounded-lg text-sm font-mono transition-all duration-300 ${
              activeCategory === null
                ? 'bg-neon-green/15 text-neon-green border border-neon-green/40'
                : 'bg-dark-card text-text-muted border border-dark-border hover:border-text-muted/30'
            }`}
            data-cursor-hover
          >
            Todas
          </button>
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(activeCategory === cat.id ? null : cat.id)}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-mono transition-all duration-300 ${
                activeCategory === cat.id
                  ? `bg-dark-card ${cat.accent} border`
                  : 'bg-dark-card text-text-muted border border-dark-border hover:border-text-muted/30'
              }`}
              data-cursor-hover
            >
              <cat.icon className="w-4 h-4" />
              {cat.title}
            </button>
          ))}
        </div>

        {/* ── Tech grid ── */}
        <div className="space-y-10">
          {visibleCategories.map((category, catIdx) => (
            <div
              key={category.id}
              className={`transition-all duration-700 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${catIdx * 120}ms` }}
            >
              {/* Category label (only shown when "Todas" is active) */}
              {!activeCategory && (
                <div className="flex items-center gap-3 mb-5">
                  <div className={`p-2 rounded-lg ${category.accentBg}`}>
                    <category.icon className={`w-5 h-5 ${category.accent.split(' ')[1]}`} />
                  </div>
                  <h3 className="font-mono text-lg font-semibold text-text-primary">
                    {category.title}
                  </h3>
                  <div className="flex-1 h-px bg-dark-border" />
                </div>
              )}

              {/* Tech items grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                {category.techs.map((tech) => (
                  <div
                    key={tech.name}
                    className="group relative p-4 bg-dark-bg border border-dark-border rounded-xl transition-all duration-300 hover:border-opacity-100 hover:-translate-y-1 cursor-default"
                    onMouseEnter={(e) => {
                      const color = getTechColor(tech.name);
                      (e.currentTarget as HTMLElement).style.boxShadow = `0 0 25px ${color}25`;
                      (e.currentTarget as HTMLElement).style.borderColor = `${color}60`;
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                      (e.currentTarget as HTMLElement).style.borderColor = '';
                    }}
                  >
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <TechIcon
                        name={tech.name}
                        className="w-5 h-5 opacity-80 group-hover:opacity-100 transition-opacity"
                        colored
                      />
                      <p className="font-mono text-sm font-medium text-text-primary group-hover:text-white transition-colors">
                        {tech.name}
                      </p>
                    </div>
                    <p className="text-xs text-text-muted leading-snug pl-[30px]">
                      {tech.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ── Footer note ── */}
        <div
          className={`mt-14 text-center transition-all duration-700 delay-300 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="inline-flex items-center gap-3 px-5 py-2.5 bg-dark-card border border-dark-border rounded-full text-sm text-text-muted">
            <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
            Sempre aprendendo — atualmente explorando LLMs e edge computing.
          </p>
        </div>
      </div>
    </section>
  );
};
