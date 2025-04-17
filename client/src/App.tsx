import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { AnimatePresence } from "framer-motion";
import { useEffect, lazy, Suspense, useState } from "react";
import NotFound from "@/pages/not-found";
import HomePage from "@/pages/HomePage";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/layout/CustomCursor";
import Preloader from "@/components/layout/Preloader";
import ScrollToTop from "@/components/layout/ScrollToTop";
import { ThemeProvider } from "@/context/theme-context";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

// Lazy load pages to improve initial load performance
const AboutPage = lazy(() => import("@/pages/AboutPage"));
const SkillsPage = lazy(() => import("@/pages/SkillsPage"));
const ProjectsPage = lazy(() => import("@/pages/ProjectsPage"));
const ExperiencePage = lazy(() => import("@/pages/ExperiencePage"));
const ContactPage = lazy(() => import("@/pages/ContactPage"));
const ResumePage = lazy(() => import("@/pages/ResumePage"));

function Router() {
  const [location] = useLocation();
  const [isChanging, setIsChanging] = useState(false);

  // Add fancy page transition
  useEffect(() => {
    const handleRouteChange = () => {
      setIsChanging(true);
      
      // Smooth scroll to top with animation
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      
      // Reset changing state after transition finishes
      setTimeout(() => {
        setIsChanging(false);
      }, 600);
    };
    
    handleRouteChange();
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
  const [isLoading, setIsLoading] = useState(true);
  
  // Initialize scroll animations
  useScrollAnimation();
  
  // Simulate initial loading
  useEffect(() => {
    // Hide scrollbar during loading
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    }
    
    // Simulate loading time and then reveal the site
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = '';
    }, 2000);
    
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = '';
    };
  }, []);
  
  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <div className="min-h-screen flex flex-col relative">
          {isLoading ? (
            <Preloader />
          ) : (
            <>
              <CustomCursor />
              <Navbar />
              <main className="flex-grow pt-20 relative">
                {/* Background elements for visual interest */}
                <div className="fixed inset-0 pointer-events-none overflow-hidden">
                  <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse opacity-50"></div>
                  <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl animate-pulse opacity-50 animate-delay-2"></div>
                </div>
                
                <Router />
              </main>
              <Footer />
              <ScrollToTop />
            </>
          )}
        </div>
        <Toaster />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
