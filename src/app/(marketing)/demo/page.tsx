'use client';

import React, { useState } from 'react';
import AnimatedCard from '@/components/AnimatedCard';
import AnimatedButton from '@/components/AnimatedButton';
import ScrollReveal, { StaggeredReveal, CounterReveal, TypingReveal } from '@/components/ScrollReveal';
import { AnimatedForm, AnimatedFormField, formValidation } from '@/components/AnimatedForm';
import { LoadingStates, CardSkeleton, SkeletonGrid } from '@/components/LoadingStates';
import { ArrowRight, Star, Shield, Users, Award, CheckCircle } from 'lucide-react';

export default function DemoPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleFormSubmit = async (data: FormData) => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      alert('Form submitted successfully!');
    }, 2000);
  };

  const handleInputChange = (field: string) => (value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat'
          }}></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal animation="fade-in-up">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-200 text-sm font-semibold mb-6">
                <Star className="w-4 h-4 mr-2" />
                Animation Demo
              </div>
            </ScrollReveal>
            
            <ScrollReveal animation="fade-in-up" delay={200}>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Advanced Animation System
              </h1>
            </ScrollReveal>
            
            <ScrollReveal animation="fade-in-up" delay={400}>
              <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Experience our comprehensive animation system with micro-interactions, 
                scroll-triggered animations, and advanced loading states.
              </p>
            </ScrollReveal>
            
            <ScrollReveal animation="fade-in-up" delay={600}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <AnimatedButton
                  variant="gradient"
                  size="lg"
                  animation="bounce"
                  ripple={true}
                  magnetic={true}
                  onClick={() => window.scrollTo({ top: 800, behavior: 'smooth' })}
                >
                  Explore Animations
                  <ArrowRight className="w-5 h-5 ml-2" />
                </AnimatedButton>
                
                <AnimatedButton
                  variant="outline"
                  size="lg"
                  animation="glow"
                  className="border-2 border-white/30 text-white hover:bg-white/10"
                >
                  View Components
                </AnimatedButton>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* Animated Cards Section */}
      <div className="py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4">
          <ScrollReveal animation="fade-in-up">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Animated Cards
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Cards with various animation effects and micro-interactions
              </p>
            </div>
          </ScrollReveal>

          <StaggeredReveal
            animation="fade-in-up"
            staggerDelay={200}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                title: "Fade In Up",
                description: "Smooth fade in with upward motion",
                animation: "fade-in-up" as const,
                variant: "default" as const
              },
              {
                title: "Scale In",
                description: "Elegant scale animation",
                animation: "scale-in" as const,
                variant: "glass" as const
              },
              {
                title: "Bounce In",
                description: "Playful bounce effect",
                animation: "bounce-in" as const,
                variant: "gradient" as const
              }
            ].map((card, index) => (
              <AnimatedCard
                key={index}
                animation={card.animation}
                variant={card.variant}
                hover={true}
                interactive={true}
                className="p-8"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {card.description}
                  </p>
                  <AnimatedButton
                    variant="outline"
                    size="md"
                    animation="pulse"
                    ripple={true}
                  >
                    Learn More
                  </AnimatedButton>
                </div>
              </AnimatedCard>
            ))}
          </StaggeredReveal>
        </div>
      </div>

      {/* Counter Animation Section */}
      <div className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
        <div className="container mx-auto px-4">
          <ScrollReveal animation="fade-in-up">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Counter Animations
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Animated counters that trigger on scroll
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { label: "Happy Clients", value: 500, suffix: "+" },
              { label: "Projects Completed", value: 1200, suffix: "+" },
              { label: "Years Experience", value: 15, suffix: "+" },
              { label: "Team Members", value: 50, suffix: "+" }
            ].map((stat, index) => (
              <ScrollReveal
                key={index}
                animation="scale-in"
                delay={index * 200}
                className="text-center"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                    <CounterReveal end={stat.value} duration={2000} delay={index * 200} />
                    {stat.suffix}
                  </div>
                  <div className="text-slate-300 text-lg">
                    {stat.label}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>

      {/* Typing Animation Section */}
      <div className="py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4">
          <ScrollReveal animation="fade-in-up">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Typing Animation
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Dynamic text that types itself out
              </p>
            </div>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto">
            <ScrollReveal animation="fade-in-up" delay={200}>
              <div className="bg-white rounded-2xl shadow-2xl p-12 text-center">
                <TypingReveal
                  text="Welcome to PGS FM Ltd - Your Trusted Security Partner"
                  speed={100}
                  delay={500}
                  className="text-3xl md:text-4xl font-bold text-gray-900 mb-8"
                />
                <TypingReveal
                  text="Professional security and facilities management services across the UK"
                  speed={50}
                  delay={3000}
                  className="text-xl text-gray-600"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* Loading States Section */}
      <div className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
        <div className="container mx-auto px-4">
          <ScrollReveal animation="fade-in-up">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Loading States
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Various loading animations and skeleton screens
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ScrollReveal animation="fade-in-up" delay={200}>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">Skeleton Grid</h3>
                <LoadingStates isLoading={isLoading}>
                  <SkeletonGrid items={6} />
                </LoadingStates>
                <AnimatedButton
                  variant="outline"
                  size="md"
                  className="mt-6 border-white/30 text-white hover:bg-white/10"
                  onClick={() => {
                    setIsLoading(true);
                    setTimeout(() => setIsLoading(false), 3000);
                  }}
                >
                  Toggle Loading
                </AnimatedButton>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-in-up" delay={400}>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">Card Skeleton</h3>
                <LoadingStates isLoading={isLoading}>
                  <div className="space-y-4">
                    <CardSkeleton />
                    <CardSkeleton />
                  </div>
                </LoadingStates>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-in-up" delay={600}>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">Loaders</h3>
                <div className="space-y-6">
                  <div className="flex items-center justify-center space-x-4">
                    <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span className="text-white">Spinner</span>
                  </div>
                  <div className="flex items-center justify-center space-x-4">
                    <div className="flex space-x-1">
                      {[0, 1, 2].map((i) => (
                        <div
                          key={i}
                          className="w-3 h-3 bg-white rounded-full animate-pulse"
                          style={{ animationDelay: `${i * 0.2}s` }}
                        />
                      ))}
                    </div>
                    <span className="text-white">Dots</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* Animated Form Section */}
      <div className="py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4">
          <ScrollReveal animation="fade-in-up">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Animated Form
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Interactive form with real-time validation and animations
              </p>
            </div>
          </ScrollReveal>

          <div className="max-w-2xl mx-auto">
            <ScrollReveal animation="fade-in-up" delay={200}>
              <AnimatedForm onSubmit={handleFormSubmit} loading={isLoading}>
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
                  label="Message"
                  type="textarea"
                  placeholder="Tell us about your requirements"
                  value={formData.message}
                  onChange={handleInputChange('message')}
                  validation={{
                    minLength: 10,
                    custom: formValidation.minLength(10)
                  }}
                />
              </AnimatedForm>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal animation="fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Experience These Animations?
            </h2>
          </ScrollReveal>
          
          <ScrollReveal animation="fade-in-up" delay={200}>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              All these animations are now available throughout the website for a more engaging user experience.
            </p>
          </ScrollReveal>
          
          <ScrollReveal animation="fade-in-up" delay={400}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <AnimatedButton
                variant="gradient"
                size="lg"
                animation="bounce"
                ripple={true}
                magnetic={true}
                onClick={() => window.location.href = '/'}
              >
                Back to Home
                <ArrowRight className="w-5 h-5 ml-2" />
              </AnimatedButton>
              
              <AnimatedButton
                variant="outline"
                size="lg"
                animation="glow"
                className="border-2 border-white/30 text-white hover:bg-white/10"
                onClick={() => window.location.href = '/contact'}
              >
                Contact Us
              </AnimatedButton>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
