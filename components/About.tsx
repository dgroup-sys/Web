import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-32 bg-[#FAFAF9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="absolute -top-10 -left-10 w-64 h-64 border border-[#d4af37]/20 rounded-full -z-10" />
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#d4af37]/5 rounded-full -z-10" />
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1632&q=80"
                alt="Executive Meeting"
                className="w-full h-[600px] object-cover grayscale hover:grayscale-0 transition-all duration-1000 shadow-2xl"
              />
              
              <div className="absolute -bottom-8 -right-8 bg-[#0c0a09] p-8 max-w-xs shadow-2xl border-l-4 border-[#d4af37] hidden md:block">
                <p className="text-stone-300 font-serif italic text-lg leading-relaxed">
                  "We don't just manage businesses; we curate legacies."
                </p>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="flex items-center mb-6">
              <span className="h-[1px] w-12 bg-[#d4af37] mr-4"></span>
              <h2 className="text-[#d4af37] font-bold tracking-[0.2em] uppercase text-xs">About The Group</h2>
            </div>
            
            <h3 className="text-4xl md:text-5xl font-serif font-medium text-[#0c0a09] mb-8 leading-tight">
              Pioneering Excellence <br />
              <span className="italic text-stone-500">Across Generations</span>
            </h3>
            
            <p className="text-stone-600 mb-6 leading-relaxed text-lg font-light">
              Dharamshaktu Group is a diversified group of companies operating at the intersection of tradition and transformation. We seamlessly blend the precision of advanced technology and AI.
            </p>
            
            <p className="text-stone-600 mb-10 leading-relaxed font-light">
              Our journey is defined by a relentless pursuit of quality. Whether it's optimizing enterprise workflows through artificial intelligence or setting new standards in apparel manufacturing, we are committed to stewardship and craftsmanship.
            </p>
            
            <div className="pt-4">
              <a 
                href="#sectors" 
                className="inline-flex items-center text-sm font-bold text-[#0c0a09] hover:text-[#d4af37] transition-colors uppercase tracking-widest group"
              >
                Explore Our Portfolio <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}