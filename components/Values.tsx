import React from 'react';
import { Shield, Gem, Scale, Users, Leaf, Clock } from 'lucide-react';

const values = [
  {
    icon: Shield,
    title: 'Stewardship',
    description: 'We act as guardians of resources and reputation, ensuring that every decision honors our past while securing the future.'
  },
  {
    icon: Gem,
    title: 'Craftsmanship',
    description: 'Whether in code or cloth, we pursue the highest level of detail. Excellence is not an act, but a habit of refinement.'
  },
  {
    icon: Scale,
    title: 'Integrity',
    description: 'Our word is our bond. We operate with absolute transparency and ethical fortitude in every transaction.'
  },
  {
    icon: Users,
    title: 'Discretion',
    description: 'We serve our partners with quiet confidence, valuing privacy and trusted relationships over loud accolades.'
  },
  {
    icon: Leaf,
    title: 'Permanence',
    description: 'We build systems and brands designed to endure, prioritizing long-term value over short-term gains.'
  },
  {
    icon: Clock,
    title: 'Heritage',
    description: 'We respect tradition as the foundation of innovation, blending timeless wisdom with modern capability.'
  }
];

export default function Values() {
  return (
    <section id="values" className="py-32 bg-[#0c0a09] text-stone-200 relative overflow-hidden">
      {/* Subtle Texture Overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <div className="h-1 w-20 bg-[#d4af37] mx-auto mb-6" />
            <h2 className="text-[#d4af37] font-serif tracking-widest uppercase text-sm font-semibold">Our Philosophy</h2>
          </div>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
            Rooted in Heritage, <br />
            <span className="italic font-light text-[#d4af37]">Refined by Excellence</span>
          </h3>
          <p className="text-xl text-stone-400 max-w-3xl mx-auto font-light leading-relaxed font-serif italic">
            "We honor our legacy by crafting the future with quiet discretion and timeless integrity."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {values.map((value, index) => (
            <div 
              key={index} 
              className="group relative p-8 border border-stone-800 hover:border-[#d4af37]/30 bg-stone-900/30 transition-all duration-500 hover:-translate-y-1"
            >
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-full bg-stone-800/50 text-[#d4af37] group-hover:bg-[#d4af37] group-hover:text-stone-900 transition-all duration-500">
                <value.icon className="h-6 w-6" strokeWidth={1.5} />
              </div>
              
              <h4 className="text-2xl font-serif text-stone-100 mb-4 group-hover:text-[#d4af37] transition-colors duration-300">
                {value.title}
              </h4>
              
              <p className="text-stone-400 leading-relaxed font-light text-sm tracking-wide">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}