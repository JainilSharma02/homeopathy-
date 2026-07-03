"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, HeartPulse, User, Stethoscope, Mail, Phone, Calendar, ChevronRight, Home, LayoutGrid, MessageSquare, Image, Newspaper } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/", icon: <Home className="w-5 h-5" /> },
  { name: "About", href: "#about", icon: <User className="w-5 h-5" /> },
  { name: "Treatments", href: "#treatments", icon: <LayoutGrid className="w-5 h-5" /> },
  { name: "Diseases", href: "#diseases", icon: <Stethoscope className="w-5 h-5" /> },
  { name: "Testimonials", href: "#testimonials", icon: <MessageSquare className="w-5 h-5" /> },
  { name: "Gallery", href: "#gallery", icon: <Image className="w-5 h-5" /> },
  { name: "Contact", href: "#contact", icon: <Phone className="w-5 h-5" /> },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-500 ${
          isScrolled 
          ? "bg-white/80 backdrop-blur-xl py-3 shadow-lg border-b border-primary-green/5" 
          : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="bg-primary-green p-2.5 rounded-2xl group-hover:rotate-12 transition-transform shadow-lg shadow-primary-green/20">
               <HeartPulse className="text-white w-6 h-6" />
            </div>
            <span className="text-2xl font-display font-bold tracking-tight text-slate-900">
              Healing<span className="text-primary-green underline decoration-primary-green/20 underline-offset-4">Touch</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-slate-600 hover:text-primary-green transition-all"
              >
                {link.name}
              </Link>
            ))}
            <button 
              onClick={() => window.location.href = "#appointment"}
              className="bg-primary-green text-white px-8 py-3 rounded-2xl font-bold hover:scale-105 active:scale-95 transition-all shadow-xl shadow-primary-green/20"
            >
              Book Now
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden w-12 h-12 flex items-center justify-center bg-white rounded-2xl shadow-lg border border-slate-100 text-slate-900 active:scale-90 transition-all z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[55] bg-white lg:hidden"
          >
            {/* Glossy Background Particles */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-green/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-blue/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="flex flex-col h-full pt-32 pb-12 px-8">
              <div className="space-y-2 flex-grow">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center justify-between group p-4 rounded-2xl hover:bg-primary-green/5 transition-all"
                    >
                      <div className="flex items-center space-x-5">
                        <div className="bg-slate-50 p-3 rounded-xl group-hover:bg-white transition-colors group-hover:shadow-md text-slate-400 group-hover:text-primary-green">
                          {link.icon}
                        </div>
                        <span className="text-xl font-bold text-slate-800">{link.name}</span>
                      </div>
                      <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-primary-green group-hover:translate-x-1 transition-all" />
                    </Link>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="pt-8 border-t border-slate-100"
              >
                <button 
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    window.location.href = "#appointment";
                  }}
                  className="w-full bg-primary-green text-white py-5 rounded-[2rem] font-bold text-lg shadow-2xl shadow-primary-green/30"
                >
                  Book Appointment
                </button>
                <div className="flex justify-center space-x-6 mt-8">
                   <Phone className="w-5 h-5 text-slate-400" />
                   <Mail className="w-5 h-5 text-slate-400" />
                   <Calendar className="w-5 h-5 text-slate-400" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
