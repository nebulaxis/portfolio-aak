import { motion } from "framer-motion";
import SkillsSection from "@/components/skills/SkillsSection";
import { Helmet } from "react-helmet";

const SkillsPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Helmet>
        <title>Skills & Technologies | Aakash Dhar Dubey</title>
        <meta name="description" content="Explore the skills and technologies used by Aakash Dhar Dubey, including MERN Stack, Java Spring Boot, Docker, Kubernetes, and more." />
      </Helmet>
      <SkillsSection />
    </motion.div>
  );
};

export default SkillsPage;
