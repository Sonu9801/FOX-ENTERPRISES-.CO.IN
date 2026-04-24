"use client";

import { Award, Clock, Shield, Target } from "lucide-react";
import { motion } from "motion/react";

const points = [
  {
    id: "precision",
    Icon: Target,
    title: "Precision Fabrication",
    description:
      "Accurate sheet metal cutting, bending, and welding to exact specifications — ensuring every cargo structure meets client requirements.",
    iconBg: "bg-blue-50 border-blue-200",
    iconColor: "text-blue-600",
    numberColor: "text-blue-100",
  },
  {
    id: "quality",
    Icon: Shield,
    title: "Quality Assurance",
    description:
      "Rigorous QA processes at every production stage to eliminate errors and ensure the quality of every delivered product.",
    iconBg: "bg-emerald-50 border-emerald-200",
    iconColor: "text-emerald-600",
    numberColor: "text-emerald-100",
  },
  {
    id: "ev-specialist",
    Icon: Award,
    title: "EV Specialist",
    description:
      "Focused expertise in cargo structures for electric three and four wheelers — trusted by Euler Motors, E Next Mobility, and E Auto.",
    iconBg: "bg-violet-50 border-violet-200",
    iconColor: "text-violet-600",
    numberColor: "text-violet-100",
  },
  {
    id: "pricing",
    Icon: Clock,
    title: "Competitive Pricing",
    description:
      "Quality fabrication solutions at the most competitive prices in Delhi NCR — committed to value and mutually beneficial partnerships.",
    iconBg: "bg-orange-50 border-orange-200",
    iconColor: "text-orange-600",
    numberColor: "text-orange-100",
  },
];

export function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="py-24 lg:py-32 bg-muted/30 border-t border-border/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary mb-4">
            Our Advantages
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            Why Choose Fox Enterprises
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            We don't just manufacture parts — we build long-term partnerships
            built on quality, reliability, and shared success.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map(
            (
              { id, Icon, title, description, iconBg, iconColor, numberColor },
              i,
            ) => (
              <motion.div
                key={id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative bg-card p-6 rounded-xl border border-border/50 shadow-card card-hover group overflow-hidden"
                data-ocid={`why-choose-${id}`}
              >
                {/* Large number watermark */}
                <div
                  className={`absolute top-3 right-4 font-display font-black text-5xl ${numberColor} select-none pointer-events-none`}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>

                <div
                  className={`w-12 h-12 rounded-xl ${iconBg} border flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 relative z-10`}
                >
                  <Icon size={22} className={iconColor} />
                </div>
                <h3 className="font-display font-semibold text-base text-foreground mb-2 group-hover:text-primary transition-colors duration-300 relative z-10">
                  {title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed relative z-10">
                  {description}
                </p>
              </motion.div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
