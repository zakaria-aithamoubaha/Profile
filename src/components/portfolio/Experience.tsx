// Experience.tsx
export type Language = 'en' | 'it';

export interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies?: string[];
}

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
    // Add other experiences here...
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
    // Add other experiences here...
  ],
};
