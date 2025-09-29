'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, ArrowRight, X, User, Building2, MessageSquare } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    business: '',
    email: '',
    phone: '',
    message: '',
    subject: 'POS System Inquiry'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(null);
  const [validationErrors, setValidationErrors] = useState<{[key: string]: string}>({});
  const [messageCharCount, setMessageCharCount] = useState(0);
  const [formSubmitAttempted, setFormSubmitAttempted] = useState(false);

  const validateForm = () => {
    const errors: {[key: string]: string} = {};

    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }

    if (!formData.business.trim()) {
      errors.business = 'Business name is required';
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    } else if (formData.email.includes('+')) {
      errors.email = 'Email addresses with "+" are not accepted';
    }

    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    }

    if (messageCharCount > 1000) {
      errors.message = 'Message must be 1000 characters or less';
    }

    return errors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitAttempted(true);

    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      return;
    }

    setIsSubmitting(true);
    setValidationErrors({});

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          business: '',
          email: '',
          phone: '',
          message: '',
          subject: 'POS System Inquiry'
        });
        setMessageCharCount(0);
        setFormSubmitAttempted(false);

        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus(null);
        }, 5000);
      } else {
        setSubmitStatus('error');
        console.error('Form submission failed:', data);
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const formatPhoneNumber = (value: string) => {
    // Remove all non-digits
    const phoneNumber = value.replace(/\D/g, '');

    // Format based on length
    if (phoneNumber.length === 0) return '';
    if (phoneNumber.length <= 3) return `(${phoneNumber}`;
    if (phoneNumber.length <= 6) return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    if (phoneNumber.length <= 10) return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6)}`;
    // Limit to 10 digits
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    if (name === 'message') {
      setMessageCharCount(value.length);
    }

    // Format phone number as user types
    if (name === 'phone') {
      const formatted = formatPhoneNumber(value);
      setFormData({
        ...formData,
        phone: formatted
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }

    // Clear validation error for this field if user is fixing it
    if (formSubmitAttempted && validationErrors[name]) {
      setValidationErrors({
        ...validationErrors,
        [name]: ''
      });
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary-50 to-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get a free consultation and see how a custom POS solution can save you time and money
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="card">
              <h3 className="text-2xl font-bold mb-6">Get Your Free Consultation</h3>

              {submitStatus === 'success' ? (
                <div className="text-center py-8 px-2 space-y-4 bg-green-50 rounded-lg">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <h4 className="text-2xl font-medium text-gray-900 mb-2">Message Sent!</h4>
                  <p className="text-gray-600">Thank you for your interest. We'll contact you within 24 hours.</p>
                </div>
              ) : submitStatus === 'error' ? (
                <div className="text-center py-8 px-2 space-y-4 bg-red-50 rounded-lg">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-red-500 to-red-600 mb-4">
                    <X className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-2xl font-medium text-gray-900 mb-2">Something went wrong</h4>
                  <p className="text-gray-600 mb-4">Please try again or contact us directly:</p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <a
                      href="mailto:info@shoyusolutions.com"
                      className="inline-flex items-center justify-center px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-md transition-colors text-sm font-medium"
                    >
                      <Mail className="h-4 w-4 mr-2" />
                      Email directly
                    </a>
                    <button
                      onClick={() => setSubmitStatus(null)}
                      className="inline-flex items-center justify-center px-4 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-md transition-colors text-sm font-medium"
                    >
                      Try Again
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className={`w-full pl-10 pr-3 py-2 border ${
                            formSubmitAttempted && validationErrors.name
                              ? 'border-red-500 focus:ring-red-500'
                              : 'border-gray-300 focus:ring-primary-500'
                          } rounded-lg focus:ring-2 focus:border-transparent transition-colors`}
                          placeholder="Your name"
                        />
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <User className={`h-5 w-5 ${
                            formSubmitAttempted && validationErrors.name
                              ? 'text-red-500'
                              : 'text-gray-400'
                          }`} />
                        </div>
                      </div>
                      {formSubmitAttempted && validationErrors.name && (
                        <p className="mt-1 text-xs text-red-500">{validationErrors.name}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Business Name <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          name="business"
                          required
                          value={formData.business}
                          onChange={handleChange}
                          className={`w-full pl-10 pr-3 py-2 border ${
                            formSubmitAttempted && validationErrors.business
                              ? 'border-red-500 focus:ring-red-500'
                              : 'border-gray-300 focus:ring-primary-500'
                          } rounded-lg focus:ring-2 focus:border-transparent transition-colors`}
                          placeholder="Your business name"
                        />
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <Building2 className={`h-5 w-5 ${
                            formSubmitAttempted && validationErrors.business
                              ? 'text-red-500'
                              : 'text-gray-400'
                          }`} />
                        </div>
                      </div>
                      {formSubmitAttempted && validationErrors.business && (
                        <p className="mt-1 text-xs text-red-500">{validationErrors.business}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full pl-10 pr-3 py-2 border ${
                            formSubmitAttempted && validationErrors.email
                              ? 'border-red-500 focus:ring-red-500'
                              : 'border-gray-300 focus:ring-primary-500'
                          } rounded-lg focus:ring-2 focus:border-transparent transition-colors`}
                          placeholder="your.email@example.com"
                        />
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <Mail className={`h-5 w-5 ${
                            formSubmitAttempted && validationErrors.email
                              ? 'text-red-500'
                              : 'text-gray-400'
                          }`} />
                        </div>
                      </div>
                      {formSubmitAttempted && validationErrors.email && (
                        <p className="mt-1 text-xs text-red-500">{validationErrors.email}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <div className="relative">
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="(555) 123-4567"
                        />
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <Phone className="h-5 w-5 text-gray-400" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      What would you like to discuss?
                    </label>
                    <div className="relative">
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent appearance-none"
                      >
                        <option value="POS System Inquiry">POS System Inquiry</option>
                        <option value="Get a Quote">Get a Quote</option>
                        <option value="Schedule Demo">Schedule Demo</option>
                        <option value="Technical Questions">Technical Questions</option>
                        <option value="Other">Other</option>
                      </select>
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <MessageSquare className="h-5 w-5 text-gray-400" />
                      </div>
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                          <path d="m6 9 6 6 6-6" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <label className="block text-sm font-medium text-gray-700">
                        Tell us about your needs <span className="text-red-500">*</span>
                      </label>
                      <span className={`text-xs ${messageCharCount > 1000 ? 'text-red-500' : 'text-gray-500'}`}>
                        {messageCharCount}/1000
                      </span>
                    </div>
                    <textarea
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border ${
                        formSubmitAttempted && validationErrors.message
                          ? 'border-red-500 focus:ring-red-500'
                          : 'border-gray-300 focus:ring-primary-500'
                      } rounded-lg focus:ring-2 focus:border-transparent transition-colors resize-none`}
                      placeholder="What type of business do you run? What are your main pain points with current POS systems?"
                      maxLength={1000}
                    />
                    {formSubmitAttempted && validationErrors.message && (
                      <p className="mt-1 text-xs text-red-500">{validationErrors.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Get Your Free Quote
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="card">
              <h3 className="text-2xl font-bold mb-6">Why Choose Shoyu Solutions?</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-primary-100 rounded-full p-2 mr-4">
                    <Phone className="h-5 w-5 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Direct Local Support</h4>
                    <p className="text-gray-600">Call us anytime at (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary-100 rounded-full p-2 mr-4">
                    <Mail className="h-5 w-5 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Quick Response</h4>
                    <p className="text-gray-600">info@shoyusolutions.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary-100 rounded-full p-2 mr-4">
                    <MapPin className="h-5 w-5 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Serving Local Businesses</h4>
                    <p className="text-gray-600">Throughout the metro area</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary-100 rounded-full p-2 mr-4">
                    <Clock className="h-5 w-5 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Fast Setup</h4>
                    <p className="text-gray-600">Get running in 2-3 business days</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}