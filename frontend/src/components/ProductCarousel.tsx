"use client";

import { motion } from "motion/react";
import { useRef } from "react";

const slides = [
  {
    url: "/assets/generated/carousel-ev-cargo.dim_1200x700.jpg",
    caption: "EV Cargo Box Manufacturing",
    sub: "Robotic assembly lines for electric vehicle cargo bodies",
  },
  {
    url: "/assets/generated/carousel-sheet-metal.dim_1200x700.jpg",
    caption: "Sheet Metal Fabrication",
    sub: "Industrial press & stamping machines shaping steel panels",
  },
  {
    url: "/assets/generated/carousel-body-assembly.dim_1200x700.jpg",
    caption: "Commercial Vehicle Body Assembly",
    sub: "Workers & machines building commercial vehicle body panels",
  },
  {
    url: "/assets/generated/carousel-robotic-welding.dim_1200x700.jpg",
    caption: "Robotic Welding Process",
    sub: "High-precision robotic welding with intense spark arcs",
  },
  {
    url: "/assets/generated/carousel-cnc-machining.dim_1200x700.jpg",
    caption: "CNC Machining",
    sub: "Advanced CNC cutting and drilling of precision metal parts",
  },
  {
    url: "/assets/generated/carousel-factory-overview.dim_1200x700.jpg",
    caption: "Factory Production Overview",
    sub: "Wide-scale automotive factory floor with full production lines",
  },
];

// Duplicate slides for seamless infinite loop
const loopedSlides = [...slides, ...slides];

export function ProductCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);

  return (
    <section
      className="py-16 bg-gray-900 border-t border-gray-800 overflow-hidden"
      data-ocid="product-carousel.section"
    >
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10 px-4"
      >
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest uppercase text-amber-400 mb-3">
          <span className="inline-block w-4 h-px bg-amber-400/60" />
          Gallery
          <span className="inline-block w-4 h-px bg-amber-400/60" />
        </span>
        <h2 className="font-bold text-3xl sm:text-4xl text-white mb-3">
          Our Products{" "}
          <span
            style={{
              background: "linear-gradient(90deg, #60a5fa 0%, #34d399 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            in Action
          </span>
        </h2>
        <div className="flex items-center justify-center gap-1 mb-4">
          <div className="h-0.5 w-10 rounded-full bg-blue-500" />
          <div className="h-1 w-2 rounded-full bg-amber-400" />
          <div className="h-0.5 w-5 rounded-full bg-teal-400" />
        </div>
        <p className="text-gray-400 text-base sm:text-lg max-w-xl mx-auto">
          A glimpse into Fox Enterprises manufacturing excellence
        </p>
      </motion.div>

      {/* Scrollable carousel track — full viewport width */}
      <div
        ref={trackRef}
        className="w-full overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing"
        style={{ WebkitOverflowScrolling: "touch" }}
        onMouseDown={(e) => {
          const el = trackRef.current;
          if (!el) return;
          const startX = e.pageX - el.offsetLeft;
          const scrollLeft = el.scrollLeft;
          const onMove = (ev: MouseEvent) => {
            const walk = (ev.pageX - el.offsetLeft - startX) * 1.2;
            el.scrollLeft = scrollLeft - walk;
          };
          const onUp = () => {
            window.removeEventListener("mousemove", onMove);
            window.removeEventListener("mouseup", onUp);
          };
          window.addEventListener("mousemove", onMove);
          window.addEventListener("mouseup", onUp);
        }}
      >
        {/* Marquee animation via CSS */}
        <div
          className="flex gap-4 w-max animate-marquee"
          style={{ paddingLeft: "1rem", paddingRight: "1rem" }}
        >
          {loopedSlides.map((slide, i) => (
            <div
              key={`${slide.caption}-${i}`}
              className="relative flex-shrink-0 w-72 sm:w-96 h-64 sm:h-80 rounded-2xl overflow-hidden shadow-xl group border border-gray-700/50"
              data-ocid={`product-carousel.item.${(i % slides.length) + 1}`}
            >
              <img
                src={slide.url}
                alt={slide.caption}
                loading="lazy"
                draggable={false}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 select-none"
              />
              {/* Bottom caption overlay */}
              <div
                className="absolute bottom-0 left-0 right-0 h-36"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.30) 60%, transparent 100%)",
                }}
              />
              {/* Amber top accent on hover */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-amber-500/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white font-semibold text-sm sm:text-base drop-shadow-md leading-tight">
                  {slide.caption}
                </p>
                <p className="text-gray-300 text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 leading-snug line-clamp-2">
                  {slide.sub}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
