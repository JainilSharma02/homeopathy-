"use client";

import { motion } from "framer-motion";
import { User, Phone, Mail, MessageSquare, Calendar, Clock, Stethoscope, ArrowRight, CheckCircle, ShieldCheck, Activity, Globe, MessageCircle, ChevronRight } from "lucide-react";
import { useState } from "react";
import confetti from "canvas-confetti";

export default function Appointment() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [condition, setCondition] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Store in Local Database (localStorage)
    const newAppointment = {
      id: Date.now(),
      name,
      phone,
      condition,
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
    };

    const existingAppointments = JSON.parse(localStorage.getItem("clinic_appointments") || "[]");
    localStorage.setItem("clinic_appointments", JSON.stringify([...existingAppointments, newAppointment]));
    
    console.log("Appointment Saved to Local Database:", newAppointment);

    setIsSubmitted(true);
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#2d6a4f', '#0f4c81', '#c5a059']
    });
  };

  const encodedCondition = encodeURIComponent(condition || "general checkup");
  const whatsappLink = `https://wa.me/919876543210?text=Hello%20Dr.%20Hahnemann,%20I%20am%20*${name}*.%20I%20would%20like%20to%20book%20an%20appointment%20regarding%20*${condition || "my health"}*.`;

  return (
    <section className="py-24 px-6 relative overflow-hidden" id="appointment">
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_30%,#38bdf808_0%,transparent_50%)] -z-10" />
      
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Left Column: Trust Builders */}
          <div className="lg:w-1/2 space-y-10">
            <div className="space-y-6">
              <span className="inline-block bg-accent-gold/10 text-accent-gold text-xs font-black uppercase tracking-[0.2em] px-4 py-1.5 rounded-full">
                Global Consultation
              </span>
              <h3 className="text-4xl md:text-6xl font-display font-bold leading-[1.1] text-slate-900">
                Start Your Journey <br /> to <span className="text-primary-green">Holistic</span> Health
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed max-w-lg">
                Connect with our specialists for a deep-dive constitutional analysis. We treat the person, not just the disease.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: CheckCircle, title: "US FDA Approved", desc: "Standardized medications." },
                { icon: ShieldCheck, title: "Strict Privacy", desc: "100% Confidential sessions." },
                { icon: Activity, title: "Post-Treatment Support", desc: "24/7 patient helpline." },
                { icon: Globe, title: "Shipping Globally", desc: "Medicine delivered to 40+ countries." }
              ].map((item, i) => (
                <div key={i} className="flex items-start space-x-3">
                  <div className="mt-1 bg-primary-green/10 p-1.5 rounded-lg">
                    <item.icon className="w-5 h-5 text-primary-green" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-slate-800">{item.title}</h4>
                    <p className="text-[11px] text-slate-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Action: WhatsApp */}
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4 p-6 bg-green-50 rounded-[2rem] border border-green-100 hover:shadow-xl transition-all group"
            >
              <div className="w-14 h-14 bg-green-500 text-white rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <MessageCircle className="w-7 h-7" />
              </div>
              <div>
                <div className="font-black text-green-700 text-sm">INSTANT WHATSAPP BOOKING</div>
                <div className="text-xs text-green-600 font-medium">Average response time: 2 mins</div>
              </div>
            </a>
          </div>

          {/* Right Column: Appointment Form */}
          <div className="lg:w-1/2 w-full relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white rounded-[3.5rem] p-8 md:p-12 shadow-[0_48px_100px_-24px_rgba(45,106,79,0.12)] border border-slate-100"
            >
              {isSubmitted ? (
                <motion.div 
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-center py-10 space-y-8"
                >
                  <div className="w-24 h-24 bg-primary-green/10 text-primary-green rounded-full flex items-center justify-center mx-auto">
                     <CheckCircle className="w-12 h-12" />
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-3xl font-display font-bold text-slate-800">Request Sent!</h4>
                    <p className="text-slate-500">
                      Our coordinator will contact you via WhatsApp for confirmation soon.
                    </p>
                  </div>
                  <div className="flex flex-col gap-3">
                    <a 
                      href={whatsappLink}
                      className="bg-green-500 text-white px-8 py-4 rounded-2xl font-bold flex items-center justify-center space-x-2 shadow-lg shadow-green-500/20"
                    >
                      <MessageCircle className="w-5 h-5" />
                      <span>Chat on WhatsApp</span>
                    </a>
                    <button 
                      onClick={() => {
                        setIsSubmitted(false);
                        setName("");
                        setPhone("");
                        setCondition("");
                        const element = document.getElementById('appointment');
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className="text-slate-400 font-bold hover:text-slate-600 transition-colors"
                    >
                      Book Another Slot
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-[11px] font-black uppercase text-slate-400 tracking-widest ml-1">Your Full Name</label>
                    <div className="relative">
                      <User className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <input 
                        required 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Jainil Sharma" 
                        className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4.5 pl-14 pr-4 focus:bg-white focus:ring-2 focus:ring-primary-green/20 outline-none transition-all font-medium" 
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[11px] font-black uppercase text-slate-400 tracking-widest ml-1">WhatsApp Number</label>
                    <div className="relative">
                      <Phone className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <input 
                        required 
                        type="tel" 
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 91234 56789" 
                        className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4.5 pl-14 pr-4 focus:bg-white focus:ring-2 focus:ring-primary-green/20 outline-none transition-all font-medium" 
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[11px] font-black uppercase text-slate-400 tracking-widest ml-1">What are you treating?</label>
                    <div className="relative">
                      <Stethoscope className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <select 
                        required 
                        value={condition}
                        onChange={(e) => setCondition(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4.5 pl-14 pr-8 focus:bg-white focus:ring-2 focus:ring-primary-green/20 outline-none appearance-none transition-all font-medium text-slate-600 cursor-pointer"
                      >
                        <option value="">Select Condition</option>
                        <option value="Dermatology">Dermatology (Skin/Hair)</option>
                        <option value="Chronic Pain">Chronic Pain (Joints/Back)</option>
                        <option value="Gastric">Gastric/Metabolic</option>
                        <option value="Mental Wellness">Mental Wellness</option>
                        <option value="Online Consultation">Online Consultation</option>
                      </select>
                      <ChevronRight className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 rotate-90" />
                    </div>
                  </div>

                  <button type="submit" className="w-full bg-slate-900 text-white py-5 rounded-2xl font-bold text-lg shadow-2xl shadow-slate-900/10 hover:bg-primary-green transition-all flex items-center justify-center space-x-3 group mt-4">
                     <span>Secure My Slot</span>
                     <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <p className="text-[10px] text-center text-slate-400 font-bold uppercase tracking-widest leading-relaxed mt-6">
                    Dr. Hahnemann's clinic follows strict <span className="text-slate-600">HIPAA guidelines</span> <br /> for patient data privacy.
                  </p>
                </form>
              )}
            </motion.div>
            
            {/* Float Badge */}
            <div className="absolute -top-6 -right-6 bg-white shadow-xl p-4 rounded-3xl border border-slate-100 animate-bounce md:flex hidden items-center space-x-3">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              <span className="text-xs font-black text-slate-700">LIVE AVAILABILITY</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
