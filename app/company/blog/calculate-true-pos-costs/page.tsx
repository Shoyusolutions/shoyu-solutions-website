'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Clock, User, Share2, Calculator, DollarSign, TrendingUp, AlertTriangle, CheckCircle } from 'lucide-react';

export default function CalculateTruePOSCosts() {
  return (
    <article className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary-50 to-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <Link
              href="/company/blog"
              className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-6"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Link>

            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-primary-100 text-primary-600 text-sm rounded-full font-semibold">
                Financial Analysis
              </span>
              <span className="text-gray-500">December 22, 2024</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Calculate Your True POS Costs
            </h1>

            <p className="text-xl text-gray-600 mb-8">
              Uncover the hidden expenses in your payment processing system and discover how much your POS is really costing your business.
            </p>

            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-6 text-sm text-gray-500">
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-1" />
                  Jennifer Walsh
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  8 min read
                </div>
              </div>
              <button className="flex items-center text-gray-500 hover:text-primary-600">
                <Share2 className="h-4 w-4 mr-1" />
                Share
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-3xl mx-auto prose prose-lg"
          >
            <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
              <p className="text-lg font-semibold text-red-900 mb-2">
                The Hidden Truth
              </p>
              <p className="text-red-800">
                Most businesses underestimate their true POS costs by 40-60%. What appears as &quot;just 2.9%&quot;
                on marketing materials often translates to 4-6% in actual costs when all fees are included.
              </p>
            </div>

            <p className="text-gray-700 mb-6">
              Your POS system&apos;s true cost extends far beyond the advertised processing rates. Between hidden fees,
              equipment costs, software subscriptions, and opportunity costs, most businesses are shocked to discover
              what they&apos;re actually paying. This comprehensive guide will help you calculate your real POS expenses
              and identify potential savings.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6 flex items-center">
              <Calculator className="h-6 w-6 mr-2 text-primary-600" />
              The Complete Cost Breakdown
            </h2>

            <p className="text-gray-700 mb-6">
              True POS costs fall into five main categories. Most businesses only focus on the first one,
              missing thousands in annual expenses:
            </p>

            <div className="space-y-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <span className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold mr-3">1</span>
                  Processing Fees
                </h3>
                <p className="text-gray-700 mb-4">
                  The most visible cost, but often not what you actually pay due to interchange plus pricing,
                  non-qualified transactions, and markup variations.
                </p>
                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold mb-2">Common Fee Components:</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Interchange fees: 1.4% - 2.6%</li>
                    <li>• Assessment fees: 0.13% - 0.15%</li>
                    <li>• Processor markup: 0.3% - 1.5%</li>
                    <li>• Non-qualified surcharges: +0.5% - 2.0%</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <span className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold mr-3">2</span>
                  Monthly and Annual Fees
                </h3>
                <p className="text-gray-700 mb-4">
                  These fixed costs add up quickly and are often overlooked in cost calculations.
                </p>
                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold mb-2">Typical Monthly Fees:</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Statement fees: $10 - $25</li>
                    <li>• PCI compliance: $5 - $20</li>
                    <li>• Gateway fees: $15 - $50</li>
                    <li>• Software subscription: $50 - $300</li>
                    <li>• Support and maintenance: $25 - $100</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <span className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold mr-3">3</span>
                  Equipment and Hardware
                </h3>
                <p className="text-gray-700 mb-4">
                  Initial costs and ongoing maintenance that impact your total cost of ownership.
                </p>
                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold mb-2">Equipment Considerations:</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Terminal purchase/lease: $200 - $1,500</li>
                    <li>• Installation and setup: $100 - $500</li>
                    <li>• Replacement and repairs: $50 - $200/year</li>
                    <li>• Upgrade costs: $300 - $800 every 3-5 years</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <span className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold mr-3">4</span>
                  Hidden Transaction Costs
                </h3>
                <p className="text-gray-700 mb-4">
                  Per-transaction fees that aren&apos;t included in your rate but add significant costs.
                </p>
                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold mb-2">Per-Transaction Fees:</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Authorization fees: $0.10 - $0.25</li>
                    <li>• Batch fees: $0.15 - $0.35</li>
                    <li>• AVS/CVV verification: $0.05 - $0.10</li>
                    <li>• Chargeback fees: $15 - $100 each</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <span className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold mr-3">5</span>
                  Opportunity Costs
                </h3>
                <p className="text-gray-700 mb-4">
                  The often-ignored cost of capital tied up in processing fees and lost investment opportunities.
                </p>
                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold mb-2">Hidden Opportunity Costs:</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Cash flow impact from hold periods</li>
                    <li>• Lost investment returns on fee payments</li>
                    <li>• Administrative time managing multiple vendors</li>
                    <li>• Staff training and system complexity costs</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-12 mb-6 flex items-center">
              <DollarSign className="h-6 w-6 mr-2 text-primary-600" />
              Step-by-Step Cost Calculator
            </h2>

            <p className="text-gray-700 mb-6">
              Use this framework to calculate your actual monthly POS costs. Gather your last three months
              of statements for the most accurate picture:
            </p>

            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <h3 className="font-bold mb-4">Monthly Cost Calculation Worksheet:</h3>

              <div className="space-y-4">
                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold mb-3">Step 1: Processing Volume Analysis</h4>
                  <div className="space-y-2 text-sm">
                    <div className="grid grid-cols-2 gap-4">
                      <span>Monthly credit card volume:</span>
                      <span>$_______</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <span>Number of transactions:</span>
                      <span>_______</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <span>Average transaction size:</span>
                      <span>$_______</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold mb-3">Step 2: Processing Fees</h4>
                  <div className="space-y-2 text-sm">
                    <div className="grid grid-cols-2 gap-4">
                      <span>Total processing fees paid:</span>
                      <span>$_______</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <span>Effective rate (fees ÷ volume):</span>
                      <span>_______%</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold mb-3">Step 3: Fixed Monthly Costs</h4>
                  <div className="space-y-2 text-sm">
                    <div className="grid grid-cols-2 gap-4">
                      <span>Statement/monthly fees:</span>
                      <span>$_______</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <span>Software subscriptions:</span>
                      <span>$_______</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <span>Equipment lease/financing:</span>
                      <span>$_______</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <span>Support and maintenance:</span>
                      <span>$_______</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold mb-3">Step 4: Per-Transaction Costs</h4>
                  <div className="space-y-2 text-sm">
                    <div className="grid grid-cols-2 gap-4">
                      <span>Authorization fees:</span>
                      <span>$_______</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <span>Other transaction fees:</span>
                      <span>$_______</span>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-200 p-4 rounded border border-yellow-400">
                  <h4 className="font-bold mb-3">Total Monthly POS Cost:</h4>
                  <div className="grid grid-cols-2 gap-4 font-bold text-lg">
                    <span>TOTAL:</span>
                    <span>$_______</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 font-bold text-lg">
                    <span>Effective Rate on Volume:</span>
                    <span>_______%</span>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-12 mb-6 flex items-center">
              <AlertTriangle className="h-6 w-6 mr-2 text-primary-600" />
              Common Cost Calculation Mistakes
            </h2>

            <p className="text-gray-700 mb-6">
              Avoid these common errors that lead to underestimating your true POS costs:
            </p>

            <div className="space-y-4 mb-8">
              <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                <h4 className="font-bold text-red-800 mb-2">❌ Only looking at advertised rates</h4>
                <p className="text-red-700 text-sm">
                  Marketing rates rarely reflect actual costs due to interchange variations and additional fees.
                </p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                <h4 className="font-bold text-red-800 mb-2">❌ Ignoring per-transaction fees</h4>
                <p className="text-red-700 text-sm">
                  $0.10-$0.30 per transaction adds up quickly—often $100-$500 monthly for busy businesses.
                </p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                <h4 className="font-bold text-red-800 mb-2">❌ Forgetting equipment depreciation</h4>
                <p className="text-red-700 text-sm">
                  Hardware costs should be amortized over their useful life for accurate cost analysis.
                </p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                <h4 className="font-bold text-red-800 mb-2">❌ Not factoring in annual fees</h4>
                <p className="text-red-700 text-sm">
                  PCI compliance, annual software licenses, and renewal fees significantly impact total cost.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-12 mb-6 flex items-center">
              <TrendingUp className="h-6 w-6 mr-2 text-primary-600" />
              Benchmarking Your Costs
            </h2>

            <p className="text-gray-700 mb-6">
              Once you&apos;ve calculated your true costs, compare them to industry benchmarks:
            </p>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="font-bold mb-4">Industry Cost Benchmarks (Total Effective Rate):</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Low-Volume Businesses (&lt;$10K/month)</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Excellent: Under 3.5%</li>
                    <li>• Good: 3.5% - 4.5%</li>
                    <li>• Average: 4.5% - 5.5%</li>
                    <li>• Poor: Over 5.5%</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">High-Volume Businesses (&gt;$50K/month)</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Excellent: Under 2.8%</li>
                    <li>• Good: 2.8% - 3.5%</li>
                    <li>• Average: 3.5% - 4.2%</li>
                    <li>• Poor: Over 4.2%</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-12 mb-6">Immediate Cost Reduction Strategies</h2>

            <p className="text-gray-700 mb-6">
              If your costs are above benchmark, consider these immediate actions:
            </p>

            <div className="space-y-3 mb-8">
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1" />
                <div>
                  <h4 className="font-semibold">Negotiate with your current processor</h4>
                  <p className="text-gray-700 text-sm">Armed with your true cost analysis, you have leverage to negotiate better rates.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1" />
                <div>
                  <h4 className="font-semibold">Eliminate unnecessary fees</h4>
                  <p className="text-gray-700 text-sm">Cancel unused services like statement printing, online reporting upgrades, or premium support.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1" />
                <div>
                  <h4 className="font-semibold">Optimize transaction types</h4>
                  <p className="text-gray-700 text-sm">Ensure you&apos;re getting qualified rates by properly processing transactions.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1" />
                <div>
                  <h4 className="font-semibold">Consider 0% processing solutions</h4>
                  <p className="text-gray-700 text-sm">Eliminate processing costs entirely with compliant cash discount or surcharge programs.</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-12 mb-6">The 0% Processing Alternative</h2>

            <p className="text-gray-700 mb-6">
              What if you could eliminate processing costs entirely? With 0% processing solutions,
              businesses are discovering they can keep 100% of their revenue while still accepting
              credit cards. Instead of absorbing 3-5% in total POS costs, you transfer the processing
              cost to the payment method, giving customers choice and your business immediate savings.
            </p>

            <div className="bg-green-50 p-6 rounded-lg mb-8">
              <h3 className="font-bold mb-4">Real Savings Example:</h3>
              <div className="space-y-2">
                <div className="grid grid-cols-2 gap-4">
                  <span>Monthly credit card volume:</span>
                  <span className="font-semibold">$45,000</span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <span>Current total POS costs (4.2%):</span>
                  <span className="font-semibold text-red-600">$1,890/month</span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <span>With 0% processing:</span>
                  <span className="font-semibold text-green-600">$0/month</span>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-2 border-t">
                  <span className="font-bold">Annual savings:</span>
                  <span className="font-bold text-green-600 text-lg">$22,680</span>
                </div>
              </div>
            </div>

            <p className="text-gray-700 mb-8">
              Don&apos;t let hidden costs continue draining your profits. Take control of your POS expenses
              and discover how much you could save with transparent, modern payment solutions.
            </p>

            <div className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white p-8 rounded-xl text-center mt-12">
              <h3 className="text-2xl font-bold mb-4">
                Get Your Personalized Cost Analysis
              </h3>
              <p className="text-lg mb-6 text-primary-100">
                Let us calculate your exact savings potential with 0% processing
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Request Free Cost Analysis
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </article>
  );
}