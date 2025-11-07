import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { DollarSign, Receipt, Clock, CheckCircle, Plus } from "lucide-react";

const Expenses = () => {
  const stats = [
    { label: "Total Expenses", value: "$48,250", icon: DollarSign, trend: "+12.3%" },
    { label: "Pending Approval", value: "18", icon: Clock, trend: "-3" },
    { label: "Approved This Month", value: "64", icon: CheckCircle, trend: "+8" },
    { label: "Avg. Claim Amount", value: "$753", icon: Receipt, trend: "+5.2%" },
  ];

  const recentExpenses = [
    { id: 1, employee: "Sarah Johnson", category: "Travel", amount: "$1,250", date: "2025-04-10", status: "Pending", description: "Conference trip to NYC" },
    { id: 2, employee: "Michael Chen", category: "Software", amount: "$299", date: "2025-04-09", status: "Approved", description: "Annual Figma subscription" },
    { id: 3, employee: "Emma Wilson", category: "Office Supplies", amount: "$156", date: "2025-04-08", status: "Approved", description: "Ergonomic keyboard and mouse" },
    { id: 4, employee: "James Taylor", category: "Travel", amount: "$890", date: "2025-04-07", status: "Pending", description: "Client meeting in Boston" },
    { id: 5, employee: "Lisa Anderson", category: "Training", amount: "$450", date: "2025-04-06", status: "Rejected", description: "Online course enrollment" },
    { id: 6, employee: "Robert Brown", category: "Entertainment", amount: "$320", date: "2025-04-05", status: "Approved", description: "Team dinner" },
  ];

  const categoryBreakdown = [
    { category: "Travel", amount: "$18,500", percentage: 38, count: 45 },
    { category: "Software", amount: "$12,800", percentage: 27, count: 32 },
    { category: "Office Supplies", amount: "$8,900", percentage: 18, count: 68 },
    { category: "Training", amount: "$5,200", percentage: 11, count: 18 },
    { category: "Entertainment", amount: "$2,850", percentage: 6, count: 12 },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Approved": return "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400";
      case "Pending": return "bg-amber-500/10 text-amber-700 dark:text-amber-400";
      case "Rejected": return "bg-red-500/10 text-red-700 dark:text-red-400";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Expense Management</h1>
            <p className="text-muted-foreground">Track and approve employee expenses</p>
          </div>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Submit Expense
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

        <div className="grid gap-6 lg:grid-cols-3">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Recent Expense Claims</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Employee</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentExpenses.map((expense) => (
                    <TableRow key={expense.id}>
                      <TableCell className="font-medium">{expense.employee}</TableCell>
                      <TableCell>{expense.category}</TableCell>
                      <TableCell className="max-w-[200px] truncate">{expense.description}</TableCell>
                      <TableCell className="font-semibold">{expense.amount}</TableCell>
                      <TableCell>{expense.date}</TableCell>
                      <TableCell>
                        <Badge className={getStatusColor(expense.status)}>{expense.status}</Badge>
                      </TableCell>
                      <TableCell>
                        <Button variant="ghost" size="sm">View</Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Category Breakdown</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {categoryBreakdown.map((category) => (
                  <div key={category.category} className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium">{category.category}</span>
                      <span className="text-muted-foreground">{category.amount}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-primary rounded-full" 
                          style={{ width: `${category.percentage}%` }}
                        />
                      </div>
                      <span className="text-xs text-muted-foreground w-12 text-right">{category.percentage}%</span>
                    </div>
                    <p className="text-xs text-muted-foreground">{category.count} claims</p>
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

export default Expenses;
