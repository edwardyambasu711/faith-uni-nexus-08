import React from "react";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { ZoomIn, Calendar, Users, GraduationCap } from "lucide-react";

// Import gallery images
import graduationCeremony1 from "@/assets/gallery/graduation-ceremony-1.jpg";
import studentsLabCoats from "@/assets/gallery/students-lab-coats.jpg";
import graduatePortrait from "@/assets/gallery/graduate-portrait.jpg";
import certificatePresentation from "@/assets/gallery/certificate-presentation.jpg";
import graduationCeremony2 from "@/assets/gallery/graduation-ceremony-2.jpg";
import presentationScene from "@/assets/gallery/presentation-scene.jpg";
import technicalLab from "@/assets/gallery/technical-lab.jpg";

const Gallery = () => {
  const galleryImages = [
    {
      id: 1,
      src: graduationCeremony1,
      title: "Graduation Ceremony - Traditional Attire",
      description: "Students celebrating their graduation in beautiful traditional kente cloth",
      category: "Graduation",
      date: "2024"
    },
    {
      id: 2,
      src: studentsLabCoats,
      title: "Technical Education",
      description: "Students in our technical programs learning hands-on skills",
      category: "Academic",
      date: "2024"
    },
    {
      id: 3,
      src: graduatePortrait,
      title: "Graduate Achievement",
      description: "A proud graduate celebrating academic success",
      category: "Graduation",
      date: "2024"
    },
    {
      id: 4,
      src: certificatePresentation,
      title: "Certificate Presentation",
      description: "Special ceremony for outstanding academic achievement",
      category: "Achievement",
      date: "2024"
    },
    {
      id: 5,
      src: graduationCeremony2,
      title: "Convocation Hall Ceremony",
      description: "Large graduation ceremony in our main auditorium",
      category: "Graduation",
      date: "2024"
    },
    {
      id: 6,
      src: presentationScene,
      title: "Interactive Learning",
      description: "Engaging classroom sessions with practical demonstrations",
      category: "Academic",
      date: "2024"
    },
    {
      id: 7,
      src: technicalLab,
      title: "Technical Laboratory",
      description: "Students working with advanced technical equipment",
      category: "Technical",
      date: "2024"
    }
  ];

  const categories = ["All", "Graduation", "Academic", "Achievement", "Technical"];
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredImages = selectedCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary to-primary-glow">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Photo Gallery
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Capturing Moments of Excellence at Faith University College
            </p>
            <div className="flex items-center justify-center space-x-6 text-white/80">
              <div className="flex items-center space-x-2">
                <GraduationCap className="w-5 h-5" />
                <span>Academic Excellence</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5" />
                <span>Student Life</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span>Special Events</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="hover:scale-105 transition-transform"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredImages.map((image) => (
              <Card key={image.id} className="group overflow-hidden hover:shadow-card-hover transition-all duration-300">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="secondary" size="sm" className="text-white">
                            <ZoomIn className="w-4 h-4 mr-2" />
                            View Full Size
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl">
                          <img
                            src={image.src}
                            alt={image.title}
                            className="w-full h-auto rounded-lg"
                          />
                          <div className="mt-4">
                            <h3 className="text-lg font-semibold">{image.title}</h3>
                            <p className="text-muted-foreground mt-2">{image.description}</p>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">{image.category}</Badge>
                      <span className="text-sm text-muted-foreground">{image.date}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-academic mb-2">{image.title}</h3>
                    <p className="text-muted-foreground text-sm">{image.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Be Part of Our Story
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join Faith University College and create your own success story. Apply today and become part of our vibrant community.
          </p>
          <Button variant="secondary" size="lg" className="hover:scale-105 transition-transform">
            Apply Now
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;