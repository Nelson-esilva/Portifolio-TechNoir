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
      <div className="relative h-44 overflow-hidden shrink-0 bg-[#0A0A0A]">
        <img
          src={image}
          alt={title}
          className={`w-full h-full transition-transform duration-500 group-hover:scale-105 ${
            imageFit === 'cover' ? 'object-cover object-top' : 'object-contain'
          }`}
        />
        <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-dark-surface to-transparent" />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-mono text-lg font-semibold text-text-primary mb-2 group-hover:text-neon-green transition-colors">
          {title}
        </h3>
        
        <p className="text-sm text-text-secondary mb-4 line-clamp-2">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span key={tag} className="tech-tag">
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4 mt-auto">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono font-semibold border-2 border-neon-green/30 text-neon-green rounded-lg hover:bg-neon-green/10 transition-all"
              data-cursor-hover
            >
              <Github className="w-4 h-4" />
              Código
              <ExternalLink className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" />
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono font-semibold border-2 border-neon-cyan/30 text-neon-cyan rounded-lg hover:bg-neon-cyan/10 transition-all"
              data-cursor-hover
            >
              <ExternalLink className="w-4 h-4" />
              Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
