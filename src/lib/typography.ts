// Typography system for consistent text styling across the website

export const typography = {
  // Heading styles
  h1: "text-4xl md:text-6xl font-bold text-gray-900 leading-tight",
  h2: "text-3xl md:text-5xl font-bold text-gray-900 leading-tight",
  h3: "text-2xl md:text-4xl font-bold text-gray-900 leading-tight",
  h4: "text-xl md:text-3xl font-semibold text-gray-900 leading-tight",
  h5: "text-lg md:text-2xl font-semibold text-gray-900 leading-tight",
  h6: "text-base md:text-xl font-semibold text-gray-900 leading-tight",
  
  // Body text styles
  body: "text-base text-gray-600 leading-relaxed",
  bodyLarge: "text-lg text-gray-600 leading-relaxed",
  bodySmall: "text-sm text-gray-600 leading-relaxed",
  
  // Hero text styles
  heroTitle: "text-4xl md:text-6xl font-bold text-white leading-tight",
  heroSubtitle: "text-2xl md:text-3xl text-blue-200 leading-tight",
  heroDescription: "text-xl text-slate-300 leading-relaxed",
  
  // Dark theme text styles
  darkTitle: "text-4xl md:text-5xl font-bold text-white leading-tight",
  darkSubtitle: "text-2xl md:text-3xl font-bold text-white leading-tight",
  darkBody: "text-xl text-slate-300 leading-relaxed",
  darkSmall: "text-lg text-slate-400 leading-relaxed",
  
  // CTA text styles
  ctaTitle: "text-4xl md:text-5xl font-bold text-white leading-tight",
  ctaDescription: "text-xl text-blue-100 leading-relaxed",
  
  // Badge styles
  badge: "text-sm font-semibold px-4 py-2 rounded-full",
  badgeBlue: "text-sm font-semibold px-4 py-2 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-200",
  badgeGreen: "text-sm font-semibold px-4 py-2 rounded-full bg-green-500/20 border border-green-400/30 text-green-200",
  badgePurple: "text-sm font-semibold px-4 py-2 rounded-full bg-purple-500/20 border border-purple-400/30 text-purple-200",
  
  // Card text styles
  cardTitle: "text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300",
  cardDescription: "text-gray-600 leading-relaxed",
  cardSmall: "text-sm text-gray-500",
  
  // Button text styles
  button: "font-semibold",
  buttonLarge: "text-lg font-semibold",
  buttonSmall: "text-sm font-semibold",
  
  // Link styles
  link: "text-blue-600 hover:text-blue-700 underline-offset-4 hover:underline transition-colors duration-200",
  linkDark: "text-blue-300 hover:text-blue-200 underline-offset-4 hover:underline transition-colors duration-200",
  
  // List styles
  listItem: "text-lg text-gray-600 leading-relaxed",
  listItemSmall: "text-base text-gray-600 leading-relaxed",
  
  // Form styles
  label: "text-sm font-medium text-gray-700",
  input: "text-base text-gray-900 placeholder-gray-500",
  error: "text-sm text-red-600",
  help: "text-sm text-gray-500"
};

// Spacing system
export const spacing = {
  section: "py-20",
  sectionSmall: "py-12",
  sectionLarge: "py-24",
  container: "container mx-auto px-4",
  maxWidth: "max-w-4xl mx-auto",
  maxWidthLarge: "max-w-6xl mx-auto",
  maxWidthSmall: "max-w-2xl mx-auto"
};

// Color system
export const colors = {
  primary: {
    50: "text-blue-50",
    100: "text-blue-100",
    200: "text-blue-200",
    300: "text-blue-300",
    400: "text-blue-400",
    500: "text-blue-500",
    600: "text-blue-600",
    700: "text-blue-700",
    800: "text-blue-800",
    900: "text-blue-900"
  },
  gray: {
    50: "text-gray-50",
    100: "text-gray-100",
    200: "text-gray-200",
    300: "text-gray-300",
    400: "text-gray-400",
    500: "text-gray-500",
    600: "text-gray-600",
    700: "text-gray-700",
    800: "text-gray-800",
    900: "text-gray-900"
  },
  slate: {
    50: "text-slate-50",
    100: "text-slate-100",
    200: "text-slate-200",
    300: "text-slate-300",
    400: "text-slate-400",
    500: "text-slate-500",
    600: "text-slate-600",
    700: "text-slate-700",
    800: "text-slate-800",
    900: "text-slate-900"
  }
};
