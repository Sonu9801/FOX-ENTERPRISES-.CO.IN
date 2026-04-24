"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import { motion } from "motion/react";

export function CTABanner() {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="cta" className="py-24 relative overflow-hidden cta-gradient">
      {/* Grid overlay on gradient */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_50%,rgba(255,255,255,0.1),transparent)]" />

      {/* Soft edge fade */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/10" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-white/70 mb-6">
            Partner With Us
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6">
            Let's Build India's{" "}
            <span className="text-gradient-white opacity-90">
              Electric Future
            </span>
            <br />
            Together
          </h2>
          <p className="text-white/75 text-lg max-w-xl mx-auto mb-10">
            Whether you need cargo boxes for electric three-wheelers or custom
            sheet metal fabrication, Fox Enterprises has the expertise and
            capacity to meet your requirements.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 font-semibold px-10 py-3 text-base shadow-elevation transition-all duration-300 group border-0"
              onClick={scrollToContact}
              data-ocid="cta-request-quote"
            >
              Request a Quote
              <ArrowRight
                size={16}
                className="ml-2 group-hover:translate-x-1 transition-transform"
              />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white/40 bg-white/10 hover:bg-white/20 hover:border-white/60 text-white font-semibold px-8 py-3 text-base group backdrop-blur-sm"
              onClick={scrollToContact}
              data-ocid="cta-contact-team"
            >
              <Phone size={15} className="mr-2" />
              Contact Our Team
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
