import { Target, Users, Zap, Award, TrendingUp, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  const features = [
    {
      icon: Target,
      title: "วิสัยทัศน์",
      description:
        "มุ่งมั่นเป็นผู้นำด้านระบบอัตโนมัติและซอฟต์แวร์ควบคุมโรงงาน เพื่อยกระดับอุตสาหกรรมไทยสู่ยุค Industry 4.0",
      color: "bg-[#257BFF]",
    },
    {
      icon: Users,
      title: "ทีมงานเชี่ยวชาญ",
      description:
        "วิศวกรและโปรแกรมเมอร์ที่มีประสบการณ์ตรงด้าน PLC, MONITORING, HMI และ Robot Programming",
      color: "bg-[#18DC22]",
    },
    {
      icon: Zap,
      title: "เทคโนโลยีล้ำสมัย",
      description:
        "ใช้เทคโนโลยี AI, IoT และ Machine Learning ร่วมกับระบบอัตโนมัติเพื่อการผลิตที่ชาญฉลาด",
      color: "bg-[#257BFF]",
    },
  ];

  const stats = [
    { number: "10+", label: "ปีประสบการณ์", icon: Award },
    { number: "100+", label: "โครงการสำเร็จ", icon: TrendingUp },
    { number: "100%", label: "ความพึงพอใจ", icon: Shield },
  ];

  return (
    <section id="about" className="py-12 sm:py-16 md:py-20">
      <div className="container max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Header Section */}
        <div className="text-center mb-10 sm:mb-16">
          <div className="inline-block">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-primary mb-2 sm:mb-4 drop-shadow-lg font-sarabun">
              เกี่ยวกับ KT Tech Solution
            </h2>
            <div className="w-20 sm:w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mb-4 sm:mb-6 rounded-full"></div>
          </div>
          <p className="text-base sm:text-lg text-gray-700 max-w-2xl sm:max-w-4xl mx-auto leading-relaxed mb-4 sm:mb-8 drop-shadow">
            เราเป็นบริษัทที่เชี่ยวชาญด้านซอฟต์แวร์ควบคุมโรงงาน ระบบ PLC
            และหุ่นยนต์อุตสาหกรรม ด้วยประสบการณ์และความเชี่ยวชาญของทีมวิศวกร
            เราพร้อมที่จะเป็นพาร์ทเนอร์ที่เชื่อถือได้ในการนำโรงงานของคุณเข้าสู่ยุค
            Industry 4.0
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group bg-white/90 backdrop-blur-md hover:bg-white overflow-hidden relative z-10"
            >
              <div
                className={`absolute inset-0 ${feature.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}
              ></div>
              <CardHeader className="text-center pb-2 sm:pb-4 relative">
                <div
                  className={`w-14 h-14 sm:w-20 sm:h-20 bg-gradient-to-br ${feature.color} rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg drop-shadow-xl`}
                >
                  <feature.icon className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                </div>
                <CardTitle className="text-base sm:text-xl font-bold text-gray-800 group-hover:text-cyan-600 transition-colors drop-shadow">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center px-4 sm:px-6 pb-4 sm:pb-6 relative">
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Company Values */}
        <div className="mt-10 sm:mt-20 text-center">
          <div className="bg-gradient-to-r from-blue-800 to-cyan-700 rounded-2xl p-6 sm:p-8 md:p-12 text-white shadow-2xl">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 font-sarabun text-white drop-shadow">
              ความมุ่งมั่นของเรา
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 text-left">
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1 sm:mb-2">คุณภาพเป็นเลิศ</h4>
                  <p className="text-blue-100 text-xs sm:text-sm">
                    ส่งมอบโซลูชันที่มีคุณภาพสูงสุดและความเอาใจใส่ในการใช้งาน
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1 sm:mb-2">
                    นวัตกรรมต่อเนื่อง
                  </h4>
                  <p className="text-blue-100 text-xs sm:text-sm">
                    ค้นคว้าและพัฒนาเทคโนโลยีใหม่ๆ เพื่อให้ทันต่อการเปลี่ยนแปลง
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1 sm:mb-2">
                    ลูกค้าเป็นศูนย์กลาง
                  </h4>
                  <p className="text-blue-100 text-xs sm:text-sm">
                    ให้บริการที่ตอบสนองความต้องการของลูกค้าอย่างครบถ้วน
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
