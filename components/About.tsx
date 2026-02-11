import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-amber-100 rounded-tl-3xl -z-10" />
            <img 
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1632&q=80"
              alt="Corporate Meeting"
              className="rounded-lg shadow-xl w-full object-cover h-[400px]"
            />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-slate-100 rounded-br-3xl -z-10" />
          </div>
          
          <div>
            <h2 className="text-amber-600 font-semibold tracking-wide uppercase text-sm mb-2">About Us</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              A Legacy of Trust & Innovation
            </h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Founded with a vision to transform industries and lifestyles, Dharamshaktu Group has grown into a dynamic multi-faceted organization. We believe in sustainable growth that benefits our stakeholders, communities, and the environment.
            </p>
            <p className="text-slate-600 mb-8 leading-relaxed">
              From pioneering AI and IT solutions to curating world-class hospitality and fashion experiences, our footprint spans across vital sectors of the modern economy. Our journey is defined by an unwavering commitment to quality, innovation, and integrity.
            </p>
            
            <div className="grid grid-cols-3 gap-6 border-t border-slate-100 pt-8">
              <div>
                <p className="text-3xl font-bold text-slate-900">25+</p>
                <p className="text-sm text-slate-500">Years of Excellence</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-slate-900">50+</p>
                <p className="text-sm text-slate-500">Global Partners</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-slate-900">1000+</p>
                <p className="text-sm text-slate-500">Dedicated Employees</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
