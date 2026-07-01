"use client";

import { motion } from "framer-motion";
import { Search, ChevronRight } from "lucide-react";
import { useState } from "react";

const diseases = [
  { name: "Hair Loss", category: "Cosmetic", desc: "Regrow your hair naturally with constitutional medicine." },
  { name: "Migraine", category: "Neurological", desc: "Permanent relief from chronic headaches and aura." },
  { name: "Skin Allergy", category: "Dermatology", desc: "Heal eczema, psoriasis, and dermatitis from within." },
  { name: "PCOS/PCOD", category: "Women's Health", desc: "Hormonal balance and cycle regulation naturally." },
  { name: "Thyroid", category: "Metabolic", desc: "Manage TSH levels without lifelong medications." },
  { name: "Diabetes", category: "Metabolic", desc: "Auxiliary treatment to manage sugar levels effectively." },
  { name: "Arthritis", category: "Joints", desc: "Reduce inflammation and regain joint mobility." },
  { name: "Asthma", category: "Respiratory", desc: "Improve lung capacity and reduce allergic response." },
  { name: "Anxiety", category: "Mental Health", desc: "Gentle healing for stress, panic, and depression." },
  { name: "Digestive Problems", category: "Gastric", desc: "Cure acidity, IBS, and constipation permanently." },
  { name: "Kidney Stones", category: "Renal", desc: "Dissolve and flush stones without any surgery." },
  { name: "Infertility", category: "General", desc: "Holistic approach to enhancing reproductive health." },
];

export default function DiseasesWeTreat() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredDiseases = diseases.filter(d => 
    d.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    d.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="py-24 px-6 relative" id="diseases">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div className="space-y-4">
            <h2 className="text-sm font-bold text-primary-green uppercase tracking-widest">Treatments</h2>
            <h3 className="text-4xl lg:text-5xl font-display font-bold">Specialized <span className="text-primary-green">Care</span> for All</h3>
          </div>
          
          <div className="relative group max-w-md w-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/30 group-focus-within:text-primary-green transition-colors" />
            <input 
              type="text" 
              placeholder="Search disease or symptom..."
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white/50 border border-glass-border rounded-full py-4 pl-12 pr-6 focus:outline-none focus:ring-2 focus:ring-primary-green/20 glass transition-all"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredDiseases.map((d, i) => (
            <motion.div
              key={d.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              className="group glass p-8 rounded-[2.5rem] hover:bg-primary-green hover:text-white transition-all duration-500 cursor-pointer overflow-hidden relative"
            >
              <div className="relative z-10">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-60 group-hover:opacity-100 mb-2 block">{d.category}</span>
                <h4 className="text-2xl font-bold mb-4 group-hover:translate-x-2 transition-transform">{d.name}</h4>
                <p className="text-sm opacity-60 group-hover:opacity-80 leading-relaxed mb-6">
                  {d.desc}
                </p>
                <div className="flex items-center space-x-2 text-sm font-bold opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all">
                  <span>Learn More</span>
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>
              
              {/* Decorative background circle */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary-green/5 rounded-full group-hover:scale-[3] group-hover:bg-white/10 transition-all duration-700" />
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
            <button className="glass px-10 py-4 rounded-2xl font-bold hover:bg-primary-green hover:text-white transition-all">
                View All 30+ Diseases
            </button>
        </div>
      </div>
    </section>
  );
}
