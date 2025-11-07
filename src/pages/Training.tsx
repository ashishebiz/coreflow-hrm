import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { GraduationCap, BookOpen, Award, Users, Plus, Play } from "lucide-react";

const Training = () => {
  const stats = [
    { label: "Active Courses", value: "18", icon: BookOpen, trend: "+3" },
    { label: "Enrolled Employees", value: "142", icon: Users, trend: "+12" },
    { label: "Completed Courses", value: "86", icon: Award, trend: "+8" },
    { label: "Avg. Completion", value: "78%", icon: GraduationCap, trend: "+5%" },
  ];

  const courses = [
    { 
      id: 1, 
      title: "Advanced React Development", 
      instructor: "Sarah Johnson", 
      duration: "8 weeks", 
      enrolled: 24, 
      completed: 18,
      category: "Development",
      level: "Advanced"
    },
    { 
      id: 2, 
      title: "Leadership & Management", 
      instructor: "Michael Chen", 
      duration: "6 weeks", 
      enrolled: 32, 
      completed: 28,
      category: "Management",
      level: "Intermediate"
    },
    { 
      id: 3, 
      title: "UX Design Fundamentals", 
      instructor: "Emma Wilson", 
      duration: "4 weeks", 
      enrolled: 18, 
      completed: 12,
      category: "Design",
      level: "Beginner"
    },
    { 
      id: 4, 
      title: "Cloud Architecture", 
      instructor: "James Taylor", 
      duration: "10 weeks", 
      enrolled: 15, 
      completed: 8,
      category: "Infrastructure",
      level: "Advanced"
    },
  ];

  const upcomingSessions = [
    { id: 1, course: "Agile Methodologies", date: "2025-04-18", time: "10:00 AM", instructor: "Robert Brown", seats: 20, booked: 15 },
    { id: 2, course: "Data Analytics", date: "2025-04-20", time: "2:00 PM", instructor: "Lisa Anderson", seats: 25, booked: 22 },
    { id: 3, course: "Cybersecurity Basics", date: "2025-04-22", time: "11:00 AM", instructor: "David Wilson", seats: 30, booked: 18 },
  ];

  const employeeProgress = [
    { id: 1, employee: "Sarah Johnson", course: "Advanced React Development", progress: 85, status: "In Progress" },
    { id: 2, employee: "Michael Chen", course: "Leadership & Management", progress: 100, status: "Completed" },
    { id: 3, employee: "Emma Wilson", course: "UX Design Fundamentals", progress: 60, status: "In Progress" },
    { id: 4, employee: "James Taylor", course: "Cloud Architecture", progress: 45, status: "In Progress" },
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner": return "bg-green-500/10 text-green-700 dark:text-green-400";
      case "Intermediate": return "bg-blue-500/10 text-blue-700 dark:text-blue-400";
      case "Advanced": return "bg-purple-500/10 text-purple-700 dark:text-purple-400";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed": return "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400";
      case "In Progress": return "bg-blue-500/10 text-blue-700 dark:text-blue-400";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Training & Development</h1>
            <p className="text-muted-foreground">Manage courses and skill development</p>
          </div>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Add Course
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <p className="text-xs text-emerald-600 dark:text-emerald-400">{stat.trend}</p>
                  </div>
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <stat.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Available Courses</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              {courses.map((course) => (
                <div key={course.id} className="p-4 border rounded-lg space-y-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold">{course.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">by {course.instructor}</p>
                    </div>
                    <Badge className={getLevelColor(course.level)}>{course.level}</Badge>
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm">
                    <span className="text-muted-foreground">{course.duration}</span>
                    <span className="text-muted-foreground">•</span>
                    <span className="text-muted-foreground">{course.category}</span>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Completion Rate</span>
                      <span className="font-medium">{Math.round((course.completed / course.enrolled) * 100)}%</span>
                    </div>
                    <Progress value={(course.completed / course.enrolled) * 100} />
                    <p className="text-xs text-muted-foreground">{course.enrolled} enrolled, {course.completed} completed</p>
                  </div>

                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Play className="h-4 w-4 mr-2" />
                      Start Course
                    </Button>
                    <Button variant="outline" size="sm">Details</Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Sessions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingSessions.map((session) => (
                  <div key={session.id} className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <h4 className="font-semibold">{session.course}</h4>
                      <p className="text-sm text-muted-foreground">{session.instructor}</p>
                      <p className="text-xs text-muted-foreground mt-1">{session.date} at {session.time}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium">{session.booked}/{session.seats} seats</p>
                      <Button variant="outline" size="sm" className="mt-2">Enroll</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Employee Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {employeeProgress.map((item) => (
                  <div key={item.id} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">{item.employee}</p>
                        <p className="text-sm text-muted-foreground">{item.course}</p>
                      </div>
                      <Badge className={getStatusColor(item.status)}>{item.status}</Badge>
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Progress</span>
                        <span className="font-medium">{item.progress}%</span>
                      </div>
                      <Progress value={item.progress} />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Training;
