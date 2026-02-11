import React from 'react';
import { Monitor, Brain, ShoppingBag } from 'lucide-react';

const sectors = [
  {
    id: 1,
    title: 'IT Consulting',
    subtitle: 'Digital Infrastructure',
    description: 'Architecting robust digital ecosystems for global enterprises with precision and security.',
    icon: Monitor,
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1472&q=80',
  },
  {
    id: 2,
    title: 'Artificial Intelligence',
    subtitle: 'Cognitive Solutions',
    description: 'Harnessing predictive intelligence to automate complex decision-making processes.',
    icon: Brain,
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=1530&q=80',
  },
  {
    id: 3,
    title: 'Fashion & Apparel',
    subtitle: 'Textile Craftsmanship',
    description: 'Curating contemporary fashion brands that blend sustainable materials with avant-garde design.',
    icon: ShoppingBag,
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
  },
];

export default function Sectors() {
  return (
    <section id="sectors" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <span className="text-[#d4af37] font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Our Expertise</span>
          <h2 className="text-4xl md:text-5xl font-serif text-[#0c0a09] mb-6">Diverse Business Sectors</h2>
          <div className="w-24 h-[1px] bg-[#d4af37] mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {sectors.map((sector) => (
            <div 
              key={sector.id} 
              className="group cursor-pointer"
            >
              <div className="relative h-[400px] overflow-hidden mb-8">
                <div className="absolute inset-0 bg-[#0c0a09]/20 group-hover:bg-[#0c0a09]/0 transition-colors duration-700 z-10" />
                <img 
                  src={sector.image} 
                  alt={sector.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 grayscale group-hover:grayscale-0"
                />
                <div className="absolute top-6 left-6 z-20 bg-white p-4 shadow-lg">
                  <sector.icon className="h-6 w-6 text-[#0c0a09]" strokeWidth={1.5} />
                </div>
              </div>
              
              <div className="pr-4">
                <span className="text-[#d4af37] text-xs font-bold uppercase tracking-widest mb-2 block">{sector.subtitle}</span>
                <h3 className="text-2xl font-serif text-[#0c0a09] mb-4 group-hover:text-[#d4af37] transition-colors">
                  {sector.title}
                </h3>
                <p className="text-stone-500 mb-6 leading-relaxed font-light">
                  {sector.description}
                </p>
                {/* Removed View Details button for cleaner aesthetic */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}