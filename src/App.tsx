import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Prepare from "./pages/Prepare";
import CheckIn from "./pages/CheckIn";
import Rules from "./pages/Rules";
import Directions from "./pages/Directions";
import Guides from "./pages/Guides";
import Delivery from "./pages/Delivery";
import CheckOut from "./pages/CheckOut";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/prepare" element={<Prepare />} />
          <Route path="/checkin" element={<CheckIn />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/directions" element={<Directions />} />
          <Route path="/guides" element={<Guides />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/checkout" element={<CheckOut />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
