import { Monitor, Smartphone, Cloud, Database, Shield, Cog } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Monitor,
      title: "การพัฒนาเว็บไซต์",
      description: "ออกแบบและพัฒนาเว็บไซต์ที่ทันสมัย ใช้งานง่าย และตอบสนองทุกอุปกรณ์"
    },
    {
      icon: Smartphone,
      title: "แอปพลิเคชันมือถือ",
      description: "พัฒนาแอปพลิเคชันบนมือถือสำหรับ iOS และ Android ที่มีประสิทธิภาพสูง"
    },
    {
      icon: Cloud,
      title: "บริการคลาวด์",
      description: "ให้คำปรึกษาและติดตั้งระบบคลาวด์ เพื่อเพิ่มประสิทธิภาพการทำงาน"
    },
    {
      icon: Database,
      title: "ระบบฐานข้อมูล",
      description: "ออกแบบและจัดการระบบฐานข้อมูลที่มีประสิทธิภาพและปลอดภัย"
    },
    {
      icon: Shield,
      title: "ความปลอดภัยไซเบอร์",
      description: "ตรวจสอบและเสริมความแข็งแกร่งด้านความปลอดภัยของระบบ IT"
    },
    {
      icon: Cog,
      title: "IT Consulting",
      description: "ให้คำปรึกษาด้านเทคโนโลยีสารสนเทศและการวางแผนระบบ IT"
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
            บริการของเรา
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            เราให้บริการที่หลากหลายและครอบคลุมทุกความต้องการด้านเทคโนโลยี
            พร้อมด้วยทีมงานมืออาชีพที่จะช่วยให้ธุรกิจของคุณก้าวไปข้างหน้า
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-card border-border hover:border-secondary/50 hover:shadow-lg transition-all duration-300 group">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary/20 transition-colors">
                  <service.icon className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle className="text-xl text-primary">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;