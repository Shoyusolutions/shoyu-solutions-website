'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Zap, Palette } from 'lucide-react';
import Link from 'next/link';

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-white"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready for a POS That&apos;s Actually Yours?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            No templates. No limits. Just a perfect POS system built exactly how you want it.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center bg-white text-primary-600 font-semibold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-200 shadow-xl"
            >
              <Sparkles className="mr-2 h-5 w-5" />
              Start Your Custom POS
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div>
              <Zap className="h-8 w-8 mx-auto mb-2 text-yellow-300" />
              <div className="text-2xl font-bold mb-1">100%</div>
              <div className="text-sm opacity-75">Custom Built</div>
            </div>
            <div>
              <Palette className="h-8 w-8 mx-auto mb-2 text-yellow-300" />
              <div className="text-2xl font-bold mb-1">All</div>
              <div className="text-sm opacity-75">Delivery Platforms</div>
            </div>
            <div>
              <Sparkles className="h-8 w-8 mx-auto mb-2 text-yellow-300" />
              <div className="text-2xl font-bold mb-1">Any</div>
              <div className="text-sm opacity-75">Business Type</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}