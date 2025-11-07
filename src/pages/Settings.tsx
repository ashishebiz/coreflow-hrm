import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Building2, Users, Calendar, Mail, Shield, Bell } from "lucide-react";

const Settings = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
          <p className="text-muted-foreground">Manage your application settings and preferences</p>
        </div>

        <Tabs defaultValue="company" className="space-y-6">
          <TabsList>
            <TabsTrigger value="company">Company</TabsTrigger>
            <TabsTrigger value="departments">Departments</TabsTrigger>
            <TabsTrigger value="leaves">Leave Types</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="roles">Roles & Permissions</TabsTrigger>
          </TabsList>

          <TabsContent value="company" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building2 className="h-5 w-5" />
                  Company Information
                </CardTitle>
                <CardDescription>Update your company details and branding</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="companyName">Company Name</Label>
                    <Input id="companyName" defaultValue="TechCorp" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="industry">Industry</Label>
                    <Input id="industry" defaultValue="Information Technology" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Company Email</Label>
                    <Input id="email" type="email" defaultValue="hr@techcorp.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" defaultValue="+1 (555) 123-4567" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address">Address</Label>
                  <Input id="address" defaultValue="123 Tech Street, San Francisco, CA 94102" />
                </div>
                <Button>Save Changes</Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="departments" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Departments
                </CardTitle>
                <CardDescription>Manage departments and designations</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <p className="font-medium">Engineering</p>
                    <p className="text-sm text-muted-foreground">45 employees</p>
                  </div>
                  <Button variant="outline" size="sm">Edit</Button>
                </div>
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <p className="font-medium">Product</p>
                    <p className="text-sm text-muted-foreground">18 employees</p>
                  </div>
                  <Button variant="outline" size="sm">Edit</Button>
                </div>
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <p className="font-medium">Design</p>
                    <p className="text-sm text-muted-foreground">12 employees</p>
                  </div>
                  <Button variant="outline" size="sm">Edit</Button>
                </div>
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <p className="font-medium">Marketing</p>
                    <p className="text-sm text-muted-foreground">22 employees</p>
                  </div>
                  <Button variant="outline" size="sm">Edit</Button>
                </div>
                <Button>Add Department</Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="leaves" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Leave Types
                </CardTitle>
                <CardDescription>Configure leave types and policies</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <p className="font-medium">Annual Leave</p>
                      <p className="text-sm text-muted-foreground">20 days per year</p>
                    </div>
                    <Button variant="outline" size="sm">Edit</Button>
                  </div>
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <p className="font-medium">Sick Leave</p>
                      <p className="text-sm text-muted-foreground">10 days per year</p>
                    </div>
                    <Button variant="outline" size="sm">Edit</Button>
                  </div>
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <p className="font-medium">Casual Leave</p>
                      <p className="text-sm text-muted-foreground">5 days per year</p>
                    </div>
                    <Button variant="outline" size="sm">Edit</Button>
                  </div>
                </div>
                <Button>Add Leave Type</Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="notifications" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="h-5 w-5" />
                  Notification Preferences
                </CardTitle>
                <CardDescription>Manage email and in-app notifications</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Leave Requests</Label>
                    <p className="text-sm text-muted-foreground">Get notified when employees submit leave requests</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Attendance Alerts</Label>
                    <p className="text-sm text-muted-foreground">Receive alerts for attendance irregularities</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Payroll Processing</Label>
                    <p className="text-sm text-muted-foreground">Notifications about payroll status</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>System Updates</Label>
                    <p className="text-sm text-muted-foreground">Updates about new features and improvements</p>
                  </div>
                  <Switch />
                </div>
                <Button>Save Preferences</Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="roles" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  Roles & Permissions
                </CardTitle>
                <CardDescription>Manage user roles and access permissions</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <p className="font-medium">Admin</p>
                    <p className="text-sm text-muted-foreground">Full system access</p>
                  </div>
                  <Button variant="outline" size="sm">Edit</Button>
                </div>
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <p className="font-medium">HR Manager</p>
                    <p className="text-sm text-muted-foreground">Manage employees, leave, payroll</p>
                  </div>
                  <Button variant="outline" size="sm">Edit</Button>
                </div>
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <p className="font-medium">Manager</p>
                    <p className="text-sm text-muted-foreground">Team management and approvals</p>
                  </div>
                  <Button variant="outline" size="sm">Edit</Button>
                </div>
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <p className="font-medium">Employee</p>
                    <p className="text-sm text-muted-foreground">Basic self-service access</p>
                  </div>
                  <Button variant="outline" size="sm">Edit</Button>
                </div>
                <Button>Add Role</Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default Settings;
