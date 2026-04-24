"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown, Zap } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const stats = [
  { value: "500+", label: "Projects Delivered" },
  { value: "150+", label: "Clients Served" },
  { value: "98%", label: "On-Time Delivery" },
  { value: "3+", label: "EV OEM Partners" },
];

const slides = [
  {
    image: "/assets/hero/hero-1.png",
    subtitle: "EULER T350 CARGO BODY",
    client: "Euler Motors",
  },
  {
    image: "/assets/hero/hero-2.jpg",
    subtitle: "SEGREGATED WASTE COLLECTION",
    client: "Bajaj Auto",
  },
  {
    image: "/assets/hero/hero-3.jpg",
    subtitle: "MOBILE VENDING BODY",
    client: "E-NEXT MOBILITY",
  },
  {
    image: "/assets/hero/hero-4.jpg",
    subtitle: "HYDRAULIC 3-WHEELER TIPPER",
    client: "PIAGGIO",
  },
  {
    image: "/assets/hero/hero-5.jpg",
    subtitle: "EULER CARGO BODY",
    client: "Euler Motors",
  },
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
    >
      {/* ... existing orbs ... */}

      {/* Subtle hero grid */}
      <div className="absolute inset-0 hero-grid" />

      {/* Soft gradient orbs */}
      <div
        className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full opacity-30 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, oklch(0.52 0.22 250 / 0.12) 0%, transparent 70%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div className="max-w-2xl">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 bg-primary/8 border border-primary/20 px-3.5 py-1.5 rounded-full text-xs font-semibold text-primary mb-8"
            >
              <Zap size={11} className="fill-primary" />
              Fabrication Solutions · EV Cargo Boxes · Faridabad
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight mb-6 text-foreground"
            >
              Precision Fabrication
              <br />
              <span className="text-gradient-primary">
                for India's Electric
              </span>
              <br />
              Future.
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-xl mb-10"
            >
              Quality sheet metal fabrication and cargo box manufacturing for
              three and four wheeler electric vehicles. Trusted by leading EV
              companies across Delhi NCR.
            </motion.p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="metallic-gradient text-white font-semibold px-8 py-3 text-base shadow-glow hover:shadow-glow-lg transition-all duration-300 group border-0"
                onClick={() => scrollToSection("#contact")}
              >
                Get a Quote
                <ArrowRight
                  size={16}
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary/30 bg-card/60 hover:bg-primary/5 hover:border-primary/50 text-foreground font-semibold px-8 py-3 text-base transition-all duration-300 shadow-soft"
                onClick={() => scrollToSection("#capabilities")}
              >
                Explore Capabilities
              </Button>
            </div>

            {/* Stats */}
            <div className="flex wrap gap-8 mt-14 pt-10 border-t border-border/50">
              {stats.map(({ value, label }) => (
                <div key={label} className="flex flex-col gap-0.5">
                  <span className="font-display font-bold text-2xl text-gradient-primary">
                    {value}
                  </span>
                  <span className="text-xs text-muted-foreground">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Product Image Slideshow */}
          <motion.div
            initial={{ opacity: 0, x: 48 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden lg:block"
          >
            {/* Image container with decorative frame */}
            <div className="relative rounded-2xl overflow-hidden shadow-elevation border border-border/40 aspect-[1200/800] bg-muted/20">
              <AnimatePresence mode="wait">
                {slides[currentSlide % slides.length] && (
                  <motion.img
                    key={currentSlide % slides.length}
                    src={slides[currentSlide % slides.length].image}
                    alt="EV Product"
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                )}
              </AnimatePresence>

              {/* Subtle overlay gradient at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Partner Highlights card - placed below image */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="mt-4 ml-2 bg-card rounded-xl p-5 shadow-elevation border border-border/40 inline-block"
            >
              <div className="text-[10px] text-muted-foreground mb-3 font-bold uppercase tracking-wider">
                Partner Highlights
              </div>
              <div className="flex flex-row gap-6">
                <div
                  className={`flex items-center gap-2 text-sm font-bold transition-colors duration-300 ${slides[currentSlide % slides.length]?.client === "Euler Motors" ? "text-primary" : "text-foreground/60"}`}
                >
                  <div
                    className={`w-1.5 h-1.5 rounded-full ${slides[currentSlide % slides.length]?.client === "Euler Motors" ? "bg-primary animate-pulse" : "bg-muted"}`}
                  />
                  Euler Motors
                </div>
                <div
                  className={`flex items-center gap-2 text-sm font-bold transition-colors duration-300 ${slides[currentSlide % slides.length]?.client === "E-NEXT MOBILITY" ? "text-primary" : "text-foreground/60"}`}
                >
                  <div
                    className={`w-1.5 h-1.5 rounded-full ${slides[currentSlide % slides.length]?.client === "E-NEXT MOBILITY" ? "bg-primary animate-pulse" : "bg-muted"}`}
                  />
                  E-NEXT MOBILITY
                </div>
                <div
                  className={`flex items-center gap-2 text-sm font-bold transition-colors duration-300 ${slides[currentSlide % slides.length]?.client === "Bajaj Auto" ? "text-primary" : "text-foreground/60"}`}
                >
                  <div
                    className={`w-1.5 h-1.5 rounded-full ${slides[currentSlide % slides.length]?.client === "Bajaj Auto" ? "bg-primary animate-pulse" : "bg-muted"}`}
                  />
                  Bajaj Auto
                </div>
                <div
                  className={`flex items-center gap-2 text-sm font-bold transition-colors duration-300 ${slides[currentSlide % slides.length]?.client === "PIAGGIO" ? "text-primary" : "text-foreground/60"}`}
                >
                  <div
                    className={`w-1.5 h-1.5 rounded-full ${slides[currentSlide % slides.length]?.client === "PIAGGIO" ? "bg-primary animate-pulse" : "bg-muted"}`}
                  />
                  PIAGGIO
                </div>
              </div>
            </motion.div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.0 }}
              className="absolute -top-4 -right-4 w-16 h-16 rounded-full metallic-gradient shadow-glow flex items-center justify-center"
            >
              <div className="text-center">
                <div className="font-display font-black text-white text-lg leading-none">
                  3+
                </div>
                <div className="text-white/80 text-[7px] font-semibold uppercase tracking-wide">
                  OEMs
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        type="button"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        onClick={() => scrollToSection("#trusted-by")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-muted-foreground hover:text-primary transition-colors group"
        aria-label="Scroll down"
        data-ocid="hero-scroll-indicator"
        suppressHydrationWarning
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown size={16} className="animate-bounce" />
      </motion.button>
    </section>
  );
}
