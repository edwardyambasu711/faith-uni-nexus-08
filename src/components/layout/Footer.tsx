import { Link } from "react-router-dom";
import { GraduationCap, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-academic text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* University Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <GraduationCap className="w-8 h-8 text-primary" />
              <div>
                <h3 className="font-bold text-lg">Faith University College</h3>
                <p className="text-sm text-gray-300">Excellence in Education</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Empowering minds, shaping futures. Faith University College is committed to 
              providing quality education and fostering academic excellence since 1995.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-gray-300 hover:text-primary cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-gray-300 hover:text-primary cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-gray-300 hover:text-primary cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 text-gray-300 hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/programs" className="text-gray-300 hover:text-primary transition-colors">Academic Programs</Link></li>
              <li><Link to="/admissions" className="text-gray-300 hover:text-primary transition-colors">Admissions</Link></li>
              <li><Link to="/fees" className="text-gray-300 hover:text-primary transition-colors">Fees Structure</Link></li>
              <li><Link to="/news" className="text-gray-300 hover:text-primary transition-colors">News & Events</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Student Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Student Services</h4>
            <ul className="space-y-2">
              <li><Link to="/student/portal" className="text-gray-300 hover:text-primary transition-colors">Student Portal</Link></li>
              <li><Link to="/library" className="text-gray-300 hover:text-primary transition-colors">Library</Link></li>
              <li><Link to="/hostel" className="text-gray-300 hover:text-primary transition-colors">Hostel Booking</Link></li>
              <li><Link to="/support" className="text-gray-300 hover:text-primary transition-colors">Support Center</Link></li>
              <li><Link to="/verify-certificate" className="text-gray-300 hover:text-primary transition-colors">Verify Certificate</Link></li>
              <li><Link to="/alumni" className="text-gray-300 hover:text-primary transition-colors">Alumni Network</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-gray-300 text-sm">
                  123 University Road<br />
                  Education City, EC 12345<br />
                  Ghana
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <p className="text-gray-300 text-sm">+233 123 456 789</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <p className="text-gray-300 text-sm">info@faithuni.edu.gh</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © {new Date().getFullYear()} Faith University College. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-300 hover:text-primary text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-300 hover:text-primary text-sm transition-colors">
                Terms of Service
              </Link>
              <Link to="/accessibility" className="text-gray-300 hover:text-primary text-sm transition-colors">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};