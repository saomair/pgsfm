
export const imagePresets = {
  hero: {
    width: 1920,
    height: 800,
    alt: 'Hero image',
    priority: true,
    className: 'w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover'
  },
  banner: {
    width: 2400,
    height: 900,
    alt: 'Section banner',
    className: 'w-full h-[300px] md:h-[400px] object-cover'
  },
  card: {
    width: 1200,
    height: 900,
    alt: 'Service card image',
    className: 'w-full h-[200px] md:h-[250px] object-cover rounded-t-2xl'
  },
  team: {
    width: 1200,
    height: 1500,
    alt: 'Team member',
    className: 'w-full h-[300px] md:h-[400px] object-cover rounded-2xl'
  },
  blog: {
    width: 1600,
    height: 900,
    alt: 'Blog post cover',
    className: 'w-full h-[200px] md:h-[250px] object-cover rounded-2xl'
  }
} as const;

export const getImageUrl = (type: keyof typeof imagePresets, text?: string): string => {
  const preset = imagePresets[type];
  
  // AI-Generated Images Map - Replace these with your actual generated images
  const aiGeneratedImages = {
    hero: {
      'Professional Security Team': '/images/ai-generated/hero-security-team.jpg',
      'Security Services': '/images/ai-generated/hero-security-services.jpg',
      'default': '/images/ai-generated/hero-default.jpg'
    },
    card: {
      'Security Services': '/images/ai-generated/card-security-services.jpg',
      'Facilities Management': '/images/ai-generated/card-facilities-management.jpg',
      'Cleaning Services': '/images/ai-generated/card-cleaning-services.jpg',
      'default': '/images/ai-generated/card-default.jpg'
    },
    team: {
      'John Smith': '/images/ai-generated/team-john-smith.jpg',
      'Sarah Johnson': '/images/ai-generated/team-sarah-johnson.jpg',
      'Michael Brown': '/images/ai-generated/team-michael-brown.jpg',
      'Emma Wilson': '/images/ai-generated/team-emma-wilson.jpg',
      'default': '/images/ai-generated/team-default.jpg'
    },
    banner: {
      'Healthcare Sector': '/images/ai-generated/banner-healthcare.jpg',
      'Retail Sector': '/images/ai-generated/banner-retail.jpg',
      'Corporate Sector': '/images/ai-generated/banner-corporate.jpg',
      'Contact Us': '/images/ai-generated/banner-contact.jpg',
      'default': '/images/ai-generated/banner-default.jpg'
    },
    blog: {
      'default': '/images/ai-generated/blog-default.jpg'
    }
  };

  // Check if we have an AI-generated image for this type and text
  if (text && aiGeneratedImages[type] && aiGeneratedImages[type][text]) {
    return aiGeneratedImages[type][text];
  }
  
  // Fallback to default AI-generated image for this type
  if (aiGeneratedImages[type] && aiGeneratedImages[type]['default']) {
    return aiGeneratedImages[type]['default'];
  }
  
  // Final fallback to placeholder service
  const textParam = text ? `?text=${encodeURIComponent(text)}` : '';
  return `https://placehold.co/${preset.width}x${preset.height}${textParam}`;
};
