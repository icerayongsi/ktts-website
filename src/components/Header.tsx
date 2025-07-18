import {
  Building2,
  Menu,
  X,
  ChevronDown,
  Zap,
  Shield,
  Star,
} from "lucide-react";
import { useState, useEffect } from "react";
import kttechLogo from "@/assets/kttech-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const sectionIds = ["home", "about", "services", "portfolio", "contact"];
    const handleScroll = () => {
      let currentSection = "home";
      for (let i = 0; i < sectionIds.length; i++) {
        const section = document.getElementById(sectionIds[i]);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom > 120) {
            currentSection = sectionIds[i];
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { id: "home", label: "หน้าแรก", icon: <Building2 className="w-4 h-4" /> },
    {
      id: "about",
      label: "เกี่ยวกับเรา",
      icon: <Shield className="w-4 h-4" />,
    },
    { id: "services", label: "บริการ", icon: <Zap className="w-4 h-4" /> },
    { id: "portfolio", label: "ผลงาน", icon: <Star className="w-4 h-4" /> },
    { id: "contact", label: "ติดต่อเรา", icon: <Menu className="w-4 h-4" /> },
  ];

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-1 md:h-2 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 z-50 animate-pulse"></div>

      <header
        className={`fixed top-1 md:top-2 left-0 w-full z-50 transition-all duration-500 ease-out ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl shadow-xl shadow-blue-500/10 border border-blue-200/50"
            : "bg-gradient-to-r from-white/90 via-white/95 to-white/90 backdrop-blur-lg border border-white/40"
        }`}
        style={{
          background: scrolled
            ? "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(248,250,252,0.98) 100%)"
            : "linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(248,250,252,0.95) 50%, rgba(255,255,255,0.9) 100%)",
        }}
      >
        {/* Dynamic background pattern - Hidden on mobile for performance */}
        <div className="absolute inset-0 opacity-30 hidden md:block">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-cyan-500/5"></div>
          <div
            className="absolute w-96 h-96 bg-gradient-radial from-blue-500/10 to-transparent rounded-full blur-3xl transition-all duration-300"
            style={{
              left: `${mousePosition.x - 192}px`,
              top: `${mousePosition.y - 192}px`,
              transform: "translate(-50%, -50%)",
            }}
          ></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative">
          <div className="flex items-center justify-between h-14 md:h-20">
            {/* Enhanced Logo Section - More compact on mobile */}
            <div className="flex items-center space-x-2 md:space-x-4 group cursor-pointer">
              <div className="relative">
                {/* Multiple layered glows */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-all duration-700 animate-pulse"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-xl opacity-10 group-hover:opacity-30 transition-all duration-700 scale-110"></div>

                {/* Logo image with animated border - Smaller on mobile */}
                <div className="relative w-10 h-10 md:w-16 md:h-16 rounded-lg md:rounded-2xl shadow-2xl transform group-hover:scale-105 group-hover:rotate-3 transition-all duration-500 flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 to-cyan-50">
                  <img
                    src={kttechLogo}
                    alt="KT Tech Solution Logo"
                    className="w-8 h-8 md:w-14 md:h-14 object-contain rounded-lg md:rounded-2xl drop-shadow-lg transition-all duration-500"
                    style={{ background: "transparent" }}
                  />
                  {/* Animated border */}
                  <div className="absolute inset-0 rounded-lg md:rounded-2xl border border-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 animate-spin-slow opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                </div>
              </div>

              <div className="flex flex-col">
                <h1 className="text-sm md:text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent tracking-wide drop-shadow-sm group-hover:tracking-wider transition-all duration-300">
                  KT TECH SOLUTION
                </h1>
                <span className="text-xs md:text-sm bg-gradient-to-r from-gray-600 to-gray-700 bg-clip-text text-transparent font-medium tracking-wider group-hover:tracking-widest transition-all duration-300">
                  CO., LTD.
                </span>

                {/* Animated underline */}
                <div className="h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 w-0 group-hover:w-full transition-all duration-700 rounded-full mt-1"></div>
              </div>
            </div>

            {/* Enhanced Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map((item, index) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`nav-link relative px-6 py-3 font-semibold text-gray-700 hover:text-white transition-all duration-500 group rounded-2xl overflow-hidden ${
                    activeSection === item.id ? "text-white" : ""
                  }`}
                  onClick={() => setActiveSection(item.id)}
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animation: "slideInDown 0.8s ease-out forwards",
                  }}
                >
                  {/* Background gradient on hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-2xl transition-all duration-500 ${
                      activeSection === item.id
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100"
                    }`}
                  ></div>

                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                  <div className="relative z-10 flex items-center space-x-2">
                    {item.icon}
                    <span>{item.label}</span>
                  </div>

                  {/* Floating particles effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="particle absolute w-1 h-1 bg-white rounded-full animate-float-1"></div>
                    <div className="particle absolute w-1 h-1 bg-white rounded-full animate-float-2"></div>
                    <div className="particle absolute w-1 h-1 bg-white rounded-full animate-float-3"></div>
                  </div>
                </a>
              ))}
            </nav>

            {/* Enhanced Mobile Menu Button - Smaller and more refined */}
            <button
              className="lg:hidden relative w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 hover:from-blue-500/20 hover:to-cyan-500/20 transition-all duration-300 group overflow-hidden border border-blue-200/50 hover:border-blue-300/80 flex items-center justify-center"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>

              {/* Button content */}
              <div className="relative z-10">
                {isMenuOpen ? (
                  <X className="h-5 w-5 text-gray-700 group-hover:text-white transform transition-all duration-200" />
                ) : (
                  <Menu className="h-5 w-5 text-gray-700 group-hover:text-white transition-all duration-200" />
                )}
              </div>

              {/* Ripple effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-400 to-cyan-400 opacity-0 group-active:opacity-30 transition-all duration-200"></div>
            </button>
          </div>

          {/* Enhanced Mobile Navigation - Optimized for smooth animation */}
          <div
            className={`lg:hidden transition-all duration-300 ease-out ${
              isMenuOpen
                ? "max-h-96 opacity-100"
                : "max-h-0 opacity-0 overflow-hidden"
            }`}
          >
            <div className="pb-4 pt-2 space-y-1 relative">
              {/* Background blur */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/90 to-white/95 backdrop-blur-lg rounded-xl border border-white/50 shadow-lg"></div>

              {navItems.map((item, index) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`relative block px-4 py-3 text-gray-700 hover:text-white font-medium transition-all duration-300 group rounded-xl mx-2 overflow-hidden transform ${
                    isMenuOpen
                      ? "translate-x-0 opacity-100"
                      : "translate-x-4 opacity-0"
                  }`}
                  onClick={() => {
                    setActiveSection(item.id);
                    setIsMenuOpen(false);
                  }}
                  style={{
                    transitionDelay: `${index * 50}ms`,
                  }}
                >
                  {/* Hover background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 scale-95 group-hover:scale-100"></div>

                  {/* Content */}
                  <div className="relative z-10 flex items-center space-x-3">
                    <div className="flex-shrink-0">{item.icon}</div>
                    <span className="text-sm">{item.label}</span>
                  </div>

                  {/* Side accent */}
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-0 bg-gradient-to-b from-blue-500 to-cyan-500 group-hover:h-8 transition-all duration-300 rounded-r-full"></div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </header>

      <style>{`
        @keyframes slideInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float-1 {
          0%, 100% { transform: translate(10px, 10px) scale(0); }
          50% { transform: translate(20px, 5px) scale(1); }
        }
        
        @keyframes float-2 {
          0%, 100% { transform: translate(30px, 20px) scale(0); }
          50% { transform: translate(15px, 10px) scale(1); }
        }
        
        @keyframes float-3 {
          0%, 100% { transform: translate(20px, 30px) scale(0); }
          50% { transform: translate(35px, 15px) scale(1); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-float-1 {
          animation: float-1 3s ease-in-out infinite;
        }
        
        .animate-float-2 {
          animation: float-2 3s ease-in-out infinite 0.5s;
        }
        
        .animate-float-3 {
          animation: float-3 3s ease-in-out infinite 1s;
        }
        
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        
        .particle {
          animation-duration: 2s;
          animation-iteration-count: infinite;
          animation-timing-function: ease-in-out;
        }
        
        .particle:nth-child(1) {
          top: 20%;
          left: 20%;
        }
        
        .particle:nth-child(2) {
          top: 60%;
          right: 30%;
        }
        
        .particle:nth-child(3) {
          bottom: 30%;
          left: 60%;
        }
        
        /* Glassmorphism effect */
        .backdrop-blur-xl {
          backdrop-filter: blur(24px);
        }
        
        .backdrop-blur-lg {
          backdrop-filter: blur(16px);
        }
        
        /* Gradient background utilities */
        .bg-gradient-radial {
          background-image: radial-gradient(circle, var(--tw-gradient-stops));
        }
        
        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }
        
        /* Custom scrollbar for webkit browsers */
        ::-webkit-scrollbar {
          width: 6px;
        }
        
        ::-webkit-scrollbar-track {
          background: #f1f1f1;
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(135deg, #3b82f6, #06b6d4);
          border-radius: 3px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(135deg, #2563eb, #0891b2);
        }

        /* Mobile optimizations */
        @media (max-width: 768px) {
          .container {
            padding-left: 1rem;
            padding-right: 1rem;
          }
          
          /* Reduce animations on mobile for better performance */
          .animate-pulse {
            animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
          }
          
          /* Simplified hover effects on mobile */
          @media (hover: none) {
            .group:hover .group-hover\:opacity-100 {
              opacity: 1;
            }
            
            .group:hover .group-hover\:scale-100 {
              transform: scale(1);
            }
            
            .group:hover .group-hover\:text-white {
              color: white;
            }
          }
        }
        
        /* Prevent layout shift during menu animation */
        .lg\:hidden {
          will-change: max-height, opacity;
          backface-visibility: hidden;
          perspective: 1000px;
        }
        
        /* GPU acceleration for smooth animations */
        .transition-all {
          transform: translateZ(0);
          will-change: transform, opacity;
        }
        
        /* Optimized mobile menu animation */
        @media (max-width: 1024px) {
          .lg\:hidden {
            transition: max-height 0.3s ease-out, opacity 0.3s ease-out;
          }
          
          .lg\:hidden > div {
            transition: transform 0.3s ease-out, opacity 0.3s ease-out;
          }
        }
        
        /* Improve touch targets on mobile */
        @media (max-width: 768px) {
          button, a {
            min-height: 44px;
            min-width: 44px;
          }
        }
      `}</style>
    </>
  );
};

export default Header;