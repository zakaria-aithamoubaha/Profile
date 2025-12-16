# Zakaria Ait Hamou Baha - Portfolio Website

A modern, bilingual portfolio website for a Junior Network & System Administrator, featuring a unique Command Line Interface (CLI) mode alongside a polished visual interface.

## Features

### Visual Mode
- **Bilingual Support**: Toggle between English and Italian
- **Responsive Design**: Mobile-first approach with smooth animations
- **Professional Sections**:
  - Hero with profile photo and quick contact links
  - About section with professional summary
  - Technical skills showcase
  - Work experience timeline
  - Education and training history
  - Cisco certifications display
  - Language proficiency indicators
  - Contact information with copy-to-clipboard functionality
  - 

### CLI Mode
- **Terminal Interface**: Full-screen terminal experience
- **Command System**: Navigate content via CLI commands
- **Available Commands**:
  - `about` - View professional summary
  - `skills` - List technical skills
  - `experience` - Display work history
  - `education` - Show education background
  - `certifications` - List certifications
  - `contact` - View contact information
  - `lang [en|it]` - Switch language
  - `help` - Show available commands
  - `clear` - Clear terminal output
  - `exit` - Return to visual mode
- **Command History**: Navigate previous commands with arrow keys
- **Auto-complete**: Tab completion for commands

## Design


### Visual Mode Aesthetic
- **Color Palette**:
  - Background: Warm off-white (#fafaf9)
  - Text: Deep charcoal (#1a1a1a)
  - Accent: Cisco blue (#049fd9)
  - Borders: Subtle gray (#e5e5e5)

- **Typography**:
  - Display: Space Grotesk (Bold)
  - Body: Manrope (Regular/Medium)
  - Monospace: JetBrains Mono

### CLI Mode Aesthetic
- **Color Palette**:
  - Background: Terminal black (#0a0e14)
  - Text: Off-white (#e6e6e6)
  - Prompt: Amber (#ffaa33)
  - Commands: Cyan (#66d9ef)
  - Headers: Pink (#ff6b9d)
  - Success: Terminal green (#33ff88)

## Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI (shadcn/ui)
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Routing**: React Router

## Getting Started

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```

### Build
```bash
npm run build
```

### Preview
```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── portfolio/
│   │   ├── Portfolio.tsx      # Main portfolio component
│   │   ├── Navigation.tsx     # Header navigation
│   │   ├── Hero.tsx          # Hero section
│   │   ├── About.tsx         # About section
│   │   ├── Skills.tsx        # Skills showcase
│   │   ├── Experience.tsx    # Work experience
│   │   ├── Education.tsx     # Education history
│   │   ├── Certifications.tsx # Certifications display
│   │   ├── Languages.tsx     # Language proficiency
│   │   ├── Contact.tsx       # Contact section
│   │   └── CLIMode.tsx       # Terminal interface
│   └── ui/                   # Reusable UI components
├── data/
│   └── content.ts            # Bilingual content data
└── index.css                 # Global styles

```

## Customization

### Content
Edit `src/data/content.ts` to update:
- Personal information
- Skills list
- Work experience
- Education history
- Certifications
- Language proficiency
- Bilingual content (English/Italian)

### Styling
- Global styles: `src/index.css`
- Tailwind config: `tailwind.config.js`
- Component-specific styles: Inline Tailwind classes

## License

© 2025 Zakaria Ait Hamou Baha. All rights reserved.
