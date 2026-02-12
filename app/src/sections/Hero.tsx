import { useEffect, useRef, useState } from 'react';
import { ChevronDown, Github, Linkedin, Mail, ArrowRight } from 'lucide-react';
import { DownloadCVButton } from '@/components/DownloadCVButton';
import gsap from 'gsap';

/* ───────────── role switcher data ───────────── */
const ROLES = [
  'Desenvolvedor Full Stack',
  'Especialista em Machine Learning',
  'Engenheiro Eletrônico',
  'Entusiasta de Visão Computacional',
];

/* ───────────── stats ───────────── */
const STATS = [
  { value: '3+', label: 'Anos de experiência' },
  { value: '8+', label: 'Projetos desenvolvidos' },
  { value: '8+', label: 'Tecnologias dominadas' },
];

/* ───────────── tech stack shown in code card ───────────── */
const CODE_LINES = [
  { indent: 0, content: 'const nelson = {' },
  { indent: 1, content: 'stack: {' },
  { indent: 2, content: 'backend:  ["Django", "Nest.js", "FastAPI"],' },
  { indent: 2, content: 'frontend: ["React", "TypeScript", "Tailwind"],' },
  { indent: 2, content: 'ml:       ["YOLOv8", "PyTorch", "TensorFlow"],' },
  { indent: 2, content: 'devops:   ["Docker", "Git", "Linux"],' },
  { indent: 1, content: '},' },
  { indent: 1, content: 'focus: "Criar soluções inteligentes",' },
  { indent: 1, content: 'available: true,' },
  { indent: 0, content: '};' },
];

/* ═══════════════════════════════════════════════ */

export const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const codeCardRef = useRef<HTMLDivElement>(null);
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayRole, setDisplayRole] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  /* ── role typewriter effect ── */
  useEffect(() => {
    const currentRole = ROLES[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting) {
      if (displayRole.length < currentRole.length) {
        timeout = setTimeout(() => {
          setDisplayRole(currentRole.slice(0, displayRole.length + 1));
        }, 60);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 2000);
      }
    } else {
      if (displayRole.length > 0) {
        timeout = setTimeout(() => {
          setDisplayRole(displayRole.slice(0, -1));
        }, 30);
      } else {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % ROLES.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayRole, isDeleting, roleIndex]);

  /* ── GSAP entrance animations ── */
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Left column staggered entrance
      gsap.from('[data-hero-animate]', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power3.out',
        delay: 0.3,
      });

      // Code card entrance
      gsap.from(codeCardRef.current, {
        x: 60,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 0.6,
      });

      // Code card subtle glow pulse
      gsap.to(codeCardRef.current, {
        boxShadow: '0 0 40px rgba(0,255,65,0.15), 0 0 80px rgba(0,255,65,0.05)',
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 1,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-8 pt-20 overflow-hidden"
    >
      <div className="relative z-10 w-full max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* ═══════ LEFT COLUMN ═══════ */}
          <div ref={leftColRef} className="order-2 lg:order-1">
            {/* Greeting badge */}
            <div data-hero-animate className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-neon-green/30 bg-neon-green/5 text-neon-green text-sm font-mono">
                <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse-neon" />
                Disponível para projetos
              </span>
            </div>

            {/* Name */}
            <h1 data-hero-animate className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              <span className="text-text-primary">Olá, eu sou</span>
              <br />
              <span className="text-gradient">Nelson Emeliano</span>
            </h1>

            {/* Role switcher */}
            <div data-hero-animate className="h-10 mb-6">
              <p className="text-xl sm:text-2xl font-mono text-text-secondary">
                {'> '}
                <span className="text-neon-green">{displayRole}</span>
                <span className="inline-block w-0.5 h-6 bg-neon-green ml-1 align-middle animate-pulse" />
              </p>
            </div>

            {/* Description */}
            <p data-hero-animate className="text-text-secondary text-base sm:text-lg leading-relaxed max-w-xl mb-8">
              Construo aplicações web robustas e inteligentes, do backend à interface.
              Formação em Engenharia Eletrônica com experiência em integração hardware-software,
              visão computacional e deploy de modelos de Machine Learning em produção.
            </p>

            {/* Stats row */}
            <div data-hero-animate className="flex gap-8 mb-8">
              {STATS.map((stat) => (
                <div key={stat.label} className="group">
                  <span className="block text-3xl font-bold text-neon-green font-mono group-hover:scale-110 transition-transform origin-left">
                    {stat.value}
                  </span>
                  <span className="text-xs text-text-muted uppercase tracking-wider mt-1 block">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA buttons */}
            <div data-hero-animate className="flex flex-wrap gap-4 mb-8">
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group inline-flex items-center gap-2 px-7 py-3 bg-neon-green text-dark-bg font-semibold rounded-lg hover:bg-neon-green/90 transition-all shadow-neon-sm hover:shadow-neon"
                data-cursor-hover
              >
                Ver projetos
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <DownloadCVButton variant="outline" />
            </div>

          </div>

          {/* ═══════ RIGHT COLUMN — CODE CARD ═══════ */}
          <div className="order-1 lg:order-2 relative flex justify-center">
            {/* Code editor card */}
            <div
              ref={codeCardRef}
              className="relative w-full max-w-md bg-dark-surface border border-dark-border rounded-xl overflow-hidden"
              style={{ boxShadow: '0 0 30px rgba(0,255,65,0.08)' }}
            >
              {/* Editor top bar */}
              <div className="flex items-center gap-2 px-4 py-3 bg-dark-card border-b border-dark-border">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-3 text-xs text-text-muted font-mono">profile.ts</span>
                <div className="ml-auto flex items-center gap-1">
                  <span className="text-[10px] text-text-muted/50 font-mono">TypeScript</span>
                </div>
              </div>

              {/* Code body */}
              <div className="p-5 font-mono text-sm leading-7 overflow-x-auto scrollbar-hide">
                {CODE_LINES.map((line, i) => (
                  <div key={i} className="flex">
                    {/* Line number */}
                    <span className="select-none text-text-muted/30 w-8 text-right mr-4 flex-shrink-0">
                      {i + 1}
                    </span>
                    {/* Content with indentation */}
                    <span style={{ paddingLeft: `${line.indent * 1.25}rem` }}>
                      <CodeLine content={line.content} />
                    </span>
                  </div>
                ))}
              </div>

              {/* Bottom status bar */}
              <div className="flex items-center justify-between px-4 py-1.5 bg-dark-card border-t border-dark-border text-[10px] text-text-muted/50 font-mono">
                <span>UTF-8</span>
                <span>Ln 10, Col 2</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-text-muted hover:text-neon-green transition-colors animate-bounce z-10"
        data-cursor-hover
      >
        <ChevronDown className="w-8 h-8" />
      </button>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-bg to-transparent pointer-events-none z-10" />

      {/* Decorative background elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-neon-green/3 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-neon-purple/5 rounded-full blur-[120px] pointer-events-none" />
    </section>
  );
};

/* ─── Syntax-highlighted code line ─── */
function CodeLine({ content }: { content: string }) {
  // Simple syntax coloring
  const colored = content
    // strings: everything between quotes
    .replace(
      /(".*?")/g,
      '<span class="text-neon-cyan">$1</span>'
    )
    // keywords
    .replace(
      /\b(const|let|var|true|false)\b/g,
      '<span class="text-neon-purple">$1</span>'
    )
    // property keys before ':'
    .replace(
      /^(\s*)(\w+)(\s*:\s)/,
      '$1<span class="text-text-primary">$2</span>$3'
    )
    // braces and brackets
    .replace(
      /([{}[\]])/g,
      '<span class="text-text-muted">$1</span>'
    );

  return <span dangerouslySetInnerHTML={{ __html: colored }} />;
}
