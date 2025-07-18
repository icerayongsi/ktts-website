import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import ktTechLogo from "@/assets/kttech-logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-primary"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-foreground/30 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-lg overflow-hidden">
                <img
                  src={ktTechLogo}
                  alt="KT Tech Solution Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary-foreground">
                  KT TECH SOLUTION
                </h3>
                <span className="text-primary-foreground/70 text-sm font-medium">
                  CO., LTD.
                </span>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-primary-foreground/80 leading-relaxed text-sm">
                ผู้เชี่ยวชาญด้านซอฟต์แวร์ควบคุมโรงงาน ระบบ PLC
                และหุ่นยนต์อุตสาหกรรม
              </p>
              <p className="text-primary-foreground/70 text-sm">
                มุ่งมั่นในการส่งมอบโซลูชั่นอัตโนมัติที่ทันสมัยเพื่อเพิ่มประสิทธิภาพการผลิต
              </p>
            </div>

            <div className="flex items-center space-x-2 text-primary-foreground/60 text-xs">
              <div className="w-2 h-2 bg-primary-foreground/60 rounded-full"></div>
              <span>บริษัท เคที เทค โซลูชั่น จำกัด</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-primary-foreground relative">
              ลิงก์ด่วน
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-primary-foreground/60 to-primary-foreground/40"></div>
            </h3>
            <ul className="space-y-3">
              {[
                { href: "#home", label: "หน้าหลัก" },
                { href: "#about", label: "เกี่ยวกับเรา" },
                { href: "#services", label: "บริการ" },
                { href: "#contact", label: "ติดต่อเรา" },
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="group flex items-center space-x-2 text-primary-foreground/70 hover:text-primary-foreground transition-all duration-300 text-sm"
                  >
                    <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {link.label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-primary-foreground relative">
              ข้อมูลติดต่อ
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-primary-foreground/60 to-primary-foreground/40"></div>
            </h3>
            <div className="space-y-5">
              <div className="flex items-start space-x-4 group">
                <div className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center group-hover:bg-primary-foreground/20 transition-colors duration-300 border border-primary-foreground/20">
                  <MapPin className="h-4 w-4 text-primary-foreground/70" />
                </div>
                <div className="text-primary-foreground/80 text-sm leading-relaxed">
                  <p className="font-medium text-primary-foreground">ที่อยู่</p>
                  <p>295 ซอย ร่มเกล้า 58</p>
                  <p>แขวง คลองสามประเวศ เขต ลาดกระบัง</p>
                  <p>กรุงเทพมหานคร 10520</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center group-hover:bg-primary-foreground/20 transition-colors duration-300 border border-primary-foreground/20">
                  <Phone className="h-4 w-4 text-primary-foreground/70" />
                </div>
                <div className="text-primary-foreground/80 text-sm">
                  <p className="font-medium text-primary-foreground mb-1">
                    โทรศัพท์
                  </p>
                  <p>065-391-9764</p>
                  <p>093-324-2933</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center group-hover:bg-primary-foreground/20 transition-colors duration-300 border border-primary-foreground/20">
                  <Mail className="h-4 w-4 text-primary-foreground/70" />
                </div>
                <div className="text-primary-foreground/80 text-sm">
                  <p className="font-medium text-primary-foreground mb-1">
                    อีเมล
                  </p>
                  <p className="break-all">kttechsolution.ktts@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-primary-foreground/70 text-sm text-center md:text-left">
              <p>
                © {new Date().getFullYear()} KT Tech Solution Co., Ltd.
                สงวนลิขสิทธิ์
              </p>
              <p className="mt-1">เลขประจำตัวผู้เสียภาษี: 0745565002366</p>
            </div>
            <div className="flex items-center space-x-2 text-primary-foreground/50 text-xs"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
