import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden bg-[#0c0a09]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Corporate Architecture"
          className="w-full h-full object-cover opacity-40 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c0a09]/80 via-[#0c0a09]/60 to-[#0c0a09]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000">
          {/* Removed Est. 2024 badge for cleaner look */}
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium text-white mb-8 leading-tight tracking-tight">
            Legacy of <br />
            <span className="text-[#d4af37] italic">Innovation</span>
          </h1>
          
          <p className="text-lg md:text-xl text-stone-300 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
            Dharamshaktu Group bridges the divide between digital intelligence and human elegance. We are the architects of a refined future.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="#sectors" 
              className="inline-flex items-center justify-center px-10 py-4 bg-[#d4af37] text-[#0c0a09] text-sm uppercase tracking-widest font-bold hover:bg-white transition-all duration-500 min-w-[200px]"
            >
              Our Portfolio
            </a>
            <a 
              href="#about" 
              className="inline-flex items-center justify-center px-10 py-4 border border-stone-600 text-white text-sm uppercase tracking-widest font-bold hover:border-[#d4af37] hover:text-[#d4af37] transition-all duration-500 min-w-[200px] group"
            >
              The Vision <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 hidden md:block">
        <div className="flex flex-col items-center gap-2 opacity-50 animate-pulse">
          <span className="text-[10px] uppercase tracking-[0.3em] text-stone-400">Scroll</span>
          <div className="w-[1px] h-16 bg-gradient-to-b from-stone-400 to-transparent" />
        </div>
      </div>
    </div>
  );
}