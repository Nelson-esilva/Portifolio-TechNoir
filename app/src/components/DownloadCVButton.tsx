import { Download, ExternalLink } from 'lucide-react';
import { CV_FILE_PATH, CV_DOWNLOAD_FILENAME } from '@/lib/constants';

type Variant = 'outline' | 'neon';

interface DownloadCVButtonProps {
  variant?: Variant;
  label?: string;
  iconSize?: string;
  className?: string;
}

const variantStyles: Record<Variant, string> = {
  outline:
    'group inline-flex items-center gap-2 px-7 py-3 border-2 border-dark-border text-text-primary font-semibold rounded-lg hover:border-neon-green/60 hover:bg-neon-green/5 transition-all',
  neon:
    'group inline-flex items-center justify-center gap-2 px-8 py-3 border-2 border-neon-green text-neon-green font-mono font-semibold rounded hover:bg-neon-green/10 transition-all',
};

export const DownloadCVButton = ({
  variant = 'outline',
  label = 'Download CV',
  iconSize = 'w-4 h-4',
  className = '',
}: DownloadCVButtonProps) => {
  return (
    <a
      href={CV_FILE_PATH}
      download={CV_DOWNLOAD_FILENAME}
      className={`${variantStyles[variant]} ${className}`}
      data-cursor-hover
    >
      <Download className={`${iconSize} group-hover:animate-bounce`} />
      {label}
      <ExternalLink className="w-3 h-3 opacity-40 group-hover:opacity-100 transition-opacity" />
    </a>
  );
};
