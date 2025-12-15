import { Content, certifications } from '@/data/content';
import { Award, Calendar } from 'lucide-react';

interface CertificationsProps {
  content: Content;
}

export default function Certifications({ content }: CertificationsProps) {
  return (
    <section id="certifications" className="py-32 px-4 bg-[#fafaf9]">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-12">
          {content.certifications.title}
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="group bg-white p-6 rounded-xl border-2 border-[#e5e5e5] hover:border-[#049fd9] hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#049fd9]/10 rounded-lg group-hover:bg-[#049fd9]/20 transition-colors flex-shrink-0">
                  <Award className="w-6 h-6 text-[#049fd9]" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-display text-lg font-bold text-[#1a1a1a] mb-2 leading-tight">
                    {cert.name}
                  </h3>
                  <p className="font-body text-sm text-[#049fd9] font-semibold mb-2">
                    {cert.issuer}
                  </p>
                  <div className="flex items-center gap-1 text-sm text-[#6b6b6b]">
                    <Calendar className="w-4 h-4" />
                    <span className="font-body">{cert.date}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
