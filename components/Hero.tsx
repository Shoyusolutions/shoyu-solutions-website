'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, DollarSign, Settings, Users } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-primary-50 to-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block mb-4 px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold">
              100% Custom POS - Built Exactly How You Want It
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Your Business, Your POS <br />
              <span className="text-primary-600">The Sky's the Limit</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8">
              We build your POS system exactly how you want it to be. No templates, no limitations - just a perfect solution tailored to your unique business needs.
            </p>

            <div className="space-y-3 mb-8">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-gray-700">No templates or cookie-cutter solutions</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-gray-700">Seamless integration with your existing tools</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-gray-700">Unlimited updates and improvements</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#contact" className="btn-primary inline-flex items-center justify-center">
                Get Your Custom Solution
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="card bg-gradient-to-br from-white to-primary-50">
                <DollarSign className="h-10 w-10 text-primary-600 mb-3" />
                <h3 className="font-bold text-lg mb-2">Truly Custom</h3>
                <p className="text-gray-600 text-sm">Built exactly for your business</p>
              </div>

              <div className="card bg-gradient-to-br from-white to-secondary-50">
                <Settings className="h-10 w-10 text-secondary-600 mb-3" />
                <h3 className="font-bold text-lg mb-2">100% Customizable</h3>
                <p className="text-gray-600 text-sm">Built exactly for your workflow</p>
              </div>

              <div className="card bg-gradient-to-br from-white to-green-50">
                <Users className="h-10 w-10 text-green-600 mb-3" />
                <h3 className="font-bold text-lg mb-2">Local Support</h3>
                <p className="text-gray-600 text-sm">We're here when you need us</p>
              </div>

              <div className="card bg-gradient-to-br from-white to-purple-50">
                <CheckCircle className="h-10 w-10 text-purple-600 mb-3" />
                <h3 className="font-bold text-lg mb-2">0% Processing Fees</h3>
                <p className="text-gray-600 text-sm">Keep 100% of your revenue</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}