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
  {
    name: "Arthritis",
    category: "Joints",
    desc: "Reduce inflammation and regain joint mobility.",
    info: "Homeopathy offers effective management for Rheumatoid and Osteoarthritis by reducing swelling and pain.",
    medicines: ["Rhus Tox", "Bryonia Alba", "Ledum Pal"],
    usage: "4 pills thrice a day. Use warm compresses along with medication.",
    howToGet: "Consult for a specialized Joint Care protocol."
  },
  {
    name: "Asthma",
    category: "Respiratory",
    desc: "Improve lung capacity and reduce allergic response.",
    info: "Focuses on strengthening the respiratory system and reducing the hypersensitivity to allergens.",
    medicines: ["Arsenic Album", "Antim Tart", "Blatta Orientalis"],
    usage: "5 drops in 1/4 cup of water every morning. Use inhaler only if absolutely necessary.",
    howToGet: "Available through our Pulmonary Wellness program."
  },
  {
    name: "Anxiety",
    category: "Mental Health",
    desc: "Gentle healing for stress, panic, and depression.",
    info: "Addresses the emotional and physical symptoms of anxiety without any addictive side effects.",
    medicines: ["Aconitum", "Argentum Nitricum", "Ignatia"],
    usage: "Take 4 pills when feeling restless. Max 4 times a day.",
    howToGet: "Personalized Mind-Body healing kits available."
  },
  {
    name: "Acidity",
    category: "Gastric",
    desc: "Cure heartburn, bloating, and GERD permanently.",
    info: "Neutralizes excess acid and improves digestion to prevent recurring gastric issues.",
    medicines: ["Nux Vomica", "Carbo Veg", "Robinia"],
    usage: "4 pills after meals or during acute burning sensation.",
    howToGet: "Gastric Care Pack available at our pharmacy."
  },
  {
    name: "Kidney Stones",
    category: "Renal",
    desc: "Dissolve and flush stones without any surgery.",
    info: "Clears crystal deposits and prevents stone formation by balancing mineral levels.",
    medicines: ["Berberis Vulgaris", "Lycopodium", "Sarsaparilla"],
    usage: "15 drops in half a cup of water, 3 times a day. Drink 4L of water daily.",
    howToGet: "Renal Detox kit ready for dispatch."
  },
  {
    name: "Sinusitis",
    category: "Respiratory",
    desc: "Treat chronic sinus congestion and headaches.",
    info: "Reduces inflammation of the sinus cavities and drains mucus naturally.",
    medicines: ["Kali Bich", "Silicea", "Pulsatilla"],
    usage: "4 pills 4 times a day for 2 weeks. Steam inhalation recommended.",
    howToGet: "Sinus Relief kit available online."
  },
  {
    name: "Insomnia",
    category: "Mental Health",
    desc: "Natural solution for deep and restful sleep.",
    info: "Calms the mind and regulates the sleep cycle without morning grogginess.",
    medicines: ["Coffea Cruda", "Passiflora", "Kali Phos"],
    usage: "Take 10 drops in water 30 mins before bedtime.",
    howToGet: "Sleep Well kits available now."
  },
  {
    name: "Acne/Pimples",
    category: "Dermatology",
    desc: "Clear skin for teens and adults naturally.",
    info: "Treats hormonal triggers and skin toxicity to provide lasting clear skin.",
    medicines: ["Berberis Aqui", "Kali Brom", "Pulsatilla"],
    usage: "Apply external lotion plus take 4 pills twice daily.",
    howToGet: "Order the ClearSkin Duo from our store."
  },
  {
    name: "Back Pain",
    category: "Chronic Pain",
    desc: "Relief from sciatica, slip disc, and muscle strain.",
    info: "Strengthens the spinal column and reduces nerve inflammation.",
    medicines: ["Hypericum", "Colocynthis", "Mag Phos"],
    usage: "4 pills thrice a day. Local application of Arnica oil suggested.",
    howToGet: "Back Relief specialized protocol."
  },
  {
    name: "Eczema",
    category: "Dermatology",
    desc: "Stop itching and heal sensitive skin patches.",
    info: "Deep-acting remedies that stop the inflammatory cycle of the skin.",
    medicines: ["Graphites", "Mezereum", "Petroleum"],
    usage: "Take 4 pills daily. Keep skin hydrated with natural oils.",
    howToGet: "Dermacare healing kit."
  },
  {
    name: "Tonsillitis",
    category: "Respiratory",
    desc: "Treat recurring throat infections in children.",
    info: "Boosts throat immunity and reduces swelling of tonsils without surgery.",
    medicines: ["Baryta Carb", "Belladonna", "Hepar Sulph"],
    usage: "4 pills 3 times a day. Gargle with warm salt water.",
    howToGet: "Pediatric immunity booster pack."
  },
  {
    name: "Piles/Hemorrhoids",
    category: "Gastric",
    desc: "Effective non-surgical cure for pain and bleeding.",
    info: "Improves venous circulation and eases bowel movements to heal piles.",
    medicines: ["Aesculus", "Hamamelis", "Nux Vomica"],
    usage: "4 pills twice daily. High fiber diet is essential.",
    howToGet: "Gastric Relief specialized kit."
  },
  {
    name: "Weight Loss",
    category: "Metabolic",
    desc: "Boost metabolism and burn fat naturally.",
    info: "Targets thyroid and pituitary functions to help in natural weight management.",
    medicines: ["Phytolacca Berry", "Fucus Ves", "Calcarea Carb"],
    usage: "10 drops in luke warm water twice a day.",
    howToGet: "Order the Metabolic Burn kit."
  },
  {
    name: "Liver Problems",
    category: "Gastric",
    desc: "Heal fatty liver and improve appetite.",
    info: "Liver tonics that stimulate cell regeneration and detoxification.",
    medicines: ["Chelidonium", "Carduus Mar", "Lycopodium"],
    usage: "10 drops in water twice daily after meals.",
    howToGet: "Liver Detox essence available."
  },
  {
    name: "Uric Acid/Gout",
    category: "Metabolic",
    desc: "Lower uric acid levels and heal joint pain.",
    info: "Helps the kidneys flush out excess uric acid efficiently.",
    medicines: ["Urtica Urens", "Colchicum", "Lithium Carb"],
    usage: "15 drops in 1/2 cup water twice a day.",
    howToGet: "Uric Acid management protocol."
  },
  {
    name: "Erectile Dysfunction",
    category: "Men's Health",
    desc: "Restore vitality and confidence naturally.",
    info: "Addresses psychological and physiological factors for lasting improvement.",
    medicines: ["Selenium", "Agnus Castus", "Lycopodium"],
    usage: "Take 4 pills daily at night. Results visible in 3-4 weeks.",
    howToGet: "Men's Wellness premium kit."
  },
  {
    name: "Menopause",
    category: "Women's Health",
    desc: "Manage hot flashes and mood swings.",
    info: "Natural hormone replacement therapy through bio-identical remedies.",
    medicines: ["Lachesis", "Sepia", "Amyl Nitrosum"],
    usage: "4 pills whenever hot flashes occur. Max 4 doses.",
    howToGet: "Zen Women's Harmony pack."
  },
  {
    name: "Urinary Tract Infection",
    category: "Renal",
    desc: "Quick relief from burning and frequency.",
    info: "Natural antiseptics that clear bacterial load from the bladder.",
    medicines: ["Cantharis", "Staphysagria", "Apis Mell"],
    usage: "5 drops every 2 hours in acute cases.",
    howToGet: "UTI fast-relief kit."
  },
  {
    name: "Common Cold/Flu",
    category: "Respiratory",
    desc: "Strengthen immunity against seasonal changes.",
    info: "Cuts down recovery time and prevents secondary infections.",
    medicines: ["Allium Cepa", "Gelsemium", "Eupatorium"],
    usage: "4 pills every 3 hours during fever/sneezing.",
    howToGet: "Home First-Aid seasonal kit."
  }
];

export default function DiseasesWeTreat() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedDisease, setSelectedDisease] = useState<null | typeof diseases[0]>(null);
  const [visibleCount, setVisibleCount] = useState(6);

  const categories = ["All", ...Array.from(new Set(diseases.map(d => d.category)))];

  const filteredDiseases = diseases.filter(d => {
    const matchesSearch = d.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         d.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || d.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const isBrowsing = searchTerm === "" && selectedCategory === "All";
  const displayedDiseases = isBrowsing ? filteredDiseases.slice(0, visibleCount) : filteredDiseases;

  return (
    <section className="py-24 px-4 md:px-6 relative overflow-hidden" id="diseases">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-green/5 rounded-full blur-[100px] -z-10 translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary-green/5 rounded-full blur-[100px] -z-10 -translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-12 text-center lg:text-left">
          <div className="space-y-4">
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-xs md:text-sm font-bold text-primary-green uppercase tracking-widest"
            >
              Medical Encyclopedia
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-display font-bold leading-tight"
            >
              Explore Our <span className="text-primary-green">Expertise</span>
            </motion.h3>
          </div>
          
          <div className="relative group max-w-md w-full mx-auto lg:mx-0">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-foreground/30 group-focus-within:text-primary-green transition-colors w-5 h-5" />
            <input 
              type="text" 
              placeholder="Search 100+ conditions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white/80 border border-slate-200 rounded-full md:rounded-[2rem] py-4 md:py-5 pl-14 pr-8 focus:outline-none focus:ring-4 focus:ring-primary-green/10 transition-all font-medium text-slate-700 placeholder:text-slate-400"
            />
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex overflow-x-auto pb-4 mb-10 gap-2 no-scrollbar -mx-4 px-4 scroll-smooth">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setVisibleCount(6);
              }}
              className={`whitespace-nowrap px-6 py-2.5 rounded-xl font-bold transition-all duration-300 border text-sm ${
                selectedCategory === cat 
                ? "bg-primary-green text-white border-primary-green shadow-lg shadow-primary-green/20" 
                : "bg-white text-slate-500 border-slate-100 hover:border-primary-green/30"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8">
          {displayedDiseases.length > 0 ? (
            displayedDiseases.map((d, i) => (
            <motion.div
              key={d.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              onClick={() => setSelectedDisease(d)}
              className="group glass p-4 md:p-8 rounded-[1.5rem] md:rounded-[2.5rem] hover:bg-primary-green/5 border-transparent hover:border-primary-green/20 transition-all duration-500 cursor-pointer overflow-hidden relative shadow-sm hover:shadow-xl"
            >
              <div className="relative z-10">
                <span className="text-[8px] md:text-[10px] font-bold uppercase tracking-widest text-primary-green mb-1 md:mb-2 block">{d.category}</span>
                <h4 className="text-base md:text-2xl font-bold mb-1 md:mb-4 group-hover:text-primary-green transition-colors leading-tight">{d.name}</h4>
                <p className="hidden md:block text-sm text-foreground/60 leading-relaxed mb-6 line-clamp-2">
                  {d.desc}
                </p>
                <div className="flex items-center space-x-1 md:space-x-2 text-[10px] md:text-sm font-bold text-primary-green group-hover:translate-x-1 md:group-hover:translate-x-2 transition-all">
                  <span>Details</span>
                  <ChevronRight className="w-3 h-3 md:w-4 md:h-4" />
                </div>
              </div>
              
              <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-primary-green/5 rounded-full group-hover:scale-[3] transition-all duration-700" />
            </motion.div>
          ))
          ) : (
            <div className="col-span-full py-20 text-center space-y-4">
              <div className="bg-slate-50 dark:bg-slate-800/50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-8 h-8 text-slate-300" />
              </div>
              <h4 className="text-xl font-bold text-slate-700 dark:text-slate-200">No conditions found</h4>
              <p className="text-slate-500 max-w-xs mx-auto px-6">We couldn't find matches for "{searchTerm}". Try another term.</p>
            </div>
          )}
        </div>

        {isBrowsing && visibleCount < filteredDiseases.length && (
          <div className="flex justify-center mt-16">
            <button 
              onClick={() => setVisibleCount(prev => prev + 9)}
              className="bg-white border border-slate-200 text-slate-900 px-10 py-4 rounded-2xl font-bold shadow-sm hover:shadow-md hover:bg-slate-50 transition-all active:scale-95"
            >
              Show More Diseases
            </button>
          </div>
        )}
      </div>

      {/* Disease Detail Modal - Bottom Sheet on Mobile */}
      <AnimatePresence>
        {selectedDisease && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-end md:items-center justify-center md:p-8 bg-black/50 backdrop-blur-sm"
            onClick={() => setSelectedDisease(null)}
          >
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white w-full md:max-w-4xl md:max-h-[90vh] h-[95vh] md:h-auto overflow-y-auto rounded-t-[2.5rem] md:rounded-[3rem] shadow-2xl relative"
            >
              {/* Drag Handle (mobile) */}
              <div className="flex justify-center pt-4 pb-2 md:hidden">
                <div className="w-12 h-1.5 bg-slate-200 rounded-full" />
              </div>

              {/* Close Button */}
              <button
                onClick={() => setSelectedDisease(null)}
                className="absolute top-4 md:top-8 right-5 md:right-8 p-2.5 bg-slate-100 rounded-full hover:rotate-90 transition-all duration-300 z-10"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Header strip */}
              <div className="bg-gradient-to-r from-primary-green/10 to-primary-green/5 px-6 md:px-12 pt-4 md:pt-12 pb-6 md:pb-10">
                <span className="text-primary-green font-bold uppercase tracking-widest text-[10px] md:text-xs block mb-2">
                  {selectedDisease.category}
                </span>
                <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-3">
                  {selectedDisease.name}
                </h2>
                <p className="text-sm md:text-base text-slate-600 leading-relaxed border-l-4 border-primary-green pl-4 italic">
                  {selectedDisease.desc}
                </p>
              </div>

              {/* Content */}
              <div className="px-6 md:px-12 py-6 md:py-10 space-y-6">
                {/* About */}
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-primary-green font-bold text-sm md:text-base">
                    <Info className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
                    <span>About This Condition</span>
                  </div>
                  <p className="text-sm md:text-base text-slate-600 leading-relaxed pl-6">
                    {selectedDisease.info}
                  </p>
                </div>

                {/* Medicines */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 text-primary-green font-bold text-sm md:text-base">
                    <Pill className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
                    <span>Recommended Medicines</span>
                  </div>
                  <div className="flex flex-wrap gap-2 pl-6">
                    {selectedDisease.medicines.map((m) => (
                      <span key={m} className="bg-primary-green/10 text-primary-green px-3 py-1.5 rounded-full text-xs md:text-sm font-semibold flex items-center gap-1.5">
                        <CheckCircle2 className="w-3 h-3 md:w-4 md:h-4" />
                        {m}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Usage */}
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-primary-green font-bold text-sm md:text-base">
                    <BookOpen className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
                    <span>How to Use</span>
                  </div>
                  <p className="text-sm md:text-base text-slate-600 italic leading-relaxed pl-6">
                    {selectedDisease.usage}
                  </p>
                </div>

                {/* Get Medicine CTA */}
                <div className="bg-slate-50 rounded-2xl p-5 md:p-8 space-y-4">
                  <div className="flex items-center space-x-2 text-primary-green font-bold text-sm md:text-base">
                    <ShoppingBag className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
                    <span>How to Get Medicine?</span>
                  </div>
                  <p className="text-sm text-slate-600 pl-6">
                    {selectedDisease.howToGet}
                  </p>
                  <button
                    onClick={() => {
                      setSelectedDisease(null);
                      window.location.href = "#appointment";
                    }}
                    className="w-full bg-primary-green text-white py-4 rounded-2xl font-bold text-base shadow-xl shadow-primary-green/20 hover:scale-[1.02] active:scale-[0.97] transition-all"
                  >
                    📅 Book Consultation Now
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
