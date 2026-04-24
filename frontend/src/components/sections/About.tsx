"use client";

import { CheckCircle2 } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";

const highlights = [
  "Specializing in cargo boxes for 3-wheeler and 4-wheeler electric vehicles",
  "Advanced sheet metal fabrication — cutting, bending, welding of steel structures",
  "Tools & dies manufacturing for all types of sheet metal components",
  "Quality Assurance processes at every production stage to eliminate errors",
  "MSME Certified (Udyam) & GST Registered Enterprise",
  "Flexible and customized fabrication solutions for diverse client needs",
];

interface CounterProps {
  to: number;
  suffix?: string;
  duration?: number;
}

function AnimatedCounter({ to, suffix = "", duration = 2 }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const start = Date.now();
    const end = start + duration * 1000;
    const tick = () => {
      const now = Date.now();
      const progress = Math.min((now - start) / (end - start), 1);
      const eased = 1 - (1 - progress) ** 3;
      setCount(Math.round(eased * to));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, to, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

const stats = [
  { label: "Projects Done", value: 500, suffix: "+", sub: "Across EV OEMs" },
  { label: "Clients Served", value: 150, suffix: "+", sub: "EV & industrial" },
  { label: "EV OEM Partners", value: 3, suffix: "+", sub: "Confirmed clients" },
  { label: "On-Time Rate", value: 98, suffix: "%", sub: "Delivery precision" },
];

export function About() {
  return (
    <section
      id="about"
      className="py-24 lg:py-32 bg-background border-t border-border/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary mb-4">
              About Us
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground leading-tight mb-6">
              Delhi NCR's Trusted{" "}
              <span className="text-gradient-primary">Fabrication Partner</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-5">
              FOX ENTERPRISES is a well-known fabrication solution provider
              serving Delhi and the National Capital Region. Located at Gurukul
              Industrial Area, Sector 39, Opposite SS Global School, Near Sarai
              Metro Station (Delhi Metro), Faridabad — we deliver quality and
              customized fabrication services to industries across the region.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our plant is equipped with all the required machines and equipment
              necessary for fabricating steel and iron structures efficiently.
              We maintain strict Quality Assurance processes to avoid production
              errors and ensure the quality of every delivered product.
              Currently specializing in design, detailing, fabrication &
              creation of Cargo boxes for three and four wheeler electric
              vehicles.
            </p>

            <ul className="space-y-3">
              {highlights.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="flex items-start gap-3 text-sm text-foreground/80"
                >
                  <CheckCircle2
                    size={16}
                    className="text-primary mt-0.5 flex-shrink-0"
                  />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right: Animated Stats */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="bg-card rounded-2xl p-8 border border-border/50 shadow-large relative overflow-hidden">
              {/* Decorative gradient corner */}
              <div
                className="absolute top-0 right-0 w-48 h-48 opacity-30 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle at 100% 0%, oklch(0.52 0.22 250 / 0.12), transparent 70%)",
                }}
              />
              <div
                className="absolute bottom-0 left-0 w-32 h-32 opacity-20 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle at 0% 100%, oklch(0.55 0.18 165 / 0.10), transparent 70%)",
                }}
              />

              <div className="grid grid-cols-2 gap-5 relative z-10">
                {stats.map(({ label, value, suffix, sub }, i) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="p-5 rounded-xl bg-muted/40 border border-border/40 hover:border-primary/30 hover:shadow-soft transition-all duration-300"
                  >
                    <div className="font-display font-bold text-3xl text-gradient-primary mb-1">
                      <AnimatedCounter to={value} suffix={suffix} />
                    </div>
                    <div className="text-sm font-semibold text-foreground/80">
                      {label}
                    </div>
                    <div className="text-xs text-muted-foreground mt-0.5">
                      {sub}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
