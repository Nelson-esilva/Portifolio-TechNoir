import { Terminal } from '@/components/Terminal';
import { ChevronDown } from 'lucide-react';

export const Hero = () => {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4">
      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto text-center">
        {/* Name */}
        <h1 className="font-mono text-4xl sm:text-5xl md:text-6xl font-bold text-text-primary mb-4">
          <span className="text-neon-green">&lt;</span>
          NELSON EMELIANO
          <span className="text-neon-green">/&gt;</span>
        </h1>

        {/* Tagline */}
        <p className="font-mono text-sm sm:text-base text-text-muted mb-8 tracking-wider">
          FullStack Developer | Machine Learning Specialist | Embedded Systems Enthusiast
        </p>

        {/* Terminal */}
        <div className="mb-12">
          <Terminal />
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-3 bg-neon-green text-dark-bg font-mono font-semibold rounded hover:bg-neon-green/90 transition-colors"
            data-cursor-hover
          >
            VER PROJETOS
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-3 border border-neon-green text-neon-green font-mono font-semibold rounded hover:bg-neon-green/10 transition-colors"
            data-cursor-hover
          >
            CONTATO
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-text-muted hover:text-neon-green transition-colors animate-bounce"
        data-cursor-hover
      >
        <ChevronDown className="w-8 h-8" />
      </button>

      {/* Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-bg to-transparent pointer-events-none" />
    </section>
  );
};
