import { useEffect, useState } from 'react';
import { CustomCursor } from '@/components/CustomCursor';
import { MatrixRain } from '@/components/MatrixRain';
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/sections/Hero';
import { About } from '@/sections/About';
import { Projects } from '@/sections/Projects';
import { Skills } from '@/sections/Skills';
import { Experience } from '@/sections/Experience';
import { Research } from '@/sections/Research';
import { Education } from '@/sections/Education';
import { Contact } from '@/sections/Contact';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for smooth entry
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-dark-bg flex items-center justify-center z-50">
        <div className="font-mono text-neon-green text-xl">
          <span className="animate-pulse">Inicializando...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-dark-bg">
      {/* Custom Cursor */}
      <CustomCursor />

      {/* Matrix Rain Background (Hero only) */}
      <MatrixRain />

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Research />
        <Education />
        <Contact />
      </main>
    </div>
  );
}

export default App;
