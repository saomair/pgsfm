import Image from 'next/image';
import { getImageUrl } from '@/lib/imagePresets';
import { Button } from '@/components/ui/button';
import { Shield, Users, Clock, Award, Building, Star, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function DemoAIImagesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-800">
      {/* Header */}
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            AI-Generated Images Demo
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            This page demonstrates how AI-generated images from OpenAI DALL·E (via our tooling)
            can be integrated into your PGS FM Ltd website for a professional appearance.
          </p>
        </div>

        {/* Hero Section Demo */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Hero Section Example</h2>
          <div className="relative bg-gradient-to-br from-slate-900 via-green-900 to-slate-800 rounded-2xl overflow-hidden">
            <div className="absolute inset-0">
              <Image
                src={getImageUrl('hero', 'Professional Security Team')}
                alt="Professional Security Team - AI Generated"
                fill
                priority
                className="object-cover opacity-30"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-green-900/80 to-slate-800/80"></div>
            </div>
            
            <div className="relative z-10 p-12">
              <div className="text-center">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/20 border border-green-400/30 text-green-200 text-sm font-medium mb-6">
                  <Star className="w-4 h-4 mr-2" />
                  AI-Generated Hero Image
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">
                  Professional Security Services
                </h3>
                <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
                  This hero image was generated using OpenAI DALL·E to create
                  professional, industry-specific imagery for our security services.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Service Cards Demo */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Service Cards Demo</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Security Services Card */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={getImageUrl('card', 'Security Services')}
                  alt="Security Services - AI Generated"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Shield className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold">Security Services</h3>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  Professional security solutions tailored to your business needs with AI-generated imagery.
                </p>
                <Button className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white">
                  Learn More
                </Button>
              </div>
            </div>

            {/* Facilities Management Card */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={getImageUrl('card', 'Facilities Management')}
                  alt="Facilities Management - AI Generated"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Building className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold">Facilities Management</h3>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  Comprehensive facilities management with custom AI-generated visual content.
                </p>
                <Button className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white">
                  Learn More
                </Button>
              </div>
            </div>

            {/* Cleaning Services Card */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={getImageUrl('card', 'Cleaning Services')}
                  alt="Cleaning Services - AI Generated"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Award className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold">Cleaning Services</h3>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  Professional cleaning solutions enhanced with AI-generated imagery.
                </p>
                <Button className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Team Photos Demo */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Team Photos Demo</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'John Smith', role: 'Security Director', image: 'John Smith' },
              { name: 'Sarah Johnson', role: 'Facilities Manager', image: 'Sarah Johnson' },
              { name: 'Michael Brown', role: 'Operations Lead', image: 'Michael Brown' },
              { name: 'Emma Wilson', role: 'Quality Assurance', image: 'Emma Wilson' }
            ].map((member, index) => (
              <div key={index} className="text-center p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src={getImageUrl('team', member.image)}
                    alt={`${member.name} - AI Generated`}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-slate-300">{member.role}</p>
                <div className="mt-4 inline-flex items-center px-3 py-1 rounded-full bg-green-500/20 text-green-200 text-sm">
                  <Star className="w-3 h-3 mr-1" />
                  AI Generated
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Banner Images Demo */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Banner Images Demo</h2>
          <div className="space-y-8">
            {[
              { title: 'Healthcare Sector', description: 'Specialized security solutions for healthcare facilities' },
              { title: 'Retail Sector', description: 'Comprehensive security for retail environments' },
              { title: 'Corporate Sector', description: 'Professional security for corporate offices' }
            ].map((sector, index) => (
              <div key={index} className="relative rounded-2xl overflow-hidden">
                <Image
                  src={getImageUrl('banner', sector.title)}
                  alt={`${sector.title} - AI Generated`}
                  width={2400}
                  height={900}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{sector.title}</h3>
                  <p className="text-lg">{sector.description}</p>
                  <div className="mt-4 inline-flex items-center px-3 py-1 rounded-full bg-green-500/20 text-green-200 text-sm">
                    <Star className="w-3 h-3 mr-1" />
                    AI Generated Banner
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Implementation Guide */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">Implementation Guide</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-green-300 mb-4">Step 1: Generate Images</h3>
              <ul className="text-slate-300 space-y-2">
                <li>• Add <code className="bg-black/20 px-2 py-1 rounded">OPENAI_API_KEY</code> to your <code className="bg-black/20 px-2 py-1 rounded">.env.local</code></li>
                <li>• Run <code className="bg-black/20 px-2 py-1 rounded">npm run generate-dalle -- --category=hero</code> to batch hero assets</li>
                <li>• Or POST to <code className="bg-black/20 px-2 py-1 rounded">/api/dalle</code> with a preset payload when working in UI</li>
                <li>• Review outputs and crop to the target aspect ratio before committing</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-green-300 mb-4">Step 2: Integrate Images</h3>
              <ul className="text-slate-300 space-y-2">
                <li>• Generated files land in <code className="bg-black/20 px-2 py-1 rounded">/public/images/ai-generated/&lt;category&gt;</code></li>
                <li>• Update <code className="bg-black/20 px-2 py-1 rounded">imagePresets.ts</code> if you add new variants</li>
                <li>• Reference assets with <code className="bg-black/20 px-2 py-1 rounded">getImageUrl()</code> helpers</li>
                <li>• Supply descriptive alt text for accessibility</li>
                <li>• Optimise exports with a lossless compressor after review</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Button asChild size="lg" className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-4 text-lg font-semibold">
            <Link href="/contact" className="flex items-center">
              Get Started with AI Images
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
