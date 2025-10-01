import Hero from '@/components/Hero';
import Section from '@/components/Section';
import AccreditationsGrid from '@/components/AccreditationsGrid';
import Image from 'next/image';
import { getImageUrl } from '@/lib/imagePresets';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Shield, Users, Award, Clock, Star, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'About Us - PGS FM Ltd Professional Security & Facilities Management',
  description: 'Learn about PGS FM Ltd\'s commitment to excellence in security services, facilities management, and cleaning solutions across the UK.',
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-slate-900 via-green-900 to-slate-800 overflow-hidden">
        {/* Hero Background Image */}
        <div className="absolute inset-0">
          <Image
            src={getImageUrl('hero', 'About PGS FM Ltd Team')}
            alt="About PGS FM Ltd Team"
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
              About PGS FM Ltd
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Your Trusted Security Partner
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              With years of experience in the security and facilities management industry, we deliver professional, reliable, and comprehensive services across the UK.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300">
                <Link href="/contact" className="flex items-center">
                  Contact Us
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

      {/* Company Overview */}
      <div className="py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-100 to-green-200 text-green-700 text-sm font-semibold mb-6 shadow-sm">
                <Shield className="w-4 h-4 mr-2" />
                Our Story
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Building Trust Through Excellence
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                PGS FM Ltd has been at the forefront of professional security and facilities management services across the United Kingdom. Founded on the principles of integrity, reliability, and excellence, we have built a reputation for delivering outstanding services that exceed client expectations.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our team of experienced professionals brings together decades of industry knowledge, ensuring that every client receives tailored solutions that address their specific security and facilities management needs.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We are committed to maintaining the highest standards of service delivery while continuously adapting to meet the evolving needs of our diverse client base across various sectors.
              </p>
            </div>
            <div className="relative group">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all duration-300">
                <Image
                  src={getImageUrl('banner', 'Professional Team')}
                  alt="PGS FM Ltd Professional Team"
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

      {/* Company Information */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-100 to-green-200 text-green-700 text-sm font-semibold mb-6 shadow-sm">
                <Award className="w-4 h-4 mr-2" />
                Company Information
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Official Business Details
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Transparent business information and official credentials for your peace of mind.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Company Details */}
              <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 border border-slate-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Company Details</h3>
                <div className="space-y-4">
                  <div>
                    <span className="font-semibold text-gray-700">Company Name:</span>
                    <p className="text-gray-600">PGS FM Ltd</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-700">Registration Number:</span>
                    <p className="text-gray-600">13757656</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-700">Registered Address:</span>
                    <p className="text-gray-600">
                      Office 14, 132-134 Cranbrook Road<br />
                      Ilford, England, IG1 4LZ
                    </p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-700">Activities:</span>
                    <p className="text-gray-600">
                      • Private security activities (SIC 80100)<br />
                      • Other cleaning services (SIC 81299)
                    </p>
                  </div>
                </div>
              </div>

              {/* Leadership Team */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 border border-green-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Leadership Team</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Mr. Muhammad Mueen Aslam</h4>
                      <p className="text-gray-600 text-sm">Director</p>
                      <p className="text-gray-500 text-xs">Appointed: 22 November 2021</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Mr. Muhammad Waseem</h4>
                      <p className="text-gray-600 text-sm">Director</p>
                      <p className="text-gray-500 text-xs">Appointed: 28 April 2025</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values */}
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
              Our Values
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Core Values That Drive Us
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              These core values guide everything we do and shape our commitment to excellence in service delivery.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group text-center p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Integrity</h3>
              <p className="text-slate-300 leading-relaxed">We conduct business with honesty, transparency, and ethical practices in all our operations.</p>
            </div>
            
            <div className="group text-center p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Excellence</h3>
              <p className="text-slate-300 leading-relaxed">We strive for the highest standards in everything we do, continuously improving our services.</p>
            </div>
            
            <div className="group text-center p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Reliability</h3>
              <p className="text-slate-300 leading-relaxed">Our clients can depend on us to deliver consistent, high-quality services every time.</p>
            </div>
            
            <div className="group text-center p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Clock className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Responsiveness</h3>
              <p className="text-slate-300 leading-relaxed">We respond quickly to client needs and adapt our services to changing requirements.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-100 to-green-200 text-green-700 text-sm font-semibold mb-6 shadow-sm">
              <Users className="w-4 h-4 mr-2" />
              Our Team
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Meet Our Expert Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our experienced team of professionals brings together diverse expertise in security, facilities management, and customer service.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border border-gray-100">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={getImageUrl('team', 'Security Specialist')}
                  alt="Security Specialist"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Security Specialists</h3>
                <p className="text-gray-600 leading-relaxed">Licensed and trained security professionals with extensive experience in various security environments.</p>
              </div>
            </div>
            
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border border-gray-100">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={getImageUrl('team', 'Facilities Manager')}
                  alt="Facilities Manager"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Facilities Managers</h3>
                <p className="text-gray-600 leading-relaxed">Expert facilities management professionals ensuring your premises are maintained to the highest standards.</p>
              </div>
            </div>
            
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border border-gray-100">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={getImageUrl('team', 'Support Staff')}
                  alt="Support Staff"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Support Staff</h3>
                <p className="text-gray-600 leading-relaxed">Dedicated support team providing administrative and operational assistance to ensure smooth service delivery.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Accreditations & Certifications */}
      <AccreditationsGrid />

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-green-600 via-green-700 to-green-800 relative overflow-hidden">
        {/* CTA Background Image */}
        <div className="absolute inset-0">
          <Image
            src={getImageUrl('banner', 'Partner with PGS FM Ltd')}
            alt="Partner with PGS FM Ltd"
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
            Partner with PGS FM Ltd
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Ready to experience the difference that professional security and facilities management can make for your business?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-white to-slate-100 text-green-600 hover:from-slate-100 hover:to-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300">
              <Link href="/contact" className="flex items-center">
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold backdrop-blur-sm bg-transparent">
              <Link href="/services">Our Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
