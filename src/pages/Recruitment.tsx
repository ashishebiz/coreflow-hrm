import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Briefcase, Users, Eye, UserPlus, Search } from "lucide-react";

const Recruitment = () => {
  const stats = [
    { label: "Open Positions", value: "24", icon: Briefcase, color: "text-blue-600 dark:text-blue-400" },
    { label: "Total Applicants", value: "186", icon: Users, color: "text-emerald-600 dark:text-emerald-400" },
    { label: "In Interview", value: "32", icon: Eye, color: "text-amber-600 dark:text-amber-400" },
    { label: "Hired This Month", value: "8", icon: UserPlus, color: "text-purple-600 dark:text-purple-400" },
  ];

  const openPositions = [
    { id: 1, title: "Senior Frontend Developer", department: "Engineering", location: "Remote", applicants: 45, status: "Open" },
    { id: 2, title: "Product Manager", department: "Product", location: "New York", applicants: 28, status: "Open" },
    { id: 3, title: "UX Designer", department: "Design", location: "San Francisco", applicants: 36, status: "Open" },
    { id: 4, title: "DevOps Engineer", department: "Engineering", location: "Remote", applicants: 22, status: "Open" },
    { id: 5, title: "Marketing Manager", department: "Marketing", location: "London", applicants: 18, status: "Open" },
  ];

  const recentCandidates = [
    { id: 1, name: "Alex Thompson", position: "Senior Frontend Developer", status: "Interview Scheduled", stage: "Technical Round", date: "2025-04-15" },
    { id: 2, name: "Sarah Martinez", position: "Product Manager", status: "Offer Extended", stage: "Offer", date: "2025-04-12" },
    { id: 3, name: "James Lee", position: "UX Designer", status: "Under Review", stage: "Portfolio Review", date: "2025-04-14" },
    { id: 4, name: "Emily Chen", position: "DevOps Engineer", status: "Interview Scheduled", stage: "HR Round", date: "2025-04-16" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Open": return "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400";
      case "Interview Scheduled": return "bg-blue-500/10 text-blue-700 dark:text-blue-400";
      case "Offer Extended": return "bg-purple-500/10 text-purple-700 dark:text-purple-400";
      case "Under Review": return "bg-amber-500/10 text-amber-700 dark:text-amber-400";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Recruitment</h1>
            <p className="text-muted-foreground">Manage job openings and candidates</p>
          </div>
          <Button>
            <UserPlus className="h-4 w-4 mr-2" />
            Post New Job
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                    <p className="text-3xl font-bold">{stat.value}</p>
                  </div>
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <stat.icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Open Positions</CardTitle>
              <div className="relative w-64">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input placeholder="Search positions..." className="pl-10" />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {openPositions.map((position) => (
                <div key={position.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="flex-1">
                    <h3 className="font-semibold">{position.title}</h3>
                    <div className="flex items-center gap-4 mt-1 text-sm text-muted-foreground">
                      <span>{position.department}</span>
                      <span>•</span>
                      <span>{position.location}</span>
                      <span>•</span>
                      <span>{position.applicants} applicants</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge className={getStatusColor(position.status)}>{position.status}</Badge>
                    <Button variant="outline" size="sm">View Details</Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Candidates</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentCandidates.map((candidate) => (
                <div key={candidate.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-sm font-semibold text-primary">
                        {candidate.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold">{candidate.name}</h4>
                      <p className="text-sm text-muted-foreground">{candidate.position}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <Badge className={getStatusColor(candidate.status)}>{candidate.status}</Badge>
                      <p className="text-xs text-muted-foreground mt-1">{candidate.stage}</p>
                    </div>
                    <Button variant="outline" size="sm">View Profile</Button>
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

export default Recruitment;
