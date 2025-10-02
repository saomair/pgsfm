'use client';

import Image from 'next/image';
import Link from 'next/link';
import { accreditations } from '@/lib/data';
import { Award } from 'lucide-react';

interface TrustStripProps {
  className?: string;
  showTitle?: boolean;
  maxItems?: number;
}

export default function TrustStrip({ 
  className = "", 
  showTitle = true, 
  maxItems = 7 
}: TrustStripProps) {
  const displayAccreditations = accreditations.slice(0, maxItems);

  return (
    <div className={`py-12 bg-gradient-to-r from-slate-50 to-green-50 border-y border-gray-200 ${className}`}>
      <div className="container mx-auto px-4">
        {showTitle && (
          <div className="text-center mb-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-semibold mb-4">
              <Award className="w-4 h-4 mr-2" />
              Trusted & Certified
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              Accredited & Certified Excellence
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We maintain the highest industry standards through our accreditations and certifications
            </p>
          </div>
        )}
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {displayAccreditations.map((accreditation, index) => (
            <div key={index} className="flex flex-col items-center">
              <Link
                href={accreditation.website}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center opacity-70 hover:opacity-100 transition-all duration-300 hover:scale-105"
                title={accreditation.description}
              >
                <div className="relative w-24 h-12 md:w-32 md:h-16">
                  <Image
                    src={accreditation.logoUrl}
                    alt={`${accreditation.name} certification`}
                    fill
                    className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </Link>
              {/* Show ACS description prominently */}
              {accreditation.name === "ACS" && (
                <div className="mt-3 max-w-xs text-center">
                  <p className="text-xs md:text-sm text-gray-700 font-medium leading-tight">
                    PGS FM LTD currently holds SIA Approved Contractor Scheme (ACS) status for the provision of Security Guarding
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="text-center mt-6">
          <p className="text-sm text-gray-500">
            Click on any certification to learn more
          </p>
        </div>
      </div>
    </div>
  );
}
