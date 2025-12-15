import { Content, languages } from '@/data/content';

interface LanguagesProps {
  content: Content;
}

export default function Languages({ content }: LanguagesProps) {
  return (
    <section id="languages" className="py-32 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-12">
          {content.languages.title}
        </h2>
        <div className="space-y-6">
          {languages.map((lang, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-body text-lg font-semibold text-[#1a1a1a]">
                  {lang.name}
                </span>
                <span className="font-body text-sm text-[#6b6b6b]">
                  {lang.level}
                </span>
              </div>
              <div className="h-3 bg-[#e5e5e5] rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#049fd9] rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${lang.proficiency}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
