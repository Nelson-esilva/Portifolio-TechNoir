import { TextScramble } from '@/components/TextScramble';
import { ProjectCard } from '@/components/ProjectCard';
import { useInView } from '@/hooks/useInView';

const PROJECTS = [
  {
    title: 'Sistema de Detecção de Quedas com IA',
    description:
      'Detecção de quedas em tempo real usando arquitetura híbrida CNN (MobileNetV2) + LSTM. Integração com ESP32 para alertas locais via buzzer e LEDs. Projeto de Iniciação Científica PAIC/FAPEAM - UEA.',
    image: '/project-fall-detect.jpg',
    tags: ['Python', 'PyTorch', 'OpenCV', 'ESP32'],
    githubUrl: 'https://github.com/Nelson-esilva/Fall-Detect-System',
  },
  {
    title: 'Análise de Formas na Linha de Produção',
    description:
      'Sistema de inspeção automatizada para identificar formas geométricas e detectar deformações em latas na linha de produção. Utiliza YOLOv8 para detecção de objetos em tempo real. Projeto STEM - UEA.',
    image: '/project-yolo-stem.jpg',
    tags: ['Python', 'YOLOv8', 'OpenCV'],
    githubUrl: 'https://github.com/Nelson-esilva/Anlise-de-Formas-Linha-de-Producao-STEM-UEA',
  },
  {
    title: 'TrocaMat - Plataforma de Troca de Materiais',
    description:
      'Plataforma fullstack para troca de materiais didáticos entre estudantes. Gestão de itens, sistema de ofertas, busca por categorias e autenticação. Deploy containerizado com Docker.',
    image: '/project-trade-site.png',
    tags: ['Django', 'React', 'PostgreSQL', 'Docker'],
    githubUrl: 'https://github.com/Nelson-esilva/Trade-Site',
    liveUrl: 'https://trade-site-frontend.vercel.app',
    imageFit: 'cover' as const,
  },
  {
    title: 'OpenPLC Runtime - Automação Industrial',
    description:
      'Análise e modificação do código open source do OpenPLC Runtime. Scripts de automação para simplificar instalação e uso do PLC por usuários sem experiência técnica. Pesquisa em sistemas embarcados - UNINTER.',
    image: '/project-openplc.png',
    tags: ['Python', 'Shell Script', 'OpenPLC', 'Sistemas Embarcados'],
    githubUrl: 'https://github.com/Nelson-esilva/OpenPLC-Runtime',
    imageFit: 'cover' as const,
  },
  {
    title: 'Controle de Produção - Fábrica de Plásticos',
    description:
      'Sistema web para controle e monitoramento de produção industrial. Autenticação, cadastro de dados, filtros por período e geração de relatórios com gráficos interativos via Plotly e Chart.js.',
    image: '/project-controle-produtivo.png',
    tags: ['Flask', 'Python', 'SQLite', 'JavaScript'],
    githubUrl: 'https://github.com/Nelson-esilva/Site-Controle-Produtivo',
    liveUrl: 'https://tela-de-login-html.onrender.com',
  },
  {
    title: 'Sistema MultiAgente - Simulação de Livraria',
    description:
      'Simulação de sistema multiagente em C com Pthread para execução concorrente. Agentes interagem para operações de compra, venda e gestão de estoque. Pesquisa apresentada à UFAM.',
    image: '/project-multiagent.png',
    tags: ['C', 'pthread', 'Sistemas Multiagente'],
    githubUrl: 'https://github.com/Nelson-esilva/Research-MultiAgentSystem',
  },
  {
    title: 'ShopFlow MES - Manufacturing Execution System',
    description:
      'Sistema MES/MOM open-source para gestão e monitoramento de produção industrial em tempo real. Integra coleta de dados do chão de fábrica, rastreamento de ordens, análise de defeitos e dashboards analíticos via OLAP.',
    image: '/project-mes.jpg',
    tags: ['Django', 'React', 'PostgreSQL', 'ClickHouse', 'Kafka', 'Docker'],
    githubUrl: 'https://github.com/Nelson-esilva/shopflow-devops',
    imageFit: 'cover' as const,
  },
];

export const Projects = () => {
  const [ref, isInView] = useInView<HTMLElement>({ threshold: 0.1 });

  return (
    <section
      id="projects"
      ref={ref}
      className="relative py-24 px-4"
    >
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <TextScramble
            text="PROJETOS EM DESTAQUE"
            as="h2"
            className="font-mono text-3xl sm:text-4xl font-bold text-text-primary mb-4"
          />
          <p
            className={`text-text-secondary max-w-2xl mx-auto transition-all duration-700 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Uma seleção de projetos que demonstram minha experiência em desenvolvimento 
            FullStack, Machine Learning e sistemas embarcados.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {PROJECTS.map((project, index) => (
            <div
              key={project.title}
              className={`transition-all duration-700 h-full ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/Nelson-esilva"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-neon-green font-mono hover:underline"
            data-cursor-hover
          >
            Ver mais no GitHub
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
};
