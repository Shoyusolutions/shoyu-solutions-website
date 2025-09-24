import Link from 'next/link';
import { CreditCard, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container-custom">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <CreditCard className="h-8 w-8 text-primary-400" />
              <span className="font-bold text-xl">CustomPOS</span>
            </div>
            <p className="text-gray-400 mb-4">
              Simple, affordable POS solutions built specifically for your small business needs.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Retail POS
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Restaurant POS
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Service Business
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Mobile POS
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-gray-400 hover:text-primary-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Get In Touch</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Phone: (555) 123-4567</li>
              <li>Email: info@custompos.com</li>
              <li>Hours: Mon-Fri 9am-6pm</li>
              <li>Weekend Support Available</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 CustomPOS. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}