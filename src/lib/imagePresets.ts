
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
  // Return a placeholder URL for now - in production this would generate actual images
  const encodedText = text ? encodeURIComponent(text) : 'placeholder';
  return `https://placehold.co/${imagePresets[type].width}x${imagePresets[type].height}/1f2937/ffffff?text=${encodedText}`;
};

// Helper function to get background color classes based on image type
export const getBackgroundColor = (type: keyof typeof imagePresets, text?: string): string => {
  const colorMap = {
    hero: 'bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800',
    card: 'bg-gradient-to-br from-green-600 to-green-700',
    team: 'bg-gradient-to-br from-blue-600 to-blue-700',
    banner: 'bg-gradient-to-br from-slate-800 to-slate-900',
    blog: 'bg-gradient-to-br from-purple-600 to-purple-700'
  };
  
  return colorMap[type] || 'bg-gradient-to-br from-gray-600 to-gray-700';
};
