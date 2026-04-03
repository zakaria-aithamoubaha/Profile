// src/components/Hero.tsx
import { Mail, Phone, Linkedin, Github, MapPin } from 'lucide-react';
import { Content, personalInfo } from '@/data/content';

interface HeroProps {
  content: Content;
  onCopy: (text: string) => void;
}

export default function Hero({ content, onCopy }: HeroProps) {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl w-full mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* ── Text column ─────────────────────────────────────────── */}
          <div className="order-2 md:order-1 space-y-6 animate-fade-up">
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-[#1a1a1a] leading-tight">
              {content.hero.name}
            </h1>

            <p className="font-body text-xl md:text-2xl text-[#049fd9] font-medium">
              {content.hero.title}
            </p>

            <div className="flex items-center gap-2 text-[#6b6b6b]">
              <MapPin className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
              <span className="font-body">{content.hero.location}</span>
            </div>

            {/* ── Contact buttons ────────────────────────────────────── */}
            <div className="flex flex-wrap gap-4 pt-4">
              <button
                type="button"
                onClick={() => onCopy(personalInfo.email)}
                aria-label={`Copy email address: ${personalInfo.email}`}
                className="flex items-center gap-2 px-4 py-2 bg-[#049fd9] text-white rounded-lg hover:bg-[#037bb5] transition-all hover:shadow-lg active:scale-[0.98] font-body"
              >
                <Mail className="w-4 h-4" aria-hidden="true" />
                <span>Email</span>
              </button>

              <button
                type="button"
                onClick={() => onCopy(personalInfo.phone)}
                aria-label={`Copy phone number: ${personalInfo.phone}`}
                className="flex items-center gap-2 px-4 py-2 border-2 border-[#049fd9] text-[#049fd9] rounded-lg hover:bg-[#049fd9] hover:text-white transition-all hover:shadow-lg active:scale-[0.98] font-body"
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                <span>Phone</span>
              </button>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile (opens in new tab)"
                className="flex items-center gap-2 px-4 py-2 border-2 border-[#e5e5e5] text-[#1a1a1a] rounded-lg hover:border-[#049fd9] hover:text-[#049fd9] transition-all hover:shadow-lg active:scale-[0.98] font-body"
              >
                <Linkedin className="w-4 h-4" aria-hidden="true" />
                <span>LinkedIn</span>
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile (opens in new tab)"
                className="flex items-center gap-2 px-4 py-2 border-2 border-[#e5e5e5] text-[#1a1a1a] rounded-lg hover:border-[#049fd9] hover:text-[#049fd9] transition-all hover:shadow-lg active:scale-[0.98] font-body"
              >
                <Github className="w-4 h-4" aria-hidden="true" />
                <span>GitHub</span>
              </a>
            </div>
          </div>

          {/* ── Photo column ────────────────────────────────────────── */}
          <div
            className="order-1 md:order-2 flex justify-center animate-fade-up"
            style={{ animationDelay: '0.1s' }}
          >
            <div className="relative">
              {/* Decorative blur glow */}
              <div
                className="absolute inset-0 bg-[#049fd9] rounded-full blur-2xl opacity-20"
                aria-hidden="true"
              />
              <img
                // BASE_URL handles the GitHub Pages subpath correctly in
                // both development (/) and production (/Portfolio/)
                src={`${import.meta.env.BASE_URL}${personalInfo.photo}`}
                alt={`Portrait of ${personalInfo.name}`}
                width={320}
                height={320}
                // The hero image is above the fold → eager load (no lazy)
                loading="eager"
                decoding="async"
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-2xl border-4 border-white"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
