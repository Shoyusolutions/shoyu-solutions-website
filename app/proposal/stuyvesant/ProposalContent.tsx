'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  CreditCard,
  DollarSign,
  Package,
  Monitor,
  TrendingUp,
  Shield,
  CheckCircle,
  Calculator,
  Banknote,
  FileText,
  Users,
  Zap,
  X
} from 'lucide-react';

export default function ProposalContent() {
  const [showCalculator, setShowCalculator] = useState(false);
  const [transactionAmount, setTransactionAmount] = useState('100');

  const calculateFees = (amount: number) => {
    const customerPays = amount * 1.04; // 4% surcharge
    const processorFee = (amount * 0.0299) + 0.30; // 2.99% + $0.30
    const totalRevenue = customerPays - amount; // Total surcharge collected
    const netRevenue = totalRevenue - processorFee; // After processor fees
    const yourShare = netRevenue * 0.5; // 50/50 split
    const posFeePer = 0.02; // $0.02 per transaction

    return {
      originalAmount: amount,
      customerPays: customerPays,
      surcharge: totalRevenue,
      processorFee: processorFee,
      netRevenue: netRevenue,
      yourShare: yourShare - posFeePer,
      ourShare: yourShare,
      posFee: posFeePer
    };
  };

  const fees = calculateFees(Number(transactionAmount) || 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Custom POS Proposal</h1>
              <p className="text-gray-600 mt-1">Exclusively for Stuyvesant Gourmet Deli</p>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-primary-600" />
              <span className="font-bold text-xl">Shoyu Solutions</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Executive Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-2xl p-8 mb-12"
        >
          <h2 className="text-2xl font-bold mb-4">Your Path to Higher Profits</h2>
          <p className="text-lg mb-6 text-primary-100">
            Transform your payment processing from a cost center into a profit center.
            With our custom POS solution, you&apos;ll earn money on every credit card transaction
            while providing a seamless checkout experience.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur rounded-lg p-4">
              <DollarSign className="h-8 w-8 mb-2" />
              <div className="text-2xl font-bold">1%</div>
              <div className="text-sm text-primary-100">Revenue Share per Transaction</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-4">
              <CreditCard className="h-8 w-8 mb-2" />
              <div className="text-2xl font-bold">$0.02</div>
              <div className="text-sm text-primary-100">Only Cost Per Transaction</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-4">
              <X className="h-8 w-8 mb-2" />
              <div className="text-2xl font-bold">No Contract</div>
              <div className="text-sm text-primary-100">Cancel Anytime</div>
            </div>
          </div>
        </motion.div>

        {/* What We Provide */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-8"
        >
          <h2 className="text-2xl font-bold mb-6 text-gray-900">What&apos;s Included</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-4">
              <div className="bg-green-100 p-3 rounded-full">
                <Monitor className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Complete POS Hardware</h3>
                <p className="text-gray-600">Professional-grade POS system with touchscreen,
                receipt printer, and card reader - all provided at no upfront cost.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <Package className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Full Inventory Management</h3>
                <p className="text-gray-600">We&apos;ll add your entire inventory to the system,
                making checkout fast and inventory tracking automatic.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-purple-100 p-3 rounded-full">
                <TrendingUp className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Online Dashboard</h3>
                <p className="text-gray-600">Real-time analytics, sales reports, and revenue
                tracking accessible from anywhere, anytime.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-yellow-100 p-3 rounded-full">
                <Banknote className="h-6 w-6 text-yellow-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Direct Bank Deposits</h3>
                <p className="text-gray-600">Daily automatic deposits straight to your bank account.
                No waiting, no hassles.</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Revenue Model */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-8"
        >
          <h2 className="text-2xl font-bold mb-6 text-gray-900">How You Make Money</h2>

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 mb-6">
            <h3 className="font-semibold text-gray-900 mb-4">The Revenue Share Model</h3>
            <div className="space-y-3 text-gray-700">
              <div className="flex items-center justify-between py-2 border-b border-green-200">
                <span>Customer surcharge for credit cards:</span>
                <span className="font-semibold">4%</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-green-200">
                <span>Processor fee (what we pay):</span>
                <span className="font-semibold">2.99% + $0.30</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-green-200">
                <span>Net revenue after processor fees:</span>
                <span className="font-semibold">~1%</span>
              </div>
              <div className="flex items-center justify-between py-2 bg-green-100 -mx-3 px-3 rounded">
                <span className="font-semibold">Your share (50/50 split):</span>
                <span className="font-bold text-green-600">~0.5% per transaction</span>
              </div>
            </div>
          </div>

          {/* Interactive Calculator */}
          <div className="border-2 border-primary-200 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-900">Revenue Calculator</h3>
              <button
                onClick={() => setShowCalculator(!showCalculator)}
                className="text-primary-600 hover:text-primary-700 flex items-center gap-2"
              >
                <Calculator className="h-5 w-5" />
                {showCalculator ? 'Hide' : 'Show'} Calculator
              </button>
            </div>

            {showCalculator && (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Transaction Amount ($)
                  </label>
                  <input
                    type="number"
                    value={transactionAmount}
                    onChange={(e) => setTransactionAmount(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Enter amount"
                  />
                </div>

                <div className="bg-gray-50 rounded-lg p-4 space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Original Amount:</span>
                    <span className="font-medium">${fees.originalAmount.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Customer Pays (4% surcharge):</span>
                    <span className="font-medium">${fees.customerPays.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total Surcharge Collected:</span>
                    <span className="font-medium text-green-600">+${fees.surcharge.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Processor Fee (2.99% + $0.30):</span>
                    <span className="font-medium text-red-600">-${fees.processorFee.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">POS Fee ($0.02/transaction):</span>
                    <span className="font-medium text-red-600">-${fees.posFee.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-gray-200">
                    <span className="font-semibold text-gray-900">Your Profit (50% share):</span>
                    <span className="font-bold text-green-600">${fees.yourShare.toFixed(2)}</span>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-4">
                  <p className="text-sm text-blue-900">
                    <strong>Example:</strong> If you process $10,000 in credit cards daily,
                    you could earn approximately <strong>$50/day</strong> or <strong>$1,500/month</strong> in
                    additional revenue!
                  </p>
                </div>
              </div>
            )}
          </div>
        </motion.div>

        {/* Terms */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-8"
        >
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Simple, Transparent Terms</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-gray-900">No Contracts</h3>
                <p className="text-gray-600">Month-to-month service. If you&apos;re not happy,
                cancel anytime with no penalties or fees.</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-gray-900">No Hidden Fees</h3>
                <p className="text-gray-600">Just $0.02 per transaction. That&apos;s it.
                No monthly fees, no setup fees, no surprises.</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-gray-900">Full Transparency</h3>
                <p className="text-gray-600">See every transaction, fee, and your earnings
                in real-time on your dashboard.</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-gray-900">24/7 Support</h3>
                <p className="text-gray-600">Direct access to our support team whenever
                you need help or have questions.</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Why This Works */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 mb-8"
        >
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Why This is a Win-Win</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                <Users className="h-5 w-5 mr-2 text-blue-600" />
                For Your Customers
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Faster checkout with professional POS
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Clear pricing - they see exactly what they pay
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  All major credit cards accepted
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                <TrendingUp className="h-5 w-5 mr-2 text-green-600" />
                For Your Business
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  Turn processing fees into profit
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  Professional POS at no upfront cost
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  Automated inventory management
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-2xl p-8 text-center"
        >
          <Zap className="h-12 w-12 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-4">Ready to Increase Your Profits?</h2>
          <p className="text-lg mb-6 text-primary-100">
            Let&apos;s get your custom POS system set up and start earning on every transaction.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:frank@shoyusolutions.io?subject=Stuyvesant%20POS%20Proposal"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary-700 font-semibold rounded-lg hover:bg-primary-50 transition-colors"
            >
              <Mail className="h-5 w-5 mr-2" />
              Email: frank@shoyusolutions.io
            </a>
            <button className="inline-flex items-center justify-center px-6 py-3 bg-primary-800 text-white font-semibold rounded-lg hover:bg-primary-900 transition-colors">
              <FileText className="h-5 w-5 mr-2" />
              Download PDF Proposal
            </button>
          </div>
        </motion.div>

        {/* Footer Note */}
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>This proposal is exclusively prepared for Stuyvesant Gourmet Deli</p>
          <p>Valid for 30 days from presentation date</p>
        </div>
      </div>
    </div>
  );
}

function Mail({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}