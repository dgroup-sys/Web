import React from 'react';
import { Building2, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0c0a09] text-stone-400 py-20 border-t border-stone-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-16">
          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-center">
              <div className="border border-[#d4af37] p-2 mr-3">
                <Building2 className="h-6 w-6 text-[#d4af37]" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-serif font-bold tracking-widest text-white">
                  DHARAMSHAKTU
                </span>
                <span className="text-[0.6rem] uppercase tracking-[0.3em] text-[#d4af37]">
                  Group of Companies
                </span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-stone-500 max-w-md font-light">
              Rooted in heritage, refined by excellence. We honor our legacy by crafting the future with quiet discretion and timeless integrity.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-stone-500 hover:text-[#d4af37] transition-colors"><Facebook className="h-5 w-5" strokeWidth={1.5} /></a>
              <a href="#" className="text-stone-500 hover:text-[#d4af37] transition-colors"><Twitter className="h-5 w-5" strokeWidth={1.5} /></a>
              <a href="#" className="text-stone-500 hover:text-[#d4af37] transition-colors"><Linkedin className="h-5 w-5" strokeWidth={1.5} /></a>
              <a href="#" className="text-stone-500 hover:text-[#d4af37] transition-colors"><Instagram className="h-5 w-5" strokeWidth={1.5} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-serif text-lg mb-8">Explore</h4>
            <ul className="space-y-4 text-sm font-light">
              <li><a href="#" className="hover:text-[#d4af37] transition-colors flex items-center group"><span className="w-0 group-hover:w-2 h-[1px] bg-[#d4af37] mr-0 group-hover:mr-2 transition-all duration-300"></span> Home</a></li>
              <li><a href="#about" className="hover:text-[#d4af37] transition-colors flex items-center group"><span className="w-0 group-hover:w-2 h-[1px] bg-[#d4af37] mr-0 group-hover:mr-2 transition-all duration-300"></span> About Us</a></li>
              <li><a href="#sectors" className="hover:text-[#d4af37] transition-colors flex items-center group"><span className="w-0 group-hover:w-2 h-[1px] bg-[#d4af37] mr-0 group-hover:mr-2 transition-all duration-300"></span> Portfolio</a></li>
              <li><a href="#values" className="hover:text-[#d4af37] transition-colors flex items-center group"><span className="w-0 group-hover:w-2 h-[1px] bg-[#d4af37] mr-0 group-hover:mr-2 transition-all duration-300"></span> Philosophy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-serif text-lg mb-8">Sectors</h4>
            <ul className="space-y-4 text-sm font-light">
              <li><a href="#" className="hover:text-[#d4af37] transition-colors">IT Consulting</a></li>
              <li><a href="#" className="hover:text-[#d4af37] transition-colors">Artificial Intelligence</a></li>
              <li><a href="#" className="hover:text-[#d4af37] transition-colors">Fashion & Apparel</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-900 pt-8 flex justify-center items-center text-xs text-stone-600 uppercase tracking-wider">
          <p>&copy; {new Date().getFullYear()} Dharamshaktu Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}