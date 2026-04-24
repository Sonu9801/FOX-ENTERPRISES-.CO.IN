"use client";

import { CheckCircle2, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { useEffect, useState } from "react";
import { SiFacebook, SiInstagram, SiX } from "react-icons/si";
import { FoxLogo } from "./FoxLogo";
import { Navbar } from "./Navbar";

const footerNav = {
  Company: [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Capabilities", href: "#capabilities" },
    { label: "Products", href: "#products" },
  ],
  Solutions: [
    { label: "Process", href: "#process" },
    { label: "Contact", href: "#contact" },
    { label: "Get a Quote", href: "#contact" },
    { label: "Testimonials", href: "#testimonials" },
  ],
};

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn", color: "#0A66C2" },
  { icon: SiFacebook, href: "#", label: "Facebook", color: "#1877F2" },
  { icon: SiX, href: "#", label: "X (Twitter)", color: "#000000" },
  { icon: SiInstagram, href: "#", label: "Instagram", color: "#E1306C" },
];

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [year, setYear] = useState<number | null>(null);
  const [utmUrl, setUtmUrl] = useState(
    "https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=",
  );

  useEffect(() => {
    setYear(new Date().getFullYear());
    setUtmUrl(
      `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
        window.location.hostname,
      )}`,
    );
  }, []);

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-card border-t border-border/50" aria-label="Footer">
        {/* Top accent gradient line */}
        <div className="h-1 w-full metallic-gradient opacity-80" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="relative flex items-center">
                  <FoxLogo size={70} />
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mb-6">
                Quality fabrication and cargo box manufacturing for electric
                vehicles. Serving Delhi NCR's EV industry from Faridabad,
                Haryana.
              </p>
              <div className="flex items-center gap-3">
                {socialLinks.map(({ icon: Icon, href, label, color }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-9 h-9 rounded-lg border border-border flex items-center justify-center transition-all duration-200 hover:scale-110 hover:shadow-md"
                    style={{
                      backgroundColor: `${color}15`,
                      borderColor: `${color}40`,
                    }}
                    data-ocid={`footer-social-${label.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    <Icon size={16} style={{ color }} />
                  </a>
                ))}
              </div>
            </div>

            {/* Links Columns */}
            <div className="lg:col-span-2 grid grid-cols-2 gap-8">
              {/* Company */}
              <div>
                <h3 className="font-display font-semibold text-xs text-foreground mb-4 tracking-widest uppercase">
                  Company
                </h3>
                <ul className="space-y-2.5">
                  {footerNav.Company.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavClick(link.href);
                        }}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Solutions */}
              <div>
                <h3 className="font-display font-semibold text-xs text-foreground mb-4 tracking-widest uppercase">
                  Solutions
                </h3>
                <ul className="space-y-2.5">
                  {footerNav.Solutions.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavClick(link.href);
                        }}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Registration (Below Mid) */}
              <div className="col-span-2 mt-4 pt-8 border-t border-border/30">
                <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
                  {/* GST Info */}
                  <div className="text-center flex flex-col gap-1.5">
                    <p className="text-[12px] sm:text-sm font-black uppercase tracking-[0.2em]">
                      <span className="text-yellow-500 brightness-90">GST</span>{" "}
                      <span className="text-black font-bold">Number</span>
                    </p>
                    <p className="text-[11px] font-bold text-blue-600 font-mono tracking-widest uppercase">
                      06BFMPK9545N1ZN
                    </p>
                  </div>

                  {/* Divider Line (Optional for clarity) */}
                  <div className="hidden lg:block w-px h-16 bg-border/40" />

                  {/* MSME Info */}
                  <div className="flex flex-col items-center gap-4">
                    <div className="w-48 h-24 -my-6">
                      <svg
                        viewBox="0 0 240 160"
                        className="w-full h-full"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>MSME Emblem</title>
                        <defs>
                          <linearGradient
                            id="emblem-grad"
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
                        <g
                          transform="translate(120, 45) scale(0.65)"
                          textAnchor="middle"
                        >
                          <path
                            d="M-15 0 C-25 -40 25 -40 15 0 L18 15 C18 25 -18 25 -18 15 Z"
                            fill="url(#emblem-grad)"
                          />
                          <path
                            d="M-35 -10 C-45 -30 -15 -45 0 -45 C15 -45 45 -30 35 -10"
                            fill="none"
                            stroke="url(#emblem-grad)"
                            strokeWidth="3"
                          />
                          <text
                            y="42"
                            fontFamily="serif"
                            fontSize="12"
                            fontWeight="bold"
                            fill="#8B6508"
                          >
                            सत्यमेव जयते
                          </text>
                        </g>
                        <g transform="translate(120, 105)">
                          <text
                            textAnchor="middle"
                            fontFamily="Arial Black, Impact, sans-serif"
                            fontSize="42"
                            fontWeight="900"
                            fill="#1a1a1a"
                            letterSpacing="-1"
                          >
                            MSME
                          </text>
                        </g>
                        <text
                          x="120"
                          y="132"
                          textAnchor="middle"
                          fontFamily="Arial, Helvetica, sans-serif"
                          fontSize="10.5"
                          fontWeight="800"
                          fill="#333"
                          letterSpacing="0.8"
                        >
                          MICRO, SMALL &amp; MEDIUM ENTERPRISES
                        </text>
                        <text
                          x="120"
                          y="148"
                          textAnchor="middle"
                          fontFamily="Arial, Helvetica, sans-serif"
                          fontSize="10.5"
                          fontWeight="800"
                          fill="#333"
                        >
                          सूक्ष्म, लघु एवं मध्यम उद्यम
                        </text>
                        <path
                          d="M50 115 H190"
                          stroke="#1a1a1a"
                          strokeWidth="2.5"
                        />
                      </svg>
                    </div>
                    <div className="bg-primary/5 px-6 py-2 rounded-full border border-primary/20 shadow-sm">
                      <p className="text-[11px] font-black text-primary tracking-widest uppercase">
                        Reg No: UDYAM-HR-03-0049094
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <p className="text-xs text-muted-foreground">
              © {year || "2026"} Fox Enterprises. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground">
              Built with love using{" "}
              <a
                href={utmUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
