'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Clock, User, Share2, DollarSign, TrendingDown, Calculator } from 'lucide-react';

export default function HiddenCostProcessingFees() {
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
                Industry Insights
              </span>
              <span className="text-gray-500">December 15, 2024</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              The Hidden Cost of Credit Card Processing Fees
            </h1>

            <p className="text-xl text-gray-600 mb-8">
              Discover how processing fees are eating into your profits and what you can do about it.
              Most businesses don't realize they're losing 2-4% of every transaction.
            </p>

            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-6 text-sm text-gray-500">
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-1" />
                  Michael Chen
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  5 min read
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
            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 mb-8">
              <p className="text-lg font-semibold text-amber-900 mb-2">
                Key Insight
              </p>
              <p className="text-amber-800">
                The average business loses $18,000-$36,000 annually to credit card processing fees.
                That's money that could be reinvested in growth, employees, or your bottom line.
              </p>
            </div>

            <h2 className="text-2xl font-bold mt-12 mb-6">The Real Impact on Your Business</h2>

            <p className="text-gray-700 mb-6">
              When you accept a credit card payment, you're immediately losing 2-4% of that sale.
              It might not sound like much, but let's put this into perspective. If your business
              processes $50,000 per month in credit card transactions, you're paying between
              $1,000 and $2,000 monthly in fees alone.
            </p>

            <p className="text-gray-700 mb-6">
              Over a year, that's $12,000 to $24,000 disappearing from your revenue. For many
              small businesses, that's the difference between hiring a new employee, upgrading
              equipment, or simply staying afloat during slow seasons.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6">Breaking Down the Fee Structure</h2>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="font-bold mb-4 flex items-center">
                <Calculator className="h-5 w-5 mr-2 text-primary-600" />
                Common Processing Fee Components
              </h3>
              <ul className="space-y-3">
                <li className="flex justify-between">
                  <span>Interchange Fees:</span>
                  <span className="font-semibold">1.5% - 2.5%</span>
                </li>
                <li className="flex justify-between">
                  <span>Assessment Fees:</span>
                  <span className="font-semibold">0.13% - 0.15%</span>
                </li>
                <li className="flex justify-between">
                  <span>Processor Markup:</span>
                  <span className="font-semibold">0.5% - 1.5%</span>
                </li>
                <li className="flex justify-between">
                  <span>Monthly Fees:</span>
                  <span className="font-semibold">$25 - $100</span>
                </li>
                <li className="flex justify-between border-t pt-3">
                  <span className="font-bold">Total Impact:</span>
                  <span className="font-bold text-red-600">2.13% - 4.15% + monthly fees</span>
                </li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold mt-12 mb-6">The Compound Effect</h2>

            <p className="text-gray-700 mb-6">
              What makes these fees particularly devastating is their compound nature. Not only
              are you losing money on every transaction, but you're also losing the opportunity
              to reinvest that capital into your business. Consider what $18,000 annually could do:
            </p>

            <ul className="list-disc pl-6 mb-8 space-y-2 text-gray-700">
              <li>Fund a comprehensive marketing campaign to attract new customers</li>
              <li>Upgrade your equipment or technology infrastructure</li>
              <li>Provide bonuses or raises to retain valuable employees</li>
              <li>Build a financial cushion for unexpected expenses</li>
              <li>Expand your inventory or service offerings</li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-6">Hidden Fees You Might Not Know About</h2>

            <p className="text-gray-700 mb-6">
              Beyond the standard processing rates, many businesses are hit with additional fees
              they don't even realize they're paying:
            </p>

            <div className="bg-red-50 p-6 rounded-lg mb-8">
              <h3 className="font-bold mb-4 flex items-center">
                <TrendingDown className="h-5 w-5 mr-2 text-red-600" />
                Often Overlooked Fees
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• PCI compliance fees: $5-$20/month</li>
                <li>• Statement fees: $10-$15/month</li>
                <li>• Gateway fees: $25-$50/month</li>
                <li>• Chargeback fees: $15-$100 per incident</li>
                <li>• Batch fees: $0.10-$0.25 per batch</li>
                <li>• Non-qualified surcharges: Additional 0.5-1.5%</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold mt-12 mb-6">The Solution: 0% Processing</h2>

            <p className="text-gray-700 mb-6">
              Imagine keeping 100% of your revenue. With 0% processing fee solutions, this isn't
              just a dream—it's a reality that's already helping thousands of businesses thrive.
              By implementing a compliant cash discount program or surcharge system, you can
              completely eliminate processing fees while still accepting credit cards.
            </p>

            <p className="text-gray-700 mb-6">
              Here's how it works: Instead of you absorbing the processing fees, customers who
              choose to pay with credit cards cover the cost. Those paying with cash receive
              a discount. It's transparent, legal in all 50 states when done correctly, and
              customers appreciate the choice.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6">Real-World Success Stories</h2>

            <div className="bg-green-50 p-6 rounded-lg mb-8">
              <h3 className="font-bold mb-4 flex items-center">
                <DollarSign className="h-5 w-5 mr-2 text-green-600" />
                Actual Business Results
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold">Downtown Coffee Shop</p>
                  <p className="text-gray-700">Saved $1,500/month, invested in new espresso machine</p>
                </div>
                <div>
                  <p className="font-semibold">Family Restaurant</p>
                  <p className="text-gray-700">Saved $2,800/month, hired two additional staff members</p>
                </div>
                <div>
                  <p className="font-semibold">Retail Boutique</p>
                  <p className="text-gray-700">Saved $3,200/month, expanded to second location</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-12 mb-6">Take Action Today</h2>

            <p className="text-gray-700 mb-6">
              Every day you wait is money lost. The average business that switches to 0%
              processing sees immediate results—literally from their next transaction. There's
              no complex integration, no disruption to your operations, and your customers
              will barely notice the difference.
            </p>

            <p className="text-gray-700 mb-8">
              Don't let processing fees continue to drain your profits. Take control of your
              revenue and join the thousands of businesses already benefiting from 0% processing
              solutions.
            </p>

            <div className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white p-8 rounded-xl text-center mt-12">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Eliminate Processing Fees?
              </h3>
              <p className="text-lg mb-6 text-primary-100">
                Calculate how much you could save with 0% processing
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Your Free Savings Analysis
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </article>
  );
}