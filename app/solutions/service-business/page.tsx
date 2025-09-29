'use client';

import { motion } from 'framer-motion';
import { Briefcase, CreditCard, Calendar, Users, FileText, Clock, Smartphone, BarChart3, CheckCircle, ArrowRight, DollarSign, Shield } from 'lucide-react';
import Link from 'next/link';

export default function ServiceBusinessPOS() {
  const features = [
    {
      icon: Calendar,
      title: "Appointment Scheduling",
      description: "Online booking, automated reminders, recurring appointments, and staff calendar management"
    },
    {
      icon: FileText,
      title: "Invoice & Estimate Management",
      description: "Create professional quotes, convert to invoices, track payments, and manage contracts"
    },
    {
      icon: Users,
      title: "Customer Database",
      description: "Detailed service history, preferences, contact info, and automated follow-up reminders"
    },
    {
      icon: Clock,
      title: "Time Tracking",
      description: "Track billable hours, manage projects, monitor employee productivity, and generate timesheets"
    },
    {
      icon: Smartphone,
      title: "Mobile Service Management",
      description: "Process payments on-site, access customer data, create invoices, and manage routes"
    },
    {
      icon: BarChart3,
      title: "Service Analytics",
      description: "Track job profitability, employee performance, customer lifetime value, and growth trends"
    }
  ];

  const benefits = [
    "0% credit card processing fees on all transactions",
    "Get paid 50% faster with automated invoicing",
    "Reduce no-shows by 75% with automated reminders",
    "Increase revenue by 30% with efficient scheduling",
    "Cut administrative time by 60%",
    "Improve customer retention by 40%"
  ];

  const serviceTypes = [
    "Salons & Spas",
    "Auto Repair",
    "Home Services",
    "Medical & Dental",
    "Fitness & Wellness",
    "Professional Services",
    "Cleaning Services",
    "Pet Grooming",
    "Repair & Maintenance",
    "Consulting"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-purple-50 to-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-block mb-4 px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-semibold">
              Custom POS for Service Businesses
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Service Business POS That
              <span className="text-purple-600"> Works As Hard As You Do</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              From appointments to invoicing, get a complete business management system tailored to your service industry - with 0% processing fees on every transaction.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#contact" className="btn-primary inline-flex items-center justify-center">
                Get Your Custom Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link href="#features" className="btn-secondary inline-flex items-center justify-center">
                Explore Service Features
                <Briefcase className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Value Proposition */}
      <section className="py-16 bg-purple-600 text-white">
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
              <p className="text-purple-100">Save $500-3000/month on fees</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Clock className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">50% Faster Payments</h3>
              <p className="text-purple-100">Automated invoicing & reminders</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Shield className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">75% Less No-Shows</h3>
              <p className="text-purple-100">Smart appointment reminders</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Types Section */}
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
              Perfect for Any Service Business
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {serviceTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow"
              >
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
              Everything You Need to Run Your Service Business
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete business management tools designed for service professionals
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
                <feature.icon className="h-10 w-10 text-purple-600 mb-4" />
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
                Why Service Businesses Choose Our Custom POS
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
              className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold mb-6">Service Business Impact</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4">
                  <p className="text-sm text-gray-600 mb-1">Monthly Savings</p>
                  <p className="text-2xl font-bold text-green-600">$1,500+</p>
                  <p className="text-sm text-gray-500">From 0% processing fees</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <p className="text-sm text-gray-600 mb-1">Cash Flow Improvement</p>
                  <p className="text-2xl font-bold text-blue-600">50%</p>
                  <p className="text-sm text-gray-500">Faster payment collection</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <p className="text-sm text-gray-600 mb-1">Admin Time Saved</p>
                  <p className="text-2xl font-bold text-purple-600">10+ hrs/week</p>
                  <p className="text-sm text-gray-500">Through automation</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Specific Service Features */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tailored for Your Service Workflow
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
              <h3 className="text-xl font-bold mb-4">Scheduling & Dispatch</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Drag-and-drop calendar scheduling</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Route optimization for mobile services</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Real-time technician tracking</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Customer self-scheduling portal</span>
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
              <h3 className="text-xl font-bold mb-4">Billing & Payments</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Recurring billing and subscriptions</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Deposit and payment plan management</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Automated late payment reminders</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Mobile payment processing on-site</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-sm"
            >
              <h3 className="text-xl font-bold mb-4">Customer Management</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Service history and notes</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Before/after photo storage</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Automated review requests</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Loyalty and referral programs</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-sm"
            >
              <h3 className="text-xl font-bold mb-4">Business Intelligence</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Employee performance metrics</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Service profitability analysis</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Customer acquisition costs</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Revenue forecasting</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Streamline Your Service Business?
            </h2>
            <p className="text-xl mb-8 text-purple-100 max-w-2xl mx-auto">
              Get a custom solution that manages appointments, invoicing, and payments - all with 0% processing fees.
            </p>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-md mx-auto mb-8">
              <DollarSign className="h-12 w-12 mx-auto mb-3" />
              <p className="text-2xl font-bold mb-2">Save $500-3,000/month</p>
              <p className="text-purple-100">With 0% credit card processing fees</p>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-purple-600 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Get Your Free Service Business Demo
              <ArrowRight className="ml-3 h-6 w-6" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}