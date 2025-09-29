'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, CreditCard, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);

  const solutionsTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const companyTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const solutions = [
    { name: 'Coffee Shop POS', href: '/solutions/coffee-shop' },
    { name: 'Retail POS', href: '/solutions/retail' },
    { name: 'Restaurant POS', href: '/solutions/restaurant' },
    { name: 'Service Business', href: '/solutions/service-business' },
    { name: 'Mobile POS', href: '/solutions/mobile' },
  ];

  const company = [
    { name: 'About Us', href: '/company/about' },
    { name: 'Blog', href: '/company/blog' },
  ];

  // Clear timeouts on unmount
  useEffect(() => {
    return () => {
      if (solutionsTimeoutRef.current) clearTimeout(solutionsTimeoutRef.current);
      if (companyTimeoutRef.current) clearTimeout(companyTimeoutRef.current);
    };
  }, []);

  const handleSolutionsEnter = () => {
    if (solutionsTimeoutRef.current) clearTimeout(solutionsTimeoutRef.current);
    setSolutionsOpen(true);
  };

  const handleSolutionsLeave = () => {
    solutionsTimeoutRef.current = setTimeout(() => {
      setSolutionsOpen(false);
    }, 150);
  };

  const handleCompanyEnter = () => {
    if (companyTimeoutRef.current) clearTimeout(companyTimeoutRef.current);
    setCompanyOpen(true);
  };

  const handleCompanyLeave = () => {
    companyTimeoutRef.current = setTimeout(() => {
      setCompanyOpen(false);
    }, 150);
  };

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-md z-50 shadow-sm">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <CreditCard className="h-8 w-8 text-primary-600" />
              <span className="font-bold text-xl text-gray-900">Shoyu Solutions</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {/* Solutions Dropdown */}
            <div
              className="relative"
              onMouseEnter={handleSolutionsEnter}
              onMouseLeave={handleSolutionsLeave}
            >
              <button
                className="flex items-center text-gray-700 hover:text-primary-600 transition-colors py-2"
              >
                Solutions
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>

              {solutionsOpen && (
                <div
                  className="absolute top-full left-0 mt-0 w-56 bg-white rounded-lg shadow-lg py-2 border border-gray-100"
                >
                  {solutions.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-4 py-2.5 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                      onClick={() => setSolutionsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/#pricing" className="text-gray-700 hover:text-primary-600 transition-colors">
              Pricing
            </Link>

            {/* Company Dropdown */}
            <div
              className="relative"
              onMouseEnter={handleCompanyEnter}
              onMouseLeave={handleCompanyLeave}
            >
              <button
                className="flex items-center text-gray-700 hover:text-primary-600 transition-colors py-2"
              >
                Company
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>

              {companyOpen && (
                <div
                  className="absolute top-full left-0 mt-0 w-48 bg-white rounded-lg shadow-lg py-2 border border-gray-100"
                >
                  {company.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-4 py-2.5 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                      onClick={() => setCompanyOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/contact" className="text-gray-700 hover:text-primary-600 transition-colors">
              Contact
            </Link>

            <Link href="/contact" className="btn-primary">
              Get Started - 0% Fees
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary-600 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {/* Solutions Section */}
              <div className="px-3 py-2">
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                  Solutions
                </p>
                {solutions.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block py-2 pl-4 text-gray-700 hover:text-primary-600"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              <Link
                href="/#pricing"
                className="block px-3 py-2 text-gray-700 hover:text-primary-600"
                onClick={() => setIsOpen(false)}
              >
                Pricing
              </Link>

              {/* Company Section */}
              <div className="px-3 py-2">
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                  Company
                </p>
                {company.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block py-2 pl-4 text-gray-700 hover:text-primary-600"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              <Link
                href="/contact"
                className="block px-3 py-2 text-gray-700 hover:text-primary-600"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>

              <Link
                href="/contact"
                className="block mt-2 btn-primary text-center"
                onClick={() => setIsOpen(false)}
              >
                Get Started - 0% Fees
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}