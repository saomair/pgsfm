import Hero from '@/components/Hero';
import Section from '@/components/Section';
import ServiceGrid from '@/components/ServiceGrid';
import SectorList from '@/components/SectorList';
import TrustStrip from '@/components/TrustStrip';
import { services, sectors } from '@/lib/data';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { Shield, Users, Clock, Award, ArrowRight, CheckCircle, Star, Building, Car, Calendar, Briefcase, MapPin, Sparkles } from 'lucide-react';
import { getImageUrl, getBackgroundColor } from '@/lib/imagePresets';

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
    'Cleaning Services': Sparkles
  };
  
  return iconMap[serviceTitle] || Shield;
};

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <div className={`relative ${getBackgroundColor('hero', 'Professional Security Team')} overflow-hidden`}>
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
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/20 border border-green-400/30 text-green-200 text-sm font-medium mb-6">
                  <Star className="w-4 h-4 mr-2" />
                  Trusted by businesses across the UK
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                  Professional
                  <span className="block bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
                    Security & Facilities
                  </span>
                  Management
                </h1>
                
                <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                  Comprehensive security services, facilities management, and cleaning solutions tailored to your needs. 
                  <span className="text-green-300 font-semibold">Professional, reliable, and cost-effective</span> services for all sectors.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Button asChild size="lg" className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 group">
                    <Link href="/contact" className="flex items-center">
                      Get Free Quote
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-2 border-white/30 text-white hover:bg-white/20 hover:border-white/50 hover:text-white px-8 py-4 text-lg font-semibold backdrop-blur-sm hover:scale-105 transition-all duration-300 bg-transparent">
                    <Link href="/about">Learn More</Link>
                  </Button>
                </div>
                
                {/* Stats */}
                <div className="grid grid-cols-2 gap-6">
                  {/* <div className="text-center lg:text-left">
                    <div className="text-2xl font-bold text-white mb-1">500+</div>
                    <div className="text-slate-300 text-sm">Happy Clients</div>
                  </div> */}
                  <div className="text-center lg:text-left">
                    <div className="text-2xl font-bold text-white mb-1">24/7</div>
                    <div className="text-slate-300 text-sm">Support Available</div>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-2xl font-bold text-white mb-1">15+</div>
                    <div className="text-slate-300 text-sm">Years Experience</div>
                  </div>
                </div>
              </div>
              
              {/* Right Content - Feature Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/25 hover:backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                  <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2 group-hover:text-green-200 transition-colors duration-300">24/7 Security</h3>
                  <p className="text-slate-300 text-sm group-hover:text-slate-200 transition-colors duration-300">Round-the-clock protection for your premises</p>
                </div>
                
                <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/25 hover:backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                  <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2 group-hover:text-green-200 transition-colors duration-300">Expert Team</h3>
                  <p className="text-slate-300 text-sm group-hover:text-slate-200 transition-colors duration-300">Trained professionals with years of experience</p>
                </div>
                
                <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/25 hover:backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                  <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2 group-hover:text-purple-200 transition-colors duration-300">Rapid Response</h3>
                  <p className="text-slate-300 text-sm group-hover:text-slate-200 transition-colors duration-300">Quick deployment for emergency situations</p>
                </div>
                
                <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/25 hover:backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                  <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2 group-hover:text-orange-200 transition-colors duration-300">Certified Quality</h3>
                  <p className="text-slate-300 text-sm group-hover:text-slate-200 transition-colors duration-300">Industry-standard compliance and excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Strip */}
      <TrustStrip />

      {/* Services Overview */}
      <div className="py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-100 to-green-200 text-green-700 text-sm font-semibold mb-6 shadow-sm">
              <Shield className="w-4 h-4 mr-2" />
              Our Services
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive Security Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We provide comprehensive security and facilities management solutions designed to protect your business and maintain your premises to the highest standards.
            </p>
          </div>
          
          {/* Enhanced Service Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.slice(0, 6).map((service, index) => (
              <div key={service.slug} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] overflow-hidden border border-gray-100">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={getImageUrl('card', service.title)}
                    alt={`${service.title} service`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/70 group-hover:via-black/30 transition-all duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:bg-white/30 transition-all duration-300">
                        {(() => {
                          const IconComponent = getServiceIcon(service.title);
                          return <IconComponent className="w-8 h-8 text-white" />;
                        })()}
                      </div>
                      <h3 className="text-xl font-bold group-hover:text-green-200 transition-colors duration-300">{service.title}</h3>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.slice(0, 3).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white hover:scale-105 transition-all duration-300 group">
                    <Link href={`/services/${service.slug}`} className="flex items-center justify-center">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300">
              <Link href="/services" className="flex items-center">
                View All Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
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
              Why Choose Us
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Excellence in Every Service
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              With years of experience and a commitment to excellence, we deliver reliable services that exceed expectations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group text-center p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2">
              <div className="relative w-20 h-20 mx-auto mb-6 rounded-2xl overflow-hidden bg-gradient-to-br from-green-500/80 to-green-600/80 flex items-center justify-center">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Professional Security</h3>
              <p className="text-slate-300 leading-relaxed">Trained and licensed security professionals ensuring your safety and protection with the highest standards.</p>
            </div>
            
            <div className="group text-center p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2">
              <div className="relative w-20 h-20 mx-auto mb-6 rounded-2xl overflow-hidden bg-gradient-to-br from-green-500/80 to-green-600/80 flex items-center justify-center">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Experienced Team</h3>
              <p className="text-slate-300 leading-relaxed">Skilled professionals with extensive experience across various sectors and industries.</p>
            </div>
            
            <div className="group text-center p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2">
              <div className="relative w-20 h-20 mx-auto mb-6 rounded-2xl overflow-hidden bg-gradient-to-br from-purple-500/80 to-purple-600/80 flex items-center justify-center">
                <Clock className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">24/7 Support</h3>
              <p className="text-slate-300 leading-relaxed">Round-the-clock support and emergency response services when you need them most.</p>
            </div>
            
            <div className="group text-center p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2">
              <div className="relative w-20 h-20 mx-auto mb-6 rounded-2xl overflow-hidden bg-gradient-to-br from-orange-500/80 to-orange-600/80 flex items-center justify-center">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Quality Assured</h3>
              <p className="text-slate-300 leading-relaxed">Certified services meeting the highest industry standards and regulatory requirements.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Specialized Sectors */}
      <div className="py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-100 to-green-200 text-green-700 text-sm font-semibold mb-6 shadow-sm">
              <Building className="w-4 h-4 mr-2" />
              Specialized Sectors
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We serve a diverse range of industries with tailored solutions that meet specific sector requirements and regulations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {sectors.map((sector, index) => (
              <div key={index} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border border-gray-100">
                <div className="relative h-48 overflow-hidden">
            <Image
                    src={getImageUrl('banner', sector.name)}
                    alt={`${sector.name} sector`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Building className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold">{sector.name}</h3>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-gray-600 leading-relaxed">{sector.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Button asChild size="lg" variant="outline" className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-4 text-lg font-semibold transition-all duration-300">
              <Link href="/sectors" className="flex items-center">
                Explore All Sectors
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
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
              Client Testimonials
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Don&apos;t just take our word for it. Here&apos;s what our satisfied clients have to say about our services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src={getImageUrl('team', 'Sarah Johnson')}
                    alt="Sarah Johnson"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Sarah Johnson</h4>
                  <p className="text-slate-300 text-sm">Office Manager, Professional Services</p>
                </div>
              </div>
              <p className="text-slate-300 leading-relaxed mb-4">
                &ldquo;Our office has never been cleaner! The team arrives on time every day and goes above and beyond. They use eco-friendly products and are always respectful of our workspace. Our clients consistently comment on how pristine our premises look.&rdquo;
              </p>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src={getImageUrl('team', 'Michael Brown')}
                    alt="Michael Brown"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Michael Brown</h4>
                  <p className="text-slate-300 text-sm">Warehouse Manager, Distribution</p>
                </div>
              </div>
              <p className="text-slate-300 leading-relaxed mb-4">
                &ldquo;The security team has transformed our warehouse operations. Their static guarding service provides 24/7 protection, and their mobile patrols ensure comprehensive coverage. The incident reporting is detailed and professional. We feel completely secure.&rdquo;
              </p>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src={getImageUrl('team', 'Emma Wilson')}
                    alt="Emma Wilson"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Emma Wilson</h4>
                  <p className="text-slate-300 text-sm">Event Coordinator, Corporate Events</p>
                </div>
              </div>
              <p className="text-slate-300 leading-relaxed mb-4">
                &ldquo;PGS FM&apos;s event security team is exceptional. They handled our corporate conference with over 500 attendees flawlessly. Their crowd management skills and professional approach made our event run smoothly. Highly recommended for any large gathering.&rdquo;
              </p>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
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
            src={getImageUrl('banner', 'Contact Us')}
            alt="Contact Us"
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
            Ready to Get Started?
          </h2>
          <p className="text-xl text-green-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Contact us today for a free consultation and discover how our professional services can benefit your business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button asChild size="lg" className="bg-white text-green-700 hover:bg-gray-100 px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300">
              <Link href="/contact" className="flex items-center">
                Get Free Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-green-700 px-8 py-4 text-lg font-semibold transition-all duration-300">
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>
    </div>
    </>
  );
}
