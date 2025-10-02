'use client';

import { ReactNode } from 'react';
import { getImageUrl, getBackgroundColor } from '@/lib/imagePresets';
import { Star } from 'lucide-react';
import ModernButton from './ModernButton';

interface ModernHeroProps {
  title: string;
  subtitle?: string;
  description: string;
  imageText: string;
  ctaText: string;
  ctaHref: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  badge?: string;
  className?: string;
}

export default function ModernHero({
  title,
  subtitle,
  description,
  imageText,
  ctaText,
  ctaHref,
  secondaryCtaText,
  secondaryCtaHref,
  badge,
  className = ""
}: ModernHeroProps) {
  const backgroundColor = getBackgroundColor('hero', imageText);
  
  return (
    <div className={`relative ${backgroundColor} overflow-hidden ${className}`}>
      {/* Hero Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black/20"></div>
      </div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat'
        }}></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {badge && (
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-200 text-sm font-semibold mb-6">
              <Star className="w-4 h-4 mr-2" />
              {badge}
            </div>
          )}
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            {title}
          </h1>
          {subtitle && (
            <h2 className="text-2xl md:text-3xl text-blue-200 mb-6">
              {subtitle}
            </h2>
          )}
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ModernButton
              as="a"
              href={ctaHref}
              size="lg"
              className="px-8 py-4"
            >
              {ctaText}
            </ModernButton>
            {secondaryCtaText && secondaryCtaHref && (
              <ModernButton
                as="a"
                href={secondaryCtaHref}
                variant="outline"
                size="lg"
                className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-4"
              >
                {secondaryCtaText}
              </ModernButton>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
