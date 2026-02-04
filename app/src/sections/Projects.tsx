import { TextScramble } from '@/components/TextScramble';
import { ProjectCard } from '@/components/ProjectCard';
import { useInView } from '@/hooks/useInView';

const PROJECTS = [
  {
    title: 'Detecção de Objetos YOLOv8',
    description:
      'Sistema de visão computacional para inspeção industrial em tempo real. Detecta defeitos em linhas de produção com alta precisão usando redes neurais convolucionais.',
    image: '/project-yolo.jpg',
    tags: ['Python', 'OpenCV', 'YOLOv8', 'PyTorch'],
    githubUrl: 'https://github.com/Nelson-esilva',
  },
  {
    title: 'Sistema MES Industrial',
    description:
      'Sistema de Execução de Manufatura integrado a linhas de produção. Monitora OEE, rastreabilidade e qualidade em tempo real.',
    image: '/project-mes.jpg',
    tags: ['Django', 'PostgreSQL', 'Docker', 'React'],
    githubUrl: 'https://github.com/Nelson-esilva',
  },
  {
    title: 'Monitoramento Energético IoT',
    description:
      'Dashboard em tempo real para análise de consumo energético industrial. Integração com sensores via MQTT e visualização de métricas.',
    image: '/project-iot.jpg',
    tags: ['React', 'Node.js', 'MQTT', 'InfluxDB'],
    githubUrl: 'https://github.com/Nelson-esilva',
  },
  {
    title: 'API de Predição com LSTMs',
    description:
      'Modelo preditivo para forecast de consumo energético usando redes neurais recorrentes. API RESTful com baixa latência.',
    image: '/project-lstm.jpg',
    tags: ['PyTorch', 'FastAPI', 'Redis', 'Docker'],
    githubUrl: 'https://github.com/Nelson-esilva',
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
        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map((project, index) => (
            <div
              key={project.title}
              className={`transition-all duration-700 ${
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
