'use client';

import Image from 'next/image';
import Link from 'next/link';
import { accreditations } from '@/lib/data';
import { Award, ExternalLink } from 'lucide-react';

interface AccreditationsGridProps {
  className?: string;
  showTitle?: boolean;
  maxItems?: number;
}

const categoryColors = {
  security: 'from-green-500 to-green-600',
  'health-safety': 'from-green-500 to-green-600',
  'data-protection': 'from-purple-500 to-purple-600',
  construction: 'from-orange-500 to-orange-600',
  'cyber-security': 'from-red-500 to-red-600'
};

const categoryLabels = {
  security: 'Security',
  'health-safety': 'Health & Safety',
  'data-protection': 'Data Protection',
  construction: 'Construction',
  'cyber-security': 'Cyber Security'
};

export default function AccreditationsGrid({ 
  className = "", 
  showTitle = true, 
  maxItems = 7 
}: AccreditationsGridProps) {
  const displayAccreditations = accreditations.slice(0, maxItems);

  return (
    <div className={`py-20 bg-gradient-to-b from-white to-slate-50 ${className}`}>
      <div className="container mx-auto px-4">
        {showTitle && (
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-100 to-green-200 text-green-700 text-sm font-semibold mb-6 shadow-sm">
              <Award className="w-4 h-4 mr-2" />
              Accreditations & Certifications
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Trusted & Certified Excellence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We maintain the highest industry standards through our comprehensive accreditations and certifications, 
              ensuring you receive professional, compliant, and reliable services.
            </p>
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayAccreditations.map((accreditation, index) => (
            <Link
              key={index}
              href={accreditation.website}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 overflow-hidden"
            >
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="relative w-20 h-16 flex-shrink-0">
                    <Image
                      src={accreditation.logoUrl}
                      alt={`${accreditation.name} certification`}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${categoryColors[accreditation.category]}`}>
                    {categoryLabels[accreditation.category]}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-300">
                  {accreditation.name}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-4">
                  {accreditation.description}
                </p>
                
                <div className="flex items-center text-green-600 text-sm font-medium group-hover:text-green-700 transition-colors duration-300">
                  <span>Learn more</span>
                  <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-full text-sm font-semibold shadow-lg">
            <Award className="w-4 h-4 mr-2" />
            All certifications are current and regularly audited
          </div>
        </div>
      </div>
    </div>
  );
}
