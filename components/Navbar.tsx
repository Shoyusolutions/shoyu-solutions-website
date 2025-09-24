'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, CreditCard } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-md z-50 shadow-sm">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <CreditCard className="h-8 w-8 text-primary-600" />
              <span className="font-bold text-xl text-gray-900">CustomPOS</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="#features" className="text-gray-700 hover:text-primary-600 transition-colors">
              Features
            </Link>
            <Link href="#benefits" className="text-gray-700 hover:text-primary-600 transition-colors">
              Why Choose Us
            </Link>
            <Link href="#pricing" className="text-gray-700 hover:text-primary-600 transition-colors">
              Pricing
            </Link>
            <Link href="#about" className="text-gray-700 hover:text-primary-600 transition-colors">
              About
            </Link>
            <Link href="#contact" className="btn-primary">
              Get Started
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

        {isOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="#features"
                className="block px-3 py-2 text-gray-700 hover:text-primary-600"
                onClick={() => setIsOpen(false)}
              >
                Features
              </Link>
              <Link
                href="#benefits"
                className="block px-3 py-2 text-gray-700 hover:text-primary-600"
                onClick={() => setIsOpen(false)}
              >
                Why Choose Us
              </Link>
              <Link
                href="#pricing"
                className="block px-3 py-2 text-gray-700 hover:text-primary-600"
                onClick={() => setIsOpen(false)}
              >
                Pricing
              </Link>
              <Link
                href="#about"
                className="block px-3 py-2 text-gray-700 hover:text-primary-600"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="#contact"
                className="block mt-2 btn-primary text-center"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}