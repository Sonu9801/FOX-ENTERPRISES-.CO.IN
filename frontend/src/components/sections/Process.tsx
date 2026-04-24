"use client";

import { motion } from "motion/react";

const processSteps = [
  {
    id: "design",
    step: "01",
    title: "Design & Detailing",
    description:
      "Engineering drawings and detailed fabrication plans are prepared per client specifications — ensuring every cargo structure is accurately planned before production begins.",
    color: "text-blue-600",
    bg: "bg-blue-50 border-blue-200",
  },
  {
    id: "procurement",
    step: "02",
    title: "Material Procurement",
    description:
      "Quality steel and iron are sourced from approved material vendors and inspected upon arrival at our Faridabad facility to ensure consistent structural integrity.",
    color: "text-emerald-600",
    bg: "bg-emerald-50 border-emerald-200",
  },
  {
    id: "fabrication",
    step: "03",
    title: "Precision Fabrication",
    description:
      "CNC cutting, bending, welding, and assembly of cargo structures — our equipment and skilled team deliver precise, durable fabrication for EV applications.",
    color: "text-violet-600",
    bg: "bg-violet-50 border-violet-200",
  },
  {
    id: "quality",
    step: "04",
    title: "Quality Check & Delivery",
    description:
      "Final inspection of every batch against client specifications before dispatch. On-time delivery to client facilities across Delhi NCR and beyond.",
    color: "text-orange-600",
    bg: "bg-orange-50 border-orange-200",
  },
];

const factoryImages = [
  {
    id: "laser-cutting",
    src: "/assets/laser-cutting-machine.jpg",
    alt: "LASER CUTTING MACHINE",
    caption:
      "LASER CUTTING MACHINE · Precision laser cutting for accurate and customized metal fabrication",
  },
  {
    id: "press-brake",
    src: "/assets/cnc-press-brake.jpg",
    alt: "CNC PRESS BRAKE MACHINE",
    caption: "CNC PRESS BRAKE MACHINE · WORK: PRECISION SHEET METAL BENDING",
  },
  {
    id: "metal-fabrication",
    src: "/assets/metal-fabrication.jpg",
    alt: "Metal Fabrication and Welding Work",
    caption:
      "Metal Fabrication and Welding Work · Cutting, shaping, and joining metal parts using welding and grinding to build strong metal structures.",
  },
];

export function Process() {
  return (
    <section
      id="process"
      className="py-24 lg:py-32 bg-background border-t border-border/50"
    >
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
            Inside Our Factory
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            Our Manufacturing Process
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Inside our Faridabad facility — where machines, expertise and
            quality control come together to fabricate precision cargo
            structures for India's EV industry.
          </p>
        </motion.div>

        {/* Factory Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-20 max-w-7xl mx-auto">
          {factoryImages.map((img, i) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="group relative rounded-xl overflow-hidden border border-border/40 shadow-soft hover:shadow-medium transition-all duration-300 h-full flex flex-col items-center justify-center bg-muted/10"
              data-ocid={`factory-image-${img.id}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-xs text-white/90 font-medium leading-tight">
                  {img.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-transparent via-border to-transparent" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map(
              ({ id, step, title, description, color, bg }, i) => (
                <motion.div
                  key={id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.12 }}
                  className="relative flex flex-col"
                  data-ocid={`process-step-${id}`}
                >
                  {/* Step number circle */}
                  <div className="relative mb-6">
                    <div
                      className={`w-20 h-20 rounded-full ${bg} border-2 flex items-center justify-center mx-auto lg:mx-0 shadow-soft`}
                    >
                      <span
                        className={`font-display font-black text-2xl ${color}`}
                      >
                        {step}
                      </span>
                    </div>
                  </div>

                  <h3 className="font-display font-bold text-lg text-foreground mb-3 text-center lg:text-left">
                    {title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed text-center lg:text-left">
                    {description}
                  </p>

                  {/* Arrow connector (mobile/tablet) */}
                  {i < processSteps.length - 1 && (
                    <div className="lg:hidden flex justify-center mt-6">
                      <div className="w-px h-8 bg-gradient-to-b from-border to-transparent" />
                    </div>
                  )}
                </motion.div>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
