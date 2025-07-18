import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ArrowRight,
  Eye,
  Award,
  Users,
  Zap,
  ExternalLink,
  Code,
  Cpu,
  Database,
  Bot,
} from "lucide-react";
import { useState } from "react";

const projects = [
  {
    title: "Smart Factory Automation",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
    description:
      "ระบบอัตโนมัติในโรงงานอุตสาหกรรมด้วย PLC, Robot, IoT และ SCADA ครบวงจร พร้อมระบบควบคุมแบบ Real-time",
    category: "Industrial Automation",
    technologies: ["PLC", "SCADA", "IoT", "Robotics"],
    stats: { efficiency: "+45%", downtime: "-60%" },
    link: "#",
    icon: Cpu,
    gradient: "from-blue-600 via-purple-600 to-cyan-500",
  },
  {
    title: "AI Quality Inspection System",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
    description:
      "โซลูชันตรวจสอบคุณภาพสินค้าอัตโนมัติด้วย AI Computer Vision และ Machine Learning ความแม่นยำสูง",
    category: "AI & Machine Learning",
    technologies: ["AI", "Computer Vision", "ML", "Deep Learning"],
    stats: { accuracy: "99.5%", speed: "10x faster" },
    link: "#",
    icon: Bot,
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
  },
  {
    title: "Industrial IoT Dashboard",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    description:
      "แดชบอร์ด IoT สำหรับติดตามสถานะเครื่องจักรและวิเคราะห์ข้อมูลแบบ Real-time พร้อมระบบเตือนภัยอัตโนมัติ",
    category: "IoT & Analytics",
    technologies: ["IoT", "React", "Node.js", "MongoDB"],
    stats: { monitoring: "24/7", devices: "1000+" },
    link: "#",
    icon: Database,
    gradient: "from-violet-500 via-purple-500 to-pink-500",
  },
  {
    title: "Robotic Process Automation",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
    description:
      "ระบบหุ่นยนต์อัตโนมัติสำหรับกระบวนการผลิต พร้อมระบบควบคุมและการเรียนรู้ด้วย AI",
    category: "Robotics",
    technologies: ["Robotics", "AI", "Sensors", "Automation"],
    stats: { productivity: "+80%", precision: "±0.1mm" },
    link: "#",
    icon: Code,
    gradient: "from-orange-500 via-red-500 to-pink-500",
  },
  {
    title: "Smart Energy Management",
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80",
    description:
      "ระบบจัดการพลังงานอัจฉริยะเพื่อลดต้นทุนและเพิ่มประสิทธิภาพการใช้พลังงานในโรงงาน",
    category: "Energy Management",
    technologies: ["Smart Grid", "IoT", "Analytics", "Optimization"],
    stats: { savings: "35%", efficiency: "+40%" },
    link: "#",
    icon: Zap,
    gradient: "from-yellow-500 via-orange-500 to-red-500",
  },
  {
    title: "Predictive Maintenance System",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
    description:
      "ระบบทำนายการบำรุงรักษาเครื่องจักรด้วย Machine Learning เพื่อป้องกันการหยุดชะงักของการผลิต",
    category: "Predictive Analytics",
    technologies: ["ML", "Sensors", "Analytics", "Cloud"],
    stats: { prediction: "95%", maintenance: "-50%" },
    link: "#",
    icon: Eye,
    gradient: "from-indigo-500 via-purple-500 to-blue-500",
  },
];

const stats = [
  {
    icon: Award,
    value: "50+",
    label: "โครงการที่สำเร็จ",
    gradient: "from-amber-400 to-orange-500",
  },
  {
    icon: Users,
    value: "30+",
    label: "ลูกค้าที่พึงพอใจ",
    gradient: "from-blue-400 to-cyan-500",
  },
  {
    icon: Zap,
    value: "99.9%",
    label: "ความพึงพอใจ",
    gradient: "from-emerald-400 to-teal-500",
  },
  {
    icon: Eye,
    value: "24/7",
    label: "การสนับสนุน",
    gradient: "from-purple-400 to-pink-500",
  },
];

const Portfolio = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <section
      id="portfolio"
      className="py-24 relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-200/30 to-cyan-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-emerald-200/20 to-teal-200/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600/10 to-cyan-600/10 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium mb-6 shadow-lg">
            <Award className="w-4 h-4" />
            ผลงานและโครงการ
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-primary mb-2 sm:mb-4 drop-shadow-lg font-sarabun">
            ผลงานที่เราภูมิใจ
          </h2>
          <div className="w-20 sm:w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mb-4 sm:mb-6 rounded-full"></div>
          <span className="block text-2xl sm:text-4xl lg:text-5xl font-bold text-emerald-600 font-sarabun mb-8 mt-4 tracking-tight leading-snug drop-shadow">
            นวัตกรรมเพื่อนาคต
          </span>
          <p className="text-base sm:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-16 drop-shadow font-sarabun">
            ค้นพบโซลูชันที่ล้ำสมัยและผลงานที่ประสบความสำเร็จซึ่งเราได้พัฒนาให้กับลูกค้าในอุตสาหกรรมต่าง
            ๆ ด้วยเทคโนโลยีที่ทันสมัยและทีมงานมืออาชีพ
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <Card
              key={idx}
              className="group relative bg-white/90 backdrop-blur-xl border border-gray-200/50 shadow-xl hover:shadow-2xl transition-all duration-700 overflow-hidden transform hover:-translate-y-3 hover:scale-[1.02]"
              onMouseEnter={() => setHoveredProject(idx)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Gradient Border Animation */}
              <div
                className={`absolute inset-0 rounded-xl bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              >
                <div className="absolute inset-[2px] bg-white rounded-lg"></div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                {/* Image with advanced overlay */}
                <div className="relative h-56 overflow-hidden rounded-t-xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                  {/* Floating Category Badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-2 px-4 py-2 bg-white/95 backdrop-blur-md rounded-full shadow-lg">
                    <project.icon className="w-4 h-4 text-gray-700" />
                    <span className="text-xs font-semibold text-gray-700">
                      {project.category}
                    </span>
                  </div>

                  {/* Animated Stats */}
                  <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                    {Object.entries(project.stats).map(
                      ([key, value], statIdx) => (
                        <div
                          key={key}
                          className="flex-1 px-3 py-2 bg-white/20 backdrop-blur-md rounded-lg text-center transition-all duration-300 group-hover:bg-white/30"
                          style={{
                            animationDelay: `${statIdx * 100}ms`,
                            animation:
                              hoveredProject === idx
                                ? "slideInUp 0.5s ease-out forwards"
                                : "none",
                          }}
                        >
                          <div className="text-xs text-white/80 uppercase tracking-wider">
                            {key}
                          </div>
                          <div className="text-sm font-bold text-white">
                            {value}
                          </div>
                        </div>
                      )
                    )}
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                <CardHeader className="pb-3">
                  <CardTitle className="text-xl text-gray-900 group-hover:text-blue-600 transition-colors duration-300 leading-tight font-semibold">
                    {project.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="pt-0">
                  <p className="text-gray-600 mb-6 leading-relaxed text-sm line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies with enhanced styling */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIdx) => (
                      <span
                        key={techIdx}
                        className="px-3 py-1 bg-gradient-to-r from-gray-100 to-gray-50 hover:from-blue-50 hover:to-cyan-50 text-gray-700 hover:text-blue-700 text-xs rounded-full font-medium border border-gray-200 hover:border-blue-200 transition-all duration-300 cursor-default shadow-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Enhanced CTA Button */}
                  <a
                    href={project.link}
                    className={`inline-flex items-center gap-3 px-6 py-4 bg-gradient-to-r ${project.gradient} text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 w-full justify-center group/btn relative overflow-hidden`}
                  >
                    <span className="relative z-10">ดูรายละเอียด</span>
                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300 relative z-10" />
                    <ExternalLink className="w-4 h-4 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 relative z-10" />

                    {/* Button shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"></div>
                  </a>
                </CardContent>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
              <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse delay-200"></div>
            </Card>
          ))}
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default Portfolio;
