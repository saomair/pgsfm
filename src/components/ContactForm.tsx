'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';

interface ContactFormProps {
  className?: string;
}

export default function ContactForm({ className = "" }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    topic: 'General',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const topics = [
    'General',
    'Report Officer',
    'Site Complaint',
    'Applying for job'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Create form data object
      const formPayload = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        topic: formData.topic,
        message: formData.message,
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
      alert('Thank you for your quote request! We will contact you within 24 hours.');
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        topic: 'General',
        message: ''
      });
      
    } catch (error) {
      console.error('Form submission error:', error);
      alert('Sorry, there was an error submitting your request. Please try again or call us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form onSubmit={handleSubmit} className={`space-y-6 ${className}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>
        <div>
          <label htmlFor="topic" className="block text-sm font-medium text-gray-700 mb-2">
            Topic
          </label>
          <select
            id="topic"
            name="topic"
            value={formData.topic}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          >
            {topics.map((topic) => (
              <option key={topic} value={topic}>
                {topic}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent resize-vertical"
          placeholder="Please provide details about your inquiry..."
        />
      </div>

      <Button type="submit" size="lg" className="w-full bg-green-600 hover:bg-green-700 text-white" disabled={isSubmitting}>
        {isSubmitting ? (
          <div className="flex items-center justify-center space-x-2">
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            <span>Sending...</span>
          </div>
        ) : (
          'Send Message'
        )}
      </Button>
    </form>
  );
}
