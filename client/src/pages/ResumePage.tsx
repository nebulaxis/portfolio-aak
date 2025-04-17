import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { ArrowDownToLine, ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import SectionHeading from "@/components/ui/section-heading";
import GlowButton from "@/components/ui/glow-button";

// Resume page for downloading and viewing Aakash's resume
const ResumePage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for the resume document
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleDownloadResume = () => {
    // Create a downloadable resume file
    const link = document.createElement("a");
    link.href = "/api/resume";
    link.setAttribute("download", "Aakash_Dhar_Dubey_Resume.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.div
      className="py-20 bg-[var(--surface-color)]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Helmet>
        <title>Resume | Aakash Dhar Dubey</title>
        <meta name="description" content="View and download the resume of Aakash Dhar Dubey, Full Stack Developer specialized in MERN Stack, Java Spring Boot, and Microservices architecture." />
      </Helmet>

      <div className="container mx-auto px-6">
        <Link href="/">
          <a className="inline-flex items-center text-primary hover:underline mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </a>
        </Link>

        <SectionHeading 
          title="My Resume" 
          description="View and download my professional resume" 
        />

        <div className="flex justify-center mb-8">
          <GlowButton 
            onClick={handleDownloadResume}
            className="flex items-center gap-2 px-6 py-3"
          >
            <ArrowDownToLine className="h-5 w-5" />
            Download Resume
          </GlowButton>
        </div>

        <div className="bg-[var(--card-color)] rounded-xl p-4 md:p-8 max-w-4xl mx-auto shadow-lg">
          {isLoading ? (
            <div className="flex justify-center items-center h-[800px]">
              <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : (
            <div className="aspect-[8.5/11] bg-white rounded-lg overflow-hidden">
              <iframe 
                src="/api/resume-view" 
                className="w-full h-full"
                title="Resume preview"
              ></iframe>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ResumePage;
