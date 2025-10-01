import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { getImageUrl } from '@/lib/imagePresets';
import { Service } from '@/lib/data';

interface ServiceCardProps {
  service: Service;
  className?: string;
}

export default function ServiceCard({ service, className = "" }: ServiceCardProps) {
  return (
    <Card className={`group hover:shadow-lg transition-shadow duration-300 ${className}`}>
      <div className="relative overflow-hidden">
        <Image
          src={getImageUrl('card', service.title)}
          alt={`${service.title} service`}
          width={1200}
          height={900}
          className="w-full h-[200px] md:h-[250px] object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-gray-900">
          {service.title}
        </CardTitle>
        <CardDescription className="text-gray-600 leading-relaxed">
          {service.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2 mb-6">
          {service.features.slice(0, 3).map((feature, index) => (
            <li key={index} className="flex items-start text-sm text-gray-600">
              <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
        <Button asChild className="w-full">
          <Link href={`/services/${service.slug}`}>
            Learn More
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
