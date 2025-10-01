// Responsive design utilities for consistent breakpoints and layouts

export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px'
};

export const responsive = {
  // Grid layouts
  grid: {
    single: "grid grid-cols-1",
    two: "grid grid-cols-1 md:grid-cols-2",
    three: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    four: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
    auto: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
  },
  
  // Flex layouts
  flex: {
    row: "flex flex-col sm:flex-row",
    column: "flex flex-col",
    wrap: "flex flex-wrap",
    nowrap: "flex flex-nowrap",
    center: "flex items-center justify-center",
    between: "flex items-center justify-between",
    start: "flex items-start",
    end: "flex items-end"
  },
  
  // Spacing
  spacing: {
    section: "py-12 md:py-16 lg:py-20",
    container: "px-4 sm:px-6 lg:px-8",
    gap: "gap-4 md:gap-6 lg:gap-8",
    gapSmall: "gap-2 md:gap-4",
    gapLarge: "gap-6 md:gap-8 lg:gap-12"
  },
  
  // Typography
  text: {
    h1: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl",
    h2: "text-2xl sm:text-3xl md:text-4xl lg:text-5xl",
    h3: "text-xl sm:text-2xl md:text-3xl lg:text-4xl",
    h4: "text-lg sm:text-xl md:text-2xl lg:text-3xl",
    body: "text-sm sm:text-base md:text-lg",
    small: "text-xs sm:text-sm"
  },
  
  // Images
  image: {
    hero: "w-full h-64 sm:h-80 md:h-96 lg:h-[500px]",
    card: "w-full h-48 sm:h-56 md:h-64",
    banner: "w-full h-32 sm:h-40 md:h-48",
    avatar: "w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20"
  },
  
  // Cards
  card: {
    padding: "p-4 sm:p-6 md:p-8",
    margin: "mb-4 sm:mb-6 md:mb-8",
    gap: "gap-4 sm:gap-6 md:gap-8"
  },
  
  // Buttons
  button: {
    size: "px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4",
    text: "text-sm sm:text-base md:text-lg",
    icon: "w-4 h-4 sm:w-5 sm:h-5"
  },
  
  // Navigation
  nav: {
    mobile: "block sm:hidden",
    desktop: "hidden sm:block",
    toggle: "sm:hidden"
  },
  
  // Layout
  layout: {
    container: "container mx-auto px-4 sm:px-6 lg:px-8",
    maxWidth: "max-w-4xl mx-auto",
    maxWidthLarge: "max-w-6xl mx-auto",
    maxWidthSmall: "max-w-2xl mx-auto",
    fullWidth: "w-full",
    centered: "mx-auto"
  }
};

// Common responsive patterns
export const patterns = {
  // Hero sections
  hero: {
    container: "relative min-h-screen flex items-center justify-center",
    content: "max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8",
    title: "text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold",
    subtitle: "text-xl sm:text-2xl md:text-3xl",
    description: "text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto",
    buttons: "flex flex-col sm:flex-row gap-4 justify-center"
  },
  
  // Card grids
  cardGrid: {
    container: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8",
    card: "bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2",
    content: "p-6 md:p-8",
    title: "text-xl md:text-2xl font-bold mb-4",
    description: "text-gray-600 mb-6",
    button: "w-full"
  },
  
  // Feature sections
  features: {
    container: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8",
    item: "text-center p-6 md:p-8",
    icon: "w-16 h-16 md:w-20 md:h-20 mx-auto mb-4",
    title: "text-xl md:text-2xl font-bold mb-4",
    description: "text-gray-600"
  },
  
  // Testimonials
  testimonials: {
    container: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
    card: "bg-white p-6 md:p-8 rounded-2xl shadow-lg",
    quote: "text-lg text-gray-600 mb-6 italic",
    author: "font-semibold text-gray-900",
    role: "text-sm text-gray-500"
  }
};
