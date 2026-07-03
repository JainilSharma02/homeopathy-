"use client";

import { motion } from "framer-motion";
import { Phone, Calendar, ArrowRight, Star, ShieldCheck, Users, Activity } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 px-6 overflow-hidden" id="home">
      {/* Background decoration - Smooth CSS Orbs */}
      <div className="absolute top-[10%] -right-20 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-primary-blue/10 rounded-full blur-[80px] md:blur-[120px] animate-pulse -z-10" />
      <div className="absolute bottom-[10%] -left-20 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-primary-green/10 rounded-full blur-[80px] md:blur-[120px] animate-pulse -z-10 delay-700" />

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-10 text-center lg:text-left">
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-white/50 backdrop-blur-md border border-slate-100 text-primary-green text-sm font-bold shadow-sm"
            >
              <Star className="w-4 h-4 fill-primary-green" />
              <span>15+ Years of Clinical Excellence</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-7xl font-display font-bold leading-[1.1] text-slate-900"
            >
              Advanced <span className="text-primary-green">Homeopathy</span> for <span className="relative">
                Permanent
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-primary-green/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 25 0 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="4" />
                </svg>
              </span> Cure
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-lg md:text-xl text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              Trust the legacy of Dr. Samuel Hahnemann with a modern touch. 
              Safe, gentle, and effective treatments for chronic and acute diseases.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5"
          >
            <button 
              onClick={() => window.location.href="#appointment"}
              className="w-full sm:w-auto flex items-center justify-center space-x-3 bg-primary-green text-white px-10 py-5 rounded-[2rem] font-bold text-lg shadow-2xl shadow-primary-green/20 hover:scale-105 active:scale-95 transition-all group"
            >
              <span>Consult Now</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => window.location.href="tel:+919876543210"}
              className="w-full sm:w-auto flex items-center justify-center space-x-3 bg-white border border-slate-100 px-10 py-5 rounded-[2rem] font-bold text-lg hover:bg-slate-50 transition-colors shadow-sm"
            >
              <Phone className="w-5 h-5 text-primary-green" />
              <span>Call Specialist</span>
            </button>
          </motion.div>
        </div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center items-center"
        >
          <div className="relative w-full max-w-[480px] aspect-[4/5] rounded-[3.5rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(45,106,79,0.2)]">
            <img 
              src="https://images.unsplash.com/photo-1559839734-2b71f1536783?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Expert Doctor" 
              className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
            
            {/* Glossy Overlay Cards - Hidden on very small mobile for focus */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-10 -left-4 md:-left-8 glass p-5 rounded-3xl flex items-center space-x-4 shadow-2xl border-white/50"
            >
              <div className="bg-primary-green/10 p-3 rounded-2xl">
                <ShieldCheck className="text-primary-green w-6 h-6" />
              </div>
              <div>
                <div className="text-sm font-black text-slate-900">Certified Cure</div>
                <div className="text-[10px] uppercase font-bold tracking-widest text-primary-green">100% Side-effect free</div>
              </div>
            </motion.div>

            <motion.div
               animate={{ y: [0, 10, 0] }}
               transition={{ duration: 5, repeat: Infinity, delay: 0.5, ease: "easeInOut" }}
               className="absolute top-10 -right-4 md:-right-8 glass p-5 rounded-3xl flex items-center space-x-4 shadow-2xl border-white/50"
            >
              <div className="bg-blue-500/10 p-3 rounded-2xl">
                <Activity className="text-blue-500 w-6 h-6" />
              </div>
              <div>
                <div className="text-sm font-black text-slate-900">Patient Centered</div>
                <div className="text-[10px] uppercase font-bold tracking-widest text-blue-500">Holistic Care</div>
              </div>
            </motion.div>
          </div>
          
          {/* Decorative Elements - Hidden on small mobile to save GPU */}
          <div className="hidden sm:block absolute -z-10 w-[110%] h-[110%] border border-primary-green/10 rounded-full animate-[spin_30s_linear_infinite]" />
          <div className="hidden sm:block absolute -z-10 w-[120%] h-[120%] border border-primary-blue/5 rounded-full animate-[spin_40s_linear_infinite_reverse]" />
        </motion.div>
      </div>
    </section>
  );
}
