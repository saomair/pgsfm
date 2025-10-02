// Performance optimization utilities for better Core Web Vitals

export const performance = {
  // Image optimization
  image: {
    // Next.js Image component props for optimal performance
    hero: {
      priority: true,
      quality: 90,
      sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    },
    card: {
      priority: false,
      quality: 80,
      sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    },
    banner: {
      priority: false,
      quality: 85,
      sizes: "(max-width: 768px) 100vw, 50vw"
    },
    avatar: {
      priority: false,
      quality: 75,
      sizes: "(max-width: 768px) 50px, 80px"
    }
  },
  
  // Lazy loading
  lazy: {
    // Intersection Observer options for lazy loading
    observer: {
      root: null,
      rootMargin: '50px',
      threshold: 0.1
    },
    
    // Lazy loading classes
    classes: {
      loading: 'opacity-0 transition-opacity duration-300',
      loaded: 'opacity-100',
      error: 'opacity-50'
    }
  },
  
  // Bundle optimization
  bundle: {
    // Dynamic imports for code splitting
    dynamic: {
      // Lazy load heavy components (examples - replace with actual components)
      // heavyComponent: () => import('@/components/HeavyComponent'),
      // chart: () => import('@/components/Chart'),
      // map: () => import('@/components/Map')
    },
    
    // Preload critical resources
    preload: {
      fonts: [
        '/fonts/inter-var.woff2',
        '/fonts/inter-var.woff'
      ],
      images: [
        '/images/hero-bg.jpg',
        '/images/logo.svg'
      ]
    }
  },
  
  // Caching strategies
  cache: {
    // Static assets cache
    static: {
      maxAge: 31536000, // 1 year
      immutable: true
    },
    
    // API responses cache
    api: {
      maxAge: 3600, // 1 hour
      staleWhileRevalidate: 86400 // 1 day
    },
    
    // Page cache
    page: {
      maxAge: 0,
      staleWhileRevalidate: 60 // 1 minute
    }
  },
  
  // Critical CSS
  critical: {
    // Above-the-fold styles
    aboveFold: [
      'layout',
      'typography',
      'hero',
      'navigation'
    ],
    
    // Below-the-fold styles (can be loaded later)
    belowFold: [
      'cards',
      'testimonials',
      'footer',
      'animations'
    ]
  },
  
  // Resource hints
  hints: {
    // DNS prefetch for external domains
    dnsPrefetch: [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com',
      'https://placehold.co'
    ],
    
    // Preconnect to critical origins
    preconnect: [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com'
    ],
    
    // Prefetch next page resources
    prefetch: [
      '/about',
      '/services',
      '/contact'
    ]
  }
};

// Performance monitoring
export const monitoring = {
  // Core Web Vitals thresholds
  thresholds: {
    LCP: 2500, // Largest Contentful Paint (ms)
    FID: 100,  // First Input Delay (ms)
    CLS: 0.1,  // Cumulative Layout Shift
    FCP: 1800, // First Contentful Paint (ms)
    TTFB: 800  // Time to First Byte (ms)
  },
  
  // Performance metrics collection
  collectMetrics: () => {
    if (typeof window !== 'undefined' && 'web-vitals' in window) {
      // This would integrate with web-vitals library
      console.log('Performance metrics collected');
    }
  },
  
  // Performance budget
  budget: {
    // Maximum bundle sizes
    bundle: {
      js: 250000, // 250KB
      css: 50000,  // 50KB
      images: 1000000 // 1MB per image
    },
    
    // Maximum number of requests
    requests: {
      total: 50,
      images: 20,
      fonts: 5
    }
  }
};

// Performance optimization helpers
export const helpers = {
  // Debounce function for performance
  debounce: <T extends (...args: unknown[]) => unknown>(
    func: T,
    wait: number
  ): ((...args: Parameters<T>) => void) => {
    let timeout: NodeJS.Timeout;
    return (...args: Parameters<T>) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  },
  
  // Throttle function for performance
  throttle: <T extends (...args: unknown[]) => unknown>(
    func: T,
    limit: number
  ): ((...args: Parameters<T>) => void) => {
    let inThrottle: boolean;
    return (...args: Parameters<T>) => {
      if (!inThrottle) {
        func(...args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    };
  },
  
  // Check if element is in viewport
  isInViewport: (element: HTMLElement): boolean => {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  },
  
  // Lazy load images
  lazyLoadImage: (img: HTMLImageElement): void => {
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const image = entry.target as HTMLImageElement;
            if (image.dataset.src) {
              image.src = image.dataset.src;
              image.classList.remove('lazy');
              observer.unobserve(image);
            }
          }
        });
      });
      observer.observe(img);
    } else {
      // Fallback for older browsers
      img.src = img.dataset.src || '';
    }
  }
};
