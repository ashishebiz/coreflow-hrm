import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Target, TrendingUp, Award, Star, Plus } from "lucide-react";

const Performance = () => {
  const stats = [
    { label: "Active Goals", value: "156", icon: Target, trend: "+12" },
    { label: "Avg. Performance", value: "4.2/5", icon: TrendingUp, trend: "+0.3" },
    { label: "Reviews Due", value: "23", icon: Award, trend: "-5" },
    { label: "Top Performers", value: "18", icon: Star, trend: "+3" },
  ];

  const teamGoals = [
    { id: 1, title: "Launch Mobile App", owner: "Product Team", progress: 75, status: "On Track", dueDate: "2025-06-30" },
    { id: 2, title: "Improve Customer Satisfaction", owner: "Support Team", progress: 60, status: "On Track", dueDate: "2025-05-15" },
    { id: 3, title: "Reduce Page Load Time", owner: "Engineering", progress: 45, status: "At Risk", dueDate: "2025-04-30" },
    { id: 4, title: "Increase Market Share", owner: "Sales Team", progress: 85, status: "Ahead", dueDate: "2025-07-31" },
  ];

  const upcomingReviews = [
    { id: 1, employee: "Sarah Johnson", department: "Engineering", type: "Annual Review", date: "2025-04-20", reviewer: "John Smith" },
    { id: 2, employee: "Michael Chen", department: "Product", type: "Quarterly Review", date: "2025-04-22", reviewer: "Emily Davis" },
    { id: 3, employee: "Emma Wilson", department: "Design", type: "Mid-Year Review", date: "2025-04-25", reviewer: "Robert Brown" },
    { id: 4, employee: "James Taylor", department: "Marketing", type: "Quarterly Review", date: "2025-04-28", reviewer: "Lisa Anderson" },
  ];

  const topPerformers = [
    { id: 1, name: "Sarah Johnson", department: "Engineering", rating: 4.8, achievements: 12 },
    { id: 2, name: "Michael Chen", department: "Product", rating: 4.7, achievements: 10 },
    { id: 3, name: "Emma Wilson", department: "Design", rating: 4.6, achievements: 9 },
    { id: 4, name: "James Taylor", department: "Marketing", rating: 4.5, achievements: 8 },
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
            <h1 className="text-3xl font-bold tracking-tight">Performance Management</h1>
            <p className="text-muted-foreground">Track goals, reviews, and achievements</p>
          </div>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Add Goal
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
            <CardTitle>Team Goals</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {teamGoals.map((goal) => (
                <div key={goal.id} className="p-4 border rounded-lg space-y-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold">{goal.title}</h3>
                      <p className="text-sm text-muted-foreground">{goal.owner}</p>
                    </div>
                    <Badge className={getStatusColor(goal.status)}>{goal.status}</Badge>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Progress</span>
                      <span className="font-medium">{goal.progress}%</span>
                    </div>
                    <Progress value={goal.progress} />
                    <p className="text-xs text-muted-foreground">Due: {goal.dueDate}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Reviews</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingReviews.map((review) => (
                  <div key={review.id} className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <h4 className="font-semibold">{review.employee}</h4>
                      <p className="text-sm text-muted-foreground">{review.type}</p>
                      <p className="text-xs text-muted-foreground mt-1">Reviewer: {review.reviewer}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium">{review.date}</p>
                      <Button variant="outline" size="sm" className="mt-2">Start Review</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Top Performers</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topPerformers.map((performer, index) => (
                  <div key={performer.id} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center font-semibold text-primary">
                        #{index + 1}
                      </div>
                      <div>
                        <h4 className="font-semibold">{performer.name}</h4>
                        <p className="text-sm text-muted-foreground">{performer.department}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-amber-500 fill-amber-500" />
                        <span className="font-semibold">{performer.rating}</span>
                      </div>
                      <p className="text-xs text-muted-foreground">{performer.achievements} achievements</p>
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

export default Performance;
