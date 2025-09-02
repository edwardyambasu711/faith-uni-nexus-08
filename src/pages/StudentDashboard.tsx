import PortalLayout from "@/components/layout/PortalLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  BookOpen, 
  CreditCard, 
  FileText, 
  Bell, 
  Calendar,
  GraduationCap,
  TrendingUp,
  Clock
} from "lucide-react";

const StudentDashboard = () => {
  // Mock student data
  const studentData = {
    name: "John Doe",
    studentId: "FUC/2024/001",
    program: "Computer Science",
    year: "3rd Year",
    semester: "1st Semester",
    gpa: 3.75,
    cgpa: 3.68,
    outstandingFees: 2500,
    registeredUnits: 18,
    totalUnits: 120,
    completedUnits: 72
  };

  const quickStats = [
    {
      title: "Outstanding Fees",
      value: `GH¢ ${studentData.outstandingFees.toLocaleString()}`,
      icon: CreditCard,
      color: "text-red-600",
      bgColor: "bg-red-50",
      action: "Pay Now"
    },
    {
      title: "Current GPA",
      value: studentData.gpa.toFixed(2),
      icon: TrendingUp,
      color: "text-green-600", 
      bgColor: "bg-green-50",
      action: "View Results"
    },
    {
      title: "Registered Units",
      value: `${studentData.registeredUnits} Units`,
      icon: BookOpen,
      color: "text-blue-600",
      bgColor: "bg-blue-50", 
      action: "View Timetable"
    },
    {
      title: "Progress",
      value: `${Math.round((studentData.completedUnits / studentData.totalUnits) * 100)}%`,
      icon: GraduationCap,
      color: "text-primary",
      bgColor: "bg-orange-50",
      action: "View Transcript"
    }
  ];

  const recentNotices = [
    {
      title: "Course Registration Deadline Extended",
      date: "2 days ago",
      priority: "High",
      category: "Academic"
    },
    {
      title: "Library Hours Update",
      date: "1 week ago", 
      priority: "Medium",
      category: "General"
    },
    {
      title: "Scholarship Application Open",
      date: "1 week ago",
      priority: "High", 
      category: "Financial"
    }
  ];

  const upcomingEvents = [
    {
      title: "Mid-Semester Examinations",
      date: "Dec 20-24, 2024",
      type: "Examination"
    },
    {
      title: "Christmas Break Begins", 
      date: "Dec 25, 2024",
      type: "Holiday"
    },
    {
      title: "Course Registration (Semester 2)",
      date: "Jan 15-25, 2025",
      type: "Registration"
    }
  ];

  return (
    <PortalLayout 
      userType="student" 
      userName={studentData.name}
      userRole={`${studentData.studentId} • ${studentData.program}`}
      notifications={3}
    >
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
          <div>
            <h1 className="text-2xl font-bold text-academic">
              Welcome back, {studentData.name}
            </h1>
            <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-muted-foreground">
              <span>{studentData.studentId}</span>
              <span>•</span>
              <span>{studentData.program}</span>
              <span>•</span>
              <span>{studentData.year}</span>
              <Badge variant="secondary">{studentData.semester}</Badge>
            </div>
          </div>
          <div className="text-right">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Clock className="w-4 h-4" />
              <span>Last login: Today, 9:15 AM</span>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="hover:shadow-card-hover transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground mb-2">
                        {stat.title}
                      </p>
                      <p className="text-2xl font-bold text-academic">
                        {stat.value}
                      </p>
                    </div>
                    <div className={`p-3 rounded-2xl ${stat.bgColor}`}>
                      <Icon className={`w-6 h-6 ${stat.color}`} />
                    </div>
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full mt-4 hover:bg-primary hover:text-primary-foreground"
                  >
                    {stat.action}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Quick Actions */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BookOpen className="w-5 h-5 mr-2 text-primary" />
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Button variant="hero" className="h-auto p-4 flex-col space-y-2">
                    <BookOpen className="w-6 h-6" />
                    <span>Register Courses</span>
                  </Button>
                  <Button variant="academic" className="h-auto p-4 flex-col space-y-2">
                    <CreditCard className="w-6 h-6" />
                    <span>Pay Fees</span>
                  </Button>
                  <Button variant="outline" className="h-auto p-4 flex-col space-y-2 hover:bg-primary hover:text-primary-foreground">
                    <FileText className="w-6 h-6" />
                    <span>View Results</span>
                  </Button>
                  <Button variant="outline" className="h-auto p-4 flex-col space-y-2 hover:bg-primary hover:text-primary-foreground">
                    <Calendar className="w-6 h-6" />
                    <span>View Timetable</span>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Recent Notices */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Bell className="w-5 h-5 mr-2 text-primary" />
                  Recent Notices
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentNotices.map((notice, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <h4 className="font-medium text-academic">{notice.title}</h4>
                          <Badge 
                            variant={notice.priority === "High" ? "destructive" : "secondary"}
                            className="text-xs"
                          >
                            {notice.priority}
                          </Badge>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <span>{notice.category}</span>
                          <span>•</span>
                          <span>{notice.date}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="link" className="w-full mt-4">
                  View All Notices
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Academic Progress */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Academic Progress</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">
                    {studentData.cgpa.toFixed(2)}
                  </div>
                  <div className="text-sm text-muted-foreground">CGPA</div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Completed Units</span>
                    <span>{studentData.completedUnits}/{studentData.totalUnits}</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className="bg-primary h-2 rounded-full transition-all duration-300"
                      style={{ width: `${(studentData.completedUnits / studentData.totalUnits) * 100}%` }}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Upcoming Events */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <Calendar className="w-5 h-5 mr-2 text-primary" />
                  Upcoming Events
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingEvents.map((event, index) => (
                    <div key={index} className="border-l-4 border-primary pl-3">
                      <h4 className="font-medium text-academic text-sm">{event.title}</h4>
                      <div className="flex items-center space-x-2 mt-1">
                        <Badge variant="outline" className="text-xs">
                          {event.type}
                        </Badge>
                        <span className="text-xs text-muted-foreground">{event.date}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </PortalLayout>
  );
};

export default StudentDashboard;