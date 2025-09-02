import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Send,
  MessageSquare,
  Users,
  Building,
  GraduationCap
} from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    department: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      department: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      details: [
        "Faith University College",
        "123 University Avenue",
        "Monrovia, Liberia"
      ],
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: Phone,
      title: "Phone",
      details: [
        "+231 77 123 4567",
        "+231 88 987 6543",
        "Mon-Fri: 8AM-5PM"
      ],
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      icon: Mail,
      title: "Email",
      details: [
        "info@faithuni.edu.lr",
        "admissions@faithuni.edu.lr",
        "registrar@faithuni.edu.lr"
      ],
      color: "text-orange-600",
      bgColor: "bg-orange-50"
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: [
        "Monday - Friday: 8:00 AM - 5:00 PM",
        "Saturday: 9:00 AM - 1:00 PM",
        "Sunday: Closed"
      ],
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    }
  ];

  const departments = [
    "General Inquiry",
    "Admissions Office",
    "Academic Affairs",
    "Student Services",
    "Finance Department",
    "Library Services",
    "IT Support",
    "Human Resources"
  ];

  const quickActions = [
    {
      icon: GraduationCap,
      title: "Apply Now",
      description: "Start your application process",
      action: "Apply",
      link: "/apply"
    },
    {
      icon: Users,
      title: "Schedule Visit",
      description: "Tour our campus facilities",
      action: "Book Tour",
      link: "#"
    },
    {
      icon: MessageSquare,
      title: "Live Chat",
      description: "Chat with our support team",
      action: "Start Chat",
      link: "#"
    },
    {
      icon: Building,
      title: "Campus Map",
      description: "Find your way around campus",
      action: "View Map",
      link: "#"
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
                Contact Us
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                We're here to help! Get in touch with us for any questions about 
                admissions, academics, or campus life.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information Cards */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <Card key={index} className="text-center hover:shadow-card-hover transition-all duration-300">
                    <CardContent className="p-6">
                      <div className={`w-16 h-16 ${info.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                        <Icon className={`w-8 h-8 ${info.color}`} />
                      </div>
                      <h3 className="text-xl font-semibold text-academic mb-3">{info.title}</h3>
                      <div className="space-y-1">
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-muted-foreground">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact Form and Quick Actions */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center text-2xl">
                      <Send className="w-6 h-6 mr-3 text-primary" />
                      Send us a Message
                    </CardTitle>
                    <p className="text-muted-foreground">
                      Fill out the form below and we'll get back to you as soon as possible.
                    </p>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            required
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          />
                        </div>
                        <div>
                          <Label htmlFor="department">Department</Label>
                          <Select onValueChange={(value) => setFormData({...formData, department: value})}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select department" />
                            </SelectTrigger>
                            <SelectContent>
                              {departments.map((dept) => (
                                <SelectItem key={dept} value={dept}>{dept}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="subject">Subject *</Label>
                        <Input
                          id="subject"
                          value={formData.subject}
                          onChange={(e) => setFormData({...formData, subject: e.target.value})}
                          placeholder="Brief description of your inquiry"
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          value={formData.message}
                          onChange={(e) => setFormData({...formData, message: e.target.value})}
                          placeholder="Please provide details about your inquiry..."
                          className="min-h-[120px]"
                          required
                        />
                      </div>

                      <Button type="submit" variant="hero" size="lg" className="w-full">
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Quick Actions */}
                <Card>
                  <CardHeader>
                    <CardTitle>Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {quickActions.map((action, index) => {
                      const Icon = action.icon;
                      return (
                        <div key={index} className="p-4 border rounded-lg hover:bg-muted/30 transition-colors">
                          <div className="flex items-start space-x-3">
                            <Icon className="w-5 h-5 text-primary mt-0.5" />
                            <div className="flex-1">
                              <h4 className="font-medium text-academic">{action.title}</h4>
                              <p className="text-sm text-muted-foreground mb-2">{action.description}</p>
                              <Button variant="outline" size="sm">
                                {action.action}
                              </Button>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </CardContent>
                </Card>

                {/* Campus Location */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <MapPin className="w-5 h-5 mr-2 text-primary" />
                      Find Us
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-muted rounded-lg h-48 flex items-center justify-center mb-4">
                      <div className="text-center text-muted-foreground">
                        <MapPin className="w-12 h-12 mx-auto mb-2" />
                        <p>Interactive Campus Map</p>
                        <p className="text-sm">Coming Soon</p>
                      </div>
                    </div>
                    <div className="space-y-2 text-sm">
                      <p className="font-medium text-academic">Faith University College</p>
                      <p className="text-muted-foreground">123 University Avenue</p>
                      <p className="text-muted-foreground">Monrovia, Liberia</p>
                    </div>
                    <Button variant="outline" className="w-full mt-4">
                      Get Directions
                    </Button>
                  </CardContent>
                </Card>

                {/* Emergency Contact */}
                <Card className="border-orange-200 bg-orange-50/50">
                  <CardHeader>
                    <CardTitle className="text-orange-800">Emergency Contact</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm">
                      <p className="text-orange-700">
                        For urgent matters outside office hours:
                      </p>
                      <div className="flex items-center space-x-2">
                        <Phone className="w-4 h-4 text-orange-600" />
                        <span className="font-medium text-orange-800">+231 77 911 0000</span>
                      </div>
                      <p className="text-orange-600 text-xs">
                        Available 24/7 for emergency situations
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Contact;