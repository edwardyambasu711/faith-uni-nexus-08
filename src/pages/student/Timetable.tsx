import PortalLayout from "@/components/layout/PortalLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar, 
  Clock, 
  MapPin,
  Download,
  User,
  BookOpen
} from "lucide-react";

const StudentTimetable = () => {
  const studentData = {
    name: "John Doe",
    studentId: "FUC/2024/001",
    program: "Computer Science",
    semester: "1st Semester 2024/2025"
  };

  const timeSlots = [
    "08:00-09:00",
    "09:00-10:00", 
    "10:00-11:00",
    "11:00-12:00",
    "12:00-13:00",
    "13:00-14:00",
    "14:00-15:00",
    "15:00-16:00",
    "16:00-17:00",
    "17:00-18:00"
  ];

  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

  const timetableData = {
    "Monday": {
      "08:00-09:00": {
        course: "CS303",
        title: "Software Engineering",
        instructor: "Dr. Emily Davis",
        venue: "Room 101",
        type: "Lecture"
      },
      "10:00-11:00": {
        course: "CS301", 
        title: "Data Structures",
        instructor: "Dr. Sarah Johnson",
        venue: "CS Lab 1",
        type: "Lecture"
      },
      "14:00-15:00": {
        course: "CS201",
        title: "Object-Oriented Programming",
        instructor: "Dr. Mark Thompson", 
        venue: "CS Lab 2",
        type: "Lab"
      }
    },
    "Tuesday": {
      "10:00-11:30": {
        course: "MA301",
        title: "Discrete Mathematics",
        instructor: "Dr. James Wilson",
        venue: "Math Building 301",
        type: "Lecture",
        duration: 90
      },
      "12:00-13:30": {
        course: "CS305",
        title: "Mobile App Development",
        instructor: "Mr. David Kim",
        venue: "Mobile Lab",
        type: "Lab",
        duration: 90
      },
      "14:00-15:30": {
        course: "CS302",
        title: "Database Management Systems",
        instructor: "Prof. Michael Brown",
        venue: "Room 202", 
        type: "Lecture",
        duration: 90
      },
      "16:00-17:30": {
        course: "CS202",
        title: "Web Development",
        instructor: "Ms. Jennifer Lee",
        venue: "Web Lab",
        type: "Lab",
        duration: 90
      }
    },
    "Wednesday": {
      "08:00-09:00": {
        course: "CS303",
        title: "Software Engineering", 
        instructor: "Dr. Emily Davis",
        venue: "Room 101",
        type: "Lecture"
      },
      "10:00-11:00": {
        course: "CS301",
        title: "Data Structures",
        instructor: "Dr. Sarah Johnson",
        venue: "CS Lab 1", 
        type: "Lecture"
      },
      "14:00-15:00": {
        course: "CS201",
        title: "Object-Oriented Programming",
        instructor: "Dr. Mark Thompson",
        venue: "CS Lab 2",
        type: "Lab"
      },
      "16:00-17:30": {
        course: "CS304",
        title: "Computer Networks",
        instructor: "Dr. Lisa Anderson",
        venue: "Network Lab",
        type: "Lecture",
        duration: 90
      }
    },
    "Thursday": {
      "10:00-11:30": {
        course: "MA301",
        title: "Discrete Mathematics",
        instructor: "Dr. James Wilson",
        venue: "Math Building 301",
        type: "Tutorial",
        duration: 90
      },
      "12:00-13:30": {
        course: "CS305",
        title: "Mobile App Development",
        instructor: "Mr. David Kim", 
        venue: "Mobile Lab",
        type: "Lab",
        duration: 90
      },
      "14:00-15:30": {
        course: "CS302",
        title: "Database Management Systems",
        instructor: "Prof. Michael Brown",
        venue: "Room 202",
        type: "Tutorial", 
        duration: 90
      },
      "16:00-17:30": {
        course: "CS202",
        title: "Web Development",
        instructor: "Ms. Jennifer Lee",
        venue: "Web Lab",
        type: "Lab",
        duration: 90
      }
    },
    "Friday": {
      "08:00-09:00": {
        course: "CS303",
        title: "Software Engineering",
        instructor: "Dr. Emily Davis",
        venue: "Room 101",
        type: "Tutorial"
      },
      "10:00-11:00": {
        course: "CS301",
        title: "Data Structures", 
        instructor: "Dr. Sarah Johnson",
        venue: "CS Lab 1",
        type: "Lab"
      },
      "14:00-15:00": {
        course: "CS201", 
        title: "Object-Oriented Programming",
        instructor: "Dr. Mark Thompson",
        venue: "CS Lab 2",
        type: "Lecture"
      },
      "16:00-17:30": {
        course: "CS304",
        title: "Computer Networks",
        instructor: "Dr. Lisa Anderson", 
        venue: "Network Lab",
        type: "Lab",
        duration: 90
      }
    }
  };

  const getClassTypeColor = (type: string) => {
    switch (type) {
      case "Lecture": return "bg-blue-100 text-blue-800 border-blue-200";
      case "Lab": return "bg-green-100 text-green-800 border-green-200";
      case "Tutorial": return "bg-purple-100 text-purple-800 border-purple-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const isTimeSlotOccupied = (day: string, time: string) => {
    return timetableData[day as keyof typeof timetableData]?.[time];
  };

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
            <h1 className="text-2xl font-bold text-academic">My Timetable</h1>
            <p className="text-muted-foreground">{studentData.semester}</p>
          </div>
          <Button>
            <Download className="w-4 h-4 mr-2" />
            Export PDF
          </Button>
        </div>

        {/* Legend */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Class Types</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-blue-100 border border-blue-200 rounded"></div>
                <span className="text-sm">Lecture</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-green-100 border border-green-200 rounded"></div>
                <span className="text-sm">Lab</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-purple-100 border border-purple-200 rounded"></div>
                <span className="text-sm">Tutorial</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Timetable */}
        <div className="bg-card rounded-lg shadow-sm border border-border overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[800px]">
              <thead>
                <tr className="bg-muted/50">
                  <th className="text-left p-4 font-semibold text-academic border-r border-border min-w-[120px]">
                    Time
                  </th>
                  {days.map((day) => (
                    <th key={day} className="text-left p-4 font-semibold text-academic border-r border-border last:border-r-0 min-w-[200px]">
                      {day}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {timeSlots.map((time, timeIndex) => (
                  <tr key={time} className="border-b border-border hover:bg-muted/20">
                    <td className="p-4 font-medium text-sm text-muted-foreground border-r border-border bg-muted/30">
                      {time}
                    </td>
                    {days.map((day) => {
                      const classInfo = isTimeSlotOccupied(day, time);
                      
                      return (
                        <td key={`${day}-${time}`} className="p-2 border-r border-border last:border-r-0 align-top">
                          {classInfo ? (
                            <div className={`p-3 rounded-lg border ${getClassTypeColor(classInfo.type)} h-full`}>
                              <div className="space-y-1">
                                <div className="flex items-center justify-between">
                                  <span className="font-semibold text-sm">{classInfo.course}</span>
                                  <Badge variant="outline" className="text-xs">
                                    {classInfo.type}
                                  </Badge>
                                </div>
                                <h4 className="font-medium text-xs line-clamp-2">{classInfo.title}</h4>
                                <div className="space-y-1 text-xs opacity-80">
                                  <div className="flex items-center">
                                    <User className="w-3 h-3 mr-1" />
                                    <span className="truncate">{classInfo.instructor}</span>
                                  </div>
                                  <div className="flex items-center">
                                    <MapPin className="w-3 h-3 mr-1" />
                                    <span className="truncate">{classInfo.venue}</span>
                                  </div>
                                  {classInfo.duration && classInfo.duration > 60 && (
                                    <div className="flex items-center">
                                      <Clock className="w-3 h-3 mr-1" />
                                      <span>{classInfo.duration} mins</span>
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                          ) : (
                            <div className="h-16"></div>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Course Summary */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Object.entries(
            Object.values(timetableData)
              .flatMap(daySchedule => Object.values(daySchedule))
              .reduce((acc: Record<string, any>, classInfo) => {
                if (!acc[classInfo.course]) {
                  acc[classInfo.course] = {
                    ...classInfo,
                    sessions: 0,
                    types: new Set()
                  };
                }
                acc[classInfo.course].sessions++;
                acc[classInfo.course].types.add(classInfo.type);
                return acc;
              }, {})
          ).map(([courseCode, courseInfo]) => (
            <Card key={courseCode}>
              <CardContent className="p-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">{courseCode}</h3>
                    <Badge variant="secondary">{courseInfo.sessions} sessions/week</Badge>
                  </div>
                  <h4 className="text-sm font-medium text-muted-foreground">{courseInfo.title}</h4>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <User className="w-3 h-3 mr-1" />
                    {courseInfo.instructor}
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {Array.from(courseInfo.types).map((type: any) => (
                      <Badge key={type} variant="outline" className="text-xs">
                        {type}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </PortalLayout>
  );
};

export default StudentTimetable;