import React from 'react';
import { Leaf, Linkedin, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-agri-dark text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-agri-primary rounded-lg flex items-center justify-center">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <span className="font-poppins font-700 text-xl">Imbonicard</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Digital infrastructure for agricultural development and farmer network management.
            </p>
          </div>

          <div>
            <h4 className="font-poppins font-700 mb-4">Product</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a href="#platform" className="hover:text-agri-secondary transition-colors">
                  Platform
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-agri-secondary transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#impact" className="hover:text-agri-secondary transition-colors">
                  Impact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-agri-secondary transition-colors">
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-poppins font-700 mb-4">Company</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-agri-secondary transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#partners" className="hover:text-agri-secondary transition-colors">
                  Partners
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-agri-secondary transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-agri-secondary transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-poppins font-700 mb-4">Connect</h4>
            <div className="flex gap-4 mb-6">
              <a
                href="#"
                className="w-10 h-10 bg-agri-primary rounded-lg flex items-center justify-center hover:bg-agri-secondary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-agri-primary rounded-lg flex items-center justify-center hover:bg-agri-secondary transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="mailto:hello@imbonicard.com"
                className="w-10 h-10 bg-agri-primary rounded-lg flex items-center justify-center hover:bg-agri-secondary transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {currentYear} Imbonicard. All rights reserved. | Empowering Agricultural Development Through Technology</p>
        </div>
      </div>
    </footer>
  );
}
