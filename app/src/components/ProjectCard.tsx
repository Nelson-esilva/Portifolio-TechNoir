import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageFit?: 'cover' | 'contain';
}

export const ProjectCard = ({
  title,
  description,
  image,
  tags,
  githubUrl,
  liveUrl,
  imageFit = 'contain',
}: ProjectCardProps) => {
  return (
    <div className="project-card group h-full flex flex-col" data-cursor-hover>
      {/* Image */}
      <div className="relative h-32 lg:h-28 overflow-hidden shrink-0 bg-[#0A0A0A]">
        <img
          src={image}
          alt={title}
          className={`w-full h-full transition-transform duration-500 group-hover:scale-105 ${
            imageFit === 'cover' ? 'object-cover object-top' : 'object-contain'
          }`}
        />
        <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-dark-surface to-transparent" />
      </div>

      {/* Content */}
      <div className="p-3 lg:p-3 flex flex-col flex-1">
        <h3 className="font-mono text-sm lg:text-[13px] font-semibold text-text-primary mb-1.5 group-hover:text-neon-green transition-colors leading-tight">
          {title}
        </h3>
        
        <p className="text-xs text-text-secondary mb-3 line-clamp-2 leading-relaxed">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {tags.map((tag) => (
            <span key={tag} className="tech-tag text-[10px] px-2 py-0.5">
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-2 mt-auto">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-[10px] font-mono font-semibold border border-neon-green/30 text-neon-green rounded-md hover:bg-neon-green/10 transition-all"
              data-cursor-hover
            >
              <Github className="w-3 h-3" />
              Código
              <ExternalLink className="w-2.5 h-2.5 opacity-50 group-hover:opacity-100 transition-opacity" />
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-[10px] font-mono font-semibold border border-neon-cyan/30 text-neon-cyan rounded-md hover:bg-neon-cyan/10 transition-all"
              data-cursor-hover
            >
              <ExternalLink className="w-3 h-3" />
              Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
