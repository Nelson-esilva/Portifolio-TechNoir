import type { ComponentType } from 'react';
import {
  SiPhp,
  SiDocker,
  SiGit,
  SiPython,
  SiTensorflow,
  SiApachespark,
  SiAngular,
  SiTypescript,
  SiDjango,
  SiPostgresql,
  SiPytorch,
  SiOpencv,
  SiBlender,
  SiC,
  SiReact,
  SiTailwindcss,
  SiNextdotjs,
  SiLinux,
  SiScikitlearn,
  SiFlask,
  SiNodedotjs,
  SiNestjs,
  SiMysql,
  SiSqlite,
  SiGithub,
  SiJavascript,
} from 'react-icons/si';
import {
  Globe,
  Database,
  Brain,
  Cpu,
  Network,
  ClipboardList,
  Truck,
  FileText,
  Eye,
  Users,
  Layers,
  Zap,
  Server,
  Terminal,
} from 'lucide-react';

type IconProps = { className?: string; style?: React.CSSProperties };

interface TechEntry {
  icon: ComponentType<IconProps>;
  color: string;
}

const TECH_MAP: Record<string, TechEntry> = {
  'php':                         { icon: SiPhp,           color: '#777BB4' },
  'docker':                      { icon: SiDocker,        color: '#2496ED' },
  'git':                         { icon: SiGit,           color: '#F05032' },
  'github':                      { icon: SiGithub,        color: '#E0E0E0' },
  'python':                      { icon: SiPython,        color: '#3776AB' },
  'tensorflow':                  { icon: SiTensorflow,    color: '#FF6F00' },
  'apache spark':                { icon: SiApachespark,   color: '#E25A1C' },
  'angularjs':                   { icon: SiAngular,       color: '#F50505' },
  'angular':                     { icon: SiAngular,       color: '#DD0031' },
  'typescript':                  { icon: SiTypescript,     color: '#3178C6' },
  'javascript':                  { icon: SiJavascript,    color: '#F7DF1E' },
  'django':                      { icon: SiDjango,        color: '#44B78B' },
  'postgresql':                  { icon: SiPostgresql,    color: '#4169E1' },
  'pytorch':                     { icon: SiPytorch,       color: '#EE4C2C' },
  'opencv':                      { icon: SiOpencv,        color: '#5C3EE8' },
  'blender':                     { icon: SiBlender,       color: '#E87D0D' },
  'c':                           { icon: SiC,             color: '#A8B9CC' },
  'react':                       { icon: SiReact,         color: '#61DAFB' },
  'tailwind css':                { icon: SiTailwindcss,   color: '#06B6D4' },
  'next.js':                     { icon: SiNextdotjs,     color: '#E0E0E0' },
  'linux':                       { icon: SiLinux,         color: '#FCC624' },
  'scikit-learn':                { icon: SiScikitlearn,   color: '#F7931E' },
  'flask':                       { icon: SiFlask,         color: '#E0E0E0' },
  'node.js':                     { icon: SiNodedotjs,     color: '#5FA04E' },
  'nest.js':                     { icon: SiNestjs,        color: '#E0234E' },
  'fastapi':                     { icon: SiPython,        color: '#009688' },
  'mysql':                       { icon: SiMysql,         color: '#4479A1' },
  'sqlite':                      { icon: SiSqlite,        color: '#003B57' },
  'sql server':                  { icon: Database,        color: '#CC2927' },
  'sqlserver':                   { icon: Database,        color: '#CC2927' },
  'rest apis':                   { icon: Globe,           color: '#6BCB77' },
  'apis restful':                { icon: Globe,           color: '#6BCB77' },
  'lstms':                       { icon: Brain,           color: '#A78BFA' },
  'eletrônica analógica/digital':{ icon: Cpu,             color: '#60A5FA' },
  'eletrônica analógica':        { icon: Cpu,             color: '#60A5FA' },
  'eletrônica digital':          { icon: Cpu,             color: '#60A5FA' },
  'sistemas embarcados':         { icon: Cpu,             color: '#34D399' },
  'redes tcp/ip':                { icon: Network,         color: '#38BDF8' },
  'yolov8':                      { icon: Eye,             color: '#FF6F91' },
  'yolov4':                      { icon: Eye,             color: '#FF6F91' },
  'gestão de projetos':          { icon: ClipboardList,   color: '#FBBF24' },
  'logística':                   { icon: Truck,           color: '#FB923C' },
  'e-law':                       { icon: FileText,        color: '#94A3B8' },
  'pthread':                     { icon: Layers,          color: '#A78BFA' },
  'sistemas multiagente':        { icon: Users,           color: '#818CF8' },
  'ci/cd':                       { icon: Zap,             color: '#FBBF24' },
  'redes neurais':               { icon: Brain,           color: '#A78BFA' },
  'séries temporais':            { icon: Brain,           color: '#A78BFA' },
  'protocolos & infraestrutura': { icon: Network,         color: '#38BDF8' },
  'circuitos & sensores':        { icon: Cpu,             color: '#60A5FA' },
  'fpga & lógica':               { icon: Cpu,             color: '#60A5FA' },
  'firmware & iot':              { icon: Cpu,             color: '#34D399' },
  'containerização':             { icon: SiDocker,        color: '#2496ED' },
  'controle de versão':          { icon: SiGit,           color: '#F05032' },
  'servidores & cli':            { icon: SiLinux,         color: '#FCC624' },
  'integração de sistemas':      { icon: Globe,           color: '#6BCB77' },
  'deploy automatizado':         { icon: Zap,             color: '#FBBF24' },
  'ml clássico':                 { icon: SiScikitlearn,   color: '#F7931E' },
  'visão computacional':         { icon: Eye,             color: '#FF6F91' },
  'deep learning':               { icon: Brain,           color: '#A78BFA' },
  'openplc':                     { icon: Cpu,             color: '#4CAF50' },
  'shell script':                { icon: Terminal,        color: '#4EAA25' },
};

const FALLBACK: TechEntry = { icon: Server, color: '#94A3B8' };

export function getTechEntry(techName: string): TechEntry {
  return TECH_MAP[techName.toLowerCase()] ?? FALLBACK;
}

export function getTechIcon(techName: string): ComponentType<IconProps> | null {
  return TECH_MAP[techName.toLowerCase()]?.icon ?? null;
}

export function getTechColor(techName: string): string {
  return TECH_MAP[techName.toLowerCase()]?.color ?? FALLBACK.color;
}

export function TechIcon({ name, className = 'w-3 h-3', colored = false }: {
  name: string;
  className?: string;
  colored?: boolean;
}) {
  const entry = getTechEntry(name);
  const Icon = entry.icon;
  return <Icon className={className} style={colored ? { color: entry.color } : undefined} />;
}
