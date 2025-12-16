export type Language = 'en' | 'it';

export interface Content {
  nav: {
    about: string;
    skills: string;
    experience: string;
    education: string;
    certifications: string;
    projects: string;
    contact: string;
  };
  hero: {
    name: string;
    title: string;
    location: string;
  };
  about: {
    title: string;
    description: string;
  };
  skills: {
    title: string;
  };
  experience: {
    title: string;
  };
  education: {
    title: string;
  };
  certifications: {
    title: string;
  };
  projects: {
    title: string;
    comingSoon: string;
  };
  contact: {
    title: string;
    copied: string;
  };
  languages: {
    title: string;
  };
  cli: {
    welcome: string;
    help: string;
    commandNotFound: string;
    availableCommands: string;
    languageChanged: string;
  };
}

export const content: Record<Language, Content> = {
  en: {
    nav: {
      about: 'About',
      skills: 'Skills',
      experience: 'Experience',
      education: 'Education',
      certifications: 'Certifications',
      projects: 'Projects',
      contact: 'Contact',
    },
    hero: {
      name: 'Zakaria Ait Hamou Baha',
      title: 'Junior Network & System Administrator',
      location: 'Torino, Italia',
    },
    about: {
      title: 'About',
      description: 'Passionate Junior Network & System Administrator with CCNA certification and hands-on experience in network infrastructure, Cisco technologies, and system administration. Skilled in Windows Server 2022, Linux administration, VMware virtualization, and network security. Currently pursuing a Bachelor\'s degree in Computer Science while actively expanding expertise in enterprise networking solutions.',
    },
    skills: {
      title: 'Technical Skills',
    },
    experience: {
      title: 'Work Experience',
    },
    education: {
      title: 'Education & Training',
    },
    certifications: {
      title: 'Certifications',
    },
    projects: {
      title: 'Projects',
      comingSoon: 'Projects coming soon',
    },
    contact: {
      title: 'Get In Touch',
      copied: 'Copied to clipboard!',
    },
    languages: {
      title: 'Languages',
    },
    cli: {
      welcome: 'Welcome to Zakaria\'s Portfolio Terminal. Type "help" for available commands.',
      help: 'Available Commands',
      commandNotFound: 'Command not found. Type "help" for available commands.',
      availableCommands: 'Available commands: about, skills, experience, education, certifications, projects, contact, lang [en|it], help, clear, exit',
      languageChanged: 'Language changed to',
    },
  },
  it: {
    nav: {
      about: 'Chi Sono',
      skills: 'Competenze',
      experience: 'Esperienza',
      education: 'Formazione',
      certifications: 'Certificazioni',
      projects: 'Progetti',
      contact: 'Contatti',
    },
    hero: {
      name: 'Zakaria Ait Hamou Baha',
      title: 'Junior Network & System Administrator',
      location: 'Torino, Italia',
    },
    about: {
      title: 'Chi Sono',
      description: 'Appassionato Junior Network & System Administrator con certificazione CCNA ed esperienza pratica in infrastrutture di rete, tecnologie Cisco e amministrazione di sistemi. Competente in Windows Server 2022, amministrazione Linux, virtualizzazione VMware e sicurezza di rete. Attualmente sto conseguendo una Laurea Triennale in Informatica mentre espando attivamente le competenze nelle soluzioni di networking aziendale.',
    },
    skills: {
      title: 'Competenze Tecniche',
    },
    experience: {
      title: 'Esperienza Lavorativa',
    },
    education: {
      title: 'Istruzione e Formazione',
    },
    certifications: {
      title: 'Certificazioni',
    },
    projects: {
      title: 'Progetti',
      comingSoon: 'Progetti in arrivo',
    },
    contact: {
      title: 'Contattami',
      copied: 'Copiato negli appunti!',
    },
    languages: {
      title: 'Lingue',
    },
    cli: {
      welcome: 'Benvenuto nel Terminale Portfolio di Zakaria. Digita "help" per i comandi disponibili.',
      help: 'Comandi Disponibili',
      commandNotFound: 'Comando non trovato. Digita "help" per i comandi disponibili.',
      availableCommands: 'Comandi disponibili: about, skills, experience, education, certifications, projects, contact, lang [en|it], help, clear, exit',
      languageChanged: 'Lingua cambiata in',
    },
  },
};

export const personalInfo = {
  name: 'Zakaria Ait Hamou Baha',
  email: 'zakariaaithamoubaha@gmail.com',
  phone: '(+39) 3519411806',
  linkedin: 'https://www.linkedin.com/in/zakaria-aithamoubaha/',
  github: 'https://github.com/zakaria-aithamoubaha/Portfolio',
  location: 'Torino, Italia',
  photo: '/profile.jpg',
};

export const skills = [
  'Cisco Networking (CCNA)',
  'Windows Server 2022',
  'Linux Administration',
  'VMware Virtualization',
  'Network Security',
  'TCP/IP',
  'Routing & Switching',
  'Network Architecture',
  'Cisco Meraki',
  'Cisco DNA',
  'Microsoft 365',
];

export const experiences = {
  en: [
    {
      title: 'Network Systems Intern',
      company: 'Novanext',
      location: 'Torino, Italia',
      period: 'September 2025 - October 2025',
      description: [
        'Network monitoring and support for enterprise networks',
        'Configuration and maintenance of Cisco network devices',
        'Technical team collaboration for system installation, updates, and maintenance',
        'Introduction to Cisco Meraki, Cisco DNA, and network infrastructure technologies',
      ],
    },
    {
      title: 'IT Help Desk',
      company: 'Groupe ISCAE',
      location: 'Rabat, Morocco',
      period: 'November 2019 - May 2020',
      description: [
        'Hardware and software troubleshooting ensuring operational continuity',
        'Installation, configuration, and updates of drivers, applications, and IT devices',
        'Microsoft 365 user support and assistance',
        'Network monitoring and connectivity/security issue resolution',
      ],
    },
  ],
  it: [
    {
      title: 'Tirocinante Sistemista di Rete',
      company: 'Novanext',
      location: 'Torino, Italia',
      period: 'Settembre 2025 - Ottobre 2025',
      description: [
        'Supporto al monitoraggio delle reti aziendali',
        'Assistenza nella configurazione di apparati di rete Cisco',
        'Affiancamento al team tecnico per installazione, aggiornamento e manutenzione di sistemi informatici',
        'Attività introduttive su tecnologie Cisco Meraki, Cisco DNA e infrastrutture di rete',
      ],
    },
    {
      title: 'Help Desk IT',
      company: 'Groupe ISCAE',
      location: 'Rabat, Marocco',
      period: 'Novembre 2019 - Maggio 2020',
      description: [
        'Diagnosi e risoluzione di problemi hardware e software, garantendo continuità operativa',
        'Installazione, configurazione e aggiornamento di driver, applicativi e dispositivi informatici',
        'Supporto e assistenza agli utenti su Microsoft 365',
        'Monitoraggio della rete e supporto nella risoluzione di problemi di connettività e sicurezza',
      ],
    },
  ],
};

export const education = {
  en: [
    {
      degree: 'Bachelor\'s Degree in Computer Science',
      institution: 'Università degli Studi di Verona',
      location: 'Verona, Italia',
      period: 'October 2022 - Present',
      description: 'Computer Architecture, Operating Systems, Programming and Software Engineering, Algorithms',
    },
    {
      degree: 'Network Systems Technician Course',
      institution: 'Immaginazione E Lavoro',
      location: 'Torino, Italia',
      period: 'March 2025 - November 2025',
      description: 'Network architecture and networking principles, IT security and system protection best practices, Operating systems (Windows and Linux), Windows and Windows Server 2022 administration, Virtual machines and VMware virtualization, CCNA Cisco Networking Academy',
    },
    {
      degree: 'Specialized Technical Diploma in Computer Systems and Networks',
      institution: 'ISTA - Istituto Specializzato di Tecnologia Applicata',
      location: 'Rabat, Morocco',
      period: 'September 2016 - July 2018',
      description: 'Network infrastructure implementation, Windows and Linux environment administration, Digital infrastructure security',
    },
  ],
  it: [
    {
      degree: 'Laurea Triennale in Informatica',
      institution: 'Università degli Studi di Verona',
      location: 'Verona, Italia',
      period: 'Ottobre 2022 - Attuale',
      description: 'Architettura dei calcolatori, Sistemi operativi, Programmazione e ingegneria del software, Algoritmi',
    },
    {
      degree: 'Corso Tecnico Sistemista di Reti',
      institution: 'Immaginazione E Lavoro',
      location: 'Torino, Italia',
      period: 'Marzo 2025 - Novembre 2025',
      description: 'Architetture di rete e principi di networking, Sicurezza informatica e best practice di protezione dei sistemi, Sistemi operativi (Windows e Linux), Amministrazione Windows e Windows Server 2022, Utilizzo di macchine virtuali e virtualizzazione con VMware, CCNA Cisco Networking Academy',
    },
    {
      degree: 'Diploma Tecnico Specializzato in Sistemi e Reti Informatici',
      institution: 'ISTA - Istituto Specializzato di Tecnologia Applicata',
      location: 'Rabat, Marocco',
      period: 'Settembre 2016 - Luglio 2018',
      description: 'Realizzazione di un\'infrastruttura di rete, Amministrazione di un ambiente Windows e Linux, Sicurezza di un\'infrastruttura digitale',
    },
  ],
};

export const certifications = [
  {
    name: 'Cisco Black Belt – Advance Support Stage 1',
    issuer: 'Cisco Partner Training',
    date: 'October 2025',
  },
  {
    name: 'CCNA: Introduction to Networks',
    issuer: 'Cisco Certified',
    date: 'July 2025',
  },
  {
    name: 'CCNA Routing and Switching: Routing and Switching Essentials',
    issuer: 'Cisco Certified',
    date: 'July 2018',
  },
  {
    name: 'CCNA Security',
    issuer: 'Cisco Certified',
    date: 'July 2018',
  },
];

export const languages = [
  { name: 'Arabic', level: 'Native', proficiency: 100 },
  { name: 'Italian', level: 'C1', proficiency: 90 },
  { name: 'English', level: 'C1', proficiency: 90 },
  { name: 'French', level: 'A2', proficiency: 40 },
];
