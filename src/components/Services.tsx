import {
  Cpu,
  Bot,
  Settings,
  Zap,
  Shield,
  Factory,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

const Services = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const services = [
    {
      icon: Cpu,
      title: "ระบบ PLC Programming",
      description:
        "พัฒนาและเขียนโปรแกรม PLC สำหรับควบคุมระบบอัตโนมัติในโรงงาน รองรับทุกแบรนด์ชั้นนำ",
      features: [
        "Siemens S7-1200/1500",
        "Mitsubishi FX/Q Series",
        "Omron CP1H/NJ",
        "Allen Bradley",
      ],
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
    },
    {
      icon: Bot,
      title: "Robot Programming",
      description:
        "ตั้งโปรแกรมหุ่นยนต์อุตสาหกรรมสำหรับงานการผลิตแบบอัตโนมัติ ด้วยเทคโนโลยีล่าสุด",
      features: [
        "Pick & Place System",
        "Welding Robot",
        "Assembly Line",
        "Material Handling",
      ],
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
    },
    {
      icon: Settings,
      title: "SCADA & HMI System",
      description:
        "ออกแบบระบบ SCADA และ HMI สำหรับตรวจสอบและควบคุมกระบวนการผลิตแบบเรียลไทม์",
      features: [
        "Real-time Monitoring",
        "Data Visualization",
        "Alarm Management",
        "Report Generation",
      ],
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50 dark:bg-green-900/20",
    },
    {
      icon: Factory,
      title: "Factory Automation",
      description:
        "ระบบอัตโนมัติครบวงจรสำหรับโรงงาน เชื่อมต่อทุกขั้นตอนการผลิตเข้าด้วยกัน",
      features: [
        "Production Line Control",
        "MES Integration",
        "ERP Connection",
        "Quality Control",
      ],
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50 dark:bg-orange-900/20",
    },
    {
      icon: Shield,
      title: "Industrial IoT",
      description:
        "เชื่อมต่อเครื่องจักรเข้ากับระบบ IoT สำหรับการตรวจสอบและวิเคราะห์ข้อมูลแบบอัจฉริยะ",
      features: [
        "Real-time Data Collection",
        "Predictive Maintenance",
        "Remote Monitoring",
        "Analytics Dashboard",
      ],
      color: "from-indigo-500 to-blue-500",
      bgColor: "bg-indigo-50 dark:bg-indigo-900/20",
    },
    {
      icon: Zap,
      title: "Maintenance & Support",
      description:
        "บริการดูแลรักษาระบบ การอัพเกรด และการสนับสนุนทางเทคนิคแบบครบวงจร 24/7",
      features: [
        "24/7 Technical Support",
        "Preventive Maintenance",
        "System Upgrade",
        "Training Service",
      ],
      color: "from-yellow-500 to-orange-500",
      bgColor: "bg-yellow-50 dark:bg-yellow-900/20",
    },
  ];

  return (
    <section
      id="services"
      className="py-12 sm:py-16 md:py-20 relative overflow-hidden"
    >
      <div className="container max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-10 sm:mb-20">
          <div className="inline-block">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-primary mb-2 sm:mb-4 drop-shadow-lg font-sarabun">
              บริการของเรา
            </h2>
            <div className="w-20 sm:w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mb-4 sm:mb-6 rounded-full"></div>
          </div>
          <p className="text-base sm:text-xl text-gray-700 dark:text-slate-300 max-w-2xl sm:max-w-4xl mx-auto leading-relaxed drop-shadow">
            เราให้บริการครอบคลุมจุดด้านระบบอัตโนมัติและซอฟต์แวร์ควบคุมโรงงาน
            <br className="hidden md:block" />
            พร้อมด้วยทีมวิศวกรมืออาชีพที่พร้อมช่วยคุณประสบความสำเร็จ
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer ${service.bgColor} backdrop-blur-md z-10`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Gradient Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-10 hover:opacity-20 transition-opacity duration-500`}
              ></div>

              {/* Animated Border */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${
                  service.color
                } opacity-20 -z-10 transition-all duration-500 ${
                  hoveredCard === index ? "scale-105" : "scale-100"
                }`}
              ></div>

              <CardHeader className="text-center relative z-10 pb-2 sm:pb-4">
                <div
                  className={`w-14 h-14 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 transition-all duration-500 ${
                    hoveredCard === index ? "scale-110" : "scale-100"
                  } drop-shadow-xl`}
                >
                  <div
                    className={`w-10 h-10 sm:w-16 sm:h-16 bg-gradient-to-r ${service.color} rounded-full flex items-center justify-center shadow-lg`}
                  >
                    <service.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                  </div>
                </div>
                <CardTitle className="text-base sm:text-xl font-bold text-gray-800 dark:text-slate-100 mb-2 sm:mb-3 drop-shadow">
                  {service.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="text-center relative z-10 px-4 sm:px-6">
                <p className="text-gray-700 dark:text-slate-300 leading-relaxed mb-3 sm:mb-6 text-sm sm:text-base">
                  {service.description}
                </p>

                {/* Features List */}
                <div
                  className={`space-y-2 sm:space-y-3 transition-all duration-500 ${
                    hoveredCard === index
                      ? "opacity-100 transform translate-y-0"
                      : "opacity-0 transform translate-y-4"
                  }`}
                >
                  {service.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center text-xs sm:text-sm text-gray-600 dark:text-slate-400"
                    >
                      <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Learn More Button */}
                <div
                  className={`mt-4 sm:mt-6 transition-all duration-500 ${
                    hoveredCard === index
                      ? "opacity-100 transform translate-y-0"
                      : "opacity-0 transform translate-y-4"
                  }`}
                >
                  <button
                    className={`inline-flex items-center px-3 py-2 sm:px-4 sm:py-2 bg-gradient-to-r ${service.color} text-white rounded-full text-xs sm:text-sm font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105 min-h-[40px] min-w-[40px]`}
                  >
                    เรียนรู้เพิ่มเติม
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
