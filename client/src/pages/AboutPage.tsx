import { motion } from "framer-motion";
import AboutSection from "@/components/about/AboutSection";
import { Helmet } from "react-helmet";

const AboutPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Helmet>
        <title>About Me | Aakash Dhar Dubey</title>
        <meta name="description" content="Learn more about Aakash Dhar Dubey, a Full Stack Developer with experience in MERN Stack, Java Spring Boot, and Microservices architecture." />
      </Helmet>
      <AboutSection />
    </motion.div>
  );
};

export default AboutPage;
