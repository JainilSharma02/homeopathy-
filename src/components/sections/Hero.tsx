"use client";

import { motion } from "framer-motion";
import { Phone, Calendar, ArrowRight, Star, ShieldCheck, Users, Activity } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden">
      {/* Background decoration - Smooth CSS Orbs */}
      <div className="absolute top-[10%] -right-20 w-[500px] h-[500px] bg-primary-blue/10 rounded-full blur-[120px] animate-pulse -z-10" />
      <div className="absolute bottom-[10%] -left-20 w-[500px] h-[500px] bg-primary-green/10 rounded-full blur-[120px] animate-pulse -z-10 delay-700" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-gold/5 rounded-full blur-[150px] -z-10" />

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass border-primary-blue/10 text-primary-blue text-sm font-semibold"
          >
            <Star className="w-4 h-4 fill-primary-blue" />
            <span>15+ Years of Healing Excellence</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl lg:text-7xl font-display font-bold leading-tight"
          >
            Experience the <span className="text-primary-blue">Natural Way</span> of <span className="text-accent-gold italic">Holistic Healing</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-foreground/70 max-w-lg leading-relaxed"
          >
            Trust Dr. Samuel Hahnemann's (Homeopathy) legacy with a modern clinical approach. 
            Safe, gentle, and effective treatments for all chronic and acute diseases without side effects.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button className="flex items-center justify-center space-x-2 bg-primary-blue text-white px-8 py-4 rounded-2xl font-semibold shadow-xl shadow-primary-blue/20 hover:scale-105 transition-transform group">
              <Calendar className="w-5 h-5" />
              <span>Book Appointment</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="flex items-center justify-center space-x-2 glass px-8 py-4 rounded-2xl font-semibold hover:bg-white/50 transition-colors">
              <Phone className="w-5 h-5 text-primary-blue" />
              <span>Free Consultation</span>
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-glass-border"
          >
            <div className="space-y-1">
              <div className="text-2xl font-bold text-primary-blue">20k+</div>
              <div className="text-xs text-foreground/50 uppercase tracking-wider font-semibold">Patients</div>
            </div>
            <div className="space-y-1">
              <div className="text-2xl font-bold text-primary-green">98%</div>
              <div className="text-xs text-foreground/50 uppercase tracking-wider font-semibold">Success</div>
            </div>
            <div className="space-y-1">
              <div className="text-2xl font-bold text-accent-gold">5000+</div>
              <div className="text-xs text-foreground/50 uppercase tracking-wider font-semibold">Cures</div>
            </div>
            <div className="space-y-1">
              <div className="text-2xl font-bold text-slate-400">15+</div>
              <div className="text-xs text-foreground/50 uppercase tracking-wider font-semibold">Awards</div>
            </div>
          </motion.div>
        </div>

        {/* Right Content - Visual Placeholder for Doctor Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center items-center"
        >
          <div className="relative w-full max-w-[500px] aspect-square rounded-[3rem] overflow-hidden shadow-2xl animate-float">
             {/* Using an placeholder for now since I can't generate images yet in this turn */}
            <img 
              src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Premium Doctor" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-blue/40 to-transparent" />
            
            {/* Overlay Cards */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute bottom-10 -left-6 glass p-4 rounded-2xl flex items-center space-x-3 shadow-xl"
            >
              <div className="bg-primary-green/20 p-2 rounded-lg">
                <ShieldCheck className="text-primary-green" />
              </div>
              <div>
                <div className="text-sm font-bold">Safe Treatment</div>
                <div className="text-xs text-foreground/60">100% Certified</div>
              </div>
            </motion.div>

            <motion.div
               animate={{ y: [0, 10, 0] }}
               transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
              className="absolute top-10 -right-6 glass p-4 rounded-2xl flex items-center space-x-3 shadow-xl"
            >
              <div className="bg-accent-gold/20 p-2 rounded-lg">
                <Activity className="text-accent-gold" />
              </div>
              <div>
                <div className="text-sm font-bold">Active Care</div>
                <div className="text-xs text-foreground/60">24/7 Support</div>
              </div>
            </motion.div>
          </div>
          
          {/* Decorative Circles */}
          <div className="absolute -z-10 w-[110%] h-[110%] border border-primary-blue/10 rounded-full animate-[spin_20s_linear_infinite]" />
          <div className="absolute -z-10 w-[120%] h-[120%] border border-primary-green/10 rounded-full animate-[spin_30s_linear_infinite_reverse]" />
        </motion.div>
      </div>
    </section>
  );
}
