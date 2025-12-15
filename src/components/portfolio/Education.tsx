import { Content, Language, education } from '@/data/content';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';

interface EducationProps {
  content: Content;
  language: Language;
}

export default function Education({ content, language }: EducationProps) {
  const educationList = education[language];

  return (
    <section id="education" className="py-32 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-12">
          {content.education.title}
        </h2>
        <div className="space-y-8">
          {educationList.map((edu, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-xl border-2 border-[#e5e5e5] hover:border-[#049fd9] hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#049fd9]/10 rounded-lg group-hover:bg-[#049fd9]/20 transition-colors">
                  <GraduationCap className="w-6 h-6 text-[#049fd9]" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-2xl font-bold text-[#1a1a1a] mb-2">
                    {edu.degree}
                  </h3>
                  <p className="font-body text-lg text-[#049fd9] font-semibold mb-3">
                    {edu.institution}
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm text-[#6b6b6b] mb-4">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span className="font-body">{edu.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span className="font-body">{edu.period}</span>
                    </div>
                  </div>
                  <p className="font-body text-[#6b6b6b]">
                    {edu.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
