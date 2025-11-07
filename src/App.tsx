import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Employees from "./pages/Employees";
import Attendance from "./pages/Attendance";
import Leave from "./pages/Leave";
import Placeholder from "./pages/Placeholder";
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
          <Route path="/payroll" element={<Placeholder title="Payroll" description="Payroll module coming soon" />} />
          <Route path="/recruitment" element={<Placeholder title="Recruitment" description="Recruitment module coming soon" />} />
          <Route path="/performance" element={<Placeholder title="Performance" description="Performance module coming soon" />} />
          <Route path="/expenses" element={<Placeholder title="Expenses" description="Expense management coming soon" />} />
          <Route path="/projects" element={<Placeholder title="Projects" description="Project management coming soon" />} />
          <Route path="/training" element={<Placeholder title="Training" description="Training module coming soon" />} />
          <Route path="/assets" element={<Placeholder title="Assets" description="Asset management coming soon" />} />
          <Route path="/settings" element={<Placeholder title="Settings" description="Settings coming soon" />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
