import { DashboardLayout } from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Plus, Filter, Mail, Phone, MapPin } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const employees = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Senior Developer",
    department: "Engineering",
    email: "sarah.j@techcorp.com",
    phone: "+1 234-567-8901",
    location: "New York",
    status: "Active",
    avatar: "SJ"
  },
  {
    id: 2,
    name: "Mike Chen",
    role: "Product Manager",
    department: "Product",
    email: "mike.c@techcorp.com",
    phone: "+1 234-567-8902",
    location: "San Francisco",
    status: "Active",
    avatar: "MC"
  },
  {
    id: 3,
    name: "Emily Davis",
    role: "UX Designer",
    department: "Design",
    email: "emily.d@techcorp.com",
    phone: "+1 234-567-8903",
    location: "Austin",
    status: "Active",
    avatar: "ED"
  },
  {
    id: 4,
    name: "Robert Wilson",
    role: "DevOps Engineer",
    department: "Engineering",
    email: "robert.w@techcorp.com",
    phone: "+1 234-567-8904",
    location: "Seattle",
    status: "On Leave",
    avatar: "RW"
  },
  {
    id: 5,
    name: "Lisa Anderson",
    role: "HR Manager",
    department: "Human Resources",
    email: "lisa.a@techcorp.com",
    phone: "+1 234-567-8905",
    location: "New York",
    status: "Active",
    avatar: "LA"
  },
  {
    id: 6,
    name: "David Martinez",
    role: "Sales Director",
    department: "Sales",
    email: "david.m@techcorp.com",
    phone: "+1 234-567-8906",
    location: "Chicago",
    status: "Active",
    avatar: "DM"
  }
];

const Employees = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Employee Directory</h1>
            <p className="text-muted-foreground">Manage and view all employees</p>
          </div>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add Employee
          </Button>
        </div>

        {/* Filters */}
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col gap-4 md:flex-row">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search by name, role, or department..."
                  className="pl-10"
                />
              </div>
              <Button variant="outline">
                <Filter className="mr-2 h-4 w-4" />
                Filters
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Employee Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {employees.map((employee) => (
            <Card key={employee.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-12 w-12">
                      <AvatarFallback className="bg-primary text-primary-foreground text-lg">
                        {employee.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold">{employee.name}</h3>
                      <p className="text-sm text-muted-foreground">{employee.role}</p>
                    </div>
                  </div>
                  <Badge variant={employee.status === "Active" ? "default" : "secondary"}>
                    {employee.status}
                  </Badge>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Mail className="h-4 w-4" />
                    <span className="truncate">{employee.email}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Phone className="h-4 w-4" />
                    <span>{employee.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>{employee.location}</span>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{employee.department}</span>
                    <Button variant="outline" size="sm">View Profile</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Employees;
