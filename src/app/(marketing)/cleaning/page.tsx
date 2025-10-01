import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { getImageUrl } from '@/lib/imagePresets';
import { CheckCircle, Clock, Users, Award, Star, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Cleaning Services - PGS FM Ltd Professional Security & Facilities Management',
  description: 'Professional cleaning services for offices, corporate buildings, schools, and industrial facilities. Regular contracts and specialized cleaning solutions.',
};

const cleaningServices = [
  {
    title: "Contracted Office Cleaning",
    description: "Regular cleaning services for office environments, ensuring a clean and professional workspace for your employees and visitors.",
    features: [
      "Daily office cleaning and maintenance",
      "Desk and workstation sanitization",
      "Restroom and kitchen area cleaning",
      "Waste management and disposal",
      "Floor cleaning and maintenance",
      "Window and glass cleaning"
    ]
  },
  {
    title: "Corporate Buildings Cleaning",
    description: "Comprehensive cleaning solutions for corporate buildings, headquarters, and business centers with specialized requirements.",
    features: [
      "Lobby and reception area maintenance",
      "Conference room preparation",
      "Executive office cleaning",
      "Common area maintenance",
      "High-traffic area cleaning",
      "Special event preparation"
    ]
  },
  {
    title: "Regular Contracted Cleaning",
    description: "Ongoing cleaning contracts tailored to your specific needs and schedule, providing consistent and reliable service delivery.",
    features: [
      "Flexible scheduling options",
      "Customized cleaning plans",
      "Regular quality inspections",
      "Performance monitoring",
      "Cost-effective solutions",
      "Long-term partnership approach"
    ]
  },
  {
    title: "School & Educational Facility Cleaning",
    description: "Specialized cleaning services for educational institutions, ensuring safe and hygienic environments for students and staff.",
    features: [
      "Classroom and laboratory cleaning",
      "Cafeteria and dining area maintenance",
      "Gymnasium and sports facility cleaning",
      "Library and study area maintenance",
      "Playground and outdoor area cleaning",
      "Health and safety compliance"
    ]
  }
];

export default function CleaningPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-slate-900 via-green-900 to-slate-800 overflow-hidden">
        {/* Hero Background Image */}
        <div className="absolute inset-0">
          <Image
            src={getImageUrl('hero', 'Professional Cleaning Services')}
            alt="Professional Cleaning Services"
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
              Professional Cleaning
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Professional Cleaning Services
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Our comprehensive cleaning services ensure your premises are maintained to the highest standards. 
              From regular office cleaning to specialized facility maintenance, we deliver reliable and professional solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300">
                <Link href="/contact" className="flex items-center">
                  Get Cleaning Quote
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold backdrop-blur-sm bg-transparent">
                <Link href="/services">Our Services</Link>
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
              <CheckCircle className="w-4 h-4 mr-2" />
              Our Services
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive Cleaning Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We provide a comprehensive range of cleaning services designed to meet the specific needs of different environments and sectors.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {cleaningServices.map((service, index) => (
              <div key={index} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border border-gray-100">
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Our Cleaning Services */}
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
              Why Choose Our Cleaning Services?
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Our cleaning services are designed to provide exceptional value while maintaining the highest standards of cleanliness and hygiene.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group text-center p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Trained Professionals</h3>
              <p className="text-slate-300 leading-relaxed">Our cleaning staff are fully trained, vetted, and experienced in various cleaning techniques and safety protocols.</p>
            </div>
            
            <div className="group text-center p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Clock className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Flexible Scheduling</h3>
              <p className="text-slate-300 leading-relaxed">We work around your schedule to minimize disruption to your business operations and daily activities.</p>
            </div>
            
            <div className="group text-center p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Quality Assurance</h3>
              <p className="text-slate-300 leading-relaxed">Regular quality inspections and feedback systems ensure consistent high standards of cleaning service delivery.</p>
            </div>
            
            <div className="group text-center p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Eco-Friendly Products</h3>
              <p className="text-slate-300 leading-relaxed">We use environmentally friendly cleaning products and methods to protect both your premises and the environment.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-100 to-green-200 text-green-700 text-sm font-semibold mb-6 shadow-sm">
                <Clock className="w-4 h-4 mr-2" />
                Our Process
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Cleaning Process
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We follow a systematic approach to ensure every cleaning task is completed to the highest standards. 
                Our process is designed to be efficient, thorough, and tailored to your specific requirements.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 text-white rounded-full flex items-center justify-center mr-4 mt-1 text-lg font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Initial Assessment</h3>
                    <p className="text-gray-600">We assess your premises to understand your specific cleaning needs and requirements.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 text-white rounded-full flex items-center justify-center mr-4 mt-1 text-lg font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Customized Plan</h3>
                    <p className="text-gray-600">We develop a tailored cleaning plan that addresses your specific needs and schedule.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-full flex items-center justify-center mr-4 mt-1 text-lg font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Service Delivery</h3>
                    <p className="text-gray-600">Our trained team delivers consistent, high-quality cleaning services according to the agreed plan.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-full flex items-center justify-center mr-4 mt-1 text-lg font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality Monitoring</h3>
                    <p className="text-gray-600">Regular inspections and feedback ensure we maintain the highest standards of service delivery.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative group">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all duration-300">
                <Image
                  src={getImageUrl('banner', 'Cleaning Process')}
                  alt="Professional cleaning process"
                  width={600}
                  height={400}
                  className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
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
            src={getImageUrl('banner', 'Professional Cleaning Services')}
            alt="Professional Cleaning Services"
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
            Ready to Experience Professional Cleaning?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Contact us today for a free cleaning assessment and discover how our professional services can benefit your premises.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-white to-slate-100 text-green-600 hover:from-slate-100 hover:to-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300">
              <Link href="/contact" className="flex items-center">
                Get Free Assessment
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold backdrop-blur-sm bg-transparent">
              <Link href="/services">All Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
