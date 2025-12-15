import { Terminal, Globe } from 'lucide-react';
import { Content, Language } from '@/data/content';
import { useState, useEffect } from 'react';

interface NavigationProps {
  content: Content;
  language: Language;
  onLanguageChange: (lang: Language) => void;
  onCLIToggle: () => void;
}

export default function Navigation({ content, language, onLanguageChange, onCLIToggle }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (window.scrollY / windowHeight) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: content.nav.about, href: '#about' },
    { label: content.nav.skills, href: '#skills' },
    { label: content.nav.experience, href: '#experience' },
    { label: content.nav.education, href: '#education' },
    { label: content.nav.certifications, href: '#certifications' },
    { label: content.nav.contact, href: '#contact' },
  ];

  return (
    <>
      <div
        className="fixed top-0 left-0 right-0 h-1 bg-[#049fd9] z-50 transition-all"
        style={{ width: `${scrollProgress}%` }}
      />
      
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-8">
              <a href="#hero" className="font-display text-xl font-bold text-[#1a1a1a]">
                ZA
              </a>
              
              <div className="hidden md:flex items-center gap-6">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="font-body text-sm text-[#6b6b6b] hover:text-[#049fd9] transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <button
                onClick={onCLIToggle}
                className="flex items-center gap-2 px-3 py-2 bg-[#0a0e14] text-[#33ff88] rounded-lg hover:bg-[#1a1e24] transition-all hover:shadow-lg active:scale-[0.98] font-mono text-sm"
                title="Toggle CLI Mode"
              >
                <Terminal className="w-4 h-4" />
                <span className="hidden sm:inline">CLI</span>
              </button>
              
              <button
                onClick={() => onLanguageChange(language === 'en' ? 'it' : 'en')}
                className="flex items-center gap-2 px-3 py-2 border-2 border-[#e5e5e5] text-[#1a1a1a] rounded-lg hover:border-[#049fd9] hover:text-[#049fd9] transition-all hover:shadow-lg active:scale-[0.98] font-body text-sm"
              >
                <Globe className="w-4 h-4" />
                <span className="font-semibold">{language.toUpperCase()}</span>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
