import { Cpu, Bot, Settings, Zap, Shield, Factory } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Cpu,
      title: "ระบบ PLC Programming",
      description: "การเขียนโปรแกรม PLC สำหรับควบคุมระบบอัตโนมัติในโรงงาน รองรับ Siemens, Mitsubishi, Omron และแบรนด์อื่นๆ"
    },
    {
      icon: Bot,
      title: "Robot Programming",
      description: "พัฒนาและตั้งโปรแกรมหุ่นยนต์อุตสาหกรรม สำหรับงาน Pick & Place, Welding, Assembly และ Material Handling"
    },
    {
      icon: Settings,
      title: "SCADA & HMI System",
      description: "ออกแบบและพัฒนาระบบ SCADA และ HMI สำหรับการควบคุมและตรวจสอบกระบวนการผลิตแบบเรียลไทม์"
    },
    {
      icon: Factory,
      title: "Factory Automation",
      description: "ระบบอัตโนมัติครบวงจรสำหรับโรงงาน ตั้งแต่การควบคุมเครื่องจักร ไปจนถึงระบบ MES และ ERP Integration"
    },
    {
      icon: Shield,
      title: "Industrial IoT",
      description: "เชื่อมต่อเครื่องจักรและระบบโรงงานเข้ากับระบบ IoT เพื่อการตรวจสอบและวิเคราะห์ข้อมูลแบบเรียลไทม์"
    },
    {
      icon: Zap,
      title: "Maintenance & Support",
      description: "บริการดูแลรักษาระบบ อัพเกรดซอฟต์แวร์ และการสนับสนุนทางเทคนิคแบบ 24/7"
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
            เราให้บริการครบวงจรด้านระบบอัตโนมัติและซอฟต์แวร์ควบคุมโรงงาน
            พร้อมด้วยทีมวิศวกรมืออาชีพที่จะช่วยยกระดับประสิทธิภาพการผลิตของคุณ
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