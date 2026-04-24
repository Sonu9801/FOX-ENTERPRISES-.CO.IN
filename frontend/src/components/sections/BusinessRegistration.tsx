"use client";

import { Award, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";

export function BusinessRegistration() {
  return (
    <section className="py-12 bg-muted/20">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-white rounded-[2rem] shadow-xl p-8 md:p-10 border border-border/40 relative overflow-hidden group"
        >
          <div className="grid grid-cols-1 md:grid-cols-11 items-center gap-8 md:gap-4 relative">
            {/* Left: GST Section */}
            <div className="md:col-span-3 text-center md:text-left flex flex-col justify-center">
              <div className="mb-4">
                <p className="text-[13px] font-black tracking-widest leading-none">
                  <span className="text-[#EAB308]">GST</span>{" "}
                  <span className="text-black">NUMBER</span>
                </p>
                <div className="w-10 h-0.5 bg-[#EAB308] mt-2 rounded-full" />
              </div>
              <p className="text-xl lg:text-2xl font-black text-[#1D4ED8] font-mono tracking-wider break-all">
                06BFMPK9545N1ZN
              </p>
            </div>

            {/* Divider 1 */}
            <div className="hidden md:flex md:col-span-1 justify-center">
              <div className="w-px h-20 bg-border/40" />
            </div>

            {/* Center: MSME Logo Section */}
            <div className="md:col-span-3 flex flex-col items-center justify-center">
              <div className="w-52 h-40 -my-8">
                <svg
                  viewBox="0 0 240 180"
                  className="w-full h-full"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Lion Emblem</title>
                  {/* Lion Emblem (Gold) */}
                  <g
                    transform="translate(120, 45) scale(0.55)"
                    textAnchor="middle"
                  >
                    <defs>
                      <linearGradient
                        id="gold-grad"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop
                          offset="0%"
                          style={{ stopColor: "#D4AF37", stopOpacity: 1 }}
                        />
                        <stop
                          offset="50%"
                          style={{ stopColor: "#C5A028", stopOpacity: 1 }}
                        />
                        <stop
                          offset="100%"
                          style={{ stopColor: "#8B6508", stopOpacity: 1 }}
                        />
                      </linearGradient>
                    </defs>
                    <path
                      d="M-15 0 C-25 -40 25 -40 15 0 L18 15 C18 25 -18 25 -18 15 Z"
                      fill="url(#gold-grad)"
                    />
                    <path
                      d="M-35 -10 C-45 -30 -15 -45 0 -45 C15 -45 45 -30 35 -10"
                      fill="none"
                      stroke="url(#gold-grad)"
                      strokeWidth="3"
                    />
                    <text
                      y="42"
                      fontFamily="serif"
                      fontSize="13"
                      fontWeight="900"
                      fill="#8B6508"
                    >
                      सत्यमेव जयते
                    </text>
                  </g>

                  {/* MSME Blocky Wordmark (Bold Blue) */}
                  <g transform="translate(120, 105)">
                    <text
                      textAnchor="middle"
                      fontFamily="Arial Black, sans-serif"
                      fontSize="48"
                      fontWeight="900"
                      fill="#1D4ED8"
                      letterSpacing="-2"
                    >
                      MSME
                    </text>
                  </g>

                  {/* Blue Separator Line */}
                  <path d="M40 118 H200" stroke="#1D4ED8" strokeWidth="3.5" />

                  {/* English Details (User Style) */}
                  <text
                    x="120"
                    y="142"
                    textAnchor="middle"
                    fontFamily="Arial Black, Arial, sans-serif"
                    fontSize="10"
                    fontWeight="900"
                    fill="#333"
                    letterSpacing="0.2"
                  >
                    MICRO, SMALL &amp; MEDIUM ENTERPRISE
                  </text>

                  {/* Hindi Details */}
                  <text
                    x="120"
                    y="162"
                    textAnchor="middle"
                    fontFamily="Arial, Helvetica, sans-serif"
                    fontSize="12"
                    fontWeight="800"
                    fill="#333"
                  >
                    सूक्ष्म, लघु एवं मध्यम उद्यम
                  </text>
                </svg>
              </div>
            </div>

            {/* Divider 2 */}
            <div className="hidden md:flex md:col-span-1 justify-center">
              <div className="w-px h-20 bg-border/40" />
            </div>

            {/* Right: MSME Registration Section */}
            <div className="md:col-span-3 text-center md:text-left flex flex-col justify-center">
              <div className="mb-4">
                <p className="text-[13px] font-black text-black tracking-widest leading-none">
                  MSME REGISTRATION
                </p>
                <div className="w-10 h-0.5 bg-[#EAB308] mt-2 rounded-full hidden md:block" />
              </div>
              <p className="text-xl lg:text-2xl font-black text-[#1D4ED8] font-mono tracking-wider mb-2 break-all">
                UDYAM-HR-03-0049094
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
