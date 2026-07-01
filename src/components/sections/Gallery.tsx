"use client";

import { motion } from "framer-motion";
import { Maximize2 } from "lucide-react";

const images = [
  { url: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", title: "Consultation Room" },
  { url: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", title: "Waiting Area" },
  { url: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", title: "Medicine Section" },
  { url: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", title: "Modern Equipment" },
  { url: "https://plus.unsplash.com/premium_photo-1661284886644-d830501bed04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", title: "Reception Desk" },
  { url: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", title: "Doctor's Cabin" },
  { url: "https://images.unsplash.com/photo-1664447972888-9d7fc211833f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", title: "Diagnostic Lab" },
  { url: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", title: "Research Unit" },
];

export default function Gallery() {
  return (
    <section className="py-24 px-6 bg-premium-gradient" id="gallery">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-sm font-bold text-primary-green uppercase tracking-widest">Our Clinic</h2>
          <h3 className="text-4xl lg:text-5xl font-display font-bold">Heal in a <span className="text-primary-green">Serene</span> Environment</h3>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative group rounded-[2rem] overflow-hidden shadow-xl cursor-pointer"
            >
              <img 
                src={img.url} 
                alt={img.title}
                className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                <div className="text-white">
                  <h4 className="text-xl font-bold">{img.title}</h4>
                  <div className="flex items-center space-x-2 text-sm text-white/70 mt-2">
                    <Maximize2 className="w-4 h-4" />
                    <span>View Gallery</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
