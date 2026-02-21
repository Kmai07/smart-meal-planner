import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "@/components/AppLayout";
import Dashboard from "@/pages/Dashboard";
import Pantry from "@/pages/Pantry";
import MealChat from "@/pages/MealChat";
import StorePrices from "@/pages/StorePrices";
import BudgetFinder from "@/pages/BudgetFinder";
import Nutrition from "@/pages/Nutrition";
import Blog from "@/pages/Blog";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppLayout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/pantry" element={<Pantry />} />
            <Route path="/chat" element={<MealChat />} />
            <Route path="/prices" element={<StorePrices />} />
            <Route path="/budget" element={<BudgetFinder />} />
            <Route path="/nutrition" element={<Nutrition />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AppLayout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
