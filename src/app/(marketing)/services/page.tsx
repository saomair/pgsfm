import Hero from '@/components/Hero';
import Section from '@/components/Section';
import ServiceGrid from '@/components/ServiceGrid';
import { services } from '@/lib/data';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { Shield, Users, Clock, CheckCircle, Star, ArrowRight, Eye, Car, Calendar, Briefcase, Building, Camera, Sparkles } from 'lucide-react';
import { getImageUrl, getBackgroundColor } from '@/lib/imagePresets';

export const metadata = {
  title: 'Services - PGS FM Ltd Professional Security & Facilities Management',
  description: 'Comprehensive security services, facilities management, and cleaning solutions. Professional, reliable, and tailored to your business needs.',
};

// Icon mapping for services
const getServiceIcon = (serviceTitle: string) => {
  const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
    'Static Guarding': Shield,
    'Corporate Protection & Security': Briefcase,
    'Immediate Response Team': Clock,
    'Event Security': Calendar,
    'Mobile Patrols': Car,
    'Concierge Services': Users,
    'Industrial / Warehouse Security': Building,
    'Cleaning Services': Sparkles,
    'CCTV Installation & Monitoring': Camera,
    'CCTV Towers - Mobile Surveillance': Eye
  };
  
  return iconMap[serviceTitle] || Shield;
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <div className={`relative ${getBackgroundColor('hero', 'Security Services')} overflow-hidden`}>
        {/* Hero Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/20"></div>
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
              Our Services
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Comprehensive Security & Facilities Solutions
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              From static guarding to mobile patrols, cleaning services to concierge support - we provide a full range of professional services tailored to your specific requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300">
                <Link href="/contact" className="flex items-center">
                  Get Free Quote
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold backdrop-blur-sm bg-transparent">
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Services Overview */}
      <div className="py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-100 to-green-200 text-green-700 text-sm font-semibold mb-6 shadow-sm">
              <Shield className="w-4 h-4 mr-2" />
              Complete Solutions
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Complete Security & Facilities Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our comprehensive range of services covers all aspects of security, facilities management, and maintenance. 
              Each service is designed to meet specific client needs while maintaining the highest professional standards.
            </p>
          </div>
          
          {/* Enhanced Service Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <div key={service.slug} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border border-gray-100">
                <div className={`relative h-48 overflow-hidden ${getBackgroundColor('card', service.title)}`}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        {(() => {
                          const IconComponent = getServiceIcon(service.title);
                          return <IconComponent className="w-8 h-8 text-white" />;
                        })()}
                      </div>
                      <h3 className="text-xl font-bold">{service.title}</h3>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.slice(0, 3).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white">
                    <Link href={`/services/${service.slug}`} className="flex items-center justify-center">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Service Categories */}
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
              Service Categories
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Organized Service Categories
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Our services are organized into key categories to help you find exactly what you need for your business.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Security Services</h3>
              <p className="text-slate-300 mb-6 leading-relaxed">
                Professional security solutions including static guarding, mobile patrols, event security, and immediate response teams.
              </p>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  Static Guarding
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  Mobile Patrols
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  Event Security
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  Immediate Response
                </li>
              </ul>
            </div>
            
            <div className="group bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Facilities Management</h3>
              <p className="text-slate-300 mb-6 leading-relaxed">
                Comprehensive facilities management services including concierge services, corporate protection, and specialized sector solutions.
              </p>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  Concierge Services
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  Corporate Protection
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  Industrial Security
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  Specialized Sectors
                </li>
              </ul>
            </div>
            
            <div className="group bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Maintenance & Cleaning</h3>
              <p className="text-slate-300 mb-6 leading-relaxed">
                Professional cleaning and maintenance services to keep your premises clean, safe, and well-maintained.
              </p>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  Office Cleaning
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  Corporate Buildings
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  Regular Contracts
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  School Cleaning
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-100 to-green-200 text-green-700 text-sm font-semibold mb-6 shadow-sm">
              <Clock className="w-4 h-4 mr-2" />
              Our Process
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              How We Work
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We follow a structured approach to ensure we deliver the right solution for your specific needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold group-hover:scale-110 transition-transform duration-300">
                1
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Consultation</h3>
              <p className="text-gray-600 leading-relaxed">We discuss your requirements and assess your specific security and facilities needs.</p>
            </div>
            
            <div className="group text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold group-hover:scale-110 transition-transform duration-300">
                2
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Assessment</h3>
              <p className="text-gray-600 leading-relaxed">Our team conducts a thorough site assessment to understand your environment and risks.</p>
            </div>
            
            <div className="group text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold group-hover:scale-110 transition-transform duration-300">
                3
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Proposal</h3>
              <p className="text-gray-600 leading-relaxed">We provide a detailed proposal with tailored solutions and transparent pricing.</p>
            </div>
            
            <div className="group text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold group-hover:scale-110 transition-transform duration-300">
                4
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Implementation</h3>
              <p className="text-gray-600 leading-relaxed">We implement the agreed solution with ongoing monitoring and support.</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-green-600 via-green-700 to-green-800 relative overflow-hidden">
        {/* CTA Background Image */}
        <div className="absolute inset-0">
          <Image
            src={getImageUrl('banner', 'Contact Us for Quote')}
            alt="Contact Us for Quote"
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
            Ready to Discuss Your Requirements?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Contact us today for a free consultation and discover how our services can benefit your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-white to-slate-100 text-green-600 hover:from-slate-100 hover:to-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300">
              <Link href="/contact" className="flex items-center">
                Get Free Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold backdrop-blur-sm bg-transparent">
              <Link href="/cleaning">Cleaning Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
