'use client';

import { motion } from 'framer-motion';
import { Smartphone, CreditCard, MapPin, Truck, Calendar, Package, Signal, Battery, CheckCircle, ArrowRight, DollarSign, Zap } from 'lucide-react';
import Link from 'next/link';

export default function MobilePOS() {
  const features = [
    {
      icon: Smartphone,
      title: "True Mobile Freedom",
      description: "Process payments anywhere - farmers markets, food trucks, trade shows, or customer locations"
    },
    {
      icon: Signal,
      title: "Offline Mode",
      description: "Continue selling even without internet connection, with automatic sync when reconnected"
    },
    {
      icon: MapPin,
      title: "Location Tracking",
      description: "Track sales by location, manage territories, and optimize routes for mobile teams"
    },
    {
      icon: Package,
      title: "Mobile Inventory",
      description: "Real-time stock tracking across multiple vehicles or sales reps with instant updates"
    },
    {
      icon: Battery,
      title: "All-Day Battery",
      description: "Optimized for mobile devices with extended battery life for full-day operations"
    },
    {
      icon: Truck,
      title: "Delivery Management",
      description: "Route planning, proof of delivery, signature capture, and customer notifications"
    }
  ];

  const benefits = [
    "0% credit card processing fees anywhere you sell",
    "Accept payments 3x faster than traditional mobile systems",
    "Increase sales by 40% with pop-up capabilities",
    "Never miss a sale with offline mode",
    "Reduce checkout time by 60%",
    "Track inventory across all mobile units in real-time"
  ];

  const mobileBusinessTypes = [
    "Food Trucks",
    "Farmers Markets",
    "Pop-up Shops",
    "Trade Shows",
    "Home Services",
    "Delivery Services",
    "Event Vendors",
    "Mobile Retail"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-green-50 to-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-block mb-4 px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-semibold">
              Custom Mobile POS Solutions
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Take Your Business
              <span className="text-green-600"> Anywhere</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Powerful mobile POS system designed for businesses on the move - with offline mode, route management, and 0% processing fees everywhere you go.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#contact" className="btn-primary inline-flex items-center justify-center">
                Get Your Mobile Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link href="#features" className="btn-secondary inline-flex items-center justify-center">
                See Mobile Features
                <Smartphone className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Value Proposition */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <CreditCard className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">0% Processing Fees</h3>
              <p className="text-green-100">Save money on every mobile sale</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Zap className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">3x Faster Checkout</h3>
              <p className="text-green-100">Serve more customers anywhere</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Signal className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Works Offline</h3>
              <p className="text-green-100">Never lose a sale to bad signal</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mobile Business Types */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Perfect for Mobile Businesses
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {mobileBusinessTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-all hover:scale-105"
              >
                <Truck className="h-8 w-8 text-green-600 mx-auto mb-3" />
                <span className="text-gray-700 font-medium">{type}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Mobile POS Features That Move With You
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to run your business from anywhere
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <feature.icon className="h-10 w-10 text-green-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                Why Mobile Businesses Choose Our POS
              </h2>

              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start"
                  >
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-lg text-gray-700">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold mb-6">Mobile Business Success</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4">
                  <p className="text-sm text-gray-600 mb-1">Monthly Savings</p>
                  <p className="text-2xl font-bold text-green-600">$800+</p>
                  <p className="text-sm text-gray-500">From 0% processing fees</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <p className="text-sm text-gray-600 mb-1">Sales Increase</p>
                  <p className="text-2xl font-bold text-blue-600">40%</p>
                  <p className="text-sm text-gray-500">With mobile capabilities</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <p className="text-sm text-gray-600 mb-1">Transaction Speed</p>
                  <p className="text-2xl font-bold text-purple-600">60% Faster</p>
                  <p className="text-sm text-gray-500">Quick mobile checkout</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Specific Mobile Features */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Designed for Life on the Road
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-sm"
            >
              <h3 className="text-xl font-bold mb-4">Mobile Operations</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Accept all payment types anywhere</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Print or email receipts instantly</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Barcode scanning on mobile devices</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Cash drawer integration optional</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-sm"
            >
              <h3 className="text-xl font-bold mb-4">Fleet Management</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Track multiple trucks/locations</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Transfer inventory between units</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Consolidated reporting dashboard</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Real-time sales monitoring</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-sm md:col-span-2"
            >
              <h3 className="text-xl font-bold mb-4">Mobile-First Features</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>GPS location tracking for sales</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Weather-based demand forecasting</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Event calendar integration</span>
                  </li>
                </ul>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Customer data capture tools</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Social media integration</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Quick setup/breakdown mode</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Take Your Business Mobile Today
            </h2>
            <p className="text-xl mb-8 text-green-100 max-w-2xl mx-auto">
              Get a mobile POS system that goes anywhere you do - with offline mode and 0% processing fees.
            </p>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-md mx-auto mb-8">
              <DollarSign className="h-12 w-12 mx-auto mb-3" />
              <p className="text-2xl font-bold mb-2">Save $800+/month</p>
              <p className="text-green-100">With 0% mobile processing fees</p>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-green-600 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Get Your Free Mobile POS Demo
              <ArrowRight className="ml-3 h-6 w-6" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}