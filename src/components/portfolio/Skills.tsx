import { Content, skills } from '@/data/content';

interface SkillsProps {
  content: Content;
}

export default function Skills({ content }: SkillsProps) {
  return (
    <section id="skills" className="py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-12">
          {content.skills.title}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group px-6 py-4 bg-white border-2 border-[#e5e5e5] rounded-lg hover:border-[#049fd9] hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <span className="font-body text-sm md:text-base text-[#1a1a1a] group-hover:text-[#049fd9] transition-colors">
                {skill}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
