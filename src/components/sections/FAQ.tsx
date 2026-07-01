"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const faqs = [
  { q: "Is homeopathy effective for chronic diseases?", a: "Yes, homeopathy is particularly effective for chronic conditions as it works on the root cause and builds immunity over time." },
  { q: "How long does the treatment take?", a: "Treatment time varies depending on the severity and duration of the illness. Acute cases show results within days, while chronic ones may take months." },
  { q: "Are there any side effects?", a: "Homeopathic medicines are highly diluted and safe. They do not have side effects when taken under professional guidance." },
  { q: "Can I take homeopathy with allopathic medicines?", a: "In most cases, yes. It is important to inform the doctor about all medications you are currently taking." },
  { q: "Is online consultation as effective as in-person?", a: "Absolutely. Homeopathy is based on symptoms and case history. Online consultation via video call allows us to capture all necessary details effectively." },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 px-6 bg-white/30" id="faqs">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-sm font-bold text-primary-blue uppercase tracking-widest">Common Questions</h2>
          <h3 className="text-4xl font-display font-bold">Frequently Asked <span className="text-primary-blue">Questions</span></h3>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="glass rounded-2xl overflow-hidden">
               <button 
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full p-6 text-left flex items-center justify-between font-bold text-lg hover:bg-primary-blue/5 transition-colors"
               >
                 <span>{faq.q}</span>
                 {openIndex === i ? <Minus className="text-primary-blue" /> : <Plus className="text-primary-blue" />}
               </button>
               <AnimatePresence>
                 {openIndex === i && (
                   <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                   >
                     <p className="p-6 pt-0 text-foreground/60 leading-relaxed border-t border-glass-border">
                       {faq.a}
                     </p>
                   </motion.div>
                 )}
               </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
