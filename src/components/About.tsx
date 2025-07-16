import { Target, Users, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  const features = [
    {
      icon: Target,
      title: "วิสัยทัศน์",
      description: "มุ่งมั่นเป็นผู้นำด้านระบบอัตโนมัติและซอฟต์แวร์ควบคุมโรงงาน เพื่อยกระดับอุตสาหกรรมไทยสู่ยุค Industry 4.0"
    },
    {
      icon: Users,
      title: "ทีมงานเชี่ยวชาญ",
      description: "วิศวกรและโปรแกรมเมอร์ที่มีประสบการณ์ตรงด้าน PLC, SCADA, HMI และ Robot Programming"
    },
    {
      icon: Zap,
      title: "เทคโนโลยีล้ำสมัย",
      description: "ใช้เทคโนโลยี AI, IoT และ Machine Learning ร่วมกับระบบอัตโนมัติเพื่อการผลิตที่ชาญฉลาด"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
            เกี่ยวกับ KT Tech Solution
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            เราเป็นบริษัทที่เชี่ยวชาญด้านซอฟต์แวร์ควบคุมโรงงาน ระบบ PLC และหุ่นยนต์อุตสาหกรรม 
            ด้วยประสบการณ์และความเชี่ยวชาญของทีมวิศวกร เราพร้อมที่จะเป็นพาร์ทเนอร์ที่เชื่อถือได้
            ในการนำโรงงานของคุณเข้าสู่ยุคอัตโนมัติแบบครบวงจร
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-border hover:border-primary/50 transition-colors group">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl text-primary">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;