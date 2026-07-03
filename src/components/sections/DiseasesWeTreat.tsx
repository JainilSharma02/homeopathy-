"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Search, ChevronRight, X, Info, Pill, BookOpen, ShoppingBag, CheckCircle2 } from "lucide-react";
import { useState } from "react";

const diseases = [
  { 
    name: "Hair Loss", 
    category: "Cosmetic", 
    desc: "Regrow your hair naturally with constitutional medicine.",
    info: "Homeopathy treats the root cause of hair fall like hormonal imbalance, stress, or nutritional deficiencies.",
    medicines: ["Fluoric Acid", "Lycopodium", "Phosphorus"],
    usage: "Take 4 pills twice a day before meals. Avoid strong-smelling food for 30 mins.",
    howToGet: "Consult our specialist to get a personalized constitutional kit."
  },
  { 
    name: "Migraine", 
    category: "Neurological", 
    desc: "Permanent relief from chronic headaches and aura.",
    info: "We focus on reducing the frequency and intensity of attacks by balancing the nervous system.",
    medicines: ["Belladonna", "Glonoinum", "Sanguinaria"],
    usage: "2 drops on tongue during acute pain. Regular dose: 4 pills thrice a day.",
    howToGet: "Select Migraine Relief Pack from our specialized pharmacy."
  },
  { 
    name: "Skin Allergy", 
    category: "Dermatology", 
    desc: "Heal eczema, psoriasis, and dermatitis from within.",
    info: "Homeopathic remedies purify the blood and boost immunity to prevent recurring allergic reactions.",
    medicines: ["Apis Mellifica", "Graphites", "Sulphur"],
    usage: "Dissolve 4 pills in half a cup of water. Sip slowly. Repeat 4 times daily.",
    howToGet: "Visit clinic for a detailed skin analysis and prescription."
  },
  { 
    name: "PCOS/PCOD", 
    category: "Women's Health", 
    desc: "Hormonal balance and cycle regulation naturally.",
    info: "Effective treatment to regularize periods, reduce cysts, and manage weight or acne naturally.",
    medicines: ["Pulsatilla", "Sepia", "Lachesis"],
    usage: "Regular monthly cycle protocol: 4 pills twice daily. Consult for exact timing.",
    howToGet: "Available after a detailed hormonal profiling session."
  },
  { 
    name: "Thyroid", 
    category: "Metabolic", 
    desc: "Manage TSH levels without lifelong medications.",
    info: "Stimulates the thyroid gland to function properly and restore metabolic balance.",
    medicines: ["Thyroidinum", "Iodium", "Calcarea Carb"],
    usage: "Morning dose on empty stomach. Avoid caffeine for 1 hour after intake.",
    howToGet: "Order the Thyroid Management Kit through our online portal."
  },
  { 
    name: "Diabetes", 
    category: "Metabolic", 
    desc: "Auxiliary treatment to manage sugar levels effectively.",
    info: "Helps in preventing complications and managing glucose levels alongside regular regime.",
    medicines: ["Syzygium Jambolanum", "Gymnema", "Uranium Nit"],
    usage: "10 drops in water, 15 minutes before breakfast and dinner.",
    howToGet: "Add to your monthly wellness subscription."
  },
];

export default function DiseasesWeTreat() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDisease, setSelectedDisease] = useState<null | typeof diseases[0]>(null);

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDiseases.map((d, i) => (
            <motion.div
              key={d.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setSelectedDisease(d)}
              className="group glass p-8 rounded-[2.5rem] hover:bg-primary-green/5 border-transparent hover:border-primary-green/20 transition-all duration-500 cursor-pointer overflow-hidden relative shadow-sm hover:shadow-xl"
            >
              <div className="relative z-10">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary-green mb-2 block">{d.category}</span>
                <h4 className="text-2xl font-bold mb-4">{d.name}</h4>
                <p className="text-sm text-foreground/60 leading-relaxed mb-6">
                  {d.desc}
                </p>
                <div className="flex items-center space-x-2 text-sm font-bold text-primary-green group-hover:translate-x-2 transition-all">
                  <span>View Details</span>
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>
              
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary-green/5 rounded-full group-hover:scale-[3] transition-all duration-700" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Disease Detail Modal */}
      <AnimatePresence>
        {selectedDisease && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/40 backdrop-blur-md"
            onClick={() => setSelectedDisease(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-slate-900 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[3rem] shadow-2xl relative"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedDisease(null)}
                className="absolute top-8 right-8 p-2 bg-slate-100 dark:bg-slate-800 rounded-full hover:rotate-90 transition-all duration-300 z-10"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Left - Visual/Title */}
                <div className="bg-primary-green/5 p-12 flex flex-col justify-center">
                  <span className="text-primary-green font-bold uppercase tracking-widest text-xs mb-4">{selectedDisease.category}</span>
                  <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-slate-900 dark:text-white">{selectedDisease.name}</h2>
                  <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed italic border-l-4 border-primary-green pl-6">
                    "{selectedDisease.desc}"
                  </p>
                </div>

                {/* Right - Content */}
                <div className="p-8 md:p-12 space-y-8">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 text-primary-green font-bold">
                      <Info className="w-5 h-5" />
                      <span>About the Condition</span>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      {selectedDisease.info}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 text-primary-green font-bold">
                      <Pill className="w-5 h-5" />
                      <span>Related Medicines</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {selectedDisease.medicines.map((m) => (
                        <span key={m} className="bg-primary-green/10 text-primary-green px-4 py-2 rounded-full text-sm font-medium flex items-center">
                          <CheckCircle2 className="w-4 h-4 mr-2" />
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 text-primary-green font-bold">
                      <BookOpen className="w-5 h-5" />
                      <span>How to Use</span>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 italic">
                      {selectedDisease.usage}
                    </p>
                  </div>

                  <div className="bg-slate-50 dark:bg-slate-800/50 p-8 rounded-3xl space-y-4">
                    <div className="flex items-center space-x-3 text-primary-green font-bold">
                      <ShoppingBag className="w-5 h-5" />
                      <span>How to Get Medicine?</span>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {selectedDisease.howToGet}
                    </p>
                    <button 
                      onClick={() => {
                        setSelectedDisease(null);
                        window.location.href = "#appointment";
                      }}
                      className="w-full bg-primary-green text-white py-4 rounded-xl font-bold shadow-lg shadow-primary-green/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
                    >
                      Book Consultation Now
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
