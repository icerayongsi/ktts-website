import { Building2, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import ktTechLogo from "@/assets/kt-tech-logo.png";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Company Name */}
          <div className="flex items-center space-x-3">
            <img 
              src={ktTechLogo} 
              alt="KT Tech Solution Logo" 
              className="h-12 w-auto"
            />
            <div className="flex flex-col">
              <h1 className="text-xl font-bold text-primary">KT TECH SOLUTION</h1>
              <span className="text-sm text-muted-foreground">CO., LTD.</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">
              หน้าหลัก
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              เกี่ยวกับเรา
            </a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors">
              บริการ
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              ติดต่อเรา
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-foreground hover:text-primary transition-colors py-2">
                หน้าหลัก
              </a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors py-2">
                เกี่ยวกับเรา
              </a>
              <a href="#services" className="text-foreground hover:text-primary transition-colors py-2">
                บริการ
              </a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors py-2">
                ติดต่อเรา
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;