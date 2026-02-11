import React, { useState, useEffect } from 'react';
import { Menu, X, Building2 } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#sectors' },
    { name: 'Philosophy', href: '#values' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 ${ 
        isScrolled ? 'bg-[#0c0a09]/95 backdrop-blur-md shadow-lg py-4 border-b border-stone-800' : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center group cursor-pointer">
            <div className="border border-[#d4af37] p-2 mr-3 transition-all duration-500 group-hover:bg-[#d4af37]">
              <Building2 className="h-5 w-5 text-[#d4af37] group-hover:text-[#0c0a09] transition-colors" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-serif font-bold tracking-widest text-white">
                DHARAMSHAKTU
              </span>
              <span className="text-[0.65rem] uppercase tracking-[0.3em] text-[#d4af37]">
                Group of Companies
              </span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium uppercase tracking-widest transition-all duration-300 hover:text-[#d4af37] text-stone-300 relative group"
              >
                {link.name}
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-[#d4af37] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-stone-300 hover:text-[#d4af37] transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0c0a09] border-t border-stone-800 absolute w-full shadow-2xl animate-in slide-in-from-top-5 duration-300">
          <div className="px-8 py-8 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-lg font-serif text-stone-300 hover:text-[#d4af37] hover:pl-2 transition-all duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}