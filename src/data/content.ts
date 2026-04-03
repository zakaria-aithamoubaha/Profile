// src/data/content.ts

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

// Main content
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
      title: 'Network & IT Systems Specialist',
      location: 'Milan, Italy',
    },
    about: {
      title: 'About Me',
      description:
        "Network & IT Systems Specialist with CCNA certification and proven hands-on experience in enterprise network infrastructure, Cisco technologies, and systems administration. Proficient in Windows Server 2022, Linux administration, VMware virtualization, and network security. Currently completing a Bachelor's degree in Computer Science, with a focused drive to design and maintain reliable, scalable networking solutions.",
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
      comingSoon: 'Projects coming soon — stay tuned.',
    },
    contact: {
      title: 'Get In Touch',
      copied: 'Copied to clipboard!',
    },
    languages: {
      title: 'Languages',
    },
    cli: {
      welcome: "Welcome to Zakaria's portfolio terminal. Type \"help\" to see available commands.",
      help: 'Available Commands',
      commandNotFound: 'Command not found. Type "help" to see available commands.',
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
      title: 'Network & IT Systems Specialist',
      location: 'Milano, Italia',
    },
    about: {
      title: 'Chi Sono',
      description:
        'Network & IT Systems Specialist con certificazione CCNA ed esperienza concreta in infrastrutture di rete aziendali, tecnologie Cisco e amministrazione di sistemi. Competente in Windows Server 2022, amministrazione Linux, virtualizzazione VMware e sicurezza di rete. Attualmente in fase di completamento della Laurea Triennale in Informatica, con un forte orientamento alla progettazione e alla gestione di soluzioni di rete affidabili e scalabili.',
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
      comingSoon: 'Progetti in arrivo — prossimamente.',
    },
    contact: {
      title: 'Contattami',
      copied: 'Copiato negli appunti!',
    },
    languages: {
      title: 'Lingue',
    },
    cli: {
      welcome: 'Benvenuto nel terminale portfolio di Zakaria. Digita "help" per vedere i comandi disponibili.',
      help: 'Comandi Disponibili',
      commandNotFound: 'Comando non trovato. Digita "help" per vedere i comandi disponibili.',
      availableCommands:
        'Comandi disponibili: about, skills, experience, education, certifications, projects, contact, lang [en|it], help, clear, exit',
      languageChanged: 'Lingua cambiata in',
    },
  },
};

// Personal info
export const personalInfo = {
  name: 'Zakaria Ait Hamou Baha',
  email: 'zakariaaithamoubaha@gmail.com',
  phone: '(+39) 3519411806',
  linkedin: 'https://www.linkedin.com/in/zakaria-aithamoubaha/',
  github: 'https://github.com/zakaria-aithamoubaha/Portfolio',
  location: 'Milano, Italia',
  photo: 'profile.jpg',
};

// Skills array — FIX: renamed from skillsList → skills to match what Skills.tsx and CLIMode.tsx import
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

// Experiences by language
export const experiences = {
  en: [
    {
      title: 'IT Support Specialist',
      company: 'Everience',
      location: 'Milano, Italy',
      period: 'February 2026 - Current',
      description: [
        'Identity and Access Management: User provisioning and lifecycle management using Active Directory, Okta, and SAP IDM',
        'IT Service Management: Incident, access, and request handling through ServiceNow while maintaining SLA compliance',
        'Endpoint Mobility Management: Device enrollment, configuration, and security policy enforcement using Microsoft Intune, VMware AirWatch, and MDM solutions',
      ],
    },
    {
      title: 'Network Technician',
      company: 'VMway',
      location: 'Turin, Italy',
      period: 'December 2025 - January 2026',
      description: [
        'Installation and configuration of network devices at client sites',
        'Network troubleshooting and issue resolution',
        'Collaboration with remote technical teams for configuration and testing activities',
      ],
    },
    {
      title: 'Network Systems Administrator Intern',
      company: 'Novanext',
      location: 'Turin, Italy',
      period: 'September 2025 - October 2025',
      description: [
        'Support in monitoring corporate networks',
        'Assistance in configuring Cisco network devices',
        'Participation in installation, upgrade, and maintenance of IT systems',
        'Introductory activities on Cisco Meraki, Cisco DNA, and network infrastructures',
      ],
    },
    {
      title: 'IT Help Desk Technician',
      company: 'Groupe ISCAE',
      location: 'Rabat, Morocco',
      period: 'November 2019 - May 2020',
      description: [
        'Diagnosis and resolution of hardware and software issues, ensuring business continuity',
        'Active Directory management: user and group creation and administration',
        'User support for Microsoft 365 services',
        'Network monitoring and support in resolving connectivity and security issues',
      ],
    },
  ],
  it: [
    {
      title: 'IT Support Specialist',
      company: 'Everience',
      location: 'Milano, Italia',
      period: 'Febbraio 2026 - Attuale',
      description: [
        'Gestione delle identità e degli accessi: provisioning utenti e gestione del ciclo di vita tramite Active Directory, Okta e SAP IDM',
        'IT Service Management: gestione di incident, accessi e richieste tramite ServiceNow, garantendo il rispetto degli SLA',
        'Endpoint Mobility Management: registrazione dispositivi, configurazione e applicazione delle policy di sicurezza tramite Microsoft Intune, VMware AirWatch e soluzioni MDM',
      ],
    },
    {
      title: 'Tecnico Reti',
      company: 'VMway',
      location: 'Torino, Italia',
      period: 'Dicembre 2025 - Gennaio 2026',
      description: [
        'Installazione e configurazione di apparati di rete presso i clienti',
        'Attività di troubleshooting e risoluzione problemi di rete',
        'Collaborazione con team tecnici remoti per configurazioni e test',
      ],
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
    },
    {
      title: 'Help Desk IT',
      company: 'Groupe ISCAE',
      location: 'Rabat, Marocco',
      period: 'Novembre 2019 - Maggio 2020',
      description: [
        'Diagnosi e risoluzione di problemi hardware e software, garantendo continuità operativa',
        'Gestione di Active Directory: creazione e amministrazione utenti e gruppi',
        'Supporto e assistenza agli utenti su Microsoft 365',
        'Monitoraggio della rete e supporto nella risoluzione di problemi di connettività e sicurezza',
      ],
    },
  ],
};

// Education — FIX: added missing export that Education.tsx and CLIMode.tsx expect
// Update the entries below to match your actual education history
export const education = {
  en: [
    {
      degree: "Bachelor's Degree in Computer Science",
      institution: 'University of Verona',
      location: 'Verona, Italy',
      period: '01/10/2022 – Present',
      description:
        'Computer Architecture, Operating Systems, Programming, Software Engineering, Algorithms.',
    },
    {
      degree: 'Network Systems Technician Course',
      institution: 'Immaginazione E Lavoro',
      location: 'Turin, Italy',
      period: '31/03/2025 – 14/11/2025',
      description:
        'Network architectures and networking principles, IT security best practices, Windows & Linux systems administration, Windows Server 2022, VMware virtualization, CCNA Cisco Networking Academy.',
    },
    {
      degree: 'Specialized Technical Diploma in Computer Systems and Networks',
      institution: 'ISTA - Specialized Institute of Applied Technology',
      location: 'Rabat, Morocco',
      period: '15/09/2016 – 20/07/2018',
      description:
        'Network infrastructure implementation, Windows & Linux administration, digital infrastructure security.',
    },
  ],

  it: [
    {
      degree: 'Laurea Triennale in Informatica',
      institution: 'Università degli Studi di Verona',
      location: 'Verona, Italia',
      period: '01/10/2022 – Attuale',
      description:
        'Architettura dei calcolatori, sistemi operativi, programmazione, ingegneria del software, algoritmi.',
    },
    {
      degree: 'Corso Tecnico Sistemista di Reti',
      institution: 'Immaginazione E Lavoro',
      location: 'Torino, Italia',
      period: '31/03/2025 – 14/11/2025',
      description:
        'Architetture di rete e principi di networking, sicurezza informatica, amministrazione Windows e Linux, Windows Server 2022, virtualizzazione VMware, CCNA Cisco Networking Academy.',
    },
    {
      degree: 'Diploma Tecnico Specializzato in Sistemi e Reti Informatici',
      institution: 'Istituto Specializzato di Tecnologia Applicata',
      location: 'Rabat, Marocco',
      period: '15/09/2016 – 20/07/2018',
      description:
        "Realizzazione di infrastrutture di rete, amministrazione Windows e Linux, sicurezza delle infrastrutture digitali.",
    },
  ],
};

// Certifications
export const certifications = [
  { name: 'Cisco Black Belt – Advance Support Stage 1', issuer: 'Cisco Partner Training', date: 'October 2025' },
  { name: 'CCNA: Introduction to Networks', issuer: 'Cisco Certified', date: 'July 2025' },
  { name: 'CCNA Routing and Switching: Routing and Switching Essentials', issuer: 'Cisco Certified', date: 'July 2018' },
  { name: 'CCNA Security', issuer: 'Cisco Certified', date: 'July 2018' },
];

// Languages
export const languages = [
  { name: 'Arabic', level: 'Native', proficiency: 100 },
  { name: 'Italian', level: 'C1', proficiency: 90 },
  { name: 'English', level: 'C1', proficiency: 90 },
  { name: 'French', level: 'A2', proficiency: 40 },
];
