export type DalleCategory = 'hero' | 'card' | 'team' | 'banner' | 'blog';

export interface DallePromptConfig {
  /**
   * Final filename (relative to public/images/ai-generated/<category>) that should be written to disk.
   */
  fileName: string;
  /**
   * Prompt text that should be sent to OpenAI's image generation endpoint.
   */
  prompt: string;
  /**
   * Supported OpenAI image size that most closely matches the desired aspect ratio; crop afterwards if needed.
   */
  size: '1024x1024' | '1792x1024' | '1024x1792';
  /**
   * Optional human friendly label for UI / logging.
   */
  label?: string;
}

export type DallePromptMap = Record<DalleCategory, Record<string, DallePromptConfig>>;

export const dallePrompts: DallePromptMap = {
  hero: {
    'hero-security-team.jpg': {
      fileName: 'hero-security-team.jpg',
      label: 'Professional Security Team',
      size: '1792x1024',
      prompt:
        'Professional UK security team in London, wearing high-visibility jackets, company logo shirts, cargo trousers, and sturdy boots, standing in front of modern London office building, wide cinematic composition, professional lighting, confident poses, authentic UK security officer attire'
    },
    'hero-security-services.jpg': {
      fileName: 'hero-security-services.jpg',
      label: 'Security Services Patrol',
      size: '1792x1024',
      prompt:
        'UK security officer patrolling modern London commercial building at night, wearing high-vis jacket, company polo shirt, cargo trousers, sturdy boots, carrying torch, surveillance cameras visible, dramatic lighting, authentic UK security atmosphere, professional London setting'
    },
    'hero-default.jpg': {
      fileName: 'hero-default.jpg',
      label: 'Security & Facilities Overview',
      size: '1792x1024',
      prompt:
        'Professional UK security and facilities management team in modern London office lobby, security officers in high-vis jackets and company uniforms, facilities staff in professional attire, wide cinematic composition, authentic UK business environment, clean contemporary architecture'
    }
  },
  card: {
    'card-security-services.jpg': {
      fileName: 'card-security-services.jpg',
      label: 'Security Monitoring',
      size: '1024x1024',
      prompt:
        'UK security officer monitoring surveillance cameras in modern London control room, wearing high-vis jacket, company shirt, cargo trousers, multiple screens showing camera feeds, authentic UK security control room, professional atmosphere'
    },
    'card-facilities-management.jpg': {
      fileName: 'card-facilities-management.jpg',
      label: 'Facilities Management',
      size: '1024x1024',
      prompt:
        'UK facilities management team cleaning modern London office space, professional cleaning uniforms, modern cleaning equipment, sanitisation supplies, authentic UK facilities management, professional maintenance setting'
    },
    'card-cleaning-services.jpg': {
      fileName: 'card-cleaning-services.jpg',
      label: 'Cleaning Services',
      size: '1024x1024',
      prompt:
        'Professional UK cleaning staff in London healthcare facility, wearing clean uniforms, sanitisation equipment, medical-grade cleaning supplies, authentic UK healthcare cleaning standards, professional environment'
    },
    'card-default.jpg': {
      fileName: 'card-default.jpg',
      label: 'Services Overview',
      size: '1024x1024',
      prompt:
        'Professional UK security and facilities management services overview, modern London office building with security presence, UK security officers in high-vis uniforms, authentic UK corporate style'
    }
  },
  team: {
    'team-john-smith.jpg': {
      fileName: 'team-john-smith.jpg',
      label: 'John Smith Portrait',
      size: '1024x1792',
      prompt:
        'Professional UK business headshot of middle-aged man, security industry executive, wearing dark suit with company badge, confident expression, clean neutral background, authentic UK professional lighting, high quality portrait photography'
    },
    'team-sarah-johnson.jpg': {
      fileName: 'team-sarah-johnson.jpg',
      label: 'Sarah Johnson Portrait',
      size: '1024x1792',
      prompt:
        'Professional UK business headshot of woman, facilities management director, wearing smart business suit with company lanyard, professional makeup, clean background, authentic UK professional style, high quality portrait photography'
    },
    'team-michael-brown.jpg': {
      fileName: 'team-michael-brown.jpg',
      label: 'Michael Brown Portrait',
      size: '1024x1792',
      prompt:
        'Professional UK business headshot of man, operations manager, wearing high-vis security jacket over smart shirt, company badge visible, confident professional expression, clean background, authentic UK security professional style'
    },
    'team-emma-wilson.jpg': {
      fileName: 'team-emma-wilson.jpg',
      label: 'Emma Wilson Portrait',
      size: '1024x1792',
      prompt:
        'Professional UK business headshot of woman, quality assurance manager, wearing smart corporate attire with company ID badge, professional appearance, clean background, authentic UK business style'
    },
    'team-default.jpg': {
      fileName: 'team-default.jpg',
      label: 'Team Default Portrait',
      size: '1024x1792',
      prompt:
        'Professional UK business headshot, security industry professional, wearing smart corporate attire with company lanyard, neutral expression, clean background, authentic UK professional style'
    }
  },
  banner: {
    'banner-healthcare.jpg': {
      fileName: 'banner-healthcare.jpg',
      label: 'Healthcare Sector Banner',
      size: '1792x1024',
      prompt:
        'Modern UK healthcare facility with security presence, London hospital building, professional medical environment, UK security officers in high-vis jackets and company uniforms, wide cinematic composition, authentic UK healthcare security atmosphere'
    },
    'banner-retail.jpg': {
      fileName: 'banner-retail.jpg',
      label: 'Retail Sector Banner',
      size: '1792x1024',
      prompt:
        'UK retail store with security presence, London shopping centre environment, security officer patrolling in high-vis jacket and company uniform, modern retail setting, wide cinematic composition, authentic UK retail security'
    },
    'banner-corporate.jpg': {
      fileName: 'banner-corporate.jpg',
      label: 'Corporate Sector Banner',
      size: '1792x1024',
      prompt:
        'Corporate office building in London business district, Canary Wharf or City of London skyline, security and facilities management presence, modern skyscraper architecture, UK security officers in professional uniforms, wide cinematic composition, authentic UK corporate style'
    },
    'banner-contact.jpg': {
      fileName: 'banner-contact.jpg',
      label: 'Contact Banner',
      size: '1792x1024',
      prompt:
        'Professional UK contact centre or office reception in London, modern business environment, customer service atmosphere, security officer in high-vis uniform at reception, wide cinematic composition, welcoming UK business environment'
    },
    'banner-default.jpg': {
      fileName: 'banner-default.jpg',
      label: 'Default Sector Banner',
      size: '1792x1024',
      prompt:
        'Professional UK security and facilities management overview, modern London office complex, business district skyline, UK security officers in high-vis uniforms, wide cinematic composition, authentic UK professional business style'
    }
  },
  blog: {
    'blog-default.jpg': {
      fileName: 'blog-default.jpg',
      label: 'Blog Default Cover',
      size: '1792x1024',
      prompt:
        'Professional UK security and facilities management blog cover, modern London office environment, business professional setting with security officer in high-vis uniform, cinematic composition, authentic UK professional corporate style, clean editorial layout'
    }
  }
};

export interface FlatDallePrompt extends DallePromptConfig {
  /** Category in the ai-generated folder that this prompt belongs to. */
  category: DalleCategory;
}

export const allDallePrompts: FlatDallePrompt[] = Object.entries(dallePrompts).flatMap(
  ([category, entries]) =>
    Object.values(entries).map((entry) => ({
      ...entry,
      category: category as DalleCategory
    }))
);
