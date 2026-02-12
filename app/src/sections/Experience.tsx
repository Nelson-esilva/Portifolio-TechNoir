import { TextScramble } from '@/components/TextScramble';
import { Timeline } from '@/components/Timeline';
import { useInView } from '@/hooks/useInView';
import { Briefcase } from 'lucide-react';
import type { TimelineEntry, AccentStyle } from '@/components/Timeline';

const ACCENT: AccentStyle = {
  dot: 'bg-neon-green',
  glow: 'rgba(0,255,65,0.5)',
  cardGlow: 'rgba(0,255,65,0.12)',
  iconBg: 'bg-neon-green/10',
  iconText: 'text-neon-green',
  badge: 'bg-neon-green/10 text-neon-green',
  bullet: 'text-neon-green',
  tag: 'border-neon-green/30 text-neon-green/80',
  clientText: 'text-neon-green',
  flipBtn: 'text-neon-green border-neon-green/30 hover:bg-neon-green/10',
};

const WORK_ENTRIES: TimelineEntry[] = [
  {
    role: 'Desenvolvedor Full Stack',
    company: 'Universidade do Estado do Amazonas (UEA)',
    client: 'Salcomp',
    location: 'Manaus, AM',
    period: 'Set 2025 – Presente',
    description: [
      'Desenvolvimento e manutenção de módulos em sistema legado e correção de issues em produção.',
      'Atualização de sistema de monitoramento energético para análise em tempo real de consumo e eficiência industrial.',
      'Gerenciamento e persistência de dados industriais em SQLServer e conteinerização de serviços com Docker.',
    ],
    stack: ['PHP', 'Docker', 'Git', 'REST APIs', 'SQLServer'],
  },
  {
    role: 'Suporte em Eletrônica e Redes',
    company: 'Universidade do Estado do Amazonas (UEA)',
    client: 'Vantiva',
    location: 'Manaus, AM',
    period: 'Jul 2025 – Set 2025',
    description: [
      'Suporte técnico em laboratório e fábrica, incluindo diagnóstico e resolução de falhas em sistemas eletrônicos.',
      'Apoio na instalação e configuração de infraestrutura de redes (cabeamento, roteadores, switches).',
    ],
    stack: ['Eletrônica Analógica/Digital', 'Redes TCP/IP', 'AngularJS', 'TypeScript'],
  },
  {
    role: 'Desenvolvedor Backend',
    company: 'Universidade do Estado do Amazonas (UEA)',
    client: 'Salcomp',
    location: 'Manaus, AM',
    period: 'Abr 2025 – Jul 2025',
    description: [
      'Desenvolvimento de APIs RESTful com Django para o Sistema de Execução da Manufatura (MES).',
      'Implementação de autenticação segura (JWT) e integração entre chão de fábrica e sistemas corporativos.',
    ],
    stack: ['Python', 'Django', 'PostgreSQL', 'Docker', 'Git'],
  },
  {
    role: 'Estagiário em Engenharia',
    company: 'Honda Brasil',
    location: 'Manaus, AM',
    period: 'Jun 2022 – Jun 2024',
    description: [
      'Negociação direta e desenvolvimento de fornecedores, buscando o melhor custo-benefício.',
      'Implantação de novo modelo de controle logístico e auxílio na implementação do sistema de contratos (e-law).',
    ],
    stack: ['Gestão de Projetos', 'Logística', 'e-Law'],
  },
];

export const Experience = () => {
  const [ref, isInView] = useInView<HTMLElement>({ threshold: 0.05 });

  return (
    <section id="experience" ref={ref} className="relative py-24 px-4">
      <div className="section-container">
        <div className="text-center mb-16">
          <TextScramble
            text="TRAJETÓRIA PROFISSIONAL"
            as="h2"
            className="font-mono text-3xl sm:text-4xl font-bold text-text-primary mb-4"
          />
          <p
            className={`text-text-secondary max-w-2xl mx-auto transition-all duration-700 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Experiência em desenvolvimento full stack e engenharia
            eletrônica — do chão de fábrica à nuvem.
          </p>
        </div>

        <Timeline entries={WORK_ENTRIES} accent={ACCENT} icon={Briefcase} isInView={isInView} />
      </div>
    </section>
  );
};
