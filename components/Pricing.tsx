'use client';

import { motion } from 'framer-motion';
import { Check, Star, Sparkles, Zap, Truck, Store, Coffee } from 'lucide-react';

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
            <Sparkles className="h-4 w-4 mr-2" />
            All Delivery Platforms - One POS System
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Built for Restaurants, Delis, Coffee Shops & More
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your POS adapts to your unique workflow, automates repetitive tasks, and gives you complete control over every aspect of your business operations.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="card border-2 border-gray-200 relative overflow-hidden">
              <div className="text-center mb-6">
                <Coffee className="h-12 w-12 text-primary-600 mx-auto mb-3" />
                <h3 className="text-xl font-bold mb-2">Coffee Shops & Cafes</h3>
                <p className="text-sm text-gray-600 mt-2">Quick service, loyalty programs</p>
              </div>

              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Mobile ordering integration</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Custom menu modifiers</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Loyalty & rewards</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Speed of service tracking</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Custom reporting</span>
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="relative transform lg:scale-105"
          >
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-primary-600 text-white text-sm font-semibold rounded-full z-10">
              Most Popular
            </div>
            <div className="card border-2 border-primary-600 shadow-2xl relative">
              <div className="text-center mb-6">
                <Store className="h-12 w-12 text-primary-600 mx-auto mb-3" />
                <h3 className="text-xl font-bold mb-2 text-primary-600">Restaurants & Delis</h3>
                <p className="text-sm text-green-600 mt-2 font-semibold">Full service operations</p>
              </div>

              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">ALL delivery platforms integrated</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">Table management & reservations</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">Kitchen display system</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">Inventory & recipe costing</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">Multi-location support</span>
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-purple-600 text-white text-sm font-semibold rounded-full z-10">
              <Star className="h-3 w-3 inline mr-1" />
              Any Business
            </div>
            <div className="card border-2 border-purple-600 relative">
              <div className="text-center mb-6">
                <Zap className="h-12 w-12 text-purple-600 mx-auto mb-3" />
                <h3 className="text-xl font-bold mb-2">Sky's the Limit</h3>
                <p className="text-sm text-gray-600 mt-2">We build for any business type</p>
              </div>

              <ul className="space-y-3">
                <li className="flex items-start">
                  <Zap className="h-5 w-5 text-purple-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Retail stores</span>
                </li>
                <li className="flex items-start">
                  <Zap className="h-5 w-5 text-purple-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Service businesses</span>
                </li>
                <li className="flex items-start">
                  <Zap className="h-5 w-5 text-purple-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Food trucks</span>
                </li>
                <li className="flex items-start">
                  <Zap className="h-5 w-5 text-purple-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Specialty shops</span>
                </li>
                <li className="flex items-start">
                  <Zap className="h-5 w-5 text-purple-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Any custom workflow</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-primary-50 rounded-2xl p-8 text-center"
        >
          <Zap className="h-12 w-12 text-primary-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Everything You Need. Nothing You Don't.</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Stop paying for features you'll never use. We build exactly what your business needs - from inventory management
            to customer loyalty programs, payment processing to staff scheduling. Your perfect POS, nothing more, nothing less.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <span className="px-4 py-2 bg-white rounded-lg shadow-sm text-sm font-medium">Inventory Tracking</span>
            <span className="px-4 py-2 bg-white rounded-lg shadow-sm text-sm font-medium">Staff Management</span>
            <span className="px-4 py-2 bg-white rounded-lg shadow-sm text-sm font-medium">Customer Loyalty</span>
            <span className="px-4 py-2 bg-white rounded-lg shadow-sm text-sm font-medium">Analytics</span>
            <span className="px-4 py-2 bg-white rounded-lg shadow-sm text-sm font-medium">Multi-location</span>
            <span className="px-4 py-2 bg-white rounded-lg shadow-sm text-sm font-medium">+ Any Feature</span>
          </div>
          <button className="btn-primary">
            Get Your Custom Quote
          </button>
        </motion.div>
      </div>
    </section>
  );
}