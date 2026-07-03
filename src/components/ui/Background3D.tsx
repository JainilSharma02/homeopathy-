"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export default function Background3D() {
  const { scrollY } = useScroll();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  // Parallax effects for different layers
  const y1 = useTransform(scrollY, [0, 5000], [0, -500]);
  const y2 = useTransform(scrollY, [0, 5000], [0, 500]);
  const rotateS = useTransform(scrollY, [0, 5000], [0, 360]);

  return (
    <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none select-none">
      {/* 3D Orb 1 - Primary Blue */}
      <motion.div
        style={{ y: y1, rotate: rotateS }}
        className="absolute top-[10%] left-[5%] w-[30vw] h-[30vw] min-w-[300px] min-h-[300px] rounded-full"
      >
        <div className="w-full h-full bg-primary-blue/5 blur-[100px] md:blur-[150px] animate-pulse" />
      </motion.div>

      {/* 3D Orb 2 - Primary Green */}
      <motion.div
        style={{ y: y2 }}
        className="absolute top-[40%] right-[-5%] w-[40vw] h-[40vw] min-w-[400px] min-h-[400px] rounded-full"
      >
        <div className="w-full h-full bg-primary-green/5 blur-[120px] md:blur-[180px] animate-[pulse_8s_infinite] delay-1000" />
      </motion.div>

      {/* 3D Orb 3 - Soft Accent */}
      <motion.div
        style={{ y: y1 }}
        className="absolute bottom-[10%] left-[20%] w-[25vw] h-[25vw] min-w-[250px] min-h-[250px] rounded-full"
      >
        <div className="w-full h-full bg-accent-gold/5 blur-[80px] md:blur-[130px] animate-[pulse_10s_infinite] delay-2000" />
      </motion.div>

      {/* Floating 3D Particles (simplified for mobile) */}
      {!isMobile && Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ 
            x: Math.random() * 100 + "%", 
            y: Math.random() * 100 + "%", 
            opacity: 0,
            scale: 0.5 
          }}
          animate={{ 
            y: ["0%", "10%", "0%"],
            rotate: [0, 180, 360],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ 
            duration: 10 + Math.random() * 20, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute w-24 h-24 border border-white/10 rounded-3xl"
          style={{ 
            perspective: "1000px",
            rotateX: 45,
            rotateY: 45
          }}
        />
      ))}
      
      {/* Noise Texture layer for premium feel */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
}
