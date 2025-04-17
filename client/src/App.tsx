import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { AnimatePresence } from "framer-motion";
import { useEffect, lazy, Suspense } from "react";
import NotFound from "@/pages/not-found";
import HomePage from "@/pages/HomePage";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/layout/CustomCursor";
import Preloader from "@/components/layout/Preloader";
import ScrollToTop from "@/components/layout/ScrollToTop";

// Lazy load pages to improve initial load performance
const AboutPage = lazy(() => import("@/pages/AboutPage"));
const SkillsPage = lazy(() => import("@/pages/SkillsPage"));
const ProjectsPage = lazy(() => import("@/pages/ProjectsPage"));
const ExperiencePage = lazy(() => import("@/pages/ExperiencePage"));
const ContactPage = lazy(() => import("@/pages/ContactPage"));
const ResumePage = lazy(() => import("@/pages/ResumePage"));

function Router() {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<Preloader />}>
        <Switch location={location}>
          <Route path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/skills" component={SkillsPage} />
          <Route path="/projects" component={ProjectsPage} />
          <Route path="/experience" component={ExperiencePage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/resume" component={ResumePage} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </AnimatePresence>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen flex flex-col">
        <Preloader />
        <CustomCursor />
        <Navbar />
        <main className="flex-grow pt-20">
          <Router />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
