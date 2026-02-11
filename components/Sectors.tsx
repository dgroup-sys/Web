import React from 'react';
import { Hotel, Monitor, Brain, ShoppingBag, ArrowRight } from 'lucide-react';

const sectors = [
  {
    id: 1,
    title: 'IT Consulting',
    description: 'Empowering businesses with cutting-edge digital transformation strategies, cloud solutions, and robust software architectures tailored for sustainable growth.',
    icon: Monitor,
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
  },
  {
    id: 2,
    title: 'Artificial Intelligence',
    description: 'Pioneering the future with advanced AI research, predictive analytics, and intelligent automation systems that solve complex real-world problems.',
    icon: Brain,
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=1530&q=80',
  },
  {
    id: 3,
    title: 'Hospitality',
    description: 'Redefining luxury and comfort with our chain of premium hotels and resorts. We curate experiences that blend local culture with world-class amenities.',
    icon: Hotel,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
  },
  {
    id: 4,
    title: 'Fashion & Apparel',
    description: 'Setting global trends with sustainable fashion and premium apparel brands that combine contemporary style, comfort, and ethical manufacturing.',
    icon: ShoppingBag,
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
  },
];

export default function Sectors() {
  return (
    <section id="sectors" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-amber-600 font-semibold tracking-wide uppercase text-sm mb-2">Our Expertise</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900">Diversified Business Sectors</h3>
          <div className="w-24 h-1 bg-amber-600 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sectors.map((sector) => (
            <div 
              key={sector.id} 
              className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/10 transition-colors z-10" />
                <img 
                  src={sector.image} 
                  alt={sector.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 z-20 bg-white p-2 rounded-lg shadow-md">
                  <sector.icon className="h-6 w-6 text-amber-600" />
                </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-amber-600 transition-colors">
                  {sector.title}
                </h4>
                <p className="text-slate-600 mb-6 text-sm leading-relaxed flex-1">
                  {sector.description}
                </p>
                <a 
                  href="#contact" 
                  className="inline-flex items-center text-sm font-semibold text-amber-600 hover:text-amber-700 transition-colors mt-auto"
                >
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}