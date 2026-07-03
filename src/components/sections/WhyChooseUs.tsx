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
  const highlights = [
    { icon: Leaf, title: "100% Natural", desc: "Pure botanical & mineral extracts for gentle healing." },
    { icon: ShieldAlert, title: "Zero Dependency", desc: "No lifelong medication. We heal the root cause permanently." },
    { icon: Award, title: "Expert Diagnosis", desc: "Clinical excellence with 15+ years of successful cases." },
  ];

  const gridItems = [
    { icon: HeartHandshake, title: "Personalized Care", desc: "One patient, one specific remedy." },
    { icon: Globe, title: "Global Reach", desc: "Serving patients across 12 countries." },
    { icon: Zap, title: "Safe for All", desc: "Safe for infants to seniors." },
    { icon: Banknote, title: "Transparent Pricing", desc: "Affordable premium healthcare." },
  ];

  return (
    <section className="py-24 px-6 relative overflow-hidden" id="about">
      {/* Background soft glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#38bdf805_0%,transparent_70%)] -z-10" />
      
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Left: The Legacy Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-2/5 space-y-8"
          >
            <div className="space-y-4">
              <span className="text-xs font-black uppercase tracking-[0.3em] text-primary-blue bg-primary-blue/10 px-4 py-1.5 rounded-full">
                Our Philosophy
              </span>
              <h3 className="text-4xl md:text-5xl font-display font-bold leading-tight text-slate-900">
                A Tradition of <span className="text-primary-blue">Trust &amp; Results</span>
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                Since 2009, we've pioneered a holistic approach that bridges ancient wisdom with modern research. We don't just treat symptoms; we restore your vitality.
              </p>
            </div>

            <div className="space-y-6">
              {highlights.map((h, i) => (
                <div key={i} className="flex items-start space-x-5 group">
                  <div className="mt-1 w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-lg border border-slate-100 group-hover:scale-110 transition-transform duration-300">
                    <h.icon className="w-5 h-5 text-primary-blue" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800">{h.title}</h4>
                    <p className="text-sm text-slate-500">{h.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: The Modern Advantage Grid */}
          <div className="lg:w-3/5 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {gridItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/40 backdrop-blur-sm p-8 rounded-[2.5rem] border border-white hover:border-primary-blue/30 hover:bg-white hover:shadow-xl transition-all duration-500 group"
                >
                  <div className="w-12 h-12 bg-primary-blue/5 rounded-xl flex items-center justify-center mb-6 text-primary-blue group-hover:bg-primary-blue group-hover:text-white transition-all duration-300">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-slate-800">{item.title}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
              
              {/* Stats Highlight Box */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="sm:col-span-2 bg-slate-900 rounded-[2.5rem] p-10 text-white relative overflow-hidden group shadow-2xl"
              >
                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                  <div className="text-center md:text-left">
                    <h4 className="text-3xl font-bold mb-1">98% Success Rate</h4>
                    <p className="text-white/60 text-sm">In chronic autoimmune &amp; lifestyle cases.</p>
                  </div>
                  <div className="h-12 w-px bg-white/10 hidden md:block" />
                  <div className="text-center md:text-left">
                    <h4 className="text-3xl font-bold mb-1">20,000+</h4>
                    <p className="text-white/60 text-sm">Consultations since 2009.</p>
                  </div>
                  <button 
                    onClick={() => window.location.href="#contact"}
                    className="bg-primary-blue text-white px-8 py-4 rounded-2xl font-bold hover:scale-105 active:scale-95 transition-all shadow-xl shadow-primary-blue/20"
                  >
                    Experience Excellence
                  </button>
                </div>
                {/* Glossy overlay */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary-blue opacity-10 rounded-full blur-[80px] -z-1" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
