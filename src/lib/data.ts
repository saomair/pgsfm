export interface Service {
  title: string;
  slug: string;
  description: string;
  features: string[];
}

export interface Sector {
  name: string;
  description: string;
}

export interface Policy {
  title: string;
  slug: string;
  description: string;
}

export interface Accreditation {
  name: string;
  description: string;
  website: string;
  logoUrl: string;
  category: 'security' | 'health-safety' | 'data-protection' | 'construction' | 'cyber-security';
}

export const services: Service[] = [
  {
    title: "Static Guarding",
    slug: "static-guarding",
    description: "Professional on-site security personnel providing round-the-clock protection for your premises.",
    features: [
      "24/7 manned security presence",
      "Access control and visitor management",
      "Incident response and reporting",
      "Emergency procedures and protocols"
    ]
  },
  {
    title: "Corporate Protection & Security",
    slug: "corporate-protection",
    description: "Comprehensive security solutions tailored for corporate environments and business facilities.",
    features: [
      "Executive protection services",
      "Corporate event security",
      "Risk assessment and consultation",
      "Security system integration"
    ]
  },
  {
    title: "Immediate Response Team",
    slug: "immediate-response",
    description: "Rapid deployment security teams ready to respond to urgent situations and emergencies.",
    features: [
      "24/7 emergency response",
      "Rapid deployment capabilities",
      "Crisis management support",
      "Incident containment and resolution"
    ]
  },
  {
    title: "Event Security",
    slug: "event-security",
    description: "Specialized security services for events, conferences, and public gatherings of all sizes.",
    features: [
      "Crowd management and control",
      "Access control and ticketing",
      "VIP protection services",
      "Emergency evacuation procedures"
    ]
  },
  {
    title: "Mobile Patrols",
    slug: "mobile-patrols",
    description: "Regular security patrols covering multiple sites with flexible scheduling and reporting.",
    features: [
      "Scheduled and random patrols",
      "GPS tracking and reporting",
      "Multi-site coverage",
      "Incident documentation"
    ]
  },
  {
    title: "Concierge Services",
    slug: "concierge",
    description: "Professional front-of-house services combining security with customer service excellence.",
    features: [
      "Reception and visitor management",
      "Mail and package handling",
      "Building access control",
      "Customer service support"
    ]
  },
  {
    title: "Industrial / Warehouse Security",
    slug: "industrial-warehouse-security",
    description: "Specialized security solutions for industrial facilities, warehouses, and distribution centers.",
    features: [
      "Perimeter security monitoring",
      "Asset protection",
      "Health and safety compliance",
      "Inventory control support"
    ]
  },
  {
    title: "Cleaning Services",
    slug: "cleaning-services",
    description: "Professional cleaning and maintenance services for commercial and industrial properties.",
    features: [
      "Regular contract cleaning",
      "Deep cleaning services",
      "Specialized cleaning solutions",
      "Flexible scheduling options"
    ]
  },
  // CCTV services have been removed
];

export const sectors: Sector[] = [
  {
    name: "Corporate Buildings",
    description: "Office complexes, business centers, and corporate headquarters requiring comprehensive security and facilities management."
  },
  {
    name: "Warehouse Facilities Management",
    description: "Distribution centers, storage facilities, and logistics hubs with specialized security and maintenance needs."
  },
  // {
  //   name: "Hospitals & Schools",
  //   description: "Healthcare facilities and educational institutions requiring sensitive security and cleaning protocols."
  // },
  // {
  //   name: "Public Sector Facilities Management",
  //   description: "Government buildings, public offices, and civic facilities with strict compliance requirements."
  // },
  {
    name: "Retail Facilities Management",
    description: "Shopping centers, retail stores, and commercial spaces requiring integrated security and maintenance services."
  }
];

export const policies: Policy[] = [
  {
    title: "Privacy Policy",
    slug: "privacy-policy",
    description: "How we collect, use, and protect your personal information in accordance with data protection regulations."
  },
  {
    title: "Data Protection Policy",
    slug: "data-protection-policy",
    description: "Our commitment to protecting personal data and ensuring compliance with GDPR and other data protection laws."
  },
  {
    title: "Health & Safety Policy",
    slug: "health-safety-policy",
    description: "Our comprehensive approach to maintaining safe working environments for employees and clients."
  },
  {
    title: "Business Ethics Policy",
    slug: "business-ethics-policy",
    description: "Our commitment to ethical business practices, integrity, and corporate responsibility."
  },
  {
    title: "Environmental Policy",
    slug: "environmental-policy",
    description: "Our environmental commitments and sustainable practices in all aspects of our operations."
  }
];

export const contactInfo = {
  companyName: "PGS FM Ltd",
  address: {
    street: "Office 14, 132-134 Cranbrook Road",
    city: "Ilford",
    postcode: "IG1 4LZ",
    country: "England"
  },
  phone: "+44 333 240 9575",
  email: "info@pgsfm.uk",
  companyNumber: "13757656",
  registeredAddress: "Office 14, 132-134 Cranbrook Road, Ilford, England, IG1 4LZ",
  alternativePhone: "+44 333 240 6307",
  director: "Mr. Muhammad Mueen Aslam",
  sicCodes: ["80100", "81299"],
  sicDescriptions: {
    "80100": "Private security activities",
    "81299": "Other cleaning services"
  },
  financialInfo: {
    currentAssets: "£1.39k",
    currentCreditors: "£3.82k",
    lastUpdated: "30 November 2023"
  }
};

export const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Cleaning", href: "/cleaning" },
  { name: "Contact", href: "/contact" }
];

export const accreditations: Accreditation[] = [
  {
    name: "NASDU",
    description: "National Association of Security Dog Users - Professional security dog services certification",
    website: "https://www.nasdu.co.uk",
    logoUrl: "/Accridation/Nasdu.png",
    category: "security"
  },
  {
    name: "CHAS",
    description: "Contractors Health and Safety Assessment Scheme - Health and safety compliance certification",
    website: "https://www.chas.co.uk",
    logoUrl: "/Accridation/cafecontractor.png",
    category: "health-safety"
  },
  {
    name: "Constructionline",
    description: "Construction industry pre-qualification scheme - Construction sector compliance",
    website: "https://www.constructionline.co.uk",
    logoUrl: "/Accridation/constructionline.png",
    category: "construction"
  },
  {
    name: "ICO",
    description: "Information Commissioner's Office - Data protection and privacy compliance",
    website: "https://ico.org.uk",
    logoUrl: "/Accridation/ico.webp",
    category: "data-protection"
  },
  {
    name: "ACS",
    description: "PGS FM LTD currently holds SIA Approved Contractor Scheme (ACS) status for the provision of Security Guarding",
    website: "https://www.services.sia.homeoffice.gov.uk/Pages/acs-roac.aspx?contractor=PSGFMLSC01",
    logoUrl: "/Accridation/ACS.png",
    category: "security"
  },
  {
    name: "SafeContractor",
    description: "Health and safety accreditation for contractors - Workplace safety compliance",
    website: "https://www.safecontractor.com",
    logoUrl: "/Accridation/constructionline gold.png",
    category: "health-safety"
  },
  {
    name: "Cyber Essentials",
    description: "Government-backed cyber security certification - Information security standards",
    website: "https://www.cyberessentials.ncsc.gov.uk",
    logoUrl: "/Accridation/Cyber Essentials.jpg",
    category: "cyber-security"
  }
];
