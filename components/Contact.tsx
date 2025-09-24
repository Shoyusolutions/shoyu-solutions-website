'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    business: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your interest! We\'ll contact you within 24 hours.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
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
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Business Name *
                    </label>
                    <input
                      type="text"
                      name="business"
                      required
                      value={formData.business}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Tell us about your needs
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="What type of business do you run? What are your main pain points with current POS systems?"
                  />
                </div>

                <button type="submit" className="w-full btn-primary flex items-center justify-center">
                  Get Your Free Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </form>
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
              <h3 className="text-2xl font-bold mb-6">Why Choose CustomPOS?</h3>
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
                    <p className="text-gray-600">info@custompos.com</p>
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

            <div className="bg-gradient-to-br from-primary-600 to-primary-700 text-white rounded-xl p-6">
              <h4 className="text-xl font-bold mb-3">Limited Time Offer</h4>
              <p className="mb-4">
                First 10 businesses this month get 20% off implementation plus free hardware upgrade!
              </p>
              <div className="bg-white/20 rounded-lg p-3 text-center">
                <p className="text-2xl font-bold">Save $400+</p>
                <p className="text-sm">Offer expires in 7 days</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}