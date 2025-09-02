import PortalLayout from "@/components/layout/PortalLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar,
  Edit,
  Camera,
  Save,
  X
} from "lucide-react";
import { useState } from "react";

const StudentProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  
  const studentData = {
    name: "John Doe",
    studentId: "FUC/2024/001",
    email: "john.doe@student.faithuni.edu.gh",
    phone: "+233 24 123 4567",
    program: "Computer Science",
    faculty: "Science and Technology",
    year: "3rd Year",
    semester: "1st Semester",
    gpa: 3.75,
    cgpa: 3.68,
    dateOfBirth: "1999-05-15",
    address: "123 University Road, Accra",
    emergencyContact: {
      name: "Jane Doe",
      relationship: "Mother",
      phone: "+233 24 987 6543"
    },
    academicAdvisor: "Dr. Sarah Johnson",
    enrollmentDate: "2022-09-01",
    expectedGraduation: "2026-06-30"
  };

  return (
    <PortalLayout 
      userType="student" 
      userName={studentData.name}
      userRole={`${studentData.studentId} • ${studentData.program}`}
      notifications={3}
    >
      <div className="p-6 space-y-6">
        {/* Profile Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
          <div>
            <h1 className="text-2xl font-bold text-academic">My Profile</h1>
            <p className="text-muted-foreground">Manage your personal information and academic details</p>
          </div>
          <Button 
            onClick={() => setIsEditing(!isEditing)}
            variant={isEditing ? "outline" : "default"}
          >
            {isEditing ? (
              <>
                <X className="w-4 h-4 mr-2" />
                Cancel
              </>
            ) : (
              <>
                <Edit className="w-4 h-4 mr-2" />
                Edit Profile
              </>
            )}
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Profile Picture & Basic Info */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Profile Picture</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <div className="relative inline-block">
                  <Avatar className="w-32 h-32">
                    <AvatarImage src="" />
                    <AvatarFallback className="bg-primary/10 text-primary text-2xl">
                      {studentData.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  {isEditing && (
                    <Button
                      size="icon"
                      className="absolute bottom-0 right-0 rounded-full"
                    >
                      <Camera className="w-4 h-4" />
                    </Button>
                  )}
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg text-academic">{studentData.name}</h3>
                  <Badge variant="secondary">{studentData.studentId}</Badge>
                  <p className="text-sm text-muted-foreground">{studentData.program}</p>
                  <p className="text-sm text-muted-foreground">{studentData.year}</p>
                </div>

                <div className="pt-4 space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>CGPA:</span>
                    <span className="font-semibold text-primary">{studentData.cgpa}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Current GPA:</span>
                    <span className="font-semibold">{studentData.gpa}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Personal Information */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name</Label>
                    <Input
                      id="fullName"
                      defaultValue={studentData.name}
                      disabled={!isEditing}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      defaultValue={studentData.email}
                      disabled={!isEditing}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      defaultValue={studentData.phone}
                      disabled={!isEditing}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="dob">Date of Birth</Label>
                    <Input
                      id="dob"
                      type="date"
                      defaultValue={studentData.dateOfBirth}
                      disabled={!isEditing}
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="address">Address</Label>
                  <Textarea
                    id="address"
                    defaultValue={studentData.address}
                    disabled={!isEditing}
                    rows={2}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Academic Information */}
            <Card>
              <CardHeader>
                <CardTitle>Academic Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Student ID</Label>
                    <Input value={studentData.studentId} disabled />
                  </div>
                  <div className="space-y-2">
                    <Label>Program</Label>
                    <Input value={studentData.program} disabled />
                  </div>
                  <div className="space-y-2">
                    <Label>Faculty</Label>
                    <Input value={studentData.faculty} disabled />
                  </div>
                  <div className="space-y-2">
                    <Label>Current Year</Label>
                    <Input value={studentData.year} disabled />
                  </div>
                  <div className="space-y-2">
                    <Label>Academic Advisor</Label>
                    <Input value={studentData.academicAdvisor} disabled />
                  </div>
                  <div className="space-y-2">
                    <Label>Expected Graduation</Label>
                    <Input value={new Date(studentData.expectedGraduation).toLocaleDateString()} disabled />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Emergency Contact */}
            <Card>
              <CardHeader>
                <CardTitle>Emergency Contact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="emergencyName">Name</Label>
                    <Input
                      id="emergencyName"
                      defaultValue={studentData.emergencyContact.name}
                      disabled={!isEditing}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="emergencyRelation">Relationship</Label>
                    <Input
                      id="emergencyRelation"
                      defaultValue={studentData.emergencyContact.relationship}
                      disabled={!isEditing}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="emergencyPhone">Phone Number</Label>
                    <Input
                      id="emergencyPhone"
                      defaultValue={studentData.emergencyContact.phone}
                      disabled={!isEditing}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {isEditing && (
              <div className="flex justify-end space-x-4">
                <Button variant="outline" onClick={() => setIsEditing(false)}>
                  Cancel
                </Button>
                <Button>
                  <Save className="w-4 h-4 mr-2" />
                  Save Changes
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </PortalLayout>
  );
};

export default StudentProfile;