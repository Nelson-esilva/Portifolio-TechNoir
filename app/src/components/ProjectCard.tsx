import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export const ProjectCard = ({
  title,
  description,
  image,
  tags,
  githubUrl,
  liveUrl,
}: ProjectCardProps) => {
  return (
    <div className="project-card group" data-cursor-hover>
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-surface to-transparent opacity-60" />
      </div>

      {/* Content */}
      <div className="p-5">
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
        <div className="flex gap-4">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-text-muted hover:text-neon-green transition-colors"
              data-cursor-hover
            >
              <Github className="w-4 h-4" />
              <span className="font-mono">Código</span>
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-text-muted hover:text-neon-green transition-colors"
              data-cursor-hover
            >
              <ExternalLink className="w-4 h-4" />
              <span className="font-mono">Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
