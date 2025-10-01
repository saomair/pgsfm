// Animation and interaction system for enhanced user experience

export const animations = {
  // Transition durations
  duration: {
    fast: 'duration-150',
    normal: 'duration-300',
    slow: 'duration-500',
    slower: 'duration-700'
  },
  
  // Easing functions
  easing: {
    linear: 'ease-linear',
    in: 'ease-in',
    out: 'ease-out',
    inOut: 'ease-in-out',
    bounce: 'ease-bounce',
    elastic: 'ease-elastic'
  },
  
  // Hover animations
  hover: {
    // Scale animations
    scale: {
      small: 'hover:scale-105',
      medium: 'hover:scale-110',
      large: 'hover:scale-125'
    },
    
    // Translate animations
    translate: {
      up: 'hover:-translate-y-1',
      upLarge: 'hover:-translate-y-2',
      down: 'hover:translate-y-1',
      left: 'hover:-translate-x-1',
      right: 'hover:translate-x-1'
    },
    
    // Opacity animations
    opacity: {
      fade: 'hover:opacity-80',
      fadeIn: 'hover:opacity-100',
      fadeOut: 'hover:opacity-50'
    },
    
    // Shadow animations
    shadow: {
      small: 'hover:shadow-md',
      medium: 'hover:shadow-lg',
      large: 'hover:shadow-xl',
      xl: 'hover:shadow-2xl'
    },
    
    // Color animations
    color: {
      primary: 'hover:text-blue-600',
      secondary: 'hover:text-gray-600',
      white: 'hover:text-white',
      accent: 'hover:text-blue-500'
    }
  },
  
  // Focus animations
  focus: {
    ring: 'focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
    ringOffset: 'focus:ring-offset-2',
    scale: 'focus:scale-105',
    outline: 'focus:outline-none'
  },
  
  // Loading animations
  loading: {
    spin: 'animate-spin',
    pulse: 'animate-pulse',
    bounce: 'animate-bounce',
    ping: 'animate-ping',
    fade: 'animate-fade-in',
    slide: 'animate-slide-in'
  },
  
  // Page transitions
  page: {
    fadeIn: 'animate-fade-in',
    slideUp: 'animate-slide-up',
    slideDown: 'animate-slide-down',
    slideLeft: 'animate-slide-left',
    slideRight: 'animate-slide-right'
  },
  
  // Stagger animations
  stagger: {
    delay1: 'delay-100',
    delay2: 'delay-200',
    delay3: 'delay-300',
    delay4: 'delay-400',
    delay5: 'delay-500'
  }
};

// Micro-interactions
export const microInteractions = {
  // Button interactions
  button: {
    primary: 'transform transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95',
    secondary: 'transform transition-all duration-300 hover:scale-105 hover:shadow-md active:scale-95',
    outline: 'transform transition-all duration-300 hover:scale-105 hover:bg-blue-50 active:scale-95',
    ghost: 'transform transition-all duration-300 hover:scale-105 hover:bg-gray-50 active:scale-95'
  },
  
  // Card interactions
  card: {
    default: 'transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:-translate-y-2',
    glass: 'transform transition-all duration-300 hover:scale-105 hover:bg-white/20 hover:-translate-y-2',
    solid: 'transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-2'
  },
  
  // Link interactions
  link: {
    default: 'transition-colors duration-200 hover:text-blue-600',
    underline: 'transition-all duration-200 hover:underline hover:underline-offset-4',
    background: 'transition-all duration-200 hover:bg-blue-50 hover:text-blue-600 px-2 py-1 rounded'
  },
  
  // Image interactions
  image: {
    zoom: 'transform transition-transform duration-300 hover:scale-110',
    fade: 'transition-opacity duration-300 hover:opacity-80',
    overlay: 'transform transition-all duration-300 hover:scale-105 group-hover:opacity-100'
  },
  
  // Form interactions
  form: {
    input: 'transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500',
    select: 'transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500',
    textarea: 'transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
  }
};

// Animation sequences
export const sequences = {
  // Fade in sequence
  fadeInSequence: [
    'opacity-0 translate-y-4',
    'animate-fade-in-up',
    'opacity-100 translate-y-0'
  ],
  
  // Slide in sequence
  slideInSequence: [
    'opacity-0 translate-x-4',
    'animate-slide-in-right',
    'opacity-100 translate-x-0'
  ],
  
  // Scale in sequence
  scaleInSequence: [
    'opacity-0 scale-95',
    'animate-scale-in',
    'opacity-100 scale-100'
  ],
  
  // Stagger children
  staggerChildren: (count: number) => {
    return Array.from({ length: count }, (_, i) => `delay-${(i + 1) * 100}`);
  }
};

// Custom CSS animations (to be added to globals.css)
export const customAnimations = `
@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes fade-in-up {
  from { 
    opacity: 0; 
    transform: translateY(20px); 
  }
  to { 
    opacity: 1; 
    transform: translateY(0); 
  }
}

@keyframes slide-in-right {
  from { 
    opacity: 0; 
    transform: translateX(20px); 
  }
  to { 
    opacity: 1; 
    transform: translateX(0); 
  }
}

@keyframes scale-in {
  from { 
    opacity: 0; 
    transform: scale(0.95); 
  }
  to { 
    opacity: 1; 
    transform: scale(1); 
  }
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

@keyframes glow {
  0%, 100% { box-shadow: 0 0 5px rgba(59, 130, 246, 0.5); }
  50% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.8); }
}

.animate-fade-in {
  animation: fade-in 0.5s ease-out;
}

.animate-fade-in-up {
  animation: fade-in-up 0.6s ease-out;
}

.animate-slide-in-right {
  animation: slide-in-right 0.6s ease-out;
}

.animate-scale-in {
  animation: scale-in 0.4s ease-out;
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}

.animate-glow {
  animation: glow 2s ease-in-out infinite;
}
`;

// Animation utilities
export const utils = {
  // Combine animation classes
  combine: (...classes: string[]): string => {
    return classes.filter(Boolean).join(' ');
  },
  
  // Create staggered animation
  stagger: (baseClass: string, delay: number, count: number): string[] => {
    return Array.from({ length: count }, (_, i) => 
      `${baseClass} delay-${(i + 1) * delay}`
    );
  },
  
  // Create responsive animation
  responsive: (mobile: string, desktop: string): string => {
    return `${mobile} md:${desktop}`;
  },
  
  // Create conditional animation
  conditional: (condition: boolean, trueClass: string, falseClass: string = ''): string => {
    return condition ? trueClass : falseClass;
  }
};
