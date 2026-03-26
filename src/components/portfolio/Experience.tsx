export type Language = 'en' | 'it';

export interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies?: string[]; // ✅ added
}

export interface Content {
  experience: {
    title: string;
  };
}

export const content: Record<Language, Content> = {
  en: {
    experience: {
      title: 'Work Experience',
    },
  },
  it: {
    experience: {
      title: 'Esperienza Lavorativa',
    },
  },
};

export const experiences: Record<Language, ExperienceItem[]> = {
  en: [
    {
      title: 'IT Support Specialist',
      company: 'Everience',
      location: 'Milano, Italy',
      period: 'Feb 2026 – Present',
      description: [
        'Identity Access Management (IAM): user provisioning and lifecycle management using Active Directory, Okta, and SAP IDM',
        'IT Service Management: incident, access, and request handling via ServiceNow while ensuring SLA compliance',
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
      title: 'Network Technician',
      company: 'VMWay',
      location: 'Turin, Italy',
      period: 'Dec 2025 – Jan 2026',
      description: [
        'Installation and configuration of network devices at client sites',
        'Network troubleshooting and issue resolution',
        'Collaboration with remote technical teams for configuration and testing activities',
      ],
      technologies: ['Cisco', 'TCP/IP', 'Routing & Switching'],
    },
    {
      title: 'Network Systems Administrator Intern',
      company: 'Novanext',
      location: 'Turin, Italy',
      period: 'Sep 2025 – Oct 2025',
      description: [
        'Support in monitoring corporate networks',
        'Assistance in configuring Cisco network devices',
        'Participation in installation, upgrade and maintenance of IT systems',
        'Introductory activities on Cisco Meraki, Cisco DNA and network infrastructures',
      ],
      technologies: ['Cisco', 'Cisco Meraki', 'Cisco DNA'],
    },
    {
      title: 'IT Help Desk Technician',
      company: 'Groupe ISCAE',
      location: 'Rabat, Morocco',
      period: 'Nov 2019 – May 2020',
      description: [
        'Diagnosis and resolution of hardware and software issues ensuring business continuity',
        'Active Directory management: user and group administration',
        'User support for Microsoft 365 services',
        'Network monitoring and support in resolving connectivity and security issues',
      ],
      technologies: ['Active Directory', 'Microsoft 365', 'Windows'],
    },
  ],

  it: [
    {
      title: 'IT Support Specialist',
      company: 'Everience',
      location: 'Milano, Italia',
      period: 'Feb 2026 – Presente',
      description: [
        'Gestione delle Identità e degli Accessi (IAM): provisioning utenti e gestione del ciclo di vita tramite Active Directory, Okta e SAP IDM',
        'IT Service Management: gestione di incident, accessi e richieste tramite ServiceNow, garantendo il rispetto degli SLA',
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
      title: 'Tecnico di Rete',
      company: 'VMWay',
      location: 'Torino, Italia',
      period: 'Dic 2025 – Gen 2026',
      description: [
        'Installazione e configurazione di dispositivi di rete presso clienti',
        'Risoluzione problemi di rete',
        'Collaborazione con team tecnici remoti per configurazione e test',
      ],
      technologies: ['Cisco', 'TCP/IP', 'Routing & Switching'],
    },
    {
      title: 'Stagista Amministratore di Sistemi di Rete',
      company: 'Novanext',
      location: 'Torino, Italia',
      period: 'Set 2025 – Ott 2025',
      description: [
        'Supporto nel monitoraggio delle reti aziendali',
        'Assistenza nella configurazione di dispositivi Cisco',
        'Partecipazione a installazione, aggiornamento e manutenzione sistemi IT',
        'Attività introduttive su Cisco Meraki, Cisco DNA e infrastrutture di rete',
      ],
      technologies: ['Cisco', 'Cisco Meraki', 'Cisco DNA'],
    },
    {
      title: 'Tecnico IT Help Desk',
      company: 'Groupe ISCAE',
      location: 'Rabat, Marocco',
      period: 'Nov 2019 – Mag 2020',
      description: [
        'Diagnosi e risoluzione problemi hardware e software garantendo continuità operativa',
        'Gestione Active Directory: utenti e gruppi',
        'Supporto utenti per servizi Microsoft 365',
        'Monitoraggio rete e supporto su connettività e sicurezza',
      ],
      technologies: ['Active Directory', 'Microsoft 365', 'Windows'],
    },
  ],
};
