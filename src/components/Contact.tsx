import { MapPin, Phone, Mail, Clock, Building } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "ที่อยู่สำนักงาน",
      details: [
        "295 ซอย รามคำแหง 58",
        "แขวง สามประเวศ เขต ลาดกระบัง",
        "กรุงเทพมหานคร 10520"
      ]
    },
    {
      icon: Phone,
      title: "หมายเลขโทรศัพท์",
      details: [
        "065-391-9764",
        "093-324-2933"
      ]
    },
    {
      icon: Mail,
      title: "อีเมล",
      details: [
        "kttechsolution.ktts@gmail.com"
      ]
    },
    {
      icon: Building,
      title: "เลขประจำตัวผู้เสียภาษี",
      details: [
        "0745565002366"
      ]
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
            ติดต่อเรา
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            พร้อมให้คำปรึกษาและรับฟังความต้องการของคุณ ติดต่อเราได้ทุกช่องทางที่สะดวก
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="border-border hover:border-primary/50 transition-colors">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3 text-primary">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <info.icon className="h-5 w-5 text-primary" />
                    </div>
                    <span>{info.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-muted-foreground leading-relaxed">
                      {detail}
                    </p>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form */}
          <div>
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-xl text-primary">
                  ส่งข้อความหาเรา
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    ชื่อ-นามสกุล
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 bg-background"
                    placeholder="กรุณากรอกชื่อ-นามสกุล"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    อีเมล
                  </label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 bg-background"
                    placeholder="กรุณากรอกอีเมล"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    หมายเลขโทรศัพท์
                  </label>
                  <input
                    type="tel"
                    className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 bg-background"
                    placeholder="กรุณากรอกหมายเลขโทรศัพท์"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    ข้อความ
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 bg-background resize-none"
                    placeholder="กรุณากรอกข้อความที่ต้องการติดต่อ"
                  ></textarea>
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90">
                  ส่งข้อความ
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Business Hours */}
        <div className="mt-12 text-center">
          <Card className="inline-block border-border">
            <CardContent className="px-8 py-6">
              <div className="flex items-center justify-center space-x-3 mb-3">
                <Clock className="h-5 w-5 text-secondary" />
                <h3 className="text-lg font-semibold text-primary">เวลาทำการ</h3>
              </div>
              <p className="text-muted-foreground">
                จันทร์ - ศุกร์: 9:00 - 18:00 น.
              </p>
              <p className="text-muted-foreground">
                เสาร์ - อาทิตย์: ตามนัดหมาย
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;