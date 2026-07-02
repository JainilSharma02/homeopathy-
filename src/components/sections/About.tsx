"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, Briefcase, Users, FileText, Download, CheckCircle } from "lucide-react";

const timeline = [
  { year: "2009", title: "Started Private Practice", desc: "Established 'Healing Touch' in Mumbai." },
  { year: "2013", title: "PG in Classical Homeopathy", desc: "Specialization in Chronic Disease Management." },
  { year: "2018", title: "Excellence in Healthcare Award", desc: "Recognized for 5000+ successful psoriasis cases." },
  { year: "2024", title: "Modern Clinical Research", desc: "Integrating AI for constitutional drug selection." },
];

import { jsPDF } from "jspdf";

export default function About() {
  const handleDownload = () => {
    const doc = new jsPDF();
    
    // Header
    doc.setFillColor(15, 76, 129); // Primary Blue
    doc.rect(0, 0, 210, 40, "F");
    
    doc.setTextColor(255, 255, 255);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(24);
    doc.text("Clinical Professional Profile", 20, 25);
    
    // Body content
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(18);
    doc.text("Dr. Samuel Hahnemann (Jr.)", 20, 55);
    
    doc.setFontSize(12);
    doc.setFont("helvetica", "italic");
    doc.text("MD Homeopathy (Gold Medalist)", 20, 62);
    
    doc.line(20, 68, 190, 68);
    
    doc.setFont("helvetica", "bold");
    doc.text("Qualifications & Specializations:", 20, 80);
    doc.setFont("helvetica", "normal");
    doc.text("• Specialist in Chronic & Autoimmune Diseases", 25, 90);
    doc.text("• Fellowship in Dermatology (London)", 25, 100);
    doc.text("• 15+ Years of Dedicated Homeopathic Practice", 25, 110);
    
    doc.setFont("helvetica", "bold");
    doc.text("Clinical Excellence:", 20, 130);
    doc.setFont("helvetica", "normal");
    doc.text("Recognized for treating 20,000+ satisfied patients with a 98% success rate", 25, 140);
    doc.text("in complex cases including Psoriasis, Migraine, and Gastric issues.", 25, 147);
    
    doc.setFont("helvetica", "bold");
    doc.text("Professional Milestones:", 20, 165);
    doc.setFont("helvetica", "normal");
    doc.text("2009: Establishment of 'Healing Touch' Homeopathy Clinic.", 25, 175);
    doc.text("2018: Awarded 'Excellence in Clinical Homeopathy' by MH Association.", 25, 185);
    doc.text("2024: Pioneer in AI-integrated Constitutional Case Analysis.", 25, 195);
    
    // Footer
    doc.setFontSize(10);
    doc.setTextColor(150, 150, 150);
    doc.text("Healing Touch Homeopathy Clinic | Medical Professional Document", 20, 280);
    
    doc.save("Dr_Samuel_Hahnemann_Profile.pdf");
    window.open(doc.output("bloburl"), "_blank");
  };

  return (
    <section className="py-24 px-6 relative" id="about">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
             <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Doctor at Work" 
                  className="w-full h-auto"
                />
             </div>

          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-sm font-bold text-primary-blue uppercase tracking-widest">About The Doctor</h2>
              <h3 className="text-4xl lg:text-5xl font-display font-bold">Dr. <span className="text-primary-blue">Samuel</span> Hahnemann (Jr.)</h3>
              <p className="text-lg text-foreground/70 leading-relaxed">
                A third-generation homeopath with over 15 years of clinical experience. My mission is to provide the most gentle yet powerful healing for chronic ailments using the principles of Similia Similibus Curentur.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div className="flex items-start space-x-4">
                 <div className="bg-primary-blue/10 p-3 rounded-xl text-primary-blue">
                   <GraduationCap className="w-6 h-6" />
                 </div>
                 <div>
                   <h4 className="font-bold">Education</h4>
                   <p className="text-sm text-foreground/50">MD Homeopathy (Gold Medalist)</p>
                 </div>
               </div>
               <div className="flex items-start space-x-4">
                 <div className="bg-primary-green/10 p-3 rounded-xl text-primary-green">
                   <Award className="w-6 h-6" />
                 </div>
                 <div>
                   <h4 className="font-bold">Certifications</h4>
                   <p className="text-sm text-foreground/50">Fellowship in Skin & Hair (London)</p>
                 </div>
               </div>
            </div>

            <div className="space-y-6">
              <h4 className="font-bold text-xl">Journey Roadmap</h4>
              <div className="space-y-6 relative ml-4 border-l-2 border-primary-blue/10 pl-8">
                {timeline.map((item, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="relative"
                  >
                    <div className="absolute -left-[41px] top-1 w-4 h-4 bg-primary-blue rounded-full border-4 border-white shadow-sm" />
                    <div className="text-xs font-bold text-primary-blue">{item.year}</div>
                    <div className="font-bold">{item.title}</div>
                    <div className="text-sm text-foreground/50">{item.desc}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="flex items-center space-x-4 pt-4">
               <button 
                 onClick={handleDownload}
                 className="flex items-center space-x-2 bg-primary-blue text-white px-6 py-3 rounded-xl font-bold shadow-lg shadow-primary-blue/20 hover:scale-105 active:scale-95 transition-all"
               >
                 <FileText className="w-5 h-5" />
                 <span>Download Profile</span>
               </button>
               <div className="font-display italic text-2xl text-foreground/30 select-none">
                 Samuel Hahnemann
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
