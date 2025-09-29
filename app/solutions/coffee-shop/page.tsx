'use client';

import { motion } from 'framer-motion';
import { Coffee, CreditCard, TrendingUp, Clock, Users, Package, Smartphone, BarChart3, CheckCircle, ArrowRight, DollarSign, Zap } from 'lucide-react';
import Link from 'next/link';

export default function CoffeeShopPOS() {
  const features = [
    {
      icon: Coffee,
      title: "Quick Order Management",
      description: "Handle complex coffee orders with ease - size variations, milk alternatives, extra shots, and custom modifications all in one screen"
    },
    {
      icon: Clock,
      title: "Rush Hour Optimization",
      description: "Speed up morning rush with quick-access buttons for popular drinks, one-tap reorders, and queue management"
    },
    {
      icon: Smartphone,
      title: "Mobile Ordering Integration",
      description: "Accept orders from your custom mobile app, reducing wait times and increasing customer satisfaction"
    },
    {
      icon: Users,
      title: "Loyalty Program Built-In",
      description: "Automated punch cards, points system, and birthday rewards to keep customers coming back"
    },
    {
      icon: Package,
      title: "Inventory Tracking",
      description: "Real-time tracking of coffee beans, milk, syrups, and pastries with automated low-stock alerts"
    },
    {
      icon: BarChart3,
      title: "Sales Analytics",
      description: "Track your best-selling drinks, peak hours, and seasonal trends to optimize your menu and staffing"
    }
  ];

  const benefits = [
    "0% credit card processing fees - keep every dollar",
    "30% faster checkout during peak hours",
    "Reduce order errors by 95%",
    "Increase average ticket size by 20% with smart upselling",
    "Cut training time for new baristas in half",
    "Never run out of popular items with smart inventory"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-amber-50 to-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-block mb-4 px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-semibold">
              Custom POS for Coffee Shops & Cafés
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Brew Success with a POS Built for
              <span className="text-amber-600"> Coffee Shops</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              From complex drink customizations to loyalty programs, get a POS system designed specifically for your coffee shop's unique workflow - with 0% processing fees.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#contact" className="btn-primary inline-flex items-center justify-center">
                Get Your Custom Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link href="#features" className="btn-secondary inline-flex items-center justify-center">
                See Coffee Shop Features
                <Coffee className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Value Proposition */}
      <section className="py-16 bg-amber-600 text-white">
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
              <p className="text-amber-100">Save $500-2000/month on credit card fees</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Zap className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">30% Faster Service</h3>
              <p className="text-amber-100">Serve more customers during morning rush</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <TrendingUp className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">20% Revenue Increase</h3>
              <p className="text-amber-100">Smart upselling & loyalty programs that work</p>
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
              Features Designed for Coffee Excellence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every feature is crafted to handle the unique challenges of running a successful coffee shop
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
                <feature.icon className="h-10 w-10 text-amber-600 mb-4" />
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
                Why Coffee Shops Choose Our Custom POS
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
              className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold mb-6">Coffee Shop Success Story</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4">
                  <p className="text-sm text-gray-600 mb-1">Monthly Savings</p>
                  <p className="text-2xl font-bold text-green-600">$1,200+</p>
                  <p className="text-sm text-gray-500">From 0% processing fees</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <p className="text-sm text-gray-600 mb-1">Order Speed Increase</p>
                  <p className="text-2xl font-bold text-blue-600">35%</p>
                  <p className="text-sm text-gray-500">During morning rush</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <p className="text-sm text-gray-600 mb-1">Customer Return Rate</p>
                  <p className="text-2xl font-bold text-purple-600">2.3x</p>
                  <p className="text-sm text-gray-500">With integrated loyalty program</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Specific Coffee Shop Features */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Built for Your Coffee Shop Workflow
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
              <h3 className="text-xl font-bold mb-4">Drink Customization Made Easy</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>One-tap modifiers for size, milk type, shots, and flavors</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Save customer preferences for quick reorders</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Automatic pricing for add-ons and substitutions</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Clear drink labels for barista accuracy</span>
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
              <h3 className="text-xl font-bold mb-4">Smart Business Tools</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Track coffee bean usage and predict reorder dates</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Employee performance metrics and tip distribution</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Seasonal menu management with one-click switching</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Integration with accounting and payroll systems</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-amber-600 to-orange-600 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Brew More Success?
            </h2>
            <p className="text-xl mb-8 text-amber-100 max-w-2xl mx-auto">
              Get a free consultation and see how our custom POS can transform your coffee shop operations while saving you thousands in processing fees.
            </p>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-md mx-auto mb-8">
              <DollarSign className="h-12 w-12 mx-auto mb-3" />
              <p className="text-2xl font-bold mb-2">Save $500-2000/month</p>
              <p className="text-amber-100">With 0% credit card processing fees</p>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-amber-600 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Get Your Free Coffee Shop POS Demo
              <ArrowRight className="ml-3 h-6 w-6" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}