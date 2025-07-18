import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Portfolio from "@/components/Portfolio";
import CustomerReference from "@/components/CustomerReference";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <CustomerReference />
      <Footer />
    </div>
  );
};

export default Index;
