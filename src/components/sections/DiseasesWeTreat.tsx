"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Search, ChevronRight, X, Info, Pill, BookOpen, ShoppingBag, CheckCircle2, Calendar } from "lucide-react";
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
  const [selectedDisease, setSelectedDisease] = useState<null | typeof diseases[0]>(null);
  const [visibleCount, setVisibleCount] = useState(9);

  const filteredDiseases = diseases.filter(d =>
    d.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    d.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    d.desc.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const isSearching = searchTerm !== "";
  const displayedDiseases = isSearching ? filteredDiseases : filteredDiseases.slice(0, visibleCount);

  return (
    <section className="py-16 px-4 md:px-6 relative overflow-hidden" id="diseases">
      {/* Dynamic Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-green/3 rounded-full blur-[150px] -z-10" />
      
      <div className="container mx-auto">
        {/* 'Hatke' Search Focus */}
        <div className="max-w-2xl mx-auto mb-16 relative">
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 flex items-center space-x-2 text-[10px] font-black uppercase tracking-[0.3em] text-primary-green/60 whitespace-nowrap">
            <BookOpen className="w-3 h-3 animate-pulse" />
            <span>Search 100+ Homeopathic Treatments</span>
          </div>
          
          <div className="relative group">
            <div className="absolute inset-0 bg-primary-green/20 blur-[100px] rounded-full opacity-30 group-focus-within:opacity-60 transition-all duration-700 -z-10" />
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-primary-green w-6 h-6 z-10" />
            <input
              type="text"
              placeholder="What can we help you with?"
              value={searchTerm}
              onChange={(e) => { setSearchTerm(e.target.value); setVisibleCount(9); }}
              className="w-full bg-white/40 backdrop-blur-xl border border-white/50 focus:border-primary-green/50 rounded-full py-6 md:py-8 pl-16 pr-14 text-xl md:text-2xl font-display font-bold text-slate-800 placeholder:text-slate-300 focus:outline-none transition-all shadow-2xl relative z-1"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute right-6 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-slate-900 text-white rounded-full hover:scale-110 transition-all z-10 shadow-lg"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
          
          <AnimatePresence>
            {!isSearching && (
               <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex flex-wrap justify-center gap-3 mt-8"
               >
                 <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-2">Discovery:</span>
                 {["Diabetes", "PCOS", "Skin Allergy", "Anxiety", "Migraine"].map((tag, idx) => (
                   <motion.button 
                    key={tag}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.05 }}
                    onClick={() => setSearchTerm(tag)}
                    className="bg-white/80 hover:bg-primary-green text-slate-600 hover:text-white text-[11px] font-black px-5 py-2 rounded-xl transition-all border border-slate-100 shadow-sm"
                   >
                     {tag}
                   </motion.button>
                 ))}
               </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Dynamic Result Counter */}
        <AnimatePresence mode="wait">
          {isSearching && (
            <motion.div 
              key="counter"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="text-center mb-10"
            >
              <span className="bg-primary-green text-white text-[10px] font-black px-6 py-2 rounded-full tracking-[0.2em] shadow-xl shadow-primary-green/30">
                {filteredDiseases.length} RELEVANT RESULTS FOUND
              </span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Diseases Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {displayedDiseases.length > 0 ? (
            displayedDiseases.map((d, i) => (
              <motion.div
                key={d.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                onClick={() => setSelectedDisease(d)}
                className="group relative bg-white/60 backdrop-blur-sm rounded-[2rem] p-5 md:p-8 cursor-pointer border border-white/80 hover:border-primary-green/30 hover:bg-white hover:shadow-[0_20px_50px_-20px_rgba(45,106,79,0.15)] transition-all duration-500"
              >
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all">
                  <div className="bg-primary-green/10 p-2 rounded-full">
                    <Info className="w-4 h-4 text-primary-green" />
                  </div>
                </div>

                <div className="space-y-1 md:space-y-3">
                  <div className="inline-block bg-slate-100 text-[8px] md:text-[9px] font-black text-slate-400 px-3 py-1 rounded-full uppercase tracking-widest group-hover:bg-primary-green/10 group-hover:text-primary-green transition-colors">
                    {d.category}
                  </div>
                  <h4 className="text-base md:text-2xl font-bold text-slate-800 leading-tight group-hover:text-primary-green transition-colors">
                    {d.name}
                  </h4>
                  <p className="hidden md:block text-sm text-slate-500 leading-relaxed line-clamp-2">
                    {d.desc}
                  </p>
                  
                  <div className="flex items-center space-x-2 pt-2 text-[10px] md:text-sm font-bold text-primary-green group-hover:space-x-4 transition-all">
                    <span>Clinical Profile</span>
                    <ChevronRight className="w-3 h-3 md:w-4 md:h-4" />
                  </div>
                </div>

                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary-green/5 rounded-full group-hover:scale-150 transition-transform duration-700 -z-10" />
              </motion.div>
            ))
          ) : (
            <div className="col-span-full py-24 text-center">
              <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-8 h-8 text-slate-300" />
              </div>
              <h4 className="text-2xl font-bold text-slate-700">No matching library entries</h4>
              <p className="text-slate-400 mt-2">Try searching specifically for symptoms like "headache" or "itchy skin".</p>
            </div>
          )}
        </div>

        {/* Show More */}
        {!isSearching && visibleCount < filteredDiseases.length && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setVisibleCount(prev => prev + 9)}
              className="px-12 py-5 bg-slate-900 text-white font-bold rounded-[1.5rem] hover:bg-primary-green shadow-xl shadow-slate-900/10 transition-all active:scale-95 flex items-center space-x-3"
            >
              <span>Explore More Conditions</span>
              <BookOpen className="w-5 h-5" />
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
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={() => {
                        // Store Enquiry in Local Database
                        const enquiry = {
                          type: "Disease Enquiry",
                          disease: selectedDisease.name,
                          timestamp: new Date().toISOString(),
                          status: "Interested"
                        };
                        const existingEnquiries = JSON.parse(localStorage.getItem("clinic_enquiries") || "[]");
                        localStorage.setItem("clinic_enquiries", JSON.stringify([...existingEnquiries, enquiry]));
                        
                        console.log("Enquiry Saved:", enquiry);
                        
                        setSelectedDisease(null);
                        setTimeout(() => {
                          const element = document.getElementById('appointment');
                          if (element) {
                            element.scrollIntoView({ behavior: 'smooth' });
                          }
                        }, 100);
                      }}
                      className="flex-1 bg-primary-green text-white py-4 rounded-2xl font-bold text-sm md:text-base shadow-xl shadow-primary-green/20 hover:scale-[1.02] active:scale-[0.97] transition-all flex items-center justify-center space-x-2"
                    >
                      <Calendar className="w-5 h-5" />
                      <span>Book Appointment</span>
                    </button>
                    
                    <a
                      href={`https://wa.me/919876543210?text=Hello%20Dr.%20Hahnemann,%20I'd%20like%20to%20know%20more%20about%20treatment%20for%20*${encodeURIComponent(selectedDisease.name)}*.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-green-500 text-white py-4 rounded-2xl font-bold text-sm md:text-base shadow-xl shadow-green-500/20 hover:scale-[1.02] active:scale-[0.97] transition-all flex items-center justify-center space-x-2"
                    >
                      <MessageCircle className="w-5 h-5" />
                      <span>Chat WhatsApp</span>
                    </a>
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
