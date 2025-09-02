import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Award, BookOpen } from "lucide-react";
import faithBanner from "@/assets/faith-university-banner.jpg";

export const HeroSection = () => {
  return (
    <section className="relative bg-gradient-hero text-white overflow-hidden">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${faithBanner})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary-light/90" />
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Excellence in
                <span className="block text-yellow-200">Higher Education</span>
              </h1>
              <p className="text-xl text-white/90 leading-relaxed max-w-lg">
                Empowering minds, shaping futures. Join Faith University College 
                where academic excellence meets spiritual growth and innovation.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/apply">
                <Button variant="secondary" size="lg" className="group">
                  Apply Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/login">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                  Student Portal
                </Button>
              </Link>
              <Link to="/verify-certificate">
                <Button variant="ghost" size="lg" className="text-white hover:bg-white/10">
                  Verify Certificate
                </Button>
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Users className="w-8 h-8 text-yellow-200" />
                </div>
                <div className="text-2xl font-bold">5,000+</div>
                <div className="text-white/80 text-sm">Students</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <BookOpen className="w-8 h-8 text-yellow-200" />
                </div>
                <div className="text-2xl font-bold">50+</div>
                <div className="text-white/80 text-sm">Programs</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Award className="w-8 h-8 text-yellow-200" />
                </div>
                <div className="text-2xl font-bold">98%</div>
                <div className="text-white/80 text-sm">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Image/Visual Content */}
          <div className="relative animate-slide-up">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
              <img
                src={faithBanner}
                alt="Faith University College Campus"
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-yellow-400 text-academic px-4 py-2 rounded-full font-semibold shadow-lg animate-glow">
              Accredited ✓
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white text-primary px-4 py-2 rounded-full font-semibold shadow-lg">
              Est. 1995
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-orange-400 to-primary" />
    </section>
  );
};