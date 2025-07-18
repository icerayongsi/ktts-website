import React from "react";

interface ShinyTextProps {
  text: string;
  disabled?: boolean;
  speed?: number; // ค่าต่ำเร็ว ค่าสูงช้า
  className?: string;
  gradientColor?: "blue" | "green";
}

const ShinyText: React.FC<ShinyTextProps> = ({
  text,
  disabled = false,
  speed = 15,
  className = "",
  gradientColor = "blue",
}) => {
  const animationDuration = `${speed}s`;

  // Gradient สำหรับแต่ละสี
  const gradients: Record<string, string> = {
    blue: `linear-gradient(120deg, hsl(210, 90%, 60%) 0%, hsl(200, 100%, 70%) 50%, hsl(210, 90%, 60%) 100%)`,
    green: `linear-gradient(120deg, hsl(140, 70%, 50%) 0%, hsl(160, 80%, 65%) 50%, hsl(140, 70%, 50%) 100%)`,
  };

  return (
    <div className="relative inline-block">
      {/* Base text with gradient */}
      <div
        className={`
          relative z-10 font-black text-transparent bg-clip-text inline-block
          ${disabled ? "" : "animate-shine"}
          ${className}
        `}
        style={{
          backgroundImage: gradients[gradientColor] || gradients.blue,
          backgroundSize: "300% 100%",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          animationDuration: animationDuration,
        }}
      >
        {text}
      </div>

      {/* Glow effect behind */}
      <div
        className={`
          absolute inset-0 font-black text-transparent bg-clip-text inline-block opacity-50 blur-md
          ${disabled ? "" : "animate-shine"}
          ${className}
        `}
        style={{
          backgroundImage: `linear-gradient(120deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.6) 50%, rgba(255,255,255,0.8) 100%)`,
          backgroundSize: "300% 100%",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          animationDuration: `${speed * 1.2}s`,
          animationDelay: "0.3s",
        }}
      >
        {text}
      </div>

      {/* Sparkles */}
      {!disabled && (
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-sparkle opacity-0"
              style={{
                left: `${15 + i * 15}%`,
                top: `${20 + (i % 2) * 60}%`,
                animationDelay: `${i * 1.2}s`,
                animationDuration: `${speed * 3}s`,
              }}
            />
          ))}
        </div>
      )}

      {/* Shine overlay */}
      {!disabled && (
        <div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 animate-shine-overlay"
          style={{
            animationDuration: `${speed * 1.2}s`,
            animationDelay: "1s",
          }}
        />
      )}

      {/* Keyframes */}
      <style>{`
        @keyframes shine {
          0% {
            background-position: 300% 0;
          }
          50% {
            background-position: -100% 0;
          }
          100% {
            background-position: 300% 0;
          }
        }

        @keyframes sparkle {
          0%, 100% {
            opacity: 0;
            transform: scale(0) rotate(0deg);
          }
          50% {
            opacity: 1;
            transform: scale(1.3) rotate(180deg);
          }
        }

        @keyframes shine-overlay {
          0% {
            opacity: 0;
            transform: translateX(-100%) skewX(-45deg);
          }
          50% {
            opacity: 1;
            transform: translateX(0%) skewX(-45deg);
          }
          100% {
            opacity: 0;
            transform: translateX(100%) skewX(-45deg);
          }
        }

        .animate-shine {
          animation: shine var(--animation-duration, 8s) linear infinite;
        }

        .animate-sparkle {
          animation: sparkle var(--animation-duration, 24s) linear infinite;
        }

        .animate-shine-overlay {
          animation: shine-overlay var(--animation-duration, 9.6s) linear infinite;
        }
      `}</style>
    </div>
  );
};

export default ShinyText;
