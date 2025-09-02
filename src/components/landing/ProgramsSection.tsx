import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Calculator, Heart, Gavel, Computer, Microscope } from "lucide-react";

const programs = [
  {
    icon: BookOpen,
    title: "Business Administration",
    description: "Comprehensive business education covering management, finance, and entrepreneurship.",
    duration: "4 years",
    level: "Bachelor's",
    color: "text-blue-600"
  },
  {
    icon: Computer,
    title: "Computer Science",
    description: "Cutting-edge technology education in software development and data science.",
    duration: "4 years", 
    level: "Bachelor's",
    color: "text-green-600"
  },
  {
    icon: Heart,
    title: "Nursing",
    description: "Professional healthcare training with hands-on clinical experience.",
    duration: "4 years",
    level: "Bachelor's", 
    color: "text-red-600"
  },
  {
    icon: Calculator,
    title: "Accounting",
    description: "Professional accounting with focus on financial management and auditing.",
    duration: "4 years",
    level: "Bachelor's",
    color: "text-primary"
  },
  {
    icon: Gavel,
    title: "Law",
    description: "Comprehensive legal education preparing future legal professionals.",
    duration: "5 years",
    level: "Bachelor's",
    color: "text-purple-600"
  },
  {
    icon: Microscope,
    title: "Medical Sciences",
    description: "Pre-medical and medical laboratory sciences with research opportunities.",
    duration: "4 years",
    level: "Bachelor's",
    color: "text-teal-600"
  }
];

export const ProgramsSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-academic">
            Academic Programs
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our diverse range of undergraduate and graduate programs designed 
            to prepare you for success in your chosen career path.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-0"
              >
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className={`w-8 h-8 ${program.color}`} />
                  </div>
                  <CardTitle className="text-xl font-bold text-academic">
                    {program.title}
                  </CardTitle>
                  <div className="flex justify-center space-x-4 text-sm text-muted-foreground">
                    <span className="bg-primary/10 text-primary px-2 py-1 rounded-full">
                      {program.level}
                    </span>
                    <span className="bg-muted px-2 py-1 rounded-full">
                      {program.duration}
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {program.description}
                  </p>
                  <Link to={`/programs/${program.title.toLowerCase().replace(/\s+/g, '-')}`}>
                    <Button variant="outline" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      View Details
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* View All Programs Button */}
        <div className="text-center">
          <Link to="/programs">
            <Button variant="hero" size="lg">
              View All Programs
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};