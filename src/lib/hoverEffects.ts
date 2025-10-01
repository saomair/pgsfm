// Standardized hover effects system to fix UI/UX issues
// This ensures consistent hover behavior across all components

export const hoverEffects = {
  // Card hover effects
  card: {
    base: "transition-all duration-300 ease-out",
    hover: "hover:shadow-2xl hover:-translate-y-1 hover:scale-[1.02]",
    glass: "hover:bg-white/20 hover:backdrop-blur-md",
    solid: "hover:bg-white hover:shadow-xl"
  },

  // Button hover effects
  button: {
    primary: "hover:bg-green-700 hover:shadow-lg hover:scale-105",
    secondary: "hover:bg-slate-700 hover:shadow-lg hover:scale-105",
    outline: "hover:bg-green-600 hover:text-white hover:scale-105",
    ghost: "hover:bg-green-50 hover:text-green-600 hover:scale-105"
  },

  // Link hover effects
  link: {
    default: "hover:text-green-600 hover:underline hover:underline-offset-4",
    nav: "hover:text-green-600 hover:bg-green-50 hover:scale-105",
    footer: "hover:text-white hover:underline hover:underline-offset-4"
  },

  // Image hover effects
  image: {
    scale: "hover:scale-105 transition-transform duration-300",
    overlay: "group-hover:opacity-80 transition-opacity duration-300"
  },

  // Icon hover effects
  icon: {
    scale: "hover:scale-110 transition-transform duration-300",
    rotate: "hover:rotate-12 transition-transform duration-300",
    bounce: "hover:animate-bounce"
  },

  // Background hover effects
  background: {
    subtle: "hover:bg-gray-50 transition-colors duration-200",
    blue: "hover:bg-green-50 transition-colors duration-200",
    glass: "hover:bg-white/10 hover:backdrop-blur-sm transition-all duration-300"
  },

  // Border hover effects
  border: {
    blue: "hover:border-green-500 transition-colors duration-200",
    glow: "hover:shadow-green-500/20 hover:shadow-lg transition-all duration-300"
  }
};

// Utility function to combine hover effects
export const combineHoverEffects = (...effects: string[]): string => {
  return effects.filter(Boolean).join(' ');
};

// Predefined combinations for common use cases
export const hoverPresets = {
  // Service cards
  serviceCard: combineHoverEffects(
    hoverEffects.card.base,
    hoverEffects.card.hover,
    hoverEffects.image.scale
  ),

  // Navigation links
  navLink: combineHoverEffects(
    hoverEffects.link.nav,
    hoverEffects.card.base
  ),

  // CTA buttons
  ctaButton: combineHoverEffects(
    hoverEffects.button.primary,
    hoverEffects.card.base
  ),

  // Feature cards
  featureCard: combineHoverEffects(
    hoverEffects.card.base,
    hoverEffects.card.glass,
    hoverEffects.icon.scale
  ),

  // Team cards
  teamCard: combineHoverEffects(
    hoverEffects.card.base,
    hoverEffects.card.hover,
    hoverEffects.image.scale
  )
};

// Fix for transparency issues
export const transparencyFixes = {
  // Ensure proper contrast on hover
  ensureContrast: "hover:bg-opacity-90",
  
  // Fix backdrop blur issues
  backdropBlur: "hover:backdrop-blur-md hover:bg-white/20",
  
  // Prevent text readability issues
  textReadability: "hover:text-gray-900 hover:bg-white/95"
};
