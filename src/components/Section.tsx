import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  background?: 'white' | 'gray' | 'blue' | 'red';
}

export default function Section({
  children,
  className = "",
  containerClassName = "",
  background = 'white'
}: SectionProps) {
  const backgroundClasses = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    blue: 'bg-blue-50',
    red: 'bg-red-600'
  };

  return (
    <section className={cn('py-16 md:py-20', backgroundClasses[background], className)}>
      <div className={cn('container mx-auto px-4', containerClassName)}>
        {children}
      </div>
    </section>
  );
}
