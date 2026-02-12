import { TextScramble } from '@/components/TextScramble';
import { Timeline } from '@/components/Timeline';
import { useInView } from '@/hooks/useInView';
import { FlaskConical } from 'lucide-react';
import type { TimelineEntry, AccentStyle } from '@/components/Timeline';

const ACCENT: AccentStyle = {
  dot: 'bg-neon-purple',
  glow: 'rgba(139,92,246,0.5)',
  cardGlow: 'rgba(139,92,246,0.12)',
  iconBg: 'bg-neon-purple/10',
  iconText: 'text-neon-purple',
  badge: 'bg-neon-purple/10 text-neon-purple',
  bullet: 'text-neon-purple',
  tag: 'border-neon-purple/30 text-neon-purple/80',
  clientText: 'text-neon-purple',
  flipBtn: 'text-neon-purple border-neon-purple/30 hover:bg-neon-purple/10',
};

const RESEARCH_ENTRIES: TimelineEntry[] = [
  {
    role: 'Pesquisador em IA para predição de demanda energética',
    company: 'UNINTER Centro Universitário Internacional',
    location: 'Manaus, AM',
    period: 'Jan 2025 – Presente',
    description: [
      'Pesquisa e desenvolvimento de modelos preditivos para demanda energética usando Machine Learning (LSTMs).',
      'Utilização de Python com TensorFlow e Apache Spark para análise de séries temporais no setor elétrico.',
    ],
    stack: ['Python', 'TensorFlow', 'Apache Spark', 'LSTMs'],
    certificates: [
      { label: 'Certificado', href: '/certificado-demanda-energetica.pdf' },
    ],
  },
  {
    role: 'Pesquisador em Sistemas Embarcados e PLC',
    company: 'UNINTER Centro Universitário Internacional',
    location: 'Manaus, AM',
    period: 'Jan 2025 – Presente',
    description: [
      'Análise e modificação do código-fonte do OpenPLC Runtime para compreensão da arquitetura e identificação de pontos de melhoria.',
      'Desenvolvimento de scripts de automação para simplificar a instalação, configuração e uso do OpenPLC por usuários sem experiência técnica.',
    ],
    stack: ['Python', 'OpenPLC', 'Shell Script', 'Sistemas Embarcados'],
    certificates: [
      { label: 'Certificado', href: '/certificado-open-plc.pdf' },
    ],
  },
  {
    role: 'Pesquisador em Machine Learning & Visão Computacional',
    company: 'Academia STEM',
    location: 'Manaus, AM',
    period: 'Ago 2024 – Mar 2025',
    description: [
      'Desenvolvimento de modelos de detecção de objetos (YOLOv8, PyTorch) para identificação de formas geométricas em ambientes industriais.',
      'Processamento de imagens com OpenCV e simulação de linhas de produção 3D no Blender para validação do modelo.',
    ],
    stack: ['YOLOv8', 'PyTorch', 'OpenCV', 'Blender'],
    certificates: [
      { label: 'Certificado', href: '/certificado-ML-UEA.pdf' },
    ],
  },
  {
    role: 'Pesquisador em Machine Learning & Data Science',
    company: 'Universidade Federal do Amazonas (UFAM)',
    location: 'Manaus, AM',
    period: 'Mar 2021 – Abr 2022',
    description: [
      'Desenvolvimento de software para detecção de EPIs (jaleco, luva, óculos) utilizando Visão Computacional.',
    ],
    stack: ['YOLOv4', 'OpenCV', 'PyTorch'],
    certificates: [
      { label: 'Certificado', href: '/certificado-ML-UFAM.pdf' },
    ],
  },
  {
    role: 'Pesquisador em Sistemas Multiagente e Multithread',
    company: 'Universidade Federal do Amazonas (UFAM)',
    location: 'Manaus, AM',
    period: 'Mar 2020 – Mar 2021',
    description: [
      'Desenvolvimento de sistema Multiagente e Multithread em Linguagem C (biblioteca pthread) para simulação de interações.',
    ],
    stack: ['C', 'pthread', 'Sistemas Multiagente'],
    certificates: [
      { label: 'Certificado', href: '/certificado-MultiAgent-UFAM.pdf' },
    ],
  },
];

export const Research = () => {
  const [ref, isInView] = useInView<HTMLElement>({ threshold: 0.05 });

  return (
    <section id="research" ref={ref} className="relative py-24 px-4 bg-dark-surface">
      <div className="section-container">
        <div className="text-center mb-16">
          <TextScramble
            text="ATIVIDADES DE PESQUISA"
            as="h2"
            className="font-mono text-3xl sm:text-4xl font-bold text-text-primary mb-4"
          />
          <p
            className={`text-text-secondary max-w-2xl mx-auto transition-all duration-700 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Pesquisas em inteligência artificial, visão computacional
            e sistemas concorrentes no contexto acadêmico e industrial.
          </p>
        </div>

        <Timeline entries={RESEARCH_ENTRIES} accent={ACCENT} icon={FlaskConical} isInView={isInView} />
      </div>
    </section>
  );
};
