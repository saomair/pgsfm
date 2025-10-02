'use client';

import React, { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { CheckCircle, XCircle, AlertCircle, Eye, EyeOff } from 'lucide-react';

interface FormFieldProps {
  label: string;
  type?: 'text' | 'email' | 'password' | 'tel' | 'textarea' | 'select';
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  success?: boolean;
  required?: boolean;
  disabled?: boolean;
  options?: Array<{ value: string; label: string }>;
  validation?: {
    pattern?: RegExp;
    minLength?: number;
    maxLength?: number;
    custom?: (value: string) => string | null;
  };
  className?: string;
}

export function AnimatedFormField({
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  error,
  success,
  required = false,
  disabled = false,
  options = [],
  validation,
  className = ""
}: FormFieldProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [isTouched, setIsTouched] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [localError, setLocalError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>(null);

  const hasError = error || localError;
  const isValid = success || (value && !hasError && isTouched);

  useEffect(() => {
    if (validation && value) {
      let errorMessage: string | null = null;

      if (validation.pattern && !validation.pattern.test(value)) {
        errorMessage = 'Invalid format';
      }

      if (validation.minLength && value.length < validation.minLength) {
        errorMessage = `Minimum ${validation.minLength} characters required`;
      }

      if (validation.maxLength && value.length > validation.maxLength) {
        errorMessage = `Maximum ${validation.maxLength} characters allowed`;
      }

      if (validation.custom) {
        errorMessage = validation.custom(value);
      }

      setLocalError(errorMessage);
    }
  }, [value, validation]);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setIsTouched(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    onChange(e.target.value);
  };

  const getInputType = () => {
    if (type === 'password') {
      return showPassword ? 'text' : 'password';
    }
    return type;
  };

  const renderInput = () => {
    const inputClasses = cn(
      'w-full px-4 py-3 border-2 rounded-xl transition-all duration-300 focus:outline-none',
      'bg-white text-gray-900 placeholder-gray-500',
      isFocused && 'border-green-500 shadow-lg shadow-green-500/20',
      hasError && 'border-red-500 shadow-lg shadow-red-500/20',
      isValid && 'border-green-500 shadow-lg shadow-green-500/20',
      disabled && 'bg-gray-100 cursor-not-allowed opacity-60'
    );

    if (type === 'textarea') {
      return (
        <textarea
          ref={inputRef as React.RefObject<HTMLTextAreaElement>}
          value={value}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          rows={4}
          className={cn(inputClasses, 'resize-none')}
        />
      );
    }

    if (type === 'select') {
      return (
        <select
          ref={inputRef as React.RefObject<HTMLSelectElement>}
          value={value}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          disabled={disabled}
          required={required}
          className={inputClasses}
        >
          <option value="" disabled>
            {placeholder || 'Select an option'}
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      );
    }

    return (
      <div className="relative">
        <input
          ref={inputRef as React.RefObject<HTMLInputElement>}
          type={getInputType()}
          value={value}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          className={inputClasses}
        />
        {type === 'password' && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors duration-200"
          >
            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
          </button>
        )}
      </div>
    );
  };

  return (
    <div className={cn('space-y-2', className)}>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      
      <div className="relative">
        {renderInput()}
        
        {/* Status Icons */}
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
          {isValid && <CheckCircle className="w-5 h-5 text-green-500" />}
          {hasError && <XCircle className="w-5 h-5 text-red-500" />}
        </div>
      </div>

      {/* Error Message */}
      {hasError && (
        <div className="flex items-center space-x-2 text-red-600 text-sm animate-fade-in-down">
          <AlertCircle className="w-4 h-4" />
          <span>{hasError}</span>
        </div>
      )}

      {/* Success Message */}
      {isValid && !hasError && (
        <div className="flex items-center space-x-2 text-green-600 text-sm animate-fade-in-down">
          <CheckCircle className="w-4 h-4" />
          <span>Looks good!</span>
        </div>
      )}
    </div>
  );
}

// Enhanced form component
interface AnimatedFormProps {
  children: React.ReactNode;
  onSubmit: (data: Record<string, unknown>) => void;
  className?: string;
  loading?: boolean;
}

export function AnimatedForm({ 
  children, 
  onSubmit, 
  className = "",
  loading = false
}: AnimatedFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const formData = new FormData(e.target as HTMLFormElement);
      const data: Record<string, unknown> = {};
      formData.forEach((value, key) => {
        data[key] = value;
      });
      await onSubmit(data);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={cn('space-y-6', className)}
    >
      {children}
      
      <button
        type="submit"
        disabled={loading || isSubmitting}
        className={cn(
          'w-full py-4 px-6 bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold rounded-xl',
          'hover:from-green-700 hover:to-green-800 transform hover:scale-105 transition-all duration-300',
          'focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2',
          'disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none',
          'shadow-lg hover:shadow-xl'
        )}
      >
        {loading || isSubmitting ? (
          <div className="flex items-center justify-center space-x-2">
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            <span>Submitting...</span>
          </div>
        ) : (
          'Submit'
        )}
      </button>
    </form>
  );
}

// Form validation utilities
export const formValidation = {
  email: {
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: 'Please enter a valid email address'
  },
  phone: {
    pattern: /^[\+]?[1-9][\d]{0,15}$/,
    message: 'Please enter a valid phone number'
  },
  required: (value: string) => value.trim().length > 0 ? null : 'This field is required',
  minLength: (min: number) => (value: string) => 
    value.length >= min ? null : `Minimum ${min} characters required`,
  maxLength: (max: number) => (value: string) => 
    value.length <= max ? null : `Maximum ${max} characters allowed`
};
