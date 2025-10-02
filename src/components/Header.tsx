'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';
import { navigation, services, sectors } from '@/lib/data';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCCTVDropdownOpen, setIsCCTVDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Company Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative w-12 h-12 md:w-16 md:h-16">
              <Image
                src="/pgsfm-logo.jpg"
                alt="PGS FM Ltd Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.name === 'Services' ? (
                  <div
                    className="relative px-4 py-2 text-gray-700 hover:text-green-600 font-medium transition-all duration-200 rounded-lg hover:bg-green-50 group cursor-pointer flex items-center"
                    onMouseEnter={() => setIsServicesDropdownOpen(true)}
                    onMouseLeave={() => setIsServicesDropdownOpen(false)}
                  >
                    {item.name}
                    <ChevronDown className="w-4 h-4 ml-1" />
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 transition-all duration-200 group-hover:w-full"></span>
                    
                    {/* Services Dropdown */}
                    {isServicesDropdownOpen && (
                      <div className="absolute top-full left-0 mt-3 w-[520px] bg-white rounded-xl shadow-2xl border border-gray-200/50 py-6 z-50 overflow-hidden backdrop-blur-sm">
                        <div className="flex">
                          {/* Services Column */}
                          <div className="flex-1 px-6 py-1">
                            <div className="flex items-center mb-5">
                              <div className="w-2.5 h-2.5 bg-gradient-to-r from-green-500 to-green-600 rounded-full mr-3 shadow-sm"></div>
                              <h3 className="text-lg font-bold text-gray-900 tracking-tight">Our Services</h3>
                            </div>
                            <div className="space-y-0.5">
                              {services.map((service, index) => (
                                <Link
                                  key={service.slug}
                                  href={`/services/${service.slug}`}
                                  className="group flex items-center py-3 px-4 rounded-lg hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50 transition-all duration-300 border border-transparent hover:border-green-200/50 hover:shadow-sm"
                                  style={{ animationDelay: `${index * 50}ms` }}
                                >
                                  <div className="flex-1">
                                    <div className="font-semibold text-gray-800 group-hover:text-green-700 transition-colors text-sm leading-tight">
                                      {service.title}
                                    </div>
                                  </div>
                                  <div className="ml-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-1 group-hover:translate-x-0">
                                    <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                                    </svg>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                          
                          {/* Divider */}
                          <div className="w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent my-2"></div>
                          
                          {/* Sectors Column */}
                          <div className="flex-1 px-6 py-1">
                            <div className="flex items-center mb-5">
                              <div className="w-2.5 h-2.5 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mr-3 shadow-sm"></div>
                              <h3 className="text-lg font-bold text-gray-900 tracking-tight">Sectors We Serve</h3>
                            </div>
                            <div className="space-y-0.5">
                              {sectors.map((sector, index) => (
                                <div
                                  key={index}
                                  className="group py-3 px-4 rounded-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-sky-50 transition-all duration-300 border border-transparent hover:border-blue-200/50 hover:shadow-sm cursor-pointer"
                                  style={{ animationDelay: `${index * 50}ms` }}
                                >
                                  <div className="font-semibold text-gray-800 group-hover:text-blue-700 transition-colors text-sm leading-tight">
                                    {sector.name}
                                  </div>
                                </div>
                              ))}
                              <Link
                                href="/sectors"
                                className="group flex items-center py-3 px-4 rounded-lg hover:bg-gradient-to-r hover:from-gray-50 hover:to-slate-50 transition-all duration-300 border border-transparent hover:border-gray-200/50 hover:shadow-sm mt-3"
                              >
                                <div className="font-semibold text-green-600 group-hover:text-green-700 transition-colors text-sm">
                                  View All Sectors
                                </div>
                                <svg className="w-4 h-4 text-green-500 ml-3 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                                </svg>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ) : item.name === 'CCTV' ? (
                  <div
                    className="relative px-4 py-2 text-gray-700 hover:text-green-600 font-medium transition-all duration-200 rounded-lg hover:bg-green-50 group cursor-pointer flex items-center"
                    onMouseEnter={() => setIsCCTVDropdownOpen(true)}
                    onMouseLeave={() => setIsCCTVDropdownOpen(false)}
                  >
                    {item.name}
                    <ChevronDown className="w-4 h-4 ml-1" />
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 transition-all duration-200 group-hover:w-full"></span>
                    
                    {/* CCTV Dropdown */}
                    {isCCTVDropdownOpen && (
                      <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                        <Link
                          href="/cctv-services"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
                        >
                          CCTV Installation & Monitoring
                        </Link>
                        <Link
                          href="/cctv-towers"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
                        >
                          CCTV Towers - Mobile Surveillance
                        </Link>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="relative px-4 py-2 text-gray-700 hover:text-green-600 font-medium transition-all duration-200 rounded-lg hover:bg-green-50 group"
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 transition-all duration-200 group-hover:w-full"></span>
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button asChild className="bg-green-600 hover:bg-green-700 text-white">
              <Link href="/contact">Get Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t bg-white/95 backdrop-blur-sm">
            <nav className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.name === 'Services' ? (
                    <div className="px-4 py-3 text-gray-700 font-medium">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-gray-900">Services</span>
                        <ChevronDown className="w-4 h-4 text-gray-500" />
                      </div>
                      <div className="ml-4 mt-4 space-y-6">
                        {/* Services Section */}
                        <div>
                          <div className="flex items-center mb-4">
                            <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-green-600 rounded-full mr-3 shadow-sm"></div>
                            <div className="text-sm font-bold text-gray-800 uppercase tracking-wide">Our Services</div>
                          </div>
                          <div className="space-y-1">
                            {services.map((service) => (
                              <Link
                                key={service.slug}
                                href={`/services/${service.slug}`}
                                className="group flex items-center py-3 px-4 text-sm text-gray-700 hover:text-green-700 hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50 rounded-lg transition-all duration-200 border border-transparent hover:border-green-200/50"
                                onClick={() => setIsMenuOpen(false)}
                              >
                                <span className="font-medium">{service.title}</span>
                                <svg className="w-3 h-3 text-green-500 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                              </Link>
                            ))}
                          </div>
                        </div>
                        
                        {/* Sectors Section */}
                        <div>
                          <div className="flex items-center mb-4">
                            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mr-3 shadow-sm"></div>
                            <div className="text-sm font-bold text-gray-800 uppercase tracking-wide">Sectors We Serve</div>
                          </div>
                          <div className="space-y-1">
                            {sectors.map((sector, index) => (
                              <div
                                key={index}
                                className="py-3 px-4 text-sm text-gray-700 font-medium rounded-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-sky-50 transition-all duration-200"
                              >
                                {sector.name}
                              </div>
                            ))}
                            <Link
                              href="/sectors"
                              className="group flex items-center py-3 px-4 text-sm text-green-600 hover:text-green-700 font-medium hover:bg-gradient-to-r hover:from-gray-50 hover:to-slate-50 rounded-lg transition-all duration-200 border border-transparent hover:border-gray-200/50"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              <span>View All Sectors</span>
                              <svg className="w-3 h-3 text-green-500 ml-auto group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : item.name === 'CCTV' ? (
                    <div className="px-4 py-3 text-gray-700 font-medium">
                      <div className="flex items-center justify-between">
                        <span>CCTV Services</span>
                        <ChevronDown className="w-4 h-4" />
                      </div>
                      <div className="ml-4 mt-2 space-y-1">
                        <Link
                          href="/cctv-services"
                          className="block py-2 text-sm text-gray-600 hover:text-green-600 transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          CCTV Installation & Monitoring
                        </Link>
                        <Link
                          href="/cctv-towers"
                          className="block py-2 text-sm text-gray-600 hover:text-green-600 transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          CCTV Towers - Mobile Surveillance
                        </Link>
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="px-4 py-3 text-gray-700 hover:text-green-600 hover:bg-green-50 font-medium rounded-lg transition-all duration-200"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-2">
                <Button asChild className="w-full bg-green-600 hover:bg-green-700 text-white">
                  <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                    Get Quote
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
