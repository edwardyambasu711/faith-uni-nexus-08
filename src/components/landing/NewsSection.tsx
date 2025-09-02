import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowRight } from "lucide-react";

const news = [
  {
    id: 1,
    title: "New State-of-the-Art Science Laboratory Unveiled",
    excerpt: "Faith University College inaugurates a modern science laboratory equipped with the latest technology to enhance practical learning experiences.",
    category: "Campus News",
    date: "December 15, 2024",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&h=250&fit=crop",
    slug: "new-science-laboratory"
  },
  {
    id: 2,
    title: "Scholarship Opportunities for 2025 Academic Year",
    excerpt: "Applications are now open for merit-based and need-based scholarships. Don't miss this opportunity to pursue your academic dreams.",
    category: "Admissions",
    date: "December 10, 2024", 
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9d1?w=400&h=250&fit=crop",
    slug: "scholarship-opportunities-2025"
  },
  {
    id: 3,
    title: "Annual Graduation Ceremony Scheduled for March",
    excerpt: "Join us in celebrating the achievements of our graduating class of 2024. Registration details for families and friends available online.",
    category: "Events",
    date: "December 8, 2024",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=250&fit=crop",
    slug: "graduation-ceremony-march"
  }
];

export const NewsSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-academic">
            Latest News & Events
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay updated with the latest happenings, announcements, and events 
            at Faith University College.
          </p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {news.map((article) => (
            <Card 
              key={article.id}
              className="group hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-0 overflow-hidden"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="text-xs">
                    {article.category}
                  </Badge>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Calendar className="w-3 h-3 mr-1" />
                    {article.date}
                  </div>
                </div>
                <h3 className="font-bold text-lg text-academic leading-tight group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
              </CardHeader>
              
              <CardContent className="pt-0">
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {article.excerpt}
                </p>
                <Link 
                  to={`/news/${article.slug}`}
                  className="inline-flex items-center text-primary font-medium text-sm hover:text-primary-glow transition-colors group"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All News Button */}
        <div className="text-center">
          <Link to="/news">
            <Button variant="hero" size="lg">
              View All News & Events
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};