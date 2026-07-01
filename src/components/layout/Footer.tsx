"use client";

import Link from "next/link";
import { HeartPulse, Mail, Phone, MapPin, Globe, Share2, MessageCircle, Send, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-foreground text-background pt-24 pb-12 px-6 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-blue/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-green/10 rounded-full blur-[120px]" />

      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-2">
              <div className="bg-primary-blue p-2 rounded-xl">
                <HeartPulse className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-display font-bold tracking-tight">
                Healing<span className="text-accent-gold">Touch</span>
              </span>
            </Link>
            <p className="text-background/60 leading-relaxed text-sm">
              Providing compassionate, evidence-based homeopathic care since 2009. We believe in treating the person, not just the disease.
            </p>
            <div className="flex items-center space-x-4">
              {[Globe, Share2, MessageCircle, Send].map((Icon, i) => (
                <Link key={i} href="#" className="w-10 h-10 rounded-full border border-background/10 flex items-center justify-center hover:bg-background hover:text-foreground transition-all">
                  <Icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-lg font-bold">Quick Links</h4>
            <ul className="space-y-4">
              {["About Doctor", "Our Treatments", "Blog & Articles", "Testimonials", "Contact Us"].map((link) => (
                <li key={link}>
                  <Link href="#" className="text-background/60 hover:text-accent-gold transition-colors text-sm">{link}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-lg font-bold">Treatments</h4>
            <ul className="space-y-4">
              {["Skin Care", "Hair Health", "Gastric Issues", "Chronic Pain", "Mental Wellness"].map((link) => (
                <li key={link}>
                  <Link href="#" className="text-background/60 hover:text-accent-gold transition-colors text-sm">{link}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-lg font-bold">Get In Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-sm text-background/60">
                <MapPin className="w-5 h-5 text-accent-gold flex-shrink-0" />
                <span>123, Wellness Block, Healthcare City, Mumbai - 400001</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-background/60">
                <Phone className="w-5 h-5 text-accent-gold" />
                <span>+91 91234 56789</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-background/60">
                <Mail className="w-5 h-5 text-accent-gold" />
                <span>doctor@healingtouch.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-background/10 flex flex-col md:row items-center justify-between gap-6">
          <p className="text-background/40 text-xs">
            © {new Date().getFullYear()} Healing Touch Homeopathic Clinic. All Rights Reserved. Designed for Excellence.
          </p>
          <div className="flex items-center space-x-6 text-xs text-background/40">
            <Link href="#" className="hover:text-background transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-background transition-colors">Terms of Service</Link>
            <button 
              onClick={scrollToTop}
              className="w-10 h-10 bg-accent-gold rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
