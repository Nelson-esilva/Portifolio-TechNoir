import { TextScramble } from '@/components/TextScramble';
import { useInView } from '@/hooks/useInView';
import { GraduationCap } from 'lucide-react';

interface Degree {
  title: string;
  type: string;
  institution: string;
  period: string;
  status: 'active' | 'completed' | 'interrupted';
}

const DEGREES: Degree[] = [
  {
    title: 'Engenharia Eletrônica',
    type: 'Bacharelado',
    institution: 'Universidade do Estado do Amazonas (UEA)',
    period: 'Jan 2024 – Dez 2028 (Previsto)',
    status: 'active',
  },
  {
    title: 'Análise e Desenvolvimento de Sistemas',
    type: 'Tecnólogo',
    institution: 'UNINTER Centro Universitário Internacional',
    period: 'Dez 2023 – Dez 2025 (Previsto)',
    status: 'active',
  },
  {
    title: 'Engenharia Elétrica',
    type: 'Bacharelado',
    institution: 'Universidade Federal do Amazonas (UFAM)',
    period: 'Jan 2020 – Jun 2024',
    status: 'interrupted',
  },
  {
    title: 'Física',
    type: 'Bacharelado',
    institution: 'Universidade Federal de Minas Gerais (UFMG)',
    period: 'Jun 2018 – Jan 2020',
    status: 'interrupted',
  },
];

const STATUS_MAP = {
  active: { label: 'Em andamento', color: 'neon-green' },
  completed: { label: 'Concluído', color: 'neon-cyan' },
  interrupted: { label: 'Interrompido', color: 'text-muted' },
} as const;

export const Education = () => {
  const [ref, isInView] = useInView<HTMLElement>({ threshold: 0.1 });

  return (
    <section id="education" ref={ref} className="relative py-24 px-4">
      <div className="section-container">
        <div className="text-center mb-16">
          <TextScramble
            text="FORMAÇÃO ACADÊMICA"
            as="h2"
            className="font-mono text-3xl sm:text-4xl font-bold text-text-primary mb-4"
          />
          <p
            className={`text-text-secondary max-w-2xl mx-auto transition-all duration-700 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Base multidisciplinar em engenharia, física e tecnologia da informação.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {DEGREES.map((degree, i) => {
            const status = STATUS_MAP[degree.status];

            return (
              <div
                key={`${degree.title}-${degree.institution}`}
                className={`group relative p-6 bg-dark-card border border-dark-border rounded-xl transition-all duration-700 hover:-translate-y-1 ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${i * 120}ms` }}
                onMouseEnter={(e) => {
                  if (degree.status === 'active') {
                    (e.currentTarget as HTMLElement).style.boxShadow = '0 0 30px rgba(0,255,65,0.12)';
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,255,65,0.4)';
                  }
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                  (e.currentTarget as HTMLElement).style.borderColor = '';
                }}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-2.5 rounded-lg shrink-0 ${
                    degree.status === 'active' ? 'bg-neon-green/10' : 'bg-dark-surface'
                  }`}>
                    <GraduationCap className={`w-5 h-5 ${
                      degree.status === 'active' ? 'text-neon-green' : 'text-text-muted'
                    }`} />
                  </div>

                  <div className="min-w-0">
                    <h3 className="font-mono text-sm font-semibold text-text-primary leading-snug">
                      {degree.title}
                    </h3>
                    <p className="text-xs text-text-muted mt-0.5">{degree.type}</p>
                    <p className="text-xs text-text-secondary mt-2">{degree.institution}</p>

                    <div className="flex flex-wrap items-center gap-2 mt-3">
                      <span className="text-[11px] font-mono text-text-muted">
                        {degree.period}
                      </span>
                      <span className={`px-2 py-0.5 text-[10px] font-mono rounded-full border ${
                        degree.status === 'active'
                          ? 'border-neon-green/40 text-neon-green bg-neon-green/5'
                          : 'border-dark-border text-text-muted'
                      }`}>
                        {status.label}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
