import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BarChart, Download, FileText, TrendingUp, Users, DollarSign } from "lucide-react";

const Reports = () => {
  const reportCategories = [
    {
      title: "Employee Reports",
      icon: Users,
      reports: [
        "Employee Directory",
        "Department-wise Distribution",
        "New Joiners",
        "Employee Turnover",
      ]
    },
    {
      title: "Attendance Reports",
      icon: BarChart,
      reports: [
        "Daily Attendance",
        "Monthly Summary",
        "Late Coming Report",
        "Absenteeism Analysis",
      ]
    },
    {
      title: "Leave Reports",
      icon: FileText,
      reports: [
        "Leave Balance",
        "Leave History",
        "Department-wise Leave",
        "Leave Trends",
      ]
    },
    {
      title: "Payroll Reports",
      icon: DollarSign,
      reports: [
        "Monthly Payroll",
        "Department-wise Cost",
        "Tax Deductions",
        "Salary Register",
      ]
    },
    {
      title: "Performance Reports",
      icon: TrendingUp,
      reports: [
        "Goal Completion",
        "Review Summary",
        "Top Performers",
        "Training Completion",
      ]
    },
  ];

  const quickReports = [
    { name: "Today's Attendance", value: "142/148", trend: "+3" },
    { name: "Pending Leave Requests", value: "8", trend: "-2" },
    { name: "Monthly Payroll", value: "$452K", trend: "+5.2%" },
    { name: "Active Projects", value: "12", trend: "+2" },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Reports & Analytics</h1>
            <p className="text-muted-foreground">Generate and export comprehensive reports</p>
          </div>
          <div className="flex gap-2">
            <Select defaultValue="thisMonth">
              <SelectTrigger className="w-[180px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="today">Today</SelectItem>
                <SelectItem value="thisWeek">This Week</SelectItem>
                <SelectItem value="thisMonth">This Month</SelectItem>
                <SelectItem value="thisQuarter">This Quarter</SelectItem>
                <SelectItem value="thisYear">This Year</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {quickReports.map((report, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">{report.name}</p>
                  <p className="text-2xl font-bold">{report.value}</p>
                  <p className="text-xs text-emerald-600 dark:text-emerald-400">{report.trend}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {reportCategories.map((category, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <category.icon className="h-5 w-5" />
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {category.reports.map((report, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                      <div className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-muted-foreground" />
                        <span className="font-medium">{report}</span>
                      </div>
                      <Button variant="ghost" size="sm">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Custom Report Builder</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 md:grid-cols-3">
              <div className="space-y-2">
                <label className="text-sm font-medium">Report Type</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="employee">Employee</SelectItem>
                    <SelectItem value="attendance">Attendance</SelectItem>
                    <SelectItem value="leave">Leave</SelectItem>
                    <SelectItem value="payroll">Payroll</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Date Range</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="thisMonth">This Month</SelectItem>
                    <SelectItem value="lastMonth">Last Month</SelectItem>
                    <SelectItem value="thisQuarter">This Quarter</SelectItem>
                    <SelectItem value="thisYear">This Year</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Format</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select format" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pdf">PDF</SelectItem>
                    <SelectItem value="excel">Excel</SelectItem>
                    <SelectItem value="csv">CSV</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <Button className="w-full">
              <Download className="h-4 w-4 mr-2" />
              Generate Report
            </Button>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Reports;
