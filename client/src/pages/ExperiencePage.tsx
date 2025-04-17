import { motion } from "framer-motion";
import TimelineSection from "@/components/experience/TimelineSection";
import { Helmet } from "react-helmet";

const ExperiencePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Helmet>
        <title>Experience & Education | Aakash Dhar Dubey</title>
        <meta name="description" content="Review the professional experience and educational background of Aakash Dhar Dubey, a Full Stack Developer with 1.3+ years of industrial experience." />
      </Helmet>
      <TimelineSection />
    </motion.div>
  );
};

export default ExperiencePage;
