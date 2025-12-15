import { Mail, Phone, Linkedin, Github, MapPin } from 'lucide-react';
import { personalInfo } from '@/data/content';
import { Content } from '@/data/content';

interface HeroProps {
  content: Content;
  onCopy: (text: string) => void;
}

export default function Hero({ content, onCopy }: HeroProps) {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl w-full mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 space-y-6 animate-fade-up">
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-[#1a1a1a] leading-tight">
              {content.hero.name}
            </h1>
            <p className="font-body text-xl md:text-2xl text-[#049fd9] font-medium">
              {content.hero.title}
            </p>
            <div className="flex items-center gap-2 text-[#6b6b6b]">
              <MapPin className="w-5 h-5" />
              <span className="font-body">{content.hero.location}</span>
            </div>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={() => onCopy(personalInfo.email)}
                className="flex items-center gap-2 px-4 py-2 bg-[#049fd9] text-white rounded-lg hover:bg-[#037bb5] transition-all hover:shadow-lg active:scale-[0.98] font-body"
              >
                <Mail className="w-4 h-4" />
                <span>Email</span>
              </button>
              
              <button
                onClick={() => onCopy(personalInfo.phone)}
                className="flex items-center gap-2 px-4 py-2 border-2 border-[#049fd9] text-[#049fd9] rounded-lg hover:bg-[#049fd9] hover:text-white transition-all hover:shadow-lg active:scale-[0.98] font-body"
              >
                <Phone className="w-4 h-4" />
                <span>Phone</span>
              </button>
              
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 border-2 border-[#e5e5e5] text-[#1a1a1a] rounded-lg hover:border-[#049fd9] hover:text-[#049fd9] transition-all hover:shadow-lg active:scale-[0.98] font-body"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
              
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 border-2 border-[#e5e5e5] text-[#1a1a1a] rounded-lg hover:border-[#049fd9] hover:text-[#049fd9] transition-all hover:shadow-lg active:scale-[0.98] font-body"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <div className="relative">
              <div className="absolute inset-0 bg-[#049fd9] rounded-full blur-2xl opacity-20"></div>
              <img
                src={personalInfo.photo}
                alt={personalInfo.name}
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-2xl border-4 border-white"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
