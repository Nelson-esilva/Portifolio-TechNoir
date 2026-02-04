import { useState, useEffect, useCallback } from 'react';

interface UseTypeWriterOptions {
  text: string;
  speed?: number;
  delay?: number;
  startOnMount?: boolean;
}

interface UseTypeWriterReturn {
  displayText: string;
  isTyping: boolean;
  isComplete: boolean;
  start: () => void;
  reset: () => void;
}

export const useTypeWriter = ({
  text,
  speed = 50,
  delay = 0,
  startOnMount = true,
}: UseTypeWriterOptions): UseTypeWriterReturn => {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  const start = useCallback(() => {
    if (hasStarted) return;
    setHasStarted(true);
    setIsTyping(true);
    setIsComplete(false);
    setDisplayText('');

    let currentIndex = 0;
    
    const typeNextChar = () => {
      if (currentIndex < text.length) {
        setDisplayText(text.slice(0, currentIndex + 1));
        currentIndex++;
        setTimeout(typeNextChar, speed);
      } else {
        setIsTyping(false);
        setIsComplete(true);
      }
    };

    setTimeout(typeNextChar, delay);
  }, [text, speed, delay, hasStarted]);

  const reset = useCallback(() => {
    setDisplayText('');
    setIsTyping(false);
    setIsComplete(false);
    setHasStarted(false);
  }, []);

  useEffect(() => {
    if (startOnMount) {
      start();
    }
  }, [startOnMount, start]);

  return {
    displayText,
    isTyping,
    isComplete,
    start,
    reset,
  };
};
