// Content management system for consistent messaging and terminology

export const content = {
  // Company information
  company: {
    name: "PGS FM Ltd",
    fullName: "PGS FM Ltd - Professional Security & Facilities Management",
    tagline: "Your Trusted Security & Facilities Partner",
    description: "Professional security and facilities management services across the UK",
    established: "2020",
    location: "England",
    registrationNumber: "13757656",
    director: "Mr. Muhammad Mueen Aslam",
    sicCodes: ["80100", "81299"]
  },
  
  // Contact information
  contact: {
    phone: "+44 333 240 9575",
    alternativePhone: "+44 333 240 6307",
    email: "info@pgsfm.uk",
    address: "Office 14, 132-134 Cranbrook Road, Ilford, England, IG1 4LZ",
    website: "https://www.pgsfm.uk"
  },
  
  // Service categories
  services: {
    security: {
      title: "Security Services",
      description: "Comprehensive security solutions for your business",
      keywords: ["security", "guards", "patrol", "monitoring", "protection"]
    },
    facilities: {
      title: "Facilities Management",
      description: "Complete facilities management and maintenance services",
      keywords: ["facilities", "maintenance", "cleaning", "management", "support"]
    },
    cleaning: {
      title: "Cleaning Services",
      description: "Professional cleaning and hygiene solutions",
      keywords: ["cleaning", "hygiene", "maintenance", "sanitization", "commercial"]
    }
  },
  
  // Value propositions
  values: {
    reliability: {
      title: "Reliable Service",
      description: "Consistent, dependable service delivery you can trust",
      icon: "Shield"
    },
    expertise: {
      title: "Professional Expertise",
      description: "Highly trained and experienced professionals",
      icon: "Award"
    },
    compliance: {
      title: "Full Compliance",
      description: "Meeting all industry standards and regulations",
      icon: "CheckCircle"
    },
    support: {
      title: "24/7 Support",
      description: "Round-the-clock support when you need it",
      icon: "Clock"
    }
  },
  
  // Call-to-action messages
  cta: {
    primary: {
      contact: "Contact Us",
      quote: "Get Free Quote",
      consultation: "Book Consultation",
      assessment: "Free Assessment",
      call: "Call Now",
      email: "Send Email"
    },
    secondary: {
      learnMore: "Learn More",
      viewServices: "View Services",
      aboutUs: "About Us",
      policies: "Our Policies",
      sectors: "Our Sectors"
    }
  },
  
  // Common phrases and terminology
  phrases: {
    // Professional language
    professional: [
      "Professional security services",
      "Expert facilities management",
      "Comprehensive solutions",
      "Industry-leading standards",
      "Trusted partner"
    ],
    
    // Service descriptions
    services: [
      "Tailored to your needs",
      "24/7 availability",
      "Fully licensed and insured",
      "Compliance guaranteed",
      "Cost-effective solutions"
    ],
    
    // Quality assurance
    quality: [
      "Highest standards",
      "Quality assurance",
      "Regular monitoring",
      "Continuous improvement",
      "Client satisfaction"
    ],
    
    // Trust and reliability
    trust: [
      "Trusted by businesses",
      "Proven track record",
      "Reliable service delivery",
      "Peace of mind",
      "Long-term partnership"
    ]
  },
  
  // SEO content
  seo: {
    keywords: [
      "security services",
      "facilities management",
      "cleaning services",
      "professional security",
      "business security",
      "commercial cleaning",
      "facilities maintenance",
      "security guards",
      "patrol services",
      "UK security"
    ],
    
    metaDescriptions: {
      home: "Professional security and facilities management services across the UK. Trusted by businesses for reliable, compliant, and cost-effective solutions.",
      about: "Learn about PGS FM Ltd's commitment to excellence in security and facilities management. Professional, reliable, and compliant services.",
      services: "Comprehensive security and facilities management services. From security guards to cleaning services, we provide complete solutions.",
      contact: "Contact PGS FM Ltd for professional security and facilities management services. Get your free quote today.",
      policies: "View our company policies including privacy, data protection, health & safety, and environmental policies."
    }
  },
  
  // Testimonials templates
  testimonials: {
    templates: [
      "PGS FM Ltd has been our trusted security partner for over 2 years. Their professionalism and reliability are unmatched.",
      "The facilities management team at PGS FM Ltd has transformed our office environment. Highly recommended!",
      "Outstanding service and attention to detail. PGS FM Ltd understands our business needs perfectly.",
      "Professional, reliable, and cost-effective. PGS FM Ltd delivers exactly what they promise.",
      "The cleaning services are exceptional. Our office has never looked better!"
    ]
  },
  
  // Legal and compliance
  legal: {
    compliance: [
      "GDPR compliant",
      "Health & Safety compliant",
      "Industry certified",
      "Fully insured",
      "Licensed operators"
    ],
    
    certifications: [
      "SIA licensed",
      "CHAS accredited",
      "ISO certified",
      "GDPR compliant",
      "Health & Safety certified"
    ]
  }
};

// Content validation and consistency helpers
export const validation = {
  // Check if content follows brand guidelines
  validateBrandVoice: (text: string): boolean => {
    const brandWords = ["professional", "reliable", "trusted", "expert", "comprehensive"];
    return brandWords.some(word => text.toLowerCase().includes(word));
  },
  
  // Check for consistent terminology
  validateTerminology: (text: string): string[] => {
    const inconsistencies: string[] = [];
    
    // Check for inconsistent terms
    if (text.includes("security guard") && text.includes("security officer")) {
      inconsistencies.push("Use consistent terminology: 'security guard' or 'security officer'");
    }
    
    if (text.includes("facility management") && text.includes("facilities management")) {
      inconsistencies.push("Use consistent terminology: 'facilities management' (plural)");
    }
    
    return inconsistencies;
  },
  
  // Check for proper capitalization
  validateCapitalization: (text: string): string[] => {
    const errors: string[] = [];
    
    // Check for proper company name capitalization
    if (text.includes("pgsfm") && !text.includes("PGS FM Ltd")) {
      errors.push("Company name should be capitalized as 'PGS FM Ltd'");
    }
    
    return errors;
  },
  
  // Check for consistent contact information
  validateContactInfo: (text: string): string[] => {
    const errors: string[] = [];
    
    // Check for consistent phone number format
    if (text.includes("+44") && text.includes("020")) {
      errors.push("Use consistent phone number format");
    }
    
    return errors;
  }
};

// Content generation helpers
export const generators = {
  // Generate consistent page titles
  generatePageTitle: (pageName: string): string => {
    return `${pageName} - ${content.company.fullName}`;
  },
  
  // Generate consistent meta descriptions
  generateMetaDescription: (pageName: string, description: string): string => {
    return `${description} - ${content.company.fullName}. ${content.seo.metaDescriptions.home}`;
  },
  
  // Generate consistent CTA text
  generateCTA: (action: keyof typeof content.cta.primary): string => {
    return content.cta.primary[action];
  },
  
  // Generate consistent service descriptions
  generateServiceDescription: (serviceName: string): string => {
    return `Professional ${serviceName.toLowerCase()} services tailored to your business needs. ${content.phrases.professional[0]}.`;
  }
};
