import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import ktTechLogo from "@/assets/kt-tech-logo.png";

const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-primary-light via-background to-secondary-light py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Content */}
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <div className="flex items-center space-x-4 mb-6">
              <img 
                src={ktTechLogo} 
                alt="KT Tech Solution Logo" 
                className="h-20 w-auto"
              />
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-2">
                  KT TECH SOLUTION
                </h1>
                <p className="text-xl text-secondary font-semibold">
                  CO., LTD.
                </p>
                <p className="text-lg text-primary mt-2 font-medium">
                  บริษัท เคที เทค โซลูชั่น
                </p>
              </div>
            </div>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              ผู้เชี่ยวชาญด้านเทคโนโลยีและการให้คำปรึกษา มุ่งมั่นในการส่งมอบโซลูชั่นที่ดีที่สุด
              เพื่อความสำเร็จของธุรกิจของคุณ
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-8">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-secondary" />
                <span className="text-foreground">บริการมืออาชีพ</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-secondary" />
                <span className="text-foreground">เทคโนโลยีทันสมัย</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-secondary" />
                <span className="text-foreground">ความน่าเชื่อถือ</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                เรียนรู้เพิ่มเติม
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground">
                ติดต่อเรา
              </Button>
            </div>
          </div>

          {/* Visual Element */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-primary to-secondary rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <img 
                  src={ktTechLogo} 
                  alt="KT Tech Solution" 
                  className="h-40 w-auto opacity-80"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;