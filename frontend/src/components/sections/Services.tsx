"use client";

import { Settings, Truck, Wrench, Zap } from "lucide-react";
import { motion } from "motion/react";

const capabilities = [
  {
    id: "sheet-metal",
    Icon: Wrench,
    title: "Sheet Metal Fabrication",
    description:
      "Precision cutting, bending, and welding of steel and iron structures for automotive applications across the EV and industrial segment.",
    highlight: "Cutting · Bending · Welding",
    iconBg: "bg-blue-50 border-blue-200",
    iconColor: "text-blue-600",
    accentBar: "from-blue-500 to-blue-400",
  },
  {
    id: "ev-cargo-box",
    Icon: Zap,
    title: "EV Cargo Box Manufacturing",
    description:
      "Design, detailing, fabrication & creation of cargo boxes for three-wheeler and four-wheeler electric vehicles to exact client specifications.",
    highlight: "3W EV · 4W EV · Custom Cargo Boxes",
    iconBg: "bg-emerald-50 border-emerald-200",
    iconColor: "text-emerald-600",
    accentBar: "from-emerald-500 to-teal-400",
  },
  {
    id: "tools-dies",
    Icon: Truck,
    title: "Tools & Dies Manufacturing",
    description:
      "Custom tooling and die fabrication for all types of sheet metal components — engineered for precision, repeatability, and long production runs.",
    highlight: "Custom Tooling · Sheet Metal Dies",
    iconBg: "bg-violet-50 border-violet-200",
    iconColor: "text-violet-600",
    accentBar: "from-violet-500 to-violet-400",
  },
  {
    id: "custom-solutions",
    Icon: Settings,
    title: "Custom Fabrication Solutions",
    description:
      "End-to-end fabrication — from concept and design to detailing and finished industrial components — tailored to every client's unique requirements.",
    highlight: "Design to Delivery · Engineering Support",
    iconBg: "bg-orange-50 border-orange-200",
    iconColor: "text-orange-600",
    accentBar: "from-orange-500 to-amber-400",
  },
];

export function Services() {
  return (
    <section id="capabilities" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary mb-4">
            What We Make
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            Manufacturing Capabilities
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            From raw steel to precision-finished automotive components — our
            capabilities span the full manufacturing spectrum.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {capabilities.map(
            (
              {
                id,
                Icon,
                title,
                description,
                highlight,
                iconBg,
                iconColor,
                accentBar,
              },
              i,
            ) => (
              <motion.div
                key={id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card rounded-xl border border-border/50 shadow-card card-hover group cursor-default flex flex-col overflow-hidden"
                data-ocid={`capability-card-${id}`}
              >
                {/* Colored top accent bar */}
                <div className={`h-1 w-full bg-gradient-to-r ${accentBar}`} />

                <div className="p-6 flex flex-col flex-1">
                  <div
                    className={`w-12 h-12 rounded-xl ${iconBg} border flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon size={22} className={iconColor} />
                  </div>
                  <h3 className="font-display font-bold text-base text-foreground mb-3 group-hover:text-primary transition-colors duration-300 leading-snug">
                    {title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-4">
                    {description}
                  </p>
                  <div className="text-[10px] font-semibold text-muted-foreground tracking-wider uppercase border-t border-border/40 pt-3 mt-auto">
                    {highlight}
                  </div>
                </div>
              </motion.div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
