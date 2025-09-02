import PortalLayout from "@/components/layout/PortalLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  BookOpen, 
  Users, 
  ClipboardCheck, 
  Bell,
  Calendar,
  Clock,
  FileText,
  CheckCircle,
  AlertCircle,
  TrendingUp,
  Upload
} from "lucide-react";

const StaffDashboard = () => {
  const staffData = {
    name: "Dr. Sarah Johnson",
    staffId: "FUC/STAFF/2020/45",
    department: "Computer Science",
    position: "Senior Lecturer",
    email: "sarah.johnson@faithuni.edu.gh"
  };

  const quickStats = [
    {
      title: "Assigned Courses",
      value: "4",
      icon: BookOpen,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      action: "View Courses"
    },
    {
      title: "Total Students",
      value: "187",
      icon: Users,
      color: "text-green-600",
      bgColor: "bg-green-50",
      action: "View Students"
    },
    {
      title: "Pending Grades",
      value: "23",
      icon: ClipboardCheck,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      action: "Enter Grades"
    },
    {
      title: "Attendance Rate",
      value: "89%",
      icon: TrendingUp,
      color: "text-primary",
      bgColor: "bg-orange-50",
      action: "View Details"
    }
  ];

  const courses = [
    {
      code: "CS301",
      title: "Data Structures and Algorithms",
      students: 45,
      schedule: "Mon/Wed/Fri 10:00-11:00",
      venue: "CS Lab 1",
      pendingGrades: 8,
      attendanceRate: 92
    },
    {
      code: "CS401", 
      title: "Advanced Algorithms",
      students: 32,
      schedule: "Tue/Thu 14:00-15:30",
      venue: "CS Lab 2",
      pendingGrades: 5,
      attendanceRate: 87
    },
    {
      code: "CS501",
      title: "Artificial Intelligence",
      students: 28,
      schedule: "Wed/Fri 16:00-17:30", 
      venue: "AI Lab",
      pendingGrades: 10,
      attendanceRate: 85
    }
  ];

  const recentNotices = [
    {
      title: "Faculty Meeting Scheduled",
      date: "Today",
      priority: "High",
      category: "Meeting"
    },
    {
      title: "Grade Submission Deadline",
      date: "2 days ago",
      priority: "High", 
      category: "Academic"
    },
    {
      title: "Research Proposal Workshop",
      date: "1 week ago",
      priority: "Medium",
      category: "Professional Development"
    }
  ];

  const upcomingClasses = [
    {
      course: "CS301",
      title: "Data Structures",
      time: "10:00 AM",
      venue: "CS Lab 1",
      type: "Lecture"
    },
    {
      course: "CS401",
      title: "Advanced Algorithms", 
      time: "2:00 PM",
      venue: "CS Lab 2",
      type: "Lab"
    },
    {
      course: "CS501",
      title: "Artificial Intelligence",
      time: "4:00 PM",
      venue: "AI Lab", 
      type: "Tutorial"
    }
  ];

  return (
    <PortalLayout 
      userType="staff" 
      userName={staffData.name}
      userRole={`${staffData.staffId} • ${staffData.position}`}
      notifications={5}
    >
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
          <div>
            <h1 className="text-2xl font-bold text-academic">
              Welcome back, {staffData.name.split(' ')[1]}
            </h1>
            <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-muted-foreground">
              <span>{staffData.department} Department</span>
              <span>•</span>
              <span>{staffData.position}</span>
              <Badge variant="secondary">Academic Year 2024/2025</Badge>
            </div>
          </div>
          <div className="text-right">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Clock className="w-4 h-4" />
              <span>Last login: Today, 8:30 AM</span>
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

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          {/* My Courses */}
          <div className="xl:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BookOpen className="w-5 h-5 mr-2 text-primary" />
                  My Courses
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {courses.map((course, index) => (
                  <div key={index} className="border rounded-lg p-4 hover:bg-muted/30 transition-colors">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-semibold text-academic">{course.code}: {course.title}</h3>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground mt-1">
                          <div className="flex items-center">
                            <Users className="w-4 h-4 mr-1" />
                            {course.students} Students
                          </div>
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {course.schedule}
                          </div>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        {course.pendingGrades > 0 && (
                          <Badge variant="destructive" className="text-xs">
                            {course.pendingGrades} Pending
                          </Badge>
                        )}
                        <Badge variant="outline" className="text-xs">
                          {course.attendanceRate}% Attendance
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      <Button size="sm" variant="outline">
                        <ClipboardCheck className="w-4 h-4 mr-1" />
                        Take Attendance
                      </Button>
                      <Button size="sm" variant="outline">
                        <FileText className="w-4 h-4 mr-1" />
                        Enter Grades
                      </Button>
                      <Button size="sm" variant="outline">
                        <Upload className="w-4 h-4 mr-1" />
                        Upload Materials
                      </Button>
                    </div>
                  </div>
                ))}
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
            {/* Today's Classes */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <Calendar className="w-5 h-5 mr-2 text-primary" />
                  Today's Classes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingClasses.map((class_, index) => (
                    <div key={index} className="border-l-4 border-primary pl-3 py-2">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-medium text-academic text-sm">{class_.course}</h4>
                        <span className="text-xs font-medium text-primary">{class_.time}</span>
                      </div>
                      <p className="text-xs text-muted-foreground mb-1">{class_.title}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">{class_.venue}</span>
                        <Badge variant="outline" className="text-xs">
                          {class_.type}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <ClipboardCheck className="w-4 h-4 mr-2" />
                  Mark Attendance
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <FileText className="w-4 h-4 mr-2" />
                  Submit Grades
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Upload className="w-4 h-4 mr-2" />
                  Upload Materials
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Users className="w-4 h-4 mr-2" />
                  View Students
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </PortalLayout>
  );
};

export default StaffDashboard;