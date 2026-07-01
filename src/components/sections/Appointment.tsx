"use client";

import { motion } from "framer-motion";
import { User, Phone, Mail, MessageSquare, Calendar, Clock, Stethoscope, ArrowRight, CheckCircle } from "lucide-react";
import { useState } from "react";
import confetti from "canvas-confetti";

export default function Appointment() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#0f4c81', '#2d6a4f', '#c5a059']
    });
  };

  return (
    <section className="py-24 px-6 relative overflow-hidden" id="contact">
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_30%,#38bdf80d_0%,transparent_50%)] -z-10" />
      
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-sm font-bold text-accent-gold uppercase tracking-widest">Connect With Us</h2>
              <h3 className="text-4xl lg:text-5xl font-display font-bold leading-tight">Start Your Journey Towards <span className="text-accent-gold">Life-long</span> Health</h3>
              <p className="text-foreground/60 leading-relaxed text-lg">
                Book a consultation with Dr. J.S. Hahnemann today. We offer both In-clinic and Online Video consultations globally.
              </p>
            </div>

            <div className="space-y-6">
               {[
                 { icon: CheckCircle, text: "Complimentary Initial screening" },
                 { icon: CheckCircle, text: "No dependency on medicines" },
                 { icon: CheckCircle, text: "Privacy and Confidentiality" },
                 { icon: CheckCircle, text: "24/7 WhatsApp Support for patients" }
               ].map((item, i) => (
                 <div key={i} className="flex items-center space-x-3">
                   <div className="bg-accent-gold/10 p-1 rounded-full">
                     <item.icon className="w-5 h-5 text-accent-gold" />
                   </div>
                   <span className="font-medium">{item.text}</span>
                 </div>
               ))}
            </div>

            <div className="glass p-8 rounded-[2rem] border-accent-gold/20">
               <div className="flex items-center space-x-4">
                 <div className="w-16 h-16 rounded-2xl bg-primary-blue flex items-center justify-center text-white font-bold text-2xl">JS</div>
                 <div>
                   <div className="font-bold text-xl">Dr. J.S. Hahnemann</div>
                   <div className="text-sm text-foreground/50">MD Homeopathy, AIIMS (Ex)</div>
                   <div className="text-accent-gold text-sm font-bold mt-1">Available Today: 10AM - 8PM</div>
                 </div>
               </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-10 rounded-[3rem] relative"
          >
            {isSubmitted ? (
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center py-20 space-y-6"
              >
                <div className="w-20 h-20 bg-primary-green/20 text-primary-green rounded-full flex items-center justify-center mx-auto mb-4">
                   <CheckCircle className="w-10 h-10" />
                </div>
                <h4 className="text-3xl font-display font-bold">Appointment Requested!</h4>
                <p className="text-foreground/60">
                  Thank you for reaching out. Our medical coordinator will contact you via WhatsApp within 15 minutes to confirm the slot.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="bg-primary-blue text-white px-8 py-3 rounded-xl font-bold"
                >
                  Send Another Request
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold ml-2">Full Name</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/30" />
                      <input required placeholder="Jainil Sharma" className="w-full bg-white/50 border border-glass-border rounded-2xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-accent-gold/20 outline-none transition-all" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold ml-2">Phone Number</label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/30" />
                      <input required type="tel" placeholder="+91 98765 43210" className="w-full bg-white/50 border border-glass-border rounded-2xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-accent-gold/20 outline-none transition-all" />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold ml-2">Direct Message (Optional)</label>
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-foreground/30" />
                    <textarea placeholder="Describe your symptoms or condition briefly..." className="w-full bg-white/50 border border-glass-border rounded-2xl py-4 pl-12 pr-4 min-h-[120px] focus:ring-2 focus:ring-accent-gold/20 outline-none transition-all resize-none"></textarea>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div className="space-y-2">
                    <label className="text-sm font-bold ml-2">Preferred Date</label>
                    <div className="relative">
                      <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/30" />
                      <input required type="date" className="w-full bg-white/50 border border-glass-border rounded-2xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-accent-gold/20 outline-none transition-all" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold ml-2">Condition Category</label>
                    <div className="relative">
                      <Stethoscope className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/30" />
                      <select className="w-full bg-white/50 border border-glass-border rounded-2xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-accent-gold/20 outline-none appearance-none transition-all">
                        <option>Chronic Disease</option>
                        <option>Skin/Hair Issue</option>
                        <option>Acute Condition</option>
                        <option>Online Consultation</option>
                      </select>
                    </div>
                  </div>
                </div>

                <button type="submit" className="w-full bg-accent-gold text-white py-5 rounded-[2rem] font-bold text-lg shadow-xl shadow-accent-gold/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center space-x-3">
                   <span>Request Appointment</span>
                   <ArrowRight className="w-5 h-5" />
                </button>

                <p className="text-[10px] text-center text-foreground/40 uppercase tracking-widest font-bold">
                  By clicking, you agree to our privacy policy and clinical terms.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
