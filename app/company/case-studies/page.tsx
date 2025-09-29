'use client';

import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';

export default function CaseStudies() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-white flex items-center">
      <div className="container-custom py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-100 rounded-full mb-8">
            <FileText className="h-10 w-10 text-primary-600" />
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Coming Soon
          </h1>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Case studies are currently being developed and will be available soon.
          </p>
        </motion.div>
      </div>
    </div>
  );
}