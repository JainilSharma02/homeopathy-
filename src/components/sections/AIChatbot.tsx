"use client";

import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const initialMessages = [
  { role: "bot", text: "Hello! I am Dr. Samuel's AI assistant. How can I help you today?" }
];

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput("");

    // Simulate AI Response
    setTimeout(() => {
      let botResponse = "I'm processing your request. For personalized medical advice, please book an appointment.";
      const lowerInput = input.toLowerCase();
      if (lowerInput.includes("appointment")) {
        botResponse = "You can book an appointment using the 'Book Appointment' button in the menu or at the bottom of the page.";
      } else if (lowerInput.includes("treatment")) {
        botResponse = "We treat various chronic diseases including Skin issues, Migraine, Gastric problems, and more.";
      } else if (lowerInput.includes("hello") || lowerInput.includes("hi")) {
        botResponse = "Hi there! I can help you with information about our clinic, treatments, and booking appointments.";
      }
      setMessages(prev => [...prev, { role: "bot", text: botResponse }]);
    }, 1000);
  };

  return (
    <>
      {/* Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 z-[100] w-16 h-16 bg-primary-blue text-white rounded-full flex items-center justify-center shadow-2xl shadow-primary-blue/30"
      >
        {isOpen ? <X className="w-8 h-8" /> : <MessageCircle className="w-8 h-8" />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-28 right-8 z-[100] w-[350px] md:w-[400px] h-[500px] glass overflow-hidden rounded-[2rem] border-primary-blue/20 flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div className="bg-primary-blue p-6 text-white flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Bot className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-bold">Hahnemann AI</div>
                  <div className="text-xs opacity-70">Always online</div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)}>
                 <X className="w-5 h-5 opacity-70 hover:opacity-100" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4" ref={scrollRef}>
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[80%] p-4 rounded-2xl ${m.role === "user" ? "bg-primary-blue text-white rounded-br-none" : "bg-white/50 text-foreground rounded-bl-none"}`}>
                    <p className="text-sm leading-relaxed">{m.text}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="p-6 pt-0">
               <div className="relative">
                 <input 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Type your question..." 
                  className="w-full bg-white/50 border border-glass-border rounded-xl py-3 pl-4 pr-12 outline-none focus:ring-2 focus:ring-primary-blue/20 text-foreground"
                 />
                 <button 
                  onClick={handleSend}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-primary-blue text-white rounded-lg flex items-center justify-center hover:scale-105 transition-all"
                 >
                   <Send className="w-4 h-4" />
                 </button>
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
