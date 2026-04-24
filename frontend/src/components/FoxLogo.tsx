"use client";

interface FoxLogoProps {
  size?: number;
  className?: string;
}

/**
 * Fox Enterprises Premium Logo — New 3D metallic brand identity.
 */
export function FoxLogo({ size = 40, className = "" }: FoxLogoProps) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden rounded-xl shadow-elevation bg-[#0f0f0f] ${className}`}
      style={{ height: size, width: size }} // Square ratio to match the provided logo file
    >
      <img
        src="/logo-fox-premium.jpg"
        alt="Fox Enterprises Premium Logo"
        className="w-full h-full object-cover"
        draggable={false}
      />
    </div>
  );
}

/**
 * Legacy SVG logo mark — kept for internal references if needed.
 */
export function FoxLogoSVG({ size = 36, className = "" }: FoxLogoProps) {
  const width = size * (100 / 60);
  return (
    <svg
      width={width}
      height={size}
      viewBox="0 0 120 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Fox Enterprises logo"
      className={className}
    >
      <title>Fox Enterprises</title>
      <defs>
        <linearGradient
          id="metal-grad"
          x1="0"
          y1="0"
          x2="120"
          y2="45"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#734226" />
          <stop offset="20%" stopColor="#AD6F44" />
          <stop offset="45%" stopColor="#E6C3A1" />
          <stop offset="55%" stopColor="#E6C3A1" />
          <stop offset="80%" stopColor="#AD6F44" />
          <stop offset="100%" stopColor="#734226" />
        </linearGradient>
        <linearGradient
          id="bevel-grad"
          x1="0"
          y1="0"
          x2="0"
          y2="45"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="white" stopOpacity="0.4" />
          <stop offset="50%" stopColor="white" stopOpacity="0" />
          <stop offset="100%" stopColor="black" stopOpacity="0.3" />
        </linearGradient>
        <filter id="logo-drop-shadow" x="-10%" y="0" width="120%" height="130%">
          <feDropShadow dx="1" dy="1.5" stdDeviation="1.2" floodOpacity="0.4" />
        </filter>
      </defs>
      <g filter="url(#logo-drop-shadow)">
        <path
          d="M26 2 A 20.5 20.5 0 0 0 26 43"
          stroke="url(#metal-grad)"
          strokeWidth="4"
        />
        <path
          d="M26 4 L22 2 L19 6 L26 8 M26 14 L18 12 L16 17 L26 19 M26 25 L16 25 L16 30 L26 30 M26 36 L18 38 L20 43 L26 41"
          fill="url(#metal-grad)"
        />
        <path
          d="M26 11 A 11.5 11.5 0 0 0 26 34"
          stroke="url(#metal-grad)"
          strokeWidth="2.5"
        />
        <rect x="25" y="2" width="2.5" height="41" fill="url(#metal-grad)" />
        <g transform="translate(33, 0)">
          <path
            d="M2 10.5 H23 V17.5 H10.5 V23.5 H21 V30.5 H10.5 V43 H2 Z"
            fill="url(#metal-grad)"
          />
          <path
            d="M48 26.5 C48 16.5 41.5 10.5 33 10.5 C24.5 10.5 18 16.5 18 26.5 C18 36.5 24.5 43 33 43 C41.5 43 48 36.5 48 26.5 Z M26.5 26.5 C26.5 20.5 29 17.5 33 17.5 C37 17.5 39.5 20.5 39.5 26.5 C39.5 32.5 37 35.5 33 35.5 C29 35.5 26.5 32.5 26.5 26.5 Z"
            fill="url(#metal-grad)"
          />
          <path
            d="M50 10.5 L60 26.5 L50 43 H59 L65.5 32 L72 43 H81 L71 26.5 L81 10.5 H72 L65.5 21 L59 10.5 Z"
            fill="url(#metal-grad)"
          />
        </g>
      </g>
    </svg>
  );
}

/* ── Legacy icon-size logos (kept for backward compatibility) ─────── */

interface ClientLogoProps {
  size?: number;
}

/** @deprecated Use EulerLogoCard for TrustedBy section */
export function EulerLogo({ size = 20 }: ClientLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Euler Motors"
    >
      <title>Euler Motors</title>
      <path
        d="M4 5h12M4 5v10M4 15h12M4 10h9"
        stroke="#1B4FD8"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 4l-2 4h3l-3 6"
        stroke="#F97316"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ── Premium card-size logo components for TrustedBy section ─────── */

/** Base card wrapper with hover effects for real logo images */
function LogoImageCard({
  src,
  alt,
  fallbackContent,
}: {
  src: string;
  alt: string;
  fallbackContent: React.ReactNode;
}) {
  return (
    <div className="relative flex items-center justify-center w-[180px] h-[80px]">
      <img
        src={src}
        alt={alt}
        className="max-h-[60px] max-w-[150px] w-auto object-contain"
        style={{ filter: "grayscale(15%) contrast(1.05)" }}
        onError={(e) => {
          const target = e.currentTarget as HTMLImageElement;
          target.style.display = "none";
          const fallback = target.nextElementSibling as HTMLElement;
          if (fallback) fallback.style.display = "flex";
        }}
      />
      {/* Fallback shown if image fails */}
      <div className="hidden absolute inset-0 items-center justify-center">
        {fallbackContent}
      </div>
    </div>
  );
}

/**
 * Euler Motors — Real logo with rich SVG fallback
 * Tries official site first, Wikimedia second, then SVG fallback
 */
export function EulerLogoCard() {
  return (
    <LogoImageCard
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Euler_Motors_logo.png/320px-Euler_Motors_logo.png"
      alt="Euler Motors"
      fallbackContent={
        <svg
          width="160"
          height="60"
          viewBox="0 0 160 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Euler Motors logo"
        >
          <title>Euler Motors</title>
          <defs>
            <linearGradient
              id="euler-bolt"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
              gradientUnits="objectBoundingBox"
            >
              <stop offset="0%" stopColor="#F97316" />
              <stop offset="100%" stopColor="#DC2626" />
            </linearGradient>
          </defs>
          {/* Lightning bolt icon */}
          <polygon points="28,6 18,28 25,28 16,54 34,24 26,24" fill="#F97316" />
          {/* EULER wordmark */}
          <text
            x="44"
            y="30"
            fontFamily="'Arial Black','Impact',sans-serif"
            fontWeight="900"
            fontSize="20"
            letterSpacing="1"
            fill="#1B4FD8"
          >
            EULER
          </text>
          {/* MOTORS subtitle */}
          <text
            x="44"
            y="46"
            fontFamily="Arial,sans-serif"
            fontWeight="500"
            fontSize="9"
            letterSpacing="3.5"
            fill="#64748B"
          >
            MOTORS
          </text>
          {/* Bottom rule */}
          <rect
            x="44"
            y="50"
            width="100"
            height="1.5"
            rx="0.75"
            fill="#1B4FD8"
            opacity="0.25"
          />
        </svg>
      }
    />
  );
}

/**
 * Bajaj Auto — Real logo from Wikimedia Commons
 */
export function BajajLogoCard() {
  return (
    <LogoImageCard
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Bajaj_Auto_logo.svg/320px-Bajaj_Auto_logo.svg.png"
      alt="Bajaj Auto"
      fallbackContent={
        <svg
          width="150"
          height="60"
          viewBox="0 0 150 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Bajaj Auto logo"
        >
          <title>Bajaj Auto</title>
          {/* Badge shield */}
          <path d="M12 6 L28 6 L32 12 L28 54 L12 54 L8 12 Z" fill="#1E3A8A" />
          <path
            d="M14 10 L26 10 L29.5 15 L26 50 L14 50 L10.5 15 Z"
            fill="none"
            stroke="#93C5FD"
            strokeWidth="0.8"
            opacity="0.5"
          />
          <text
            x="20"
            y="36"
            fontFamily="'Arial Black',sans-serif"
            fontWeight="900"
            fontSize="13"
            fill="white"
            textAnchor="middle"
            letterSpacing="0.5"
          >
            B
          </text>
          {/* BAJAJ wordmark */}
          <text
            x="44"
            y="28"
            fontFamily="'Arial Black','Impact',sans-serif"
            fontWeight="900"
            fontSize="18"
            letterSpacing="1.5"
            fill="#1E3A8A"
          >
            BAJAJ
          </text>
          {/* AUTO subtitle */}
          <text
            x="44"
            y="44"
            fontFamily="Arial,sans-serif"
            fontWeight="600"
            fontSize="9"
            letterSpacing="4"
            fill="#64748B"
          >
            AUTO
          </text>
          {/* Accent rule */}
          <rect
            x="44"
            y="48"
            width="92"
            height="1.5"
            rx="0.75"
            fill="#1E3A8A"
            opacity="0.2"
          />
        </svg>
      }
    />
  );
}

/**
 * Piaggio — Real logo from Wikimedia Commons
 */
export function PiaggioLogoCard() {
  return (
    <LogoImageCard
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Piaggio_logo.svg/320px-Piaggio_logo.svg.png"
      alt="Piaggio"
      fallbackContent={
        <svg
          width="160"
          height="60"
          viewBox="0 0 160 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Piaggio logo"
        >
          <title>Piaggio</title>
          {/* Top accent bar */}
          <rect x="8" y="6" width="144" height="3" rx="1.5" fill="#DC2626" />
          {/* PIAGGIO in classic serif-like style */}
          <text
            x="8"
            y="40"
            fontFamily="Georgia,'Times New Roman',serif"
            fontStyle="italic"
            fontWeight="700"
            fontSize="24"
            letterSpacing="1"
            fill="#1E293B"
          >
            PIAGGIO
          </text>
          {/* Bottom accent bar */}
          <rect
            x="8"
            y="46"
            width="144"
            height="2"
            rx="1"
            fill="#DC2626"
            opacity="0.7"
          />
          {/* Founded year */}
          <text
            x="9"
            y="58"
            fontFamily="Arial,sans-serif"
            fontWeight="400"
            fontSize="7"
            letterSpacing="2.5"
            fill="#94A3B8"
          >
            EST. 1884 · ITALY
          </text>
        </svg>
      }
    />
  );
}

/**
 * E Next Mobility — Premium designed SVG brand logo
 * Clean electric blue-to-teal gradient circle with "E" + wordmark
 */
export function ENextMobilityLogoCard() {
  return (
    <div className="flex items-center justify-center w-[180px] h-[80px]">
      <div className="flex items-center gap-3">
        {/* Premium gradient circle badge */}
        <svg
          width="46"
          height="46"
          viewBox="0 0 46 46"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <linearGradient
              id="enm-grad"
              x1="0"
              y1="0"
              x2="46"
              y2="46"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0EA5E9" />
              <stop offset="0.5" stopColor="#06B6D4" />
              <stop offset="1" stopColor="#10B981" />
            </linearGradient>
            <linearGradient
              id="enm-ring"
              x1="0"
              y1="0"
              x2="46"
              y2="46"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#7DD3FC" stopOpacity="0.5" />
              <stop offset="1" stopColor="#6EE7B7" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          <circle cx="23" cy="23" r="22" fill="url(#enm-grad)" />
          <circle
            cx="23"
            cy="23"
            r="19.5"
            fill="none"
            stroke="url(#enm-ring)"
            strokeWidth="1"
          />
          {/* Bold E letter */}
          <text
            x="23"
            y="29"
            fontFamily="'Arial Black',Impact,sans-serif"
            fontWeight="900"
            fontSize="19"
            fill="white"
            textAnchor="middle"
            letterSpacing="-0.5"
          >
            E
          </text>
          {/* Lightning accent dot */}
          <circle cx="35" cy="11" r="3.5" fill="white" opacity="0.25" />
          <path
            d="M34.5 9.5L33.2 12.5h2.3L33.5 15.5"
            stroke="white"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.9"
          />
        </svg>
        {/* Wordmark */}
        <div className="flex flex-col leading-none">
          <span
            className="font-display font-black text-[17px] tracking-tight leading-tight"
            style={{
              background: "linear-gradient(135deg, #0EA5E9, #10B981)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            E-NEXT
          </span>
          <span
            className="text-[8.5px] font-bold tracking-[0.22em] uppercase mt-0.5"
            style={{ color: "#64748B" }}
          >
            MOBILITY
          </span>
        </div>
      </div>
    </div>
  );
}

/**
 * E Auto — Premium designed SVG brand logo
 * Bold blue shield badge with E+bolt, clean automotive wordmark
 */
export function EAutoLogoCard() {
  return (
    <div className="flex items-center justify-center w-[180px] h-[80px]">
      <div className="flex items-center gap-3">
        {/* Premium hexagon/shield badge */}
        <svg
          width="44"
          height="46"
          viewBox="0 0 44 46"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <linearGradient
              id="eauto-grad"
              x1="0"
              y1="0"
              x2="44"
              y2="46"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#2563EB" />
              <stop offset="1" stopColor="#1D4ED8" />
            </linearGradient>
          </defs>
          {/* Shield path */}
          <path
            d="M22 2L38 9V24C38 34 22 44 22 44C22 44 6 34 6 24V9L22 2Z"
            fill="url(#eauto-grad)"
          />
          <path
            d="M22 5L35 11V24C35 32.5 22 41 22 41C22 41 9 32.5 9 24V11L22 5Z"
            fill="none"
            stroke="rgba(147,197,253,0.35)"
            strokeWidth="1"
          />
          {/* Bold E letter */}
          <text
            x="22"
            y="29"
            fontFamily="'Arial Black',Impact,sans-serif"
            fontWeight="900"
            fontSize="18"
            fill="white"
            textAnchor="middle"
            letterSpacing="-0.5"
          >
            E
          </text>
          {/* Lightning bolt top-right accent */}
          <path
            d="M32 7L30 12h2.5L29.5 18"
            stroke="#FCD34D"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        {/* Wordmark */}
        <div className="flex flex-col leading-none">
          <span className="font-display font-black text-[20px] tracking-tight text-blue-700 leading-tight">
            E AUTO
          </span>
          <span
            className="text-[8.5px] font-bold tracking-[0.22em] uppercase mt-0.5"
            style={{ color: "#64748B" }}
          >
            FARIDABAD
          </span>
        </div>
      </div>
    </div>
  );
}

/** @deprecated — use BajajLogoCard for TrustedBy section */
export function BajajLogo({ size = 56 }: ClientLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Bajaj Auto logo mark"
    >
      <title>Bajaj Auto</title>
      <rect
        x="1"
        y="1"
        width="54"
        height="54"
        rx="12"
        fill="url(#ba-bg)"
        stroke="url(#ba-border)"
        strokeWidth="1"
      />
      <path
        d="M17 14h10c4.5 0 7 2.5 7 5.5 0 2-1 3.5-2.8 4.5 2.5 1 4 3 4 5.5 0 3.5-2.8 6.5-7.5 6.5H17V14z"
        fill="none"
        stroke="url(#ba-letter)"
        strokeWidth="2.2"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <path
        d="M17 28h11"
        stroke="url(#ba-letter)"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M32 10L38 14"
        stroke="#60a5fa"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.7"
      />
      <defs>
        <linearGradient
          id="ba-bg"
          x1="0"
          y1="0"
          x2="56"
          y2="56"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1e3a5f" />
          <stop offset="1" stopColor="#0f172a" />
        </linearGradient>
        <linearGradient
          id="ba-border"
          x1="0"
          y1="0"
          x2="56"
          y2="56"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#60a5fa" stopOpacity="0.6" />
          <stop offset="1" stopColor="#3b82f6" stopOpacity="0.3" />
        </linearGradient>
        <linearGradient
          id="ba-letter"
          x1="17"
          y1="14"
          x2="34"
          y2="42"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#93c5fd" />
          <stop offset="1" stopColor="#3b82f6" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/** @deprecated — use PiaggioLogoCard for TrustedBy section */
export function PiaggioLogo({ size = 56 }: ClientLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Piaggio logo mark"
    >
      <title>Piaggio</title>
      <rect
        x="1"
        y="1"
        width="54"
        height="54"
        rx="12"
        fill="url(#pg-bg)"
        stroke="url(#pg-border)"
        strokeWidth="1"
      />
      <path
        d="M17 14v28"
        stroke="url(#pg-letter)"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M17 14h9c3.5 0 6 2.5 6 6s-2.5 6-6 6h-9"
        stroke="url(#pg-letter)"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M34 30 a10 10 0 0 1 6 9"
        stroke="url(#pg-accent)"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.8"
      />
      <path
        d="M37 27 a10 10 0 0 1 4 14"
        stroke="url(#pg-accent)"
        strokeWidth="1"
        strokeLinecap="round"
        fill="none"
        opacity="0.5"
      />
      <defs>
        <linearGradient
          id="pg-bg"
          x1="0"
          y1="0"
          x2="56"
          y2="56"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1e1535" />
          <stop offset="1" stopColor="#0f172a" />
        </linearGradient>
        <linearGradient
          id="pg-border"
          x1="0"
          y1="0"
          x2="56"
          y2="56"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#c084fc" stopOpacity="0.6" />
          <stop offset="1" stopColor="#9333ea" stopOpacity="0.3" />
        </linearGradient>
        <linearGradient
          id="pg-letter"
          x1="17"
          y1="14"
          x2="32"
          y2="42"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#e9d5ff" />
          <stop offset="1" stopColor="#a855f7" />
        </linearGradient>
        <linearGradient
          id="pg-accent"
          x1="34"
          y1="27"
          x2="42"
          y2="44"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#f0abfc" />
          <stop offset="1" stopColor="#c084fc" />
        </linearGradient>
      </defs>
    </svg>
  );
}
