import React from 'react';
import { ShieldCheck, Zap, Award, Users, Globe, HeartHandshake } from 'lucide-react';

const values = [
  {
    icon: ShieldCheck,
    title: 'Integrity',
    description: 'We conduct our business with the highest standards of ethics and transparency.'
  },
  {
    icon: Zap,
    title: 'Innovation',
    description: 'Constantly evolving and adopting new technologies to deliver better solutions.'
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'Striving for perfection in every project we undertake, no matter the scale.'
  },
  {
    icon: Users,
    title: 'Customer Focus',
    description: 'Placing our clients at the heart of everything we do to ensure satisfaction.'
  },
  {
    icon: Globe,
    title: 'Sustainability',
    description: 'Committed to eco-friendly practices that preserve our planet for future generations.'
  },
  {
    icon: HeartHandshake,
    title: 'Community',
    description: 'Believing in giving back to society and uplifting the communities we serve.'
  }
];

export default function Values() {
  return (
    <section id="values" className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-amber-500 font-semibold tracking-wide uppercase text-sm mb-2">Our Core Philosophy</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white">Values That Drive Us</h3>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            At Dharamshaktu Group, our corporate culture is built on a foundation of strong principles that guide our decisions and actions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div 
              key={index} 
              className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-amber-500/50 transition-colors duration-300 hover:bg-slate-800"
            >
              <div className="bg-slate-900 w-14 h-14 rounded-lg flex items-center justify-center mb-6 shadow-lg">
                <value.icon className="h-7 w-7 text-amber-500" />
              </div>
              <h4 className="text-xl font-bold mb-3">{value.title}</h4>
              <p className="text-slate-400 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}