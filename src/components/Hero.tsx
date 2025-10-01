import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { getImageUrl } from '@/lib/imagePresets';

interface HeroProps {
  title: string;
  subtitle?: string;
  description: string;
  ctaText?: string;
  ctaHref?: string;
  imageUrl?: string;
  imageAlt?: string;
  className?: string;
}

export default function Hero({
  title,
  subtitle,
  description,
  ctaText = "Learn More",
  ctaHref = "/contact",
  imageUrl,
  imageAlt = "Hero image",
  className = ""
}: HeroProps) {
  const heroImageUrl = imageUrl || getImageUrl('hero', 'Professional Security Services');

  return (
    <section className={`relative min-h-[400px] md:min-h-[500px] lg:min-h-[600px] flex items-center ${className}`}>
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImageUrl}
          alt={imageAlt}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="max-w-3xl">
          {subtitle && (
            <p className="text-lg md:text-xl text-white/90 mb-4 font-medium">
              {subtitle}
            </p>
          )}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl">
            {description}
          </p>
          {ctaText && ctaHref && (
            <Button 
              size="lg" 
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg"
              asChild
            >
              <a href={ctaHref}>{ctaText}</a>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
