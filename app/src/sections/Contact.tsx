import { TextScramble } from '@/components/TextScramble';
import { useInView } from '@/hooks/useInView';
import { Mail, Github, MapPin, Download, Linkedin } from 'lucide-react';

const CONTACT_INFO = [
  {
    icon: Mail,
    label: 'Email',
    value: 'nelson_em@outlook.com',
    href: 'mailto:nelson_em@outlook.com',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/Nelson-esilva',
    href: 'https://github.com/Nelson-esilva',
  },
  {
    icon: MapPin,
    label: 'Localização',
    value: 'Manaus, AM - Brasil',
    href: null,
  },
];

export const Contact = () => {
  const [ref, isInView] = useInView<HTMLElement>({ threshold: 0.2 });

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-24 px-4"
    >
      <div className="section-container">
        <div className="max-w-2xl mx-auto text-center">
          {/* Header */}
          <TextScramble
            text="VAMOS CONVERSAR"
            as="h2"
            className="font-mono text-3xl sm:text-4xl font-bold text-text-primary mb-4"
          />
          <p
            className={`text-text-secondary mb-12 transition-all duration-700 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Tem um projeto em mente ou quer trocar ideias sobre tecnologia? 
            Estou sempre aberto a novas oportunidades e colaborações.
          </p>

          {/* Contact Info */}
          <div
            className={`grid sm:grid-cols-3 gap-6 mb-12 transition-all duration-700 delay-150 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {CONTACT_INFO.map((item) => (
              <div
                key={item.label}
                className="p-4 bg-dark-card border border-dark-border rounded-lg hover:border-neon-green/50 transition-colors"
                data-cursor-hover
              >
                <item.icon className="w-6 h-6 text-neon-green mx-auto mb-3" />
                <p className="text-xs text-text-muted mb-1">{item.label}</p>
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-sm text-text-primary hover:text-neon-green transition-colors font-mono"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-sm text-text-primary font-mono">{item.value}</p>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 delay-300 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <a
              href="mailto:nelson_em@outlook.com"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-neon-green text-dark-bg font-mono font-semibold rounded hover:bg-neon-green/90 transition-colors"
              data-cursor-hover
            >
              <Mail className="w-5 h-5" />
              ENVIAR EMAIL
            </a>
            <button
              className="inline-flex items-center justify-center gap-2 px-8 py-3 border border-neon-green text-neon-green font-mono font-semibold rounded hover:bg-neon-green/10 transition-colors"
              data-cursor-hover
              onClick={() => {
                alert('Currículo disponível em breve!');
              }}
            >
              <Download className="w-5 h-5" />
              BAIXAR CV
            </button>
          </div>

          {/* Social Links */}
          <div
            className={`mt-12 flex justify-center gap-6 transition-all duration-700 delay-450 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <a
              href="https://github.com/Nelson-esilva"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-dark-card border border-dark-border rounded-full text-text-muted hover:text-neon-green hover:border-neon-green/50 transition-all"
              data-cursor-hover
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-dark-card border border-dark-border rounded-full text-text-muted hover:text-neon-green hover:border-neon-green/50 transition-all"
              data-cursor-hover
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:nelson_em@outlook.com"
              className="p-3 bg-dark-card border border-dark-border rounded-full text-text-muted hover:text-neon-green hover:border-neon-green/50 transition-all"
              data-cursor-hover
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-24 pt-8 border-t border-dark-border text-center">
        <p className="text-text-muted text-sm font-mono">
          <span className="text-neon-green">&lt;/&gt;</span> com 💚 por Nelson Emeliano
        </p>
        <p className="text-text-muted/60 text-xs mt-2">
          © {new Date().getFullYear()} - Todos os direitos reservados
        </p>
      </footer>
    </section>
  );
};
