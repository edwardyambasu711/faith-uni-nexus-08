import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Award, Users } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Excellence",
    description: "We strive for academic excellence in all our programs and services."
  },
  {
    icon: Eye,
    title: "Integrity", 
    description: "We uphold the highest standards of honesty and ethical behavior."
  },
  {
    icon: Award,
    title: "Innovation",
    description: "We embrace new ideas and modern approaches to education."
  },
  {
    icon: Users,
    title: "Community",
    description: "We foster a supportive and inclusive learning environment."
  }
];

export const AboutSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold text-academic">
                About Faith University College
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Founded in 1995, Faith University College has been at the forefront of 
                higher education in Ghana, combining academic excellence with spiritual 
                values to create well-rounded graduates.
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-academic mb-2">Our Mission</h3>
                <p className="text-muted-foreground">
                  To provide quality higher education that integrates academic excellence 
                  with Christian values, preparing students to become leaders and change 
                  agents in their communities and professions.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-academic mb-2">Our Vision</h3>
                <p className="text-muted-foreground">
                  To be a leading Christian university college in Africa, recognized for 
                  academic excellence, spiritual formation, and community impact.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero">
                Learn More About Us
              </Button>
              <Button variant="outline">
                Our History
              </Button>
            </div>
          </div>

          {/* Values Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card 
                  key={index}
                  className="group hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-0"
                >
                  <CardContent className="p-6 text-center">
                    <div className="mx-auto w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-academic mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};