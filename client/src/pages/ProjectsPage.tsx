import { motion } from "framer-motion";
import ProjectsSection from "@/components/projects/ProjectsSection";
import { Helmet } from "react-helmet";

const ProjectsPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Helmet>
        <title>Projects | Aakash Dhar Dubey</title>
        <meta name="description" content="Explore the portfolio of projects by Aakash Dhar Dubey, featuring full stack applications, authentication systems, microservices architecture, and more." />
      </Helmet>
      <ProjectsSection />
    </motion.div>
  );
};

export default ProjectsPage;
