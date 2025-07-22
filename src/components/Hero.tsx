import {
  ArrowRight,
  CheckCircle,
  Play,
  Zap,
  Award,
  Globe,
  Settings,
  Code,
  Shield,
  Cpu,
  Wifi,
  BarChart3,
  Bot,
  Gauge,
  Lightbulb,
  Target,
  Users,
  Trophy,
  Star,
  ChevronDown,
  MousePointer2,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import ShinyText from "./ShinyText";
import kttechLogo from "@/assets/kttech-logo.png";

const Hero = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Enhanced 3D parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!parallaxRef.current || !heroRef.current) return;

      const rect = heroRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      setMousePos({ x, y });

      const layers = parallaxRef.current.children;
      for (let i = 0; i < layers.length; i++) {
        const layer = layers[i] as HTMLElement;
        const depth = (i + 1) * 0.1;
        const moveX = x * 50 * depth;
        const moveY = y * 50 * depth;
        const rotateX = y * 10 * depth;
        const rotateY = x * 10 * depth;

        layer.style.transform = `
          perspective(1000px) 
          translateX(${moveX}px) 
          translateY(${moveY}px)
          rotateX(${rotateX}deg) 
          rotateY(${rotateY}deg)
          translateZ(${depth * 50}px)
        `;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    setIsVisible(true);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Auto-slide for tech showcase
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 4);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const techShowcase = [
    {
      icon: Bot,
      title: "AI & Robot",
      desc: "ระบบหุ่นยนต์อัจฉริยะ",
      color: "from-blue-500 to-cyan-400",
    },
    {
      icon: Settings,
      title: "PLC System",
      desc: "ระบบควบคุมอุตสาหกรรม",
      color: "from-green-500 to-cyan-400",
    },
    {
      icon: Wifi,
      title: "IoT Solutions",
      desc: "เชื่อมต่อทุกอุปกรณ์",
      color: "from-green-400 to-blue-400",
    },
    {
      icon: BarChart3,
      title: "Monitoring",
      desc: "ระบบมอนิเตอร์และแสดงผลข้อมูลแบบเรียลไทม์",
      color: "from-[#18DC22] to-blue-500",
    },
  ];

  const stats = [
    { value: "100+", label: "โครงการที่สำเร็จ", icon: Trophy },
    { value: "50+", label: "ลูกค้าองค์กร", icon: Users },
    { value: "10+", label: "ปีประสบการณ์", icon: Award },
  ];

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative overflow-hidden min-h-screen bg-[#ebf2ff] pt-12 pb-12 sm:pt-16 sm:pb-16 md:pt-20 md:pb-20 lg:pt-10 lg:pb-24"
    >
      {/* Parallax Layers */}
      <div
        ref={parallaxRef}
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 2 }}
      >
        <div className="absolute -top-1/2 -left-1/2 w-[600px] h-[600px] sm:w-[800px] sm:h-[800px] md:w-[1000px] md:h-[1000px] bg-gradient-to-br from-blue-100/40 via-green-100/30 to-cyan-50/20 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute -bottom-1/2 -right-1/2 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] md:w-[800px] md:h-[800px] bg-gradient-to-tl from-green-200/30 via-blue-100/20 to-cyan-50/10 rounded-full blur-2xl animate-float-diagonal" />
        <div className="absolute top-1/4 left-1/3 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[600px] md:h-[600px] bg-gradient-to-r from-primary/10 via-green-100/10 to-blue-50/10 rounded-full blur-xl animate-spin-slow" />
      </div>

      <div className="container max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 relative z-10 pt-10 sm:pt-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-16">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            {/* Logo and Title */}
            <div className="mb-6 sm:mb-8">
              <div className="flex items-center space-x-4 sm:space-x-6 mb-2 sm:mb-4">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-100 via-blue-200 to-blue-50 rounded-full blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500 animate-pulse-glow" />
                  <div className="relative h-16 w-16 sm:h-24 sm:w-24 bg-gradient-to-br from-blue-200 via-blue-100 to-blue-50 rounded-full flex items-center justify-center shadow-2xl transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
                    <div className="h-10 w-10 sm:h-16 sm:w-16 bg-gradient-to-br from-blue-100 via-blue-200 to-blue-50 rounded-full flex items-center justify-center">
                      <span className="text-xl sm:text-2xl md:text-3xl font-black text-primary">
                        KT
                      </span>
                    </div>
                  </div>
                </div>
                <div className="space-y-1">
                  <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-primary animate-fade-in-up delay-100 font-sarabun">
                    <ShinyText
                      text="KT TECH"
                      disabled={false}
                      speed={10}
                      className="custom-class"
                      gradientColor="blue"
                    />
                  </h1>
                  <h2 className="text-lg sm:text-2xl lg:text-3xl font-bold text-secondary animate-fade-in-up delay-200 font-sarabun">
                    <ShinyText
                      text="SOLUTION"
                      disabled={false}
                      speed={10}
                      className="custom-class"
                      gradientColor="green"
                    />
                  </h2>
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-base text-primary font-medium animate-fade-in-up delay-300">
                  บริษัท เคที เทค โซลูชั่น จำกัด
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed animate-fade-in-up delay-400">
                  ผู้นำด้านเทคโนโลยีอัตโนมัติและระบบควบคุมอุตสาหกรรม
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed animate-fade-in-up delay-500">
                  ขับเคลื่อนอุตสาหกรรมไทยสู่ยุคดิจิทัล ด้วยโซลูชันอัจฉริยะ
                </p>
              </div>
            </div>

            {/* Tech Showcase */}
            <div className="mb-4 sm:mb-6">
              <h3 className="text-lg sm:text-xl font-bold text-primary mb-4 sm:mb-6 animate-fade-in-up delay-600">
                เทคโนโลยีหลักของเรา
              </h3>
              <div className="grid grid-cols-2 gap-2 sm:gap-4">
                {techShowcase.map((tech, index) => (
                  <div
                    key={index}
                    className={`relative p-3 sm:p-6 rounded-xl bg-primary/10 border border-primary/20 hover:border-primary/40 transition-all duration-300 transform hover:scale-105 animate-fade-in-up delay-${
                      700 + index * 100
                    }`}
                  >
                    <div className="flex items-center space-x-2 sm:space-x-4">
                      <div
                        className={`p-2 sm:p-3 rounded-full bg-primary/20 shadow-lg`}
                      >
                        <tech.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold text-primary text-xs sm:text-base">
                          {tech.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-muted-foreground">
                          {tech.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats Counter */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 mb-6 sm:mb-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-2 sm:p-4 rounded-lg bg-card border border-border hover:border-primary/30 transition-all duration-300 animate-fade-in-up delay-1000"
                >
                  <stat.icon className="h-6 w-6 sm:h-8 sm:w-8 text-primary mx-auto mb-1 sm:mb-2" />
                  <div className="text-lg sm:text-2xl font-bold text-primary">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 animate-fade-in-up delay-1200">
              <button className="group relative px-6 py-3 sm:px-10 sm:py-5 bg-primary text-primary-foreground rounded-full font-bold text-base sm:text-lg shadow-2xl hover:shadow-primary/30 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 overflow-hidden min-h-[44px] min-w-[44px]">
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12" />
                <div className="relative flex items-center space-x-2 sm:space-x-3">
                  <MousePointer2 className="h-5 w-5 sm:h-6 sm:w-6 group-hover:rotate-12 transition-transform duration-300" />
                  <span>สำรวจโซลูชัน</span>
                  <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6 group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </button>
            </div>
          </div>

          {/* Right Visual */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative group">
              {/* Animated Holographic Rings */}
              <div className="absolute inset-0 flex items-center justify-center">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div
                    key={i}
                    className="absolute border-2 border-primary/10 rounded-full animate-ping-slow"
                    style={{
                      width: `${220 + i * 60}px`,
                      height: `${220 + i * 60}px`,
                      animationDelay: `${i * 0.8}s`,
                      animationDuration: `${4 + i * 0.5}s`,
                    }}
                  />
                ))}
              </div>

              {/* Main Interactive Logo */}
              <div className="relative z-20 w-full flex items-center justify-center mt-10">
                <div className="relative z-30 w-[440px] h-[440px] flex items-center justify-center">
                  <div
                    className="absolute inset-0 rounded-full bg-[#257BFF]/20 blur-2xl animate-pulse"
                    style={{ zIndex: 1 }}
                  />
                  <div
                    className="absolute inset-4 rounded-full border-8 border-[#257BFF]/20"
                    style={{ zIndex: 2 }}
                  />
                  <div
                    className="absolute inset-12 rounded-full border-4 border-[#18DC22]/20"
                    style={{ zIndex: 3 }}
                  />
                  <div
                    className="absolute inset-20 rounded-full bg-white shadow-2xl"
                    style={{ zIndex: 4 }}
                  />
                  <div className="relative w-[200px] h-[200px] flex items-center justify-center z-10">
                    <img
                      src={kttechLogo}
                      alt="KT Tech Solution Logo"
                      className="w-full h-full object-contain drop-shadow-xl animate-pulse"
                      style={{ background: "transparent" }}
                    />
                  </div>
                  {/* Orbiting Tech Icons (Desktop Only) */}
                  <div className="absolute inset-0 pointer-events-none z-20 hidden md:block">
                    {[
                      {
                        icon: Bot,
                        position: "top-4 left-1/2 -translate-x-1/2",
                        color: "bg-[#257BFF]/10",
                      },
                      {
                        icon: Cpu,
                        position: "top-1/2 right-4 -translate-y-1/2",
                        color: "bg-[#257BFF]/10",
                      },
                      {
                        icon: Wifi,
                        position: "bottom-4 left-1/2 -translate-x-1/2",
                        color: "bg-[#257BFF]/10",
                      },
                      {
                        icon: Gauge,
                        position: "top-1/2 left-4 -translate-y-1/2",
                        color: "bg-[#257BFF]/10",
                      },
                      {
                        icon: Code,
                        position: "top-10 right-10",
                        color: "bg-[#18DC22]/10",
                      },
                      {
                        icon: Shield,
                        position: "top-10 left-10",
                        color: "bg-[#18DC22]/10",
                      },
                      {
                        icon: Lightbulb,
                        position: "bottom-10 right-10",
                        color: "bg-[#18DC22]/10",
                      },
                      {
                        icon: Target,
                        position: "bottom-10 left-10",
                        color: "bg-[#18DC22]/10",
                      },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className={`absolute ${item.position} w-16 h-16 ${item.color} rounded-full flex items-center justify-center backdrop-blur-sm border border-[#257BFF]/10 shadow-lg animate-orbit-${index} hover:scale-110 transition-transform duration-300`}
                      >
                        <item.icon className="h-10 w-10 text-[#257BFF]" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse-glow {
          0%, 100% { 
            opacity: 0.2; 
            transform: scale(1); 
          }
          50% { 
            opacity: 0.4; 
            transform: scale(1.1); 
          }
        }

        @keyframes float-diagonal {
          0%, 100% { 
            transform: translateX(0) translateY(0) rotate(0deg); 
          }
          50% { 
            transform: translateX(-30px) translateY(-30px) rotate(180deg); 
          }
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes ping-slow {
          0% { 
            transform: scale(1); 
            opacity: 1; 
          }
          75%, 100% { 
            transform: scale(1.2); 
            opacity: 0; 
          }
        }

        @keyframes orbit-0 {
          0% { transform: translate(-50%, -50%) rotate(0deg) translateX(180px) rotate(0deg); }
          100% { transform: translate(-50%, -50%) rotate(360deg) translateX(180px) rotate(-360deg); }
        }

        @keyframes orbit-1 {
          0% { transform: translate(-50%, -50%) rotate(45deg) translateX(180px) rotate(-45deg); }
          100% { transform: translate(-50%, -50%) rotate(405deg) translateX(180px) rotate(-405deg); }
        }

        @keyframes orbit-2 {
          0% { transform: translate(-50%, -50%) rotate(90deg) translateX(180px) rotate(-90deg); }
          100% { transform: translate(-50%, -50%) rotate(450deg) translateX(180px) rotate(-450deg); }
        }

        @keyframes orbit-3 {
          0% { transform: translate(-50%, -50%) rotate(135deg) translateX(180px) rotate(-135deg); }
          100% { transform: translate(-50%, -50%) rotate(495deg) translateX(180px) rotate(-495deg); }
        }

        @keyframes orbit-4 {
          0% { transform: rotate(180deg) translateX(160px) rotate(-180deg); }
          100% { transform: rotate(540deg) translateX(160px) rotate(-540deg); }
        }

        @keyframes orbit-5 {
          0% { transform: rotate(225deg) translateX(160px) rotate(-225deg); }
          100% { transform: rotate(585deg) translateX(160px) rotate(-585deg); }
        }

        @keyframes orbit-6 {
          0% { transform: rotate(270deg) translateX(160px) rotate(-270deg); }
          100% { transform: rotate(630deg) translateX(160px) rotate(-630deg); }
        }

        @keyframes orbit-7 {
          0% { transform: rotate(315deg) translateX(160px) rotate(-315deg); }
          100% { transform: rotate(675deg) translateX(160px) rotate(-675deg); }
        }

        .animate-fade-in-up { animation: fade-in-up 0.8s cubic-bezier(0.4, 0, 0.2, 1) both; }
        .animate-pulse-glow { animation: pulse-glow 4s ease-in-out infinite; }
        .animate-float-diagonal { animation: float-diagonal 10s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 20s linear infinite; }
        .animate-ping-slow { animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite; }
        .animate-orbit-0 { animation: orbit-0 20s linear infinite; }
        .animate-orbit-1 { animation: orbit-1 25s linear infinite; }
        .animate-orbit-2 { animation: orbit-2 30s linear infinite; }
        .animate-orbit-3 { animation: orbit-3 35s linear infinite; }
        .animate-orbit-4 { animation: orbit-4 22s linear infinite; }
        .animate-orbit-5 { animation: orbit-5 28s linear infinite; }
        .animate-orbit-6 { animation: orbit-6 32s linear infinite; }
        .animate-orbit-7 { animation: orbit-7 38s linear infinite; }

        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-600 { animation-delay: 0.6s; }
        .delay-700 { animation-delay: 0.7s; }
        .delay-800 { animation-delay: 0.8s; }
        .delay-900 { animation-delay: 0.9s; }
        .delay-1000 { animation-delay: 1s; }
        .delay-1100 { animation-delay: 1.1s; }
        .delay-1200 { animation-delay: 1.2s; }
        .delay-1300 { animation-delay: 1.3s; }
      `}</style>
    </section>
  );
};

export default Hero;
