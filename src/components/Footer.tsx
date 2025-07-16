import { MapPin, Phone, Mail } from "lucide-react";
import ktTechLogo from "@/assets/kt-tech-logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src={ktTechLogo} 
                alt="KT Tech Solution Logo" 
                className="h-12 w-auto"
              />
              <div>
                <h3 className="text-xl font-bold">KT TECH SOLUTION</h3>
                <span className="text-sm opacity-90">CO., LTD.</span>
              </div>
            </div>
            <p className="opacity-90 leading-relaxed mb-4">
              ผู้เชี่ยวชาญด้านซอฟต์แวร์ควบคุมโรงงาน ระบบ PLC และหุ่นยนต์อุตสาหกรรม 
              มุ่งมั่นในการส่งมอบโซลูชั่นอัตโนมัติที่ทันสมัยเพื่อเพิ่มประสิทธิภาพการผลิต
            </p>
            <p className="text-sm opacity-75">
              บริษัท เคที เทค โซลูชั่น จำกัด
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">ลิงก์ด่วน</h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="opacity-90 hover:opacity-100 transition-opacity">
                  หน้าหลัก
                </a>
              </li>
              <li>
                <a href="#about" className="opacity-90 hover:opacity-100 transition-opacity">
                  เกี่ยวกับเรา
                </a>
              </li>
              <li>
                <a href="#services" className="opacity-90 hover:opacity-100 transition-opacity">
                  บริการ
                </a>
              </li>
              <li>
                <a href="#contact" className="opacity-90 hover:opacity-100 transition-opacity">
                  ติดต่อเรา
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">ข้อมูลติดต่อ</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 mt-1 opacity-90" />
                <div className="opacity-90">
                  <p>295 ซอย รามคำแหง 58</p>
                  <p>แขวง สามประเวศ เขต ลาดกระบัง</p>
                  <p>กรุงเทพมหานคร 10520</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 opacity-90" />
                <div className="opacity-90">
                  <p>065-391-9764, 093-324-2933</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 opacity-90" />
                <div className="opacity-90">
                  <p>kttechsolution.ktts@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="opacity-75 text-sm">
            © {new Date().getFullYear()} KT Tech Solution Co., Ltd. สงวนลิขสิทธิ์
          </p>
          <p className="opacity-75 text-sm mt-2">
            เลขประจำตัวผู้เสียภาษี: 0745565002366
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;