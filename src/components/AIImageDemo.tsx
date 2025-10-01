import Image from 'next/image';
import { getImageUrl } from '@/lib/imagePresets';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Shield, Users, Clock, Award, Building, Star, ArrowRight, Download, ExternalLink } from 'lucide-react';

interface AIImageDemoProps {
  title: string;
  description: string;
  type: 'hero' | 'card' | 'team' | 'banner' | 'blog';
  text: string;
  prompt?: string;
  fileName?: string;
}

export default function AIImageDemo({ title, description, type, text, prompt, fileName }: AIImageDemoProps) {
  const imageUrl = getImageUrl(type, text);
  const dalleHref = fileName ? `/api/dalle?category=${type}&fileName=${encodeURIComponent(fileName)}` : '/api/dalle';
  const preset = {
    hero: { width: 1920, height: 800 },
    card: { width: 1200, height: 900 },
    team: { width: 1200, height: 1500 },
    banner: { width: 2400, height: 900 },
    blog: { width: 1600, height: 900 }
  }[type];

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
      {/* Image Display */}
      <div className="relative">
        <div className="relative h-64 md:h-80 overflow-hidden">
          <Image
            src={imageUrl}
            alt={`${text} - AI Generated`}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          <div className="absolute top-4 left-4">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-500/20 border border-green-400/30 text-green-200 text-sm font-medium backdrop-blur-sm">
              <Star className="w-3 h-3 mr-1" />
              AI Generated
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        
        {/* Image Details */}
        <div className="bg-gray-50 rounded-lg p-4 mb-4">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="font-medium text-gray-700">Type:</span>
              <span className="ml-2 text-gray-600 capitalize">{type}</span>
            </div>
            <div>
              <span className="font-medium text-gray-700">Dimensions:</span>
              <span className="ml-2 text-gray-600">{preset.width}x{preset.height}</span>
            </div>
            <div className="col-span-2">
              <span className="font-medium text-gray-700">Path:</span>
              <code className="ml-2 text-gray-600 text-xs bg-gray-200 px-2 py-1 rounded">{imageUrl}</code>
            </div>
          </div>
        </div>

        {/* AI Prompt (if provided) */}
        {prompt && (
          <div className="bg-blue-50 rounded-lg p-4 mb-4">
            <h4 className="font-medium text-blue-900 mb-2">Suggested AI Prompt:</h4>
            <p className="text-blue-800 text-sm italic">"{prompt}"</p>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-3">
          <Button
            size="sm"
            className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white"
            asChild
          >
            <Link href={dalleHref} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4 mr-2" />
              Open DALL·E Preset
            </Link>
          </Button>
          <Button
            size="sm"
            variant="outline"
            className="border-gray-300 text-gray-700 hover:bg-gray-50"
            asChild
          >
            <a href={imageUrl} target="_blank" rel="noopener noreferrer">
              <Download className="w-4 h-4 mr-2" />
              View Full Size
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}

// Usage Examples Component
export function AIImageUsageExamples() {
  const examples = [
    {
      title: "Hero Section Image",
      description: "Professional hero image for homepage with security theme",
      type: 'hero' as const,
      text: 'Professional Security Team',
      fileName: 'hero-security-team.jpg',
      prompt: "Professional security team in uniform, modern office building background, corporate style, high quality, 16:9 aspect ratio"
    },
    {
      title: "Security Service Card",
      description: "Service card image for security services section",
      type: 'card' as const,
      text: 'Security Services',
      fileName: 'card-security-services.jpg',
      prompt: "Security guard monitoring surveillance cameras, professional uniform, modern office environment, 4:3 aspect ratio"
    },
    {
      title: "Team Member Photo",
      description: "Professional headshot for team member",
      type: 'team' as const,
      text: 'John Smith',
      fileName: 'team-john-smith.jpg',
      prompt: "Professional business headshot, security industry, corporate attire, clean background, portrait orientation"
    },
    {
      title: "Healthcare Banner",
      description: "Banner image for healthcare sector services",
      type: 'banner' as const,
      text: 'Healthcare Sector',
      fileName: 'banner-healthcare.jpg',
      prompt: "Healthcare facility with security presence, modern hospital building, professional atmosphere, wide banner format"
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">AI Image Integration Examples</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Below are examples of how AI-generated images from OpenAI DALL·E can be integrated 
          into different sections of your PGS FM Ltd website.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {examples.map((example, index) => (
          <AIImageDemo key={index} {...example} />
        ))}
      </div>
    </div>
  );
}
