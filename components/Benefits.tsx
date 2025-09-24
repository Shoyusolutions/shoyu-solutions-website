'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, X } from 'lucide-react';

const comparisonData = [
  { feature: 'Credit Card Fees', us: '0% processing fees', them: '2.6% + 30¢ per transaction' },
  { feature: 'Hidden Fees', us: 'None - transparent pricing', them: 'Setup, statement, PCI fees' },
  { feature: 'Customization', us: '100% tailored to you', them: 'Generic templates' },
  { feature: 'Delivery Integration', us: 'ALL platforms included', them: 'Limited or extra cost' },
  { feature: 'Contract Lock-in', us: 'No contracts ever', them: '1-3 year contracts' },
  { feature: 'Support', us: 'Dedicated team', them: 'Call centers' }
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Businesses Choose <span className="text-primary-600">CustomPOS</span>
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-2">0% Credit Card Processing</h3>
                <p className="text-gray-600">
                  Keep 100% of your revenue. We don't take a cut of your credit card transactions - ever.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2">Built Exactly for Your Business</h3>
                <p className="text-gray-600">
                  Not a template. Not a one-size-fits-all solution. Your POS is custom-built to match exactly how you work.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2">No Hidden Fees, No Contracts</h3>
                <p className="text-gray-600">
                  Transparent pricing with no surprises. No contracts means you're never locked in. Stay because you love it, not because you have to.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2">All Delivery Platforms Integrated</h3>
                <p className="text-gray-600">
                  DoorDash, Uber Eats, Grubhub, and more - all integrated into one system at no extra cost.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary-50 to-white rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold mb-6 text-center">The CustomPOS Advantage</h3>
            <div className="space-y-4">
              {comparisonData.map((item, index) => (
                <div key={index} className="grid grid-cols-3 gap-4 items-center py-3 border-b border-gray-200">
                  <div className="font-semibold text-gray-700">{item.feature}</div>
                  <div className="flex items-center text-green-600">
                    <CheckCircle2 className="h-5 w-5 mr-2 flex-shrink-0" />
                    <span className="font-medium text-sm">{item.us}</span>
                  </div>
                  <div className="flex items-center text-red-500">
                    <X className="h-5 w-5 mr-2 flex-shrink-0" />
                    <span className="text-xs">{item.them}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}