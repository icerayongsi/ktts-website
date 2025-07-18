import React, { useRef, useEffect, useState } from "react";
import sumitomoLogo from "@/assets/sumitomo.png";
import siamLogo from "@/assets/siam.png";
import osotspaLogo from "@/assets/osotspa.png";
import goodyearLogo from "@/assets/goodyear.png";
import chLogo from "@/assets/ch.png";

const customerLogos = [
  { src: sumitomoLogo, alt: "Sumitomo" },
  { src: siamLogo, alt: "Siam\u00A0Calsonic" },
  { src: osotspaLogo, alt: "Osotspa" },
  { src: goodyearLogo, alt: "Goodyear" },
  { src: chLogo, alt: "CH" },
];

const CustomerReference: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  // สร้าง array ที่ซ้ำกัน 4 ชุด เพื่อให้ animation ดู seamless
  const duplicatedLogos = [
    ...customerLogos,
    ...customerLogos,
    ...customerLogos,
    ...customerLogos,
  ];

  return (
    <section className="py-12 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-2 text-gray-800 drop-shadow">
          Customer Reference
        </h2>
        <p className="text-center text-gray-500 mb-8">ลูกค้าที่ไว้วางใจเรา</p>

        {/* Enhanced Logos Container */}
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="pointer-events-none absolute left-0 top-0 w-24 sm:w-32 h-full bg-gradient-to-r from-blue-100/80 to-transparent z-20"></div>
          <div className="pointer-events-none absolute right-0 top-0 w-24 sm:w-32 h-full bg-gradient-to-l from-cyan-100/80 to-transparent z-20"></div>

          {/* Main Scrolling Container */}
          <div className="overflow-hidden w-full py-8">
            <div
              ref={containerRef}
              className={`flex items-center gap-12 px-4 infinite-scroll ${
                isPaused ? "paused" : ""
              }`}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {duplicatedLogos.map((logo, idx) => (
                <div key={idx} className="group relative flex-shrink-0">
                  {/* Logo Container */}
                  <div className="relative bg-white shadow-xl hover:shadow-2xl border border-gray-100 rounded-2xl p-4 sm:p-6 transition-all duration-500 hover:scale-110 hover:-rotate-1 flex items-center justify-center min-w-[120px] min-h-[60px]">
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="h-16 sm:h-20 w-auto object-contain transition-all duration-500"
                      draggable={false}
                    />
                    {/* Hover Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  </div>
                  {/* Brand Name Tooltip */}
                  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 scale-95 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300">
                    <span className="text-gray-700 text-xs sm:text-sm font-medium px-3 py-1 bg-white shadow-lg rounded-full border border-gray-200">
                      {logo.alt}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Optimized CSS Animation */}
        <style>{`
          @keyframes infinite-marquee {
            0% { 
              transform: translateX(0); 
            }
            100% { 
              transform: translateX(calc(-25% - 3rem)); 
            }
          }
          
          .infinite-scroll {
            animation: infinite-marquee 30s linear infinite;
            will-change: transform;
            transform: translateZ(0);
            backface-visibility: hidden;
            perspective: 1000px;
          }
          
          .infinite-scroll.paused {
            animation-play-state: paused;
          }
          
          /* Performance optimizations */
          .infinite-scroll * {
            transform: translateZ(0);
          }
          
          /* Responsive speed adjustments */
          @media (max-width: 768px) {
            .infinite-scroll {
              animation-duration: 25s;
            }
          }
          
          @media (max-width: 480px) {
            .infinite-scroll {
              animation-duration: 20s;
            }
          }
        `}</style>
      </div>
    </section>
  );
};

export default CustomerReference;
