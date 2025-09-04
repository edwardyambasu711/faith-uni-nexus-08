import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, GraduationCap } from "lucide-react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/programs", label: "Programs" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <GraduationCap className="w-8 h-8 text-primary" />
            <div className="flex flex-col">
              <span className="font-bold text-lg text-academic">Faith University</span>
              <span className="text-xs text-muted-foreground -mt-1">Excellence in Education</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === item.href ? 'text-primary' : 'text-academic-light'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/verify-certificate">
              <Button variant="outline" size="sm">
                Verify Certificate
              </Button>
            </Link>
            <Link to="/apply">
              <Button variant="hero" size="sm">
                Apply Now
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`block px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  location.pathname === item.href 
                    ? 'text-primary bg-accent' 
                    : 'text-academic-light hover:text-primary hover:bg-accent'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            
            <div className="pt-4 space-y-2">
              <Link to="/verify-certificate" onClick={() => setIsMenuOpen(false)}>
                <Button variant="outline" className="w-full">
                  Verify Certificate
                </Button>
              </Link>
              <Link to="/apply" onClick={() => setIsMenuOpen(false)}>
                <Button variant="hero" className="w-full">
                  Apply Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};