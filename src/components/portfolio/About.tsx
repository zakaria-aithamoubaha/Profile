import { Content } from '@/data/content';

interface AboutProps {
  content: Content;
}

export default function About({ content }: AboutProps) {
  return (
    <section id="about" className="py-32 px-4 bg-[#fafaf9]">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-8">
          {content.about.title}
        </h2>
        <p className="font-body text-lg md:text-xl text-[#6b6b6b] leading-relaxed">
          {content.about.description}
        </p>
      </div>
    </section>
  );
}
