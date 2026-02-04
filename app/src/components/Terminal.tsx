import { useState, useEffect } from 'react';

interface TerminalLine {
  type: 'command' | 'output';
  text: string;
  delay?: number;
}

const TERMINAL_LINES: TerminalLine[] = [
  { type: 'command', text: '$ whoami', delay: 500 },
  { type: 'output', text: 'nelson_emeliano', delay: 300 },
  { type: 'command', text: '$ cat profile.txt', delay: 600 },
  { type: 'output', text: 'FullStack Developer | ML Specialist | Embedded Systems Enthusiast', delay: 400 },
  { type: 'command', text: '$ ls -la skills/', delay: 700 },
  { type: 'output', text: 'drwxr-xr-x  python  django  yolov8  docker  react  pytorch', delay: 500 },
  { type: 'command', text: '$ echo $LOCATION', delay: 600 },
  { type: 'output', text: 'Manaus, AM - Brasil', delay: 300 },
];

export const Terminal = () => {
  const [visibleLines, setVisibleLines] = useState<number>(0);
  const [currentLineText, setCurrentLineText] = useState('');

  useEffect(() => {
    if (visibleLines >= TERMINAL_LINES.length) return;

    const currentLine = TERMINAL_LINES[visibleLines];
    let charIndex = 0;

    const typeChar = () => {
      if (charIndex < currentLine.text.length) {
        setCurrentLineText(currentLine.text.slice(0, charIndex + 1));
        charIndex++;
        setTimeout(typeChar, currentLine.type === 'command' ? 40 : 20);
      } else {
        setTimeout(() => {
          setVisibleLines((prev) => prev + 1);
          setCurrentLineText('');
        }, currentLine.delay || 300);
      }
    };

    const startDelay = visibleLines === 0 ? 800 : 200;
    const timeout = setTimeout(typeChar, startDelay);

    return () => clearTimeout(timeout);
  }, [visibleLines]);

  return (
    <div className="terminal-window w-full max-w-2xl mx-auto">
      {/* Terminal Header */}
      <div className="terminal-header">
        <div className="flex items-center gap-2">
          <div className="terminal-dot bg-red-500" />
          <div className="terminal-dot bg-yellow-500" />
          <div className="terminal-dot bg-green-500" />
        </div>
        <span className="ml-4 text-xs text-text-muted font-mono">nelson@portfolio:~</span>
      </div>

      {/* Terminal Body */}
      <div className="terminal-body min-h-[280px]">
        {TERMINAL_LINES.slice(0, visibleLines).map((line, index) => (
          <div key={index} className="mb-1">
            {line.type === 'command' ? (
              <span className="text-neon-green">{line.text}</span>
            ) : (
              <span className="text-text-primary">{line.text}</span>
            )}
          </div>
        ))}
        
        {visibleLines < TERMINAL_LINES.length && (
          <div className="flex items-center">
            <span className="text-neon-green">
              {currentLineText}
              <span className="animate-pulse">_</span>
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
