"use client";
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Sectors from '@/components/Sectors';
import Values from '@/components/Values';
import Footer from '@/components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-amber-100 selection:text-amber-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Sectors />
        <Values />
      </main>
      <Footer />
    </div>
  );
}