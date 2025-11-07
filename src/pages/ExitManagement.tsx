import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { LogOut, Clock, CheckCircle2, XCircle, FileText } from "lucide-react";

const ExitManagement = () => {
  const stats = [
    { label: "Active Resignations", value: "8", icon: LogOut, color: "text-amber-600 dark:text-amber-400" },
    { label: "Pending Clearance", value: "5", icon: Clock, color: "text-blue-600 dark:text-blue-400" },
    { label: "Completed Exits", value: "23", icon: CheckCircle2, color: "text-emerald-600 dark:text-emerald-400" },
    { label: "This Month", value: "12", icon: XCircle, color: "text-slate-600 dark:text-slate-400" },
  ];

  const activeResignations = [
    { 
      id: 1, 
      employee: "Sarah Johnson", 
      empId: "TEC001",
      department: "Engineering", 
      designation: "Senior Developer",
      resignationDate: "2025-03-25",
      lastWorkingDay: "2025-05-25",
      noticePeriod: "60 days",
      status: "Notice Period",
      reason: "Better opportunity"
    },
    { 
      id: 2, 
      employee: "Michael Chen", 
      empId: "TEC045",
      department: "Product", 
      designation: "Product Manager",
      resignationDate: "2025-04-01",
      lastWorkingDay: "2025-05-01",
      noticePeriod: "30 days",
      status: "Clearance Pending",
      reason: "Personal reasons"
    },
    { 
      id: 3, 
      employee: "Emma Wilson", 
      empId: "TEC089",
      department: "Design", 
      designation: "UX Designer",
      resignationDate: "2025-04-05",
      lastWorkingDay: "2025-05-20",
      noticePeriod: "45 days",
      status: "Notice Period",
      reason: "Career growth"
    },
  ];

  const clearanceChecklist = [
    { item: "IT Equipment Return", responsible: "IT Department", status: "Pending" },
    { item: "Access Card Return", responsible: "Security", status: "Completed" },
    { item: "Knowledge Transfer", responsible: "Manager", status: "In Progress" },
    { item: "Final Settlement", responsible: "Finance", status: "Pending" },
    { item: "Exit Interview", responsible: "HR", status: "Scheduled" },
  ];

  const exitStats = [
    { month: "January", count: 8, voluntary: 6, involuntary: 2 },
    { month: "February", count: 5, voluntary: 4, involuntary: 1 },
    { month: "March", count: 10, voluntary: 8, involuntary: 2 },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Notice Period": return "bg-blue-500/10 text-blue-700 dark:text-blue-400";
      case "Clearance Pending": return "bg-amber-500/10 text-amber-700 dark:text-amber-400";
      case "Completed": return "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400";
      case "In Progress": return "bg-blue-500/10 text-blue-700 dark:text-blue-400";
      case "Pending": return "bg-slate-500/10 text-slate-700 dark:text-slate-400";
      case "Scheduled": return "bg-purple-500/10 text-purple-700 dark:text-purple-400";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Exit Management</h1>
            <p className="text-muted-foreground">Manage employee exits and clearances</p>
          </div>
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
            <CardTitle>Active Resignations</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Employee</TableHead>
                  <TableHead>Department</TableHead>
                  <TableHead>Resignation Date</TableHead>
                  <TableHead>Last Working Day</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {activeResignations.map((resignation) => (
                  <TableRow key={resignation.id}>
                    <TableCell>
                      <div>
                        <p className="font-medium">{resignation.employee}</p>
                        <p className="text-xs text-muted-foreground">{resignation.empId} • {resignation.designation}</p>
                      </div>
                    </TableCell>
                    <TableCell>{resignation.department}</TableCell>
                    <TableCell>{resignation.resignationDate}</TableCell>
                    <TableCell>{resignation.lastWorkingDay}</TableCell>
                    <TableCell>
                      <Badge className={getStatusColor(resignation.status)}>{resignation.status}</Badge>
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">View Details</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Exit Clearance Checklist</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {clearanceChecklist.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">{item.item}</p>
                      <p className="text-sm text-muted-foreground">{item.responsible}</p>
                    </div>
                    <Badge className={getStatusColor(item.status)}>{item.status}</Badge>
                  </div>
                ))}
              </div>
              <Button className="w-full mt-4">
                <FileText className="h-4 w-4 mr-2" />
                Generate Relieving Letter
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Exit Statistics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {exitStats.map((stat) => (
                  <div key={stat.month} className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold">{stat.month} 2025</h4>
                      <span className="text-2xl font-bold">{stat.count}</span>
                    </div>
                    <div className="flex gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground">Voluntary</p>
                        <p className="font-medium">{stat.voluntary}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Involuntary</p>
                        <p className="font-medium">{stat.involuntary}</p>
                      </div>
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

export default ExitManagement;
