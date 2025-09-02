import PortalLayout from "@/components/layout/PortalLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";  
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  GraduationCap, 
  DollarSign, 
  TrendingUp,
  UserPlus,
  FileCheck,
  AlertCircle,
  CheckCircle,
  Clock,
  BarChart3,
  Building,
  Bell
} from "lucide-react";

const AdminDashboard = () => {
  const adminData = {
    name: "Prof. Michael Administrator",
    staffId: "FUC/ADMIN/2018/01", 
    position: "Registrar",
    department: "Administration"
  };

  const quickStats = [
    {
      title: "Total Students",
      value: "2,847",
      change: "+12%",
      icon: GraduationCap,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      action: "View Details"
    },
    {
      title: "Pending Admissions",
      value: "156",
      change: "+8%", 
      icon: UserPlus,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      action: "Review"
    },
    {
      title: "Revenue (This Month)",
      value: "L$ 1.2M",
      change: "+15%",
      icon: DollarSign,
      color: "text-green-600", 
      bgColor: "bg-green-50",
      action: "View Report"
    },
    {
      title: "Graduation Candidates",
      value: "342",
      change: "+5%",
      icon: FileCheck,
      color: "text-primary",
      bgColor: "bg-orange-50",
      action: "Review List"
    }
  ];

  const recentAdmissions = [
    {
      name: "John Mensah",
      program: "Computer Science",
      status: "pending",
      appliedDate: "2024-12-01",
      score: 85
    },
    {
      name: "Mary Asante", 
      program: "Business Administration",
      status: "approved",
      appliedDate: "2024-11-28",
      score: 92
    },
    {
      name: "David Osei",
      program: "Engineering",
      status: "pending",
      appliedDate: "2024-11-30", 
      score: 78
    },
    {
      name: "Grace Adjei",
      program: "Medicine",
      status: "approved",
      appliedDate: "2024-11-25",
      score: 96
    }
  ];

  const systemAlerts = [
    {
      title: "Grade Submission Deadline",
      message: "Reminder: Grade submission deadline is in 2 days",
      type: "warning",
      time: "2 hours ago"
    },
    {
      title: "System Maintenance", 
      message: "Scheduled maintenance this weekend from 12AM-6AM",
      type: "info",
      time: "1 day ago"
    },
    {
      title: "High Application Volume",
      message: "Receiving higher than usual application volume",
      type: "success", 
      time: "3 hours ago"
    }
  ];

  const departmentStats = [
    { name: "Science & Technology", students: 856, growth: "+8%" },
    { name: "Business Administration", students: 742, growth: "+12%" },
    { name: "Engineering", students: 623, growth: "+15%" },
    { name: "Medicine", students: 445, growth: "+6%" },
    { name: "Arts & Humanities", students: 181, growth: "+3%" }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "approved": return "text-green-600 bg-green-50 border-green-200";
      case "pending": return "text-orange-600 bg-orange-50 border-orange-200";
      case "rejected": return "text-red-600 bg-red-50 border-red-200";
      default: return "text-gray-600 bg-gray-50 border-gray-200";
    }
  };

  const getAlertIcon = (type: string) => {
    switch (type) {
      case "warning": return <AlertCircle className="w-4 h-4 text-orange-600" />;
      case "success": return <CheckCircle className="w-4 h-4 text-green-600" />;
      case "info": return <Bell className="w-4 h-4 text-blue-600" />;
      default: return <AlertCircle className="w-4 h-4 text-gray-600" />;
    }
  };

  return (
    <PortalLayout 
      userType="admin" 
      userName={adminData.name}
      userRole={`${adminData.staffId} • ${adminData.position}`}
      notifications={8}
    >
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
          <div>
            <h1 className="text-2xl font-bold text-academic">
              Admin Dashboard
            </h1>
            <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-muted-foreground">
              <span>Academic Year 2024/2025</span>
              <span>•</span>
              <span>1st Semester</span>
              <Badge variant="secondary">Live Data</Badge>
            </div>
          </div>
          <div className="text-right">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Clock className="w-4 h-4" />
              <span>Last updated: 5 minutes ago</span>
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
                      <p className="text-sm text-green-600 font-medium">
                        {stat.change} from last month
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
          {/* Recent Admissions */}
          <div className="xl:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center">
                    <UserPlus className="w-5 h-5 mr-2 text-primary" />
                    Recent Applications
                  </CardTitle>
                  <Button variant="outline" size="sm">View All</Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentAdmissions.map((applicant, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/30 transition-colors">
                      <div className="flex-1">
                        <h4 className="font-semibold text-academic">{applicant.name}</h4>
                        <p className="text-sm text-muted-foreground">{applicant.program}</p>
                        <p className="text-xs text-muted-foreground">Applied: {new Date(applicant.appliedDate).toLocaleDateString()}</p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="text-right">
                          <div className="text-sm font-medium">Score: {applicant.score}%</div>
                        </div>
                        <Badge className={`${getStatusColor(applicant.status)} border`}>
                          {applicant.status.charAt(0).toUpperCase() + applicant.status.slice(1)}
                        </Badge>
                        <div className="flex space-x-2">
                          {applicant.status === "pending" && (
                            <>
                              <Button size="sm" variant="outline">
                                <CheckCircle className="w-4 h-4 mr-1" />
                                Approve
                              </Button>
                              <Button size="sm" variant="outline">
                                Review
                              </Button>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Department Statistics */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart3 className="w-5 h-5 mr-2 text-primary" />
                  Department Statistics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {departmentStats.map((dept, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="bg-primary/10 rounded-lg p-2">
                          <Building className="w-4 h-4 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium text-academic">{dept.name}</h4>
                          <p className="text-sm text-muted-foreground">{dept.students} students</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge variant="outline" className="text-green-600">
                          {dept.growth}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* System Alerts */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <Bell className="w-5 h-5 mr-2 text-primary" />
                  System Alerts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {systemAlerts.map((alert, index) => (
                    <div key={index} className="p-3 border rounded-lg">
                      <div className="flex items-start space-x-2">
                        {getAlertIcon(alert.type)}
                        <div className="flex-1">
                          <h4 className="font-medium text-sm text-academic">{alert.title}</h4>
                          <p className="text-xs text-muted-foreground mt-1">{alert.message}</p>
                          <p className="text-xs text-muted-foreground mt-2">{alert.time}</p>
                        </div>
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
                  <UserPlus className="w-4 h-4 mr-2" />
                  New Admission
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <BarChart3 className="w-4 h-4 mr-2" />
                  Generate Report
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Users className="w-4 h-4 mr-2" />
                  Manage Users
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <DollarSign className="w-4 h-4 mr-2" />
                  Finance Overview
                </Button>
              </CardContent>
            </Card>

            {/* Performance Metrics */}
            <Card>
              <CardHeader>
                <CardTitle>This Month</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span>Applications Processed</span>
                    <span className="font-semibold">234</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Admission Letters Sent</span> 
                    <span className="font-semibold">156</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Fee Collection Rate</span>
                    <span className="font-semibold text-green-600">94%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Student Satisfaction</span>
                    <span className="font-semibold text-green-600">4.7/5</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </PortalLayout>
  );
};

export default AdminDashboard;