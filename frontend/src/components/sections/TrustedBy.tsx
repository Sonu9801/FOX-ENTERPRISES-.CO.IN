"use client";

import {
  BajajLogoCard,
  EAutoLogoCard,
  ENextMobilityLogoCard,
  EulerLogoCard,
  PiaggioLogoCard,
} from "@/components/FoxLogo";
import { motion } from "motion/react";

const logoCards = [
  { component: EulerLogoCard, name: "Euler Motors", ocid: "euler-motors" },
  {
    component: ENextMobilityLogoCard,
    name: "E Next Mobility",
    ocid: "e-next-mobility",
  },
  { component: EAutoLogoCard, name: "E Auto", ocid: "e-auto" },
  { component: BajajLogoCard, name: "Bajaj Auto", ocid: "bajaj-auto" },
  { component: PiaggioLogoCard, name: "Piaggio", ocid: "piaggio" },
];

export function TrustedBy() {
  return (
    <section
      id="trusted-by"
      className="border-t border-gray-100 py-20 bg-gradient-to-b from-slate-50 to-white"
      data-ocid="trusted-by.section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest uppercase text-blue-600 mb-3">
            <span className="inline-block w-4 h-px bg-blue-400" />
            Our Partners
            <span className="inline-block w-4 h-px bg-blue-400" />
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-900 mb-3">
            Trusted by India's Leading Brands
          </h2>
          <div className="flex items-center justify-center gap-1 mb-4">
            <div className="h-0.5 w-8 rounded-full bg-blue-600" />
            <div className="h-0.5 w-4 rounded-full bg-teal-500" />
            <div className="h-0.5 w-2 rounded-full bg-blue-300" />
          </div>
          <p className="text-sm text-gray-500 max-w-md mx-auto">
            Powering India's electric mobility ecosystem with
            precision-engineered components
          </p>
        </motion.div>

        {/* Thin top rule */}
        <div className="flex items-center gap-4 mb-10">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
          <div className="w-1.5 h-1.5 rounded-full bg-blue-300" />
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
        </div>

        {/* Logo cards row */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          {logoCards.map(({ component: LogoCard, name, ocid }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative flex flex-col items-center justify-center rounded-2xl bg-white border border-gray-100 shadow-medium hover:shadow-large hover:-translate-y-1 transition-all duration-300 cursor-pointer overflow-hidden"
              style={{ minWidth: 180, padding: "1.5rem 2rem" }}
              data-ocid={`trusted-by.${ocid}`}
            >
              {/* Hover accent top strip */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-teal-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

              <LogoCard />

              {/* Brand name */}
              <span className="mt-2 text-[11px] text-gray-400 font-semibold tracking-widest uppercase group-hover:text-blue-500 transition-colors duration-200">
                {name}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Thin bottom rule + accent dots */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mt-12"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
            <div className="flex items-center gap-2">
              {[1, 2, 3, 4, 5].map((n) => (
                <div
                  key={n}
                  className={`rounded-full transition-all duration-300 ${
                    n === 3
                      ? "w-6 h-1.5 bg-gradient-to-r from-blue-600 to-teal-500"
                      : "w-1.5 h-1.5 bg-gray-200"
                  }`}
                />
              ))}
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
          </div>

          {/* Tagline */}
          <p className="text-center text-[10px] sm:text-xs text-gray-400 tracking-widest uppercase font-medium">
            MSME Certified · GST Registered · Faridabad, India
          </p>
        </motion.div>
      </div>
    </section>
  );
}
