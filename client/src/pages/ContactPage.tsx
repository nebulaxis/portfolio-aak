import { motion } from "framer-motion";
import ContactSection from "@/components/contact/ContactSection";
import { Helmet } from "react-helmet";

const ContactPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Helmet>
        <title>Contact | Aakash Dhar Dubey</title>
        <meta name="description" content="Get in touch with Aakash Dhar Dubey for project inquiries, collaborations, or job opportunities." />
      </Helmet>
      <ContactSection />
    </motion.div>
  );
};

export default ContactPage;
