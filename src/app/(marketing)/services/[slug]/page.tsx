import { notFound } from 'next/navigation';
import { services } from '@/lib/data';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { getImageUrl, getBackgroundColor } from '@/lib/imagePresets';
import { CheckCircle, ArrowLeft, Star, ArrowRight } from 'lucide-react';

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps) {
  const resolvedParams = await params;
  const service = services.find((s) => s.slug === resolvedParams.slug);
  
  if (!service) {
    return {
      title: 'Service Not Found',
    };
  }

  return {
    title: `${service.title} - PGS FM Ltd Professional Security & Facilities Management`,
    description: service.description,
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const resolvedParams = await params;
  const service = services.find((s) => s.slug === resolvedParams.slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      {/* Hero Section */}
      <div className={`relative ${getBackgroundColor('hero', service.title)} overflow-hidden`}>
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
              Professional Service
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {service.title}
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              {service.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300">
                <Link href="/contact" className="flex items-center">
                  Get Free Quote
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold backdrop-blur-sm bg-transparent">
                <Link href="/services">All Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Service Details */}
      <div className="py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-100 to-green-200 text-green-700 text-sm font-semibold mb-6 shadow-sm">
                <CheckCircle className="w-4 h-4 mr-2" />
                Service Overview
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Service Overview
              </h2>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Our {service.title.toLowerCase()} service is designed to provide comprehensive solutions tailored to your specific requirements. 
                We understand that every client has unique needs, and our experienced team works closely with you to develop 
                a customized approach that delivers optimal results.
              </p>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                With years of experience in the industry, we have developed proven methodologies and best practices that ensure 
                consistent, high-quality service delivery. Our commitment to excellence means you can trust us to handle your 
                requirements with the utmost professionalism and attention to detail.
              </p>
              
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Key Features</h3>
                <ul className="space-y-4">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-green-500 mr-4 mt-0.5 flex-shrink-0" />
                      <span className="text-lg text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="relative group">
              <div className={`relative rounded-2xl overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all duration-300 w-full h-[500px] ${getBackgroundColor('banner', service.title)}`}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
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
              Why Choose Our {service.title} Service?
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Our {service.title.toLowerCase()} service offers numerous benefits designed to provide you with peace of mind and exceptional value.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group text-center p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Star className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Professional Expertise</h3>
              <p className="text-slate-300 leading-relaxed">Our team consists of highly trained and experienced professionals who bring extensive knowledge and skills to every project.</p>
            </div>
            
            <div className="group text-center p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Reliable Service</h3>
              <p className="text-slate-300 leading-relaxed">We pride ourselves on delivering consistent, reliable services that you can depend on day in and day out.</p>
            </div>
            
            <div className="group text-center p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <ArrowRight className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Customized Solutions</h3>
              <p className="text-slate-300 leading-relaxed">Every client is unique, and we tailor our services to meet your specific requirements and objectives.</p>
            </div>
            
            <div className="group text-center p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Star className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">24/7 Support</h3>
              <p className="text-slate-300 leading-relaxed">Our support team is available around the clock to address any questions or concerns you may have.</p>
            </div>
            
            <div className="group text-center p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Cost Effective</h3>
              <p className="text-slate-300 leading-relaxed">We provide excellent value for money with transparent pricing and no hidden costs or surprises.</p>
            </div>
            
            <div className="group text-center p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Star className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Compliance Ready</h3>
              <p className="text-slate-300 leading-relaxed">Our services meet all relevant industry standards and regulatory requirements for your peace of mind.</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-green-600 via-green-700 to-green-800 relative overflow-hidden">
        {/* CTA Background Image */}
        <div className="absolute inset-0">
          <Image
            src={getImageUrl('banner', service.title)}
            alt={`${service.title} service`}
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
            Interested in Our {service.title} Service?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Contact us today to discuss your requirements and discover how our {service.title.toLowerCase()} service can benefit your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-white to-slate-100 text-green-600 hover:from-slate-100 hover:to-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300">
              <Link href="/contact" className="flex items-center">
                Get Free Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold backdrop-blur-sm bg-transparent">
              <Link href="/services" className="flex items-center">
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Services
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
