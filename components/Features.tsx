'use client';

import { motion } from 'framer-motion';
import {
  ShoppingCart,
  Receipt,
  BarChart3,
  Users,
  CreditCard,
  Package,
  Smartphone,
  Shield,
  Zap,
  Truck,
  Settings,
  Palette
} from 'lucide-react';

const features = [
  {
    icon: Truck,
    title: 'All Delivery Platforms',
    description: 'DoorDash, Uber Eats, Grubhub - all integrated into one system. No more juggling tablets.',
    highlight: true
  },
  {
    icon: Palette,
    title: '100% Customizable',
    description: 'Your POS, your way. We build exactly what you need, nothing generic.',
    highlight: true
  },
  {
    icon: Settings,
    title: 'Any Feature You Want',
    description: 'The sky\'s the limit. If you can imagine it, we can build it into your POS.',
    highlight: true
  },
  {
    icon: ShoppingCart,
    title: 'Smart Inventory',
    description: 'Track stock, manage suppliers, get alerts - all customized to your products.'
  },
  {
    icon: Receipt,
    title: 'Lightning Fast Checkout',
    description: 'Process orders in seconds with workflows designed specifically for your business.'
  },
  {
    icon: BarChart3,
    title: 'Custom Reports',
    description: 'Get the exact data you need, formatted how you want it, when you need it.'
  },
  {
    icon: Users,
    title: 'Customer Management',
    description: 'Loyalty programs, order history, preferences - tailored to your customer base.'
  },
  {
    icon: CreditCard,
    title: 'All Payment Types',
    description: 'Credit cards, cash, mobile payments, gift cards - whatever your customers use.'
  },
  {
    icon: Package,
    title: 'Multi-Channel Orders',
    description: 'Dine-in, takeout, delivery, catering - all managed from one unified system.'
  },
  {
    icon: Smartphone,
    title: 'Works Anywhere',
    description: 'Desktop, tablet, phone - manage your business from any device, anywhere.'
  },
  {
    icon: Shield,
    title: 'Secure & Reliable',
    description: 'Bank-level security, automatic backups, and 99.9% uptime guaranteed.'
  },
  {
    icon: Zap,
    title: 'Built for Speed',
    description: 'No lag, no crashes, no waiting. Fast and reliable when you need it most.'
  }
];

export default function Features() {
  return (
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
            Your Business. Your Features. Your Way.
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We don't give you a template POS. We build exactly what YOUR business needs.
            Every feature is custom-designed for how you actually work.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`card hover:scale-105 transition-transform duration-300 ${
                feature.highlight ? 'border-2 border-primary-500 bg-gradient-to-br from-white to-primary-50' : ''
              }`}
            >
              <feature.icon className={`h-12 w-12 mb-4 ${
                feature.highlight ? 'text-primary-600' : 'text-primary-600'
              }`} />
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}