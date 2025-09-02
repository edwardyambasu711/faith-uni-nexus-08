import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  BookOpen, 
  Calculator, 
  Heart, 
  Gavel, 
  Computer, 
  Microscope,
  Search,
  Filter,
  Clock,
  Users,
  Award
} from "lucide-react";

const Programs = () => {
  const programs = [
    {
      id: 1,
      title: "Bachelor of Business Administration",
      faculty: "Business School",
      duration: "4 years",
      level: "Undergraduate",
      icon: BookOpen,
      description: "Comprehensive business education covering management, finance, marketing, and entrepreneurship with practical industry exposure.",
      requirements: ["WAEC/SSSCE", "Mathematics", "English Language", "Economics (Preferred)"],
      fees: "L$ 8,500/year",
      intake: "September & January",
      students: 450,
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      id: 2,
      title: "Bachelor of Computer Science",
      faculty: "Faculty of Computing",
      duration: "4 years", 
      level: "Undergraduate",
      icon: Computer,
      description: "Cutting-edge technology education in software development, data science, artificial intelligence, and cybersecurity.",
      requirements: ["WAEC/SSSCE", "Mathematics", "English Language", "Physics", "Elective Mathematics"],
      fees: "L$ 9,200/year",
      intake: "September & January",
      students: 320,
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      id: 3,
      title: "Bachelor of Nursing",
      faculty: "Faculty of Health Sciences",
      duration: "4 years",
      level: "Undergraduate",
      icon: Heart,
      description: "Professional healthcare training with hands-on clinical experience in modern medical facilities.",
      requirements: ["WAEC/SSSCE", "Mathematics", "English Language", "Biology", "Chemistry", "Physics"],
      fees: "L$ 12,000/year",
      intake: "September",
      students: 180,
      color: "text-red-600",
      bgColor: "bg-red-50"
    },
    {
      id: 4,
      title: "Bachelor of Accounting",
      faculty: "Business School",
      duration: "4 years",
      level: "Undergraduate", 
      icon: Calculator,
      description: "Professional accounting education with focus on financial management, auditing, and taxation.",
      requirements: ["WAEC/SSSCE", "Mathematics", "English Language", "Economics", "Elective Mathematics"],
      fees: "L$ 8,000/year",
      intake: "September & January",
      students: 280,
      color: "text-primary",
      bgColor: "bg-orange-50"
    },
    {
      id: 5,
      title: "Bachelor of Laws (LLB)",
      faculty: "Faculty of Law",
      duration: "5 years",
      level: "Undergraduate",
      icon: Gavel,
      description: "Comprehensive legal education preparing future legal professionals with practical courtroom experience.",
      requirements: ["WAEC/SSSCE", "Mathematics", "English Language", "Literature", "Government/History"],
      fees: "L$ 10,500/year",
      intake: "September",
      students: 150,
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      id: 6,
      title: "Bachelor of Medical Laboratory Science",
      faculty: "Faculty of Health Sciences",
      duration: "4 years",
      level: "Undergraduate",
      icon: Microscope,
      description: "Medical laboratory sciences with research opportunities and modern laboratory facilities.",
      requirements: ["WAEC/SSSCE", "Mathematics", "English Language", "Biology", "Chemistry", "Physics"],
      fees: "L$ 11,000/year",
      intake: "September",
      students: 120,
      color: "text-teal-600",
      bgColor: "bg-teal-50"
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Header Section */}
        <section className="bg-gradient-hero text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                Academic Programs
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Choose from our diverse range of undergraduate and graduate programs 
                designed to prepare you for success in your chosen career.
              </p>
            </div>
          </div>
        </section>

        {/* Filters Section */}
        <section className="py-8 bg-muted/30 border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="flex-1 max-w-md">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input 
                    placeholder="Search programs..."
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Button variant="outline" className="flex items-center">
                  <Filter className="w-4 h-4 mr-2" />
                  Filter by Faculty
                </Button>
                <Button variant="outline" className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  Duration
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Programs Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {programs.map((program) => {
                const Icon = program.icon;
                return (
                  <Card 
                    key={program.id}
                    className="group hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-0"
                  >
                    <CardHeader>
                      <div className="flex items-start justify-between mb-4">
                        <div className={`p-3 rounded-2xl ${program.bgColor} group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className={`w-6 h-6 ${program.color}`} />
                        </div>
                        <div className="text-right text-sm text-muted-foreground">
                          <div className="flex items-center mb-1">
                            <Users className="w-3 h-3 mr-1" />
                            {program.students} students
                          </div>
                          <Badge variant="secondary">{program.level}</Badge>
                        </div>
                      </div>
                      <CardTitle className="text-xl font-bold text-academic group-hover:text-primary transition-colors">
                        {program.title}
                      </CardTitle>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <span>{program.faculty}</span>
                        <span>•</span>
                        <span>{program.duration}</span>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="space-y-6">
                      <p className="text-muted-foreground leading-relaxed">
                        {program.description}
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <h4 className="font-semibold text-academic mb-2 flex items-center">
                            <Award className="w-4 h-4 mr-1 text-primary" />
                            Requirements
                          </h4>
                          <ul className="space-y-1 text-muted-foreground">
                            {program.requirements.slice(0, 3).map((req, index) => (
                              <li key={index} className="flex items-center">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                                {req}
                              </li>
                            ))}
                            {program.requirements.length > 3 && (
                              <li className="text-primary">+{program.requirements.length - 3} more</li>
                            )}
                          </ul>
                        </div>

                        <div className="space-y-3">
                          <div>
                            <span className="font-semibold text-academic">Fees:</span>
                            <span className="ml-2 text-primary font-bold">{program.fees}</span>
                          </div>
                          <div>
                            <span className="font-semibold text-academic">Intake:</span>
                            <span className="ml-2 text-muted-foreground">{program.intake}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-border">
                        <Button variant="hero" className="flex-1">
                          Apply Now
                        </Button>
                        <Button variant="outline" className="flex-1 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                          View Details
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Call to Action */}
            <div className="text-center mt-16 p-8 bg-gradient-hero rounded-3xl text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Start Your Journey?</h3>
              <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                Join thousands of successful graduates who started their careers at Faith University College. 
                Apply today and take the first step towards your future.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/apply">
                  <Button variant="secondary" size="lg">
                    Apply Now
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                    Contact Admissions
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Programs;