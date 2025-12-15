import { Content, personalInfo } from '@/data/content';
import { Mail, Phone, Linkedin, Github, Copy } from 'lucide-react';

interface ContactProps {
  content: Content;
  onCopy: (text: string) => void;
}

export default function Contact({ content, onCopy }: ContactProps) {
  return (
    <section id="contact" className="py-32 px-4 bg-[#fafaf9]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-8">
          {content.contact.title}
        </h2>
        <p className="font-body text-lg text-[#6b6b6b] mb-12">
          {content.about.description.split('.')[0]}.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <button
            onClick={() => onCopy(personalInfo.email)}
            className="group flex items-center justify-between p-6 bg-white border-2 border-[#e5e5e5] rounded-xl hover:border-[#049fd9] hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-[#049fd9]/10 rounded-lg group-hover:bg-[#049fd9]/20 transition-colors">
                <Mail className="w-6 h-6 text-[#049fd9]" />
              </div>
              <div className="text-left">
                <p className="font-body text-sm text-[#6b6b6b] mb-1">Email</p>
                <p className="font-body text-sm md:text-base text-[#1a1a1a] font-medium">
                  {personalInfo.email}
                </p>
              </div>
            </div>
            <Copy className="w-5 h-5 text-[#6b6b6b] group-hover:text-[#049fd9] transition-colors" />
          </button>
          
          <button
            onClick={() => onCopy(personalInfo.phone)}
            className="group flex items-center justify-between p-6 bg-white border-2 border-[#e5e5e5] rounded-xl hover:border-[#049fd9] hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-[#049fd9]/10 rounded-lg group-hover:bg-[#049fd9]/20 transition-colors">
                <Phone className="w-6 h-6 text-[#049fd9]" />
              </div>
              <div className="text-left">
                <p className="font-body text-sm text-[#6b6b6b] mb-1">Phone</p>
                <p className="font-body text-sm md:text-base text-[#1a1a1a] font-medium">
                  {personalInfo.phone}
                </p>
              </div>
            </div>
            <Copy className="w-5 h-5 text-[#6b6b6b] group-hover:text-[#049fd9] transition-colors" />
          </button>
          
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between p-6 bg-white border-2 border-[#e5e5e5] rounded-xl hover:border-[#049fd9] hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-[#049fd9]/10 rounded-lg group-hover:bg-[#049fd9]/20 transition-colors">
                <Linkedin className="w-6 h-6 text-[#049fd9]" />
              </div>
              <div className="text-left">
                <p className="font-body text-sm text-[#6b6b6b] mb-1">LinkedIn</p>
                <p className="font-body text-sm md:text-base text-[#1a1a1a] font-medium">
                  View Profile
                </p>
              </div>
            </div>
          </a>
          
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between p-6 bg-white border-2 border-[#e5e5e5] rounded-xl hover:border-[#049fd9] hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-[#049fd9]/10 rounded-lg group-hover:bg-[#049fd9]/20 transition-colors">
                <Github className="w-6 h-6 text-[#049fd9]" />
              </div>
              <div className="text-left">
                <p className="font-body text-sm text-[#6b6b6b] mb-1">GitHub</p>
                <p className="font-body text-sm md:text-base text-[#1a1a1a] font-medium">
                  View Repositories
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
