import { policies } from '@/lib/data';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { getImageUrl } from '@/lib/imagePresets';
import { FileText, Shield, Lock, Heart, Leaf, Star, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Policies - PGS FM Ltd Professional Security & Facilities Management',
  description: 'View our company policies including privacy, data protection, health & safety, business ethics, and environmental policies.',
};

const policyIcons = {
  'Privacy Policy': FileText,
  'Data Protection Policy': Lock,
  'Health & Safety Policy': Shield,
  'Business Ethics Policy': Heart,
  'Environmental Policy': Leaf,
};

export default function PoliciesPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-slate-900 via-green-900 to-slate-800 overflow-hidden">
        {/* Hero Background Image */}
        <div className="absolute inset-0">
          <Image
            src={getImageUrl('hero', 'Our Policies')}
            alt="Our Policies"
            fill
            priority
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-green-900/80 to-slate-800/80"></div>
        </div>
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat'
          }}></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/20 border border-green-400/30 text-green-200 text-sm font-semibold mb-6">
              <Star className="w-4 h-4 mr-2" />
              Our Policies
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Transparency and Compliance
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              We are committed to maintaining the highest standards of business practice, compliance, and ethical conduct. 
              Our policies reflect our dedication to transparency and accountability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300">
                <Link href="/contact" className="flex items-center">
                  Contact Us
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold backdrop-blur-sm bg-transparent">
                <Link href="/about">About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Policies Overview */}
      <div className="py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-100 to-green-200 text-green-700 text-sm font-semibold mb-6 shadow-sm">
              <FileText className="w-4 h-4 mr-2" />
              Company Policies
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Company Policies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our comprehensive policy framework ensures we operate with the highest standards of integrity, 
              compliance, and responsibility in all aspects of our business operations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {policies.map((policy, index) => {
              const IconComponent = policyIcons[policy.title as keyof typeof policyIcons] || FileText;
              return (
                <div key={index} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border border-gray-100">
                  <div className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors duration-300">
                      {policy.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {policy.description}
                    </p>
                    <Button asChild className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white">
                      <Link href={`/policies/${policy.slug}`} className="flex items-center justify-center">
                        View Policy
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Policy Framework */}
      <div className="py-20 bg-gradient-to-br from-slate-900 via-green-900 to-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat'
          }}></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/20 border border-green-400/30 text-green-200 text-sm font-semibold mb-6">
              <Star className="w-4 h-4 mr-2" />
              Policy Framework
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Policy Framework
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Our policies are designed to ensure compliance with all relevant regulations while maintaining 
              the highest standards of ethical conduct and operational excellence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group text-center p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Compliance</h3>
              <p className="text-slate-300 leading-relaxed">Full adherence to UK and international regulations and standards.</p>
            </div>
            
            <div className="group text-center p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Lock className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Data Protection</h3>
              <p className="text-slate-300 leading-relaxed">Robust data protection measures in compliance with GDPR and other privacy laws.</p>
            </div>
            
            <div className="group text-center p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Heart className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Ethics</h3>
              <p className="text-slate-300 leading-relaxed">Strong ethical framework guiding all business decisions and operations.</p>
            </div>
            
            <div className="group text-center p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Leaf className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Sustainability</h3>
              <p className="text-slate-300 leading-relaxed">Environmental responsibility and sustainable business practices.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Policy Implementation */}
      <div className="py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-100 to-green-200 text-green-700 text-sm font-semibold mb-6 shadow-sm">
                <Shield className="w-4 h-4 mr-2" />
                Implementation
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Policy Implementation
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Our policies are not just documents on paper &ndash; they are living frameworks that guide our daily operations 
                and decision-making processes. We ensure all team members understand and adhere to these policies through 
                regular training and monitoring.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 text-white rounded-full flex items-center justify-center mr-4 mt-1 text-lg font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Regular Training</h3>
                    <p className="text-gray-600">All staff receive comprehensive training on our policies and procedures.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 text-white rounded-full flex items-center justify-center mr-4 mt-1 text-lg font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Ongoing Monitoring</h3>
                    <p className="text-gray-600">Continuous monitoring ensures compliance and identifies areas for improvement.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-full flex items-center justify-center mr-4 mt-1 text-lg font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Regular Updates</h3>
                    <p className="text-gray-600">Policies are regularly reviewed and updated to reflect changing regulations and best practices.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-full flex items-center justify-center mr-4 mt-1 text-lg font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Client Transparency</h3>
                    <p className="text-gray-600">We maintain transparency with our clients about our policies and practices.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative group">
              <div className="bg-white rounded-2xl shadow-2xl p-8 group-hover:shadow-3xl transition-all duration-300">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Policy Highlights</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-gray-600">GDPR compliant data handling and processing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-gray-600">Comprehensive health and safety protocols</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-gray-600">Anti-corruption and ethical business practices</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-gray-600">Environmental sustainability commitments</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-gray-600">Regular policy review and updates</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-gray-600">Staff training and compliance monitoring</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-green-600 via-green-700 to-green-800 relative overflow-hidden">
        {/* CTA Background Image */}
        <div className="absolute inset-0">
          <Image
            src={getImageUrl('banner', 'Our Policies')}
            alt="Our Policies"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/90 via-green-700/90 to-green-800/90"></div>
        </div>
        
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat'
          }}></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Questions About Our Policies?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            If you have any questions about our policies or would like to discuss our compliance framework, 
            please don&apos;t hesitate to contact us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-white to-slate-100 text-green-600 hover:from-slate-100 hover:to-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300">
              <Link href="/contact" className="flex items-center">
                Contact Us
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold backdrop-blur-sm bg-transparent">
              <Link href="/about">About Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
