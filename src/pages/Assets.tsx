import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Package, Laptop, Monitor, Smartphone, Plus, Search } from "lucide-react";

const Assets = () => {
  const stats = [
    { label: "Total Assets", value: "248", icon: Package, trend: "+12" },
    { label: "Laptops", value: "142", icon: Laptop, trend: "+8" },
    { label: "Monitors", value: "186", icon: Monitor, trend: "+15" },
    { label: "Mobile Devices", value: "95", icon: Smartphone, trend: "+5" },
  ];

  const assets = [
    { 
      id: 1, 
      name: "MacBook Pro 16\"", 
      assetId: "AST-001", 
      category: "Laptop", 
      assignedTo: "Sarah Johnson", 
      department: "Engineering",
      status: "Assigned", 
      condition: "Excellent",
      purchaseDate: "2024-01-15",
      value: "$2,499"
    },
    { 
      id: 2, 
      name: "Dell UltraSharp 27\"", 
      assetId: "AST-045", 
      category: "Monitor", 
      assignedTo: "Michael Chen", 
      department: "Product",
      status: "Assigned", 
      condition: "Good",
      purchaseDate: "2023-08-20",
      value: "$549"
    },
    { 
      id: 3, 
      name: "iPhone 15 Pro", 
      assetId: "AST-089", 
      category: "Mobile", 
      assignedTo: "Emma Wilson", 
      department: "Design",
      status: "Assigned", 
      condition: "Excellent",
      purchaseDate: "2024-02-10",
      value: "$1,199"
    },
    { 
      id: 4, 
      name: "ThinkPad X1 Carbon", 
      assetId: "AST-112", 
      category: "Laptop", 
      assignedTo: null, 
      department: null,
      status: "Available", 
      condition: "Good",
      purchaseDate: "2023-11-05",
      value: "$1,899"
    },
    { 
      id: 5, 
      name: "iPad Pro 12.9\"", 
      assetId: "AST-156", 
      category: "Tablet", 
      assignedTo: "James Taylor", 
      department: "Marketing",
      status: "Under Repair", 
      condition: "Fair",
      purchaseDate: "2023-06-15",
      value: "$1,099"
    },
  ];

  const recentRequests = [
    { id: 1, employee: "Robert Brown", asset: "MacBook Pro 14\"", requestDate: "2025-04-10", status: "Pending" },
    { id: 2, employee: "Lisa Anderson", asset: "Wireless Keyboard", requestDate: "2025-04-09", status: "Approved" },
    { id: 3, employee: "David Wilson", asset: "External SSD 1TB", requestDate: "2025-04-08", status: "Pending" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Assigned": return "bg-blue-500/10 text-blue-700 dark:text-blue-400";
      case "Available": return "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400";
      case "Under Repair": return "bg-amber-500/10 text-amber-700 dark:text-amber-400";
      case "Retired": return "bg-slate-500/10 text-slate-700 dark:text-slate-400";
      case "Pending": return "bg-amber-500/10 text-amber-700 dark:text-amber-400";
      case "Approved": return "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const getConditionColor = (condition: string) => {
    switch (condition) {
      case "Excellent": return "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400";
      case "Good": return "bg-blue-500/10 text-blue-700 dark:text-blue-400";
      case "Fair": return "bg-amber-500/10 text-amber-700 dark:text-amber-400";
      case "Poor": return "bg-red-500/10 text-red-700 dark:text-red-400";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Asset Management</h1>
            <p className="text-muted-foreground">Track and manage company assets</p>
          </div>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Add Asset
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
            <div className="flex items-center justify-between">
              <CardTitle>Asset Inventory</CardTitle>
              <div className="relative w-64">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input placeholder="Search assets..." className="pl-10" />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Asset ID</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Assigned To</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Condition</TableHead>
                  <TableHead>Value</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {assets.map((asset) => (
                  <TableRow key={asset.id}>
                    <TableCell className="font-medium">{asset.assetId}</TableCell>
                    <TableCell>{asset.name}</TableCell>
                    <TableCell>{asset.category}</TableCell>
                    <TableCell>
                      {asset.assignedTo ? (
                        <div>
                          <p className="font-medium">{asset.assignedTo}</p>
                          <p className="text-xs text-muted-foreground">{asset.department}</p>
                        </div>
                      ) : (
                        <span className="text-muted-foreground">Unassigned</span>
                      )}
                    </TableCell>
                    <TableCell>
                      <Badge className={getStatusColor(asset.status)}>{asset.status}</Badge>
                    </TableCell>
                    <TableCell>
                      <Badge className={getConditionColor(asset.condition)}>{asset.condition}</Badge>
                    </TableCell>
                    <TableCell>{asset.value}</TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">Edit</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Asset Requests</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentRequests.map((request) => (
                <div key={request.id} className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <p className="font-medium">{request.employee}</p>
                    <p className="text-sm text-muted-foreground">{request.asset}</p>
                    <p className="text-xs text-muted-foreground mt-1">Requested: {request.requestDate}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge className={getStatusColor(request.status)}>{request.status}</Badge>
                    {request.status === "Pending" && (
                      <>
                        <Button variant="outline" size="sm">Approve</Button>
                        <Button variant="outline" size="sm">Reject</Button>
                      </>
                    )}
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

export default Assets;
