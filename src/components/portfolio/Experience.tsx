import { Content, Language, experiences } from '@/data/content';
import { Briefcase, MapPin, Calendar } from 'lucide-react';

interface ExperienceProps {
  content: Content;
  language: Language;
}

export default function Experience({ content, language }: ExperienceProps) {
  const experienceList = experiences[language];

  return (
    <section id="experience" className="py-32 px-4 bg-[#fafaf9]">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-12">
          {content.experience.title}
        </h2>
        <div className="space-y-8">
          {experienceList.map((exp, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-xl border-2 border-[#e5e5e5] hover:border-[#049fd9] hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-[#049fd9]/10 rounded-lg group-hover:bg-[#049fd9]/20 transition-colors">
                  <Briefcase className="w-6 h-6 text-[#049fd9]" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-2xl font-bold text-[#1a1a1a] mb-2">
                    {exp.title}
                  </h3>
                  <p className="font-body text-lg text-[#049fd9] font-semibold mb-3">
                    {exp.company}
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm text-[#6b6b6b] mb-4">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span className="font-body">{exp.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span className="font-body">{exp.period}</span>
                    </div>
                  </div>
                </div>
              </div>
              <ul className="space-y-2 ml-16">
                {exp.description.map((item, i) => (
                  <li key={i} className="font-body text-[#6b6b6b] flex items-start gap-2">
                    <span className="text-[#049fd9] mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
