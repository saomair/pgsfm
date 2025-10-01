import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Shield, 
  Camera, 
  Monitor, 
  Smartphone, 
  CheckCircle, 
  ArrowRight, 
  Eye,
  AlertTriangle,
  Clock,
  Users,
  Building,
  Zap,
  Lock,
  Headphones
} from 'lucide-react';
import { getImageUrl } from '@/lib/imagePresets';

export const metadata = {
  title: 'CCTV Installation & Monitoring Services - PGS FM Ltd Professional Security',
  description: 'Professional CCTV installation and 24/7 monitoring services for commercial properties. HD cameras, remote access, and comprehensive security solutions across the UK.',
};

export default function CCTVServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-slate-900 via-green-900 to-slate-800 overflow-hidden">
        {/* Hero Background Image */}
        <div className="absolute inset-0">
          <Image
            src={getImageUrl('hero', 'CCTV Security Systems')}
            alt="CCTV Security Systems"
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
              <Camera className="w-4 h-4 mr-2" />
              CCTV Services
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Professional CCTV Installation & Monitoring
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Comprehensive CCTV solutions for commercial properties. From HD camera installation to 24/7 monitoring, 
              we provide complete security surveillance systems tailored to your business needs.
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

      {/* Service Overview */}
      <div className="py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-100 to-green-200 text-green-700 text-sm font-semibold mb-6 shadow-sm">
              <Shield className="w-4 h-4 mr-2" />
              Complete CCTV Solutions
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive CCTV Services for Commercial Properties
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our CCTV services combine cutting-edge technology with professional installation and monitoring expertise. 
              We design, install, and maintain surveillance systems that provide complete security coverage for your business.
            </p>
          </div>
          
          {/* Service Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border border-gray-100">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={getImageUrl('card', 'CCTV Installation')}
                  alt="CCTV Installation"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Camera className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold">Professional Installation</h3>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Expert installation of HD cameras, NVRs, and complete surveillance systems tailored to your property layout.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                    Site assessment and planning
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                    HD camera positioning
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                    Network configuration
                  </li>
                </ul>
              </div>
            </div>

            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border border-gray-100">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={getImageUrl('card', '24/7 Monitoring')}
                  alt="24/7 Monitoring"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Monitor className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold">24/7 Monitoring</h3>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Round-the-clock monitoring by trained security professionals with immediate response capabilities.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                    Live monitoring center
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                    Instant alerts
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                    Emergency response
                  </li>
                </ul>
              </div>
            </div>

            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border border-gray-100">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={getImageUrl('card', 'Remote Access')}
                  alt="Remote Access"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Smartphone className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold">Remote Access</h3>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Access your CCTV system from anywhere with secure mobile apps and web platforms.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                    Mobile app access
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                    Cloud storage
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                    Playback features
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CCTV Technology Features */}
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
              <Zap className="w-4 h-4 mr-2" />
              Advanced Technology
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Cutting-Edge CCTV Technology
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              We use the latest surveillance technology to provide crystal-clear monitoring and intelligent security features.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">4K HD Cameras</h3>
              <p className="text-slate-300 mb-6 leading-relaxed">
                Ultra-high definition cameras providing crystal-clear footage for maximum security detail.
              </p>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  Night vision capability
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  Weather resistant
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  Wide-angle coverage
                </li>
              </ul>
            </div>
            
            <div className="group bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <AlertTriangle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Motion Detection</h3>
              <p className="text-slate-300 mb-6 leading-relaxed">
                Intelligent motion detection with instant alerts and automated recording triggers.
              </p>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  Smart analytics
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  False alarm reduction
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  Instant notifications
                </li>
              </ul>
            </div>
            
            <div className="group bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Lock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Secure Storage</h3>
              <p className="text-slate-300 mb-6 leading-relaxed">
                Encrypted cloud and local storage ensuring your footage is secure and accessible.
              </p>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  Encrypted data
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  Long-term retention
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  Backup systems
                </li>
              </ul>
            </div>
            
            <div className="group bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Headphones className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">24/7 Support</h3>
              <p className="text-slate-300 mb-6 leading-relaxed">
                Round-the-clock technical support and maintenance to keep your system running perfectly.
              </p>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  Remote diagnostics
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  On-site repairs
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  System updates
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Commercial Property Benefits */}
      <div className="py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-100 to-green-200 text-green-700 text-sm font-semibold mb-6 shadow-sm">
              <Building className="w-4 h-4 mr-2" />
              Commercial Benefits
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Our CCTV Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our CCTV solutions provide comprehensive security benefits specifically designed for commercial properties and business environments.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Enhanced Security</h3>
              <p className="text-gray-600 leading-relaxed">
                Deter criminal activity and provide evidence for incidents with comprehensive surveillance coverage.
              </p>
            </div>
            
            <div className="group text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold group-hover:scale-110 transition-transform duration-300">
                <Users className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Employee Safety</h3>
              <p className="text-gray-600 leading-relaxed">
                Monitor workplace safety, ensure compliance with health & safety regulations, and protect your staff.
              </p>
            </div>
            
            <div className="group text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold group-hover:scale-110 transition-transform duration-300">
                <Clock className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Operational Efficiency</h3>
              <p className="text-gray-600 leading-relaxed">
                Monitor daily operations, identify areas for improvement, and ensure optimal business performance.
              </p>
            </div>
            
            <div className="group text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold group-hover:scale-110 transition-transform duration-300">
                <AlertTriangle className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Rapid Response</h3>
              <p className="text-gray-600 leading-relaxed">
                Instant alerts and immediate response capabilities to address security incidents as they happen.
              </p>
            </div>
            
            <div className="group text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold group-hover:scale-110 transition-transform duration-300">
                <Eye className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Evidence Collection</h3>
              <p className="text-gray-600 leading-relaxed">
                High-quality video evidence for insurance claims, legal proceedings, and incident investigations.
              </p>
            </div>
            
            <div className="group text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-teal-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold group-hover:scale-110 transition-transform duration-300">
                <Smartphone className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Remote Management</h3>
              <p className="text-gray-600 leading-relaxed">
                Monitor your property from anywhere with secure mobile access and real-time notifications.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Process Section */}
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
              <Clock className="w-4 h-4 mr-2" />
              Our Process
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              How We Install Your CCTV System
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              We follow a systematic approach to ensure your CCTV system is perfectly tailored to your commercial property.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group text-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold group-hover:scale-110 transition-transform duration-300">
                1
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Site Survey</h3>
              <p className="text-slate-300 leading-relaxed">Comprehensive assessment of your property to identify optimal camera positions and coverage areas.</p>
            </div>
            
            <div className="group text-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold group-hover:scale-110 transition-transform duration-300">
                2
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">System Design</h3>
              <p className="text-slate-300 leading-relaxed">Custom CCTV system design with detailed specifications and installation plan.</p>
            </div>
            
            <div className="group text-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold group-hover:scale-110 transition-transform duration-300">
                3
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Installation</h3>
              <p className="text-slate-300 leading-relaxed">Professional installation by certified technicians with minimal disruption to your business.</p>
            </div>
            
            <div className="group text-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold group-hover:scale-110 transition-transform duration-300">
                4
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Monitoring Setup</h3>
              <p className="text-slate-300 leading-relaxed">Configure monitoring systems, user access, and provide comprehensive training for your team.</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-green-600 via-green-700 to-green-800 relative overflow-hidden">
        {/* CTA Background Image */}
        <div className="absolute inset-0">
          <Image
            src={getImageUrl('banner', 'CCTV Security Quote')}
            alt="CCTV Security Quote"
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
            Ready to Secure Your Commercial Property?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Get a free CCTV consultation and quote for your commercial property. Our experts will design the perfect surveillance solution for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-white to-slate-100 text-green-600 hover:from-slate-100 hover:to-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300">
              <Link href="/contact" className="flex items-center">
                Get Free CCTV Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold backdrop-blur-sm bg-transparent">
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
