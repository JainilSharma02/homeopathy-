"use client";

import { motion } from "framer-motion";
import { Maximize2 } from "lucide-react";

export default function Gallery() {
  const categories = ["Clinical View", "Pharmacy", "Laboratory", "Suites"];
  
  const images = [
    { url: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80", title: "Consultation Suite", span: "md:col-span-2 md:row-span-2", category: "Clinical View" },
    { url: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", title: "Patient Lounge", span: "md:col-span-1 md:row-span-1", category: "Suites" },
    { url: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", title: "Modern Dispensary", span: "md:col-span-1 md:row-span-1", category: "Pharmacy" },
    { url: "https://images.unsplash.com/photo-1664447972888-9d7fc211833f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", title: "Diagnostic Wing", span: "md:col-span-1 md:row-span-2", category: "Laboratory" },
    { url: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", title: "Research Unit", span: "md:col-span-2 md:row-span-1", category: "Laboratory" },
  ];

  return (
    <section className="py-24 px-4 md:px-6 relative overflow-hidden" id="gallery">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="space-y-4">
            <span className="text-xs font-black uppercase tracking-[0.3em] text-primary-green bg-primary-green/10 px-4 py-1.5 rounded-full">
              The Experience
            </span>
            <h3 className="text-4xl md:text-5xl font-display font-bold leading-tight text-slate-900">
              Heal in <span className="text-primary-green">Silence &amp; Luxury</span>
            </h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <span key={cat} className="text-[10px] font-bold text-slate-400 border border-slate-100 px-4 py-2 rounded-xl uppercase tracking-widest">
                {cat}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[250px]">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative group rounded-[2.5rem] overflow-hidden shadow-2xl cursor-pointer ${img.span}`}
            >
              <img 
                src={img.url} 
                alt={img.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 grayscale-[0.3] group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                <span className="text-[10px] font-black text-primary-green uppercase tracking-[0.2em] mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {img.category}
                </span>
                <h4 className="text-xl md:text-2xl font-bold text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                  {img.title}
                </h4>
                <div className="mt-4 flex items-center space-x-2 text-xs font-bold text-white/60 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-150">
                  <Maximize2 className="w-4 h-4" />
                  <span className="uppercase tracking-widest">Expand View</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
