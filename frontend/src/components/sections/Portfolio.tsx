"use client";

import { useEffect, useRef, useState } from "react";

// ─── Product Data ─────────────────────────────────────────────────────────────
// Developer: Replace each `image` URL with your own real factory photograph.
const products = [
  {
    id: 4,
    title: "Stack of Corrugated Metal Sheets",
    image: "/assets/corrugated-sheets-clean.jpg",
    delay: 0,
  },
  {
    id: 8,
    title: "Industrial Metal Bins (750 KG Capacity)",
    image: "/assets/generated/product-metal-components.dim_800x600.jpg",
    delay: 50,
  },
  {
    id: 5,
    title: "EV & Commercial Body Products",
    image: "/assets/ev-cargo-trucks.jpg",
    delay: 100,
  },
  {
    id: 6,
    title: "Electrical Panel Cover",
    image: "/assets/electrical-panel-cover.png",
    delay: 150,
  },
  {
    id: 7,
    title: "Euler Battery Box",
    image: "/assets/euler-battery-box.png",
    delay: 200,
  },
];

// ─── Product Card ─────────────────────────────────────────────────────────────
function ProductCard({
  product,
  index,
}: {
  product: (typeof products)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Determine fit and custom cropping
  const _isContain =
    product.image.includes("ev-cargo-trucks.jpg") ||
    product.image.includes("euler-battery-box.png");

  return (
    <div
      ref={ref}
      data-ocid={`portfolio.item.${index + 1}`}
      className="relative rounded-xl overflow-hidden group cursor-pointer bg-gray-950 shadow-xl aspect-[16/10] border border-gray-800"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(30px)",
        transition: `opacity 0.5s easeOut ${product.delay}ms, transform 0.5s easeOut ${product.delay}ms`,
      }}
    >
      {/* Product image — fills card, smooth zoom on hover */}
      <img
        src={product.image}
        alt={product.title}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.08]"
      />

      {/* Base gradient — always visible for bottom legibility */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.1) 55%, transparent 100%)",
        }}
      />

      {/* Hover overlay — dark blue-black gradient */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,10,40,0.6) 50%, transparent 100%)",
        }}
      />

      {/* Product title — bottom of card, hidden by default, fades in on hover */}
      <div className="absolute bottom-0 left-0 right-0 px-5 pb-6 pointer-events-none">
        <div className="flex items-center gap-3 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-400 ease-out">
          {/* Metallic blue left-border accent */}
          <div className="w-1.5 h-7 rounded-full bg-blue-400 flex-shrink-0" />
          <span className="text-white text-xl font-bold tracking-wide leading-snug drop-shadow-lg">
            {product.title}
          </span>
        </div>
      </div>
    </div>
  );
}

// ─── Portfolio Section ────────────────────────────────────────────────────────
export function Portfolio() {
  const headingRef = useRef<HTMLDivElement>(null);
  const [headingVisible, setHeadingVisible] = useState(false);

  useEffect(() => {
    const el = headingRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeadingVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="products"
      className="py-24 bg-[#0a0a0f] border-t border-gray-800 border-b border-b-gray-800"
      data-ocid="portfolio.section"
    >
      {/* Section heading */}
      <div
        ref={headingRef}
        className="text-center mb-16 px-4"
        style={{
          opacity: headingVisible ? 1 : 0,
          transform: headingVisible ? "translateY(0)" : "translateY(24px)",
          transition: "opacity 0.6s ease, transform 0.6s ease",
        }}
      >
        {/* Label badge */}
        <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-blue-400 mb-4">
          <span className="inline-block w-8 h-px bg-blue-400/50 rounded-full" />
          Industrial Manufacturing
          <span className="inline-block w-8 h-px bg-blue-400/50 rounded-full" />
        </span>

        {/* Main heading — metallic white gradient */}
        <h2
          className="font-bold text-4xl sm:text-5xl lg:text-6xl mb-6 leading-tight"
          style={{
            background:
              "linear-gradient(135deg, #ffffff 0%, #e2e8f0 40%, #94a3b8 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Products Showcase
        </h2>

        {/* Metallic accent underline */}
        <div className="flex items-center justify-center gap-2 mt-2 mb-6">
          <div className="h-0.5 w-16 rounded-full bg-blue-500/70" />
          <div className="h-1.5 w-3 rounded-full bg-blue-400" />
          <div className="h-0.5 w-8 rounded-full bg-slate-400/60" />
        </div>

        <p className="text-gray-400 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
          Manufactured with precision for the automotive and EV industry
        </p>
      </div>

      {/* Responsive Product Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>

      {/* Bottom metallic divider */}
      <div className="mt-16 mx-auto max-w-7xl px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />
      </div>
    </section>
  );
}
