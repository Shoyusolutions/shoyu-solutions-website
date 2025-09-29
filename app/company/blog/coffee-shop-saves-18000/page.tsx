'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Clock, User, Share2, Coffee, DollarSign, TrendingUp, CheckCircle, Star, Users } from 'lucide-react';

export default function CoffeeShopSaves18000() {
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
                Case Study
              </span>
              <span className="text-gray-500">December 25, 2024</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              How a Coffee Shop Saved $18,000 Annually
            </h1>

            <p className="text-xl text-gray-600 mb-8">
              A real-world case study of how Mountain View Coffee implemented 0% processing and transformed
              their business finances in just 30 days.
            </p>

            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-6 text-sm text-gray-500">
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-1" />
                  Marcus Rodriguez
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  9 min read
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
            <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
              <p className="text-lg font-semibold text-green-900 mb-2">
                Success Summary
              </p>
              <p className="text-green-800">
                Mountain View Coffee eliminated $1,500 monthly in processing fees, reinvested savings
                into new equipment and staff bonuses, and improved customer satisfaction—all within 30 days.
              </p>
            </div>

            <h2 className="text-2xl font-bold mt-12 mb-6 flex items-center">
              <Coffee className="h-6 w-6 mr-2 text-primary-600" />
              Meet Mountain View Coffee
            </h2>

            <p className="text-gray-700 mb-6">
              When Sarah Chen opened Mountain View Coffee in downtown Portland three years ago, she had a simple goal:
              create a warm, welcoming space where neighbors could enjoy exceptional coffee. What she didn&apos;t anticipate
              was how credit card processing fees would eat into her already thin margins.
            </p>

            <p className="text-gray-700 mb-6">
              Like many small business owners, Sarah focused on what she knew best—crafting great coffee and building
              community. She accepted the 3.2% processing fees as &quot;just part of doing business.&quot; But as her customer
              base grew and card payments dominated, those fees became a significant burden.
            </p>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="font-bold mb-4">Business Profile Before Implementation:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Basic Stats</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Location: Downtown Portland</li>
                    <li>• Size: 1,200 sq ft, 35 seats</li>
                    <li>• Staff: 8 part-time employees</li>
                    <li>• Hours: 6 AM - 8 PM daily</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Financial Overview</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Monthly revenue: $47,000</li>
                    <li>• Credit card volume: $42,000 (89%)</li>
                    <li>• Monthly processing fees: $1,520</li>
                    <li>• Average transaction: $8.50</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-12 mb-6">The Tipping Point</h2>

            <p className="text-gray-700 mb-6">
              The wake-up call came during Sarah&apos;s quarterly financial review. Her accountant pointed out that
              processing fees had become her third-largest expense after rent and payroll. At $1,520 per month,
              she was paying more in card fees than her monthly insurance, utilities, and marketing combined.
            </p>

            <blockquote className="border-l-4 border-primary-500 pl-6 italic text-lg text-gray-800 my-8">
              &quot;I was literally working two full days every month just to pay credit card fees. That&apos;s when I realized
              I needed to do something about it.&quot;
              <footer className="text-sm text-gray-600 mt-2">— Sarah Chen, Owner</footer>
            </blockquote>

            <p className="text-gray-700 mb-6">
              Sarah&apos;s research led her to 0% processing solutions. Initially skeptical, she worried about customer
              reaction and implementation complexity. However, after seeing successful implementations at other
              local businesses, she decided to move forward.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6">The Implementation Process</h2>

            <p className="text-gray-700 mb-6">
              Working with Shoyu Solutions, Mountain View Coffee implemented a cash discount program over a weekend.
              The process was remarkably smooth, with minimal disruption to operations.
            </p>

            <div className="space-y-4 mb-8">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-bold mb-2 flex items-center">
                  <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-2">1</span>
                  Friday: System Integration
                </h4>
                <p className="text-gray-700 text-sm">
                  Shoyu&apos;s technician integrated the cash discount system with Mountain View&apos;s existing POS.
                  The process took 2 hours and required no new hardware.
                </p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-bold mb-2 flex items-center">
                  <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-2">2</span>
                  Saturday: Staff Training
                </h4>
                <p className="text-gray-700 text-sm">
                  A 30-minute training session covered the new pricing structure and how to explain it to customers.
                  Staff received scripts and FAQ sheets for common questions.
                </p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-bold mb-2 flex items-center">
                  <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-2">3</span>
                  Sunday: Signage and Communication
                </h4>
                <p className="text-gray-700 text-sm">
                  Clear signage was installed explaining the cash discount program. The messaging emphasized
                  customer choice and value transparency.
                </p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-bold mb-2 flex items-center">
                  <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-2">4</span>
                  Monday: Launch Day
                </h4>
                <p className="text-gray-700 text-sm">
                  The new system went live Monday morning. Staff were prepared for questions, and the implementation
                  proceeded without any technical issues.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-12 mb-6 flex items-center">
              <Users className="h-6 w-6 mr-2 text-primary-600" />
              Customer Reaction
            </h2>

            <p className="text-gray-700 mb-6">
              Sarah&apos;s biggest concern was customer pushback. However, the reaction was overwhelmingly positive.
              Most customers appreciated the transparency and choice the new system provided.
            </p>

            <div className="bg-green-50 p-6 rounded-lg mb-8">
              <h3 className="font-bold mb-4">Customer Response Breakdown (First Month):</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span>Positive/Neutral Response:</span>
                  <span className="font-bold text-green-600">87%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Customers Who Asked Questions:</span>
                  <span className="font-bold">23%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Customers Who Switched to Cash:</span>
                  <span className="font-bold text-blue-600">31%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Complaints Received:</span>
                  <span className="font-bold">3 total</span>
                </div>
              </div>
            </div>

            <blockquote className="border-l-4 border-green-500 pl-6 italic text-lg text-gray-800 my-8">
              &quot;I actually like knowing exactly what I&apos;m paying for. It&apos;s refreshing to see a business be so transparent
              about their costs.&quot;
              <footer className="text-sm text-gray-600 mt-2">— Regular customer feedback</footer>
            </blockquote>

            <h2 className="text-2xl font-bold mt-12 mb-6 flex items-center">
              <DollarSign className="h-6 w-6 mr-2 text-primary-600" />
              The Financial Impact
            </h2>

            <p className="text-gray-700 mb-6">
              The numbers speak for themselves. Within the first month, Mountain View Coffee saw dramatic
              improvements across multiple financial metrics:
            </p>

            <div className="bg-yellow-50 p-6 rounded-lg mb-8">
              <h3 className="font-bold mb-4">Financial Results - First 6 Months:</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-red-600">Before 0% Processing</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Monthly processing fees: $1,520</li>
                    <li>• Annual processing cost: $18,240</li>
                    <li>• Effective profit margin: 12.8%</li>
                    <li>• Cash payment percentage: 11%</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-green-600">After Implementation</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Monthly processing fees: $0</li>
                    <li>• Annual savings: $18,240</li>
                    <li>• New profit margin: 16.1%</li>
                    <li>• Cash payment percentage: 31%</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t">
                <div className="text-center">
                  <span className="text-2xl font-bold text-green-600">$18,240 Annual Savings</span>
                  <p className="text-sm text-gray-600 mt-1">Equivalent to 25% profit increase</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-12 mb-6">How the Savings Were Reinvested</h2>

            <p className="text-gray-700 mb-6">
              Rather than simply pocketing the savings, Sarah strategically reinvested the money back into
              the business, creating a positive cycle of growth and improvement:
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1" />
                <div>
                  <h4 className="font-semibold">New Espresso Machine ($8,500)</h4>
                  <p className="text-gray-700 text-sm">
                    Upgraded to a commercial-grade machine, improving drink quality and reducing preparation time.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1" />
                <div>
                  <h4 className="font-semibold">Staff Bonuses and Raises ($4,200)</h4>
                  <p className="text-gray-700 text-sm">
                    Provided quarterly bonuses and hourly wage increases, improving staff retention and morale.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1" />
                <div>
                  <h4 className="font-semibold">Marketing and Community Events ($2,800)</h4>
                  <p className="text-gray-700 text-sm">
                    Funded local event sponsorships and social media advertising, increasing brand awareness.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1" />
                <div>
                  <h4 className="font-semibold">Business Emergency Fund ($2,740)</h4>
                  <p className="text-gray-700 text-sm">
                    Built a financial cushion for unexpected expenses and future opportunities.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-12 mb-6 flex items-center">
              <TrendingUp className="h-6 w-6 mr-2 text-primary-600" />
              Secondary Benefits
            </h2>

            <p className="text-gray-700 mb-6">
              Beyond the obvious financial savings, Mountain View Coffee experienced several unexpected
              benefits from the implementation:
            </p>

            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <h3 className="font-bold mb-4">Unexpected Improvements:</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold">Faster Transaction Times</h4>
                  <p className="text-gray-700 text-sm">
                    Cash transactions reduced average checkout time by 15 seconds, improving line flow during busy periods.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">Improved Cash Flow</h4>
                  <p className="text-gray-700 text-sm">
                    Increased cash payments eliminated credit card processing delays, providing immediate access to funds.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">Enhanced Customer Relationships</h4>
                  <p className="text-gray-700 text-sm">
                    Transparent pricing sparked positive conversations about business operations and local support.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">Simplified Accounting</h4>
                  <p className="text-gray-700 text-sm">
                    Eliminating processing fees reduced monthly reconciliation time and simplified financial reporting.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-12 mb-6">Lessons Learned</h2>

            <p className="text-gray-700 mb-6">
              Sarah&apos;s experience offers valuable insights for other business owners considering similar changes:
            </p>

            <div className="space-y-4 mb-8">
              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <h4 className="font-bold text-yellow-800 mb-2">💡 Communication is Key</h4>
                <p className="text-yellow-700 text-sm">
                  Clear, confident explanation of the program from well-trained staff makes all the difference
                  in customer acceptance.
                </p>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <h4 className="font-bold text-yellow-800 mb-2">💡 Focus on Customer Choice</h4>
                <p className="text-yellow-700 text-sm">
                  Framing the program as providing options rather than imposing fees creates positive customer perception.
                </p>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <h4 className="font-bold text-yellow-800 mb-2">💡 Reinvest for Growth</h4>
                <p className="text-yellow-700 text-sm">
                  Using savings to improve the business creates visible value that customers can appreciate.
                </p>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <h4 className="font-bold text-yellow-800 mb-2">💡 Monitor and Adjust</h4>
                <p className="text-yellow-700 text-sm">
                  Regular review of customer feedback and financial metrics ensures continued success.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-12 mb-6">Six Months Later</h2>

            <p className="text-gray-700 mb-6">
              Today, Mountain View Coffee is thriving. The savings from eliminating processing fees have been
              transformative, but the benefits extend far beyond the bottom line.
            </p>

            <div className="bg-green-50 p-6 rounded-lg mb-8">
              <h3 className="font-bold mb-4 flex items-center">
                <Star className="h-5 w-5 text-yellow-500 mr-2" />
                Current Status
              </h3>
              <div className="space-y-2 text-gray-700">
                <p>• Revenue increased 18% due to improved operations and marketing</p>
                <p>• Customer satisfaction scores improved from 4.2 to 4.7 stars</p>
                <p>• Staff turnover reduced by 40% due to better compensation</p>
                <p>• Building emergency fund has grown to $15,000</p>
                <p>• Planning second location for late 2025</p>
              </div>
            </div>

            <blockquote className="border-l-4 border-primary-500 pl-6 italic text-lg text-gray-800 my-8">
              &quot;Eliminating processing fees was the best business decision I&apos;ve made. It&apos;s not just about the money—
              it&apos;s about having the freedom to reinvest in what matters: great coffee, happy staff, and our community.&quot;
              <footer className="text-sm text-gray-600 mt-2">— Sarah Chen, 6 months later</footer>
            </blockquote>

            <h2 className="text-2xl font-bold mt-12 mb-6">Your Turn to Save</h2>

            <p className="text-gray-700 mb-6">
              Mountain View Coffee&apos;s story isn&apos;t unique—it&apos;s becoming the norm for businesses that prioritize
              profitability and transparency. The question isn&apos;t whether 0% processing works, but whether you&apos;re
              ready to keep 100% of your revenue.
            </p>

            <p className="text-gray-700 mb-8">
              Like Sarah, you might be surprised by how straightforward the implementation process is and how
              quickly you&apos;ll see results. The savings start immediately, and the benefits compound over time.
            </p>

            <div className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white p-8 rounded-xl text-center mt-12">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Write Your Success Story?
              </h3>
              <p className="text-lg mb-6 text-primary-100">
                See how much your business could save with 0% processing
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Your Savings Calculation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </article>
  );
}