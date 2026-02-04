import { TextScramble } from '@/components/TextScramble';
import { useInView } from '@/hooks/useInView';
import { Code2, Cpu, Brain, Server } from 'lucide-react';

const HIGHLIGHTS = [
  {
    icon: Code2,
    title: 'FullStack',
    description: 'Django, Nest.js, React',
  },
  {
    icon: Brain,
    title: 'Machine Learning',
    description: 'YOLOv8, PyTorch, TensorFlow',
  },
  {
    icon: Server,
    title: 'DevOps',
    description: 'Docker, Git, Linux',
  },
  {
    icon: Cpu,
    title: 'Hardware',
    description: 'Eletrônica, Embarcados',
  },
];

export const About = () => {
  const [ref, isInView] = useInView<HTMLElement>({ threshold: 0.2 });

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-24 px-4 bg-dark-surface"
    >
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div>
            <TextScramble
              text="SOBRE MIM"
              as="h2"
              className="font-mono text-3xl sm:text-4xl font-bold text-text-primary mb-6"
            />

            <div
              className={`space-y-4 transition-all duration-700 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <p className="text-text-secondary leading-relaxed">
                Sou um profissional <span className="text-neon-green font-semibold">híbrido</span> com base sólida em 
                Engenharia Eletrônica e Análise de Sistemas. Minha jornada começou no chão de fábrica, 
                conectando a indústria com a nuvem.
              </p>

              <p className="text-text-secondary leading-relaxed">
                Hoje, uso <span className="text-neon-cyan font-semibold">Python</span>,{' '}
                <span className="text-neon-cyan font-semibold">Django</span> e{' '}
                <span className="text-neon-cyan font-semibold">Nest.js</span> para construir APIs robustas, 
                enquanto exploro <span className="text-neon-purple font-semibold">YOLOv8</span> e{' '}
                <span className="text-neon-purple font-semibold">PyTorch</span> para dar "visão" às máquinas.
              </p>

              <p className="text-text-secondary leading-relaxed">
                Acredito que a melhor solução é aquela que une{' '}
                <span className="text-neon-green font-semibold">software inteligente</span> com{' '}
                <span className="text-neon-green font-semibold">hardware eficiente</span>.
              </p>

              {/* Experience badges */}
              <div className="flex flex-wrap gap-3 pt-4">
                <span className="px-4 py-2 bg-dark-card border border-dark-border rounded-full text-sm font-mono text-text-muted">
                  5+ anos experiência
                </span>
                <span className="px-4 py-2 bg-dark-card border border-dark-border rounded-full text-sm font-mono text-text-muted">
                  Manaus, AM
                </span>
              </div>
            </div>
          </div>

          {/* Right Column - Highlights Grid */}
          <div
            className={`grid grid-cols-2 gap-4 transition-all duration-700 delay-200 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {HIGHLIGHTS.map((item, index) => (
              <div
                key={item.title}
                className="p-6 bg-dark-card border border-dark-border rounded-lg hover:border-neon-green/50 transition-all duration-300 group"
                style={{ transitionDelay: `${index * 100}ms` }}
                data-cursor-hover
              >
                <item.icon className="w-8 h-8 text-neon-green mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-mono text-lg font-semibold text-text-primary mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-text-muted">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
