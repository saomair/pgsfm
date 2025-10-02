'use client';

import { useState } from 'react';
import { contactInfo } from '@/lib/data';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Clock, Star, ArrowRight, Shield, Users, Award, CheckCircle } from 'lucide-react';
import { getImageUrl } from '@/lib/imagePresets';
import ScrollReveal from '@/components/ScrollReveal';
import { AnimatedForm, AnimatedFormField, formValidation } from '@/components/AnimatedForm';


export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    topic: 'General',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleFormSubmit = async (data: Record<string, unknown>) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      // Create form data object
      const formPayload = {
        name: data.name as string || formData.name,
        email: data.email as string || formData.email,
        phone: data.phone as string || formData.phone,
        topic: data.topic as string || formData.topic,
        message: data.message as string || formData.message,
        timestamp: new Date().toISOString(),
        source: 'website_contact_form'
      };

      // Submit to API endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formPayload),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      const result = await response.json();
      console.log('Quote request submitted successfully:', result);
      
      // Show success message
      setSubmitStatus('success');
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        topic: 'General',
        message: ''
      });
      
      // Show success alert
      alert('Thank you for your quote request! We will contact you within 24 hours.');
      
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      alert('Sorry, there was an error submitting your request. Please try again or call us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string) => (value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-slate-900 via-green-900 to-slate-800 overflow-hidden">
        {/* Hero Background Image */}
        <div className="absolute inset-0">
          <Image
            src={getImageUrl('hero', 'Contact Us')}
            alt="Contact Us"
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
            <ScrollReveal animation="fade-in-up">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/20 border border-green-400/30 text-green-200 text-sm font-medium mb-6">
                <Star className="w-4 h-4 mr-2" />
                Contact Us
              </div>
            </ScrollReveal>
            
            <ScrollReveal animation="fade-in-up" delay={200}>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Get in Touch Today
              </h1>
            </ScrollReveal>
            
            <ScrollReveal animation="fade-in-up" delay={400}>
              <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Ready to discuss your security and facilities management needs? Contact our team for a free consultation and personalized quote.
              </p>
            </ScrollReveal>
            
            <ScrollReveal animation="fade-in-up" delay={600}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button asChild size="lg" className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300">
                  <Link href={`tel:${contactInfo.phone}`} className="flex items-center">
                    <Phone className="w-5 h-5 mr-2" />
                    Call Now
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold backdrop-blur-sm bg-transparent">
                  <Link href="#contact-form">Send Message</Link>
                </Button>
              </div>
            </ScrollReveal>
            
            {/* Contact Stats */}
            <ScrollReveal animation="fade-in-up" delay={800}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">24/7</div>
                  <div className="text-slate-300">Support Available</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">Free</div>
                  <div className="text-slate-300">Consultation</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">24h</div>
                  <div className="text-slate-300">Response Time</div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* Contact Form & Info */}
      <div className="py-24 bg-gradient-to-br from-slate-50 via-white to-green-50">
        <div className="container mx-auto px-4">
          <ScrollReveal animation="fade-in-up">
            <div className="text-center mb-20">
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-green-100 to-green-200 text-green-700 text-sm font-semibold mb-8 shadow-lg">
                <Mail className="w-5 h-5 mr-2" />
                Contact Form
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
                Get in Touch
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Fill out the form below and we&apos;ll get back to you within 24 hours. For urgent matters, please call us directly.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <ScrollReveal animation="fade-in-up" delay={200}>
              <div id="contact-form" className="bg-white rounded-3xl shadow-2xl p-10 border border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-500 to-green-600"></div>
                <AnimatedForm onSubmit={handleFormSubmit} loading={isSubmitting}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <AnimatedFormField
                      label="Full Name"
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={handleInputChange('name')}
                      required
                      validation={{
                        custom: formValidation.required
                      }}
                    />

                    <AnimatedFormField
                      label="Email Address"
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleInputChange('email')}
                      required
                      validation={{
                        pattern: formValidation.email.pattern,
                        custom: (value) => !value || formValidation.email.pattern.test(value) 
                          ? null 
                          : formValidation.email.message
                      }}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <AnimatedFormField
                      label="Phone Number"
                      type="tel"
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      onChange={handleInputChange('phone')}
                      validation={{
                        pattern: formValidation.phone.pattern,
                        custom: (value) => !value || formValidation.phone.pattern.test(value) 
                          ? null 
                          : formValidation.phone.message
                      }}
                    />

                    <AnimatedFormField
                      label="Topic"
                      type="select"
                      placeholder="Select a topic"
                      value={formData.topic}
                      onChange={handleInputChange('topic')}
                      options={[
                        { value: 'General', label: 'General Inquiry' },
                        { value: 'Security', label: 'Security Services' },
                        { value: 'Cleaning', label: 'Cleaning Services' },
                        { value: 'Facilities', label: 'Facilities Management' },
                        { value: 'Emergency', label: 'Emergency Response' }
                      ]}
                    />
                  </div>

                  <AnimatedFormField
                    label="Message"
                    type="textarea"
                    placeholder="Tell us about your requirements..."
                    value={formData.message}
                    onChange={handleInputChange('message')}
                    validation={{
                      minLength: 10,
                      custom: formValidation.minLength(10)
                    }}
                  />
                </AnimatedForm>
              </div>
            </ScrollReveal>

            {/* Contact Information */}
            <ScrollReveal animation="fade-in-up" delay={400}>
              <div className="space-y-6">
                <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-500 to-green-600"></div>
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-100 to-green-200 text-green-700 text-sm font-semibold mb-6 shadow-sm">
                    <Phone className="w-4 h-4 mr-2" />
                    Contact Information
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Reach Out to Us
                  </h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    We&apos;re here to help with all your security and facilities management needs.
                  </p>

                  {/* Contact Details */}
                  <div className="space-y-4">
                    <div className="group flex items-start p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-xl hover:from-green-100 hover:to-green-200 transition-all duration-300 hover:shadow-lg border border-green-200/50">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-md">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-1">Phone</h3>
                        <p className="text-gray-600 mb-2 text-sm">Call us for immediate assistance</p>
                        <a 
                          href={`tel:${contactInfo.phone}`}
                          className="text-green-600 hover:text-green-700 font-semibold text-lg transition-colors duration-200"
                        >
                          {contactInfo.phone}
                        </a>
                      </div>
                    </div>

                    <div className="group flex items-start p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-xl hover:from-green-100 hover:to-green-200 transition-all duration-300 hover:shadow-lg border border-green-200/50">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-md">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-1">Email</h3>
                        <p className="text-gray-600 mb-2 text-sm">Send us an email anytime</p>
                        <a 
                          href={`mailto:${contactInfo.email}`}
                          className="text-green-600 hover:text-green-700 font-semibold text-base transition-colors duration-200 break-all"
                        >
                          {contactInfo.email}
                        </a>
                      </div>
                    </div>

                    <div className="group flex items-start p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-xl hover:from-green-100 hover:to-green-200 transition-all duration-300 hover:shadow-lg border border-green-200/50">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-md">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-1">Address</h3>
                        <p className="text-gray-600 mb-2 text-sm">Visit our office</p>
                        <address className="text-gray-600 not-italic text-sm leading-relaxed">
                          {contactInfo.address.street}<br />
                          {contactInfo.address.city} {contactInfo.address.postcode}<br />
                          {contactInfo.address.country}
                        </address>
                      </div>
                    </div>

                    <div className="group flex items-start p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-xl hover:from-green-100 hover:to-green-200 transition-all duration-300 hover:shadow-lg border border-green-200/50">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-md">
                        <Clock className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-1">Business Hours</h3>
                        <p className="text-gray-600 mb-2 text-sm">When we&apos;re available</p>
                        <div className="text-gray-600 space-y-1 text-sm">
                          <p className="font-medium">Monday - Friday: 08:00 - 18:00</p>
                          <p className="font-medium">Saturday: 09:00 - 16:00</p>
                          <p className="font-medium">Sunday: Emergency only</p>
                          <p className="text-xs text-green-600 mt-2 font-bold bg-green-100 px-2 py-1 rounded-full inline-block">24/7 Emergency Response Available</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="py-20 bg-gradient-to-br from-slate-900 via-green-900 to-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat'
          }}></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal animation="fade-in-up">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/20 border border-green-400/30 text-green-200 text-sm font-semibold mb-6">
                <Shield className="w-4 h-4 mr-2" />
                Professional Security Services
              </div>
            </ScrollReveal>
            
            <ScrollReveal animation="fade-in-up" delay={200}>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Secure Your Business?
              </h2>
            </ScrollReveal>
            
            <ScrollReveal animation="fade-in-up" delay={400}>
              <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                Get in touch with our security experts today for a comprehensive consultation and customized security solution.
              </p>
            </ScrollReveal>
            
            <ScrollReveal animation="fade-in-up" delay={600}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <Link href={`tel:${contactInfo.phone}`} className="flex items-center">
                    <Phone className="w-5 h-5 mr-2" />
                    Call Now: {contactInfo.phone}
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-2 border-green-400/50 text-green-200 hover:bg-green-400/10 px-8 py-4 text-lg font-semibold backdrop-blur-sm hover:scale-105 transition-all duration-300">
                  <Link href="#contact-form">Send Message</Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </>
  );
}
