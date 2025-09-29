'use client';

import { motion } from 'framer-motion';
import { ShoppingBag, CreditCard, Package, BarChart3, Users, TrendingUp, Smartphone, Tag, CheckCircle, ArrowRight, DollarSign, Truck } from 'lucide-react';
import Link from 'next/link';

export default function RetailPOS() {
  const features = [
    {
      icon: Package,
      title: "Advanced Inventory Management",
      description: "Real-time stock tracking across multiple locations, automatic reorder points, and vendor management all in one system"
    },
    {
      icon: Tag,
      title: "Flexible Pricing & Promotions",
      description: "Create complex discount rules, BOGO offers, seasonal sales, and customer-specific pricing with ease"
    },
    {
      icon: Users,
      title: "Customer Relationship Management",
      description: "Build customer profiles, track purchase history, and create targeted marketing campaigns"
    },
    {
      icon: BarChart3,
      title: "Comprehensive Analytics",
      description: "Track sales trends, identify best sellers, monitor employee performance, and optimize your product mix"
    },
    {
      icon: Smartphone,
      title: "Omnichannel Integration",
      description: "Seamlessly connect your physical store with online sales, managing all channels from one dashboard"
    },
    {
      icon: Truck,
      title: "Supplier Management",
      description: "Track vendor performance, manage purchase orders, and optimize your supply chain"
    }
  ];

  const benefits = [
    "0% credit card processing fees - save thousands monthly",
    "Reduce checkout time by 40%",
    "Eliminate inventory discrepancies by 90%",
    "Increase average transaction value by 25%",
    "Cut staff training time by 60%",
    "Boost customer retention by 35% with built-in loyalty"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-block mb-4 px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
              Custom POS for Retail Stores
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Retail POS That Grows
              <span className="text-blue-600"> With Your Business</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              From boutiques to multi-location chains, get a POS system tailored to your retail operation with advanced inventory management and 0% processing fees.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#contact" className="btn-primary inline-flex items-center justify-center">
                Get Your Custom Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link href="#features" className="btn-secondary inline-flex items-center justify-center">
                Explore Retail Features
                <ShoppingBag className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Value Proposition */}
      <section className="py-16 bg-blue-600 text-white">
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
              <p className="text-blue-100">Save $1000-5000/month on transactions</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Package className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Smart Inventory</h3>
              <p className="text-blue-100">Never run out of best sellers again</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <TrendingUp className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">25% Sales Growth</h3>
              <p className="text-blue-100">Average increase in first year</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to Run Your Retail Business
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Powerful features designed specifically for modern retail operations
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
                className="bg-white rounded-xl shadow-sm p-6 hover:shadow-lg transition-shadow"
              >
                <feature.icon className="h-10 w-10 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                Why Retailers Choose Our Custom POS
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
              className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold mb-6">Retail Success Metrics</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4">
                  <p className="text-sm text-gray-600 mb-1">Monthly Fee Savings</p>
                  <p className="text-2xl font-bold text-green-600">$2,500+</p>
                  <p className="text-sm text-gray-500">0% processing on all cards</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <p className="text-sm text-gray-600 mb-1">Inventory Accuracy</p>
                  <p className="text-2xl font-bold text-blue-600">99.5%</p>
                  <p className="text-sm text-gray-500">Real-time stock tracking</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <p className="text-sm text-gray-600 mb-1">Transaction Speed</p>
                  <p className="text-2xl font-bold text-purple-600">40% Faster</p>
                  <p className="text-sm text-gray-500">Streamlined checkout process</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Specific Retail Features */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Designed for Modern Retail
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
              <h3 className="text-xl font-bold mb-4">Inventory Excellence</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Barcode scanning and label printing</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Size, color, and style matrix management</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Automatic low-stock alerts and reordering</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Transfer stock between locations easily</span>
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
              <h3 className="text-xl font-bold mb-4">Sales Optimization</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Smart product recommendations at checkout</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Gift card and store credit management</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Layaway and special order tracking</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Returns and exchange automation</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Transform Your Retail Business Today
            </h2>
            <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
              Join hundreds of retailers saving thousands monthly with our custom POS solution and 0% processing fees.
            </p>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-md mx-auto mb-8">
              <DollarSign className="h-12 w-12 mx-auto mb-3" />
              <p className="text-2xl font-bold mb-2">Save $1,000-5,000/month</p>
              <p className="text-blue-100">Eliminate all credit card processing fees</p>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Get Your Free Retail POS Demo
              <ArrowRight className="ml-3 h-6 w-6" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}