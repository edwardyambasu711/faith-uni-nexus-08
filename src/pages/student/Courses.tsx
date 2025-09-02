import PortalLayout from "@/components/layout/PortalLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { 
  BookOpen, 
  Clock, 
  Users, 
  MapPin,
  CheckCircle,
  AlertCircle,
  User,
  Calendar
} from "lucide-react";
import { useState } from "react";

const StudentCourses = () => {
  const [selectedCourses, setSelectedCourses] = useState<string[]>([]);
  const [registrationOpen, setRegistrationOpen] = useState(true);

  const studentData = {
    name: "John Doe",
    studentId: "FUC/2024/001",
    program: "Computer Science",
    semester: "1st Semester 2024/2025",
    maxCredits: 21,
    minCredits: 15,
    registeredCredits: 18
  };

  const availableCourses = [
    {
      id: "CS301",
      title: "Data Structures and Algorithms",
      credits: 3,
      instructor: "Dr. Sarah Johnson",
      schedule: "Mon/Wed/Fri 10:00-11:00",
      venue: "CS Lab 1",
      prerequisite: "CS201",
      enrolled: 45,
      capacity: 50,
      status: "available"
    },
    {
      id: "CS302",
      title: "Database Management Systems",
      credits: 3,
      instructor: "Prof. Michael Brown",
      schedule: "Tue/Thu 14:00-15:30",
      venue: "Room 202",
      prerequisite: "CS201",
      enrolled: 42,
      capacity: 45,
      status: "available"
    },
    {
      id: "CS303",
      title: "Software Engineering",
      credits: 3,
      instructor: "Dr. Emily Davis",
      schedule: "Mon/Wed/Fri 08:00-09:00",
      venue: "Room 101",
      prerequisite: "CS202",
      enrolled: 38,
      capacity: 40,
      status: "available"
    },
    {
      id: "MA301",
      title: "Discrete Mathematics",
      credits: 3,
      instructor: "Dr. James Wilson",
      schedule: "Tue/Thu 10:00-11:30",
      venue: "Math Building 301",
      prerequisite: "MA201",
      enrolled: 35,
      capacity: 40,
      status: "available"
    },
    {
      id: "CS304",
      title: "Computer Networks",
      credits: 3,
      instructor: "Dr. Lisa Anderson",
      schedule: "Wed/Fri 16:00-17:30",
      venue: "Network Lab",
      prerequisite: "CS203",
      enrolled: 40,
      capacity: 40,
      status: "full"
    },
    {
      id: "CS305",
      title: "Mobile App Development",
      credits: 3,
      instructor: "Mr. David Kim",
      schedule: "Tue/Thu 12:00-13:30",
      venue: "Mobile Lab",
      prerequisite: "CS202",
      enrolled: 32,
      capacity: 35,
      status: "available"
    }
  ];

  const registeredCourses = [
    {
      id: "CS201",
      title: "Object-Oriented Programming",
      credits: 3,
      instructor: "Dr. Mark Thompson",
      schedule: "Mon/Wed/Fri 14:00-15:00",
      venue: "CS Lab 2",
      status: "registered"
    },
    {
      id: "CS202",
      title: "Web Development",
      credits: 3,
      instructor: "Ms. Jennifer Lee",
      schedule: "Tue/Thu 16:00-17:30",
      venue: "Web Lab",
      status: "registered"
    }
  ];

  const handleCourseSelection = (courseId: string, checked: boolean) => {
    if (checked) {
      setSelectedCourses([...selectedCourses, courseId]);
    } else {
      setSelectedCourses(selectedCourses.filter(id => id !== courseId));
    }
  };

  const calculateSelectedCredits = () => {
    return selectedCourses.reduce((total, courseId) => {
      const course = availableCourses.find(c => c.id === courseId);
      return total + (course?.credits || 0);
    }, 0);
  };

  const selectedCredits = calculateSelectedCredits();
  const totalCredits = selectedCredits + studentData.registeredCredits;

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
            <h1 className="text-2xl font-bold text-academic">Course Registration</h1>
            <p className="text-muted-foreground">{studentData.semester}</p>
          </div>
          
          <div className="text-right">
            <div className="text-sm text-muted-foreground">Credit Summary</div>
            <div className="text-lg font-semibold">
              {totalCredits}/{studentData.maxCredits} Credits
            </div>
            <Badge variant={totalCredits >= studentData.minCredits ? "default" : "destructive"}>
              {totalCredits >= studentData.minCredits ? "Valid" : "Below Minimum"}
            </Badge>
          </div>
        </div>

        {/* Registration Status Alert */}
        <Alert>
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>
            {registrationOpen 
              ? "Course registration is currently open. You can register for courses until December 15, 2024."
              : "Course registration is closed. Contact the registrar's office for any changes."
            }
          </AlertDescription>
        </Alert>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          {/* Available Courses */}
          <div className="xl:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Available Courses</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {availableCourses.map((course) => (
                  <div
                    key={course.id}
                    className={`border rounded-lg p-4 transition-all ${
                      selectedCourses.includes(course.id) ? "border-primary bg-primary/5" : "border-border"
                    } ${course.status === "full" ? "opacity-60" : ""}`}
                  >
                    <div className="flex items-start space-x-3">
                      <Checkbox
                        checked={selectedCourses.includes(course.id)}
                        onCheckedChange={(checked) => handleCourseSelection(course.id, checked as boolean)}
                        disabled={course.status === "full" || !registrationOpen}
                        className="mt-1"
                      />
                      
                      <div className="flex-1 space-y-2">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="font-semibold text-academic">{course.id}: {course.title}</h3>
                            <div className="flex items-center space-x-4 text-sm text-muted-foreground mt-1">
                              <div className="flex items-center">
                                <BookOpen className="w-4 h-4 mr-1" />
                                {course.credits} Credits
                              </div>
                              <div className="flex items-center">
                                <User className="w-4 h-4 mr-1" />
                                {course.instructor}
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex flex-col items-end space-y-1">
                            <Badge variant={course.status === "full" ? "destructive" : "secondary"}>
                              {course.status === "full" ? "Full" : "Available"}
                            </Badge>
                            <span className="text-xs text-muted-foreground">
                              {course.enrolled}/{course.capacity}
                            </span>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {course.schedule}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-1" />
                            {course.venue}
                          </div>
                        </div>
                        
                        {course.prerequisite && (
                          <div className="text-xs text-muted-foreground">
                            Prerequisite: {course.prerequisite}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Registration Summary */}
          <div className="space-y-6">
            {/* Currently Registered */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2 text-green-600" />
                  Registered Courses
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {registeredCourses.map((course) => (
                  <div key={course.id} className="p-3 bg-green-50 rounded-lg border border-green-200">
                    <h4 className="font-medium text-sm">{course.id}: {course.title}</h4>
                    <div className="text-xs text-muted-foreground mt-1">
                      {course.credits} Credits • {course.instructor}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {course.schedule}
                    </div>
                  </div>
                ))}
                
                <div className="pt-2 border-t">
                  <div className="flex justify-between text-sm">
                    <span>Registered Credits:</span>
                    <span className="font-semibold">{studentData.registeredCredits}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Selected Courses */}
            {selectedCourses.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle>Selected for Registration</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {selectedCourses.map((courseId) => {
                    const course = availableCourses.find(c => c.id === courseId);
                    if (!course) return null;
                    
                    return (
                      <div key={course.id} className="p-3 bg-primary/5 rounded-lg border border-primary/20">
                        <h4 className="font-medium text-sm">{course.id}: {course.title}</h4>
                        <div className="text-xs text-muted-foreground">
                          {course.credits} Credits
                        </div>
                      </div>
                    );
                  })}
                  
                  <div className="pt-2 border-t">
                    <div className="flex justify-between text-sm">
                      <span>Additional Credits:</span>
                      <span className="font-semibold">{selectedCredits}</span>
                    </div>
                    <div className="flex justify-between text-sm font-semibold">
                      <span>Total Credits:</span>
                      <span className={totalCredits > studentData.maxCredits ? "text-red-600" : ""}>{totalCredits}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Registration Action */}
            <Card>
              <CardContent className="pt-6">
                <Button 
                  className="w-full" 
                  disabled={selectedCourses.length === 0 || totalCredits > studentData.maxCredits || !registrationOpen}
                >
                  Register Selected Courses
                </Button>
                
                {totalCredits > studentData.maxCredits && (
                  <p className="text-xs text-red-600 mt-2">
                    Credit limit exceeded. Maximum allowed: {studentData.maxCredits}
                  </p>
                )}
                
                {totalCredits < studentData.minCredits && (
                  <p className="text-xs text-amber-600 mt-2">
                    Below minimum credits. Minimum required: {studentData.minCredits}
                  </p>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </PortalLayout>
  );
};

export default StudentCourses;