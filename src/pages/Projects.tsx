import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { FolderKanban, Users, Clock, CheckCircle2, Plus } from "lucide-react";

const Projects = () => {
  const stats = [
    { label: "Active Projects", value: "12", icon: FolderKanban, trend: "+2" },
    { label: "Total Team Members", value: "48", icon: Users, trend: "+5" },
    { label: "Hours Logged", value: "1,240", icon: Clock, trend: "+156" },
    { label: "Completed Tasks", value: "284", icon: CheckCircle2, trend: "+32" },
  ];

  const projects = [
    { 
      id: 1, 
      name: "Mobile App Development", 
      client: "TechStart Inc.", 
      progress: 75, 
      status: "On Track", 
      team: 8, 
      deadline: "2025-06-30",
      budget: "$85,000",
      spent: "$63,750"
    },
    { 
      id: 2, 
      name: "Website Redesign", 
      client: "Fashion Hub", 
      progress: 60, 
      status: "On Track", 
      team: 5, 
      deadline: "2025-05-15",
      budget: "$45,000",
      spent: "$27,000"
    },
    { 
      id: 3, 
      name: "Cloud Migration", 
      client: "Enterprise Corp", 
      progress: 45, 
      status: "At Risk", 
      team: 6, 
      deadline: "2025-07-31",
      budget: "$120,000",
      spent: "$54,000"
    },
    { 
      id: 4, 
      name: "E-commerce Platform", 
      client: "ShopEasy", 
      progress: 90, 
      status: "Ahead", 
      team: 10, 
      deadline: "2025-04-30",
      budget: "$95,000",
      spent: "$85,500"
    },
  ];

  const recentActivity = [
    { id: 1, project: "Mobile App Development", activity: "Design mockups approved", user: "Sarah Johnson", time: "2 hours ago" },
    { id: 2, project: "Website Redesign", activity: "Backend API completed", user: "Michael Chen", time: "5 hours ago" },
    { id: 3, project: "Cloud Migration", activity: "Security audit passed", user: "Emma Wilson", time: "1 day ago" },
    { id: 4, project: "E-commerce Platform", activity: "Payment integration tested", user: "James Taylor", time: "1 day ago" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "On Track": return "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400";
      case "At Risk": return "bg-amber-500/10 text-amber-700 dark:text-amber-400";
      case "Ahead": return "bg-blue-500/10 text-blue-700 dark:text-blue-400";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Project Management</h1>
            <p className="text-muted-foreground">Track projects and timesheets</p>
          </div>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            New Project
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
            <CardTitle>Active Projects</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {projects.map((project) => (
                <div key={project.id} className="p-4 border rounded-lg space-y-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold text-lg">{project.name}</h3>
                      <p className="text-sm text-muted-foreground">{project.client}</p>
                    </div>
                    <Badge className={getStatusColor(project.status)}>{project.status}</Badge>
                  </div>
                  
                  <div className="grid grid-cols-4 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Team Size</p>
                      <p className="font-medium">{project.team} members</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Deadline</p>
                      <p className="font-medium">{project.deadline}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Budget</p>
                      <p className="font-medium">{project.budget}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Spent</p>
                      <p className="font-medium">{project.spent}</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Progress</span>
                      <span className="font-medium">{project.progress}%</span>
                    </div>
                    <Progress value={project.progress} />
                  </div>

                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">View Details</Button>
                    <Button variant="outline" size="sm">Timesheet</Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-start gap-4 p-3 border rounded-lg">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <FolderKanban className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">{activity.activity}</p>
                    <p className="text-sm text-muted-foreground">{activity.project}</p>
                    <div className="flex items-center gap-2 mt-1 text-xs text-muted-foreground">
                      <span>{activity.user}</span>
                      <span>•</span>
                      <span>{activity.time}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Projects;
