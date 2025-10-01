import { Service } from '@/lib/data';
import ServiceCard from './ServiceCard';

interface ServiceGridProps {
  services: Service[];
  className?: string;
}

export default function ServiceGrid({ services, className = "" }: ServiceGridProps) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${className}`}>
      {services.map((service) => (
        <ServiceCard key={service.slug} service={service} />
      ))}
    </div>
  );
}
