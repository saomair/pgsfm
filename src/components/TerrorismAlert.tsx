'use client';

import { AlertTriangle, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export default function TerrorismAlert() {
  return (
    <div className="bg-gradient-to-r from-red-600 to-red-700 text-white py-2 px-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center space-x-2">
            <AlertTriangle className="w-4 h-4 text-white flex-shrink-0" />
            <div className="text-xs font-medium">
              <span className="font-bold">UK THREAT LEVEL:</span> National Threat Level - 
              <span className="font-semibold"> SUBSTANTIAL</span>
            </div>
          </div>
          <Link 
            href="https://www.gov.uk/terrorism-national-emergency"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-1 bg-white/20 hover:bg-white/30 px-2 py-1 rounded text-xs font-medium transition-colors duration-200 backdrop-blur-sm border border-white/20 hover:border-white/30"
          >
            <span>Official Info</span>
            <ExternalLink className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </div>
  );
}
