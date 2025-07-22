import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Building,
  Send,
  ArrowRight,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
// import { toast } from "sonner";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const Contact = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [modal, setModal] = useState({
    open: false,
    type: "success",
    message: "",
    description: "",
  });

  const contactInfo = [
    {
      icon: MapPin,
      title: "ที่อยู่สำนักงาน",
      details: [
        "295 ซอย ร่มเกล้า 58",
        "แขวง คลองสามประเวศ เขต ลาดกระบัง",
        "กรุงเทพมหานคร 10520",
      ],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Phone,
      title: "หมายเลขโทรศัพท์",
      details: ["093-324-2933"],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Mail,
      title: "อีเมล",
      details: ["kttechsolution.ktts@gmail.com"],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Building,
      title: "เลขประจำตัวผู้เสียภาษี",
      details: ["0745565002366"],
      gradient: "from-blue-500 to-cyan-500",
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      // Allow only numbers for the phone field
      const numericValue = value.replace(/[^0-9]/g, "");
      setFormData({
        ...formData,
        [name]: numericValue,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setModal({
        open: true,
        type: "error",
        message: "ข้อมูลไม่ครบถ้วน",
        description: "กรุณากรอกชื่อ-นามสกุล, อีเมล และข้อความให้ครบถ้วน",
      });
      return;
    }

    setIsSending(true);

    try {
      const now = new Date().toLocaleString("th-TH", {
        dateStyle: "full",
        timeStyle: "short",
      });

      await emailjs.send(
        "service_pqfhcvj",
        "template_s5rl0xa",
        {
          ...formData,
          time: now,
        },
        "D6aKydB5O1WSevLqy"
      );

      setModal({
        open: true,
        type: "success",
        message: "ส่งข้อความสำเร็จ!",
        description: "ขอบคุณที่ติดต่อเรา ทีมงานจะติดต่อกลับโดยเร็วที่สุด",
      });
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error("เกิดข้อผิดพลาด:", error.text);
      setModal({
        open: true,
        type: "error",
        message: "เกิดข้อผิดพลาด!",
        description: "กรุณาลองใหม่อีกครั้ง หรือใช้ช่องทางอื่น",
      });
    } finally {
      setIsSending(false);
    }
  };

  // Helper function to generate the correct link
  const getHref = (title, detail) => {
    switch (title) {
      case "หมายเลขโทรศัพท์":
        return `tel:${detail.replace(/-/g, "")}`;

      case "อีเมล":
        return `mailto:${detail}`;

      case "ที่อยู่สำนักงาน":
        // FIX: Corrected Google Maps URL and template literal syntax with ${...}
        const fullAddress = contactInfo
          .find((info) => info.title === "ที่อยู่สำนักงาน")
          .details.join(" ");
        return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
          fullAddress
        )}`;

      default:
        return null; // No link for other types like Tax ID
    }
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mb-6 animate-bounce shadow-lg">
            <Mail className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6 drop-shadow-lg font-sarabun">
            ติดต่อเรา
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed drop-shadow">
            พร้อมให้คำปรึกษาและรับฟังความต้องการของคุณ
            ติดต่อเราได้ทุกช่องทางที่สะดวก
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className={`border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer backdrop-blur-md bg-white/80 dark:bg-gray-800/80 ${
                  hoveredCard === index ? "scale-105" : "scale-100"
                } relative z-10`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center space-x-4">
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${info.gradient
                        .replace("purple-600", "cyan-500")
                        .replace(
                          "blue-500",
                          "cyan-500"
                        )} rounded-xl flex items-center justify-center shadow-lg transform transition-transform duration-300 ${
                        hoveredCard === index
                          ? "rotate-12 scale-110"
                          : "rotate-0 scale-100"
                      }`}
                    >
                      <info.icon className="h-6 w-6 text-white" />
                    </div>
                    <span className="text-gray-800 dark:text-gray-200 font-semibold text-lg">
                      {info.title}
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {info.title === "ที่อยู่สำนักงาน" ? (
                    <a
                      href={getHref(info.title, info.details[0])}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {info.details.map((detail, detailIndex) => (
                        <p
                          key={detailIndex}
                          className="text-gray-600 dark:text-gray-300 leading-relaxed mb-1 transition-colors duration-300 hover:text-blue-600 dark:hover:text-blue-400"
                        >
                          {detail}
                        </p>
                      ))}
                    </a>
                  ) : (
                    info.details.map((detail, detailIndex) => {
                      const href = getHref(info.title, detail);
                      if (href) {
                        return (
                          <a
                            key={detailIndex}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-1 transition-colors duration-300 hover:text-blue-600 dark:hover:text-blue-400">
                              {detail}
                            </p>
                          </a>
                        );
                      }
                      // For non-linkable items like Tax ID
                      return (
                        <p
                          key={detailIndex}
                          className="text-gray-600 dark:text-gray-300 leading-relaxed mb-1"
                        >
                          {detail}
                        </p>
                      );
                    })
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form */}
          <div>
            <Card className="border-0 shadow-2xl backdrop-blur-md bg-white/90 dark:bg-gray-800/90 overflow-hidden relative z-10">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-400"></div>
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent flex items-center">
                  <Send className="h-6 w-6 mr-3 text-blue-600" />
                  ส่งข้อความหาเรา
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="group">
                    <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 block transition-colors group-focus-within:text-blue-600">
                      ชื่อ-นามสกุล
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-0 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 transition-all duration-300 hover:border-blue-300 placeholder-gray-400"
                      placeholder="กรุณากรอกชื่อ-นามสกุล"
                      required
                    />
                  </div>
                  <div className="group">
                    <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 block transition-colors group-focus-within:text-blue-600">
                      อีเมล
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-0 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 transition-all duration-300 hover:border-blue-300 placeholder-gray-400"
                      placeholder="กรุณากรอกอีเมล"
                      required
                    />
                  </div>
                  <div className="group">
                    <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 block transition-colors group-focus-within:text-blue-600">
                      หมายเลขโทรศัพท์
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-0 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 transition-all duration-300 hover:border-blue-300 placeholder-gray-400"
                      placeholder="กรุณากรอกหมายเลขโทรศัพท์"
                    />
                  </div>
                  <div className="group">
                    <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 block transition-colors group-focus-within:text-blue-600">
                      ข้อความ
                    </label>
                    <textarea
                      rows={4}
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-0 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 transition-all duration-300 hover:border-blue-300 placeholder-gray-400 resize-none"
                      placeholder="กรุณากรอกข้อความที่ต้องการติดต่อ"
                      required
                    ></textarea>
                  </div>
                  <Button
                    type="submit"
                    disabled={isSending}
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg group"
                  >
                    {isSending ? (
                      "กำลังส่ง..."
                    ) : (
                      <span className="flex items-center justify-center">
                        ส่งข้อความ
                        <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Business Hours */}
        <div className="mt-16 text-center">
          <Card className="inline-block border-0 shadow-xl backdrop-blur-md bg-white/90 dark:bg-gray-800/90 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1">
            <CardContent className="px-10 py-8">
              <div className="flex items-center justify-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                  เวลาทำการ
                </h3>
              </div>
              <div className="space-y-2">
                <p className="text-gray-600 dark:text-gray-300 font-medium">
                  จันทร์ - ศุกร์:{" "}
                  <span className="text-green-600 dark:text-green-400 font-semibold">
                    9:00 - 18:00 น.
                  </span>
                </p>
                <p className="text-gray-600 dark:text-gray-300 font-medium">
                  เสาร์ - อาทิตย์:{" "}
                  <span className="text-blue-600 dark:text-blue-400 font-semibold">
                    ตามนัดหมาย
                  </span>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      {/* Custom Modal Notification */}
      {modal.open && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40 backdrop-blur-sm animate-fade-in p-4">
          <div
            className={`relative bg-white rounded-2xl shadow-2xl p-6 sm:p-10 max-w-sm w-full flex flex-col items-center animate-pop-up border-4 ${
              modal.type === "success" ? "border-green-400" : "border-red-400"
            }`}
          >
            <div className="mb-4">
              {modal.type === "success" ? (
                <svg
                  className="w-12 h-12 sm:w-16 sm:h-16 text-green-400 animate-bounce"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              ) : (
                <svg
                  className="w-12 h-12 sm:w-16 sm:h-16 text-red-400 animate-bounce"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </div>
            <h3
              className={`text-xl sm:text-2xl font-bold mb-2 ${
                modal.type === "success" ? "text-green-500" : "text-red-500"
              }`}
            >
              {modal.message}
            </h3>
            <p className="text-gray-700 text-center mb-6 text-sm sm:text-base">
              {modal.description}
            </p>
            <button
              className={`px-5 py-2 sm:px-6 rounded-full font-bold text-white shadow-lg transition-all duration-300 text-sm sm:text-base ${
                modal.type === "success"
                  ? "bg-green-500 hover:bg-green-600"
                  : "bg-red-500 hover:bg-red-600"
              }`}
              onClick={() => setModal({ ...modal, open: false })}
            >
              ปิดหน้าต่าง
            </button>
          </div>
          <style>{`
            @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
            .animate-fade-in { animation: fade-in 0.3s ease; }
            @keyframes pop-up { 0% { transform: scale(0.7); opacity: 0; } 100% { transform: scale(1); opacity: 1; } }
            .animate-pop-up { animation: pop-up 0.4s cubic-bezier(0.4, 0, 0.2, 1); }
          `}</style>
        </div>
      )}
    </section>
  );
};

export default Contact;
