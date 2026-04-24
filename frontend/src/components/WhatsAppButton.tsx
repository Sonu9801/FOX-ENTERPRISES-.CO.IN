"use client";

import { MessageSquare } from "lucide-react";
import { motion } from "motion/react";

export function WhatsAppButton() {
  const phoneNumber = "919801672607";
  const message = "Hello Sonu, I am interested in your services";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: 1,
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3"
    >
      {/* Label - visible on hover or after a delay */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2, duration: 0.5 }}
        className="hidden md:block bg-white dark:bg-zinc-900 px-4 py-2 rounded-full shadow-large border border-border/50 text-sm font-medium text-foreground whitespace-nowrap"
      >
        Chat with us
      </motion.div>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative group"
        aria-label="Chat on WhatsApp"
      >
        {/* Pulse Effect */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-75 group-hover:opacity-0 transition-opacity" />

        {/* Main Button */}
        <div className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-glow hover:shadow-glow-lg transition-all duration-300 transform group-hover:scale-110 active:scale-95">
          <MessageSquare className="w-7 h-7 fill-current" />
        </div>
      </a>
    </motion.div>
  );
}
