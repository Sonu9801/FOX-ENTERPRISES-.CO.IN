"use client";

import { Star } from "lucide-react";
import { motion } from "motion/react";

const testimonials = [
  {
    id: "1",
    name: "Vikram Singh",
    role: "Operations Head",
    company: "E Next Mobility Pvt. Ltd.",
    avatar: "VS",
    avatarStyle: "bg-blue-100 border-blue-200 text-blue-700",
    topBorder: "border-t-blue-400",
    quote:
      "Fox Enterprises consistently delivers high-quality cargo box structures on time. Their precision fabrication capabilities have been instrumental to our EV production line.",
    rating: 5,
  },
  {
    id: "2",
    name: "Amit Sharma",
    role: "Procurement Manager",
    company: "Euler Motors Pvt. Ltd.",
    avatar: "AS",
    avatarStyle: "bg-emerald-100 border-emerald-200 text-emerald-700",
    topBorder: "border-t-emerald-400",
    quote:
      "We've been working with Fox Enterprises for our EV cargo structures and their quality and reliability is top-notch. A trusted fabrication partner for our supply chain.",
    rating: 5,
  },
  {
    id: "3",
    name: "Rohit Gupta",
    role: "Supply Chain Manager",
    company: "E Auto Pvt. Ltd.",
    avatar: "RG",
    avatarStyle: "bg-cyan-100 border-cyan-200 text-cyan-700",
    topBorder: "border-t-cyan-400",
    quote:
      "The team at Fox Enterprises understands EV requirements deeply. Their custom cargo boxes meet our exact specifications every time with zero compromise on quality.",
    rating: 5,
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {["s1", "s2", "s3", "s4", "s5"].slice(0, rating).map((s) => (
        <Star key={s} size={13} className="fill-amber-400 text-amber-400" />
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section
      id="testimonials"
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
            Client Voices
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            What Our Partners Say
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Words from the production heads and procurement leaders at India's
            leading automotive manufacturers.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className={`bg-card rounded-xl border border-border/50 shadow-card p-6 flex flex-col gap-4 card-hover border-t-4 ${t.topBorder}`}
              data-ocid={`testimonial-card-${t.id}`}
            >
              <StarRating rating={t.rating} />

              {/* Large quote mark */}
              <div className="text-primary/20 font-display font-black text-5xl leading-none -mt-2 select-none">
                "
              </div>

              <blockquote className="text-sm text-foreground/75 leading-relaxed flex-1 -mt-4">
                {t.quote}
              </blockquote>

              <div className="flex items-center gap-3 pt-3 border-t border-border/40">
                <div
                  className={`w-10 h-10 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${t.avatarStyle}`}
                >
                  <span className="text-xs font-display font-bold">
                    {t.avatar}
                  </span>
                </div>
                <div className="min-w-0">
                  <div className="font-display font-semibold text-sm text-foreground truncate">
                    {t.name}
                  </div>
                  <div className="text-xs text-muted-foreground truncate">
                    {t.role}, {t.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
