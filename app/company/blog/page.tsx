'use client';

import { motion } from 'framer-motion';
import { Clock, User, ArrowRight, TrendingUp, DollarSign, Shield, Lightbulb, Tag } from 'lucide-react';
import Link from 'next/link';

export default function Blog() {
  const blogPosts = [
    {
      category: "Industry Insights",
      icon: TrendingUp,
      title: "The Hidden Cost of Credit Card Processing Fees",
      excerpt: "Discover how processing fees are eating into your profits and what you can do about it. Most businesses don't realize they're losing 2-4% of every transaction.",
      author: "Michael Chen",
      date: "December 15, 2024",
      readTime: "5 min read",
      slug: "hidden-cost-processing-fees",
      featured: true
    },
    {
      category: "How-To Guide",
      icon: Lightbulb,
      title: "5 Ways to Speed Up Your Checkout Process",
      excerpt: "Learn proven strategies to reduce checkout time by 50% and serve more customers during peak hours.",
      author: "Sarah Johnson",
      date: "December 10, 2024",
      readTime: "7 min read",
      slug: "speed-up-checkout-process"
    },
    {
      category: "Technology",
      icon: Shield,
      title: "Understanding 0% Processing: How It Works",
      excerpt: "A deep dive into the technology and business model that makes 0% credit card processing possible for businesses.",
      author: "David Martinez",
      date: "December 8, 2024",
      readTime: "8 min read",
      slug: "understanding-zero-processing"
    },
    {
      category: "Business Tips",
      icon: DollarSign,
      title: "Calculate Your True POS Costs",
      excerpt: "Most businesses underestimate their POS expenses by 40%. Here's how to calculate what you're really paying.",
      author: "Emily Thompson",
      date: "December 5, 2024",
      readTime: "6 min read",
      slug: "calculate-true-pos-costs"
    },
    {
      category: "Case Study",
      icon: Tag,
      title: "How a Coffee Shop Saved $18,000 Annually",
      excerpt: "Real numbers from a real business: switching to custom POS with 0% fees transformed their bottom line.",
      author: "Michael Chen",
      date: "December 1, 2024",
      readTime: "10 min read",
      slug: "coffee-shop-saves-18000"
    },
    {
      category: "Industry Insights",
      icon: TrendingUp,
      title: "2025 POS Trends Every Business Should Know",
      excerpt: "From AI integration to mobile-first design, discover the trends shaping the future of point-of-sale systems.",
      author: "Sarah Johnson",
      date: "November 28, 2024",
      readTime: "9 min read",
      slug: "2025-pos-trends"
    }
  ];

  const categories = [
    { name: "All Posts", count: 24 },
    { name: "Industry Insights", count: 8 },
    { name: "How-To Guides", count: 6 },
    { name: "Technology", count: 5 },
    { name: "Business Tips", count: 5 }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary-50 to-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Insights for
              <span className="text-primary-600"> Business Growth</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Expert advice, industry insights, and practical tips to help you save money and grow your business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          {blogPosts.filter(post => post.featured).map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8 md:p-12 hover:shadow-xl transition-shadow cursor-pointer"
            >
              <div className="flex items-center mb-4">
                <span className="px-3 py-1 bg-primary-600 text-white text-sm rounded-full font-semibold">
                  Featured Post
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 hover:text-primary-600 transition-colors">
                {post.title}
              </h2>

              <p className="text-lg text-gray-600 mb-6 max-w-3xl">
                {post.excerpt}
              </p>

              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    {post.author}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {post.readTime}
                  </div>
                  <span>{post.date}</span>
                </div>

                <Link
                  href={`/company/blog/${post.slug}`}
                  className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors"
                >
                  Read Full Article
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <div className="bg-white rounded-xl p-6 sticky top-24">
                <h3 className="text-xl font-bold mb-4">Categories</h3>
                <ul className="space-y-3">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <button className="w-full text-left flex items-center justify-between hover:text-primary-600 transition-colors">
                        <span>{category.name}</span>
                        <span className="text-sm text-gray-400">({category.count})</span>
                      </button>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-8 border-t">
                  <h3 className="text-xl font-bold mb-4">Newsletter</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Get weekly tips to grow your business and save money.
                  </p>
                  <input
                    type="email"
                    placeholder="Your email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-3 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                  <button className="w-full btn-primary text-sm">
                    Subscribe
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Blog Posts */}
            <div className="lg:col-span-3">
              <div className="grid md:grid-cols-2 gap-8">
                {blogPosts.filter(post => !post.featured).map((post, index) => (
                  <motion.article
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all cursor-pointer group"
                  >
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="p-2 bg-primary-100 rounded-lg mr-3">
                          <post.icon className="h-5 w-5 text-primary-600" />
                        </div>
                        <span className="text-sm font-semibold text-primary-600">
                          {post.category}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold mb-3 group-hover:text-primary-600 transition-colors">
                        {post.title}
                      </h3>

                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center gap-3">
                          <span>{post.author}</span>
                          <span>•</span>
                          <span>{post.readTime}</span>
                        </div>
                      </div>

                      <div className="mt-4 pt-4 border-t">
                        <Link
                          href={`/company/blog/${post.slug}`}
                          className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors"
                        >
                          Read More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>

              {/* Pagination */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mt-12 flex items-center justify-center gap-2"
              >
                <button className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors">
                  Previous
                </button>
                <button className="px-4 py-2 rounded-lg bg-primary-600 text-white">1</button>
                <button className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors">
                  2
                </button>
                <button className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors">
                  3
                </button>
                <button className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors">
                  Next
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Save on Processing Fees?
            </h2>
            <p className="text-xl mb-8 text-primary-100 max-w-2xl mx-auto">
              Join hundreds of businesses already saving thousands with 0% processing fees.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Get Your Free Consultation
              <ArrowRight className="ml-3 h-6 w-6" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}