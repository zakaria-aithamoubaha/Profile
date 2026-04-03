import { useState, useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { Content, Language, personalInfo, skills, experiences, education, certifications, languages } from '@/data/content';

interface CLIModeProps {
  content: Content;
  language: Language;
  onLanguageChange: (lang: Language) => void;
  onExit: () => void;
}

export default function CLIMode({ content, language, onLanguageChange, onExit }: CLIModeProps) {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>([]);
  const [output, setOutput] = useState<Array<{ type: 'command' | 'output' | 'error'; text: string }>>([
    { type: 'output', text: content.cli.welcome },
  ]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const outputRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
    outputRef.current?.scrollTo(0, outputRef.current.scrollHeight);
  }, [output]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onExit();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onExit]);

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    if (!trimmedCmd) return;

    setHistory([...history, trimmedCmd]);
    setHistoryIndex(-1);
    setOutput([...output, { type: 'command', text: `$ ${cmd}` }]);

    const args = trimmedCmd.split(' ');
    const command = args[0];

    switch (command) {
      case 'help':
        addOutput([
          { type: 'output', text: '\n' + content.cli.help + ':' },
          { type: 'output', text: '  about       - ' + content.nav.about },
          { type: 'output', text: '  skills      - ' + content.nav.skills },
          { type: 'output', text: '  experience  - ' + content.nav.experience },
          { type: 'output', text: '  education   - ' + content.nav.education },
          { type: 'output', text: '  certifications - ' + content.nav.certifications },
          { type: 'output', text: '  contact     - ' + content.nav.contact },
          { type: 'output', text: '  lang [en|it] - Change language' },
          { type: 'output', text: '  clear       - Clear terminal' },
          { type: 'output', text: '  exit        - Exit CLI mode\n' },
        ]);
        break;

      case 'about':
        addOutput([
          { type: 'output', text: '\n═══════════════════════════════════════' },
          { type: 'output', text: content.about.title.toUpperCase() },
          { type: 'output', text: '═══════════════════════════════════════\n' },
          { type: 'output', text: content.about.description + '\n' },
        ]);
        break;

      case 'skills':
        addOutput([
          { type: 'output', text: '\n═══════════════════════════════════════' },
          { type: 'output', text: content.skills.title.toUpperCase() },
          { type: 'output', text: '═══════════════════════════════════════\n' },
          ...skills.map(skill => ({ type: 'output' as const, text: '  • ' + skill })),
          { type: 'output', text: '\n' },
        ]);
        break;

      case 'experience':
        const expList = experiences[language];
        addOutput([
          { type: 'output', text: '\n═══════════════════════════════════════' },
          { type: 'output', text: content.experience.title.toUpperCase() },
          { type: 'output', text: '═══════════════════════════════════════\n' },
          ...expList.flatMap(exp => [
            { type: 'output' as const, text: `\n${exp.title}` },
            { type: 'output' as const, text: `${exp.company} | ${exp.location}` },
            { type: 'output' as const, text: `${exp.period}\n` },
            ...exp.description.map(desc => ({ type: 'output' as const, text: '  • ' + desc })),
          ]),
          { type: 'output', text: '\n' },
        ]);
        break;

      case 'education':
        const eduList = education[language];
        addOutput([
          { type: 'output', text: '\n═══════════════════════════════════════' },
          { type: 'output', text: content.education.title.toUpperCase() },
          { type: 'output', text: '═══════════════════════════════════════\n' },
          ...eduList.flatMap(edu => [
            { type: 'output' as const, text: `\n${edu.degree}` },
            { type: 'output' as const, text: `${edu.institution}` },
            { type: 'output' as const, text: `${edu.location} | ${edu.period}` },
            { type: 'output' as const, text: `${edu.description}\n` },
          ]),
          { type: 'output', text: '\n' },
        ]);
        break;

      case 'certifications':
        addOutput([
          { type: 'output', text: '\n═══════════════════════════════════════' },
          { type: 'output', text: content.certifications.title.toUpperCase() },
          { type: 'output', text: '═══════════════════════════════════════\n' },
          ...certifications.map(cert => ({ 
            type: 'output' as const, 
            text: `  • ${cert.name}\n    ${cert.issuer} | ${cert.date}` 
          })),
          { type: 'output', text: '\n' },
        ]);
        break;

      case 'contact':
        addOutput([
          { type: 'output', text: '\n═══════════════════════════════════════' },
          { type: 'output', text: content.contact.title.toUpperCase() },
          { type: 'output', text: '═══════════════════════════════════════\n' },
          { type: 'output', text: `  Email:    ${personalInfo.email}` },
          { type: 'output', text: `  Phone:    ${personalInfo.phone}` },
          { type: 'output', text: `  LinkedIn: ${personalInfo.linkedin}` },
          { type: 'output', text: `  GitHub:   ${personalInfo.github}\n` },
        ]);
        break;

      case 'lang':
        if (args[1] === 'en' || args[1] === 'it') {
          onLanguageChange(args[1] as Language);
          addOutput([
            { type: 'output', text: `\n${content.cli.languageChanged} ${args[1].toUpperCase()}\n` },
          ]);
        } else {
          addOutput([
            { type: 'error', text: '\nUsage: lang [en|it]\n' },
          ]);
        }
        break;

      case 'clear':
        setOutput([]);
        break;

      case 'exit':
        onExit();
        break;

      default:
        addOutput([
          { type: 'error', text: `\n${content.cli.commandNotFound}\n` },
        ]);
    }

    setInput('');
  };

  const addOutput = (newOutput: Array<{ type: 'command' | 'output' | 'error'; text: string }>) => {
    setOutput(prev => [...prev, ...newOutput]);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(input);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (history.length > 0) {
        const newIndex = historyIndex === -1 ? history.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setInput(history[newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex !== -1) {
        const newIndex = historyIndex + 1;
        if (newIndex >= history.length) {
          setHistoryIndex(-1);
          setInput('');
        } else {
          setHistoryIndex(newIndex);
          setInput(history[newIndex]);
        }
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const commands = ['about', 'skills', 'experience', 'education', 'certifications', 'contact', 'lang', 'help', 'clear', 'exit'];
      const matches = commands.filter(cmd => cmd.startsWith(input.toLowerCase()));
      if (matches.length === 1) {
        setInput(matches[0]);
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#0a0e14] font-mono text-[#e6e6e6] flex flex-col">
      <div className="flex items-center justify-between px-6 py-4 border-b border-[#1a1e24]">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#ff6b9d]"></div>
          <div className="w-3 h-3 rounded-full bg-[#ffaa33]"></div>
          <div className="w-3 h-3 rounded-full bg-[#33ff88]"></div>
          <span className="ml-4 text-sm text-[#6b6b6b]">zakaria@portfolio:~$</span>
        </div>
        <button
          onClick={onExit}
          className="p-2 hover:bg-[#1a1e24] rounded transition-colors"
          title="Exit CLI Mode (ESC)"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <div ref={outputRef} className="flex-1 overflow-y-auto px-6 py-4 space-y-1">
        {output.map((line, index) => (
          <div
            key={index}
            className={`${
              line.type === 'command'
                ? 'text-[#66d9ef]'
                : line.type === 'error'
                ? 'text-[#ff6b9d]'
                : 'text-[#e6e6e6]'
            }`}
          >
            {line.text}
          </div>
        ))}
      </div>

      <div className="px-6 py-4 border-t border-[#1a1e24] flex items-center gap-2">
        <span className="text-[#ffaa33]">user@zakaria-cv:~$</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 bg-transparent outline-none text-[#66d9ef]"
          autoFocus
        />
        <span className="animate-blink">_</span>
      </div>
    </div>
  );
}
