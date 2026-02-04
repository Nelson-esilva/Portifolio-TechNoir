import { TextScramble } from '@/components/TextScramble';
import { SkillBar } from '@/components/SkillBar';
import { useInView } from '@/hooks/useInView';

const SKILL_CATEGORIES = [
  {
    title: 'Backend & Web',
    color: 'green' as const,
    skills: [
      { name: 'Python', level: 95 },
      { name: 'Django', level: 90 },
      { name: 'Nest.js', level: 75 },
      { name: 'PHP', level: 70 },
      { name: 'PostgreSQL / SQLServer', level: 85 },
    ],
  },
  {
    title: 'Machine Learning & IA',
    color: 'purple' as const,
    skills: [
      { name: 'YOLOv8 / Visão Computacional', level: 85 },
      { name: 'PyTorch', level: 80 },
      { name: 'TensorFlow', level: 75 },
      { name: 'OpenCV', level: 90 },
      { name: 'LSTMs / Redes Neurais', level: 78 },
    ],
  },
  {
    title: 'DevOps & Ferramentas',
    color: 'cyan' as const,
    skills: [
      { name: 'Docker', level: 85 },
      { name: 'Git', level: 90 },
      { name: 'Linux', level: 80 },
      { name: 'APIs RESTful', level: 88 },
    ],
  },
  {
    title: 'Hardware & Eletrônica',
    color: 'green' as const,
    skills: [
      { name: 'Eletrônica Analógica/Digital', level: 85 },
      { name: 'Redes TCP/IP', level: 80 },
      { name: 'Sistemas Embarcados', level: 75 },
    ],
  },
];

export const Skills = () => {
  const [ref, isInView] = useInView<HTMLElement>({ threshold: 0.1 });

  return (
    <section
      id="skills"
      ref={ref}
      className="relative py-24 px-4 bg-dark-surface"
    >
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
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
            Tecnologias e ferramentas que utilizo no dia a dia para criar 
            soluções robustas e escaláveis.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {SKILL_CATEGORIES.map((category, categoryIndex) => (
            <div
              key={category.title}
              className={`p-6 bg-dark-card border border-dark-border rounded-lg transition-all duration-700 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${categoryIndex * 150}ms` }}
            >
              <h3 className="font-mono text-xl font-semibold text-text-primary mb-6 flex items-center gap-2">
                <span
                  className={`w-2 h-2 rounded-full ${
                    category.color === 'green'
                      ? 'bg-neon-green'
                      : category.color === 'purple'
                      ? 'bg-neon-purple'
                      : 'bg-neon-cyan'
                  }`}
                />
                {category.title}
              </h3>

              <div className="space-y-1">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    color={category.color}
                    delay={categoryIndex * 150 + skillIndex * 100}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div
          className={`mt-12 p-6 bg-dark-card border border-dark-border rounded-lg text-center transition-all duration-700 delay-500 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-text-muted font-mono text-sm">
            <span className="text-neon-green">$</span> always_learning --new-tech
          </p>
          <p className="text-text-secondary mt-2">
            Sempre explorando novas tecnologias e aprimorando minhas habilidades.
          </p>
        </div>
      </div>
    </section>
  );
};
