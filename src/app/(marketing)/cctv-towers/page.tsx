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
  Headphones,
  Sun,
  Battery,
  Wifi,
  Volume2,
  MapPin,
  Truck,
  Settings
} from 'lucide-react';
import { getImageUrl } from '@/lib/imagePresets';

export const metadata = {
  title: 'CCTV Towers - Mobile Surveillance Solutions | PGS FM Ltd UK',
  description: 'Rapid deployment CCTV towers for UK commercial properties. Mobile surveillance, construction site security, and temporary monitoring solutions across England, Scotland, and Wales.',
};

export default function CCTVTowersPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-slate-900 via-green-900 to-slate-800 overflow-hidden">
        {/* Hero Background Image */}
        <div className="absolute inset-0">
          <Image
            src={getImageUrl('hero', 'CCTV Towers Mobile Surveillance')}
            alt="CCTV Towers Mobile Surveillance"
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
              Mobile CCTV Solutions
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              CCTV Towers - Rapid Deployment Security
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Professional mobile CCTV towers for UK commercial properties. Rapid deployment, autonomous operation, 
              and comprehensive surveillance solutions for construction sites, vacant properties, and temporary security needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300">
                <Link href="/contact" className="flex items-center">
                  Get Free Quote
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold backdrop-blur-sm bg-transparent">
                <Link href="/cctv-services">CCTV Services</Link>
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
              Mobile Surveillance Solutions
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Professional CCTV Towers for UK Businesses
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our mobile CCTV towers provide instant security coverage for any location across the UK. 
              Perfect for construction sites, vacant properties, events, and temporary security requirements.
            </p>
          </div>
          
          {/* Key Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border border-gray-100">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={getImageUrl('card', 'Rapid Deployment CCTV')}
                  alt="Rapid Deployment CCTV"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Truck className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold">Rapid Deployment</h3>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Deploy security coverage in hours, not days. Our towers can be installed and operational within 24 hours.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                    24-hour installation
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                    No infrastructure required
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                    Immediate coverage
                  </li>
                </ul>
              </div>
            </div>

            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border border-gray-100">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={getImageUrl('card', 'Autonomous Operation')}
                  alt="Autonomous Operation"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Sun className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold">Autonomous Operation</h3>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Solar-powered towers with backup batteries operate independently without external power sources.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                    Solar power system
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                    Backup batteries
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                    Weather resistant
                  </li>
                </ul>
              </div>
            </div>

            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border border-gray-100">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={getImageUrl('card', '360 Degree Coverage')}
                  alt="360 Degree Coverage"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Eye className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold">360° Coverage</h3>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Complete panoramic surveillance with multiple HD cameras providing full site coverage.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                    Multiple HD cameras
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                    Night vision capability
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                    Pan-tilt-zoom control
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Technology Features */}
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
              Cutting-Edge Mobile Surveillance Technology
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Our CCTV towers feature the latest surveillance technology designed for UK weather conditions and commercial requirements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Camera className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">4K HD Cameras</h3>
              <p className="text-slate-300 mb-6 leading-relaxed">
                Ultra-high definition cameras with night vision and weather-resistant housing for UK conditions.
              </p>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  Infrared night vision
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  Weatherproof housing
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  Wide dynamic range
                </li>
              </ul>
            </div>
            
            <div className="group bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Wifi className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">4G/5G Connectivity</h3>
              <p className="text-slate-300 mb-6 leading-relaxed">
                Reliable wireless connectivity using UK mobile networks for real-time monitoring and alerts.
              </p>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  Dual SIM redundancy
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  Signal boosters
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  Automatic failover
                </li>
              </ul>
            </div>
            
            <div className="group bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Volume2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Audio Deterrents</h3>
              <p className="text-slate-300 mb-6 leading-relaxed">
                Integrated speakers for live announcements and pre-recorded deterrent messages.
              </p>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  Live audio feed
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  Pre-recorded messages
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  Remote activation
                </li>
              </ul>
            </div>
            
            <div className="group bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Battery className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Power Management</h3>
              <p className="text-slate-300 mb-6 leading-relaxed">
                Intelligent power management with solar panels and backup batteries for continuous operation.
              </p>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  Solar panel array
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  Lithium batteries
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  Power monitoring
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Applications Section */}
      <div className="py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-100 to-green-200 text-green-700 text-sm font-semibold mb-6 shadow-sm">
              <Building className="w-4 h-4 mr-2" />
              UK Applications
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Perfect for UK Commercial Properties
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our CCTV towers are specifically designed for UK commercial applications and weather conditions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold group-hover:scale-110 transition-transform duration-300">
                <Settings className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Construction Sites</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Monitor ongoing projects, protect equipment, and ensure compliance with health & safety regulations across UK construction sites.
              </p>
              <ul className="text-left space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                  Equipment protection
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                  Safety compliance
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                  Theft prevention
                </li>
              </ul>
            </div>
            
            <div className="group text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold group-hover:scale-110 transition-transform duration-300">
                <Building className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Vacant Properties</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Protect unoccupied buildings from squatting, vandalism, and unauthorized access with 24/7 surveillance coverage.
              </p>
              <ul className="text-left space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                  Squatter deterrence
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                  Vandalism prevention
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                  Insurance compliance
                </li>
              </ul>
            </div>
            
            <div className="group text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold group-hover:scale-110 transition-transform duration-300">
                <Users className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Events & Festivals</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Ensure safety at large gatherings, festivals, and corporate events with comprehensive crowd monitoring.
              </p>
              <ul className="text-left space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                  Crowd management
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                  Safety monitoring
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                  Incident response
                </li>
              </ul>
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
              <Shield className="w-4 h-4 mr-2" />
              Key Benefits
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Our CCTV Towers?
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Our mobile CCTV towers provide cost-effective, flexible security solutions tailored for UK businesses.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group text-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold group-hover:scale-110 transition-transform duration-300">
                <AlertTriangle className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Crime Deterrence</h3>
              <p className="text-slate-300 leading-relaxed">
                Visible presence acts as a strong deterrent against theft, vandalism, and unauthorized access.
              </p>
            </div>
            
            <div className="group text-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold group-hover:scale-110 transition-transform duration-300">
                <Clock className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Cost Effective</h3>
              <p className="text-slate-300 leading-relaxed">
                Reduce security costs by up to 70% compared to manned security while maintaining comprehensive coverage.
              </p>
            </div>
            
            <div className="group text-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold group-hover:scale-110 transition-transform duration-300">
                <Settings className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Flexible Deployment</h3>
              <p className="text-slate-300 leading-relaxed">
                Easy relocation and redeployment as your security needs change or projects progress.
              </p>
            </div>
            
            <div className="group text-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold group-hover:scale-110 transition-transform duration-300">
                <Monitor className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Remote Monitoring</h3>
              <p className="text-slate-300 leading-relaxed">
                Monitor your site 24/7 from anywhere with our secure mobile app and web platform.
              </p>
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
              How We Deploy Your CCTV Tower
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our streamlined process ensures rapid deployment and immediate security coverage for your site.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold group-hover:scale-110 transition-transform duration-300">
                1
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Site Assessment</h3>
              <p className="text-gray-600 leading-relaxed">We assess your site requirements and determine optimal tower placement for maximum coverage.</p>
            </div>
            
            <div className="group text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold group-hover:scale-110 transition-transform duration-300">
                2
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Tower Delivery</h3>
              <p className="text-gray-600 leading-relaxed">Professional delivery and positioning of your CCTV tower at the optimal location.</p>
            </div>
            
            <div className="group text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold group-hover:scale-110 transition-transform duration-300">
                3
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">System Setup</h3>
              <p className="text-gray-600 leading-relaxed">Configuration and testing of all cameras, connectivity, and monitoring systems.</p>
            </div>
            
            <div className="group text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold group-hover:scale-110 transition-transform duration-300">
                4
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Go Live</h3>
              <p className="text-gray-600 leading-relaxed">Your CCTV tower is operational with 24/7 monitoring and remote access capabilities.</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-green-600 via-green-700 to-green-800 relative overflow-hidden">
        {/* CTA Background Image */}
        <div className="absolute inset-0">
          <Image
            src={getImageUrl('banner', 'CCTV Towers Quote')}
            alt="CCTV Towers Quote"
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
            Ready to Deploy Mobile CCTV Security?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Get a free quote for CCTV tower deployment at your UK commercial property. 
            Rapid deployment, professional monitoring, and comprehensive security coverage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-white to-slate-100 text-green-600 hover:from-slate-100 hover:to-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300">
              <Link href="/contact" className="flex items-center">
                Get Free CCTV Tower Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold backdrop-blur-sm bg-transparent">
              <Link href="/cctv-services">All CCTV Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
