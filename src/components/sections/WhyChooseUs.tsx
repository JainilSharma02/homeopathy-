"use client";

import { motion } from "framer-motion";
import { Leaf, ShieldAlert, HeartHandshake, Banknote, Award, Home, Globe, Clock, CheckCircle2, Zap } from "lucide-react";

const reasons = [
  { icon: Leaf, title: "Natural Treatment", desc: "Pure homeopathic remedies derived from nature." },
  { icon: ShieldAlert, title: "No Side Effects", desc: "Safe for infants, pregnant women, and elderly." },
  { icon: HeartHandshake, title: "Personal Care", desc: "Individualized treatment for every patient." },
  { icon: Banknote, title: "Affordable Fees", desc: "Premium healthcare that fits your budget." },
  { icon: Award, title: "Certified Doctor", desc: "Years of specialized experience and research." },
  { icon: Home, title: "Modern Clinic", desc: "State-of-the-art facilities and hygiene." },
  { icon: Globe, title: "Online Consultation", desc: "Healing from the comfort of your home." },
  { icon: Clock, title: "Long Term Healing", desc: "Root cause elimination, not just symptoms." },
  { icon: Zap, title: "100% Safe", desc: "Non-addictive and non-toxic medicines." },
  { icon: CheckCircle2, title: "Proven Results", desc: "Thousands of successfully treated cases." },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 px-6 bg-premium-gradient relative overflow-hidden" id="about">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="text-sm font-bold text-primary-blue uppercase tracking-widest">Why Choose Us</h2>
          <h3 className="text-4xl lg:text-5xl font-display font-bold">A Tradition of <span className="text-primary-blue">Excellence</span> in Healing</h3>
          <p className="text-foreground/60 leading-relaxed">
            We combine classical homeopathy with modern diagnostic tools to provide the most effective treatment for your health concerns.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-[2rem] hover:scale-105 transition-all group hover:border-primary-blue/30"
            >
              <div className="w-14 h-14 bg-primary-blue/10 rounded-2xl flex items-center justify-center mb-6 text-primary-blue group-hover:bg-primary-blue group-hover:text-white transition-colors duration-500">
                <reason.icon className="w-7 h-7" />
              </div>
              <h4 className="text-lg font-bold mb-3">{reason.title}</h4>
              <p className="text-sm text-foreground/50 leading-relaxed">
                {reason.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
