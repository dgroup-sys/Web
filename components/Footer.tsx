import React from 'react';
import { Building2, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <Building2 className="h-8 w-8 text-amber-600 mr-2" />
              <span className="text-xl font-bold text-white">
                DHARAMSHAKTU <span className="text-amber-600">GROUP</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              Building a legacy of trust and excellence across Technology, AI, Hospitality, and Fashion. Committed to sustainable growth and community development.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-amber-500 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-amber-500 transition-colors">About Us</a></li>
              <li><a href="#sectors" className="hover:text-amber-500 transition-colors">Our Sectors</a></li>
              <li><a href="#values" className="hover:text-amber-500 transition-colors">Core Values</a></li>
              <li><a href="#contact" className="hover:text-amber-500 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Our Sectors</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-amber-500 transition-colors">IT Consulting</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Artificial Intelligence</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Hospitality</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Fashion & Apparel</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Connect With Us</h4>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-amber-600 hover:text-white transition-all">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-amber-600 hover:text-white transition-all">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-amber-600 hover:text-white transition-all">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-amber-600 hover:text-white transition-all">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
            <p className="text-xs text-slate-500">
              Subscribe to our newsletter for updates.
            </p>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Dharamshaktu Group. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}