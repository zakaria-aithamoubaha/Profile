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
      title: 'IT Support & Network/System Engineer',
      location: 'Torino, Italia',
    },
    about: {
      title: 'About',
      description:
        'Passionate Junior Network & System Administrator with CCNA certification and hands-on experience in network infrastructure, Cisco technologies, and system administration. Skilled in Windows Server 2022, Linux administration, VMware virtualization, and network security. Currently pursuing a Bachelor\'s degree in Computer Science while actively expanding expertise in enterprise networking solutions.',
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
      welcome:
        'Welcome to Zakaria\'s Portfolio Terminal. Type "help" for available commands.',
      help: 'Available Commands',
      commandNotFound:
        'Command not found. Type "help" for available commands.',
      availableCommands:
        'Available commands: about, skills, experience, education, certifications, projects, contact, lang [en|it], help, clear, exit',
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
      title: 'IT Support & Sistemista di Rete',
      location: 'Torino, Italia',
    },
    about: {
      title: 'Chi Sono',
      description:
        'Appassionato Junior Network & System Administrator con certificazione CCNA ed esperienza pratica in infrastrutture di rete, tecnologie Cisco e amministrazione di sistemi. Competente in Windows Server 2022, amministrazione Linux, virtualizzazione VMware e sicurezza di rete. Attualmente sto conseguendo una Laurea Triennale in Informatica mentre espando attivamente le competenze nelle soluzioni di networking aziendale.',
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
      welcome:
        'Benvenuto nel Terminale Portfolio di Zakaria. Digita "help" per i comandi disponibili.',
      help: 'Comandi Disponibili',
      commandNotFound:
        'Comando non trovato. Digita "help" per i comandi disponibili.',
      availableCommands:
        'Comandi disponibili: about, skills, experience, education, certifications, projects, contact, lang [en|it], help, clear, exit',
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
      title: 'IT Support Specialist',
      company: 'Everience',
      location: 'Milano, Italy',
      period: 'Feb 2026 - Present',
      description: [
        'Identity Access Management: user provisioning and lifecycle management using Active Directory, Okta, and SAP IDM',
        'IT Service Management: incident, access, and request handling through ServiceNow while maintaining SLA compliance',
        'Endpoint Mobility Management: device enrollment, configuration, and security policy enforcement using Microsoft Intune, VMware AirWatch, and MDM solutions',
      ],
      technologies: [
        'Active Directory',
        'Okta',
        'SAP IDM',
        'ServiceNow',
        'Microsoft Intune',
        'VMware AirWatch',
        'MDM',
      ],
    },
    {
      title: 'Tecnico Reti',
      company: 'VMWay',
      location: 'Piedmont, Italy',
      period: 'Dec 2025 - Jan 2026',
      description: [
        'Installation and configuration of network devices for clients',
        'Rack mounting of switches, routers, and other network devices',
        'Installation and replacement of hardware modules',
        'Verification of proper functioning of installed devices',
        'Troubleshooting and network problem resolution',
        'Collaboration with remote technical teams for configuration and testing',
        'Support during activation and production phases of devices',
      ],
      technologies: ['Cisco', 'TCP/IP', 'Routing & Switching'],
    },
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
      technologies: ['Cisco', 'Cisco Meraki', 'Cisco DNA'],
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
      technologies: ['Active Directory', 'Microsoft 365', 'Windows'],
    },
  ],
  it: [
    {
      title: 'IT Support Specialist',
      company: 'Everience',
      location: 'Milano, Italia',
      period: 'Feb 2026 - Attuale',
      description: [
        'Gestione delle identità e degli accessi: provisioning utenti e gestione del ciclo di vita tramite Active Directory, Okta e SAP IDM',
        'IT Service Management: gestione di incident, accessi e richieste tramite ServiceNow garantendo il rispetto degli SLA',
        'Endpoint Mobility Management: registrazione dispositivi, configurazione e applicazione delle policy di sicurezza tramite Microsoft Intune, VMware AirWatch e soluzioni MDM',
      ],
      technologies: [
        'Active Directory',
        'Okta',
        'SAP IDM',
        'ServiceNow',
        'Microsoft Intune',
        'VMware AirWatch',
        'MDM',
      ],
    },
    {
      title: 'Tecnico Reti',
      company: 'VMWay',
      location: 'Piemonte, Italia',
      period: 'Dic 2025 - Gen 2026',
      description: [
        'Installazione e configurazione di apparati di rete presso i clienti',
        'Montaggio a rack di switch, router e dispositivi di rete',
        'Installazione e sostituzione di moduli hardware',
        'Verifica del corretto funzionamento degli apparati installati',
        'Attività di troubleshooting e risoluzione problemi di rete',
        'Collaborazione con team tecnici remoti per configurazioni e test',
        'Supporto durante le fasi di attivazione e messa in produzione degli apparati',
      ],
      technologies: ['Cisco', 'TCP/IP', 'Routing & Switching'],
    },
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
      technologies: ['Cisco', 'Cisco Meraki', 'Cisco DNA'],
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
      technologies: ['Active Directory', 'Microsoft 365', 'Windows'],
    },
  ],
};

export const education = { /* SAME AS BEFORE */ };
export const certifications = [ /* SAME AS BEFORE */ ];
export const languages = [ /* SAME AS BEFORE */ ];
