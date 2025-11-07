import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Employees from "./pages/Employees";
import Attendance from "./pages/Attendance";
import Leave from "./pages/Leave";
import Payroll from "./pages/Payroll";
import Recruitment from "./pages/Recruitment";
import Performance from "./pages/Performance";
import Expenses from "./pages/Expenses";
import Projects from "./pages/Projects";
import Training from "./pages/Training";
import Assets from "./pages/Assets";
import Settings from "./pages/Settings";
import ExitManagement from "./pages/ExitManagement";
import Reports from "./pages/Reports";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/leave" element={<Leave />} />
          <Route path="/payroll" element={<Payroll />} />
          <Route path="/recruitment" element={<Recruitment />} />
          <Route path="/performance" element={<Performance />} />
          <Route path="/expenses" element={<Expenses />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/training" element={<Training />} />
          <Route path="/assets" element={<Assets />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/exit-management" element={<ExitManagement />} />
          <Route path="/reports" element={<Reports />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
