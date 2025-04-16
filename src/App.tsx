
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Membership from "./pages/Membership";
import Trainers from "./pages/Trainers";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import FatLossPlan from "./pages/FatLossPlan";
import NotFound from "./pages/NotFound";
import BasicPlan from "./pages/BasicPlan";
import PremiumPlan from "./pages/PremiumPlan";
import UltimatePlan from "./pages/UltimatePlan";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/trainers" element={<Trainers />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/fat-loss-plan" element={<FatLossPlan />} />
          <Route path="/basic-plan" element={<BasicPlan />} />
          <Route path="/premium-plan" element={<PremiumPlan />} />
          <Route path="/ultimate-plan" element={<UltimatePlan />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
