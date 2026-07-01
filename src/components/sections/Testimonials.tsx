"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Business Owner",
    content: "I had chronic migraine for 10 years. Allopathic medicines only gave temporary relief. Dr. Hahnemann's treatment cured it completely in 6 months. Highly recommend!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    name: "Sneha Mehta",
    role: "Teacher",
    content: "My daughter's skin allergy vanished within weeks. The medicines are so easy to take and have no side effects. The clinical atmosphere is very calming.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    name: "Amit Patel",
    role: "Software Engineer",
    content: "Treatment for Gastric issues was excellent. The doctor explains everything scientifically which builds trust. Digital prescriptions are a big plus.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  }
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 px-6 relative overflow-hidden" id="testimonials">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-sm font-bold text-primary-blue uppercase tracking-widest">Testimonials</h2>
          <h3 className="text-4xl lg:text-5xl font-display font-bold">What Our <span className="text-primary-blue">Patients</span> Say</h3>
        </div>

        <div className="relative glass p-10 lg:p-16 rounded-[3rem] shadow-2xl">
          <Quote className="absolute top-10 left-10 w-20 h-20 text-primary-blue/5 -z-10" />
          
          <div className="relative h-[300px] md:h-[200px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                <div className="flex items-center space-x-1 text-accent-gold">
                  {[...Array(testimonials[index].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent-gold" />
                  ))}
                </div>
                
                <p className="text-xl md:text-2xl font-medium italic leading-relaxed text-foreground/80">
                  "{testimonials[index].content}"
                </p>

                <div className="flex items-center space-x-4">
                  <img 
                    src={testimonials[index].image} 
                    alt={testimonials[index].name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-primary-blue/20"
                  />
                  <div>
                    <div className="font-bold text-lg">{testimonials[index].name}</div>
                    <div className="text-sm text-foreground/50">{testimonials[index].role}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="absolute bottom-10 right-10 flex space-x-4">
            <button onClick={prev} className="p-3 rounded-xl glass hover:bg-primary-blue hover:text-white transition-all">
              <ChevronLeft />
            </button>
            <button onClick={next} className="p-3 rounded-xl glass hover:bg-primary-blue hover:text-white transition-all">
              <ChevronRight />
            </button>
          </div>
        </div>

        <div className="mt-12 flex justify-center space-x-2">
          {testimonials.map((_, i) => (
            <div 
              key={i} 
              className={`h-2 rounded-full transition-all duration-500 ${i === index ? "w-8 bg-primary-blue" : "w-2 bg-primary-blue/20"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
