import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Download, DollarSign, TrendingUp, Users, FileText, Lock, Play } from "lucide-react";

const Payroll = () => {
  const payrollSummary = [
    { label: "Total Payroll", value: "$452,000", icon: DollarSign, trend: "+5.2%" },
    { label: "Employees Paid", value: "148", icon: Users, trend: "+3" },
    { label: "Average Salary", value: "$3,054", icon: TrendingUp, trend: "+2.1%" },
    { label: "Pending Payslips", value: "12", icon: FileText, trend: "-8" },
  ];

  const payrollRuns = [
    { id: 1, month: "March 2025", employees: 148, amount: "$452,000", status: "Processed", date: "2025-03-31" },
    { id: 2, month: "February 2025", employees: 145, amount: "$441,500", status: "Locked", date: "2025-02-28" },
    { id: 3, month: "January 2025", employees: 143, amount: "$435,200", status: "Locked", date: "2025-01-31" },
    { id: 4, month: "December 2024", employees: 140, amount: "$428,000", status: "Locked", date: "2024-12-31" },
  ];

  const recentPayslips = [
    { id: 1, employee: "Sarah Johnson", empId: "TEC001", department: "Engineering", gross: "$5,200", net: "$4,368", status: "Sent" },
    { id: 2, employee: "Michael Chen", empId: "TEC045", department: "Product", gross: "$4,800", net: "$4,032", status: "Sent" },
    { id: 3, employee: "Emma Davis", empId: "TEC089", department: "Design", gross: "$4,500", net: "$3,780", status: "Draft" },
    { id: 4, employee: "James Wilson", empId: "TEC112", department: "Marketing", gross: "$4,200", net: "$3,528", status: "Sent" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Processed": return "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400";
      case "Locked": return "bg-slate-500/10 text-slate-700 dark:text-slate-400";
      case "Draft": return "bg-amber-500/10 text-amber-700 dark:text-amber-400";
      case "Sent": return "bg-blue-500/10 text-blue-700 dark:text-blue-400";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Payroll Management</h1>
            <p className="text-muted-foreground">Manage salary processing and payslips</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Export Report
            </Button>
            <Button>
              <Play className="h-4 w-4 mr-2" />
              Run Payroll
            </Button>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {payrollSummary.map((item, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    <p className="text-2xl font-bold">{item.value}</p>
                    <p className="text-xs text-emerald-600 dark:text-emerald-400">{item.trend}</p>
                  </div>
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Payroll Runs</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Period</TableHead>
                    <TableHead>Employees</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {payrollRuns.map((run) => (
                    <TableRow key={run.id}>
                      <TableCell className="font-medium">{run.month}</TableCell>
                      <TableCell>{run.employees}</TableCell>
                      <TableCell>{run.amount}</TableCell>
                      <TableCell>
                        <Badge className={getStatusColor(run.status)}>
                          {run.status === "Locked" && <Lock className="h-3 w-3 mr-1" />}
                          {run.status}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recent Payslips</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Employee</TableHead>
                    <TableHead>Gross</TableHead>
                    <TableHead>Net</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentPayslips.map((slip) => (
                    <TableRow key={slip.id}>
                      <TableCell>
                        <div>
                          <p className="font-medium">{slip.employee}</p>
                          <p className="text-xs text-muted-foreground">{slip.empId}</p>
                        </div>
                      </TableCell>
                      <TableCell>{slip.gross}</TableCell>
                      <TableCell className="font-semibold">{slip.net}</TableCell>
                      <TableCell>
                        <Badge className={getStatusColor(slip.status)}>{slip.status}</Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Payroll;
