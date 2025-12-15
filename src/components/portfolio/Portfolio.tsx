import { useState } from 'react';
import { content, Language } from '@/data/content';
import { useToast } from '@/components/ui/use-toast';
import Navigation from './Navigation';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Experience from './Experience';
import Education from './Education';
import Certifications from './Certifications';
import Languages from './Languages';
import Contact from './Contact';
import CLIMode from './CLIMode';

export default function Portfolio() {
  const [language, setLanguage] = useState<Language>('en');
  const [cliMode, setCLIMode] = useState(false);
  const { toast } = useToast();

  const currentContent = content[language];

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: currentContent.contact.copied,
      duration: 2000,
    });
  };

  if (cliMode) {
    return (
      <CLIMode
        content={currentContent}
        language={language}
        onLanguageChange={setLanguage}
        onExit={() => setCLIMode(false)}
      />
    );
  }

  return (
    <div className="min-h-screen bg-[#fafaf9]">
      <Navigation
        content={currentContent}
        language={language}
        onLanguageChange={setLanguage}
        onCLIToggle={() => setCLIMode(true)}
      />
      
      <Hero content={currentContent} onCopy={handleCopy} />
      <About content={currentContent} />
      <Skills content={currentContent} />
      <Experience content={currentContent} language={language} />
      <Education content={currentContent} language={language} />
      <Certifications content={currentContent} />
      <Languages content={currentContent} />
      <Contact content={currentContent} onCopy={handleCopy} />
      
      <footer className="py-8 px-4 text-center border-t border-[#e5e5e5]">
        <p className="font-body text-sm text-[#6b6b6b]">
          © 2025 Zakaria Ait Hamou Baha. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
