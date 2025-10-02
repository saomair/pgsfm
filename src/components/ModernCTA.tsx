'use client';

import { ReactNode } from 'react';
import { getImageUrl, getBackgroundColor } from '@/lib/imagePresets';
import ModernButton from './ModernButton';

interface ModernCTAProps {
  title: string;
  description: string;
  imageText: string;
  primaryCtaText: string;
  primaryCtaHref: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  className?: string;
}

export default function ModernCTA({
  title,
  description,
  imageText,
  primaryCtaText,
  primaryCtaHref,
  secondaryCtaText,
  secondaryCtaHref,
  className = ""
}: ModernCTAProps) {
  const backgroundColor = getBackgroundColor('banner', imageText);
  
  return (
    <div className={`py-20 ${backgroundColor} relative overflow-hidden ${className}`}>
      {/* CTA Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black/20"></div>
      </div>
      
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat'
        }}></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          {title}
        </h2>
        <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto leading-relaxed">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <ModernButton
            as="a"
            href={primaryCtaHref}
            size="lg"
            className="bg-gradient-to-r from-white to-slate-100 text-green-600 hover:from-slate-100 hover:to-white px-8 py-4"
          >
            {primaryCtaText}
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
  );
}
