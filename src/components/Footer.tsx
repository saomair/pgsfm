import Link from 'next/link';
import Image from 'next/image';
import { contactInfo, policies, accreditations } from '@/lib/data';
import { Award, Mail, Phone, MapPin, ExternalLink, Facebook, Twitter, Linkedin } from 'lucide-react';
import TerrorismAlert from './TerrorismAlert';

export default function Footer() {
  return (
    <>
      <footer className="bg-gray-800 text-white">
        <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Information */}
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="relative w-16 h-16">
                <Image
                  src="/pgsfm-logo.jpg"
                  alt="PGS FM Ltd Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Providing top-notch security and facilities management services across the UK. 
              Professional, reliable, and comprehensive solutions for all sectors.
            </p>
            
            {/* Contact Information */}
            <div className="space-y-3 pt-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-green-400 flex-shrink-0" />
                <div className="text-sm">
                  <a href={`tel:${contactInfo.phone}`} className="text-gray-300 hover:text-white transition-colors">
                    {contactInfo.phone}
                  </a>
                  {contactInfo.alternativePhone && (
                    <span className="text-gray-500 ml-2">
                      / <a href={`tel:${contactInfo.alternativePhone}`} className="text-gray-300 hover:text-white transition-colors">
                        {contactInfo.alternativePhone}
                      </a>
                    </span>
                  )}
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-green-400 flex-shrink-0" />
                <a href={`mailto:${contactInfo.email}`} className="text-sm text-gray-300 hover:text-white transition-colors">
                  {contactInfo.email}
                </a>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-gray-300">
                  <p>
                    {contactInfo.address.street}<br />
                    {contactInfo.address.city} {contactInfo.address.postcode}<br />
                    {contactInfo.address.country}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <nav className="space-y-2">
              <Link href="/about" className="block text-sm text-gray-300 hover:text-white transition-colors">
                About Us
              </Link>
              <Link href="/services" className="block text-sm text-gray-300 hover:text-white transition-colors">
                Services
              </Link>
              <Link href="/cctv-services" className="block text-sm text-gray-300 hover:text-white transition-colors">
                CCTV Services
              </Link>
              <Link href="/cctv-towers" className="block text-sm text-gray-300 hover:text-white transition-colors">
                CCTV Towers
              </Link>
              <Link href="/cleaning" className="block text-sm text-gray-300 hover:text-white transition-colors">
                Cleaning Services
              </Link>
              <Link href="/sectors" className="block text-sm text-gray-300 hover:text-white transition-colors">
                Sectors We Serve
              </Link>
              <Link href="/contact" className="block text-sm text-gray-300 hover:text-white transition-colors">
                Contact Us
              </Link>
            </nav>
          </div>

          {/* Newsletter & Legal */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Stay Connected</h3>
            <p className="text-sm text-gray-300">
              Get the latest security insights and company updates delivered to your inbox.
            </p>
            
            {/* Newsletter Signup */}
            <div className="space-y-3">
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                <button className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded-md transition-colors whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>

            {/* Company Info */}
            <div className="pt-4 border-t border-gray-700">
              <div className="text-xs text-gray-400 space-y-1">
                <p>Company Number: {contactInfo.companyNumber}</p>
                <p>Registered in England & Wales</p>
                <p>Security & Facilities Management</p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media & Accreditations */}
        <div className="border-t border-gray-700 pt-8">
          {/* Social Media Links */}
          <div className="text-center mb-8">
            <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
            <div className="flex justify-center space-x-6">
              <a 
                href="https://www.facebook.com/pgsfm" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-400 transition-colors"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a 
                href="https://twitter.com/pgsfm" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-400 transition-colors"
                aria-label="Follow us on Twitter"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a 
                href="https://www.linkedin.com/company/pgsfm" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-400 transition-colors"
                aria-label="Follow us on LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Accreditations */}
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/20 text-green-300 text-sm font-semibold mb-4">
              <Award className="w-4 h-4 mr-2" />
              Accredited & Certified
            </div>
            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
              {accreditations.map((accreditation, index) => (
                <Link
                  key={index}
                  href={accreditation.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group opacity-70 hover:opacity-100 transition-all duration-300 hover:scale-105"
                  title={accreditation.description}
                >
                  <div className="relative w-16 h-10 md:w-20 md:h-12">
                    <Image
                      src={accreditation.logoUrl}
                      alt={`${accreditation.name} certification`}
                      fill
                      className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-sm text-gray-400 text-center md:text-left">
              <p>&copy; 2024 {contactInfo.companyName}. All rights reserved.</p>
            </div>
            
            {/* Legal Links */}
            <div className="flex flex-wrap justify-center md:justify-end gap-4 text-sm">
              {policies.slice(0, 3).map((policy) => (
                <Link
                  key={policy.slug}
                  href={`/policies/${policy.slug}`}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {policy.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      </footer>
      <TerrorismAlert />
    </>
  );
}
