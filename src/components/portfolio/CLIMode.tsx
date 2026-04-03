// src/components/CLIMode.tsx
import { useState, useEffect, useRef, useCallback } from 'react';
import { X } from 'lucide-react';
import {
  Content,
  Language,
  personalInfo,
  skills,
  experiences,
  education,
  certifications,
} from '@/data/content';

// ── Types ──────────────────────────────────────────────────────────────────
type OutputLineType = 'command' | 'output' | 'error';
interface OutputLine {
  type: OutputLineType;
  text: string;
}

interface CLIModeProps {
  content: Content;
  language: Language;
  onLanguageChange: (lang: Language) => void;
  onExit: () => void;
}

// Tab-completable commands (static — defined outside component to avoid
// re-allocation on every render)
const COMMANDS = [
  'about', 'skills', 'experience', 'education',
  'certifications', 'contact', 'lang', 'help', 'clear', 'exit',
] as const;

const SEPARATOR: OutputLine = {
  type: 'output',
  text: '═══════════════════════════════════════',
};
const BLANK: OutputLine = { type: 'output', text: '' };

// ── Component ──────────────────────────────────────────────────────────────
export default function CLIMode({
  content,
  language,
  onLanguageChange,
  onExit,
}: CLIModeProps) {
  const [input, setInput] = useState('');
  const [cmdHistory, setCmdHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [outputLines, setOutputLines] = useState<OutputLine[]>([
    { type: 'output', text: content.cli.welcome },
  ]);

  const inputRef = useRef<HTMLInputElement>(null);
  const outputRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom whenever output changes
  useEffect(() => {
    outputRef.current?.scrollTo({ top: outputRef.current.scrollHeight });
  }, [outputLines]);

  // Keep focus on the input so the terminal always captures typing
  useEffect(() => {
    inputRef.current?.focus();
  }, [outputLines]);

  // Global Escape key exits the CLI
  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onExit();
    };
    window.addEventListener('keydown', handleGlobalKeyDown);
    return () => window.removeEventListener('keydown', handleGlobalKeyDown);
  }, [onExit]);

  // ── Command Handler ──────────────────────────────────────────────────────
  // FIX: previously used direct state references inside setState calls
  // (e.g. `setOutput([...output, ...])`), which caused stale-closure bugs
  // when React batched multiple state updates in the same render cycle.
  // All state mutations now use functional updaters or are batched into a
  // single setOutputLines call to guarantee consistency.
  const handleCommand = useCallback(
    (cmd: string) => {
      const trimmed = cmd.trim();
      if (!trimmed) return;

      const lower = trimmed.toLowerCase();
      const args = lower.split(' ');
      const command = args[0];

      // Append to command history (functional updater — no stale closure)
      setCmdHistory((prev) => [...prev, lower]);
      setHistoryIndex(-1);
      setInput('');

      // Build all new lines for this command in one pass, then push once
      const commandLine: OutputLine = { type: 'command', text: `$ ${trimmed}` };
      const response: OutputLine[] = buildResponse(command, args);

      setOutputLines((prev) => [...prev, commandLine, ...response]);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [content, language, onLanguageChange, onExit],
  );

  // Separates response-building from state mutation for testability
  function buildResponse(command: string, args: string[]): OutputLine[] {
    switch (command) {
      case 'help':
        return [
          BLANK,
          { type: 'output', text: `${content.cli.help}:` },
          { type: 'output', text: `  about          - ${content.nav.about}` },
          { type: 'output', text: `  skills         - ${content.nav.skills}` },
          { type: 'output', text: `  experience     - ${content.nav.experience}` },
          { type: 'output', text: `  education      - ${content.nav.education}` },
          { type: 'output', text: `  certifications - ${content.nav.certifications}` },
          { type: 'output', text: `  contact        - ${content.nav.contact}` },
          { type: 'output', text: '  lang [en|it]   - Change language' },
          { type: 'output', text: '  clear          - Clear terminal' },
          { type: 'output', text: '  exit           - Exit CLI mode' },
          BLANK,
        ];

      case 'about':
        return [
          BLANK, SEPARATOR,
          { type: 'output', text: content.about.title.toUpperCase() },
          SEPARATOR, BLANK,
          { type: 'output', text: content.about.description },
          BLANK,
        ];

      case 'skills':
        return [
          BLANK, SEPARATOR,
          { type: 'output', text: content.skills.title.toUpperCase() },
          SEPARATOR, BLANK,
          ...skills.map((s) => ({ type: 'output' as const, text: `  • ${s}` })),
          BLANK,
        ];

      case 'experience': {
        const expList = experiences[language];
        return [
          BLANK, SEPARATOR,
          { type: 'output', text: content.experience.title.toUpperCase() },
          SEPARATOR,
          ...expList.flatMap((exp) => [
            BLANK,
            { type: 'output' as const, text: exp.title },
            { type: 'output' as const, text: `${exp.company} | ${exp.location}` },
            { type: 'output' as const, text: exp.period },
            BLANK,
            ...exp.description.map((d) => ({ type: 'output' as const, text: `  • ${d}` })),
          ]),
          BLANK,
        ];
      }

      case 'education': {
        const eduList = education[language];
        return [
          BLANK, SEPARATOR,
          { type: 'output', text: content.education.title.toUpperCase() },
          SEPARATOR,
          ...eduList.flatMap((edu) => [
            BLANK,
            { type: 'output' as const, text: edu.degree },
            { type: 'output' as const, text: edu.institution },
            { type: 'output' as const, text: `${edu.location} | ${edu.period}` },
            { type: 'output' as const, text: edu.description },
          ]),
          BLANK,
        ];
      }

      case 'certifications':
        return [
          BLANK, SEPARATOR,
          { type: 'output', text: content.certifications.title.toUpperCase() },
          SEPARATOR, BLANK,
          ...certifications.map((cert) => ({
            type: 'output' as const,
            text: `  • ${cert.name}\n    ${cert.issuer} | ${cert.date}`,
          })),
          BLANK,
        ];

      case 'contact':
        return [
          BLANK, SEPARATOR,
          { type: 'output', text: content.contact.title.toUpperCase() },
          SEPARATOR, BLANK,
          { type: 'output', text: `  Email:    ${personalInfo.email}` },
          { type: 'output', text: `  Phone:    ${personalInfo.phone}` },
          { type: 'output', text: `  LinkedIn: ${personalInfo.linkedin}` },
          { type: 'output', text: `  GitHub:   ${personalInfo.github}` },
          BLANK,
        ];

      case 'lang':
        if (args[1] === 'en' || args[1] === 'it') {
          // Defer the language change so the response renders first
          setTimeout(() => onLanguageChange(args[1] as Language), 0);
          return [
            BLANK,
            { type: 'output', text: `${content.cli.languageChanged} ${args[1].toUpperCase()}` },
            BLANK,
          ];
        }
        return [{ type: 'error', text: '\nUsage: lang [en|it]\n' }];

      case 'clear':
        // Replace entire output instead of appending
        setOutputLines([]);
        return [];

      case 'exit':
        onExit();
        return [];

      default:
        return [
          BLANK,
          { type: 'error', text: content.cli.commandNotFound },
          BLANK,
        ];
    }
  }

  // ── Keyboard Navigation ──────────────────────────────────────────────────
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    switch (e.key) {
      case 'Enter':
        handleCommand(input);
        break;

      case 'ArrowUp':
        e.preventDefault();
        if (cmdHistory.length > 0) {
          const next =
            historyIndex === -1
              ? cmdHistory.length - 1
              : Math.max(0, historyIndex - 1);
          setHistoryIndex(next);
          setInput(cmdHistory[next]);
        }
        break;

      case 'ArrowDown':
        e.preventDefault();
        if (historyIndex !== -1) {
          const next = historyIndex + 1;
          if (next >= cmdHistory.length) {
            setHistoryIndex(-1);
            setInput('');
          } else {
            setHistoryIndex(next);
            setInput(cmdHistory[next]);
          }
        }
        break;

      case 'Tab': {
        e.preventDefault();
        const matches = COMMANDS.filter((cmd) =>
          cmd.startsWith(input.toLowerCase()),
        );
        if (matches.length === 1) setInput(matches[0]);
        break;
      }
    }
  };

  // ── Render ───────────────────────────────────────────────────────────────
  return (
    <div
      role="application"
      aria-label="Portfolio terminal"
      className="fixed inset-0 z-50 bg-[#0a0e14] font-mono text-[#e6e6e6] flex flex-col"
      // Clicking anywhere in the terminal re-focuses the input
      onClick={() => inputRef.current?.focus()}
    >
      {/* Title bar */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-[#1a1e24]">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#ff6b9d]" aria-hidden="true" />
          <span className="w-3 h-3 rounded-full bg-[#ffaa33]" aria-hidden="true" />
          <span className="w-3 h-3 rounded-full bg-[#33ff88]" aria-hidden="true" />
          <span className="ml-4 text-sm text-[#6b6b6b]">zakaria@portfolio:~$</span>
        </div>
        <button
          onClick={onExit}
          className="p-2 hover:bg-[#1a1e24] rounded transition-colors"
          aria-label="Exit CLI mode (Escape)"
          title="Exit CLI Mode (ESC)"
        >
          <X className="w-5 h-5" aria-hidden="true" />
        </button>
      </div>

      {/* Output area */}
      <div
        ref={outputRef}
        role="log"
        aria-live="polite"
        aria-label="Terminal output"
        className="flex-1 overflow-y-auto px-6 py-4 space-y-1"
      >
        {outputLines.map((line, index) => (
          <div
            key={index}
            className={
              line.type === 'command'
                ? 'text-[#66d9ef]'
                : line.type === 'error'
                ? 'text-[#ff6b9d]'
                : 'text-[#e6e6e6]'
            }
          >
            {line.text}
          </div>
        ))}
      </div>

      {/* Input row */}
      <div className="px-6 py-4 border-t border-[#1a1e24] flex items-center gap-2">
        <span className="text-[#ffaa33]" aria-hidden="true">
          user@zakaria-cv:~$
        </span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 bg-transparent outline-none text-[#66d9ef] caret-transparent"
          aria-label="Terminal input"
          autoComplete="off"
          spellCheck={false}
          autoFocus
        />
        {/* Blinking cursor */}
        <span className="animate-blink select-none text-[#66d9ef]" aria-hidden="true">
          _
        </span>
      </div>
    </div>
  );
}
