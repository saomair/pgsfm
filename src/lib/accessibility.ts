// Accessibility utilities for WCAG compliance and better user experience

export const accessibility = {
  // Focus states
  focus: {
    ring: "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
    ringOffset: "focus:ring-offset-2",
    visible: "focus:visible",
    notVisible: "focus:not-sr-only"
  },
  
  // Screen reader utilities
  srOnly: "sr-only",
  notSrOnly: "not-sr-only",
  
  // Skip links
  skipLink: "sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50",
  
  // ARIA labels
  aria: {
    hidden: "aria-hidden='true'",
    expanded: "aria-expanded",
    controls: "aria-controls",
    labelledBy: "aria-labelledby",
    describedBy: "aria-describedby",
    live: "aria-live='polite'",
    liveAssertive: "aria-live='assertive'"
  },
  
  // Color contrast
  contrast: {
    high: "text-gray-900", // High contrast text
    medium: "text-gray-700", // Medium contrast text
    low: "text-gray-500", // Low contrast text (use sparingly)
    error: "text-red-600", // Error text
    success: "text-green-600", // Success text
    warning: "text-yellow-600", // Warning text
    info: "text-blue-600" // Info text
  },
  
  // Interactive elements
  interactive: {
    button: "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",
    link: "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 underline-offset-4 hover:underline",
    input: "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 border-gray-300 focus:border-blue-500",
    select: "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 border-gray-300 focus:border-blue-500"
  },
  
  // Motion preferences
  motion: {
    reduce: "motion-reduce:transition-none motion-reduce:transform-none",
    safe: "transition-all duration-300 ease-in-out",
    hover: "hover:transition-all hover:duration-300 hover:ease-in-out"
  },
  
  // Keyboard navigation
  keyboard: {
    tabIndex: {
      focusable: "tabIndex={0}",
      notFocusable: "tabIndex={-1}",
      auto: "tabIndex={0}"
    },
    keyDown: "onKeyDown",
    keyUp: "onKeyUp",
    enter: "onKeyDown={(e) => e.key === 'Enter' && handleClick()}",
    space: "onKeyDown={(e) => e.key === ' ' && handleClick()}",
    escape: "onKeyDown={(e) => e.key === 'Escape' && handleClose()}"
  },
  
  // Form accessibility
  form: {
    label: "block text-sm font-medium text-gray-700 mb-2",
    required: "text-red-500",
    error: "text-red-600 text-sm mt-1",
    help: "text-gray-500 text-sm mt-1",
    fieldset: "border border-gray-300 rounded-md p-4",
    legend: "text-sm font-medium text-gray-700 px-2"
  },
  
  // Image accessibility
  image: {
    decorative: "alt=''",
    meaningful: "alt='Descriptive text about the image'",
    loading: "loading='lazy'",
    priority: "priority"
  },
  
  // Navigation accessibility
  navigation: {
    main: "role='navigation' aria-label='Main navigation'",
    breadcrumb: "role='navigation' aria-label='Breadcrumb'",
    menu: "role='menu'",
    menuitem: "role='menuitem'",
    tablist: "role='tablist'",
    tab: "role='tab'",
    tabpanel: "role='tabpanel'"
  },
  
  // Content accessibility
  content: {
    heading: "role='heading'",
    main: "role='main'",
    complementary: "role='complementary'",
    banner: "role='banner'",
    contentinfo: "role='contentinfo'",
    region: "role='region'"
  },
  
  // Announcements
  announcements: {
    status: "aria-live='polite' aria-atomic='true'",
    alert: "aria-live='assertive' aria-atomic='true'",
    progress: "aria-live='polite'"
  }
};

// Common accessibility patterns
export const patterns = {
  // Skip to main content
  skipToMain: {
    link: "Skip to main content",
    href: "#main-content",
    className: "sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50"
  },
  
  // Loading states
  loading: {
    spinner: "Loading...",
    ariaLabel: "Loading content",
    className: "animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"
  },
  
  // Error states
  error: {
    message: "An error occurred. Please try again.",
    ariaLabel: "Error message",
    className: "text-red-600 bg-red-50 border border-red-200 rounded-md p-4"
  },
  
  // Success states
  success: {
    message: "Operation completed successfully.",
    ariaLabel: "Success message",
    className: "text-green-600 bg-green-50 border border-green-200 rounded-md p-4"
  },
  
  // Empty states
  empty: {
    message: "No content available.",
    ariaLabel: "Empty state",
    className: "text-gray-500 text-center py-8"
  }
};

// Accessibility testing helpers
export const testing = {
  // Check if element is focusable
  isFocusable: (element: HTMLElement): boolean => {
    const focusableSelectors = [
      'button:not([disabled])',
      'input:not([disabled])',
      'select:not([disabled])',
      'textarea:not([disabled])',
      'a[href]',
      '[tabindex]:not([tabindex="-1"])'
    ];
    
    return focusableSelectors.some(selector => element.matches(selector));
  },
  
  // Check color contrast ratio
  getContrastRatio: (color1: string, color2: string): number => {
    // This would need a proper color contrast calculation library
    // For now, return a placeholder
    return 4.5; // WCAG AA minimum
  },
  
  // Validate ARIA attributes
  validateAria: (element: HTMLElement): string[] => {
    const errors: string[] = [];
    
    // Check for required ARIA attributes
    if (element.getAttribute('aria-expanded') && !element.getAttribute('aria-controls')) {
      errors.push('Element with aria-expanded should have aria-controls');
    }
    
    if (element.getAttribute('aria-labelledby') && !document.getElementById(element.getAttribute('aria-labelledby')!)) {
      errors.push('aria-labelledby references non-existent element');
    }
    
    return errors;
  }
};
